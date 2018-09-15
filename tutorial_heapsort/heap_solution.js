// create empty object
minheaper = {};

// define insert function for min binary heap
function minheap_insert(heap, new_element) {
    heap.push(new_element);
    var index = heap.length - 1;
    while(index > 0){
      var parent = Math.floor((index+1)/2)-1;
      if(heap[parent] > new_element){
        var temp = heap[parent];
        heap[parent] = new_element;
        heap[index] = temp;
      }
      index = parent;
    }
    // STENCIL: implement your min binary heap insert operation
}

// assign insert function within minheaper object
minheaper.insert = minheap_insert;
/* Note: because the minheap_insert function is an object, we can assign
      a reference to the function within the minheap object, which can be called
      as minheap.insert
*/

// define extract function for min binary heap
function minheap_extract(heap) {
    var min = heap[0];
    heap[0] = heap.pop();
    var index = 0;
    while(true){
      var child1 = (index+1)*2;
      var child2 = child1 -1;
      var toSwap = null;
      if(heap[index] > heap[child1]){
        toSwap = child1;
      }
      if(heap[index] > heap[child2] &&
         (heap[child1] == null || (heap[child1] !== null && heap[child2] < heap[child1]))){
        toSwap = child2;
      }
      if(toSwap == null){
        break;
      }
      var temp = heap[toSwap];
      heap[toSwap] = heap[index];
      heap[index] = temp;
      index = toSwap;
    }
    return min;
    // STENCIL: implement your min binary heap extract operation
}

// assign extract function within minheaper object
minheaper.extract = minheap_extract;
    // STENCIL: ensure extract method is within minheaper object
