import React from 'react'

class InputTeste extends React.Component {
  
  constructor(props) {
    super(props);
  }

  dismiss() {
      this.props.unmountMe();
  } 

  componentWillUnmount() {
    console.log('passou no componentWillUnmount ');
  }

  render(){
      // code
      return (
        <input type='text'></input>
      )
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('passou no constructor')

    this.state = { counter: 0, renderChild: true };

  }

  // chamado após a primeira renderização do componente
  /*
  componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
  Initialization that requires DOM nodes should go here. 
  If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  */
  componentDidMount() {
    console.log('passou no componentDidMount ');
  }

  

  _handleChange(e) {
    this.setState((prevState, props) => ({ counter: prevState.counter + 1 }))
  }

  _handleChildUnmount(){
    this.setState({renderChild: false});
  }

  // chamado após uma atualização do componente 
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('passou no componentDidUpdate ');
  }

  render() {
    
    console.log('passou no render ');

    const { counter } = this.state;

    return (
      <div>
        { console.log('passou no return render ') }
        <div><button onClick={this._handleChildUnmount.bind(this)} >x</button></div>
        {this.state.renderChild ? <InputTeste /> : null}
        <div>{ counter }</div>
      </div>
    )
  }
}

export default App;