import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../../img/eole_logo.png';
import menu from '../../../img/menu_icon.png';
import SearchIcon from 'react-icons/lib/fa/search';
import Bell from 'react-icons/lib/ti/bell';
import './TopBar.css';

class TopBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const firstMenuLevel = this.props.topMenuOpened;
        const searching = this.props.searching;
        const searchIsHovered = this.props.searchIsHovered;
        const belling = this.props.belling;
        const bellIsHovered = this.props.bellIsHovered;
        return (
                <div className={firstMenuLevel ? 'TopBar TopBarOpened' : 'TopBar'}
                     onMouseEnter={this.props.toggleBarIsHovered}
                     onMouseLeave={this.props.toggleBarIsHovered}>
                    <div><img src={logo} className="eole-logo" alt="Company Logo" /></div>
                    <div className={
                        searchIsHovered || searching || belling ? (searching ? 'RotateBloc RotateBlocRotated SearchHovered' : 'RotateBloc SearchHovered') : 'RotateBloc'
                    } >
                        <div className="BlocOverhead">
                            <form className="SearchBars">
                                <div className="group">
                                    <input type="text" required />
                                        <span className="highlight" />
                                        <span className="bar" />
                                        <label>Candidat</label>
                                </div>
                                <div className="group">
                                    <input type="text" required />
                                        <span className="highlight" />
                                        <span className="bar" />
                                        <label>Évaluation</label>
                                </div>
                            </form>
                        </div>
                        <div className="FrontFace">
                            <div className="TopBar-title">Site Web d'Évaluation Technique</div>
                        </div>
                        <div className="BlocUnderside">
                        </div>
                    </div>
                    <div
                        className="SearchButton"
                        onClick={this.props.toggleSearch}
                        onMouseEnter={this.props.toggleSearchIsHovered}
                        onMouseLeave={this.props.toggleSearchIsHovered}>
                        <SearchIcon className={searching ? 'SearchIcon SearchOpened' : 'SearchIcon'} />
                    </div>
                    <div
                        className="BellButton"
                        onClick={this.props.toggleBell}
                        onMouseEnter={this.props.toggleBellIsHovered}
                        onMouseLeave={this.props.toggleBellIsHovered}>
                        <Bell className={belling ? 'BellIcon BellOpened' : 'BellIcon'} />
                    </div>
                    <div
                        className="MenuIconContainer"
                        onClick={this.props.toggleTopMenu}>
                        <div className="MenuIconC">
                            <img
                            src={menu}
                            className={firstMenuLevel ? 'MenuMenuIcon MenuIconSpin' : 'MenuMenuIcon'}
                            alt="Menu Icon" />
                        </div>
                    </div>
                </div>
        );
    }
}

TopBar.propTypes = {
    toggleBarIsHovered: PropTypes.func,
    toggleSearchIsHovered: PropTypes.func,
    toggleTopMenu: PropTypes.func,
    topMenuOpened: PropTypes.bool,
    searchIsHovered: PropTypes.bool,
    searching: PropTypes.bool,
    bellIsHovered: PropTypes.bool,
    belling: PropTypes.bool,
};

export default TopBar;
