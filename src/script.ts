import {Direction} from "./direction.js";
import {Position} from "./position.js";
import {PathSymbols} from "./path-symbols.js";

interface Result {
    path: string;
    letters: string;
}

export class PathFinder {
    currentPosition: Position = {rowIndex: 0, colIndex: 0};
    currentDirection: Direction = Direction.Right;

    letters: string[] = [];
    path: string[] = [];

    constructor(private grid: string[][]) {
    }

    public find(): Result {
        this.path.push(this.grid[0][0]);
        let currentSymbol: string;

        while (true) {
            this.move();
            currentSymbol = this.grid[this.currentPosition.rowIndex][this.currentPosition.colIndex];
            this.path.push(currentSymbol);

            if (this.isUppercaseLetter(currentSymbol)) {
                this.letters.push(currentSymbol);
                this.currentDirection = this.getNewDirection(this.currentDirection);
            } else if (currentSymbol === PathSymbols.Intersection) {
                this.currentDirection = this.getNewDirection(this.currentDirection);
            } else if (currentSymbol === PathSymbols.Stop) {
                break;
            }
        }
        return {
            path: this.path.join(''),
            letters: this.letters.join('')
        };
    }

    private move(): void {
        switch (this.currentDirection) {
            case Direction.Right:
                this.currentPosition.colIndex++;
                break;
            case Direction.Left:
                this.currentPosition.colIndex--;
                break;
            case Direction.Down:
                this.currentPosition.rowIndex++;
                break;
            case Direction.Up:
                this.currentPosition.rowIndex--;
                break;
        }
    }

    private getNewDirection(direction: Direction): Direction {
        let newDirection = direction;
        let rowIndex = this.currentPosition.rowIndex;
        let colIndex = this.currentPosition.colIndex;
        if (direction === Direction.Right || direction === Direction.Left) {
            if (this.grid[rowIndex - 1]?.[colIndex]) {
                newDirection = Direction.Up;
            } else if (this.grid[rowIndex + 1]?.[colIndex]) {
                newDirection = Direction.Down;
            }
        } else {
            if (this.grid[rowIndex]?.[colIndex + 1]) {
                newDirection = Direction.Right;
            } else if (this.grid[rowIndex]?.[colIndex - 1]) {
                newDirection = Direction.Left;
            }
        }
        return newDirection;
    }

    private isUppercaseLetter(character: string): boolean {
        return /^[A-Z]/.test(character);
    }
}