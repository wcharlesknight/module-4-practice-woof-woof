import React from 'react'





export default class Dog extends React.Component {
    
    render(){
        return (
            
            <span onClick={() => this.props.selected(this.props.id)}>{this.props.name} </span>
        )}
}