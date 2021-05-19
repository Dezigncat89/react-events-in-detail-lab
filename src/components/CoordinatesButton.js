import React, {Component} from "react"

class CoordinatesButton extends React.Component
  constructor() {
    super()
      this.state = {
        xPosition: 0,
        yPosition: 0
   }
   this.onReceiveCoordinates = this.onReceiveCoordinates.bind(this)
}

onReceiveCoordinates () {
   while (element) {
    if (element.tagName == "BODY") {
      let xScroll = element.scrollLeft || document.documentElement.scrollLeft;
      let yScroll = element.scrollTop || document.documentElement.scrollTop;
 
      xPosition += (element.offsetLeft - xScroll + element.clientLeft);
      yPosition += (el.offsetTop - yScroll + element.clientTop);
    } else {
      xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
      yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
    }
 
    element = element.offsetParent;
    }
}
  
  
render () {
  return {
    <h1>{this.state.xPosition}>X Location:</h1>
    <h2>{this.state.yPosition}>Y Location:</h2>
  };
}


export default CoodinatesButton

