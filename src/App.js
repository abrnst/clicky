import React, { Component } from 'react';
import CharacterCard from "./components/Characters";
import characters from "./characters.json";
// import Wrapper from "./components/Wrapper";
import Title  from "./components/Title";
import Counter from "./components/Counter";


function shuffleCharacters(array) { 
  for (let i = array.length -1; i > 0; i-- ) {
    let j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



class App extends Component {
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked:[]
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    console.log(newScore);
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 10) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();

  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Try Again!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCharacters = shuffleCharacters(characters);
    this.setState({ characters: shuffledCharacters });
  };





  render() {
    return (
    //  <Wrapper>
    <div>
      <Title>
        Clicky Game
      </Title>
      <Counter 
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
      />
      {this.state.characters.map(character => (
        <CharacterCard 
        key = {character.id}
        image={character.image}
        handleClick={this.handleClick}
        handleIncrement={this.handleIncrement}
        handleReset={this.handleReset}
        handleShuffle={this.handleShuffle}
        id={character.id}
        
    
        
        />
      ))}
        
        </div>
      // </Wrapper>
    );
  }
  
}

export default App;
