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
