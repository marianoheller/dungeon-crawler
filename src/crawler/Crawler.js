import React, { Component } from 'react';
import keydown from 'react-keydown';
import { connect } from 'react-redux';
import debounce from 'debounce';
import { startGame, keyPress } from './CrawlerActions';

import { validKeys } from '../App.config';

import Header from '../header/Header';
import StatusBar from '../statusBar/StatusBar';
import GameDisplay from '../gameDisplay/GameDisplay';


@keydown
class Crawler extends Component {

    componentDidMount() {
        this.props.startGame();
        this.triggerKey = debounce(this.triggerKey, 10, true);
    }

    triggerKey( key ) {
        this.props.keyPress(key);
    }

    componentWillReceiveProps( { keydown } ) {
        if ( keydown.event ) {
            const actualKeydown = validKeys.find( (keyObj) => keyObj.key === keydown.event.key )
            if( actualKeydown ) {
                this.triggerKey(actualKeydown);
            }
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => dispatch(startGame()),
        keyPress: (key) => dispatch(keyPress(key))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Crawler);
