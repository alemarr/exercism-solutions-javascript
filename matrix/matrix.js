export class Matrix {
    constructor(input) {
        this.input = input;
        this.rows = this.getRows();
        this.columns = this.getColumns();
    }

    getRows() {
        let rows = [];
        this.input.split('\n').map((row, index) => {
            let newRow = row.split(' ').map(value => {
                return parseInt(value);
            });
            rows[index] = newRow;
        });

        return rows;
    }

    getColumns() {
        let columns = [];

        const w = this.rows.length;
        const h = this.rows[0].length;
        
        for (let i = 0; i < h; i++) {
            let newRow = [];
            for (let j = 0; j < w; j++) {
                newRow.push(this.rows[j][i]);
            }

            columns.push(newRow);
        }

        return columns;
    }
}