
import SetInterface from './SetInterface';
import RBTree from './RedBlackTree.js';

/**
 * Set representaion
 * @class
 * @implements SetInterface
 * @param {function} comparator - @see Global#defaultComparator
 *
 * @example
 * const set = new Collections.Set();
 */
class Set extends SetInterface {
  constructor(comparator) {
    super();
    this.set = new RBTree(comparator);
  }

  add(element) {
    this.set.insert(element);
    return this;
  }

  has(element) {
    return this.set.contains(element);
  }

  remove(element) {
    this.set.remove(element);
    return this;
  }

  keys() {
    return this.set.keys();
  }

  cardinality() {
    return this.set.size();
  }
}

module.exports = Set;
