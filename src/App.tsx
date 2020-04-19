import React, {Component} from 'react';
import './App.css';
import Player from "./components/Player";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="header">
                    <div className="container">
                        <h1>Football Player Form Tracker </h1>
                    </div>
                </header>
                <div className="container">
                    <Player />
                </div>
            </div>
        );
    }
}

export default App;

// return (
//     <button>Lucas Vazquez</button>
// );

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>89d3fc1202a147158fd63bdafa3e34a0
//         </p>
//       </header>
//     </div>
//   );
// }

