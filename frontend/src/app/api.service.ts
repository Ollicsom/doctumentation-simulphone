import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  apiEndpoint = 'http://localhost:8080';

  getStep() {
    return this.http.get<any>(this.apiEndpoint + '/getSteps');
  }

  createStep(step: any) {
    console.log(step);
    let stepData:FormData = new FormData();
    stepData.append('step', step)
    return this.http.post<any>(this.apiEndpoint + '/createStep', stepData).subscribe();
  }

  deleteStep(stepsId: Array<number>) {
    return this.http.request<any>('delete', this.apiEndpoint + '/deleteSteps', {body: stepsId}).subscribe();
  }

  editStep(step: any) {
    console.log(step);
    return this.http.put<any>(this.apiEndpoint + '/editStep', step).subscribe();
  }
}
