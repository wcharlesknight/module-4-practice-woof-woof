import React from 'react'
import Dog from './Dog.js'



export default class DogBar extends React.Component {
    
    render(){
        return (
            <div id="dog-bar">
                {this.props.dogs.map(dog => <Dog name={dog.name} id={dog.id} key={dog.id} image={dog.image} goodDog={dog.isGoodDog} selected={this.props.selected} />)}            
              </div>
        )
    }
}