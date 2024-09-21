import React from 'react';

class Love extends React.Component {
  
    render() {


        console.log(this.props.likes)
            return (<>
            <div>{this.props.likes}</div>
            <div style={{height: 20,background: 'red'}} onClick={() => this.props.updateloveLikes(this.props.likes + 1)}>❤️</div>
            </>)
          }
        
}
export default Love;