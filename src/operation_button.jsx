import React from 'react';

const opUnderTone = "#B50098";
const opNormal = "#E100BE";

class OperationButton extends React.Component{
  constructor(props){
    super(props);
        this.state={
      color: opNormal
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = 
      this.handleKeyDown.bind(this);
    }
  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  
  handleKeyDown(e){
    if(e.key === this.props.operation){
      this.activateButton();
    }
    else {
      if(e.key === "Enter" & this.props.operation === "="){
        this.activateButton();
      }
      if(e.key === "Escape" & this.props.operation === "c"){
        this.activateButton();
      }
    }
  }
  
  handleClick(e) {
    this.activateButton();
  }
  
  activateButton(){
  this.props.update(this.props.operation);
    this.colorChange();
    setTimeout((() => {this.resetColor()}), 500);
  }
  
  colorChange(){
    this.setState({
      color: opUnderTone
    })
  }
  resetColor(){
    this.setState({
      color: opNormal
    })
  }
  render(){
    const opButtonTop={
      marginTop:"-45px",
      marginLeft:"15px",
      width:"35px",
      height:"35px",
      backgroundColor: this.state.color,
      textAlign:"center",
      marginBottom:"15px",

    }
    const opButtonBottom={
      marginLeft: "10px",
      width:"46px",
      height:"46px",
      backgroundColor:"#B50098",
      boxShadow:"1px 1px 1px rgba(0, 0, 0, .3)",
      borderRadius:"5%"
    }
    const gridArea = this.props.operation !=="="? this.props.operation !=="c"? {}:{gridArea: "header"}:{gridArea: "footer"};
    const nonStandardBottom = this.props.operation ==="=" || this.props.operation ==="c"? {width:"102px"}:{};
    const nonStandardTop = this.props.operation ==="=" || this.props.operation ==="c"? {width:"92px"}:{};
    return(
      <div id={this.props.id} style={gridArea} onClick={this.handleClick}>
                <div style={Object.assign({},opButtonBottom, nonStandardBottom)}></div>
        <div style={Object.assign({},opButtonTop, nonStandardTop)}>{this.props.operation}</div>
      </div>
    );
  }
}

export default OperationButton;
