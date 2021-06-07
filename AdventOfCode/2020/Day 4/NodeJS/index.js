import {getInput} from "../../reusableJS/getInput.js";


const data = await getInput();

function check_passport_1(passport) {
    const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
    const tmp = passport.join(' '); // passport as a string
    for (const f of fields)
        if(!tmp.includes(f)) return false;
    return true;
}
// Part 1
function findResult_1(arr) {
    let result = 0;
    let passport = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] && passport.push(arr[i]);
        if (arr[i] === '' || i === arr.length - 1) {
            check_passport_1(passport) && result++;
            passport = [];
        }
    }
    return result;
}

console.log(findResult_1(data));

// Part 2

const validator = {
    byr: val => {
        return (+val >= 1920 && +val <= 2002)
    },
    iyr: val => {
        return (+val >= 2010 && +val <= 2020)
    },
    eyr: val => {
        return (+val >= 2020 && +val <= 2030)
    },
    hgt: val => {
        if(/in$/.test(val)) {
            let num = +val.replace('in', '');
            return (num >= 59 && num <= 76);
        }
        else if(/cm$/.test(val)) {
            let num = +val.replace('cm', '');
            return (num >= 150 && num <= 193);
        }
        return false;
    },
    hcl: val => {
        return /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(val);
    },
    ecl: val => {
        return /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(val);
    },
    pid: val => {
        return /^\d{9}$/.test(val);
    },
    cid: val => {
        return true;
    }
}

function check_passport_2(passport) {
    if (!check_passport_1(passport)) return false;
    const passport_fields = passport.join(' ').split(' ');
    for (const passportField of passport_fields) {
        const field = passportField.split(":")[0];
        const value = passportField.split(":")[1];
        if(!validator[field](value)) return false;
    }
    return true;

}

function findResult_2(arr) {
    let result = 0;
    let passport = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] && passport.push(arr[i]);
        if (arr[i] === '' || i === arr.length - 1) {
            check_passport_2(passport) && result++;
            passport = [];
        }
    }
    return result;
}

console.log(findResult_2(data));

