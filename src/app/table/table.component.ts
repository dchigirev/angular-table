import { Component, Input } from '@angular/core';

export interface Column {
  def: string;
  label: string;
}

export interface Row {
  [key: string]: string | number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() columns: Column[];
  @Input() dataSource: Row[];
  @Input() displayedColumns: string[];
}
