const findMinimum = arr => {

  // Your code here
  let sorted = arr.sort((a, b) => a - b); // time complexity is O(n)
  return sorted[0];


};

const sinngleRunningSum = (arr,idx) =>{
  let sum = 0;
  for (let i = 0; i <= idx; i++){
    sum += arr[i];
  }
  return sum;

}

const runningSum = arr => {
  // Your code here
  let runningArr = arr.map((ele, idx, self) =>{ // time and space complexity is O(n)
    sinngleRunningSum(self,idx)
  })
  return runningArr;

};

const evenNumOfChars = arr => {
  // Your code here
  let count = 0;
  arr.forEach((ele) =>{//time and space complexity is O(n);
    if(ele.length % 2 === 0){
      count++;
    }
  })
  return count;

};

const smallerThanOne = (arr, num) =>{
  let count = 0;
  arr.forEach(ele =>{//time and space complexity is O(n);
    if (ele < num){
      count++;
    }
  })
  return count;
}

const smallerThanCurr = arr => {
  // Your code here
  let countArr = []
  arr.forEach((ele, idx, self) =>{
    countArr.push(smallerThanOne(self, ele));//time and space complexity is O(n)
  })

  return countArr;


};

const twoSum = (arr, target) => {
  // Your code here
  arr.forEach((ele) =>{
    arr.forEach(ele2 =>{
      if (ele + ele2 === target){//time and space complexity are O(n^2)
        return true;
      }
    });
});
return false;
};

const secondLargest = arr => {
  // Your code here
  arr.sort((a, b) => a - b);// time and space complexity are O(n)
  arr.reverse();//  time and space complexity are O(n)
  return arr[1];
};


const arrOfLengths = num =>{
  let arr = [];
  for (let i = 0; i < num; i++){
    arr.push(i);
  }
};

const shuffle = (arr) => {
  // Your code here
  let end = arr.length;
  let idxs = arrOfLengths(end);
  let shuffledIdxs = [];
  let random = Math.floor(Math.random() * idxs.length);
  while(idxs.length > 0){
    shuffledIdxs.push(idxs[random]);
    idxs.splice(random, 1);
  }

  let shuffledEles = [];
  shuffledIdxs.forEach(ele =>{
    shuffledEles.push(arr[ele]);
  })
  return shuffledEles;



};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
