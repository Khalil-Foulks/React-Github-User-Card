import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      githubData:[]
    }
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/khalil-foulks")
    .then(res => {
      console.log(res.data)
      this.setState({
        githubData:res.data
      });
    })
  }

  componentDidUpdate(){

  }



  render(){
      return (
      <div className="App">
        <UserCard githubData={this.state.githubData}/>
      </div>
    );
  };
}

export default App;
