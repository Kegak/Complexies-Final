//From Github Repo: https://github.com/CS2510/Spring2023.Day15Starter/blob/main/engine/Vector2.js

class Vector2 {
    x = 0
    y = 0

    static zero = new Vector2();

    static one = new Vector2(1, 1)
  
    static right = new Vector2(1, 0);
  
    static left = new Vector2(-1, 0)
  
    static up = new Vector2(0, 1)
  
    static down = new Vector2(0, -1)

    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  
    minus(other){
      return new Vector2(this.x-other.x, this.y - other.y);
    }
    add(other){
      return new Vector2(this.x + other.x, this.y+other.y);
    }
  
    perpendicular(){
      return new Vector2(this.y, -this.x);
    }
  
    dot(other){
      return this.x * other.x + this.y * other.y;
    }
  
    length(){
      return Math.sqrt(this.x**2+this.y**2);
    }
    normalize(){
      let length = this.length();
      if(!length) throw "Divide by zero error";
      return new Vector2(this.x/length, this.y/length);
    }
    scale(scalar){
      return new Vector2(this.x*scalar, this.y*scalar);
    }
  }
  
  window.Vector2 = Vector2