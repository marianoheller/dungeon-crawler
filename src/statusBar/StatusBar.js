import React, { Component } from 'react'
import { connect } from 'react-redux';



class StatusBar extends Component {

    render() {
        return (
            <div>
                {this.props.player.health}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        player: state.player,
    };
};

export default connect(mapStateToProps)(StatusBar);
