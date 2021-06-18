import {getInput} from "../../reusableJS/getInput.js";

const data = await getInput();

const preamble_length = 25;

// this function is to check if there a and b such that a+b = x
function valid(arr,x) {
    let l, r;
    arr.sort((a,b) => a-b);
    l = 0;
    r = arr.length - 1;
    while (l < r) {
        if (+arr[r] + +arr[l] === x)
            return true;
        else if(+arr[r]  + +arr[l] < x )
            l++;
        else
            r--;
    }
    return false;
}

// Part 1
function findResult_1(arr) {
    for (let i = 0; i < arr.length-preamble_length; i++) {
        const preamble_list = arr.slice(i , i+preamble_length);
        const x = +arr[preamble_length+i];
        if(!valid(preamble_list,x)) return x;
    }
}

console.log(findResult_1(data));

// Part 2

function sumOfArray(arr) {
    return eval(arr.join('+'));
}


function findResult_2(arr) {
    const invalid = findResult_1(arr);
    const index = arr.findIndex(el => +el === invalid);
    let pointer = 0;
    while (true) {
        for (let i = pointer; i < arr.length; i++) {
            const subArray = arr.slice(pointer, i);
            if (pointer===index) continue;
            if(sumOfArray(subArray) > invalid) break;
            if (sumOfArray(subArray) === invalid) {
                subArray.sort();
                return +subArray[0] + +subArray.pop();
            }
        }
        pointer++;
    }
}


console.log(findResult_2(data));

