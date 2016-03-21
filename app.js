var testdatabaseAttrs = [
["attr","Black Belt",0,1],
["attr","Green belt",0,1]];

var testdatabaseChars = [
["Char","Clu",1,1],
["Char","Tron",1,1]];

var p1cards = [];
var p2cards = [];

var Newchar = function(typeValue, nameValue,charHpValue,charHealthValue){
  this.typeValue = typevalue;
  this.nameKey = nameValue;
  this.charHpKey = charHpValue;
  this.charHealthKey = charHealthValue;
};

//char create test
p1char = new newCharCard("testchar",100,100);

var AttrCreator = function(typeValue, attrName,attrHp,attrHealth){
  this.typeValue = typevalue;
  this.attrNameKey = attrNamevalue;
  this.attrHpKey = attrHpvalue;
  this.attrHealthKey = attrHealthvalue;
};

p1char = new newCharCard();

var attackTurn = function(){
  //compaire subtract the health of the one player by the hp of the other
};

var attrdisbursmentTurn = function(){
 //randomize cards and then deal to the players
};

var chardisbursmentTurn = function(testdatabaseChars){

  //randomize the cards and disburse to card hand array


    // intialize all the cards
  //for testing purposes, currently use a central repo of chars and randomize for player hand

//first shuffle p1 an p2 values
//then disburse to player hands
//shuffle then disburse to players

// shuffle turn
var i, j, k;
  var temp;

  // Shuffle the stack 'n' times.

  for (i = 0; i < n; i++)
    for (j = 0; j < this.cards.length; j++) {
      k = Math.floor(Math.random() * this.cards.length);
      temp = this.cards[j];
      this.cards[j] = this.cards[k];
      this.cards[k] = temp;
    }
}

};


///shuffle methodology
var testarray =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var testarraypushto =[];


var randomizer = function(array){
var i, j, k;
var temp;
var times=2;

  for (i = 0; i < times; i++){
    for (j = 0; j < testarray.length; j++) {
      k = Math.floor(Math.random() * testarray.length);
      temp = testarray[j];
      testarray[j] = testarray[k];
      testarray[k] = temp;
    }
    return array;
}
}


//testing randomizer function
testrandomizer(testarray);






