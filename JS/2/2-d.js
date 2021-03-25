/*Crear una variable de tipo string con al menos 10 caracteres y generar
un nuevo string con la primera letra en mayúscula y las demás en minúscula.
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
toLowerCase y el operador +).*/
x="Hello World";
y=x.length;
firstLetter=x.substring(0,1);
firstCapitalLetter=firstLetter.toUpperCase();
restString=x.substring(1,y);
restStringMinus=restString.toLowerCase();
result=firstCapitalLetter+restStringMinus;
console.log(result);