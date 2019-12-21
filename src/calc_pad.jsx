import React from 'react';
import NumericButton from './numeric_button.jsx';
import OperationButton from './operation_button.jsx';
import NumericSection from './numeric_section.jsx';
import OperationSection from './operation_section.jsx';

const numbers = [
  {number:"0", id: "zero"},
 {number:"1", id: "one"},
 {number:"2", id: "two"},
 {number:"3", id: "three"},
 {number:"4", id: "four"},
 {number:"5", id: "five"},
 {number:"6", id: "six"},
 {number:"7", id: "seven"},
 {number:"8", id: "eight"},
 {number:"9", id: "nine"},
   {number:".", id: "decimal"},
];

const operations = [
  {operator:"c", id:"clear"},
  {operator:"+", id:"add"},
  {operator:"-", id:"subtract"},
  {operator:"/", id:"divide"},
  {operator:"=", id:"equals"},
  {operator:"*", id:"multiply"},
];

class CalcPad extends React.Component{
  render() {
    const padBackground = {
      display: "flex",
      margin: "10px",
      height:"65%",
      width:"93%",
    }
    const numericButtons = numbers.map(obj=>{
      return(
      <NumericButton id={obj.id}update= {this.props.update} number={obj.number}/>
      );
    });
    const operationButtons = operations.map(obj=>{
      return(
      <OperationButton id={obj.id} update= {this.props.update} operation={obj.operator}/>
      );
    });
    return(
    <div style={padBackground}>
        <NumericSection>
{numericButtons}
        </NumericSection>
        <OperationSection>
{operationButtons}
        </OperationSection>
    </div>
    );
  }
}

export default CalcPad;
