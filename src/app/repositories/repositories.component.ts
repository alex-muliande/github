import { Component, OnInit } from '@angular/core';
import {GitserviceService} from '../gitservice.service'
import {Github} from '../github';
import { Gitrepo } from '../gitrepo';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  gitrepos:Gitrepo;

    constructor(public Gitservice: GitserviceService) {
     }


    ngOnInit() {
      this.searchRepo("alex-muliande");
    }

    searchRepo(searchTerm){
      this.Gitservice.searchRepo(searchTerm).then(
        ()=>{
          this.gitrepos=this.Gitservice.gitrepos;
          // console.log(this.gitrepos);

        },
        (error)=>{
          console.log(error)
        }
      )
      // console.log(searchTerm)
    }
  }
