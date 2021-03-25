/*Al array anterior convertir la primera letra de cada palabra en mayúscula y
mostrar una alerta por cada palabra modificada.*/
let days=["monday","tuesday","wednesday","thursday","friday"];
for (let index = 0; index < days.length; index++) {
    const element = days[index];
    firstLetter=element.substring(0,1);
    rest=element.length;
    restWord=element.substring(1,rest);
    days[index]=firstLetter.toUpperCase()+restWord;
		alert(days[index]+"\nFirst letter has been changed to Capital Letter");
}