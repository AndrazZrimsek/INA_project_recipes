import networkx as nx

def get_main_measure(G, nodes, data="ingredients", term_frequency=None, previous_tags=[]):
    # Get main 5 ingredients from all recipe nodes combined
    properties = {}

    for node in nodes:
        if data == "ingredients":
            if G.nodes(data=True)[node]["data"]["type"] != "recipe":
                continue
            for ingredient in G.nodes(data=True)[node]["data"]["ingredients"]:
                if "term" not in ingredient:
                    continue
                name = ingredient["term"]["slug"]
                if name in previous_tags:
                    continue
                if name in properties:
                    properties[name] += 1
                else:
                    properties[name] = 1
        elif data == "tags":
            if G.nodes(data=True)[node]["data"]["type"] != "recipe":
                continue
            for tag in G.nodes(data=True)[node]["data"]["tags"][:-1]:
                if tag == "\xa0Josh Eagleton" or tag == "Good Food":
                    continue
                if tag in previous_tags:
                    continue
                if tag in properties:
                    properties[tag] += 1
                else:
                    properties[tag] = 1

    #calculate tfidf
    if term_frequency is not None:
        for key in properties.keys():
            properties[key] = properties[key] / term_frequency[key]

    # if ingredient_frequency is not None:
    #     for key in properties.keys():
    #         properties[key] = properties[key] / ingredient_frequency[key]

    properties = sorted(properties.items(), key=lambda item: item[1], reverse=True)
    return properties[:2]
    
    

from communities import recipe_subgraph

def get_tag_document_frequency(G):
    tag_document_frequency = {}
    for node in G.nodes:
        if G.nodes(data=True)[node]["data"]["type"] == "recipe":
            for tag in G.nodes(data=True)[node]["data"]["tags"][:-1]:
                if tag in tag_document_frequency:
                    tag_document_frequency[tag] += 1
                else:
                    tag_document_frequency[tag] = 1
    return tag_document_frequency

def get_ingredient_document_frequency(G):
    ingredient_document_frequency = {}
    for node in G.nodes:
        if G.nodes(data=True)[node]["data"]["type"] == "recipe":
            for ingredient in G.nodes(data=True)[node]["data"]["ingredients"]:
                if "term" not in ingredient:
                    continue
                name = ingredient["term"]["slug"]
                if name in ingredient_document_frequency:
                    ingredient_document_frequency[name] += 1
                else:
                    ingredient_document_frequency[name] = 1
    return ingredient_document_frequency

def get_node_centrality_recipes(G):
    recipe_nodes = [node for node, data in G.nodes(data=True) if data["data"]["type"] == "recipe"]
    ingredient_nodes = [node for node, data in G.nodes(data=True) if data["data"]["type"] == "ingredients"]
    recipe_graph = recipe_subgraph(G, recipe_nodes=recipe_nodes, ingredient_nodes=ingredient_nodes)
    closeness = nx.closeness_centrality(recipe_graph)
    top_nodes = sorted(closeness.items(), key=lambda item: item[1], reverse=True)
    return top_nodes[:2]

def create_tree_graph(community_tree, G, G_original, measure="ingredients", term_frequency=None, previous_tags=[]):
    subtrees = community_tree.communitySubtrees
    new_id = len(G.nodes)
    best_measure = get_main_measure(G_original, community_tree.G.nodes, data=measure, previous_tags=previous_tags)[0]
    # print(best_measure)
    G.add_node(new_id, type="root", name=best_measure[0])
    if subtrees is None:
        if measure == "ingredients":
            main_ingredients = get_main_measure(G_original, community_tree.G.nodes, data="ingredients", term_frequency=term_frequency, previous_tags=previous_tags)
            # print(f'Main ingredients: {main_ingredients}')
            for ingredient in main_ingredients:
                ingredient_id = len(G.nodes)
                G.add_node(ingredient_id, type="ingredient", name=ingredient[0], count=ingredient[1])
                G.add_edge(new_id, ingredient_id)
        elif measure == "tags":
            main_tags = get_main_measure(G_original, community_tree.G.nodes, data="tags", term_frequency=term_frequency, previous_tags=previous_tags)
            # print(f'Main tags: {main_tags}')
            for tag in main_tags:
                tag_id = len(G.nodes)
                G.add_node(tag_id, type="tag", name=tag[0], count=tag[1])
                G.add_edge(new_id, tag_id)
        # elif measure == "closeness":
        #     top_nodes = get_node_centrality_recipes(community_tree.G, previous_tags=previous_tags)
        #     # print(f'Top nodes: {top_nodes}')
        #     for node in top_nodes:
        #         node_id = len(G.nodes)
        #         G.add_node(node_id, type="recipe", name=community_tree.G.nodes(data=True)[node[0]]["data"]["slug"], closeness=node[1])
        #         G.add_edge(new_id, node_id)
        # for node in community_tree.G.nodes:
        #     #only add recipe nodes
        #     if community_tree.G.nodes[node]["data"]["type"] == "recipe":
        #         G.add_node(node, **community_tree.G.nodes[node])
        #         G.add_edge(new_id, node)
    else:
        for subtree in subtrees.values():
            if measure == "ingredients":
                frequency = get_ingredient_document_frequency(community_tree.G)
            elif measure == "tags":
                frequency = get_tag_document_frequency(community_tree.G)
            else:
                frequency = None
            subtree_id = create_tree_graph(subtree, G, G_original, measure=measure, term_frequency=frequency, previous_tags=previous_tags+[best_measure[0]])
            G.add_edge(new_id, subtree_id)

    return new_id

from communities import recipe_subgraph

from visualization import create_tree_graph
import networkx as nx
import matplotlib.pyplot as plt

def plot_all(G, community_tree):

    tree_graph = nx.Graph()
    root_id = create_tree_graph(community_tree, tree_graph, G, measure="ingredients")


    plt.figure(figsize=(20,20))
    pos = nx.nx_agraph.graphviz_layout(tree_graph, prog='twopi', root=root_id) ##Needs graphviz
    nx.draw_networkx(tree_graph, pos=pos, 
                    with_labels=False, node_size=0.5,
                    edge_color='lightgray',
                    node_color='gray') 
    node_labels = nx.get_node_attributes(tree_graph, 'name')
    nx.draw_networkx_labels(tree_graph, pos, labels=node_labels, font_size=8)
    plt.show()

    tree_graph = nx.Graph()
    root_id = create_tree_graph(community_tree, tree_graph, G, measure="tags")

    plt.figure(figsize=(20,20))
    pos = nx.nx_agraph.graphviz_layout(tree_graph, prog='twopi', root=root_id) ##Needs graphviz
    # root_pos = pos[root_id]
    # for key in pos.keys():
    #     pos[key] = (pos[key][1] - root_pos[1] + root_pos[0], pos[key][0] - root_pos[0] + root_pos[1])
    nx.draw_networkx(tree_graph, pos=pos, 
                    with_labels=False, node_size=0.5,
                    edge_color='lightgray',
                    node_color='gray') 
    node_labels = nx.get_node_attributes(tree_graph, 'name')

    # Rotate all position coordinates by 90 degrees around root node

    nx.draw_networkx_labels(tree_graph, pos, labels=node_labels, font_size=8)
    plt.show()