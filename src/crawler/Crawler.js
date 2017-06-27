import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, keyPress } from './CrawlerActions';

import Header from '../header/Header';
import StatusBar from '../statusBar/StatusBar';
import GameDisplay from '../gameDisplay/GameDisplay';


@keydown
class Crawler extends Component {

    componentDidMount() {
        this.props.startGame();
    }

    componentWillReceiveProps( { keydown } ) {
        if ( keydown.event ) {
            // inspect the keydown event and decide what to do 
            console.log( keydown.event.which );
        }
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
        keyPress: (key) => dispatch(keyPress(key))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Crawler);
