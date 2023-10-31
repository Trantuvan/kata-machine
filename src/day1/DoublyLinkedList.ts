type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;

        //* No item in the linked list
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("Index out of bounds");
        }

        //* add to the end
        if (idx === this.length) {
            this.append(item);
            return;
        }

        //* add to the head
        if (idx === 0) {
            this.prepend(item);
            return;
        }

        //* add in the middle
        this.length++;
        let curr = this.getAt(idx) as Node<T>;
        const node = { value: item } as Node<T>;

        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;

        if (curr.prev) {
            curr.prev.next = curr;
        }
    }

    append(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;

        //* No item in the linked list
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        let curr = this.head;

        for (let i = 0; i < this.length && curr; i++) {
            if (item === curr?.value) {
                break;
            }
            curr = curr.next;
        }

        //* walk off the list not found item
        if (!curr) {
            return;
        }
        return this.removeNode(curr);
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);
        if (!node) {
            return undefined;
        }
        return this.removeNode(node);
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length--;

        //* empty linked list
        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        //* break the linked chain
        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        //* at the head update the head position
        if (node === this.head) {
            this.head = node.next;
        }

        //* at the tail update the tail position
        if (node === this.tail) {
            this.tail = node.prev;
        }

        //* free memory
        node.next = node.prev = undefined;

        return node.value;
    }

    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }
        return curr;
    }
}
