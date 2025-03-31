
/*ejercicio resuelto con el algoritmo de los 2 punteros 
Tienes una lista de invitados ordenada alfabéticamente, y tu tarea es organizar la mesa para una cena. Sin embargo, algunos invitados prefieren sentarse junto a personas cuyo nombre empieza con la misma letra que el suyo. Tu objetivo es encontrar el primer par de invitados consecutivos que puedan sentarse juntos según este criterio.*/

let listaInvitados = ["Ana", "Brenda", "Carlos", "Daniel", "Dario", "Esteban", "Fernanda", "Gabriel", "Javier", "Liam", "Luis", "Mariana"];

function pareja (listaInvitados){
    let i=0;
    let j=i+1;
    
    while(j<listaInvitados.length){
        if(listaInvitados[i][0] === listaInvitados[j][0]){
            return [listaInvitados[i], listaInvitados[j]]; // guarda el valor del primer par que coincida
        }
        
        i++;
        j++; 
    }
    return null;
};

let resultado = pareja(listaInvitados);
console.log(resultado);

/* ejercicio resuelto con bucles añidados

let listaInvitados = ["Ana", "Brenda", "Carlos", "Daniel", "Dario", "Esteban", "Fernanda", "Gabriel", "Javier", "Liam", "Luis", "Mariana"];


function pareja (listaInvitados){
    let par = [];
    for(let i=0; i<listaInvitados.length; i++){
        for(let j=i+1; j<listaInvitados.length; j++){
            if(listaInvitados[i][0] === listaInvitados[j][0]){
                return [listaInvitados[i], listaInvitados[j]]; // par.push([listaInvitados[i], listaInvitados[j]]); // Almacena el primer par que encuentra
                
            }
        }
    }
    return null;// return par.length > 0 ? par : null; // Retornar todos los pares o null dependiendo el caso
}


let resultado = pareja(listaInvitados);
console.log(resultado); */