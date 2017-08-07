

var text = prompt("Write a sentence");
  console.log(text);

// Write a sentence



var firstlast = function(sentence)
  {
    var first= sentence.charAt(0);
    var lastChar = sentence.length-1;
    var last = sentence.charAt(lastChar);

    return first+last;
  }


var twoLetters = firstlast(text);

console.log(twoLetters);

alert("The first and last letters of what you wrote are: " + twoLetters);

// first and last two letters





var test = twoLetters;

// console.log(test);

  var flip = function(letter)
    {
      var firstletter = letter.charAt(0);
      var secondletter = letter.charAt(1);

      return secondletter+firstletter;

    }

var switchedletters = flip(test);

console.log(switchedletters)

alert("These are those letters flipped " + switchedletters);


// changes order of letters





var uppercase = switchedletters.toUpperCase();

console.log(uppercase);

alert("These are the letters as uppercase " + uppercase);

// convert letters to uppercase

var flip2 = function(reversed)
    {
      var firstletter = reversed.charAt(0);
      var secondletter = reversed.charAt(1);

      return secondletter+firstletter;
    }

    var fixedletters = flip2(uppercase);

    console.log(fixedletters);

    alert(fixedletters);

alert(text + fixedletters);

 console.log( text + fixedletters);


 // midletter

var midLetter = function(text)
  {
      var bonkers = text.charAt(text.length/2);
      return bonkers;
console.log(bonkers);
var answer = bonkers;


alert(answer);
console.log(answer);

  }
