/*Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre
los siguientes mensajes de alerta:
1- “Bebe” si la edad es menor a 2 años
2- “Nino” si la edad es entre 2 y 12 años
3- “Adolecente” si la edad es entre 13 y 19 años
4- “Joven” si la edad está entre 20 y 30 años
5- “Adulto” entre 31 y 60 años
6- “Adulto mayor” entre 61 y 75 años
7- “Anciano” si es mayor a 75 años*/

x=Math.floor(Math.random()*101);
console.log(x);
if (x<2)
{
    console.log("Bebe");
}
else if (x<=12)
{
    console.log("Nino");
}
else if (x<=19)
{
    console.log("Adolescente");
}
else if (x<=30)
{
    console.log("Joven");
}
else if (x<=60)
{
    console.log("Adulto");
}
else if (x<=75)
{
    console.log("Adulto mayor");
}
else
{
    console.log("Anciano");
}