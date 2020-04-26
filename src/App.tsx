import React, {Component} from 'react';
import './App.css';
import '../node_modules/bulma/css/bulma.css';
import Player from "./components/Player";
import linkedin from './resources/linkedin-logo.png';
import github from './resources/GitHub-logo.png';
import ronaldo from "./resources/ronaldo.jpg";
import dybala from "./resources/dybala.png";
import higuain from "./resources/higuain.webp";
import buffon from "./resources/buffon.jpg";
import szczesny from "./resources/szczesny.jpg";
import pinsoglio from "./resources/pinsoglio.jpg";
import bonucci from "./resources/bonucci.png";
import chiellini from "./resources/chiellini.jpg";
import rugani from "./resources/rugani.png";
import sandro from "./resources/sandro.jpg";
import desciglio from "./resources/desciglio.jpg";
import deligt from "./resources/deligt.jpg";
import danilo from "./resources/danilo.png";
import demiral from "./resources/demiral.jpg";
import khedira from "./resources/khedira.jpg";
import pjanic from "./resources/pjanic.jpg";
import cuadrado from "./resources/cuadrado.jpg";
import costa from "./resources/costa.png";
import bernardeschi from "./resources/bernardeschi.jpg";
import bentancur from "./resources/bentancur.jpg";
import matuidi from "./resources/matuidi.png";
import rabiot from "./resources/rabiot.jpg";
import ramsey from "./resources/ramsey.png";

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
                        <h1 className="title">Football Player Form Tracker</h1>
                </header>
                <div className="columns">
                    <Player playerId={44} photo={ronaldo}/>
                    <Player playerId={2046} photo={dybala}/>
                    <Player playerId={2047} photo={higuain}/>
                    <Player playerId={2037} photo={cuadrado}/>
                    <Player playerId={2039} photo={costa}/>
                </div>
                <div className="columns">
                    <Player playerId={2040} photo={bernardeschi}/>
                    <Player playerId={2042} photo={matuidi}/>
                    <Player playerId={3368} photo={rabiot}/>
                    <Player playerId={7791} photo={ramsey}/>
                    <Player playerId={2036} photo={pjanic}/>
                </div>
                <div className="columns">
                    <Player playerId={2041} photo={bentancur}/>
                    <Player playerId={2035} photo={khedira}/>
                    <Player playerId={1744} photo={bonucci}/>
                    <Player playerId={2025} photo={chiellini}/>
                    <Player playerId={2027} photo={rugani}/>
                </div>
                <div className="columns">
                    <Player playerId={2028} photo={sandro}/>
                    <Player playerId={2030} photo={desciglio}/>
                    <Player playerId={7549} photo={deligt}/>
                    <Player playerId={7881} photo={danilo}/>
                    <Player playerId={37118} photo={demiral}/>
                </div>
                <div className="columns">
                    <Player playerId={2019} photo={buffon}/>
                    <Player playerId={2022} photo={szczesny}/>
                    <Player playerId={2023} photo={pinsoglio}/>
                </div>
            </div>
        );
    }
}

export default App;

