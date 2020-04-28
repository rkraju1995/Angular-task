import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-pointer',
  templateUrl: './pointer.component.html',
  styleUrls: ['./pointer.component.scss']
})
export class PointerComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;

  move$ :  Observable<any>;
  
  constructor() { }


  ngOnInit() {
    this.move$ = fromEvent(document, 'mousemove');
    const log = x => console.log(x);
    this.move$.subscribe(log=>{
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
