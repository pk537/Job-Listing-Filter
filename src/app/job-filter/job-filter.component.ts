import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import list from "../../assets/data.json";
import{ ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.css']
})
export class JobFilterComponent implements OnInit {

  Clist= list;
  filters = [];
  

  constructor() { }

  ngOnInit(): void {
  }

  addFilter(fvalue, fkey){
    
    if(_.indexOf(this.filters, fvalue) == -1)
      this.filters.push(fvalue);
  }

  delfilter(i){
    this.filters.splice(i,1);
  }

  clearFilter(){
    this.filters = [];
  }
}
