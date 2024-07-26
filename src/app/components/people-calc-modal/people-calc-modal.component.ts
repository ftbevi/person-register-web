import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-people-calc-modal',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './people-calc-modal.component.html',
  styleUrl: './people-calc-modal.component.scss'
})
export class PeopleCalcModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(this.data)
  }
}
