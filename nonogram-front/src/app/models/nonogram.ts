export class Nonogram {
    private _conditions: string[][];
    private _board: number[][];

    constructor(conditions: string[][]) {
        this._conditions = conditions;
        this._board = this.initBoard();
    }
    public get conditions() {
        return this._conditions;
    }
    public set conditions(value: string[][]) {
        this._conditions = value;
    }
    public get board() {
        return this._board;
    }
    public set board(value: number[][]) {
        this._board = value;
    }

    private initBoard(): number[][] {
        let temp: number[][] = new Array(this._conditions[0].length);

        for(let i = 0; i < temp.length; i++) {
            temp[i] = new Array(temp.length);
            for(let j = 0; j < temp[i].length; j++) {
                temp[i][j] = 0;
            }
        }

        return temp;
    }
}
