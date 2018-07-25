import {Cell} from "../Cell/Cell";
import {State} from "../Cell/State";
import * as _ from "lodash";
import * as combinatorics from "js-combinatorics";


export class Grid {

    static relativeNeighbourMoves : Array<number>[] = Grid.getRelativeMoves();
    private height;
    private width;

    constructor (public cells: Cell[][]) {

        this.height = this.cells.length - 1;
        this.width = this.cells[0].length - 1;
    }

    public getNeighbouringStates(position: number[]) : State[] {

        // TODO: get neighbourPositions & filter invalid instead of below
        return _.reduce(Grid.relativeNeighbourMoves, (neighbouringStates, move) => {

            const neighbourPosition = this.applyMove(position, move);

            if (this.cellExists(neighbourPosition)) {

                const neighbouringCell = this.getCell(neighbourPosition);

                neighbouringStates.push(this.getCell(neighbourPosition).state);
            }

            return neighbouringStates;

        }, []);

    }

    static getRelativeMoves() {

        return _.filter(combinatorics.baseN([-1, 0, 1], 2).toArray(), (move) => {

            return !_.isEqual(move, [0, 0]);
        });
    }

    private getCell(position: number[]) : Cell {

        return this.cells[position[0]][position[1]];
    }

    private cellExists(position: number[]) : boolean {

        return (position[0] >= 0 && position[0] <= this.height) &&
            (position[1] >= 0 && position[1] <= this.width);
    }

    private applyMove(position: number[], move: number[]) : number[] {

        return [
            position[0] + move[0],
            position[1] + move[1]
        ];
    };


}