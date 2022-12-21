import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  private recivedData = new Subject<any[]>();
  data$ = this.recivedData.asObservable()

  constructor(private http: HttpClient) { }

  getWorkers() {
    return this.http.get<any[]>("./assets/data.json");
  }

  updateWorkerData(message: any) {
    this.recivedData.next(message)
  }
}
