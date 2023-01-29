let i=0
let error=0
let cont=1234
let contraseña=prompt("Ingrese contraseña")

do {
 
if(error>=2){
    console.log("CONTRASEÑA INCORRECTA")
    i=i+1
    contraseña=prompt("Ingrese contraseña nuevamente")
    error=error+1
}
} while (cont!=contraseña);
alert("Contraseña Correcta");