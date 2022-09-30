import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataTableDirective } from 'angular-datatables';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-snomed-table-grid',
  templateUrl: './snomed-table-grid.component.html',
  styleUrls: ['./snomed-table-grid.component.scss']
})
export class SnomedTableGridComponent implements OnInit, OnChanges {
  @Input() gridData: [];
  @ViewChild(DataTableDirective, { static: false }) dtElement: DataTableDirective;

  dtOptions: any = {};


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  dataTablesOptions() {
    this.dtOptions = {
      processing: true,
      deferRender: true,
      pagingType: 'simple',
      buttons: 'Blftlpi',
      "oLanguage": {

        "sSearch": "Quick Table Filter:"

      },
      columns: this.configColumn(),
      rowCallback: (row: Node, data: any) => {
        $('td.name-modal', row).off('click').on('click', () => {
          this.openDialog(data);
        })
      }
    }
  }

  private configColumn(): DataTables.ColumnSettings[] {
    return [
      { data: null, className: 'name-modal', defaultContent: '-', render: (data, _, full): string => '<div>' + full.term + '</div>' },
      { data: null, defaultContent: '-', render: (data, _, full): string => full.module }
    ]
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.gridData && this.gridData) {
      this.dataTablesOptions();
      this.updateTable();
    }

  }

  private updateTable() {
    if (this.dtElement) {
      this.dtElement.dtInstance.then(value => {
        value.clear();
        value.rows.add(this.gridData).draw();
      })
    }
  }
  openDialog(data: any) {
    const dialogRef = this.dialog.open(ModalComponent, {
      height: '50%',
      width: '60%',
      data: data
    })
  }

}
