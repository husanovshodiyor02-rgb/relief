function reverseText(text) {
  return text.split("").reverse().join("");
}

console.log(reverseText("hello")); 




function separateWordsAndLetters(text) {
    return text.split(' ').map(word => word.split('').join(',')).join(', ,');
  }
  
  console.log(separateWordsAndLetters("How are you doing today?"));
  
  
  function countWords(text) {
    return text.trim().split(/\s+/).length;
  }
  
  console.log(countWords("How are you doing today?"));
  


  function capitalizeWords(text) {
    return text.split(' ').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }
  
  console.log(capitalizeWords("salom dunyo")); 
  


  function removeSpaces(text) {
    return text.replace(/\s/g, '');
  }
  
  console.log(removeSpaces("a b c d"));
  


  function replaceCharacter(text) {
    return text.replace(/a/g, 'o');
  }
  
  console.log(replaceCharacter("Khasan teacher came back")); 
    


  function sliceByIndex(text, start, end) {
    return text.slice(start, end);
  }
  
  console.log(sliceByIndex("Khasan teacher came back", 14, 18)); 
  


  function extractNumbers(text) {
    return text.replace(/\D/g, '');
  }
  
  console.log(extractNumbers("abc123d4"));
  

  function countVowels(text) {
    const matches = text.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
  }
  
  console.log(countVowels("Khasan teacher came back")); 
  

  function reverseWordsOrder(text) {
    return text.split(' ').reverse().join(' ');
  }
  
  console.log(reverseWordsOrder("Khasan teacher came back")); 
  