//var : no reason to use var
// let : allow it to reassign

// const : do not allow it to reassign

const money = 25;
//money =50;

const rich = money + 25;
console.log(rich);

let count = 0;
count = count + 1;
console.log(count);

const numbers = [23, 4, 23, 12, 56];

numbers[1] = 55;
numbers.push(8, 9, 65);
console.log(numbers);

let student = {
    name: 'moyna pakhi',
    class: 12
}

student = { name: 'kokil konthi' }
