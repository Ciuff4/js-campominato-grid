/*L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

const wrapper = document.querySelector("main");

document.getElementById("bottone").addEventListener("click", start);


function start(){
    reset(wrapper);
    const level= document.getElementById("level").value;
    const livelli= [100,81,49];
    const totBox= livelli[level];
    createCont(totBox);
}


/**
 * funzione che sceglie il livello di difficoltà
 * @param {*} dove 
 * @param {*} n 
 */




/**
 * funzione che crea la griglia di gioco
 * @param {*} dove 
 * @param {*} n 
 */
function createCont(totBox){
    const container= document.createElement("div");
    container.className="cg-container";
    wrapper.append(container);
    for (let i = 1; i <= totBox; i++) {
        boxCreation(container, i, totBox);
    }
}



/**
 * funzione che crea i box
 * @param {} place 
 */
function boxCreation(dove, n, totBox){
    const box= document.createElement("div");
    box.className="box b"+totBox;
    box.innerHTML=`<span> ${n} </span>`;
    dove.append(box);
    return box
}



/**
 * funzione di reset dell'elemento
 * @param {*} place 
 */
function reset(place) {
    place.innerHTML=` `;
}






















//

/*metto i box all'interno del container */
// console.log(init());
// // function init(){
// //     for (let i = 1; i < 100; i++) {
// //         box= createBox(container,i);
// //     }
// // }


// console.log(createBox(container));
// //creo i box
// function createBox(place,n){
//     const box=document.createElement("div");
//     box.className="box";
//     box.innerHTML=`<span> ${n} </span>`;
//     place.append(box);
//     return box;
// }


// function addNumber(num1,num2){
//     for(let i=0; i<=100; i++){
        
//     }
// }
// console.log(addNumber());



/*ogni bomba è un numero random di un array
se il numero è nell'array allora è una bomba*/