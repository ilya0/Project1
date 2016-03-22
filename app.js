var testdatabaseAttrs = [
["attr","Black Belt",0,1],
["attr","purple belt",0,1],
["attr","Black Belt",0,1],
["attr","polk dot belt",0,1]];

var testdatabaseChars = [
["Char","Clu",1,1],
["Char","Tron",1,1],
["Char","Sark",1,1],
["Char","Neo",1,1]
];

var p1charhand = [];
var p2charhand = [];

var p1attrhand = [];
var p2attrhand = [];

var p1actiondeck = [];
var p2actiondeck = [];

var attackTurn = function(){
  //compaire subtract the health of the one player by the hp of the other
};

var attrdisbursmentTurn = function(){
 //randomize cards and then deal to the players
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
disburser(testdatabaseChars,p1charhand,p2charhand);
return p1charhand,p2charhand;
};
console.log(p1charhand);
console.log(p2charhand);




///******** shuffle methodology
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
};



var buttonpressedalert = function(){
  alert("button pressed");

};





//////////////////////////////////// saved for later
//constructors


p1char = new newCharCard();
var Newchar = function(typeValue, nameValue,charHpValue,charHealthValue){
  this.typeValue = typevalue;
  this.nameKey = nameValue;
  this.charHpKey = charHpValue;
  this.charHealthKey = charHealthValue;
};

//char create test
p1char = new newCharCard("testchar",100,100);

var AttrCreator = function(typeValue, nameValue,charHpValue,charHealthValue){
  this.typeValue = typevalue;
  this.attrNameKey = attrNamevalue;
  this.attrHpKey = attrHpvalue;
  this.attrHealthKey = attrHealthvalue;
};




