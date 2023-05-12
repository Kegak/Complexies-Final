// From Github Repo: https://github.com/CS2510/Spring2023.Day15Starter/blob/main/engine/Input.js

class Input {

    static mouseX = 0;

    static mouseY = 0;

    static lastMouseX = 0;

    static lastMouseY = 0;

    static lastWheel = 0;
  
    static mouseDown = false;
  
    static mouseUp = false;

    static finishFrame() {
      Input.lastWheel = 0;
      Input.lastMouseX = Input.mouseX;
      Input.lastMouseY = Input.mouseY;
      Input.tick = 0;
      Input.mouseUp = false;
    }

    static start() {

      let canvas = document.querySelector("#canv")

      canvas.addEventListener("mousemove", (e) => {

  
        Input.mouseX = e.clientX
        Input.mouseY = e.clientY

      });

      canvas.addEventListener("mousedown", (e) => {
        Input.lastMouseX = Input.mouseX;
        Input.lastMouseY = Input.mouseY;
  
        Input.mouseX = e.clientX
        Input.mouseY = e.clientY
        Input.mouseDown = true;
      });
  

      canvas.addEventListener("mouseup", (e) => {
        Input.lastMouseX = Input.mouseX;
        Input.lastMouseY = Input.mouseY;
        Input.mouseX = e.clientX
        Input.mouseY = e.clientY
        Input.mouseDown = false;
        Input.mouseUp = true;
      });

      canvas.addEventListener("wheel", (e) => {
        Input.lastWheel = e.deltaY;
      });
  

      document.addEventListener("keyup", (e) => { });

      document.addEventListener("keydown", (e) => { });
  

      document.addEventListener("keypress", (e) => { });

      canvas.addEventListener("touchstart", (e) => { })
  
      canvas.addEventListener("touchend", (e) => { })
  
      canvas.addEventListener("touchmove", (e) => {
        for (let touchEvent of e.touches) {
          console.log(touchEvent.clientX + ", " + touchEvent.clientX);
        }
        e.preventDefault();
      })
  
    }
  }

  window.Input = Input;
  export default Input;