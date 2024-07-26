import { PeopleService } from './services/people.service';
import { Component, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Person } from './models/person';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { PeopleModalComponent } from './components/people-modal/people-modal.component';
import { PersonCalcService } from './services/person-calc.service';
import { PeopleCalcModalComponent } from './components/people-calc-modal/people-calc-modal.component';

export interface PeriodicElement {
  name: string;
  birthdate: Date;
  cpf: string;
  gender: string;
  height: number;
  weight: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule
  ],
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'birthdate', 'cpf', 'gender', 'height', 'weight', 'actions'];
  dataSource = new MatTableDataSource<Person>();

  readonly dialog = inject(MatDialog);

  people: Person[] = [];

  constructor(private peopleService: PeopleService, private personCalcService: PersonCalcService) { }

  startDash() {
    this.people = [];
    this.peopleService.get().subscribe(data => {
      data.map((person: Person) => {
        this.people.push(person)
      });

      this.dataSource.data = this.people;
    });
  }

  ngOnInit() {
    this.startDash();
  }

  rowSelected(row: any){
    this.openDialog(row);
  }

  openDialog(data?: any) {
    if (data) {
      const dialogref = this.dialog.open(PeopleModalComponent, {
        data: data
      });
      dialogref.afterClosed().subscribe(() => {
        this.startDash();
      });
    } else {
      const dialogref = this.dialog.open(PeopleModalComponent);
      dialogref.afterClosed().subscribe(() => {
        this.startDash();
      });
    }
  }

  delete(id: string) {
    this.peopleService.delete(id).subscribe(data => {
      this.startDash();
    });
  }

  showPersonCalc(id: string) {
    this.personCalcService.calc(id).subscribe((data => {
      this.dialog.open(PeopleCalcModalComponent, {
        data: data
      });
    }));
  }
}
