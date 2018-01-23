import React, { Component } from 'react';
import TopBar from './Components/TopBar/TopBar';
import TopMenu from './Components/TopAndLeftMenus/TopMenu/TopMenu';
import LeftMenu from './Components/TopAndLeftMenus/LeftMenu/LeftMenu';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topMenuOpened: false,
            leftMenuSwitching: false,
            leftMenuHover : 0,
            leftMenuContent : 0
        };
        this.toggleTopMenu = this.toggleTopMenu.bind(this);
        this.toggleSwitching = this.toggleSwitching.bind(this);
        this.toggleLevel = this.toggleLevel.bind(this);
        this.setLeftMenuHover = this.setLeftMenuHover.bind(this);
    }

    toggleTopMenu(){
        if (this.state.topMenuOpened) {
            this.setState({
                topMenuOpened: !this.state.topMenuOpened,
                leftMenuHover : 0,
                leftMenuSwitching: false,
            });
        } else {
            this.setState({
                topMenuOpened: !this.state.topMenuOpened,
            });
        }

    }

    toggleSwitching(){
        this.setState({leftMenuSwitching: !this.state.leftMenuSwitching});
    }

    toggleLevel(level){
        this.setState({leftMenuHover: level, leftMenuContent : level});
    }

    setLeftMenuHover(level) {
        if (this.state.topMenuOpened) {
            if (this.state.leftMenuHover === 0) {
                this.toggleLevel(level);
            } else {
                this.toggleSwitching();
                setTimeout(() => {
                    this.toggleLevel(level);
                }, 200);
                setTimeout(() => {
                    this.toggleSwitching();
                }, 201);
            }
        }
    }

    render() {
        return (
            <div className="Home">
                <TopMenu topMenuOpened={this.state.topMenuOpened} leftMenuHover={this.state.leftMenuHover} setLeftMenuHover={this.setLeftMenuHover}/>
                <LeftMenu leftMenuHover={this.state.leftMenuHover} leftMenuContent={this.state.leftMenuContent} leftMenuSwitching={this.state.leftMenuSwitching}/>
                <TopBar topMenuOpened={this.state.topMenuOpened} toggleTopMenu={this.toggleTopMenu}/>
            </div>
        );
    }
}

export default Home;
