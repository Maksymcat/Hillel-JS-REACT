import React from 'react';

class Smile extends React.Component {
   
  render() {


    console.log(this.props.likes)
        return (<>
        <div>{this.props.likes}</div>
        <div style={{height: 20,background: 'red'}} onClick={() => this.props.updatesmileLikes(this.props.likes + 1)}>😄</div>
        </>)
      }
    
}
export default Smile;