import {getInput} from "../../reusableJS/getInput.js";

const data = await getInput();

function dataAnalyser(data) {
    const instruction = data.split(' ')[0];
    const value = +data.split(' ')[1];
    return {instruction, value}
}


// Part 1
function findResult_1(arr) {
    const checked = Array(arr.length).fill(false);
    let accumulator = 0;
    let i;
    for ( i = 0; i < arr.length; i++) {
        if (checked[i]) break ;
        checked[i] = true;
        const data = dataAnalyser(arr[i]);
        switch (data.instruction) {
            case 'nop' :
                break;
            case 'acc':
                accumulator += data.value;
                break;
            case 'jmp':
                i += data.value - 1;
                break;
            default:
                break;
        }
    }
    return {accumulator,i};
}

console.log(findResult_1(data));

// Part 2



function findResult_2(arr) {
    for (let i = 0; i < data.length; i++) {
        const data = [...arr];
        if (data[i].includes('acc')) continue;
        data[i]= data[i].includes('nop') ?  data[i].replace('nop', 'jmp') :   data[i].replace('jmp', 'nop');
        const result = findResult_1(data);
        if (result.i === data.length) return result;
    }
}

console.log(findResult_2(data));

