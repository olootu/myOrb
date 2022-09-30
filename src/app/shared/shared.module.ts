import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ToolBarComponent } from "./tool-bar/tool-bar.component";
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { DataTablesModule } from "angular-datatables";
import * as $ from 'jquery';
import { ModalComponent } from "./modal/modal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [ToolBarComponent, ModalComponent],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        DataTablesModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ToolBarComponent,
        DataTablesModule,
        MatDialogModule,
        ModalComponent,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
