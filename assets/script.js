var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for(var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}


function selectTopic(){
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
      } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
      } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
      } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
      } else {
        console.log('Please try again!');
      }
}

console.log("Here are the topics we learned through prework:");
listTopics()
console.log("Which topic should we study first?");
selectTopic()





/*
var names = ["Marc", "Becky", "Willow", "Elsie"];

for(var x = 0; x < names.length; x++) {
    console.log(names[x]);
}

var cars = ["astra", "golf", "mini"];
for(var x = 0; x <cars.length; x++) {
    console.log(cars[x]);
}
*/