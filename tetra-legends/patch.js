
    // code I found to stop backspace from FUCKING everything up
    document.onkeydown = function (event) {

      if (!event) { /* This will happen in IE */
        event = window.event;
      }

      var keyCode = event.keyCode;

      if (keyCode == 8 &&
        ((event.target || event.srcElement).tagName != "TEXTAREA") &&
        ((event.target || event.srcElement).tagName != "INPUT")) {

        if (navigator.userAgent.toLowerCase().indexOf("msie") == -1) {
          event.stopPropagation();
        } else {
          alert("prevented");
          event.returnValue = false;
        }

        return false;
      }
    };
    // and some code I found to stop other shit from FUCKING everything up
    window.addEventListener("keydown", function (e) {
      // space and arrow keys
      if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
      }
    }, false);
    const dev = {}
    dev.show = () => {
      document.getElementById('dev').style.setProperty('display', 'block');
    }
    dev.hide = () => {
      document.getElementById('dev').style.setProperty('display', 'none');
    }
    let enableVideo = () => {
      document.documentElement.innerHTML = `<video autoplay muted loop id="myVideo">
    <source src="vid/DiscoLightsVidevo.mov" type="video/mp4">
  </video>` + document.documentElement.innerHTML;
  enableVideo = () => {};
    }

  
