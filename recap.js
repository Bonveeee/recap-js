function reverseString(string) {
  let reverse = "";
  let length = string.length - 1;

  while (length >= 0) {
    reverse = reverse + string[length];
    length = length - 1;
  }
  return reverse;
}

// reverseString("Mary");

function reverseStringg(str) {
    if (str === "")
      return "";
    else
      return reverseStringg(str.substr(1)) + str.charAt(0);
  }
//   reverseStringg("hello");


  function reverseStringgg(str) {
    return (str === '') ? '' : reverseStringgg(str.substr(1)) + str.charAt(0);
  }
//   reverseStringgg("hello");


  function reverseStringggg(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseStringggg('hello');