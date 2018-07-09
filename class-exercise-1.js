//Classes from 28.05.2018
//There was an exircise to be made in class

//Question 2: Simulating a bynomial function in js
var experiences = 10000
var cg = 0

for (var i = 0; i < experiences; i++) {
  var success = 0
  for (var j =0; j < 100; j++) {
    if (Math.random() < 0.5) {
      success++
    }
  }
  if (success >= 45 && success <= 60){
    cg++
  }
}

var prob = cg/experiences
console.log('[Question 2] The probability is',prob,'\n')

//Question 3: Finding expected values for E[x] and E[y]
var experiences = 10000
var mediaX = 0
var mediaY = 0

for (var i = 0; i < experiences; i++) {
  var x = Math.pow(Math.random(), 0.25)
  var y = 1/(x + 1)
  mediaX += x
  mediaY += y
}
mediaX = mediaX/experiences
mediaY = mediaY/experiences
console.log('[Question 3] The media E[x] is',mediaX, 'and the media E[y] is',mediaY)
