import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-pointer',
  templateUrl: './pointer.component.html',
  styleUrls: ['./pointer.component.scss']
})
export class PointerComponent implements OnInit {

  constructor() { }
  yaxis = "100px"
  xaxis = "300px"

  ngOnInit() {
    fromEvent(document, "mousemove").subscribe((dt: MouseEvent) => {
      this.xaxis = dt.clientX + "px"
      this.yaxis = dt.clientY + "px"
    })
  }

}
