var validatorModule = (function () {

  var niceWords = ["amazing", "awesome", "blithesome", "excellent",
                   "fabulous", "fantastic", "favorable", "fortuitous",
                   "great", "incredible", "ineffable", "mirthful", "outstanding",
                   "perfect", "propitious", "remarkable", "smart", "spectacular", "splendid",
                   "stellar", "stupendous", "super", "ultimate", "unbelievable", "wondrous"];

  var isInNiceWords = function(feedback) {
    var validatorCounter = 0;
    var feedbackArray = feedback.split(" ");
    for (var i = 0; i < feedbackArray.length; i++) {
      if ( niceWords.includes(feedbackArray[i]) == true) {
        validatorCounter++;
      }
    }
    if ( validatorCounter >= 3 ) {
      return true;
    } else {
      return false;
    }
  }

  var validator = function(obj){
    if ( parseInt(obj.scale) >= 10 && obj.email.split('').includes('@') == true && isInNiceWords(obj.feedback) == true) {
      return true;
    } else {
        return false;
    }
  }

    return {
      validator: validator
    };
})();

module.exports = validatorModule;
