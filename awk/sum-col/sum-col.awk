#!/usr/bin/awk -f

#
# This program sums the values of the second column from
# the input .csv file. It is a version of this command line
# awk program:
#
#   $ awk -F ',' '{ sum+=$2; } END { print sum; }' CSV_FILE
#
# Run:
#
#   $ sum-col.awk CSV_FILE
#

BEGIN {
  FS = ","
  sum = 0
}

{
  sum += $2
}

END {
  print sum
}

