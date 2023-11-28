function AfficherResultat(score,nbpropositon){
    let affichage=document.querySelector(".zoneScore span")
    affichage.innerHTML=`${score}/${nbpropositon}`
}
function afficherProposer(caractaire){
    let Zonedeprorposition=document.querySelector(".zoneProposition")
    Zonedeprorposition.innerText=caractaire
}
/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score. 
 */
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}+?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je vais de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}
    let score=0
    let i=0
    let liste




function lancerJeu(){
    score=0
    i=0
    liste=listeMots
    initAddEventListenerPopup()
let Zonedeprorposition=document.querySelector(".zoneProposition")
Zonedeprorposition.innerText=liste[i]
let Bouton=document.getElementById("btnValiderMot")
Bouton.addEventListener("click",()=>{
    let ZoneEcriture=document.getElementById("inputEcriture")
    if(ZoneEcriture.value===liste[i]){
        score++
    }
    i++
    AfficherResultat(score,i)
    ZoneEcriture.value=""
    if(liste[i]===undefined){
        afficherProposer("partie terminer")
        Bouton.disabled=true
    }else{
        afficherProposer(liste[i])
    }
    AfficherResultat(score,i)

})
}
let radio=document.querySelectorAll(".optionSource input")
for(index=0;index<radio.length;index++){
    radio[index].addEventListener("change",(event)=>{
        if(event.target.value==="1"){
           liste=listeMots
        }else{
            liste=listePhrases
        }
        afficherProposer(liste[i])
    })
    AfficherResultat(score,i)
}
//message d'erreur
function AfficherMessageErreur(messageErreur){
   let MessageErr=document.getElementById("erreur")
   MessageErr.innerText=messageErreur
}

//fonction gere formulaire

function gererFormulaire(){
    try{
        let nom=document.querySelector("form input[type='text']")
        ValidNom(nom.value)
        let email=document.querySelector("form input[type='email']")
        ValidEmail(email.value)
        afficherEmail(nom.value, email.value, score)
        AfficherMessageErreur("") 
    }catch(erreur){
        AfficherMessageErreur(erreur.message) 
    }
    
}

// ecouter le submit du formulaire
let form=document.querySelector("form")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    gererFormulaire()
})


// fonction pour valider le nom du formulaire
function ValidNom(nom){
     if(nom.length<2){
        throw new Error("le nom est trop court.");
     }
    
}
// fonction pour valider l'email
function ValidEmail(email){
    emailRegexp= new RegExp("[a-z0-9-_.]+@[a-z0-9-_.]+\\.[a-z0-9-_.]+")
    if(!emailRegexp.test(email)){
        throw new Error("l'email n'est pas ecrit correctement.")
    }
    
}