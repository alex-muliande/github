import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {

@Output () emitSearch = new EventEmitter<any>()

  searchTerm:string;
    constructor() { }
    
search(){
  this.emitSearch.emit(this.searchTerm)
  // console.log(this.searchTerm)
}



  ngOnInit() {
  }

}
