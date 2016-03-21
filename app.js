var testdatabaseAttrs = [
["Black Belt",0,1],
["Green belt",0,1]];

var testdatabaseChars = [
["Clu",1,1],
["Tron",1,1]];

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
  //compair subtract the health of the one player by the hp of the other
};

var attrdisbursmentTurn = function(){
 //randomize cards and then deal to the players
};

var chardisbursmentTurn = function(){
  //randomize the cards and disburse to card hand array
};

var charcreationTurn = function(char){
  // intialize all the cards

};





