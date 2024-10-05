//Question 1

let arr=[1,2,3,4,5]

let value=1;
for(let i=0; i<arr.length;i++){
    value=arr[i]*value;
}
console.log(value);

//Question 2

let arr1=[1,2,3,4,5]

let sum=0;
for(let i=0; i<arr.length;i++){
    sum=arr[i]+sum;
}
console.log(sum);


//Question 3


let arr2=[4,4,3,2,1,2,5]

let count={};

for (let num of arr2){
    count[num] = count[num]? count[num]+1:1;
}
console.log(count);


//Question 4

function sumEven(arr3) {
    sum1=0;

    for(let i=0; i<arr3.length ;i++){
        if(arr3[i]%2===0){
            sum1 += arr3[i]
        }
    }
    return sum1
}
const arr3=[2,4,7,5,6,1]
console.log(sumEven(arr3));


//Question 5


function checkPresence(arr, value) {
    if (arr.includes(value)) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

const numbers = [1,2,3,4,5,6];
checkPresence(numbers, 8);

///Question 6

function adultAge(ages) {

    const value1 = ages.filter(age => age > 18);

    console.log(value1);
}


const ages = [12, 19, 22, 15, 30, 18, 25];
adultAge(ages); 


//Question 7

function incrementNo(num){
    const value2 = num.map(no => no + 1);

    console.log(value2);
    
}

const num=[1,2,3,4,5]
incrementNo(num)

//Question 8

function SubjectMarks(marks) {

    for(let i=0; i<marks.length; i++){
        if(marks<32){
            return "No"
            
        }
    }
    return "Yes"

}

const marks = [18,35,46,85,78,10,40];
console.log(SubjectMarks(marks));


//Question 9

function uniqueColorShirts(N,colors) {
    let colorCount = {};

    for (let i = 0; i < N; i++) {
        let color = colors[i];
        if (colorCount[color]) {
            colorCount[color]++;
        } else {
            colorCount[color] = 1;
        }
    }

    let uniqueColors = 0;
    for (let color in colorCount) {
        if (colorCount[color] === 1) {
            uniqueColors++;
        }
    }

    return uniqueColors;
}

const N = 6;
const colors = [3, 2, 4, 1, 2, 3];
console.log(uniqueColorShirts(N ,colors));  

//Question 10

function findMinMax(Num, arr5) {
    
    let min = arr5[0];
    let max = arr5[0];


    for (let i = 1; i < Num; i++) {
        if (arr5[i] < min) {
            min = arr5[i];
        }
        if (arr5[i] > max) {
            max = arr5[i];
        }
    }

    return [min, max];
}

const Num = 7;
const arr5 = [66, 33, 11, 44, 22, 77 ,88];
const [min, max] = findMinMax(Num, arr5);
console.log(min, max);