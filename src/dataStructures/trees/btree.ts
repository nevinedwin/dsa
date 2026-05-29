

class BTreeNode {

    t: number;
    leaf: boolean;
    keys: any[];
    children: BTreeNode[];

    constructor(t: number, leaf = false) {
        this.t = t;
        this.leaf = leaf;
        this.keys = [];
        this.children = [];
    }

    // insert into non-full node
    insertNonFull(key: any[]) {
        let i = this.keys.length - 1;

        if (this.leaf) {
            this.keys.push(null);
            while (i >= 0 && this.keys[i] > key) {
                this.keys[i + 1] = this.keys[i];
                i--;
            }
            this.keys[i + 1] = key;
        } else {
            // find child
            while (i >= 0 && this.keys[i] > key) i--;
            i++;

            // if the child is full split
            if (this.children[i].keys.length === 2 * this.t - 1) {
                this.splitChild(i);

                if (this.keys[i] < key) i++;
            }

            this.children[i].insertNonFull(key);
        }
    }

    // split child
    splitChild(i: number) {
        let t = this.t;
        let y = this.children[i];
        let z = new BTreeNode(t, y.leaf);
    }
}