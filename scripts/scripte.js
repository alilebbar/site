
//la fonction des choix 
function ResultaChoix(){
    let testChoix = prompt("mot ou phrase ?")
    while(testChoix !== "mot" && testChoix !== "phrase"){
    testChoix = prompt("mot ou phrase ?")
    }
return testChoix
}
//afficher le resultat 
function AfficherResultat(resultat){
    switch (resultat){
        case 0:
        {
            console.log("Dommage vous etes null votre resultat est 0 essaye la prochaine fois")
            break;
        }
        case 1:
            {
             console.log("votre resulta est 1 essaye la prochaine fois!")
             break;   
            }
        case 2:
            {
             console.log("bravo votre resultat 2 !")
             break;   
            }
        case 3:
            {
             console.log("exellent votre resultat est 3")   
             break;
            }

    }


}
//Boucle de jeu
function BoucleDeJeu(choixUtilisateur){
        let list 
        if (choixUtilisateur='mot'){
            list = [...listmots]
        }else{
            list = [...listphrase]
        }
        let i=0
        let score=0
        while(i<list.length){
        let mot = prompt("entrer le mot : "+list[i])
        if(mot===list[i]){
            score++
        }
        i++
        }
        return score
        
}
//fonction principale
function Principale(){
    let choix = ResultaChoix()
    let resultatfinal=BoucleDeJeu(choix)
    AfficherResultat(resultatfinal)
}






