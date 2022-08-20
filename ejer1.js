//ejercicio 1(algoritmo de busqueda lineal)

function Busquedalineal(a,nro){
    for(let i = 0;i<a.length;i++){
        if(a[i]==nro){
            return true;
        }
    }
    
    return false;
}   
console.log(Busquedalineal([2,3,5,11],5));