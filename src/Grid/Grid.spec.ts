import {expect} from "chai";
import {Grid} from "./Grid";
import {Cell} from "../Cell/Cell";
import {State} from "../Cell/State";
import * as _ from "lodash";


describe("Grid", () => {

    let grid = new Grid([
        [new Cell(State.Dead), new Cell(State.Dead), new Cell(State.Alive)],
        [new Cell(State.Alive), new Cell(State.Alive), new Cell(State.Dead)],
        [new Cell(State.Alive), new Cell(State.Alive), new Cell(State.Alive)]
    ]);

    describe("when asked to get neighbour states given a position", () => {

        describe("when position is not at the edge of the board", () => {

            it("should return correct neighbours", () => {

                const neighbouringStates = grid.getNeighbouringStates([1, 1]),
                    liveStates = _.filter(neighbouringStates, state => state === State.Alive),
                    deadStates = _.filter(neighbouringStates, state => state === State.Dead);

                expect(neighbouringStates.length).to.equal(8);
                expect(liveStates.length).to.equal(5);
                expect(deadStates.length).to.equal(3);

            });

        });

        describe("when position is an edge position", () => {

            it("should return correct neighbours", () => {

                const neighbouringStates = grid.getNeighbouringStates([0, 1]),
                    liveStates = _.filter(neighbouringStates, state => state === State.Alive),
                    deadStates = _.filter(neighbouringStates, state => state === State.Dead);

                expect(neighbouringStates.length).to.equal(5);
                expect(liveStates.length).to.equal(3);
                expect(deadStates.length).to.equal(2);

            });

        });

        describe("when position is a corner position", () => {

            it("should return correct neighbours", () => {

                const neighbouringStates = grid.getNeighbouringStates([2, 2]),
                    liveStates = _.filter(neighbouringStates, state => state === State.Alive),
                    deadStates = _.filter(neighbouringStates, state => state === State.Dead);

                expect(neighbouringStates.length).to.equal(3);
                expect(liveStates.length).to.equal(2);
                expect(deadStates.length).to.equal(1);

            });

        });

    });

});