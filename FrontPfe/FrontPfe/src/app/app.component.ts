import { TypePfe } from './module/TypePfe';
import { PfeService } from './service/pfe.service';
import { TypePfeService } from './service/type-pfe.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FrontPfe';
  types: TypePfe[];
  count: number;
  search: string;

 
  constructor(private servtype: TypePfeService,
    private sevpfe: PfeService,
    private route:Router) { }

  ngOnInit(): void {
    this.alltypes();
    this.pfecount();
  }
 
  alltypes(){
    this.servtype.getAllTypes().subscribe(
         data => {
        this.types = data;
         },
         (err) => { console.log(err) }
    );
  }

  pfecount() {
    this.sevpfe.getcount().subscribe(
      res => {
        this.count = res;
      },
       (err) => { console.log(err) }
    )
  }

  Search() {
    this.route.navigate(['search/' + this.search]);
  }
}
