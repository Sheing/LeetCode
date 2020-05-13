/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.arr = [];
    traverse(root, this.arr);

    function traverse(root, arr){ //TreeNode root, Target arr.
        // Stop case when both left:null && right:null;
      if (root === null) {
          return arr;
      }
      // traverse/ travel across left root if not null 
      arr = traverse(root.left, arr);
      // Smallest number left to right.
      arr.push(root.val);
      // traverse/ travel across right root if not null 
      arr = traverse(root.right, arr);
      return arr;
    }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
   /*
        [ 3, 7, 9, 15, 20 ]
        [ 7, 9, 15, 20 ]
        [ 9, 15, 20 ]
        [ 15, 20 ]
        [ 20 ]
   */
   return this.arr.shift();
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
     /*
        [ 9, 15, 20 ]
        [ 15, 20 ]
        [ 20 ]
        []
     */
     return this.arr.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */