function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  clear()
  noStroke()
  background("#222")
  fill("#f8f8f8")
  let [w,h] = [windowWidth, windowHeight]
  let r = (h>w?w:h) / 40
  let n = ((h>w?w:h) / (r*1.125))|0
  let t = (millis()/1500.0)%4
  let [xt,yt] = {"0": [1,0], "1": [0,1], "2": [-1,0], "3": [0,-1]}[t|0]
  translate(w/2, h/2)
  rotate(PI/4 + millis()/100000)
  for(let x=-(n/3)|0; x<=(n/3)|0; x++) {
    for(let y=-(n/3)|0; y<=(n/3)|0; y++) {
      if(sqrt(x*x+y*y)<n/6) {
        circle(2*r*x, 2*r*y, r/2)
      }
    }
  }
  translate(4*r*xt*(t%1), 4*r*yt*(t%1))
  for(let x=-n; x<=n; x++) {
    for(let y=-n; y<=n; y++) {
      circle(2*r*x, 2*r*y, r/2)
    }
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

if(window.DeviceOrientationEvent) {
  window.addEventListener("orientationchange", windowResized, false)
}
