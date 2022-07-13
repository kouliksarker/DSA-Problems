var isPalindrome = function(x) {
    
    var rev = 0;
    var temp = x;
    
    if(x<0){
        return false;
    }
  
        while(x>0){
        
            rev = (rev*10) + (x%10);
            x = parseInt(x/10);
    }
        return rev === temp;
    
};
