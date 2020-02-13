// buatlah sebuah function factorial dimana jika inputnya 3 maka (3x2x1) dan hasilnya 6     => 25 point


function fact(x){
    let output=1
    for(let i=x;i>0;i--){
        output*=i
    }    
    return output
}





console.log(fact(5))  //120
console.log(fact(4))  //24
console.log(fact(10)) //3628800