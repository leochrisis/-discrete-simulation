//Using acceptance-rejection method (Montecarlo method)

var expNumber = 10000
var sucess = 0
var sucess1 = 0

for (var i = 0; i< expNumber; i++) {
  var x = Math.random()
  var y = 4*Math.random()

  if (y < f(x)) {
    sucess++
    if (x < 0.6) {
      sucess1++
    }
  }
}

function f (x) {
  return 4*x*x*x
}

var prob = sucess1/sucess
console.log('The found probability is:', prob)
