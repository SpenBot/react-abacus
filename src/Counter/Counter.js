
//// DEPENDENCIES, MODULES ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";

import "./Counter.css";


//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class Counter extends Component {


//// CONSTRUCTOR /////////////////////////////////////////////////////////
  constructor() {
    super()
    this.state = {
      beansLeft: 10,
      beansRight: 0
    }
  }

//// ADD COUNT TO THIS STATE /////////////////////////////////////////////
  addLeft () {

    if (this.state.beansLeft < 10) {
      this.setState(prevState => ({
        beansLeft: prevState.beansLeft + 1,
        beansRight: prevState.beansRight - 1
      }))
    }

  }

//// SUB COUNT TO THIS STATE /////////////////////////////////////////////
  addRight () {

    if (this.state.beansRight < 10) {
      this.setState(prevState => ({
        beansLeft: prevState.beansLeft - 1,
        beansRight: prevState.beansRight + 1
      }))
    }

  }


//// RENDER //////////////////////////////////////////////////////////////
  render() {

    let leftBeans = []
    let rightBeans = []

    for (let i = 0; i < this.state.beansLeft; i++) {
      leftBeans.push(<div className="CounterBean" key={i}></div>)
    }

    for (let i = 0; i < this.state.beansRight; i++) {
      rightBeans.push(<div className="CounterBean" key={i}></div>)
    }


//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="CounterItem">

        <div className="BeanHolderAll">

          <div className="BeanHolderLeft">
            {leftBeans}
          </div>

          <div className="BeanHolderRight">
            {rightBeans}
          </div>

        </div>


        <div className="CounterButtonsHolder">
          <button className="CounterButtons" onClick={this.addLeft.bind(this)}> &#8592; </button>
          <button className="CounterButtons" onClick={this.addRight.bind(this)}> &#8594; </button>
        </div>

      </div>
    );
  }
}





//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default Counter;






// END ///////////////////////////////////////////////////////////////////
