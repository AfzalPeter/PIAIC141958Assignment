var string = "The quick brown fox jumps over the lazy dog";
var newString = string.toLowerCase();
var count = (newString.match(/the/g)).length;
document.write("There are "+ count + " occurrence(s) of word 'the'");

   