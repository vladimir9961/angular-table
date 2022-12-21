import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../workers.service';

@Component({
  selector: 'app-tbody',
  templateUrl: './tbody.component.html',
  styleUrls: ['./tbody.component.scss']
})
export class TbodyComponent implements OnInit {
  peoples: any = [];
  show: number | undefined;
  constructor(private workers: WorkersService) { }

  async ngOnInit() {
    this.workers.data$.subscribe(res => {
      this.peoples = []
      this.peoples = res
    })
  }

  showDropdown(index: number) {
    if (this.show == index) {
      this.show = -1;
    }
    else {
      this.show = index;
    }
  }
}
