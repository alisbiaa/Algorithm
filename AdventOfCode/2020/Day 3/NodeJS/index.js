import {getInput} from "../../reusableJS/getInput.js";

const data = await getInput();


// Part 1
function findResult_1(arr,r,d) {
    // number of trees
    let result = 0;

    // for steps
    const right = r;
    const down = d;

    // for position
    let row = 0 ;
    let column = 0 ;

    // length of one segment
    const len = arr[0].length - 1;

    // stopping cond
    while (row < arr.length - 1) {
        // move right
        column + right > len  ?
            column = column + right - len -1 : column += right; // 9 + 3 - 10
        // move down
        row+=down;
        //check
        if (arr[row][column] === "#")
            result++;

    }
    return result;
}

console.log(findResult_1(data,3,1));


// Part 2

function findResult_2(arr) {
    return (
        findResult_1(arr, 1, 1) *
        findResult_1(arr, 3, 1) *
        findResult_1(arr, 5, 1) *
        findResult_1(arr, 7, 1) *
        findResult_1(arr, 1, 2)
    );

}

console.log(findResult_2(data));

