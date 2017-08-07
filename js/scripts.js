var text = prompt("Write a sentence");
  console.log(text);


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
