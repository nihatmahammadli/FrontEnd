var age = parseInt(prompt("Yaşınızı daxil edin:"));

var sell = parseInt(prompt("Məhsulun qiymətini daxil edin:"));

if(age<18){console.log(`Sizə 25% endirim olundu ödəyəcəyiniz məbləğ:${sell - ((sell * 25) / 100)} qədərdir.`)}
else {console.log(`Sizə 16% endirim olundu ödəyəcəyiniz məbləğ:${sell - ((sell * 16) / 100)} qədərdir.`)}