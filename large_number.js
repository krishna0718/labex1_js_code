function max(x,y,z){
    if(x >= y && x >= z){
        return x;
    }
    else if(y >= z && z >= x){
        return y;
    } 
    else {
        return z;
    }
}
    console.log("The largest Number is:- " + max (1,0,1));
    console.log("The largest Number is:- " + max (0,-10,-20));
    console.log("The largest Number is:- " + max (1000,510,440));    
