import React, { Component } from 'react';
import TopBar from './Components/TopBar/TopBar';
import TopMenu from './Components/TopAndLeftMenus/TopMenu/TopMenu';
import LeftMenu from './Components/TopAndLeftMenus/LeftMenu/LeftMenu';
import './Home.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            neverOpenedWebsite: true,
            topMenuOpened: false,
            leftMenuSwitching: false,
            searching: false,
            belling: false,
            searchIsHovered: false,
            bellIsHovered: false,
            barIsHovered: false,
            hasBeenReset: false,
            isTheretimerSearch:false,
            leftMenuValueStorageVariable: 0,
            leftMenuHover: 0,
            leftMenuContent: 0,
        };
        this.toggleTopMenu = this.toggleTopMenu.bind(this);
        this.toggleSwitching = this.toggleSwitching.bind(this);
        this.toggleLevel = this.toggleLevel.bind(this);
        this.setLeftMenuHover = this.setLeftMenuHover.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
        this.toggleBarIsHovered = this.toggleBarIsHovered.bind(this);
        this.toggleSearchIsHovered = this.toggleSearchIsHovered.bind(this);
        this.toggleBellIsHovered = this.toggleBellIsHovered.bind(this);
        this.toggleBell = this.toggleBell.bind(this);
        this.timerSearch = this.timerSearch.bind(this);
        this.timerBell = this.timerBell.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        if((prevProps.barIsHovered !== prevState.barIsHovered
            && !this.state.barIsHovered)
            && !(!this.state.searching && !this.state.belling)
        ){
            if(this.state.searching){
                this.timerSearch();
            } else if(this.state.belling) {
                this.timerBell();
            }
        }
    }


    timerSearch() {
        setTimeout(() => {
            this.setState({
                searching: false,
                belling: false,
                searchIsHovered: true
            });
        }, 4500);
        setTimeout(() => {
            this.setState({searchIsHovered: false});
        }, 5000);
    }

    timerBell() {
        setTimeout(() => {
            this.setState({
                searching: false,
                belling: false,
                bellIsHovered: true
            });
        }, 4500);
        setTimeout(() => {
            this.setState({bellIsHovered: false});
        }, 5000);
    }

    toggleTopMenu(){
        if ( this.state.neverOpenedWebsite ) {
            this.setState({
                topMenuOpened: true,
                leftMenuHover: 1,
                leftMenuContent: 1,
                neverOpenedWebsite: false
            });
        } else {
            if (this.state.topMenuOpened) {
                this.setState({
                    leftMenuValueStorageVariable: this.state.leftMenuHover,
                    topMenuOpened: !this.state.topMenuOpened,
                    leftMenuHover: 0,
                    leftMenuSwitching: false
                });
            } else {
                this.setState({
                    leftMenuHover: this.state.leftMenuValueStorageVariable,
                    topMenuOpened: !this.state.topMenuOpened
                });
            }
        }
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

    toggleBarIsHovered(){
        this.setState({barIsHovered: !this.state.barIsHovered});
    }

    toggleSearchIsHovered(){
        this.setState({searchIsHovered: !this.state.searchIsHovered});
    }

    toggleBellIsHovered(){
        this.setState({bellIsHovered: !this.state.bellIsHovered});
    }

    toggleSwitching(){
        this.setState({leftMenuSwitching: !this.state.leftMenuSwitching});
    }

    toggleLevel(level){
        this.setState({leftMenuHover: level, leftMenuContent : level});
    }

    toggleSearch(){
        if(this.state.belling){
            this.setState({belling: false});
            setTimeout(() => {
                this.toggleSearch();
            }, 500);
        } else {
            this.setState({searching: !this.state.searching,
                });

        }
    }

    toggleBell(){
        if(this.state.searching){
            this.setState({searching: false});
            setTimeout(() => {
                this.toggleBell();
            }, 500);
        } else {
            this.setState({belling: !this.state.belling,
                });

        }
    }

    render() {
        return (
            <div className="Home">
                <TopMenu
                    topMenuOpened={this.state.topMenuOpened}
                    leftMenuHover={this.state.leftMenuHover}
                    setLeftMenuHover={this.setLeftMenuHover}
                />
                <LeftMenu
                    leftMenuHover={this.state.leftMenuHover}
                    leftMenuContent={this.state.leftMenuContent}
                    leftMenuSwitching={this.state.leftMenuSwitching}
                />
                <TopBar
                    topMenuOpened={this.state.topMenuOpened}
                    toggleTopMenu={this.toggleTopMenu}
                    searching={this.state.searching}
                    toggleSearch={this.toggleSearch}
                    searchIsHovered={this.state.searchIsHovered}
                    toggleSearchIsHovered={this.toggleSearchIsHovered}
                    belling={this.state.belling}
                    toggleBell={this.toggleBell}
                    bellIsHovered={this.state.bellIsHovered}
                    toggleBellIsHovered={this.toggleBellIsHovered}
                    toggleBarIsHovered={this.toggleBarIsHovered}
                />
            </div>
        );
    }
}

export default Home;
