
===============================================================================================
A UTF-8 character encoding is a variable width character encoding that can vary from 1 to 4 bytes depending on the character. The structure of the encoding is as follows:

1 byte:  0xxxxxxx
2 bytes: 110xxxxx 10xxxxxx
3 bytes: 1110xxxx 10xxxxxx 10xxxxxx
4 bytes: 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx

For more information, you can read up on the Wikipedia Page.

Given a list of integers where each integer represents 1 byte, return whether or not the list of integers is a valid UTF-8 encoding.

BYTE_MASKS = [
    None,
    0b10000000,
    0b11100000,
    0b11110000,
    0b11111000,
]
BYTE_EQUAL = [
    None,
    0b00000000,
    0b11000000,
    0b11100000,
    0b11110000,
]

def utf8_validator(bytes):
  # Fill this in.

print utf8_validator([0b00000000])
# True
print utf8_validator([0b00000000, 10000000])
# False
print utf8_validator([0b11000000, 10000000])
# True


==============================================================================================
Given a 32-bit integer, swap the 1st and 2nd bit, 3rd and 4th bit, up til the 31st and 32nd bit.

Here's some starting code and an example:

def swap_bits(num):
  # Fill this in.

print(f"0b{swap_bits(0b10101010101010101010101010101010):032b}")
# 0b01010101010101010101010101010101

==============================================================================================

Given a string, convert it to an integer without using the builtin str function. You are allowed to use ord to convert a character to ASCII code.

Consider all possible cases of an integer. In the case where the string is not a valid integer, return None.

Here's some starting code:

def convert_to_int(s):
  # Fill this in.

print(convert_to_int

==============================================================================================

Given a square 2D matrix (n x n), rotate the matrix by 90 degrees clockwise.

Here's an example and some starting code:

def rotate(mat):
  # Fill this in.

mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# Looks like
# 1 2 3
# 4 5 6
# 7 8 9

# Looks like
# 7 4 1
# 8 5 2
# 9 6 3
print(rotate(mat))
# [[7, 4, 1], [8, 5, 2], [9, 6, 3]]


The power function calculates x raised to the nth power. If implemented in O(n) it would simply be a for loop over n and multiply x n times. Instead implement this power function in O(log n) time. You can assume that n will be a non-negative integer.

Here's some starting code: 

def pow(x, n):
  # Fill this in.

print(pow(5, 3))
# 125


The power function calculates x raised to the nth power. If implemented in O(n) it would simply be a for loop over n and multiply x n times. Instead implement this power function in O(log n) time. You can assume that n will be a non-negative integer.

Here's some starting code: 

def pow(x, n):
  # Fill this in.

print(pow(5, 3))
# 125

Given a number n, find the least number of squares needed to sum up to the number.

Here's an example and some starting code:

def square_sum(n):
  # Fill this in.

print(square_sum(13))
# Min sum is 3^2 + 2^2
# 2

==============================================================================================

Given a non-negative integer n, convert n to base 2 in string form. Do not use any built in base 2 conversion functions like bin.

Here's an example and some starter code:

def base_2(n):
  # Fill this in.

print(base_2(123))
# 1111011

In the above example, 2^6 + 2^5 + 2^4 + 2^3 + 2^1 + 2^0 = 123.


You are only allowed to perform 2 operations, multiply a number by 2, or subtract a number by 1. Given a number x and a number y, find the minimum number of operations needed to go from x to y.

Here's an example and some starter code.

def min_operations(x, y):
  # Fill this in.

print(min_operations(6, 20))
# (((6 - 1) * 2) * 2) = 20 : 3 operations needed only
# print 3


For instance, given the phone number 364
we can construct the words ['dog', 'fog'].

Here's a starting point:

lettersMaps = {
    1: [],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
    0: []
}

validWords = ['dog', 'fish', 'cat', 'fog']

def makeWords(phone):
  #Fill this in

print(makeWords('364'))
# ['dog', 'fog']

==============================================================================================
  
Given a string that may represent a number, determine if it is a number. Here's some of examples of how the number may be presented:

"123" # Integer
"12.3" # Floating point
"-123" # Negative numbers
"-.3" # Negative floating point
"1.5e5" # Scientific notation

Here's some examples of what isn't a proper number:

"12a" # No letters
"1 2" # No space between numbers
"1e1.2" # Exponent can only be an integer (positive or negative or 0)

Scientific notation requires the first number to be less than 10, however to simplify the solution assume the first number can be greater than 10. Do not parse the string with int() or any other python functions.

Here's some starting code:

def parse_number(s):
   # Fill this in.
   
print(parse_number("12.3"))
# True

print(parse_number("12a"))
# False

==============================================================================================
  
Given a list of numbers, where every number shows up twice except for one number, find that one number.

Example:

Input: [4, 3, 2, 4, 1, 3, 2]
Output: 1

Here's the function signature:

def singleNumber(nums):
  # Fill this in.

print singleNumber([4, 3, 2, 4, 1, 3, 2])
# 1

==============================================================================================
  
Version numbers are strings that are used to identify unique states of software products. A version number is in the format a.b.c.d. and so on where a, b, etc. are numeric strings separated by dots. These generally represent a hierarchy from major to minor changes. Given two version numbers version1 and version2, conclude which is the latest version number. Your code should do the following:
If version1 > version2 return 1.
If version1 < version2 return -1.
Otherwise return 0.

Note that the numeric strings such as a, b, c, d, etc. may have leading zeroes, and that the version strings do not start or end with dots. Unspecified level revision numbers default to 0.

Example:

Input: 
version1 = "1.0.33"
version2 = "1.0.27"
Output: 1 
#version1 > version2

Input:
version1 = "0.1"
version2 = "1.1"
Output: -1
#version1 < version2

Input: 
version1 = "1.01"
version2 = "1.001"
Output: 0
#ignore leading zeroes, 01 and 001 represent the same number. 

Input:
version1 = "1.0"
version2 = "1.0.0"
Output: 0
#version1 does not have a 3rd level revision number, which
defaults to "0"

Here's a starting point

class Solution:
  def compareVersion(self, version1, version2):
    # Fill this in.

version1 = "1.0.1"
version2 = "1"
print(Solution().compareVersion(version1, version2))
# 1

==============================================================================================
  
Given a number of integers, combine them so it would create the largest number.

Example:

Input:  [17, 7, 2, 45, 72]
Output:  77245217

def largestNum(nums):
  # Fill this in.

print largestNum([17, 7, 2, 45, 72])
# 77245217

==============================================================================================

The Fibonacci sequence is the integer sequence defined by the recurrence relation: F(n) = F(n-1) + F(n-2), where F(0) = 0 and F(1) = 1. In other words, the nth Fibonacci number is the sum of the prior two Fibonacci numbers. Below are the first few values of the sequence:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

Given a number n, print the n-th Fibonacci Number.
Examples:

Input: n = 3
Output: 2

Input: n = 7
Output: 13

Here's a starting point:

class Solution():
  def fibonacci(self, n):
    # fill this in.

n = 9
print(Solution().fibonacci(n))
# 34

==============================================================================================
Given an array of integers. Return all the permutations of this array.

def permute(nums):
  # Fill this in.

print permute([1, 2, 3])
# [[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1]]

==============================================================================================

Given an array of integers of size n, where all elements are between 1 and n inclusive, find all of the elements of [1, n] that do not appear in the array. Some numbers may appear more than once.

Example:

Input: [4,5,2,6,8,2,1,5]
Output: [3,7]

class Solution(object):
  def findDisappearedNumbers(self, nums):
    # Fill this in.

nums = [4, 6, 2, 6, 7, 2, 1]
print(Solution().findDisappearedNumbers(nums))
# [3, 5]

==============================================================================================

Given a sorted list of numbers, return a list of strings that represent all of the consecutive numbers.

Example:

Input: [0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15]
Output: ['0->2', '5->5', '7->11', '15->15']

Assume that all numbers will be greater than or equal to 0, and each element can repeat.

Here is a starting point:

def findRanges(nums):
  # Fill this in.

print findRanges([0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15])
# ['0->2', '5->5', '7->11', '15->15']


Given a sequence of numbers, find the longest sequence that contains only 2 unique numbers.

Example:

Input: [1, 3, 5, 3, 1, 3, 1, 5]
Output: 4

The longest sequence that contains just 2 unique numbers is [3, 1, 3, 1]

Here's the solution signature:

def findSequence(seq):
  # Fill this in.

print findSequence([1, 3, 5, 3, 1, 3, 1, 5])
# 4

==============================================================================================

Given a list of numbers with only 3 unique numbers (1, 2, 3), sort the list in O(n) time.

Example 1:

Input: [3, 3, 2, 1, 3, 2, 1]
Output: [1, 1, 2, 2, 3, 3, 3]

def sortNums(nums):
  # Fill this in.

print sortNums([3, 3, 2, 1, 3, 2, 1])
# [1, 1, 2, 2, 3, 3, 3]

==============================================================================================
Given a positive integer n, find all primes less than n.

Here's an example and some starter code:

def find_primes(n):
  # Fill this in.

print(find_primes(14))
# [2, 3, 5, 7, 11, 13]

==============================================================================================
Given a non-negative integer n, convert the integer to hexadecimal and return the result as a string. Hexadecimal is a base 16 representation of a number, where the digits are 0123456789ABCDEF. Do not use any builtin base conversion functions like hex.

Here's an example and some starter code.

def to_hex(n):
  # Fill this in.
  
print(to_hex(123))
# 7B

==============================================================================================

Given a list of sorted numbers, and two integers k and x, find k closest numbers to the pivot x.

Here's an example and some starter code:

def closest_nums(nums, k, x):
 # Fill this in.

print(closest_nums([1, 3, 7, 8, 9], 3, 5))
# [7, 3, 8]

==============================================================================================
  
Given a list of numbers, for each element find the next element that is larger than the current element. Return the answer as a list of indices. If there are no elements larger than the current element, then use -1 instead.

Here's an example and some starter code:

def larger_number(nums):
  # Fill this in.

# print [2, 2, 3, 4, -1, -1]
print(larger_number([3, 2, 5, 6, 9, 8]))

==============================================================================================
Given an integer, convert the integer to a roman numeral. You can assume the input will be between 1 to 3999.

The rules for roman numerals are as following:

There are 7 symbols, which correspond to the following values.

I   1
V   5
X   10
L   50
C   100
D   500
M   1000

The value of a roman numeral are the digits added together. For example the roman numeral 'XX' is V + V = 10 + 10 = 20. Typically the digits are listed from largest to smallest, so X should always come before I. Thus the largest possible digits should be used first before the smaller digits (so to represent 50, instead of XXXXX, we should use L).

There are a couple special exceptions to the above rule.

To represent 4, we should use IV instead of IIII. Notice that I comes before V.
To represent 9, we should use IX instead of VIIII.
To represent 40, we should use XL instead of XXXX.
To represent 90, we should use XC instead of LXXXX.
To represent 400, we should use CD instead of CCCC.
To represent 900, we should use CM instead of DCCCC.

Here are some examples and some starter code.

def integer_to_roman(num):
  # Fill this in.

print(integer_to_roman(1000))
# M
print(integer_to_roman(48))
# XLVIII
print(integer_to_roman(444))
# CDXLIV

=============================================================================

Given an integer, reverse the digits. Do not convert the integer into a string and reverse it.

Here's some examples and some starter code.

def reverse_integer(num):
  # Fill this in.
  
print(reverse_integer(135))
# 531

print(reverse_integer(-321))
# -123


=============================================================================
  
Given a list of numbers and a target number n, find 3 numbers in the list that sums closest to the target number n. There may be multiple ways of creating the sum closest to the target number, you can return any combination in any order.

Here's an example and some starter code.

def closest_3sum(nums, target):
  # Fill this in.
  
print(closest_3sum([2, 1, -5, 4], -1))
# Closest sum is -5+1+2 = -2 OR -5+1+4 = 0
# print [-5, 1, 2]

=============================================================================
  
=============================================================================
  
  
   
