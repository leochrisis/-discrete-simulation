// Author:  Leonardo Christian

class Aleatory {
  constructor() {}

  // Method used to return a integer inside the min max interval 
  getRandonInt (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  randNorma () {
    var y1, y2, z

    do {
      y1=-Math.log(Math.random())
      y2=-Math.log(Math.random())
    } while ( y2 < (y1-1)*(y1-1)/2 )

    z = ( Math.random()<0.5 ) ? -y1 : y1
    return z
  }

  // Return a gaussian/normal random number, given a media and a deviation 
  randNormal (media, desviation) { 
    return  media + desviation * this.randNorma()
  }

  // Method to ramdomize arrays
  shuffleArray (array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      [array[i], array[j]] = [array[j], array[i]]
    }
  }

  randPoi (expLambda) {
  // explambda=Math.exp(-lambda) -> example to find expLambda
    var p=1 
    var k=0
    do { 
      k++; p*=Math.random()
    } while (p>expLambda)
    return (k-1)
  }

  // Retun a integer with binomial distribuction
  randBinom(p, n) {
    var numSucessos = 0
    for(var i = 1; i <= n;i++) { 
      numSucessos+= randbernou(p)
    }
    return numSucessos;
  }
}

module.exports = Aleatory
