var removeDuplicates = function(nums) {
    
    let i = 1;
    let j = 1;
    
while(j<nums.length){
    
    if(nums[j] > nums[j-1]){
        nums[i] = nums[j];
        i++;
    }
    j++;
}
return i;
};

