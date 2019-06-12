import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-cmp-cv',
  templateUrl: './cmp-cv.component.html',
  styleUrls: ['./cmp-cv.component.css']
})
export class CmpCvComponent implements OnInit {

  @Input() nombreRecibido:string ='';
  @Input() apellidoRecibido:string ='';
  @Input() correoRecibido:string ='';
  @Input() skillRecibido:string[];
  constructor() { }

  ngOnInit() {
  }

}
