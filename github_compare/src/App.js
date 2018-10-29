import React, { Component } from 'react';
import Form1 from './components/Form1';  
import Form2 from './components/Form2';  
import './App.css';

class App extends Component {
  state={
    image1 : null,
    image2 : null,
    repo1 : null,
    repo2 : null
  }
  getUser1 = async (e) => {
    e.preventDefault();
    const user1 = e.target.elements.username1.value;
    const api_call1 = await fetch(`https://api.github.com/users/${user1}`);
    const data1 = await api_call1.json();
    const repo1 = data1.public_repos;
    const image1 = data1.avatar_url;
    this.setState({repo1 : repo1,
                   image1 : image1        
                  });
  }
  getUser2 = async (e) => {
    e.preventDefault();
    const user2 = e.target.elements.username2.value;
    const api_call2 = await fetch(`https://api.github.com/users/${user2}`);
    const data2 = await api_call2.json();
    const repo2 = data2.public_repos;
    const image2 = data2.avatar_url;
    this.setState({repo2 : repo2,
                   image2 : image2
                  });
  }

  render() {
    return (
        <div>
          <p>Hello World</p>
          <div className="divide" style={{float:"left"}}>
            <p>Enter Username 1</p>
            <Form1 getUser={this.getUser1}/>
            {this.state.repo1}
            <img src={this.state.image1} />
          </div>
          <div className="divide" style={{float:"left"}}>
            <p>Enter Username 2</p>
            <Form2 getUser={this.getUser2}/>
            {this.state.repo2}
            <img src={this.state.image2} />
          </div>
        </div>      
    );
  }
}

export default App;
