import { Router } from '@angular/router';
import { TypePfeService } from './../service/type-pfe.service';
import { TypePfe } from './../module/TypePfe';
import { Pfe } from './../module/Pfe';
import { Component, OnInit } from '@angular/core';
import { PfeService } from '../service/pfe.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  pfe: Pfe = new Pfe();
  types: TypePfe[];
  constructor(private servpfe: PfeService,
              private servtype: TypePfeService,
              private route: Router                     ) { }

  ngOnInit(): void {
    this.allTypes();
  }
  add(p: Pfe) {
    return this.servpfe.add(this.pfe).subscribe(
      res => { this.route.navigate (['type']);}
    );
  }
  
   allTypes() {
    this.servtype.getAllTypes().subscribe(
      res => {
        this.types = res;
      },
      err => { console.log('types error!!'); }
    );
  }
}
