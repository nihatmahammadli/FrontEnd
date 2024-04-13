var girişbalı = parseInt(prompt("Imtahana qədər ki balınızı daxil edin:"))

var imtahanbalı = parseInt(prompt("İmtahanda topladığınız balı daxil edin:"))

var cəm = girişbalı + imtahanbalı;

if(cəm < 51 ) {console.log(`İmtahan qədər: ${girişbalı}
İmtahanda: ${imtahanbalı}
Ümmumi: ${cəm} 
Qiymət: F
"Sizin aldığınız qiymət: F"`) }else if(cəm >=51 && cəm <61){
    console.log(`
İmtahan qədər: ${girişbalı}
İmtahanda: ${imtahanbalı}
Ümmumi: ${cəm} 
Qiymət: E
"Sizin aldığınız qiymət: E"`)
}else if(cəm >=61 && cəm <71){
    console.log(`
İmtahan qədər: ${girişbalı}
İmtahanda: ${imtahanbalı}
Ümmumi: ${cəm} 
Qiymət: D
"Sizin aldığınız qiymət: D"`)
}else if(cəm >=71 && cəm <81){
    console.log(`
İmtahan qədər: ${girişbalı}
İmtahanda: ${imtahanbalı}
Ümmumi: ${cəm} 
Qiymət: C
"Sizin aldığınız qiymət: C"`)
}else if(cəm >=81 && cəm <91){
    console.log(`
İmtahan qədər: ${girişbalı}
İmtahanda: ${imtahanbalı}
Ümmumi: ${cəm} 
Qiymət: B
"Sizin aldığınız qiymət: B"`)
}else if(cəm >=91 && cəm <=100){
    console.log(`
İmtahan qədər: ${girişbalı}
İmtahanda: ${imtahanbalı}
Ümmumi: ${cəm} 
Qiymət: A
"Sizin aldığınız qiymət: A"`)
}
