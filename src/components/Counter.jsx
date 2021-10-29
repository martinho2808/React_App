import React from 'react';

class Counter extends React.Component {
    constructor(props){
      super(props)
      this.state={
        count: 0
      }
    }
  
    increaseCount (){
      this.setState({count: this.state.count +1 })
    }
  
    render(){
      return (
        <div>
          <h1>{this.props.name}</h1>
          <button onClick={()=>this.increaseCount()}>Click Me</button>
          <h3>{this.state.count}</h3>
        </div>
      )
    }
  }

export default Counter;