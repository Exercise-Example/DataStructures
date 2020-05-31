// const BST = require('./BSTInsert')

function BST (value){
  this.value = value
  this.left = null
  this.right= null
}

BST.prototype.insert = function(value){
  console.log('this.left' , this.left)
  if (value <= this.value){
    if(!this.left) this.left = new BST(value)
    else {

      console.log('this.value' , this.value)
      console.log('value' , value)
      this.left.insert(value)}
  }
  else if (value > this.value){
    if(!this.right) this.right = new BST(value)
    else this.right.insert(value)
  }
}



const bst = new BST(50)
bst.insert(30)
bst.insert(70)
bst.insert(20)

console.log(bst)