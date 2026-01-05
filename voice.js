document.addEventListener("DOMContentLoaded", function () {

  var audio = document.getElementById("autoVoice");

  audio.play().catch(function () {
    document.body.addEventListener("click", function () {
      audio.play();
    }, { once: true });
  });

});

