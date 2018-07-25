import {State} from "./State";
import * as _ from "lodash";

export class Cell {

    public currentState : State;

    constructor(initialState) {

        this.currentState = initialState;
    }

    get state() {

        return this.currentState;
    }

    public getNextState(neighbourStates) : State {

        const liveNeighbours : number = this.getLiveNeighbourCount(neighbourStates);

        if (this.currentState === State.Dead && liveNeighbours === 3) {

            return State.Alive;
        }

        if (this.currentState === State.Alive && (liveNeighbours === 2 || liveNeighbours === 3)) {

            return State.Alive;
        }


        return State.Dead;
    }

    public getStateStr() {

        return this.currentState === State.Dead ? State[this.currentState] + " " : State[this.currentState];
    }

    private getLiveNeighbourCount(neighbourStates: State[]) : number {

        return _.filter(neighbourStates, (neighbourState) => {

            return neighbourState === State.Alive;

        }).length;
    }


}