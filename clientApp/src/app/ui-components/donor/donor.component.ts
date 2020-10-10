import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPatientViewModel } from 'src/app/view-model/ipatient.viewmodel';
import { PatientViewModel } from 'src/app/view-model/patient.viewmodel';
import { PatientService } from 'src/app/services/patient.service';
import { IPracticeViewModel } from 'src/app/view-model/ipractice.viewmodel';
import { PracticeService } from 'src/app/services/practice.service';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.less']
})
export class DonorComponent implements OnInit {

  donor: IPatientViewModel = <IPatientViewModel>{};
  practices: IPracticeViewModel[] = [];

  constructor(private _patientService: PatientService, private _practiceService: PracticeService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    let donorId = this._route?.snapshot?.params?.id;

    if (donorId) {
      this._patientService.getPatient(donorId).subscribe(data => {
        this.donor = data;
      });
    } else {
      this.donor = this._patientService.patient = new PatientViewModel();
    }

    this._practiceService.getPractices().subscribe(data => {
      this.practices = data;
    });
  }

  delete(): void {
    this._patientService.delete().subscribe(() => { });;
  }

  onSubmit(): void {
    this._patientService.savePatient().subscribe(() => { });;
  }

  selectPractice(practice): void {
    if (practice) {
      this.donor.practiceId = practice.id;
      this.donor.practiceName = practice.name;
    }
  }
}
