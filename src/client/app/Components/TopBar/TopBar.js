import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../../img/eole_logo.png';
import menu from '../../../img/menu_icon.png';
import './TopBar.css';

class TopBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const firstMenuLevel = this.props.firstMenuLevel;
        return (
                <div className={firstMenuLevel ? 'TopBar firstLevelOpened' : 'TopBar'}>
                    <div><img src={logo} className="eole-logo" alt="Company Logo" /></div>
                    <h1 className="TopBar-title">Site Web d'Évaluation Technique</h1>
                    <div
                        className="menu-icon-container"
                        onClick={this.props.toggleFirstMenuLevel}
                    >
                        <div className="menu-icon-c">
                            <img
                            src={menu}
                            className={firstMenuLevel ? 'menu-icon spin' : 'menu-icon'}
                            alt="Menu Icon" />
                        </div>
                    </div>
                </div>
        );
    }
}

TopBar.propTypes = {
    toggleFirstMenuLevel: PropTypes.func,
    firstMenuLevel: PropTypes.bool,
};

export default TopBar;
