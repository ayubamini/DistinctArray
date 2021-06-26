let A = [2, 1, 1, 2, 3, 1];

let result = solution(A);

console.log(result);

function solution(A) {

    let n = A.length;

    // hands on sort
    sort(A);

    // for (i = 0; i < n; i++) {
    //     console.log(A[i] + ", ");
    // }

    let distinctSum = 0;

    for (let i = 0; i < n; i++) {
        if (A[i] == A[i + 1]) {
            continue;
        }
        distinctSum++;
    }

    return distinctSum;
}


function sort(arr) {
    quicksort(arr, 0, arr.length - 1);
}

function quicksort(arr, left, right) {

    if (left >= right) return;

    let pivotPosition = partition(arr, left, right);
    quicksort(arr, left, pivotPosition - 1);
    quicksort(arr, pivotPosition + 1, right);
}

function partition(arr, left, right) {

    pivot = arr[right];

    let i = left;
    let j = right - 1;

    while (i < j) {

        while (arr[i] < pivot) {
            i++;
        }

        while (j > left && arr[j] >= pivot) {
            j--;
        }

        if (i < j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }

    if (i == j && arr[i] < pivot) {
        i++;
    }

    if (arr[i] != pivot) {
        swap(arr, i, right);
    }

    return i;
}

function swap(arr, index, right){
    let swap = arr[index];
    arr[index] = arr[right];
    arr[right] = swap;
}
