import {Generation} from "../Generation/Generation";
import * as _ from "lodash";
import {State} from "../Cell/State";
import {Grid} from "../Grid/Grid";
import {Cell} from "../Cell/Cell";

export class Game {
//
//     // check input Matrix & initialise?
//     // set number of generations
//     // start
//
    public history : Generation[] = [];
    private firstGeneration : Generation;

    constructor(inputMatrix: number[][], private numberOfGenerations: number) {

        // validate input

        this.firstGeneration = this.initialiseFirstGeneration(inputMatrix);

        this.history.push(this.firstGeneration);
    }

    public start() {

        let year = 0;

        while (year < this.numberOfGenerations) {

            const nextGeneration = this.history[year].getNext();

            this.history.push(new Generation(new Grid(nextGeneration)));

            year++;
        }

        _.each(this.history, (gen) => {

            gen.print();
        });

    }

    private initialiseFirstGeneration(inputMatrix) : Generation {

        const grid = this.getGridFromInput(inputMatrix);

        return new Generation(grid);
    }

    private getGridFromInput(inputMatrix) {

        return new Grid(_.map(inputMatrix, (row: number[]) => {

            return _.map(row, (inputValue: number) => {

                return new Cell(this.getStateFromInput(inputValue));

            });

        }));
    }

    private getStateFromInput(input: number) : State {

        return input === 1 ? State.Alive : State.Dead;
    }

}