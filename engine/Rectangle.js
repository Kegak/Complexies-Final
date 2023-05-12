//From Github Repo: https://github.com/CS2510/Spring2023.Day15Starter/blob/main/engine/Text.js

class Rectangle extends Component {
    
    name = "Rectangle"
  
    fillStyle
  
    strokeStyle
  
    lineWidth

    constructor(fillStyle = "white", strokeStyle = "transparent", lineWidth = 1){
      super()
      this.fillStyle = fillStyle;
      this.strokeStyle = strokeStyle
      this.lineWidth = lineWidth
    }

    draw(ctx) {
      ctx.fillStyle = this.fillStyle
      ctx.strokeStyle = this.strokeStyle
      ctx.lineWidth = this.lineWidth
  
      ctx.beginPath()
      ctx.rect(-this.transform.sx/2 + this.transform.x, -this.transform.sy/2 + this.transform.y,this.transform.sx, this.transform.sy);
      ctx.fill()
      ctx.stroke()
    }
  }

  window.Rectangle = Rectangle;