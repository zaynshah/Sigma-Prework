function definingMinMax(nums) {
  let minMaxArray = ["min", "max"];
  if (nums.length > 0) {
    minMaxArray[0] = nums[0];
    minMaxArray[1] = nums[0];
  }

  for (let i = 0; i < nums.length; i++) {
    if (minMaxArray[0] > nums[i]) {
      minMaxArray[0] = nums[i];
    }
    if (minMaxArray[1] < nums[i]) {
      minMaxArray[1] = nums[i];
    }
  }
  return minMaxArray;
}

console.log(definingMinMax([20, 50, 12, 6, 14, 8]));
