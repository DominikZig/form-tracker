import React, {Component} from 'react';
import './App.css';
import '../node_modules/bulma/css/bulma.css';
import Player from "./components/Player";
import linkedin from './linkedin-logo.png';
import github from './GitHub-logo.png';

class App extends Component {
    render() {
        return (
            <div className="App">
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div id="navbarBasicExample" className="navbar-menu">
                        <a className="navbar-item">
                            Home
                        </a>
                        <a className="navbar-item">
                            Juventus
                        </a>
                        <a className="navbar-item">
                            AS Roma
                        </a>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <a href="https://linkedin.com/in/dominik-zigmanov-83a117151">
                                    <img src={linkedin} alt="Logo" className={"img-rounded"} height={100}/>
                                </a>
                            </div>
                            <div className="navbar-item">
                                <a href="https://github.com/DominikZig/form-tracker">
                                    <img src={github} alt="Logo" className={"img-rounded"}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
                <header className="header">
                        <h1 className="title">Football Player Form Tracker </h1>
                </header>
                <div className="container">
                    <Player />
                </div>
            </div>
        );
    }
}

export default App;

