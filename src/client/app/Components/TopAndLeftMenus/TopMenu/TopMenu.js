import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TopMenu.css';

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
                        onMouseOver={() => {(leftMenuHover !== 1) ? this.props.setLeftMenuHover(1) :  null }}
                    >
                        Home
                    </div>
                    <div
                        className={(leftMenuHover === 2) ? 'menu-item menu-item-selected' : 'menu-item'}
                        onMouseOver={() => {(leftMenuHover !== 2) ? this.props.setLeftMenuHover(2) :  null }}
                    >
                        Évaluation Back
                    </div>
                    <div
                        className={(leftMenuHover === 3) ? 'menu-item menu-item-selected' : 'menu-item'}
                        onMouseOver={() => {(leftMenuHover !== 3) ? this.props.setLeftMenuHover(3) :  null }}
                    >
                        Évaluation Front
                    </div>
                    <div
                        className={(leftMenuHover === 4) ? 'menu-item menu-item-selected' : 'menu-item'}
                        onMouseOver={() => {(leftMenuHover !== 4) ? this.props.setLeftMenuHover(4) :  null }}
                    >
                        Évaluation Mixte
                    </div>
                    <div
                        className={(leftMenuHover === 5) ? 'menu-item menu-item-selected' : 'menu-item'}
                        onMouseOver={() => {(leftMenuHover !== 5) ? this.props.setLeftMenuHover(5) :  null }}
                    >
                        Évaluation Metier/DB
                    </div>
                    <div
                        className={(leftMenuHover === 6) ? 'menu-item menu-item-selected' : 'menu-item'}
                        onMouseOver={() => {(leftMenuHover !== 6) ? this.props.setLeftMenuHover(6) :  null }}
                    >
                        Évaluation Com
                    </div>
                    <div
                        className={(leftMenuHover === 7) ? 'menu-item menu-item-selected' : 'menu-item'}
                        onMouseOver={() => {(leftMenuHover !== 7) ? this.props.setLeftMenuHover(7) :  null }}
                    >
                        Évaluation RH
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