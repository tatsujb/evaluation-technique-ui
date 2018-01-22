import React, { Component } from 'react';
import Menu1 from './Menu1/Menu1';
import Menu2 from './Menu2/Menu2';
import PropTypes from 'prop-types';
import './LateralMenuLevel2.css';

class LateralMenuLevel2 extends Component {
    render(){
        const secondMenuLevel = this.props.secondMenuLevel;
        return (
            <div className={(secondMenuLevel > 0) ? 'LateralMenuLevel2 LateralMenuLevel1Opened' : 'LateralMenuLevel2'}>
                {{
                    1: (
                        <Menu1 />
                    ),
                    2: (
                        <Menu2 />
                    )
                }[secondMenuLevel]}
            </div>
        )
    }
}

LateralMenuLevel2.propTypes = {
    secondMenuLevel: PropTypes.number,
};

export default LateralMenuLevel2;