//ejercicio 3(acomodar los numeros y ir buscando de a mitades)

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
 
  
 function Encontrarmitad(a,b){ 
    let num = 1; 
    let i = 0; 
    let j = a.length; 
    let p = false; 
    while (p == false) { 
        console.log("intento == " + num) 
        let center = Math.floor((i+j)/2); 
        console.log("mid " + center) 
        if (center == b) { 
            p = true; 
        } 
        else  if (b > center){ 
            console.log("i1 == " + i) 
            i = center; console.log("i2 == " + i) 
        } 
        else if (b < center){ 
            console.log("j1 == " + j) 
            j = center; 
            console.log("j2 == " + j) 
        } 
        num++; 
    } 
    if (p == true) {
        return true 
    } 
 } 
  
 console.log(Encontrarmitad([1,2,3,4,5,6,7,8,9,10], 1));