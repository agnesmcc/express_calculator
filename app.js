const express = require('express');

const app = express();
const {mean, median, mode} = require('./math');

function areThereNums(nums) {
  if (nums.length === 0) {
    throw new Error('nums is required');
  }
}

function areNumsValid(nums) {
  if (nums.some(isNaN)) {
    throw new Error('nums must be numbers');
  }
}

function parseNums(input) {
  areThereNums(input);
  let nums = input.split(',').map(Number);
  areNumsValid(nums);
  return nums;
}

app.get('/mean', function(request, response, next) {
  try {
    let nums = parseNums(request.query.nums);

    let result = mean(nums);

    console.log(result);
    return response.json({response: {
      operation: 'mean',
      value: result}});
  } catch (error) {
    next(error);
  }
});

app.get('/median', function(request, response, next) {
  try {
    let nums = parseNums(request.query.nums);

    let result = median(nums);

    console.log(result);
    return response.json({response: {
      operation: 'median',
      value: result}});
  } catch (error) {
    next(error);
  }
});

app.get('/mode', function(request, response, next) {
  try {
    let nums = parseNums(request.query.nums);

    let result = mode(nums);

    console.log(result);
    return response.json({response: {
      operation: 'mode',
      value: result}});
  } catch (error) {
    next(error);
  }
});

app.use(function(err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.message;

  // set the status and alert the user
  return res.status(status).json({
    error: {message, status}
  });
});

app.listen(3000, function(){
  console.log('App on port 3000');
})
