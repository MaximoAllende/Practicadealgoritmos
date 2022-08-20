//ejercicio 2(algoritmo de selection sort)

function SelectionSort(arreglo){
    for(let a=0; a<arreglo.length; a++){
        for(let j=a+1; j<arreglo.length;j++){
            if(arreglo[a] > arreglo[j]){
                [arreglo[a] , arreglo[j]] = [arreglo[j] , arreglo[a]]
                console.log(arreglo);
            }
        }
    }
}

console.log(SelectionSort([5,3,1,2,4]));