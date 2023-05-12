//From Github Repo: https://github.com/CS2510/Spring2023.Day15Starter/blob/main/engine/CameraMover.js
class CameraMover extends Component {

    first = true
    update(ctx) {

      let camera = Camera.main;

      if (!this.first) {
        this.first = true;

        console.log(camera.transform.y)
  
        let offsetX = 0;
        let offsetY = 100;

        let scale = Camera.getLogicalScaleZoomable(ctx);

        camera.transform.x = 20;
        camera.transform.y = 0;

        return
      }

      if (Input.mouseDown) {
        let offsetX = Input.lastMouseX - Input.mouseX;
        let offsetY = Input.lastMouseY - Input.mouseY;
        if (Math.abs(offsetX) > 1 || Math.abs(offsetY) > 1)
  
          if (offsetX || offsetY) {
            console.log(`${offsetX}, ${offsetY}, ${camera.transform.x}, ${camera.transform.y}`)
            let scale = Camera.getLogicalScaleZoomable(ctx);
  

            let start = Camera.screenToWorld(ctx, Input.mouseX, Input.mouseY);
            let end = Camera.screenToWorld(ctx,Input.lastMouseX, Input.lastMouseY);
            
            camera.transform.x += end.x-start.x;
            camera.transform.y += end.y -start.y;
          }

      }

      if (Input.lastWheel) {
  
        if (Input.lastWheel > 0 ) {
          camera.transform.sx *= 1.1;
          camera.transform.sy *= 1.1;
        }
        else {
          camera.transform.sx /= 1.1;
          camera.transform.sy /= 1.1;
        }
      }
  
    }
  }

  window.CameraMover = CameraMover;
  export default CameraMover;