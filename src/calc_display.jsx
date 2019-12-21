import React from 'react';

class CalcDisplay extends React.Component{
  render(){
    const displayBackground = {
      margin:"-5px 0px 0px -3px",
      width:"99%",
      height:"75px",
      backgroundColor:"black",
      borderStyle: "solid",
      borderRadius: "10%",
      borderColor: "#072985",
      borderWidth: "10px 5px 5px 5px",
      boxShadow:"10px 10px 10px rgba(0, 0, 0, .4)",
      color:"#ffffff",
      textAlign:"right",
      fontSize:"30px",
      overflowWrap: "break-word"
    }
    const printerReel = {
      marginLeft: "25px",
      marginBottom: "-3px",
      width:"85px",
      height:"75px",
      borderRadius:"7% 7% 0% 0%",
      borderStyle: "solid",
      borderColor: "#C8CAD1",
      backgroundColor:"#ffffff",
      borderWidth: "2px 2px 7px 2px",
      fontSize: "10px",
      overflow: "hidden"
    }
    const printerSection = {
      display: "flex",
      marginTop:"-90px",
      marginBottom:"10px",
    }
    
    const printerStick = {
      marginBottom:"-20px",
      marginTop: "25px",
      height:"65px",
      width:"4px",
      backgroundColor: "#B77F49"
    }
    
    const stickExtension = {
      marginRight: "-25px",
      marginTop: "25px",
      height:"4px",
      width:"25px",
      backgroundColor: "#B77F49"
    }
    const stickExtensionEnd = {
      marginRight: "-25px",
      marginTop: "25px",
      height:"4px",
      width:"10px",
      backgroundColor: "#B77F49"
    }
    const receiptLineA = {
      color: "blue",
      display: "table-cell",
      verticalAlign: "bottom",
    }
    const receiptLineB = {
      color: "red",
    }
    const table = {
      display: "table-cell", 
      verticalAlign: "bottom",
      height: "75px",
      width:"100%",
    }
    const oldProps = this.props.oldEval.map((value,index)=>{
      if(index%2){
        return(<div style={receiptLineA}>{value}</div>
      )
      }
      else {
        return(<div style={receiptLineB}>{value}</div>
          )
      }
    });
  return(<div>
      <div style={printerSection}>
        <div style = {printerStick}></div>
        <div style = {stickExtension}></div>
      <div style={printerReel}>
        <div style={table}>{oldProps}</div>
        </div>
        <div style = {stickExtensionEnd}></div>
      </div>
    <div id="display" style={displayBackground}>{this.props.display}</div>
      </div>);
  }
}

export default CalcDisplay;
