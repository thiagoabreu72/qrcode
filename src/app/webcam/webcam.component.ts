import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.scss']
})
export class WebcamComponent implements OnInit {
  
  @ViewChild('preview') preview1;
  constructor() {

    
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.teste();
  }


  teste() {
        console.log(this.preview1)
  }

}
