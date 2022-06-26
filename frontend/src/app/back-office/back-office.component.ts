import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStepComponent } from '../add-component/add-component.component';
import { ApiService } from '../api.service';
import { StepFormComponent } from '../step-form/step-form.component';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.scss']
})
export class BackOfficeComponent implements OnInit {


  constructor(
    public dialog: MatDialog,
    private apiService: ApiService) { }
    steps: any;
    bddSteps: any;

  openDialog() {
    const dialogRef = this.dialog.open(StepFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.steps.push(result);
      }
    });
  }

  ngOnInit(): void {
        this.apiService.getStep().subscribe(res => {
            this.steps = res
            this.bddSteps = res;
        })
  }

  cancel(): void {
        this.apiService.getStep().subscribe(res => {
            this.steps = res
        })
  }

  saveChanges(): void {
        this.steps.forEach((step: any) => {
            if (!step.id) {
                this.apiService.createStep(step)
            }
            else {
                this.apiService.editStep(step);
            }
        });
        let stepsId = this.steps.map((step: { id: any; }) => step.id);
        this.apiService.deleteStep(stepsId)
  }

  deleteStep(stepToDelete: any){
      this.steps.splice(this.steps.findIndex((step: any) => step === stepToDelete), 1)
  }

  updateStep(data: any) {
      console.log(this.steps);
      let stepIndex = this.steps.findIndex((step: any) => step.id = data.id);
      this.steps[stepIndex] = data.step;
      console.log(this.steps);
  }

}
