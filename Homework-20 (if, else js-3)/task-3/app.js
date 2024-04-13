var first = parseInt(prompt("Üçbucağın ilk tərəfini daxil edin:"));

var second = parseInt(prompt("Üçbucağın ikinci tərəfini daxil edin:"));

var third = parseInt(prompt("Üçbucağın üçüncü tərəfini daxil edin:"));

if (first === second && first === third){console.log("Bu bərabərtərəfli üçbucaqdıq.")}
else if(first !== second && first !== third && second !== third){console.log("Bu tərəfləri müxtəlif olan üçbucaqdır.")}
else if(first === second ){console.log("Bu bərabər yanlı üçbucaqdıq.")}
else if(first === third ){console.log("Bu bərabər yanlı üçbucaqdıq.")}
else if(third === second ){console.log("Bu bərabər yanlı üçbucaqdıq.")}

else{console.log("Yanlış daxil edilmişdir.")}
