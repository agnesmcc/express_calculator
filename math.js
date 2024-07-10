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
  nums = nums.map(Number);
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

  return parseInt(mode);
}

module.exports = {mean, median, mode};
