const express = require('express');

const app = express();

app.get('/mean', function(request, response) {
  let nums = request.query.nums.split(',');

  let mean = 0;
  for (let i = 0; i < nums.length; i++) {
    mean += parseInt(nums[i]);
  }
  mean = mean / nums.length;

  console.log(mean);
  return response.json({response: {
    operation: 'mean',
    value: mean}});
});

app.get('/median', function(request, response) {
  let nums = request.query.nums.split(',');
  
  nums.sort((a, b) => a - b);
  let median;
  if (nums.length % 2 === 0) {
    median = (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2;
  } else {
    median = nums[Math.floor(nums.length / 2)];
  }

  console.log(median);
  return response.json({response: {
    operation: 'median',
    value: median}});
});

app.listen(3000, function(){
  console.log('App on port 3000');
})