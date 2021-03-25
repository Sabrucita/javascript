/*Crear una variable de tipo string con al menos 2 palabras larga
(10 caracteres y algún espacio entre medio). Utilizar los métodos de
los ejercicios anteriores para generar un nuevo string que tenga la primera
letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar
indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
x="weekly problem";
whiteSpace=x.indexOf(" ");
y=x.length;
firstLetter=x.substring(0,1);
firstCapitalLetter=firstLetter.toUpperCase();
secondLetter=x.substring(whiteSpace+1,whiteSpace+2);
secondLetterCapital=secondLetter.toUpperCase();
firstWord=x.substring(1,whiteSpace+1);
firstWordMinus=firstWord.toLowerCase();
secondWord=x.substring(whiteSpace+2,y);
secondWordMinus=secondWord.toLowerCase();
result=firstCapitalLetter+firstWordMinus+secondLetterCapital+secondWordMinus;