import React from 'react'




export default class DogInfo extends React.Component {
    
    state = {
        isGood: this.props.dog.isGoodDog
    }
 
    componentDidUpdate(){
       this.changeGood()
    }
    
    changeGood = () => {
        return this.props.dog.isGoodDog ? "Good Dog" : "Bad Dog"
    }

    render() {
      
        return (
        <div id="dog-info">
            
            <img src={this.props.dog.image} alt="dog" >
            </img>
            <h2>
                {this.props.dog.name}
            </h2>
            <button onClick={(e) => this.props.changeDog(e , this.props.dog)}>
                {this.props.dog.isGoodDog ? "Good Dog" : "Bad Dog"}
            </button>
        </div>
        
        )
    }

}