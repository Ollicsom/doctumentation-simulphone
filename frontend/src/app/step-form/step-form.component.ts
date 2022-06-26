import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.scss']
})
export class StepFormComponent implements OnInit {

  @Input() step: any;
  @Output() stepChanged = new EventEmitter<any>();
  @ViewChild('#url') inputURL: ElementRef | undefined;
  ngAfterViewInit() {
    console.log(this.inputURL);
  }
  
  stepForm = new FormGroup({
    id: new FormControl(''),
    ordre: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
  });

  constructor() {
  }

  ngOnInit(): void {
    if (this.step) {
      console.log(this.step)
      this.stepForm.setValue(this.step)
    }
  }

  onInputChange() {
    if (this.step && this.step.id) {
      this.stepChanged.emit({id: this.step.id, step: this.stepForm.value});
    }
  }

  onImageChange(event: any) {
    console.log(event.target.files);
    if (this.step && this.step.id) {
      this.stepChanged.emit({id: this.step.id, step: { 
        ordre: this.stepForm.value.ordre,
        title: this.stepForm.value.title,
        description: this.stepForm.value.description,
        url: this.stepForm.value}});
    }
  }

}
