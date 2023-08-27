const multiply = (a, b, c) => a * b * c;
const result = multiply(2, 3, 2);
console.log(result);

const output = `I am a web developer. 
I love to code. 
I love to eat biriyani.`;
console.log(output);

const add2 = (d, e = 2) => d + e;
const rest = add2(3);
console.log(rest);

const arr = [];
const takeArray = numbers => {
    for (const num of numbers) {
        if (num.length % 2 == 0) {
            arr.push(num);
        }
    }
}

takeArray(['omar', 'fahim', 'ragibs', 'abdullah']);
console.log(arr);

const arr1 = []
const squareFunction = elements => {
    let sum = 0;
    for (const num of elements) {
        arr1.push(num * num);
    }
    for (const num1 of arr1) {
        sum += num1;
    }
    const average = sum / elements.length;
    return average;
}
const result1 = squareFunction([1, 2, 3, 4]);
console.log(result1);


const TwoArray = (numbers1, numbers2) => {
    newArray = [...numbers1, ...numbers2];
    const max = Math.max(...newArray);
    return max;
}

const result3 = TwoArray([1, 2, 3, 4], [5, 6, 7, 8]);
console.log(result3);