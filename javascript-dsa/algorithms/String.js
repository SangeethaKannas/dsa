==============================================================================================
==============================================================================================

Given an expression (as a list) in reverse polish notation, evaluate the expression. 
Reverse polish notation is where the numbers come before the operand. Note that there can be the 4 operands '+', '-', '*', '/'. 
You can also assume the expression will be well formed.

Example

Input: [1, 2, 3, '+', 2, '*', '-']
Output: -9

The equivalent expression of the above reverse polish notation would be (1 - ((2 + 3) * 2)).

Here's some starter code:

def reverse_polish_notation(expr):
  # Fill this in.
  
# 1 - (2 + 3) * 2
print(reverse_polish_notation([1, 2, 3, '+', 2, '*', '-']))
# -9

==============================================================================================
Given two strings, find if there is a one-to-one mapping of characters between the two strings.

Example

Input: abc, def
Output: True # a -> d, b -> e, c -> f

Input: aab, def
Ouput: False # a can't map to d and e 

Here's some starter code:

def has_character_map(str1, str2):
  # Fill this in.

print(has_character_map('abc', 'def'))
# True
print(has_character_map('aac', 'def'))
# False

==============================================================================================
Given a string, determine if there is a way to arrange the string such that the string is a palindrome. If such arrangement exists, return a palindrome (There could be many arrangements). Otherwise return None.

Here's some starter code:

def find_palindrome(s):
  # Fill this in.

print(find_palindrome('momom'))
# momom

==============================================================================================
Given a string, return the first recurring letter that appears. If there are no recurring letters, return None.

Example:

Input: qwertty
Output: t

Input: qwerty
Output: None

Here's some starter code:

def first_recurring_char(s):
  # Fill this in.
  
print(first_recurring_char('qwertty'))
# t

print(first_recurring_char('qwerty'))
# None

==============================================================================================
Given a string s and a character c, find the distance for all characters in the string to the character c in the string s. You can assume that the character c will appear at least once in the string.

Here's an example and some starter code:

def shortest_dist(s, c):
  # Fill this in.

print(shortest_dist('helloworld', 'l'))
# [2, 1, 0, 0, 1, 2, 2, 1, 0, 1]

==============================================================================================
Given two binary numbers represented as strings, return the sum of the two binary numbers as a new binary represented as a string. 
Do this without converting the whole binary string into an integer.

Here's an example and some starter code.

def sum_binary(bin1, bin2):
  # Fill this in.
  
print(sum_binary("11101", "1011"))
# 101000

==============================================================================================
Given a list of strings, find the longest common prefix between all strings.

Here's some examples and some starter code.

def longest_common_prefix(strs):
  # Fill this in.
  
print(longest_common_prefix(['helloworld', 'hellokitty', 'hell']))
# hell

print(longest_common_prefix(['daily', 'interview', 'pro']))
# ''

==============================================================================================
/*Given a string, we want to remove 2 adjacent characters that are the same, and repeat the process with the new string until we can no longer perform the operation.

Here's an example and some starter code:

def remove_adjacent_dup(s):
  # Fill this in.

print(remove_adjacent_dup("cabba"))
# Start with cabba
# After remove bb: caa
# After remove aa: c
# print c
*/

==============================================================================================

Given two strings which represent non-negative integers, multiply the two numbers and return the product as a string as well. You should assume that the numbers may be sufficiently large such that the built-in integer type will not be able to store the input (Python does have BigNum, but assume it does not exist).

Here's an example and some starter code.

def multiply(str1, str2):
  # Fill this in.

print(multiply("11", "13"))
# 143

==============================================================================================

Given a list of strings, find the list of characters that appear in all strings.

Here's an example and some starter code:

def common_characters(strs):
  # Fill this in.

print(common_characters(['google', 'facebook', 'youtube']))
# ['e', 'o']

==============================================================================================

Given 2 strings s and t, find and return all indexes in string s where t is an anagram.

Here's an example and some starter code:

def find_anagrams(s, t):
  # Fill this in.

print(find_anagrams('acdbacdacb', 'abc'))
# [3, 7]

==============================================================================================

Given a list of words in a string, reverse the words in-place (ie don't create a new string and reverse the words). Since python strings are not mutable, you can assume the input will be a mutable sequence (like list).

Here's an example and some starting code:

def reverse_words(words):
  # Fill this in.

s = list("can you read this")
reverse_words(s)
print(''.join(s))
# this read you can

==============================================================================================

Given a valid parenthesis string (with only '(' and ')', an open parenthesis will always end with a close parenthesis, and a close parenthesis will never start first), remove the outermost layers of the parenthesis string and return the new parenthesis string.

If the string has multiple outer layer parenthesis (ie (())()), remove all outer layers and construct the new string. So in the example, the string can be broken down into (()) + (). By removing both components outer layer we are left with () + '' which is simply (), thus the answer for that input would be ().

Here are some examples and some starter code.

def remove_outermost_parenthesis(s):
  # Fill this in.

print(remove_outermost_parenthesis('(())()'))
# ()

print(remove_outermost_parenthesis('(()())'))
# ()()

print(remove_outermost_parenthesis('()()()'))
# ' '
=======================================================================================================================================================
