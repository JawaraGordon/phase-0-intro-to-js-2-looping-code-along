// Code your solutions in this file

beforeEach( () => {
  spy = sinon.spy( console, 'log' );
} );

function writeCards(names, event){
    let cardsForFriends = [];

    for (let i = 0; i < names.length; i++)
    
    cardsForFriends.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);

    return cardsForFriends;

}

afterEach( () => {
  spy.restore();
} );

beforeEach( () => {
  spy = sinon.spy( console, 'log' );
} );


function countDown(){
    let count = 10;
while (count >= 0) {
  console.log(count--);
}
}
countDown();

afterEach( () => {
  spy.restore();
} );
