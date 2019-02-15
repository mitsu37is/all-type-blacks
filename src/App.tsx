import * as React from "react";
import PanelList from "./components/PanelList";
import "./App.css";
import { number } from "prop-types";

interface IState {
  isPlaying: boolean;
  count: number;
}

class App extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      isPlaying: true,
      count: 0
    };
  }

  public render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="font-bold text-xl mb-4">ALL BLACKS</h1>
          <div
            className="bg-blue text-white font-bold mx-auto my-4 px-4 py-3"
            role="alert"
          >
            <p className="counter text-center">
              You won this game {this.state.count} times!
            </p>
          </div>
          <button
            onClick={() => this.startGame()}
            className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
          >
            START
          </button>
        </header>
        <PanelList isPlaying={this.state.isPlaying} endGame={this.endGame} />
      </div>
    );
  }

  public startGame = () => {
    this.setState({ isPlaying: true });
  };

  public endGame = () => {
    this.setState({ isPlaying: false, count: this.state.count + 1 });
  };
}

export default App;
