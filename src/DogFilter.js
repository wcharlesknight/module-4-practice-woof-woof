import React from 'react'




export default class DogFilter extends React.Component {
    
    render(){
        return (
            <button onClick={(event) => this.props.filterDogs(event)} id="good-dog-filter">Filter good dogs: OFF</button>
        )
    }
}
