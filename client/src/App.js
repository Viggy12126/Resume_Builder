// import React, { Component } from 'react';

// import logo from './logo.svg';

import './App.css';
import Typography from '@material-ui/core/Typography';

// class App extends Component {
//   state = {
//     response: '',
//     post: '',
//     responseToPost: '',
//   };
  
//   componentDidMount() {
//     this.callApi()
//       .then(res => this.setState({ response: res.express }))
//       .catch(err => console.log(err));
//   }
  
//   callApi = async () => {
//     const response = await fetch('/api/hello');
//     const body = await response.json();
//     if (response.status !== 200) throw Error(body.message);
    
//     return body;
//   };
  
//   handleSubmit = async e => {
//     e.preventDefault();
//     const response = await fetch('/api/world', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ post: this.state.post }),
//     });
//     const body = await response.text();
    
//     this.setState({ responseToPost: body });
//   };
  
// render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//         <p>{this.state.response}</p>
//         <form onSubmit={this.handleSubmit}>
//           <p>
//             <strong>Post to Server:</strong>
//           </p>
//           <input
//             type="text"
//             value={this.state.post}
//             onChange={e => this.setState({ post: e.target.value })}
//           />
//           <button type="submit">Submit</button>
//         </form>
//         <p>{this.state.responseToPost}</p>
//       </div>
//     );
//   }
// }

// export default App;


import React from 'react'
import Resume from './components/Resume'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing.unit * 1,
  },
  padding: {
    padding: theme.spacing.unit,
  },
}));

export function App() {
  const classes=useStyles()
  return (
    <div className="App">
      <h1>Resume Builder</h1>
    <Resume />
    </div>
  )
}

export default App
