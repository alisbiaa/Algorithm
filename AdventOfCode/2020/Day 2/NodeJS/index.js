import {getInput} from "../../reusableJS/getInput.js";

const data = await getInput();

let checkPassword_1 = (password) =>{
    const pass_components = password.split(' ');
    const min = parseInt(pass_components[0].split('-')[0]);
    const max = parseInt(pass_components[0].split('-')[1]);
    const char = pass_components[1][0];
    let occurrence = 0;
    for (const c of pass_components[2]) {
        if(c === char ) occurrence++;
    }
    return occurrence >= min && occurrence <= max;
}

// Part 1

function findResult_1(arr) {
    let result = 0;
    for (const el of arr)
        if(checkPassword_1(el)) result++;
    return result;
}

console.log(findResult_1(data));


// Part 2
let checkPassword_2 = (password) =>{
    const pass_components = password.split(' ');
    const pos1 = parseInt(pass_components[0].split('-')[0]);
    const pos2 = parseInt(pass_components[0].split('-')[1]);
    const char = pass_components[1][0];
    const pass_tmp = pass_components[2];
    if(pass_tmp[pos1-1] === char && pass_tmp[pos2-1] === char) return false;
    else return pass_tmp[pos1 - 1] === char || pass_tmp[pos2 - 1] === char;
}

function findResult_2(arr) {
    let result = 0;
    for (const el of arr)
        if(checkPassword_2(el)) result++;
    return result;
}

console.log(findResult_2(data));

