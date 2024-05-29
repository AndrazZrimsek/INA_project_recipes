from cdlib import algorithms
import networkx as nx
import community as community_louvain
import matplotlib.pyplot as plt

from collections import Counter

class Community_tree():
    def __init__(self, G, max_depth = 5, depth=1, parent=None):
        """Initializes a community tree object. The tree is built by recursively dividing the graph into communities.
        
        Args:
            G (nx.Graph): The graph to be divided into communities.
            max_depth (int, optional): The maximum depth of the tree. Defaults to 5.
            depth (int, optional): The depth of the current node in the tree. Defaults to 1.
            parent (Community_tree, optional): The parent node of the current node. Defaults to None."""
        
        self.parent = parent
        self.G = G
        self.depth = depth
        self.max_depth = max_depth
        
        node_communities = self.calculate_communities()
        community_nodes = {key: [] for key in node_communities.values()}
        for node, id in node_communities.items():
            community_nodes[id].append(node)

        # Dict of communities and nodes
        self.communities = community_nodes

        # Dict of Community Trees for communities
        self.communitySubtrees = None

        self.build_community_tree()

        self.ingredient_counter = self.get_ingredient_counter()

    def build_community_tree(self):
        if self.depth == self.max_depth:
            return
        
        self.communitySubtrees = {}

        for community_id, nodes in self.communities.items():
            community_subgraph = self.G.subgraph(nodes)
            self.communitySubtrees[community_id] = Community_tree(community_subgraph, self.max_depth, self.depth+1, self)

    def get_most_similar_community(self, ingredients):
        if self.communitySubtrees is None:
            return self.communities

        most_similar_community = None
        max_similarity = 0
        for community in self.communitySubtrees.values():
            similarity = community.get_similarity(ingredients)
            if similarity > max_similarity:
                max_similarity = similarity
                most_similar_community = community

        return most_similar_community
    
    def get_similarity(self, ingredients):
        count = 0
        for ingredient in ingredients:
            count += self.ingredient_counter.get(ingredient, 0)
        return count#/sum(self.ingredient_counter.values())

    def calculate_communities(self):
        return community_louvain.best_partition(self.G)
    
    def get_communities(self, depth=None):
        if depth is None:
            return self.communities
        elif depth == self.depth:
            return self.communities
        else:
            communities = []
            for subcommunity in self.communitySubtrees.values():
                communities += [value for key, value in subcommunity.get_communities(depth).items()]

            community_dict = {}
            for i, community in enumerate(communities):
                community_dict[i] = community
            return community_dict
        
    def get_ingredient_counter(self):
        community_ingredients = []
        for node, data in self.G.nodes(data=True):
            if self.G.nodes(data=True)[node]["data"]["type"] == "recipe":
                for ingredient in self.G.neighbors(node):
                    community_ingredients.append(self.G.nodes(data=True)[ingredient]["data"]["term"]["slug"])
        
        return Counter(community_ingredients)
    

def tag_frequency(G):
    tag_frequency = Counter()
    all_tags = set()
    for node, data in G.nodes(data=True):
        if data["data"]["type"] == "recipe":
            tag_frequency.update(data["data"]["tags"][:-1])
            all_tags.update(data["data"]["tags"][:-1])
    tag_inverse_frequency = {tag: 1/freq if freq>5 else 0 for tag, freq in tag_frequency.items()}
    return tag_inverse_frequency

def most_common_tags_community(G, partition):
    partition_tags = {}
    print("Algorithm: Louvain")
    for node, community_id in partition.items():
        if G.nodes(data=True)[node]["data"]["type"] == "recipe":
            partition_tags[community_id] = partition_tags.get(community_id, []) + G.nodes(data=True)[node]["data"]["tags"][:-1]

    tag_document_frequency = Counter()
    for tags in partition_tags.values():
        tag_document_frequency.update(set(tags))
            
    for community_id, tags in partition_tags.items():
        counted_tags = Counter(tags)
        tag_inverse_frequency = tag_frequency(G)
        cf_tags = {tag: freq * tag_inverse_frequency[tag] for tag, freq in counted_tags.items()}
        sorted_cf = sorted(cf_tags.items(), key=lambda item: item[1], reverse=True)
        all_contained = sum([1 for tag in sorted_cf if tag[1] == 1])

        tfidf_tags = {tag: 1/tag_document_frequency[tag] * freq for tag, freq in counted_tags.items()}
        sorted_tfidf = sorted(tfidf_tags.items(), key=lambda item: item[1], reverse=True)

        size_of_community = list(partition.values()).count(community_id)
        if size_of_community > 3:
            print(f"Community {community_id} (size={size_of_community}): {sorted_tfidf[:8]},  Number tags all contained: {all_contained}")


    print("###############################")

# def most_common_tags_cdlib(partition, algorithm_name):
#     partition_tags = {}
#     print(f"Algorithm: {algorithm_name}")
#     for i, community in enumerate(partition.communities):
#         for node in community:
#             if G.nodes(data=True)[node]["data"]["type"] == "recipe":
#                 partition_tags[i] = partition_tags.get(i, []) + G.nodes(data=True)[node]["data"]["tags"][:-1]
            
#     for community_id, tags in partition_tags.items():
#         counted_tags = Counter(tags)
#         tfidf_tags = {tag: freq * tag_inverse_frequency[tag] for tag, freq in counted_tags.items()}
#         sorted_tfidf = sorted(tfidf_tags.items(), key=lambda item: item[1], reverse=True)
#         all_contained = sum([1 for tag in sorted_tfidf if tag[1] == 1])
#         size_of_community = len(partition.communities[community_id])
#         if size_of_community > 3:
#             print(f"Community {community_id} (size={size_of_community}): {sorted_tfidf[:5]}, Number tags all contained: {all_contained}")
    
#     print("###############################")

def calculate_comunities(G):
    communities = {}
    partition = community_louvain.best_partition(G)
    most_common_tags_community(G, partition)
    # partition2 = algorithms.walktrap(G)
    # communities["Walktrap"] = partition2
    # most_common_tags_cdlib(partition2, "Walktrap")
    # partition3 = algorithms.label_propagation(G)
    # communities["Label Propagation"] = partition3
    # most_common_tags_cdlib(partition3, "Label Propagation")
    # partition4 = algorithms.leiden(G)
    # communities["Leiden"] = partition4
    # most_common_tags_cdlib(partition4, "Leiden")
    # partition6 = algorithms.r_spectral_clustering(G, 3)
    # communities["Spectral Clustering"] = partition6
    # most_common_tags_cdlib(partition6, "Spectral Clustering")

    return partition

def ingredients_subgraph(G, recipe_nodes, ingredient_nodes):
    ingredient_graph = nx.Graph(name="Ingredient Graph")
    ingredient_graph.add_nodes_from(ingredient_nodes)
    for node in recipe_nodes:
        neighbors = list(G.neighbors(node))
        neighbour_pairs = [(neighbors[i], neighbors[j]) for i in range(len(neighbors)) for j in range(i+1, len(neighbors))]
        for pair in neighbour_pairs:
            if ingredient_graph.has_edge(pair[0], pair[1]):
                ingredient_graph[pair[0]][pair[1]]["weight"] += 1
            else:
                ingredient_graph.add_edge(pair[0], pair[1])
                ingredient_graph[pair[0]][pair[1]]["weight"] = 1
    
    return ingredient_graph

def recipe_subgraph(G, recipe_nodes, ingredient_nodes, trim=False, threshold=2):
    recipe_graph = nx.Graph(name="Recipe Graph")
    recipe_graph.add_nodes_from(recipe_nodes)
    for node in ingredient_nodes:
        neighbors = list(G.neighbors(node))
        neighbour_pairs = [(neighbors[i], neighbors[j]) for i in range(len(neighbors)) for j in range(i+1, len(neighbors))]
        for pair in neighbour_pairs:
            if recipe_graph.has_edge(pair[0], pair[1]):
                recipe_graph[pair[0]][pair[1]]["weight"] += 1
            else:
                recipe_graph.add_edge(pair[0], pair[1])
                recipe_graph[pair[0]][pair[1]]["weight"] = 1

    if trim:
        edges_to_remove = [(u, v) for u, v, d in recipe_graph.edges(data=True) if d["weight"] <= threshold]
        recipe_subgraph.remove_edges_from(edges_to_remove)
        recipe_subgraph = recipe_subgraph.subgraph(sorted(nx.connected_components(recipe_subgraph), key=len, reverse=True)[0])
        return recipe_subgraph

    return recipe_graph