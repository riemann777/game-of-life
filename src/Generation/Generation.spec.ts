import {expect} from "chai";
import {Generation} from "./Generation";
import {Grid} from "../Grid/Grid";
import {State} from "../Cell/State";
import {Cell} from "../Cell/Cell";

const initialGrid = new Grid([
        [new Cell(State.Dead), new Cell(State.Dead), new Cell(State.Alive)],
        [new Cell(State.Alive), new Cell(State.Alive), new Cell(State.Dead)],
        [new Cell(State.Alive), new Cell(State.Alive), new Cell(State.Alive)]
    ]),
    generation = new Generation(initialGrid);

describe("Generation", () => {

    describe("when asked to get next generation", () => {

        it("should return correct next generation", () => {

            const nextGeneration = generation.getNext();

            expect(nextGeneration[0][0].state).to.equal(State.Dead);
            expect(nextGeneration[0][1].state).to.equal(State.Alive);
            expect(nextGeneration[0][2].state).to.equal(State.Dead);

            expect(nextGeneration[1][0].state).to.equal(State.Alive);
            expect(nextGeneration[1][1].state).to.equal(State.Dead);
            expect(nextGeneration[1][2].state).to.equal(State.Dead);

            expect(nextGeneration[2][0].state).to.equal(State.Alive);
            expect(nextGeneration[2][1].state).to.equal(State.Dead);
            expect(nextGeneration[2][2].state).to.equal(State.Alive);

        });

    });

});