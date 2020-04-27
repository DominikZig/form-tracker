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
import ronaldopose from "./resources/ronaldo-pose.png";
import dybalapose from "./resources/dybala-pose.png";
import higuainpose from "./resources/higuain-pose.png";
import cuadradopose from "./resources/cuadrado-pose.png";
import bernardeschipose from "./resources/bernardeschi-pose.png";
import rabiotpose from "./resources/rabiot-pose.png";
import bentancurpose from "./resources/bentancur-pose.png";
import pjanicpose from "./resources/pjanic-pose.png";
import khedirapose from "./resources/khedira-pose.png";
import ramseypose from "./resources/ramsey-pose.png";
import matuidipose from "./resources/matuidi-pose.png";
import deligtpose from "./resources/deligt-pose.png";
import bonuccipose from "./resources/bonucci-pose.png";
import demiralpose from "./resources/demiral-pose.png";
import ruganipose from "./resources/rugani-pose.png";
import sandropose from "./resources/sandro-pose.png";
import danilopose from "./resources/danilo-pose.png";
import szczesnypose from "./resources/szczesny-pose.png";
import buffonpose from "./resources/buffon-pose.png";

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
                        <a className="navbar-item">
                            More coming soon
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
                {/*Too many Player requests for Football Data API and also some players are missing from API Football:*/}
                {/*<div className="columns">*/}
                {/*    <Player playerId={44} photo={ronaldo}/>*/}
                {/*    <Player playerId={2046} photo={dybala}/>*/}
                {/*    <Player playerId={2047} photo={higuain}/>*/}
                {/*    <Player playerId={2037} photo={cuadrado}/>*/}
                {/*    <Player playerId={2039} photo={costa}/>*/}
                {/*</div>*/}
                {/*<div className="columns">*/}
                {/*    <Player playerId={2040} photo={bernardeschi}/>*/}
                {/*    <Player playerId={2042} photo={matuidi}/>*/}
                {/*    <Player playerId={3368} photo={rabiot}/>*/}
                {/*    <Player playerId={7791} photo={ramsey}/>*/}
                {/*    <Player playerId={2036} photo={pjanic}/>*/}
                {/*</div>*/}
                {/*<div className="columns">*/}
                {/*    <Player playerId={2041} photo={bentancur}/>*/}
                {/*    <Player playerId={2035} photo={khedira}/>*/}
                {/*    <Player playerId={1744} photo={bonucci}/>*/}
                {/*    <Player playerId={2025} photo={chiellini}/>*/}
                {/*    <Player playerId={2027} photo={rugani}/>*/}
                {/*</div>*/}
                {/*<div className="columns">*/}
                {/*    <Player playerId={2028} photo={sandro}/>*/}
                {/*    <Player playerId={2030} photo={desciglio}/>*/}
                {/*    <Player playerId={7549} photo={deligt}/>*/}
                {/*    <Player playerId={7881} photo={danilo}/>*/}
                {/*    <Player playerId={37118} photo={demiral}/>*/}
                {/*</div>*/}
                {/*<div className="columns">*/}
                {/*    <Player playerId={2019} photo={buffon}/>*/}
                {/*    <Player playerId={2022} photo={szczesny}/>*/}
                {/*    <Player playerId={2023} photo={pinsoglio}/>*/}
                {/*</div>*/}

                <div className="columns">
                    <Player playerId={44} photo={ronaldo} apiFootballId={2189} posephoto={ronaldopose}/>
                    <Player playerId={2046} photo={dybala} apiFootballId={2128} posephoto={dybalapose}/>
                    <Player playerId={2047} photo={higuain} apiFootballId={2127} posephoto={higuainpose}/>
                    <Player playerId={2037} photo={cuadrado} apiFootballId={2131} posephoto={cuadradopose}/>
                    <Player playerId={2040} photo={bernardeschi} apiFootballId={2184} posephoto={bernardeschipose}/>
                </div>
                <div className="columns">
                    <Player playerId={3368} photo={rabiot} apiFootballId={2256} posephoto={rabiotpose}/>
                    <Player playerId={2041} photo={bentancur} apiFootballId={2126} posephoto={bentancurpose}/>
                    <Player playerId={2036} photo={pjanic} apiFootballId={2129} posephoto={pjanicpose}/>
                    <Player playerId={2035} photo={khedira} apiFootballId={2125} posephoto={khedirapose}/>
                    <Player playerId={7791} photo={ramsey} apiFootballId={2130} posephoto={ramseypose}/>
                </div>
                <div className="columns">
                    <Player playerId={2042} photo={matuidi} apiFootballId={2132} posephoto={matuidipose}/>
                    <Player playerId={7549} photo={deligt} apiFootballId={3009} posephoto={deligtpose}/>
                    <Player playerId={1744} photo={bonucci} apiFootballId={3007} posephoto={bonuccipose}/>
                    <Player playerId={37118} photo={demiral} apiFootballId={3014} posephoto={demiralpose}/>
                    <Player playerId={2027} photo={rugani} apiFootballId={3038} posephoto={ruganipose}/>
                </div>
                <div className="columns">
                    <Player playerId={2028} photo={sandro} apiFootballId={2133} posephoto={sandropose}/>
                    <Player playerId={7881} photo={danilo} apiFootballId={3008} posephoto={danilopose}/>
                    <Player playerId={2022} photo={szczesny} apiFootballId={3006} posephoto={szczesnypose}/>
                    <Player playerId={2019} photo={buffon} apiFootballId={3015} posephoto={buffonpose}/>
                </div>
            </div>
        );
    }
}

export default App;

