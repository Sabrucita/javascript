/*Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con
el número de la repetición, es decir que al final de la ejecución del bucle for
deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9.
Mostrar por la consola del navegador el al array final (utilizar console.log).*/

let empty=[];
for (let index = 0; index < 10; index++) {
    empty.push(index);
}
console.log(empty);