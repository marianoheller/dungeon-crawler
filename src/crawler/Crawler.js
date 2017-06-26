import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame } from './CrawlerActions';

import Header from '../header/Header';
import StatusBar from '../statusBar/StatusBar';
import GameDisplay from '../gameDisplay/GameDisplay';


class Crawler extends Component {

    componentDidMount() {
        this.props.startGame();
    }

    render() {
        
        return (
        <div className="Crawler">
            <Header />
            <StatusBar />
            <GameDisplay />
        </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        game: state.game,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => dispatch(startGame()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Crawler);
