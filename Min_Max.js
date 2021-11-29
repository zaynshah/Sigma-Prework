let nums = [1, 2, 100, 4, 5, 6, 7, 8, 9, -1];
let a = ["min", "max"];
if (nums.length > 0) {
  a[0] = nums[0];
  a[1] = nums[0];
}

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
  if (a[0] > nums[i]) {
    a[0] = nums[i];
  }
  if (a[1] < nums[i]) {
    a[1] = nums[i];
  }
}
console.log(a);
