function angle_type(angle){
    if(angle < 90){
        return"An angle between 0 and 90 degrees is an acute angle.";
    }
    else if (angle == 90){
        return"An 90 degree angle is a right angle.";
    }
    else if (angle < 90 || angle < 180){
        return"An angle between 90 and 180 degrees is a obtuse angle.";
    } 
    else {
        return "A 180 degree angle is a straight angle."
    }
}
console.log(angle_type(47))
console.log(angle_type(90))
console.log(angle_type(150))
console.log(angle_type(180))
