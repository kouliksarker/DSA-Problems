var searchInsert = function(nums, target) {
    
    let l=0;
    let h=nums.length-1;
    let mid;
    
    while(l<=h){
        
    mid = Math.floor((l+h)/2);
        
    if(nums[mid]==target){
        return mid;
    }
    if(target>nums[mid]){
        l = mid + 1;
    }
    if(target<nums[mid]){
        h = mid - 1;
    }
}
    
   return l;
};