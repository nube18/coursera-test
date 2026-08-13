(function (window) {

  // STEP 3: Create the helloSpeaker object
  var helloSpeaker = {};

  // DO NOT attach speakWord to the helloSpeaker object.
  var speakWord = "Hello";

  // STEP 4: Attach the speak method to helloSpeaker
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose helloSpeaker to the global scope
  window.helloSpeaker = helloSpeaker;

})(window);
