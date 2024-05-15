import pickle
import networkx as nx


def read_pickle_graph(path: str) -> nx.Graph:
    with open(path, "rb") as f:
        G = pickle.load(f)

    return G


def main():
    # G = read_pickle_graph("../graph_data/out.pickle")
    # G = read_pickle_graph("../graph_data/out_1000.pickle")
    G = read_pickle_graph("../graph_data/out_10000.pickle")
    print(len(G))
    # print(G.degree)


if __name__ == "__main__":
    main()
