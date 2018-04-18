import React, { Component } from 'react'
//import { Animated } from 'react-animated-css'

import Header from './header'
import Choice from './choice'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerChoices: ['rock', 'paper', 'scissors'],
      selectedChoice: null,
      computerChoice: null
    }
  }

  compare(choice1, choice2) {
    let decision = null

    if (choice1 === choice2) {
      decision = 'It is a tie!'
    } else if (choice1 === 'paper') {
      choice2 === 'rock'
        ? (decision = 'Paper wins!')
        : (decision = 'Scissors wins!')
    } else if (choice1 === 'scissors') {
      choice2 === 'paper'
        ? (decision = 'Scissors wins!')
        : (decision = 'Rock wins!')
    } else if (choice1 === 'rock') {
      choice2 === 'scissors'
        ? (decision = 'Rock wins!')
        : (decision = 'Paper wins!')
    } else {
      decision = 'Option not allowed! Choose between rock, paper or scissors.'
    }

    return decision
  }

  renderChoice(playerChoice, selectedChoice, index) {
    return (
      <div className={`fl w-100 ${index > -1 ? 'w-third-ns' : ''}`} key={index}>
        <Choice
          title={playerChoice}
          onClick={() => this.handleSelect(playerChoice)}
          selectedChoice={selectedChoice}
        />
      </div>
    )
  }

  handleSelect(option, pcOption = Math.random()) {
    this.setState({
      computerChoice:
        pcOption > 0.34 ? (pcOption > 0.68 ? 'rock' : 'scissors') : 'paper'
    })
    this.setState({ selectedChoice: option })
  }

  render() {
    return (
      <div>
        <Header title="Rock. Paper. Scissors." />
        <div className="center ph5-ns">
          <div className="body-container cf ph2-ns">
            <div className="block">
              <div className="fl w-100 w-100-ns pa4">
                <h2>Your Choice:</h2>
              </div>
              {this.state.playerChoices.map((playerChoice, index) =>
                this.renderChoice(
                  playerChoice,
                  this.state.selectedChoice,
                  index
                )
              )}
            </div>
            {this.state.selectedChoice ? (
              <div>
                <div className="block inverse">
                  <div className="fl w-100 w-100-ns pa4">
                    <h2>Computer's Choice:</h2>
                  </div>
                  {this.renderChoice(this.state.computerChoice)}
                </div>
                <div className="block">
                  <div className="fl w-100 w-100-ns pa4 pv0">
                    <p className="result">
                      {this.compare(
                        this.state.selectedChoice,
                        this.state.computerChoice
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
