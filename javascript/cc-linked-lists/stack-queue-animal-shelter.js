const { Queue } = require('./stack-and-queue');

class AnimalShelter {
  constructor() {
    this.catQueue = new Queue();
    this.dogQueue = new Queue();
  }

  enqueue(animal) {
    if (animal === 'dog') {
      if (this.dogQueue.front) {
        this.dogQueue.back = animal;
      } else {
        this.dogQueue.front = animal;
      }
    } else if (animal === 'cat') {
      if (this.catQueue.front) {
        this.catQueue.back = animal;
      } else {
        this.catQueue.front = animal;
      }
    }
  }

  dequeue(pref) {
    if (pref === 'dog') {
      while (!this.dogQueue.isEmpty()) {
        this.dogQueue.push(this.dogQueue.front);
      }
      return this.dogQueue;
    } else if (pref === 'cat') {
      while (!this.catQueue.isEmpty()) {
        this.catQueue.push(this.catQueue.front);
      }
      return this.catQueue;
    }
    return null;
  }
}


let queue = new AnimalShelter();

queue.enqueue('dog');
queue.enqueue('dog');
queue.enqueue('cat');
queue.enqueue('cat');


queue.dequeue('dog');
// queue.dequeue('cat');
console.log(queue);


module.exports = {
  AnimalShelter
};
