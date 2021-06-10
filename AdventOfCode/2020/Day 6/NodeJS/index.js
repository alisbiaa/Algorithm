import {getInput} from "../../reusableJS/getInput.js";


const data = await getInput();

// Part 1


function union(arr1, arr2) {
    return arr1.concat(arr2.filter(el => !arr1.includes(el)));
}

function findResult_1(arr) {
    let result = 0;
    let tmp = [];

    for (let i = 0; i < arr.length; i++) {
        arr[i] && (tmp = union(tmp, arr[i].split('')));
        if (arr[i] === '' || i === arr.length - 1) {
            result += tmp.length;
            tmp = [];
        }
    }
    return result;
}

console.log(findResult_1(data));

// Part 2

function intersection(arr1, arr2) {
    return arr1.filter(el => arr2.includes(el));
}

function findResult_2(arr) {
    const allAnswers = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let result = 0;
    let tmp = allAnswers;

    for (let i = 0; i < arr.length; i++) {
        arr[i] && (tmp = intersection(tmp, arr[i].split('')));
        if (arr[i] === '' || i === arr.length - 1) {
            result += tmp.length;
            tmp = allAnswers;
        }
    }
    return result;
}

console.log(findResult_2(data));

