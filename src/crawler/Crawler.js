import React, { Component } from 'react';
import keydown from 'react-keydown';
import { connect } from 'react-redux';
import debounce from 'debounce';
import { startGame, keyPress } from './CrawlerActions';

import Engine from './Helpers/Engine';
import { validKeys, dungeonConfig } from '../App.config';

import Header from '../header/Header';
import StatusBar from '../statusBar/StatusBar';
import GameDisplay from '../gameDisplay/GameDisplay';


@keydown
class Crawler extends Component {

    componentDidMount() {
        const dungeon = Engine.generateDungeon( dungeonConfig );
        const playerStats = Engine.generatePlayerStats();
        this.props.startGame(dungeon, playerStats);
        this.triggerKey = debounce(this.triggerKey, 10, true);
    }

    triggerKey( key ) {
        const afterKeyDungeon = Engine.processKeyPress( dungeon, key )
        this.props.keyPress(afterKeyDungeon);
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
        startGame: (dungeon, playerStats) => dispatch(startGame(dungeon, playerStats)),
        keyPress: (afterKeyDungeon) => dispatch(keyPress(afterKeyDungeon))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Crawler);
