// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. setting up the "variables"
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. creating a method to use HANDLEINPUT
    this.setState({ userInput: e.target.value})
  }

  render(){
    // 3. creating a function
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. create a class */}
          onChange={ this.robot }
          {/* 5. create an output*/}
          value={ userInput }
        />

        <div>
          {/* 6. handleinput of what is going to happen*/}
          <GoodRobot
            {/* 7. this.state.robots talk*/}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. wrap in a div make output conversation
      <div>
        <h3>Good Robot</h3>
        {/* 9. create an props.output for a robot */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. expot it to the main app.js
export default GoodRobot
