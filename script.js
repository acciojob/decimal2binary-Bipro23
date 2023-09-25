
  //your code here
  
  // Function to calculate the minimum cost of connecting ropes
function minCostToConnectRopes(arr) {
    if (arr.length < 2) {
        return 0;
    }

    // Create a min-heap (priority queue)
    const minHeap = new MinHeap(arr);

    let totalCost = 0;

    // Connect ropes until there is only one rope left
    while (minHeap.size() > 1) {
        const firstMin = minHeap.extractMin();
        const secondMin = minHeap.extractMin();
        const newRope = firstMin + secondMin;
        totalCost += newRope;
        minHeap.insert(newRope);
    }

    return totalCost;
}

// MinHeap class
class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.size() === 0) {
            return null;
        }
        if (this.size() === 1) {
            return this.heap.pop();
        }
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    heapifyUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            this.heapifyUp(parentIndex);
        }
    }

    heapifyDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallestIndex = index;

        if (leftChildIndex < this.size() && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
            smallestIndex = leftChildIndex;
        }
        if (rightChildIndex < this.size() && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
            smallestIndex = rightChildIndex;
        }

        if (smallestIndex !== index) {
            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            this.heapifyDown(smallestIndex);
        }
    }
}



  
 