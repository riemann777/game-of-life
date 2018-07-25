import {expect} from "chai";
import {Cell} from "./Cell";
import {State} from "./State";


describe("Cell", () => {

    let cell, currentNeighbourStates;

    describe("when asked for next state of a live cell", () => {

        describe("when it has fewer than two live neighbours", () => {

            it("should return dead as next state", () => {

                cell = new Cell(State.Alive);
                currentNeighbourStates = [
                    State.Dead, State.Dead, State.Dead,
                    State.Dead,             State.Dead,
                    State.Dead, State.Dead, State.Alive
                ];

                expect(cell.getNextState(currentNeighbourStates)).to.equal(State.Dead);

            });

        });

        describe("when it has two live neighbours", () => {

            it("should return alive as next state", () => {

                cell = new Cell(State.Alive);
                currentNeighbourStates = [
                    State.Dead, State.Dead, State.Dead,
                    State.Dead,             State.Dead,
                    State.Dead, State.Alive, State.Alive
                ];

                expect(cell.getNextState(currentNeighbourStates)).to.equal(State.Alive);

            });

        });

        describe("when it has three live neighbours", () => {

            it("should return alive as next state", () => {

                cell = new Cell(State.Alive);
                currentNeighbourStates = [
                    State.Dead, State.Dead, State.Dead,
                    State.Alive,             State.Dead,
                    State.Dead, State.Alive, State.Alive
                ];

                expect(cell.getNextState(currentNeighbourStates)).to.equal(State.Alive);

            });

        });

        describe("when it has more than three live neighbours", () => {

            it("should return dead as next state", () => {

                cell = new Cell(State.Alive);
                currentNeighbourStates = [
                    State.Alive, State.Alive, State.Alive,
                    State.Dead,             State.Dead,
                    State.Dead, State.Dead, State.Alive
                ];

                expect(cell.getNextState(currentNeighbourStates)).to.equal(State.Dead);

            });

        });

    });

    describe("when asked for next state of a dead cell", () => {

        describe("when it has three live neighbours", () => {

            it("should return alive as next state", () => {

                cell = new Cell(State.Dead);
                currentNeighbourStates = [
                    State.Alive, State.Dead, State.Dead,
                    State.Dead,             State.Dead,
                    State.Dead, State.Alive, State.Alive
                ];

                expect(cell.getNextState(currentNeighbourStates)).to.equal(State.Alive);

            });

        });

        describe("when it does not have three live neighbours", () => {

            it("should return dead as next state", () => {

                cell = new Cell(State.Dead);
                currentNeighbourStates = [
                    State.Alive, State.Dead, State.Dead,
                    State.Alive,             State.Dead,
                    State.Dead, State.Alive, State.Alive
                ];

                expect(cell.getNextState(currentNeighbourStates)).to.equal(State.Dead);

            });

        });

    });

});