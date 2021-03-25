/*Crear una variable llamada “sentence” que tenga un string vacío, luego al array
del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de
la variable sentence. Al final mostrar una única alerta con la cadena completa.*/
let days=["monday"," tuesday"," wednesday"," thursday"," friday"];
sentence="";
for (let index = 0; index < days.length; index++) {
    const element = days[index];
    sentence=sentence+element;
}
alert(sentence);