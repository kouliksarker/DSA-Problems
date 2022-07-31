var threeSum = function(nums) {
    
    let n = nums.length;
    nums.sort((a, b) => a - b);
    
    
    const result = [];
    
    for(let i = 0; i<n-1; i++){
        
        if(i>0 && nums[i]==nums[i-1]){
            continue;
        }
        
        let left = i+1;
        let right = n-1;
        
        while(left<right){
            
            let sum = nums[i] + nums[left] + nums[right];
            
             if(sum < 0) {
                
                 left++;
            } 
            else if(sum > 0) {
                
                right--;
            } 
            else {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                while(nums[left] == nums[left - 1] && left < right) {
                    left++;
                }    
            }
        
    }
}      
    return result;
};


