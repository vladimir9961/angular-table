import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../workers.service';
import { map } from 'rxjs';
interface Worker {
  name: string,
  phone: number,
  ssn: number,
  dob: number,
  hired: number,
  cdl: number,
  cdl_exp: number,
  medical_exp: number,
  mvr_exp: number
}
@Component({
  selector: 'app-thead',
  templateUrl: './thead.component.html',
  styleUrls: ['./thead.component.scss']
})

export class TheadComponent implements OnInit {
  worker: Worker[] = []

  constructor(private workers: WorkersService) { }
  ngOnInit(): void {
    this.workers.getWorkers().subscribe(res => {
      this.workers.updateWorkerData(res)
    })
  }

  filter(event: any) {
    this.workers.getWorkers()
      .pipe(
        map((res) => {
          res.forEach((x) => {
            if (x.name.toLowerCase().includes(event.target.value)) {
              this.worker.push(x)
              this.workers.updateWorkerData(this.worker)
            }
          });
        })
      ).subscribe((res) => {
        this.worker = []
      })

  }
}