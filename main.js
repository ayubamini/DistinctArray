let A = [2, 1, 1, 2, 3, 1];

let result = solution(A);

console.log(result);

function solution(A) {

    let n = A.length;

    // Javascript built-in sort command
    A.sort();

    let distinctSum = 0;
    for (let i = 0; i < n; i++) {
        if (A[i] === A[i + 1]) {
            continue;
        }
        distinctSum++;
    }

    return distinctSum;
}
