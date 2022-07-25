var plusOne = function(digits) {
    
    let n = digits.length;
     
    if(digits[n-1]<9){
        
        digits[n-1]=digits[n-1]+1;
        return digits;
    }
    else{
        let i=2;
        digits[n-1]=0;
        
        while(i<=n){
            
        if(digits[n-i]<9){
            digits[n-i]=digits[n-i]+1;
            return digits;
        }
       
        else{digits[n-i]=0;}
            i=i+1;
    }
        
    digits.unshift(1);
    return digits;
        }
    
};