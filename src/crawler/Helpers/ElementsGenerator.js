import { elementsConfig } from '../../App.config';

export default function generateElements( dungeon ) {
    
    const plainDungeon = dungeon.reduce( (acc, e) => acc.concat(e) ).filter( (e) => e > 1);
    
    return dungeon;
}
