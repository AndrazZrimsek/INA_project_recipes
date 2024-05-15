import asyncio
import json
import networkx as nx
import matplotlib.pyplot as plt
from tqdm import tqdm
import pickle

node_map = [
    {
        "field": "ingredients",
        "groupBy": lambda x: x["term"]["slug"],
    },
    # {
    #     "field": "tags",
    #     "groupBy": lambda x: x,
    # },
    # {
    #     "field": "authors",
    #     "groupBy": lambda x: x,
    # },
]


def surreal_id_to_id(id: str):
    return id.replace("recipe:\u27e8", "").replace("\u27e9", "")


def json_to_graph(jsn: list, node_map_array: dict):
    G = nx.Graph(name="recipeGraph")

    for recipe in tqdm(jsn):
        i = surreal_id_to_id(recipe["id"])
        n = G.add_node(i, title=recipe["title"])
        for grp in node_map:
            field_name = grp["field"]
            lmbd = grp["groupBy"]
            for item in recipe[field_name]:
                try:
                    item_id = lmbd(item)
                except:
                    print("SKIPED")
                    continue
                G.add_node(item_id, data=item)
                G.add_edge(i, item_id, type=field_name)

    return G


def main():
    INPUT_NAME = "out_10000"
    with open(f"{INPUT_NAME}.json") as f:
        jsn = json.load(f)
        G = json_to_graph(jsn, node_map)

        with open(f"{INPUT_NAME}.pickle", "wb") as f:
            pickle.dump(G, f)


if __name__ == "__main__":
    main()
