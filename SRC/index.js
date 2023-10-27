//classificador de nível de herói

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 6.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante 

let NomeHeroi= ("Bravus");

let XP = 1000

console.log("O herói de nome " + NomeHeroi + " está no nível: " ) 

if (XP < 1001){
console.log("Ferro")
}
else if (XP > 1001 && XP <2001){
  console.log("Bronze")
}
else if (XP > 2001 && XP <5001){
  console.log("Prata")
}
  else if (XP > 5001 && XP <7001){
    console.log("Ouro")
  }
    else if (XP > 7001 && XP <8001){
      console.log("Platina")
    }
      else if (XP > 8001 && XP <9001){
        console.log("Ascendente")
      }
        else if (XP > 9001 && XP <10001){
          console.log("Imortal")}
else
  console.log("Radiante")