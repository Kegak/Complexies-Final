//From Github Repo: https://github.com/CS2510/Spring2023.Day15Starter/blob/main/engine/Time.js
class Time{
 
    static deltaTime = 1/60

    static time = 0

    static frameCount = 0

    static update(){
      Time.time += Time.deltaTime
      Time.frameCount++;
    }
  }

  window.Time = Time
  export default Time;