import React from 'react';
import CalcDisplay from './calc_display';
import CalcPad from './calc_pad';

class CalcFrame extends React.Component{
  constructor(){
    super();
    this.state={
      eval: "0",
      oldEval: [],
      rewrite:true
    }
    this.updateDisplay = this.updateDisplay.bind(this);
  }
  updateDisplay(char){
    switch(char){
      case "c":
        this.clearState();
        break;
      case "=":
        if(!this.checkPreviousIsOperator()){
        this.calculate();
        }
        break;
      case ".":
        if(this.checkRewrite()){
          if(this.checkUnderMaxCharacter()){
            if(!this.checkAllowDecimal()){
            }
            else{
              if(this.checkPreviousIsOperator()){
                this.setState({
                eval: this.state.eval + "0" + char
              })
              }
              else {
                this.setState({
                  eval: this.state.eval + char
                });
              }
            }
          }
        }
        else {
          this.setState({
            eval: "0" + char,
            rewrite: true
              });
        }
        break;
      case "0":
        if(this.checkUnderMaxCharacter()){
          if(this.checkAllowZero()){
            this.addCharacterToEval(char);
          }
        }
        break;
      default:
        if(this.checkUnderMaxCharacter()){
          this.checkUpdateNumber(char);
        }
        break;
    }
  }
  checkRewrite(){
    return this.state.rewrite;
  }
  
  checkUnderMaxCharacter(){
    return this.state.eval.length < 38;
  }
  
  checkAllowDecimal(){
    let regexDecimal =  /^\d+$|[+-/*](\d+)?$/;
    return regexDecimal.test(this.state.eval);
  }
  
  checkPreviousIsOperator(){
    let regexOperator = /[+-/*]$/;
    return regexOperator.test(this.state.eval);
  }
  
  checkThisIsOperator(str){
    let regexOperator = /[+-/*]$/;
    return regexOperator.test(str);
  }
  
  checkAllowZero(){
    let regexZero = /([+-/*]?(([1-9])|([0-9].))([0-9]+)?$)|[+-/*]$/;
    return regexZero.test(this.state.eval);
  }
  
  checkZeroLogic(char){
       return this.state.eval.length === 1 && this.state.eval === "0" && !this.checkThisIsOperator(char);
  }
  
  checkUpdateNumber(char){
    if((this.checkPreviousIsOperator() && this.checkThisIsOperator(char)) || !this.checkUnderMaxCharacter){
       this.setState({
         eval: this.state.eval.slice(0,this.state.eval.length-1) + char
       })
     }
     else{
      if(this.checkZeroLogic(char)){
        this.setState({
          eval: char
        })
      }
       else{
         this.addCharacterToEval(char);
       }
     }
    }
  
  clearState(){
    this.setState({
      eval: "0",
      rewrite: true
    });
  }
  
  addCharacterToEval(char){
    if(!this.checkRewrite()){
      if(this.checkThisIsOperator(char)){
          this.setState({
            eval: this.state.eval + char,
            rewrite: true
        });
      }
      else {
        this.setState({
            eval: char,
            rewrite: true
        });
      }
    }
    else {
      this.setState({
      eval: this.state.eval + char
    })
    }
  }
  calculate(){
    let evalArr;
    if(this.state.oldEval !== "" && this.state.oldEval.length < 6){
      evalArr = [...this.state.oldEval, this.state.eval];
    }
    else if(this.state.oldEval.length > 5){
      evalArr = this.state.oldEval.slice(1,this.state.oldEval.length);
      evalArr = [...evalArr, this.state.eval];
    }
    else{
      evalArr = [this.state.eval];
    }
    let ans = eval(this.state.eval).toString();
    this.setState({
      oldEval: evalArr,
      eval: ans,
      rewrite: false
    });
  }
  render(){
    const frameBackground={
      display:"flex",
      flexDirection: "column",
      backgroundColor: "#1349DE",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "300px",
      height: "300px",
      borderRadius: "5%",
      borderColor: "#072985",
      borderStyle: "solid",
      boxShadow:"20px 20px 10px rgba(0, 0, 0, .4)",
    }
    return(
    <div style={frameBackground}>
      <CalcDisplay oldEval={this.state.oldEval} display={this.state.eval}/>
      <CalcPad update={this.updateDisplay}/>
    </div>
    );
  }
}

export default CalcFrame;
