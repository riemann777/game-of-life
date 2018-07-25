import {Grid} from "../Grid/Grid";
import * as _ from "lodash";
import {Cell} from "../Cell/Cell";


export class Generation {

    private _generation: Grid;

    constructor(grid: Grid) {

        this._generation = grid;

    }

    public getCurrent() : Grid {

        return this._generation;
    }

    public getNext() : Cell[][] {

        return _.map(this._generation.cells, (row, rowIndex) => {

            return _.map(row, (cell, columnIndex) => {

                const neighbourStates = this._generation.getNeighbouringStates([rowIndex, columnIndex]);

                return new Cell(cell.getNextState(neighbourStates));

            });
        });

    }

    public print() {

        const printStr = _.reduce(this._generation.cells, (outStr, row) => {

            outStr += _.map(row, (cell) => {

                return cell.getStateStr();

            }).join(" ") + "\n";

            return outStr;

        }, "");

        console.log(printStr);

    }

}