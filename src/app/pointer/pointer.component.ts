import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-pointer',
  templateUrl: './pointer.component.html',
  styleUrls: ['./pointer.component.scss']
})
export class PointerComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  
  constructor() { }

  ngOnInit() {
    const move$ = fromEvent(document, 'mousemove');
    const log = x => console.log(x);
    move$.subscribe(log=>{
      this.drawCircle(log['x'],log['y']);
    });
  }

  drawCircle(x,y){
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.beginPath();
    this.ctx.arc(x, y, 5, 0, 2 * Math.PI);
    this.ctx.stroke();
    console.log("this.ctx",this.ctx)
  }

}
