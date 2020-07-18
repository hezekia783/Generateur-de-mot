

const btn = document.querySelector('button');
//creation event quand on click sur le bouton
btn.addEventListener('click', (e)=>{
    //pour stoper le event par defaut des boutons
    e.preventDefault();
    //stocker la valeur entrer par l'utilisateur
    let txt = document.querySelector("#tap").value; 
    //pour afficher la valeur entrer dans le resultat 
    function reverse(rvs){
        //transforme en Array les texts
        let splitMot = rvs.split('');
        //renverser les Arrays
        let verlArray = splitMot.reverse();
        //rejoindre les Arrays
        let joinArray = verlArray.join('');
        return joinArray;
    }
    document.querySelector(".rep").innerHTML = reverse(txt);
})