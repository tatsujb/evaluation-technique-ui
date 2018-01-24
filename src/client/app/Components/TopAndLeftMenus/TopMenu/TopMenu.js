import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TopMenu.css';
import Front from 'react-icons/lib/md/palette';
import Web from 'react-icons/lib/md/web';
import Home from 'react-icons/lib/md/home';
import CPU from 'react-icons/lib/md/memory';
import Database from 'react-icons/lib/fa/database';
import Com from 'react-icons/lib/fa/hand-peace-o';
import RH from 'react-icons/lib/fa/group';

class TopMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        const topMenuOpened = this.props.topMenuOpened;
        const leftMenuHover = this.props.leftMenuHover;
        return (
            <div className={topMenuOpened ? 'TopMenu TopMenuOpened' : 'TopMenu'}>
                <div className="TopMenuContent">
                    <div

                        className={(leftMenuHover === 1) ? 'menu-item menu-item-selected' : 'menu-item'}
                        onMouseEnter={() => {(leftMenuHover !== 1) ? this.props.setLeftMenuHover(1) :  null }}
                    >
                        <div className="MenuIconAppear">
                            <Home className="MenuIcon"/>
                            <Home className="MenuIconPulse"/>
                        </div>
                        <div className="MenuText">Home</div>
                    </div>
                    <div
                        className={(leftMenuHover === 2) ? 'menu-item menu-item-selected' : 'menu-item'}
                        onMouseEnter={() => {(leftMenuHover !== 2) ? this.props.setLeftMenuHover(2) :  null }}
                    >
                        <div className="MenuIconAppear">
                            <CPU className="MenuIcon"/>
                            <CPU className="MenuIconPulse"/>
                        </div>
                        <div className="MenuText">Évaluation Back</div>
                    </div>
                    <div
                        className={(leftMenuHover === 3) ? 'menu-item menu-item-selected' : 'menu-item'}
                        onMouseEnter={() => {(leftMenuHover !== 3) ? this.props.setLeftMenuHover(3) :  null }}
                    >
                        <div className="MenuIconAppear">
                            <Front className="MenuIcon"/>
                            <Front className="MenuIconPulse"/>
                        </div>
                        <div className="MenuText">Évaluation Front</div>
                    </div>
                    <div
                        className={(leftMenuHover === 4) ? 'menu-item menu-item-selected' : 'menu-item'}
                        onMouseEnter={() => {(leftMenuHover !== 4) ? this.props.setLeftMenuHover(4) :  null }}
                    >
                        <div className="MenuIconAppear">
                            <Web className="MenuIcon"/>
                            <Web className="MenuIconPulse"/>
                        </div>
                        <div className="MenuText">Évaluation Mixte</div>
                    </div>
                    <div
                        className={(leftMenuHover === 5) ? 'menu-item menu-item-selected' : 'menu-item'}
                        onMouseEnter={() => {(leftMenuHover !== 5) ? this.props.setLeftMenuHover(5) :  null }}
                    >
                        <div className="MenuIconAppear">
                            <Database className="MenuIcon"/>
                            <Database className="MenuIconPulse"/>
                        </div>
                        <div className="MenuText">Évaluation Metier/DB</div>
                    </div>
                    <div
                        className={(leftMenuHover === 6) ? 'menu-item menu-item-selected' : 'menu-item'}
                        onMouseEnter={() => {(leftMenuHover !== 6) ? this.props.setLeftMenuHover(6) :  null }}
                    >
                        <div className="MenuIconAppear">
                            <Com className="MenuIcon"/>
                            <Com className="MenuIconPulse"/>
                        </div>
                        <div className="MenuText">Évaluation Com</div>
                    </div>
                    <div
                        className={(leftMenuHover === 7) ? 'menu-item menu-item-selected' : 'menu-item'}
                        onMouseEnter={() => {(leftMenuHover !== 7) ? this.props.setLeftMenuHover(7) :  null }}
                    >
                        <div className="MenuIconAppear">
                            <RH className="MenuIcon"/>
                            <RH className="MenuIconPulse"/>
                        </div>
                        <div className="MenuText">Évaluation RH</div>
                    </div>
                </div>
            </div>
        )
    }
}

TopMenu.propTypes = {
    topMenuOpened: PropTypes.bool,
    leftMenuHover: PropTypes.number,
    setLeftMenuHover: PropTypes.func,
};

export default TopMenu;