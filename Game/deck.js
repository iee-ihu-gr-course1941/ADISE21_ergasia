
const SUITS = ["♠"," ♥","♦ ","♣"]
const VALUES =["A","2","3","4","5","6","7","8","9","10"]

export default class Deck {
    constructor(cards=freshDeck()){
        
            this.cars= cards 
            
    
    }

    shuffle(){
        this.cars.sort((a,b)=>Math.random()-.5)
    }
       
}

class Card{
    constructor(suit,value){
        this.suit=suit
        this.value=value

    }

}


function freshDeck(){
    return SUITS.flatMap(suit =>{
        return VALUES.map(values =>{
            return new Card(suit,values)     
            
            
        })     
               
    })


}