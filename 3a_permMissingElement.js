// An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

// Your goal is to find that missing element.

// Write a function:

// function solution(A);

// that, given an array A, returns the value of the missing element.

// For example, given array A such that:

//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.

const solution = (A) => {
    A.sort(function(a, b) {
        return a - b;
    });
    
    var next = 1;
    var i=0;
    while(next === A[i]) {
        next++;
        i++;
    }
    
    return next;
}