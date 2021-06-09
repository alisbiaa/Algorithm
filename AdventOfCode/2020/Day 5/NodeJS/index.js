import {getInput} from "../../reusableJS/getInput.js";


const data = await getInput();



const calculateID = (row,column) => {
    return row * 8 + column;
};

const findRC = boardingPass => {
    // init
    let r_min = 0, r_max = 127;
    let c_min = 0, c_max = 7;
    for (const char of boardingPass) {
        switch (char) {
            case 'F':
                r_max = Math.trunc((r_max + r_min) / 2) ;
                break;
            case 'B':
                r_min = Math.round((r_max + r_min) / 2) ;
                break;
            case 'L':
                c_max = Math.trunc((c_max + c_min) / 2) ;
                break;
            case 'R':
                c_min = Math.round((c_max + c_min) / 2) ;
                break;
        }
    }
    return ({row : r_min , column : c_min});
}

// Part 1
function findResult_1(arr) {
    let highestID = -1;
    for (const boardingPass of arr) {
        const rc = findRC(boardingPass); // we find row & column
        const ID = calculateID(rc.row, rc.column); // we calculate ID
        if(highestID < ID)  highestID = ID// check and assign
    }
    return highestID;
}

console.log(findResult_1(data));

// Part 2

function findResult_2(arr) {
    const IDs = [];
    for (const boardingPass of arr) {
        const rc = findRC(boardingPass); // we find row & column
        const ID = calculateID(rc.row, rc.column); // we calculate ID
        IDs.push(ID); // store ID
    }
    IDs.sort(); // sort array and find the condition
    for (let i = 1; i < IDs.length-1; i++) {
        if (IDs[i] - IDs[i - 1] === 2)
            return IDs[i] - 1;
        else if (IDs[i + 1] - IDs[i] === 2)
            return IDs[i] + 1;
    }
    return null;
}

console.log(findResult_2(data));

