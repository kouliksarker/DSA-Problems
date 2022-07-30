
 var searchRange = function(nums, target) {
    
    let n = nums.length;
    let l = 0;
    let r = n-1;
    let mid;
    let index =-1;
    
    while(l<=r){
        
        mid = parseInt((l+r)/2);
        if(nums[mid]==target){
            index = mid;
            break;
        }
          
        else if(nums[mid]<target){
            l=mid+1;
        }
        
        else{
            r=mid-1;
      }
    }
    if(index == -1)
    return [-1,-1];
    
    let left = index;
    let right = index;
    let i = index-1;
    
    while(i>=0){
        if(nums[i]==target){
            left = i;
        }
        i--;
    }
    
     r = n-1;
     i = index + 1;
    
    while(i<=r){
        if(nums[i]==target){
            right = i;
        }
        i++;
    }
    return [left,right];
    
};