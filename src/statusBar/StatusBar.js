import React, { Component } from 'react'
import { connect } from 'react-redux';

import './StatusBar.css';


class StatusBar extends Component {

    render() {
        return (
            <div className="status-bar">
                <div className="status-item status-health">
                    Health: {this.props.stats.health}
                </div>
                <div className="status-item status-weapon">
                    Weapon: {this.props.stats.weapon}
                </div>
                <div className="status-item status-level">
                    Level: {this.props.stats.level}
                </div>
                <div className="status-item status-attack">
                    Attack: {this.props.stats.attack}
                </div>
                <div className="status-item status-exp">
                    Exp: {this.props.stats.exp}
                </div>
                <div className="status-item status-exp-tnl">
                    TNL: {this.props.stats.expPerLvl - this.props.stats.exp}
                </div>

                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        stats: state.game.player.stats,
    };
};

export default connect(mapStateToProps)(StatusBar);
