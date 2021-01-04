import { PfeService } from './../service/pfe.service';
import { Pfe } from './../module/Pfe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  id: number;
  pfes: Pfe[];
  constructor(private servpfe: PfeService,
               private activRoute:ActivatedRoute   ) { }

  ngOnInit(): void {
     this.activRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'));
      if (isNaN(this.id)) {
        this.fetchall();
      } else {
        this.fetchByType(this.id);
      }
    });
  }

  fetchByType(id: number) {
    this.servpfe.getByType(id).subscribe(
      res => { this.pfes = res; },
      
    );
  }

  fetchall() {
    this.servpfe.getAllPfes().subscribe(
     
      res => { this.pfes = res; },
    );
  }

  delete(p: Pfe) {
    const index = this.pfes.indexOf(p);
    this.servpfe.delete(p.id).subscribe(
      res => { 
        this.pfes.splice(index, 1);
        window.location.reload();
      },
    ); 
  }


}
