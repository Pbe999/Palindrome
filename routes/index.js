var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{
    phrase:"taco Cat"
  });
});

module.exports = router;
router.post('/', function(req, res) {
  res.render('index',{
    phrase: req.body.userText,
    message: getResultDescription(req.body.userText)
  })
});





function checkPalindrome(phrase) {

  // Replace all punctuations with spaces

  phrase = phrase.replace(/[,\;:\/.@&$*\!\?\\s]/g, ' ');



  let temp = phrase.split(' ').join('');



  if (temp.toLowerCase() === temp.split('').reverse().join('').toLowerCase()) {

    return true;

  } else {

    return false;

  }

}

function getResultDescription(phrase) {

  const isPalindrome = checkPalindrome(phrase);

  const reversedPhrase = phrase.split('').reverse().join('');



  if (isPalindrome) {

    return `${phrase} is a palindrome. Reversed: ${reversedPhrase}`;

  } else {

    return `${phrase} is not a palindrome. Reversed: ${reversedPhrase}`;

  }

}