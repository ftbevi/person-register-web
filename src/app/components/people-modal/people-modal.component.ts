import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Person } from '../../models/person';
import {
  MatDatepicker,
  MatDatepickerInputEvent,
  MatDatepickerModule,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import {
  MatNativeDateModule,
  MatOption,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-modal',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatError,
    MatInputModule,
    MatOption,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './people-modal.component.html',
  styleUrl: './people-modal.component.scss',
})
export class PeopleModalComponent {
  public personForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private peopleService: PeopleService,
    public dialogRef: MatDialogRef<PeopleModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.personForm = this.fb.group({
      name: [this.data?.name || '', Validators.required],
      birthdate: [this.data?.birthdate || ''],
      cpf: [
        this.data?.cpf || '',
        [
          Validators.required,
          Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
        ],
      ],
      gender: [this.data?.gender || '', Validators.required],
      height: [this.data?.height || '', [Validators.required, Validators.min(0)]],
      weight: [this.data?.weight || '', [Validators.required, Validators.min(0)]],
    });
    console.log(this.data)
  }

  public onSubmit() {
    const personData = this.personForm.value;
    const person = new Person(
      personData.name,
      personData.birthdate,
      personData.cpf,
      personData.gender,
      personData.height,
      personData.weight
    );

    if (this.data) {
      this.updatePerson(this.data.id, person);
    } else {
      this.createPerson(person);
    }
  }

  createPerson(person: any) {
    this.peopleService.create(person).subscribe((data) => {
      this.dialogRef.close();
    });
  }

  updatePerson(id: string, person: any) {
    this.peopleService.update(id, person).subscribe((data) => {
      this.dialogRef.close();
    });
  }

  onBirthDateChange(event: any) {
    this.personForm.get('birthdate')?.setValue(event.value);
  }
}
