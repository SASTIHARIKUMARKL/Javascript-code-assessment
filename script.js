//Array Destructing - prgrm 08
const Rollno=[25,30,45];
const [rahul,ramesh,suresh]=Rollno;
console.log(rahul,ramesh,suresh);

//Array Spreading - prgrm 09
const num=[1,2,3,4,5,6];
const [one , two , ...rest]= num;
document.write(one);
document.write(two);
document.write(rest);

//Array finding max and min - prgrm 10
let array=[15,20,30,45,18,10];  // finding array max
let max=array[0];
for(let i=0;i<array.length;i++){
    if(array[i]>max)
        max=array[i];
}
console.log(max);

let array1=[15,20,30,45,18,10];  // finding array min
let min=array1[0];
for(let i=0;i<array1.length;i++){
    if(array1[i]<min)
        min=array1[i];
}
console.log(min);

//Checking Array Elements
const fruits=['Apple','Orange','Grapes','Mango'];
const msg=fruits.includes('Mango',3)
console.log(msg);

//Merging the Arrays
const arr1=['Apple','Orange'];
const arr2=['Mango','Grapes','Banana'];
const arr3=['Pineapple'];
const all=arr1.concat(arr2,arr3);
console.log(all);