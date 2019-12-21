import React from 'react';

class NumericSection extends React.Component{
  render(){
    const numericSection = {
      marginLeft:"-10px",
      width: "70%",
      marginTop:"-5px",
      display: "grid",
      gridTemplateColumns: "33% 33% 33%",
gridTemplateAreas: "'main main main' 'main main main' 'main main main' 'other footer footer'",
  gridTemplateRows: "auto"
}
    return(
      <div style={numericSection}>
          {this.props.children}
      </div>);
  }
}

export default NumericSection;
