import React, { Component } from 'react';
import dcgp from 'dcgp';
// import 'dcgp/dcgp.wasm';
import logo from './logo.svg';
import './App.css';

const { KernelSet, Expression } = dcgp();

class App extends Component {
  state = { chromosome: [] };

  number = 0;

  handleClick = () => {
    const kernelSet = new KernelSet(KernelSet.ALL_KERNELS);
    const expression = new Expression(2, 1, 2, 6, 5, 2, kernelSet, this.number);

    this.setState({
      chromosome: expression.getChromosome(),
    });

    this.number += 1;

    kernelSet.destroy();
    expression.destroy();
  };

  render() {
    const { chromosome } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{chromosome.join('')}</p>
          <a className="App-link" onClick={this.handleClick}>
            Click to generate a new chromosome
          </a>
        </header>
      </div>
    );
  }
}

export default App;
