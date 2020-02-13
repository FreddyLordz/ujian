//  diketahui jumlah koin sen pecahan [25,10,5,1] buatlah sebuah function yang akan mengembalikan 
// sebuah number berapa jumlah koin yang akan didapatkan jika jika kita ingin mendapatkan jumlah
// uang sen tertentu contoh untuk mendapatkan 31 sen maka dibutuhkan 3 koin yaitu 25 sen,5 sen ,dan 1 sen

function cekkoin(koin) {
    var sum = 0
    var sisa = 0
    if (koin % 25 < koin) {
        sum += parseInt(koin / 25);
        sisa = koin % 25;
        koin = sisa;
    }
    if (koin % 10 < koin) {
        sum  += parseInt(koin / 10);
        sisa = koin % 10;
        koin = sisa;
    }
    if (koin % 5 < koin) {
        sum += parseInt(koin / 5);
        sisa = koin % 5;
        koin = sisa;
    }
    sum += parseInt(koin / 1);
    return sum
}

console.log(cekkoin(49)) //7
console.log(cekkoin(31)) //3
console.log(cekkoin(50)) //2