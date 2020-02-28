
var x;

$(document).ready(function(){

 $(document).on('change', 'input[type=radio]', function () {
    if ($(this).attr("name").startsWith("snd")){
    playTimeUpSnd();
  }

  $("#snd_popup").click(function(){
      $(".box").animate({
          width: "toggle"
      });

  });

  $("#mins").keyup(function(event) {
      console.log("enter"+event.which);
    if (event.which == 13) {
      event.preventDefault();
      start();
    }
  }); 

  setFontSizeByPageWidth();
});

})
  function start(){
      console.log("Start");

      $("#snd_popup").hide(400);
      clearInterval(x);
      clearTimeout(x);
      el = document.getElementById("tim");
      el.classList.remove("blink");
      minutes=document.getElementById("mins").value;
      el.innerHTML = (minutes  > 9 ? "" + minutes: "0" + minutes) + ":00";
      var t = 60000 * document.getElementById("mins").value;

      // Update the count down every 1 second
      x = setInterval(function() {

          var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))+hours*60;
          var seconds = Math.floor((t % (1000 * 60)) / 1000);
          console.log(minutes);
          document.getElementById("tim").innerHTML = (minutes  > 9 ? "" + minutes: "0" + minutes) + ":" + (seconds > 9 ? "" + seconds: "0" + seconds);

          // If the count down is over, write some text
          t -= 1000;

          if (t > 0 && t <60000) {
              el.classList.add("minuetBlink");
          }
          if (t < 0) {
              clearInterval(x);
              el = document.getElementById("tim");
              el.innerHTML = "00:00";
              el.classList.remove("minuetBlink");
              el.classList.add("blink");
               b = document.getElementById("bod");
              playTimeUpSnd();
              //                                  var selectedOption = $("input:radio[name=option]:checked").val()
          }
      }, 1000);
  }
  function playTimeUpSnd(){
              rs = $("input[type='radio'][name='snd']:checked").val();
              playSnd("snd",rs)
  }

  function reset(){
       document.getElementById("tim").innerHTML = "00:00";
      clearInterval(x);
      clearTimeout(x);
       el = document.getElementById("tim");
       el.classList.remove("blink");
       el.classList.remove("minuetBlink");
       b = document.getElementById("bod");
       b.classList.remove("bodyBlink");
  }
  function sound_settings(){
      $('#snd_popup').toggle({ direction: "right" }, 1000);
}
  function increaseFontSizeBy10px() {
      txt = document.getElementById('tim');
      style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
      currentSize = parseFloat(style);
      txt.style.fontSize = (currentSize + 10) + 'px';
  }

  function decreaseFontSizeBy10px() {
      txt = document.getElementById('tim');
      style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
      currentSize = parseFloat(style);
      txt.style.fontSize = (currentSize - 10) + 'px';
  }

  function getPageWidth() {
    if (self.innerWidth) {
      return self.innerWidth;
    }

    if (document.documentElement && document.documentElement.clientWidth) {
      return document.documentElement.clientWidth;
    }

    if (document.body) {
      return document.body.clientWidth;
    }
  }

  function setFontSizeByPageWidth() {
      txt = document.getElementById('tim');
      //style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
      //currentSize = parseFloat(style);
      var pw=getPageWidth();
      console.log("pw="+getPageWidth());
      txt.style.fontSize = (pw/3) + 'px';
  }
