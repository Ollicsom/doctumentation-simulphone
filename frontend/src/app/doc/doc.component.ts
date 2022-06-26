import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss']
})
export class DocComponent implements OnInit {
  
  steps: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
      this.apiService.getStep()
        .subscribe(res => {
          this.steps = res;
        })
  }

}
