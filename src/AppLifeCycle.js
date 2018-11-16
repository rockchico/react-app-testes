import React from 'react'

class InputTeste extends React.Component {
  
  constructor(props) {
    super(props);
    console.log('passou no InputTeste constructor')
  }

  dismiss() {
      this.props.unmountMe();
  } 

  componentDidMount() {
    console.log('passou no InputTeste componentDidMount ');
  }

  componentWillUnmount() {
    console.log('passou no InputTeste componentWillUnmount ');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('passou no InputTeste componentDidUpdate ');
  }

  render(){
      
    console.log('passou no InputTeste render ');

      // code
      return (
        <div>
          { console.log('passou no InputTeste return render ') }
          <input type='text' onChange={this.props.onChange}></input>
        </div>
        
      )
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('passou no App constructor')

    this.state = { counter: 0, renderChild: true };

  }

  // chamado após a primeira renderização do componente
  /*
  componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
  Initialization that requires DOM nodes should go here. 
  If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  */
  componentDidMount() {
    console.log('passou no App componentDidMount ');
  }

  

  _handleChange(e) {
    this.setState((prevState, props) => ({ counter: prevState.counter + 1 }))
  }

  _handleChildUnmount(render){
    this.setState({renderChild: render});
  }

  // chamado após uma atualização do componente 
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('passou no App componentDidUpdate ');
  }

  render() {
    
    console.log('passou no App render ');

    const { counter } = this.state;

    return (
      <div>
        { console.log('passou no App return render ') }
        <div><button onClick={this._handleChildUnmount.bind(this, false)} >x</button></div>
        <div><button onClick={this._handleChildUnmount.bind(this, true)} >+</button></div>
        {this.state.renderChild ? <InputTeste onChange={this._handleChange.bind(this)} /> : null}
        <div>{ counter }</div>
      </div>
    )
  }
}

export default App;