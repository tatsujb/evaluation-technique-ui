import React, { Component } from 'react';
import TopBar from './Components/TopBar/TopBar'
import LateralMenuLevel1 from './Components/LateralMenu/LateralMenuLevel1/LateralMenuLevel1'
import LateralMenuLevel2 from './Components/LateralMenu/LateralMenuLevel2/LateralMenuLevel2'
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstMenuLevel: false,
            secondMenuLevel : 0
        };
        this.toggleFirstMenuLevel = this.toggleFirstMenuLevel.bind(this);
        this.setLateralMenuLevel = this.setLateralMenuLevel.bind(this);
    }

    toggleFirstMenuLevel(){
        if (this.state.firstMenuLevel) {
            this.setState({
                firstMenuLevel: !this.state.firstMenuLevel,
                secondMenuLevel : 0,
            });
        } else {
            this.setState({
                firstMenuLevel: !this.state.firstMenuLevel,
            });
        }

    }

    setLateralMenuLevel(level) {
        if (this.state.firstMenuLevel) {
            this.setState({
                secondMenuLevel: level,
            });
        }
    }

    render() {
        return (
            <div className="Home">
                <LateralMenuLevel1 firstMenuLevel={this.state.firstMenuLevel} secondMenuLevel={this.state.secondMenuLevel} setLateralMenuLevel={this.setLateralMenuLevel}/>
                <LateralMenuLevel2 secondMenuLevel={this.state.secondMenuLevel}/>
                <TopBar firstMenuLevel={this.state.firstMenuLevel} toggleFirstMenuLevel={this.toggleFirstMenuLevel}/>
            </div>
        );
    }
}

export default Home;
