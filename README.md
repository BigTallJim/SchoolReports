csv string with test results

Input
Grading 3 point

Green
Amber
Red

eg "Green,Amber,random,Red"

Edge Cases
-Anything within the comma's, sum up uncounted category
-String might not exist - arg error with "input not csv"

Output
Single string
How many of each grade in inout string
seperated by new line

"Green: 3\nAmber: 4\nRed: 6\nUncounted: 4"

If no values for score, leave out of the output.

