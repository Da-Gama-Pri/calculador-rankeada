function partida(victory, defeat) {
    let resultado = victory - defeat
    return resultado
  }
  
  function rank() {
    let resultRank = partida(80, 10)
    let nivel = ""
    if (resultRank < 10) {
      nivel = "Ferro"
    } else if (resultRank > 10 && resultRank < 20) {
      nivel = "Bronze"
    } else if (resultRank > 20 && resultRank < 50) {
      nivel = "Prata"
    } else if (resultRank > 50 && resultRank < 80) {
      nivel = "Ouro"
    } else if (resultRank > 80 && resultRank < 90) {
      nivel = "Diamante"
    } else if (resultRank > 90 && resultRank < 100) {
      nivel = "Lendário"
    } else if (resultRank > 100) {
      nivel = "Imortal"
    }
    return `O Herói tem de saldo de ${resultRank} e está no nível de ${nivel}`
  }
  
  console.log(rank())