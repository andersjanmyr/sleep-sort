# Sleep Sort

`sleep-sort` works by creating a task for every number to be sorted. The task
will "sleep" n number of milliseconds and then push the number onto an array.
When all tasks are done, the array is returned sorted.

[![Build Status](https://secure.travis-ci.org/andersjanmyr/sleep-sort.png)](http://travis-ci.org/andersjanmyr/sleep-sort)

## Installation

    $ npm install sleep-sort

## Usage

    $ sleep-sort 2 7 89 94 77 4 6 9 6 3
    3 2 4 6 6 9 7 77 89 94

