import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

type ProfileType = {
  givenName?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profile!:ProfileType;

  constructor(private http: HttpClient){}

  ngOnInit()
  {
    this.getProfile();    
  }

  getProfile()
  {
    this.http.get(GRAPH_ENDPOINT).subscribe(profile => this.profile = profile);    
  }

}
