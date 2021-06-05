import {getInput} from "../../reusableJS/getInput.js";

const data = await getInput();
const condition = 2020;

// Part 1
function findResult_1(arr) {
    let l, r;
    arr.sort((a,b) => a-b);
    l = 0;
    r = arr.length - 1;
    while (l < r) {
        if (arr[r] + arr[l] === condition)
            return arr[r] * arr[l];
        else if(arr[r]  + arr[l] < condition )
            l++;
        else
            r--;
    }
    return null;
}

console.log(findResult_1(data));


// Part 2

function findResult_2(arr) {
    let l, r;
    arr.sort((a,b) => a-b);
    for (let i = 0; i < arr.length - 2; i++) {
        l = i + 1;
        r = arr.length - 1;
        while (l < r) {
            if (arr[i] + arr[l] + arr[r] === condition)
                return arr[i] * arr[l] * arr[r];
            else if (arr[i] + arr[l] + arr[r] < condition)
                l++;
            else
                r--;
        }
    }

}

console.log(findResult_2(data));

