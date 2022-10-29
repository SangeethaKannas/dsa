==============================================================================================

Given a binary tree, find and return the largest path from root to leaf.

Here's an example and some starter code:

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

def largest_path_sum(tree):
  # Fill this in.

tree = Node(1)
tree.left = Node(3)
tree.right = Node(2)
tree.right.left = Node(4)
tree.left.right = Node(5)
#    1
#  /   \
# 3     2
#  \   /
#   5 4
print(largest_path_sum(tree))
# [1, 3, 5]

==============================================================================================

Given a node in a binary search tree (may not be the root), find the next largest node in the binary search tree (also known as an inorder successor). The nodes in this binary search tree will also have a parent field to traverse up the tree.

Here's an example and some starter code:

class Node:
  def __init__(self, value, left=None, right=None, parent=None):
    self.value = value
    self.left = left
    self.right = right
    self.parent = parent

  def __repr__(self):
    return f"(Value: {self.value}, Left: {self.left}, Right: {self.right})"

def inorder_successor(node):
  # Fill this in.

tree = Node(3)
tree.left = Node(2)
tree.right = Node(4)
tree.left.parent = tree
tree.right.parent = tree
tree.left.left = Node(1)
tree.left.left.parent = tree.left
tree.right.right = Node(5)
tree.right.right.parent = tree.right
#     3
#    / \
#   2   4
#  /     \
# 1       5
print(inorder_successor(tree.left))
# 3
print(inorder_successor(tree.right))
# 5

==============================================================================================
Given a binary tree and an integer k, filter the binary tree such that its leaves don't contain the value k. Here are the rules:

- If a leaf node has a value of k, remove it.
- If a parent node has a value of k, and all of its children are removed, remove it.

Here's an example and some starter code:

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __repr__(self):
    return f"value: {self.value}, left: ({self.left.__repr__()}), right: ({self.right.__repr__()})"

def filter(tree, k):
  # Fill this in.

#     1
#    / \
#   1   1
#  /   /
# 2   1
n5 = Node(2)
n4 = Node(1)
n3 = Node(1, n4)
n2 = Node(1, n5)
n1 = Node(1, n2, n3)

print(filter(n1, 1))
#     1
#    /
#   1
#  /
# 2
# value: 1, left: (value: 1, left: (value: 2, left: (None), right: (None)), right: (None)), right: (None)

==============================================================================================
/**
 * 
 * You are given the root of a binary tree. Find and return the largest subtree of that tree, which is a valid binary search tree.
 */

function bst() {
 
 
}

==============================================================================================
Given a binary search tree (BST) and a value s, split the BST into 2 trees, where one tree has all values less than or equal to s, and the other tree has all values greater than s while maintaining the tree structure of the original BST. You can assume that s will be one of the node's value in the BST. Return both tree's root node as a tuple.

Here's an example and some starting code:

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __repr__(self):
    if self.left and self.right:
      return f"({self.value}, {self.left}, {self.right})"
    if self.left:
      return f"({self.value}, {self.left})"
    if self.right:
      return f"({self.value}, None, {self.right})"
    return f"({self.value})"

def split_bst(bst, s):
  # Fill this in.

n2 = Node(2)
n1 = Node(1, None, n2)

n5 = Node(5)
n4 = Node(4, None, n5)

root = Node(3, n1, n4)

print(root)
# (3, (1, (2)), (4, None, (5)))
# How the tree looks like
#     3
#   /   \
#  1     4
#   \     \
#    2     5

print(split_bst(root, 2))
# ((1, None, (2)), (3, None, (4, None, (5))))
# Split into two trees
# 1    And   3
#  \          \
#   2          4
#               \
#                5

==============================================================================================

Given a binary tree, find all duplicate subtrees (subtrees with the same value and same structure) and return them as a list of list [subtree1, subtree2, ...] where subtree1 is a duplicate of subtree2 etc.

Here's an example and some starter code:

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __repr__(self):
    if self.left and self.right:
      return f"({self.value}, {self.left}, {self.right})"
    if self.left:
      return f"({self.value}, {self.left})"
    if self.right:
      return f"({self.value}, None, {self.right})"
    return f"({self.value})"

def dup_trees(root):
  # Fill this in.

n3_1 = Node(3)
n2_1 = Node(2, n3_1)
n3_2 = Node(3)
n2_2 = Node(2, n3_2)
n1 = Node(1, n2_1, n2_2)
# Looks like
#     1
#    / \
#   2   2
#  /   /
# 3   3

print(dup_trees(n1))
# [[(3), (3)], [(2, (3)), (2, (3))]]
# There are two duplicate trees
#
#     2
#    /
#   3
# and just the leaf
#
# 3

==============================================================================================
