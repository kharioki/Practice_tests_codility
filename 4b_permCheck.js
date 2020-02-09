// A non-empty array A consisting of N integers is given.

// A permutation is a sequence containing each element from 1 to N once, and only once.

// For example, array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// is a permutation, but array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// is not a permutation, because value 2 is missing.

// The goal is to check whether array A is a permutation.

// Write a function:

// function solution(A);

// that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

const solution = (A) => {
    let control = new Array(A.length);
    let left = 0;
        
    for(let i=0; i<A.length; i++) {
        if(i===0) {
            left = A[i];
        }
        
        left = left < A[i] ? A[i] : left;
                
    }
    
    if(left !== A.length) {
      console.log({left});
        return 0;
    }
    
    for(let i=0; i<A.length; i++) {
        if(!control[A[i]-1]) {
            control[A[i]-1] = true;
            left--;
        }
    }
    
    // console.log('left:',left);
    return left === 0 ? 1 : 0;
}

solution([4,1,3])
