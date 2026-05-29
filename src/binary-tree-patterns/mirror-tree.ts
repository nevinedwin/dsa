
class Node<T> {
    value: T;
    left: Node<T> | null = null;
    right: Node<T> | null = null;

    constructor(val: T) {
        this.value = val;
    }
}

type NodeType<T> = Node<T> | null;

function swap<T>(root: NodeType<T>): NodeType<T> {
    if (root === null) return root;
    [root.left, root.right] = [root?.right, root?.left];

    return root;
}


function mirrorTreeRecc<T>(root: NodeType<T>) {
    if (root === null) return root;
    swap(root);
    mirrorTreeRecc(root.left);
    mirrorTreeRecc(root.right);
    return root;
}


function mirrorTreeIte<T>(root: NodeType<T>): NodeType<T> {
    if (root === null) return root;
    const q: NodeType<T>[] = [root];

    while (q.length > 0) {
        const curr = q.shift()!;
        swap(curr)
        if (curr.left) {
            q.push(curr.left);
        }
        if (curr.right) {
            q.push(curr.right);
        }
    }
    return root;
}


const root1 = new Node<number>(1);
root1.left = new Node<number>(2);
root1.right = new Node<number>(3);
root1.left.left = new Node<number>(4);

// const root2 = new Node<number>(1);
// root2.left = new Node<number>(2);
// root2.right = new Node<number>(3);
// root2.left.left = new Node<number>(4);
console.log(root1);

console.log(mirrorTreeRecc(root1));
console.log(mirrorTreeIte(root1));

export { };