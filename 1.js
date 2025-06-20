// Maximum number in an array
let array = [5,6,8,12,4];
function findMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
console.log(findMax(array)); 

// Minimum number in an array
let array2 = [5,6,8,12,4];
function findMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {   
            min = array[i];
        }
    }
    return min;
}
console.log(findMin(array2));

// Sum of all numbers in an array
let numbers = [1, 2, 3, 4, 5];  
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumArray(numbers));

// Find the average of numbers in an array
let numbers2 = [1, 2, 3, 4, 5];
function averageArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
console.log(averageArray(numbers2));


// Reverse a string
let str = "Ramya";
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString(str));

// Check if a string is a palindrome
let palindromeStr = "hello";
function isPalindrome(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return str === reversed;
}
console.log(isPalindrome(palindromeStr));  

// Find the factorial of a number
let num = 5;
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(num));

// Check if a number is prime
let primeNum = 20;
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(primeNum));

// Find the nth Fibonacci number
let n = 10;
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1, c;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(fibonacci(n));

// Find the longest word in a sentence
let sentence = "The quick brown fox jumps over the lazy dog";
function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longest = '';
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log(findLongestWord(sentence));

// Count the number of vowels in a string
let vowelStr = "Hello World";
function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels(vowelStr));

// Sort an array in ascending order
let unsortedArray = [5, 3, 8, 1, 2];
function sortArray(array) {
    return array.sort((a, b) => a - b);
}
console.log(sortArray(unsortedArray));

// Remove duplicates from an array
let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(array) {
    return [...new Set(array)];
}
console.log(removeDuplicates(arrayWithDuplicates));

// Merge two sorted arrays
let array1 = [1, 3, 5];
let array3 = [2, 4, 6];
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;
    while (i < array1.length && j < array3.length) {
        if (array1[i] < array3[j]) {
            merged.push(array3[i]);
            i++;
        } else {
            merged.push(array3[j]);
            j++;
        }
    }
    return merged.concat(arr1.slice(i)).concat(array3.slice(j));
}
console.log(mergeSortedArrays(array1, array3));

// Find the intersection of two arrays
let array4 = [1, 2, 3, 4];
let array5 = [3, 4, 5, 6];
function intersection(array4, array5) {
    let set1 = new Set(array4);
    let set2 = new Set(array5);
    let result = [];
    for (let item of set1) {
        if (set2.has(item)) {
            result.push(item);
        }
    }
    return result;
}
console.log(intersection(array4, array5));

//Sum of two numbers is 10 
let arrays = [5,6,8,12,4];
let target = 10;
function search(arrays, target) 
{
    let n = arrays.length;
    for(let i = 0; i < n; i++)
    {
        for(let j = i + 1; j < n; j++) 
        {
            if(arrays[i] + arrays[j] === target) 
            {
                let ans=[];
                ans.push(i,j);
                return ans;
            }
        }
    }
}
console.log(search(arrays, target));

//wap to move all zeros to the end of an array
let array6 = [5,7,0,7,-1,0,12];
let array7 =[];
let array8 =[];
for(let i of array6) 
{
    if(i ==0)
    {
        array7.push(i);
    }
    else
    {
        array8.push(i);
    }
}
let final = [...array8, ...array7];
console.log(final);

//merge two sorted arrays
let array9 = [1, 3, 5];
let array10 = [2, 4, 6];
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}
console.log(mergeSortedArrays(array9, array10));

// Merge two sorted arrays using two pointers
let arr1 = [1,3,5,6,7,8];
let arr2 = [2,4,6,8,10];
let ans = [];
let arr12 = 0, arr22 = 0;
let n1 = arr1.length, n2 = arr2.length;
while (arr1 < n1 && arr2 < n2) 
{
    if (a1[arr12] < b1[arr22]) 
    {
        ans.push(arr1[arr12]);
        arr12++;
    }
    elseif()
    {

    }
}
console.log(ans);

////
let array13 = [1, 2, 3, 4, 5];
let m =array13.length;
for(let i=0; i<m; i++)
{
    for(let j=i; j<m;j++)
    {
        let str="";
        for(let k=i;k<j;k++)
        {
            str += array13[k];
        }
        console.log(str);
    }
}


//wap to split an array into two halves
let array14="hi hello okay";
let answer=[];
let array15="";
for(let i of array14)
{
    if(i!="")
    {
        array15 += i;
    }
    else
    {
        answer.push(array15);
        array15 = "";
    }
}
answer.push(array15);
console.log(answer);

//
let arr = [1,5,7,4,5,6,2];










