import {getInput} from "../../reusableJS/getInput.js";


const data = await getInput();


function analyseBag(bag) {
    /*
       light red bags contain 1 bright white bag, 2 muted yellow bags.
       data = {
            bag_color : 'light red'
            children : [
                { color : 'bright white', occurrence : 1 },
                { color : 'muted yellow', occurrence : 2 },
            ]
       }
     */
    const s1 = bag.split('bags contain');
    const color = s1[0].trim();
    const children = s1[1].trim().split(',').map(el => {
        return {
            color: el.replace(/[,|.]|bags|bag|\d/g, '').trim(),
            occurrence : +el.replace(/\D+/g, '')
        }
    })
    return {color,children};

}

// Part 1

function findResult_1(arr) {
    const bags = arr.map(el => analyseBag(el));
    let validBags = ['shiny gold'];
    let outers = [];
    for (let i = 0; i < validBags.length; i++) {
        let target = validBags[i];
        for (const bag of bags) {
            if (Object.values(bag.children).find(child => child.color === target) && outers.indexOf(bag.bag_color) === -1) {
                outers.push(bag.color);
                validBags.push(bag.color);
            }
        }
    }
    return outers.length;
}

console.log(findResult_1(data));

// Part 2

function findResult_2(arr) {
    const bags = arr.map(el => analyseBag(el));
    // init bag
    const goldenBag = bags.find(bag => bag.color === 'shiny gold');
    goldenBag['occurrence'] = 1;

    const validBags = [goldenBag]; // Main list : this list is what we are going to use for counting
    for (let i = 0; i < validBags.length; i++) {
        const parentBag = validBags[i];
        // iterate through the bags children
        for (const child of parentBag.children) {
            if(!child.occurrence) continue; // check if the bag do not contains any other bags
            const selectedBag = bags.find(bag => bag.color === `${child.color}`); // we find the child among the bags list
            selectedBag['occurrence'] = child.occurrence * parentBag.occurrence ;
            validBags.push({...selectedBag}); // this is very different from  validBags.push({selectedBag});   because of copying by reference it overwrites your object
        }
    }
    const result = validBags.map(bag => bag.occurrence);

    return eval(result.join('+')) -1;  // the -1 is for the very first bag , we not counting the golden bag among the result
}

console.log(findResult_2(data));

