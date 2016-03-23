var testdatabaseAttrs = [
{Attribute:"attr",name:"Black Belt",health:0,hp:1},
{Attribute:"attr",name:"purple belt",health:0,hp:1},
{Attribute:"attr",name:"Black2 Belt",health:0,hp:1},
{Attribute:"attr",name:"polk dot belt",health:0,hp:1}];

var testdatabaseChars = [
{Attribute:"Char",name:"Clu",health:1,hp:1},
{Attribute:"Char",name:"Tron",health:1,hp:1},
{Attribute:"Char",name:"Sark",health:1,hp:1},
{Attribute:"Char",name:"Neo",health:1,hp:1},
{Attribute:"Char",name:"Soul",health:1,hp:1}
];

//char hands for characters
var p1charhand = [{Attribute:"Char",name:"Clu",health:1,hp:1},
{Attribute:"Char",name:"Tron",health:1,hp:1},
{Attribute:"Char",name:"Sark",health:1,hp:1},
{Attribute:"Char",name:"Neo",health:1,hp:1},
{Attribute:"Char",name:"Soul",health:1,hp:1}
];
var p2charhand = [{Attribute:"Char",name:"Tron",health:1,hp:1}];


//******attack arrays p1 and p2
var p1attackChar = ["undefined"];
//p1attackchar is defined with the click on the card
var p2attackChar = [{Attribute:"Char",name:"Tron",health:1,hp:1}];
//p2 is hard coded for testing purposes


//**Game mode intialisers

//*******variable for deciding the turn for the attack sequeny
var AttackTurn = 2;
///**** note attack turn 2 is one player attack 1 is two player


//variable to lock down the buttons for backwards action when game is in progress
var gameMode ="Start";

//hide all the cards
$('.card').hide();


///disburse cards to players function
$('#disburseCardbutton').on('click',function(){
  $('.card1text').text(p1charhand[0].name,p1charhand[0].hp);
  $('.card2text').text(p1charhand[1].name,p1charhand[1].hp);
  $('.card3text').text(p1charhand[2].name,p1charhand[2].hp);
  $('.card4text').text(p1charhand[3].name,p1charhand[3].hp);
  $('.card5text').text(p1charhand[4].name,p1charhand[4].hp);
  // $('.card6text').text(p2charhand[0].name,p2charhand[0].hp);
  // $('.card7text').text(p2charhand[1].name,p2charhand[1].hp);
  // $('.card8text').text(p2charhand[2].name,p2charhand[2].hp);
  // $('.card9text').text(p2charhand[3].name,p2charhand[3].hp);
  // $('.card10text').text(p2charhand[4].name,p2charhand[4].hp);
  $('.card').show();
});

//////Card selection for attack action
//card 1 click action
$('#card1').on('click', function() {
  console.log("attack char added from p1 [0]");
  //pop attack char array
  p1attackChar.pop();
  //remove active attack card
  $('.card.player1').appendTo($('#p1attackstack'));
  //push selected card into attack char array
  p1attackChar.push(p1charhand[0]);
//append card1 to playerboard
  $( "#card1" ).appendTo( $( "#attackboard" ) );
 console.log("ATTACK CHAR IS" + p1attackChar[0]);
});



//card 2 click action
$('#card2').on('click', function() {
console.log("attack char added from p1 [1]");
  p1attackChar.pop();
    //remove active attack card
  $('.card.player1').appendTo($('#p1attackstack'));
  p1attackChar.push(p1charhand[1]);
 $( "#card2" ).appendTo( $( "#attackboard" ) );
 console.log("ATTACK Char object - " + p1attackChar[0]);
});

//card 3 click action
$('#card3').on('click', function() {
   console.log("attack char added from p1 [2]");
  p1attackChar.pop();
    //remove active attack card
  $('.card.player1').appendTo($('#p1attackstack'));
  p1attackChar.push(p1charhand[2]);
  $( "#card3" ).appendTo( $( "#attackboard" ) );
 console.log("ATTACK Char object - " + p1attackChar[0]);
});

///card 4 click action
$('#card4').on('click', function() {
   console.log("attack char added from p1 [3]");
 p1attackChar.pop();
   //remove active attack card
  $('.card.player1').appendTo($('#p1attackstack'));
  p1attackChar.push(p1charhand[3]);
  $( "#card4" ).appendTo( $( "#attackboard" ) );
  console.log("ATTACK Char object - " + p1attackChar[0]);
});

//card 5 click action
$('#card5').on('click', function() {
   console.log("attack char added from p1 [4]");
 p1attackChar.pop();
   //remove active attack card
  $('.card.player1').appendTo($('#p1attackstack'));
  p1attackChar.push(p1charhand[4]);
  $( "#card5" ).appendTo( $( "#attackboard" ) );
  console.log("ATTACK Char object - " + p1attackChar[0]);
});





//attack valuation sequence
var attackTurn = function(attackTurn,p1attackChar,p2attackChar){
  console.log("attack intiatied");
  console.log("begining p1 attack char health ",p1attackChar[0].health);
  console.log("begining p2 attack char health ",p2attackChar[0].health);
  if (attackTurn %2 ===0){
   p2attackChar[0].health=p2attackChar[0].health-p1attackChar[0].hp;

    console.log("p1 attack char health" + p1attackChar[0].health);
    console.log("p2 attack char health" +p2attackChar[0].health);
  }
  else{
    alert("else function needs to be programmed");
 // p1attackChar[0].health=p1attackChar[0].health-p2attackChar[0].hp;
 //   console.log(p2attackChar[0].health);
  }
};





// //*****Disbursement button to  randomized and distribute cards
// var attrdisbursmentTurn = function(testdatabaseAttrs,p1attrhand,p2attrhand){
//  //randomize cards and then deal to the players
// randomizer(testdatabaseAttrs,p1attrhand,p2attrhand);
// disburser(testdatabaseAttrs,p1charhand,p2charhand);
// return p1attrhand,p2attrhand;
// };


//*******disbursment function to divide the main deck into two hands
var disburser = function(inputArray,outputarray1,outputarray2){
// takes one array and splits it into the two player arrays
for(var i = 0; i < inputArray.length; i++){
    if(i%2 === 0 ){
    outputarray1.push(inputArray[i]);
    }
  else{
    outputarray2.push(inputArray[i]);
  }
}
};


//*****Disbursement button to  randomized and distribute cards
var chardisbursmentTurn = function(testdatabaseChars,p1charhand,p2charhand){
///char disburment turn randomizes the cards
//then it disbureses them to the player hands
//randomizer(testdatabaseChars);
randomizer(testdatabaseChars,p1charhand,p2charhand);
disburser(testdatabaseChars,p1charhand,p2charhand);
console.log(p1charhand);
console.log(p2charhand);
return p1charhand,p2charhand;
};


///******** shuffle methodology
var randomizer = function(array){
var i, j, k;
var temp;
var times=2;

  for (i = 0; i < times; i++){
    for (j = 0; j < array.length; j++) {
      k = Math.floor(Math.random() * array.length);
      temp = array[j];
      array[j] = array[k];
      array[k] = temp;
    }
    return array;
}
};


//***** Win eval function
var winEval = function(){
  // if one of the arrays contains zero chars, that player looses
};

///*** Remove char function
var removeChar = function(){
  // if char health =0, remove from array completely
};











//////////////////////////////////// saved for later
//constructors


// p1char = new newCharCard();
// var Newchar = function(typeValue, nameValue,charHpValue,charHealthValue){
//   this.typeValue = typevalue;
//   this.nameKey = nameValue;
//   this.charHpKey = charHpValue;
//   this.charHealthKey = charHealthValue;
// };

// //char create test
// p1char = new newCharCard("testchar",100,100);

// var AttrCreator = function(typeValue, nameValue,charHpValue,charHealthValue){
//   this.typeValue = typevalue;
//   this.attrNameKey = attrNamevalue;
//   this.attrHpKey = attrHpvalue;
//   this.attrHealthKey = attrHealthvalue;
// };




