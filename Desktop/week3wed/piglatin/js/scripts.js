$(document).ready(function() {

  $('form#piglatin').submit(function(event) {
  //debugger;
    var userInput = ($('input#word')).val();
    var result = pigLatin(userInput);
    console.log(result);
    $('.translation').text(result).show();

    event.preventDefault();
  });
});

var pigLatin = function(word){
  var vowelArray = ["a", "e", "i", "o", "u", "A", "I", "E", "O", "U"];
    if (word[0] !== "q"){
      for (var j = 0; j < word.length; j++){
        for (var k = 0; k < vowelArray.length; k++){
          if (word.charAt([j]) === vowelArray[k]) {
            return word.slice([j]) + word.slice(0,[j]) + "ay";
          }
        }
      }
    }
    else {
      return (word.slice(2) + word.slice(0,2) + "ay").toLowerCase();
    }
}
