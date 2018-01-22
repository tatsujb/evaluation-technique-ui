import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LateralMenuLevel1.css';

class LateralMenuLevel1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        const firstMenuLevel = this.props.firstMenuLevel;
        const secondMenuLevel = this.props.secondMenuLevel;
        return (
            <div className={firstMenuLevel ? 'LateralMenuLevel1 opened' : 'LateralMenuLevel1'}>
                <div className="secondMenuLevel1Content">
                    <div className={(secondMenuLevel === 1) ? 'menu-item selected' : 'menu-item'} onMouseOver={() => {this.props.setLateralMenuLevel(1)}}>Menu Item 1</div>
                    <div className={(secondMenuLevel === 2) ? 'menu-item selected' : 'menu-item'} onMouseOver={() => {this.props.setLateralMenuLevel(2)}}>Menu Item 2</div>
                    <div className={(secondMenuLevel === 3) ? 'menu-item selected' : 'menu-item'} onMouseOver={() => {this.props.setLateralMenuLevel(3)}}>Menu Item 3</div>
                    <div className={(secondMenuLevel === 4) ? 'menu-item selected' : 'menu-item'} onMouseOver={() => {this.props.setLateralMenuLevel(4)}}>Menu Item 4</div>
                    <div className={(secondMenuLevel === 5) ? 'menu-item selected' : 'menu-item'} onMouseOver={() => {this.props.setLateralMenuLevel(5)}}>Menu Item 5</div>
                    <div className={(secondMenuLevel === 6) ? 'menu-item selected' : 'menu-item'} onMouseOver={() => {this.props.setLateralMenuLevel(6)}}>Menu Item 6</div>
                </div>
            </div>
        )
    }
}

LateralMenuLevel1.propTypes = {
    firstMenuLevel: PropTypes.bool,
    secondMenuLevel: PropTypes.number,
    setLateralMenuLevel: PropTypes.func,
};

export default LateralMenuLevel1;