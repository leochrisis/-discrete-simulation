// Author: Leonardo Christian

const Aleatory = require('./Aleatory.js') // Aleatory class call, used to generate simulation random numbers
const simulationNumber = new Aleatory() // Instantiating a new object from Aleatory class

const simultaneousCalls = 4000 // Number of max calls suported
const workTime = 16 // Time in hours
const hours = 3600 // It's in seconds
const minutes = 60 // It's in seconds too
const rate = 6/10 // It's the chance to take an call in 6/10 seconds. Original rate is 100 calls peer min
const media = 4 // in minutes
const deviation = 1 // in minutes

var unattendedClients = 0 // used to make final conclusions
var customersServed = 0 // you know what it's for
var calls = 0 // Calls number to control clients reciveds
var currentTime = 0 // Time from the begin of the day work
var maxChannelsBusy = 0 // Used to determine the max channels busy
var clientsInCall = []

// I use this to sort array
function growing(a, b) {
  return a - b;
}

// Here we start to simulate our work day :v 
while (currentTime < 16 * hours) {
  // console.log(currentTime) // ---> use this if you're bored of seeing a black screen :)
  // Treatment when we have busy lines
  if (clientsInCall.length !== 0) {
    clientsInCall.sort(growing)

    if(clientsInCall[0] <= currentTime) {
      clientsInCall.shift()
      calls -= 1
    }
  }
  
  // Treatment for an arived client
  if (Math.random() < rate) {
    // If we have free channels to receive calls
    if (calls < simultaneousCalls) {
      calls += 1
      customersServed += 1
      clientsInCall.push(simulationNumber.randNormal(media * minutes, deviation * minutes) + currentTime)
    // If all the channels are busy
    } else {
      unattendedClients += 1
    }
  }

  if (calls > maxChannelsBusy) {
    maxChannelsBusy = calls
  }

  // Just to ensure that we have just one event peer second
  currentTime += rate
}

// Finally, our cute results :D
console.log('A ocupação máxima dos canáis foi de: ', maxChannelsBusy)
console.log('O número de clientes atendidos: ', customersServed)
console.log('O número de clientes não atendidos: ', unattendedClients)
