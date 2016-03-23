var testdatabaseAttrs = [
{Attribute:"attr",
name:"Black Belt",
health:0,
hp:1},

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

var p1charhand = [{Attribute:"Char",name:"Clu",health:1,hp:1},
{Attribute:"Char",name:"Tron",health:1,hp:1},
{Attribute:"Char",name:"Sark",health:1,hp:1},
{Attribute:"Char",name:"Neo",health:1,hp:1},
{Attribute:"Char",name:"Soul",health:1,hp:1}
];


var p2charhand = [{Attribute:"Char",name:"Tron",health:1,hp:1}];

// var p1attrhand = [];
// var p2attrhand = [];

var p1attackChar = [];
var p2attackChar = [];

var AttackTurn = 0;

//var clickCard = $(this).on('click', function(){});


$( "card1" ).data( "test", { first: 16, last: "pizza!" } );

$('.p1charhand').each(function(index, element){
  console.log(index, element);
  var p1charhandvar = p1charhand[index];
  $(element).data(p1charhandvar);
});

// we need some function to callback on the click event
$('.p1charhand').on('click', function(){
  console.log("You clicked on this p1charhand");
  var p1charhandvar = $(this).data();
  p1charhand.health += 50;
  console.log(p1charhandvar);
});


///disburse cards to players function

$('#disburseCardbutton').on('click',function(){
  $('.card1text').text(p1charhand[0].name,p1charhand[0].hp);
  $('.card2text').text(p1charhand[1].name,p1charhand[1].hp);
  $('.card3text').text(p1charhand[2].name,p1charhand[2].hp);
  $('.card4text').text(p1charhand[3].name,p1charhand[3].hp);
  $('.card5text').text(p1charhand[4].name,p1charhand[4].hp);
  $('.card6text').text(p2charhand[0].name,p2charhand[0].hp);
  $('.card7text').text(p2charhand[1].name,p2charhand[1].hp);
  $('.card8text').text(p2charhand[2].name,p2charhand[2].hp);
  $('.card9text').text(p2charhand[3].name,p2charhand[3].hp);
  $('.card10text').text(p2charhand[4].name,p2charhand[4].hp);


});

///select card for attack function

$('#card1').on('click', function() {
  console.log("attack char added from p1 [0]");
 var cell1 = $(this).text();
 p1attackChar.push(p1charhand[0]);
});
$('.card2').on('click', function() {
   console.log("attack char added from p1 [1]");
 var cell1 = $(this).text();
 p1attackChar.push(p1charhand[1]);
});
$('.card3').on('click', function() {
   console.log("attack char added from p1 [2]");
 var cell1 = $(this).text();
 p1attackChar.push(p1charhand[2]);
});
$('.card4').on('click', function() {
   console.log("attack char added from p1 [3]");
 var cell1 = $(this).text();
 p1attackChar.push(p1charhand[3]);
});
$('.card5').on('click', function() {
   console.log("attack char added from p1 [4]");
 var cell1 = $(this).text();
 p1attackChar.push(p1charhand[4]);
});




var attackTurn = function(attackTurn,p1attackChar,p2attackChar){
  console.log("attack intiatied");
  if (attackTurn === 1){
   p1attackChar.health=p1attackChar.health-p2attackChar.hp;
    console.log(p1attackChar.health);

  }
  else{
  p2attackChar.health=p2attackChar.health-p1attackChar.hp;
    console.log(p2attackChar.health);
  }
};


  //compaire subtract the health of the one player by the hp of the other

var attrdisbursmentTurn = function(testdatabaseAttrs,p1attrhand,p2attrhand){
 //randomize cards and then deal to the players
randomizer(testdatabaseAttrs,p1attrhand,p2attrhand);
disburser(testdatabaseAttrs,p1charhand,p2charhand);
return p1attrhand,p2attrhand;
};




//*******disbursment function
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



var buttonpressedalert = function(){
  alert("button pressed");

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




