import { Component, OnInit } from '@angular/core';
import { Nonogram } from '../models/nonogram';

@Component({
  selector: 'app-nonogram-table',
  templateUrl: './nonogram-table.component.html',
  styleUrls: ['./nonogram-table.component.sass']
})
export class NonogramTableComponent implements OnInit {
  nonogram: Nonogram;

  constructor() {
    let conditions = [["3", "3", "2", "2\n1", "2"],
                      ["2", "2 2", "2", "4", "1"]];

    this.nonogram = new Nonogram(conditions);
  }

  ngOnInit(): void {
  }

  changeColor(row: number, col: number) {
    const cell = document.getElementById(`cell${row}-${col}`);
    console.log(cell);

    cell?.classList.contains('inactive-cell') ? cell?.classList.replace('inactive-cell', 'active-cell') : 
                                                cell?.classList.replace('active-cell', 'inactive-cell');
  }
}
