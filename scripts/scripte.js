//afficher le resultat 
function AfficherResultat(resultat,nombrelist){
    let resultathtm=document.querySelector(".zoneScore span")
    resultathtm.innerText=resultat+"/"+nombrelist
}
function choix(){
         let choix = document.querySelectorAll(".optionSource input")
         for(e=0;e<choix.length;e++){
            if(choix[e].checked)break;
         }
         return e
}


//fonction principale
function Principale(){
    let nombreProposer=0
    let score=0
    let i=0
    let choix1=choix()
    let list
    if(choix1===0){
        list=[...listmots]
     }else{
        list=[...listphrase]
    }
    let ZoneDeProposition=document.querySelector(".zoneProposition")
    ZoneDeProposition.innerText= list[i]
    let zoneEcriture=document.getElementById("inputEcriture")
    let bouton=document.getElementById("btnValiderMot")
    bouton.addEventListener("click",()=>{
        
    if(zoneEcriture.value===list[i])
             {
                score++
             }
             i++
      zoneEcriture.value=''
      if(list[i]=== undefined){
        ZoneDeProposition.innerText="le jeu est fini"
        bouton.disabled=true
       }else{
        ZoneDeProposition.innerText=list[i]
       }
       AfficherResultat(score,i)
    })


}






