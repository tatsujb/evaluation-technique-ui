import React, { Component } from 'react';
import MenuHome from './MenuHome/MenuHome';
import MenuEvalBack from './MenuEvalBack/MenuEvalBack';
import MenuEvalFront from './MenuEvalFront/MenuEvalFront';
import MenuEvalMixed from './MenuEvalMixed/MenuEvalMixed';
import MenuEvalJobAndDB from './MenuEvalJobAndDB/MenuEvalJobAndDB';
import MenuEvalCom from './MenuEvalCom/MenuEvalCom';
import MenuEvalRH from './MenuEvalRH/MenuEvalRH';
import PropTypes from 'prop-types';
import './LeftMenu.css';
import Content from '../../Content/Content'

class LeftMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        const leftMenuLevel = this.props.leftMenuHover;
        const leftMenuContent = this.props.leftMenuContent;
        const leftMenuSwitching = this.props.leftMenuSwitching;
        return (
            <div className="ContentContainer">
                <div className={(leftMenuLevel > 0) ? 'LeftMenu LeftMenuOpened' : 'LeftMenu'}>
                    <div className={(leftMenuLevel > 0) ? ((leftMenuSwitching) ? 'LeftMenuFinal LeftMenuFinalOpened LeftMenuFinalSwitch' : 'LeftMenuFinal LeftMenuFinalOpened') : 'LeftMenuFinal'}>
                        <div className="LeftMenuRelative">
                            <div className="MenuLeft">
                                {{
                                    1: (
                                        <MenuHome />
                                    ),
                                    2: (
                                        <MenuEvalBack />
                                    ),
                                    3: (
                                        <MenuEvalFront />
                                    ),
                                    4: (
                                        <MenuEvalMixed />
                                    ),
                                    5: (
                                        <MenuEvalJobAndDB />
                                    ),
                                    6: (
                                        <MenuEvalCom />
                                    ),
                                    7: (
                                        <MenuEvalRH />
                                    )
                                }[leftMenuContent]}
                            </div>
                        </div>
                    </div>
                </div>
                <Content/>
            </div>
        )
    }
}

LeftMenu.propTypes = {
    leftMenuHover: PropTypes.number,
    leftMenuContent: PropTypes.number,
    leftMenuSwitching: PropTypes.bool,
};

export default LeftMenu;