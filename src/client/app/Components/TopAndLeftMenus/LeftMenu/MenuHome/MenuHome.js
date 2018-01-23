import React, { Component } from 'react';

class MenuHome extends Component {
    render(){
        return (
            <div className="MenuLeft">
                <div className="MenuButton">Home</div>
                <div className="MenuButton">Changer Profil</div>
                <div className="MenuButton">Déconnection</div>
                <div className="MenuButton">Paramètres Perso</div>
                <div className="MenuButton">Créer une Éval</div>
            </div>
        )
    }
}
export default MenuHome;