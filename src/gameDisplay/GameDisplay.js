import React, { Component } from 'react'
import { connect } from 'react-redux';

import { elementsConfig } from '../App.config';
import './GameDisplay.css';


class GameDisplay extends Component {

    aplanarDungeon( ) {
        const { dungeon } = this.props.game;
        if ( !dungeon ) {   return undefined;    }
        const { x, y } = dungeon.playerPosition;
        const { x: sX, y: sY} = dungeon.stairsPosition;

        return dungeon.raw.map( (row, rowIndex) => row.map( (tile, tileIndex) => {
            if ( dungeon.fogged[rowIndex][tileIndex] ) {   return dungeon.fogged[rowIndex][tileIndex];   }
            if ( tile === "1" ) {  return tile;  }
            if ( rowIndex===y && tileIndex===x ) {  return elementsConfig.player.symbol;  }
            if ( rowIndex===sY && tileIndex===sX ) {  return elementsConfig.stairs.symbol;  }
            if ( dungeon.items[rowIndex][tileIndex] ) {   return dungeon.items[rowIndex][tileIndex];   }
            if ( dungeon.enemies[rowIndex][tileIndex] ) {   return dungeon.enemies[rowIndex][tileIndex];   }
            return "0";
        } ));
    }

    getTileClass( t, x, y) {
        let ret = " tile-container ";
        const elementKey = Object.keys(elementsConfig).find ( (key) => elementsConfig[key].symbol === t );
        if ( !elementKey ) {   return ret;   }
        return ret + elementsConfig[elementKey].class;
    }

    render() {
        
        const plainDungeon = this.aplanarDungeon();
        if ( !plainDungeon ) {   return <div>Loading...</div>    }

    
        const renderedDungeon = (
            <div className="dungeon-container">
                { plainDungeon.map( (row, rowIndex) => {
                    return (
                        <div className="row-container" key={`row-${rowIndex}`}>
                        { 
                            row.map( (tile, tileIndex) => (
                                <div 
                                className={this.getTileClass(tile)} 
                                key={`tile-${rowIndex}-${tileIndex}`}
                                ></div>
                            ) ) 
                        }
                        </div>
                    )
                }) }
            </div>
        );
        return (
            <div>
                {renderedDungeon}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        game: state.game,
    };
};

export default connect(mapStateToProps)(GameDisplay);
