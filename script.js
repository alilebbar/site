const ticket={
    nomfilm: "titanic",
    prix : 50,
    numsalle : 15
}
let nom = "ali";
console.log(ticket);
console.log(nom);
let affichage = "bonjour "+nom+" votre film "+ticket.nomfilm+" est en salle "+ticket.numsalle;
console.log(affichage);
const mcf=["alibaba","aladin"]
mcf.push("alice")
console.log(mcf)
mcf.pop()
console.log(mcf)
let nbmcf=mcf.length
console.log(nbmcf)
let listmots = ["Cachalot","Pétunia","Serviette"]
let score = 0
let mot = prompt("entrer le mot "+listmots[0])
if(mot===listmots[0]){
    score++
}else{
    console.log("vous avez raté la reponse")
}
console.log(score)