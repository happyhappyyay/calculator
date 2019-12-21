import React from 'react';

const numUnderTone = "#D5D557";
const numNormal = "#FFFF9D";

class NumericButton extends React.Component{
  constructor(props){
    super(props);
    this.state={
      color: numNormal
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
    if(e.key === this.props.number){
      this.activateButton();
    }
  }
  
  handleClick(e) {
    this.activateButton();
  }
  
  activateButton(){
  this.props.update(this.props.number);
    this.colorChange();
    setTimeout((() => {this.resetColor()}), 500);
  }
  
  colorChange(){
    this.setState({
      color: numUnderTone
    })
  }
  resetColor(){
    this.setState({
      color: numNormal
    })
  }
  render(){
    const numButtonTop={
      marginTop:"-45px",
      marginLeft:"15px",
      width:"35px",
      height:"35px",
      backgroundColor: this.state.color,
      textAlign:"center",
      marginBottom:"15px",
      boxShadow:"-2px 5px 1px rgba(255, 255, 255, .3)",
      fontSize:"25px"
    }
    const numButtonBottom={
      marginLeft:"10px",
      width:"46px",
      height:"46px",
      backgroundColor:"#D5D557",
            boxShadow:"1px 1px 1px rgba(0, 0, 0, .3)",
      borderRadius:"5%"
    }
    const gridItem = this.props.number === "0"? {gridArea:"footer"}:{};
    const footerButtonBottom = this.props.number ==="0"? {width:"95%", marginLeft:""}:{};
    const footerButtonTop = this.props.number ==="0"? {width:"87%", marginLeft:"5px"}:{};

    return(
      <div id={this.props.id}  style={gridItem} onClick={this.handleClick}>
                <div style={Object.assign({},numButtonBottom,footerButtonBottom)}></div>
        <div style={Object.assign({},numButtonTop,footerButtonTop)}>{this.props.number}</div>

      </div>
    );
  }
}

export default NumericButton;
