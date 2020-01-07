let suits = {
    1:'Hearts', 
    2:'Clubs', 
    3:'Diamonds', 
    4:'Spades'
};
let stringVal = {
    1:'Ace', 
    2:'Two', 
    3:'Three', 
    4:'Four', 
    5:'Five', 
    6:'Six', 
    7:'Seven', 
    8:'Eight', 
    9:'Nine', 
    10:'Ten', 
    11:'Jack', 
    12:'Queen', 
    13:'King'
};
let numVal = {
    1:1,
    2:2,
    3:3,
    4:4,
    5:5,
    6:6,
    7:7,
    8:8,
    9:9,
    10:10,
    11:11,
    12:12,
    13:13
}
class Card{
    constructor(suit, stringVal, numVal){
        this.suit = suit;
        this.stringVal = stringVal;
        this.numVal = numVal;
    }
    show(){
        console.log("A card is shown, it is a " + stringVal + suit + ".");
    }
}
class Deck{
    constructor(){
        this.cards = [];
        for(let x = 0; x < 5; x++){
            console.log("Looping through suits")
            for(let y = 0; y < 14; y++){
                let card = new Card(suit[x], stringVal[y], numVal[y]);
                this.cards.push(card);
                console.log("New card should've been added");
            }
        }
    }
    shuffle(){
        const deck = this.deck;
        let m = deck.length, i;
        while(m){
        i = Math.floor(Math.random() * m--);
        [deck[m], deck[i]] = [deck[i], deck[m]];
        }
        return this;
    }
    deal(){
        return this.deck.pop();
    }
}
class Player{
    constructor(name){
        this.name = name;
        this.hand = 0;
    }
    takeCard(){}
    discardCard(){}
}