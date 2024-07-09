const express = require('express');

const app = express();

function mean(nums) {
  let mean = 0;
  for (let i = 0; i < nums.length; i++) {
    mean += parseInt(nums[i]);
  }
  mean = mean / nums.length;
  return mean;
}

function median(nums) {
  nums.sort((a, b) => a - b);
  let median;
  if (nums.length % 2 === 0) {
    median = (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2;
  } else {
    median = nums[Math.floor(nums.length / 2)];
  }
  return median;
}

function mode(nums) {
  let countMap = {};
  nums.forEach(num => {
    countMap[num] = (countMap[num] || 0) + 1;
  });

  let maxCount = Math.max(...Object.values(countMap));
  let mode = Object.keys(countMap).find(key => countMap[key] === maxCount);

  return mode;
}

app.get('/mean', function(request, response) {
  let nums = request.query.nums.split(',');

  let result = mean(nums);

  console.log(result);
  return response.json({response: {
    operation: 'mean',
    value: result}});
});

app.get('/median', function(request, response) {
  let nums = request.query.nums.split(',');

  let result = median(nums);

  console.log(result);
  return response.json({response: {
    operation: 'median',
    value: result}});
});

app.get('/mode', function(request, response) {
  let nums = request.query.nums.split(',');

  let result = mode(nums);

  console.log(result);
  return response.json({response: {
    operation: 'mode',
    value: result}});
});

app.listen(3000, function(){
  console.log('App on port 3000');
})