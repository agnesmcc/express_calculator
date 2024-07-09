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

app.listen(3000, function(){
  console.log('App on port 3000');
})