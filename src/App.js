import React from 'react';
import './App.css';
import DogFilter from './DogFilter'
import DogBar from './DogBar'
import DogInfo from './DogInfo'

export default class App extends React.Component {
  
  state = {
    dogs: [],
    selectedDog: ''
  }
  
  getDogs = () => {
  fetch('http://localhost:3000/pups')
  .then(res => res.json())
  .then(pups => {
    this.setState({
      dogs: pups
     })
  })}

  componentDidMount(){
    this.getDogs()
  }


  changeDog = (e, dog) => {
    if (e.target.innerText === "Good Dog" && dog.isGoodDog === true){
      e.target.innerText = "Bad Dog"
    } else if (e.target.innerText === "Bad Dog" && dog.isGoodDog === false){
      e.target.innerText = "Good Dog"
    }
    let newD = dog.isGoodDog = !dog.isGoodDog
    fetch(`http://localhost:3000/pups/${dog.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'},
        body: JSON.stringify({isGoodDog: newD})
    })  .then(res => res.json())
        .then(d => console.log(d))
}


  selectedDog = (dogId) => {
   
   let selected = this.state.dogs.find(dog => dog.id === dogId )
   this.setState({
     selectedDog: selected
   })

  }

  goodDogs = (event) =>{
    if (event.target.innerText === 'Filter good dogs: OFF'){
      event.target.innerText = 'Filter good dogs: ON'
      this.setState({
      dogs:  this.state.dogs.filter(dog => dog.isGoodDog === true)})}
    else if (event.target.innerText === 'Filter good dogs: ON') {
        event.target.innerText = 'Filter good dogs: OFF'
        this.getDogs()
    }
  }

  render() {
  return (
    
    <div className="App">
      <div id="filter-div">
        <DogFilter filterDogs={this.goodDogs}/> 
      </div>
      <div>
          <DogBar dogs={this.state.dogs} selected={this.selectedDog} dogFilter={this.goodDogs}/>      
      </div>
         <div id="dog-summary-container">
              <h1>DOGGO:</h1>
              <DogInfo dog={this.state.selectedDog} changeDog={this.changeDog} />
         </div>
       </div> 
  );
  }
}


