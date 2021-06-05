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
        if (parseInt(arr[r]) + parseInt(arr[l]) === condition)
            return parseInt(arr[r]) * parseInt(arr[l]);
        else if(parseInt(arr[r])  + parseInt(arr[l]) < condition )
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
            if (parseInt(arr[i]) + parseInt(arr[l]) + parseInt(arr[r]) === condition)
                return parseInt(arr[i]) * parseInt(arr[l]) * parseInt(arr[r]);
            else if (parseInt(arr[i]) + parseInt(arr[l]) + parseInt(arr[r]) < condition)
                l++;
            else
                r--;
        }
    }
    return null;

}

console.log(findResult_2(data));

