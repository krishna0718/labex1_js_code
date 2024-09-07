function firstword_capital(str){
    str= str.split(" ");
    str = str.map(word => word.charAt(0).toUpperCase()+word.slice(1));
    return str.join(' ');
}
console.log(firstword_capital("the quick brown fox"));