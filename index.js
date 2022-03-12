// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy Birthday to me!`);
//     debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

//     function wrapGifts(gifts) {
//         for (let i = 0; i < gifts.length; i++) {    
//             console.log(`Wrapped ${gifts[i]} and added some ribbon!`);
//             // debugger;
//         }
//         return gifts;
//     }

//     wrapGifts(gifts);



// function writeCards(names, event){
//     let cardsForFriends = [];

//     for (let i = 0; i < names.length; i++)
    
//     cardsForFriends.push(`Dear ${names[i]}, have a safe and fun ${event}!`);

//     return console.log(cardsForFriends);

// }

// writeCards(["Zelle", "Cairo", "George"], "Birthday");

// function plantGarden() {
//     let keepWorking = true;
//     while (keepWorking) {
//       chooseSeedLocation();
//       plantSeed();
//       waterSeed();
//       keepWorking = checkForMoreSeeds();
//     }
//   }
  

function countDown(){
    let count = 10;
while (count >= 0) {
  console.log(count--);
}
}
countDown();