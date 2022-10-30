==============================================================================================
Given a list of meetings that will happen during a day, find the minimum number of meeting rooms that can fit all meetings.

Each meeting will be represented by a tuple of (start_time, end_time), where both start_time and end_time will be represented by an integer to indicate the time. 
start_time will be inclusive, and end_time will be exclusive, meaning a meeting of (0, 10) and (10, 20) will only require 1 meeting room.

Here's some examples and some starting code:

print(meeting_rooms([(0, 10), (10, 20)]))
# 1

print(meeting_rooms([(20, 30), (10, 21), (0, 50)]))
# 3 (all meetings overlap at time 20)
 
   Answer
     1. sort the array based on lowest starting time
     2. 

==============================================================================================

Given a list of points as a tuple (x, y) and an integer k, find the k closest points to the origin (0, 0).

Here's an example and some starter code:

def closest_points(points, k):
  # Fill this in.

print(closest_points([(0, 0), (1, 2), (-3, 4), (3, 1)], 2))
# [(1, 2), (0, 0)]

==============================================================================================
	
Given a list of undirected edges which represents a graph, find out the number of connected components.

def num_connected_components(edges):
	# Fill this in.

print(num_connected_components([(1, 2), (2, 3), (4, 1), (5, 6)]))
# 2

================================================================================================
==========================================================================================
Given a sorted linked list of integers, remove all the duplicate elements in the linked list so that all elements in the linked list are unique.

Here's an example and some starter code:

class Node:
  def __init__(self, value, next=None):
    self.value = value
    self.next = next

  def __repr__(self):
    return f"({self.value}, {self.next})"


def remove_dup(lst):
  # Fill this in.

lst = Node(1, Node(2, Node(2, Node(3, Node(3)))))

remove_dup(lst)
print(lst)
# (1, (2, (3, None)))

=========================================================================================

Given 3 sorted lists, find the intersection of those 3 lists.

Here's an example and some starter code.

def intersection(list1, list2, list3):
  # Fill this in.

print(intersection([1, 2, 3, 4], [2, 4, 6, 8], [3, 4, 5]))
# [4]

==========================================================================================

Given a matrix, transpose it. Transposing a matrix means the rows are now the column and vice-versa.

Here's an example:

def transpose(mat):
  # Fill this in.

mat = [
    [1, 2, 3],
    [4, 5, 6],
]

print(transpose(mat))
# [[1, 4],
#  [2, 5],
#  [3, 6]]

==========================================================================================

Given a numerator and a denominator, find what the equivalent decimal representation is as a string. 
If the decimal representation has recurring digits, then put those digits in brackets (ie 4/3 should be represented by 1.(3) to represent 1.333...).
Do not use any built in evaluator functions like python's eval. You can also assume that the denominator will be nonzero.

Here's some examples and some starter code:

def frac_to_dec(numerator, denominator):
  # Fill this in.

print(frac_to_dec(-3, 2))
# -1.5

print(frac_to_dec(4, 3))
# 1.(3)

print(frac_to_dec(1, 6))
# 0.1(6)

==========================================================================================

N-Queens
 - is the problem where you find a way to put n queens on a nxn chess board without them being able to attack each other. 
 Given an integer n, return 1 possible solution by returning all the queen's position.

Here's an example and some starter code:

def n_queens(n):
  # Fill this in.

print(n_queens(5))
# There can be many answers
# [(0, 0), (1, 2), (2, 4), (3, 1), (4, 3)]

# Q . . . .
# . . . Q .
# . Q . . .
# . . . . Q
# . . Q . .

==========================================================================================

Given a list of tasks (each task will be represented by a string), and a positive integer n representing the time it takes to run the same task again, find the minimum amount of time needed to run all tasks.

def schedule_tasks(tasks, n):
  # Fill this in.

print(schedule_tasks(['q', 'q', 's', 'q', 'w', 'w'], 4))
# print 6
# one of the possible orders to run the task would be
# 'q', 'w', idle, idle, 'q', 'w'

==========================================================================================
Given a 2d n x m matrix where each cell has a certain amount of change on the floor, your goal is to start from the top left corner mat[0][0] and end in the bottom right corner mat[n - 1][m - 1] with the most amount of change. You can only move either left or down.

Here's some starter code:

def max_change(mat):
  # Fill this in.

mat = [
    [0, 3, 0, 2],
    [1, 2, 3, 3],
    [6, 0, 3, 2]
]

print(max_change(mat))
# 13

=============================================================================================================

A maze is a matrix where each cell can either be a 0 or 1. A 0 represents that the cell is empty, and a 1 represents a wall that cannot be walked through. You can also only travel either right or down.

Given a nxm matrix, find the number of ways someone can go from the top left corner to the bottom right corner. You can assume the two corners will always be 0.

Example:

Input: [[0, 1, 0], [0, 0, 1], [0, 0, 0]]
# 0 1 0
# 0 0 1
# 0 0 0
Output: 2

The two paths that can only be taken in the above example are: down -> right -> down -> right, and down -> down -> right -> right.

Here's some starter code:

def paths_through_maze(maze):
  # Fill this in.

print(paths_through_maze([[0, 1, 0],
                          [0, 0, 1],
                          [0, 0, 0]]))
# 2

==================================================================================================
Reshaping a matrix means to take the same elements in a matrix but change the row and column length. 
This means that the new matrix needs to have the same elements filled in the same row order as the old matrix. 
Given a matrix, a new row size x and a new column size y, reshape the matrix. If it is not possible to reshape, return None.

Here's an example and some starter code.

def reshape_matrix(mat, x, y):
  # Fill this in.

print(reshape_matrix([[1, 2], [3, 4]], 1, 4))
# [[1], [2], [3], [4]]

print(reshape_matrix([[1, 2], [3, 4]], 2, 3))
# None

==============================================================================================
Pascal's Triangle is a triangle where all numbers are the sum of the two numbers above it. Here's an example of the Pascal's Triangle of size 5.

    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1

Given an integer n, generate the n-th row of the Pascal's Triangle.

Here's an example and some starter code.

def pascal_triangle_row(n):
  # Fill this in.

print(pascal_triangle_row(6))
# [1, 5, 10, 10, 5, 1]

==============================================================================================

Given a list of points, an interger k, and a point p, find the k closest points to p.

Here's an example and some starter code:

class Point:
  def __init__(self, x=0, y=0):
    self.x = x
    self.y = y

  def __repr__(self):
    return f"({self.x}, {self.y})"

def closest_points(points, k, p):
  # Fill this in.

points = [
    Point(0, 0),
    Point(1, 1),
    Point(2, 2),
    Point(3, 3),
]
print(closest_points(points, 2, Point(0, 2)))
# [(0, 0), (1, 1)]

================================================================================================

Given a list of possible coins in cents, and an amount (in cents) n, return the minimum number of coins needed to create the amount n. If it is not possible to create the amount using the given coin denomination, return None.

Here's an example and some starter code:

def make_change(coins, n):
  # Fill this in.
  
print(make_change([1, 5, 10, 25], 36))
# 3 coins (25 + 10 + 1)

================================================================================================

Given an array and an integer k, rotate the array by k spaces. Do this without generating a new array and without using extra space.

Here's an example and some starter code

def rotate_list(nums, k):
  # Fill this in.

a = [1, 2, 3, 4, 5]
rotate_list(a, 2)
print(a)
# [3, 4, 5, 1, 2]

==============================================================================================

Given two rectangles, find the area of intersection.

Here's some starter code and a starter example:

class Rectangle():
  def __init__(self, min_x=0, min_y=0, max_x=0, max_y=0):
    self.min_x = min_x
    self.min_y = min_y
    self.max_x = max_x
    self.max_y = max_y

def intersection_area(rect1, rect2):
  # Fill this in.

#  BBB
# AXXB
# AAA
rect1 = Rectangle(0, 0, 3, 2)
rect2 = Rectangle(1, 1, 3, 3)

print(intersection_area(rect1, rect2))
# 2

==============================================================================================
Given a nested dictionary, flatten the dictionary, where nested dictionary keys can be represented through dot notation.

Example:

Input: {
  'a': 1,
  'b': {
    'c': 2,
    'd': {
      'e': 3
    }
  }
}
Output: {
  'a': 1,
  'b.c': 2,
  'b.d.e': 3
}

You can assume there will be no arrays, and all keys will be strings.

Here's some starter code:

def flatten_dictionary(d):
  # Fill this in.

d = {
    'a': 1,
    'b': {
        'c': 2,
        'd': {
            'e': 3
        }
    }
}
print(flatten_dictionary(d))
# {'a': 1, 'b.c': 2, 'b.d.e': 3}

======================================================================================
  
A fixed point in a list is where the value is equal to its index. So for example the list [-5, 1, 3, 4], 1 is a fixed point in the list since the index and value is the same. Find a fixed point (there can be many, just return 1) in a sorted list of distinct elements, or return None if it doesn't exist.

Here is a starting point:

def find_fixed_point(nums):
  # Fill this in.

print find_fixed_point([-5, 1, 3, 4])
# 1

==============================================================================================

Given a list of building in the form of (left, right, height), return what the skyline should look like. The skyline should be in the form of a list of (x-axis, height), where x-axis is the next point where there is a change in height starting from 0, and height is the new height starting from the x-axis.

Here's some starter code:

def generate_skyline(buildings):
  # Fill this in.

#            2 2 2
#            2 2 2
#        1 1 2 2 2 1 1
#        1 1 2 2 2 1 1
#        1 1 2 2 2 1 1
# pos: 1 2 3 4 5 6 7 8 9
print generate_skyline([(2, 8, 3), (4, 6, 5)])
# [(2, 3), (4, 5), (7, 3), (9, 0)]

==============================================================================================
