import {Game} from "../src/Game/Game";

const inputMatrix = [
    [1,0,0,1,1],
    [1,0,1,1,1],
    [0,0,0,1,0],
    [1,0,0,1,1],
    [0,1,1,1,1]
];

let game = new Game(inputMatrix, 14);

game.start();