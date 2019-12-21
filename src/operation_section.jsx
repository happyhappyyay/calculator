import React from 'react';

class OperationSection extends React.Component{
  render(){
    const operationSection = {
      width: "40%",
      marginTop:"-5px",
      marginLeft:"-10px",
      display: "grid",
      gridTemplateColumns: "50% 50%",
gridTemplateAreas: "'header header' 'main main' 'main main' 'footer footer'",
  gridTemplateRows: "auto"
      
    }
    return(<div style={operationSection}>
        {this.props.children}
      </div>);
  }
}

export default OperationSection;
