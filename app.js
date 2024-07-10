const express = require('express');

const app = express();
const {mean, median, mode} = require('./math');

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
