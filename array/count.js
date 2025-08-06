const nums = [2,3,2,1,10];
function count(nums, a) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === a) {
            count++;
        }
    }
    return count;
}

console.log(count(nums, 2)); // Output: 1