import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitNavbarComponent } from './git-navbar/git-navbar.component';
import { GithomeComponent } from './githome/githome.component';
import { GitFormComponent } from './git-form/git-form.component';
import { RepositoriesComponent } from './repositories/repositories.component';
// import { GithubComponent } from './github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    GitNavbarComponent,
    GithomeComponent,
    GitFormComponent,
    RepositoriesComponent,
    // GithubComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
