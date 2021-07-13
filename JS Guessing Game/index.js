let cards=[
    {
        image:"cannonbolt.png",
        value:1,
        status:"closed"
    },
    {
image:"cannonbolt.png",
        value:1,
        status:"closed"
    },
    {
       image:"Diamondhead.png",
        value:2,
        status:"closed"
    },
    {
       image:"Diamondhead.png",
        value:2,
        status:"closed"
    },
    {
       image:"fireblast.png",
        value: 3,
        status:"closed"
    },
    {
       image:"fireblast.png",
        value: 3,
        status:"closed"
    },
    {
       image:"fourarms.png",
        value: 4,
        status:"closed"
    },
    {
       image:"fourarms.png",
        value: 4,
        status:"closed"
    },
    {
       image:"xlr8.png",
        value: 5,
        status:"closed"
    },
    {
       image:"xlr8.png",
        value: 5,
        status:"closed"
    },

]
//shuffle the array everytime
let temp;
for( let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
temp=cards[i];
cards[i]=cards[j];
cards[j]=temp;

}
let cardsCopy=cards;
//display html in cards
function displayCards(data){
    let cardsString="";
   data.forEach(function(card,index) {
       cardsString+=`
    <div class="card" style="background-image:url('${card.image}')">
<div class="overlay ${card.status}"
 onclick="openCard(${index})" >
    </div>
       </div>
       
       `;
       
   });
   document.getElementById('cards').innerHTML=cardsString;


}
displayCards(cards);
//do the game
let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

cards[index].status="opened";
if(cardCount===1){
    val1=cards[index].value;
    cardCount++;
}
else if(cardCount===2){
    val2=cards[index].value;
    if(val1===val2){
        score++;
        document.getElementById('score').innerText=score;
        //resetting after one pick 
        val1=null;
        val2=null;
        cardCount=1;
    }
    else{
//          val1=null;
//          val2=null;
//         score=0;
//          cardCount=1;
//          document.getElementById('score').innerText=score;
//  cards=cardCount;
 
//or
     alert("Game over");
     location.reload();
        

    }
}
displayCards(cards);


}