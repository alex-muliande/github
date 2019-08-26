import { Component, OnInit } from '@angular/core';
import {GitserviceService} from '../gitservice.service'
import {Github} from '../github';

@Component({
  selector: 'app-githome',
  templateUrl: './githome.component.html',
  styleUrls: ['./githome.component.css']
})

export class GithomeComponent implements OnInit {
githubs:Github[];

  constructor(public Gitservice: GitserviceService) {
   }


  ngOnInit() {
    this.searchGit("alex-muliande");
  }

  searchGit(searchTerm){
    this.Gitservice.searchGithub(searchTerm).then(
      ()=>{
        this.githubs=this.Gitservice.githubs;
        console.log(this.githubs);

      },
      (error)=>{
        console.log(error)
      }
    )
    // console.log(searchTerm)
  }
}
