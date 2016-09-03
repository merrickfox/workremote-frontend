import { Component, OnInit } from '@angular/core';
import {Auth} from "../../services/auth/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.scss'],
  providers: [Auth]
})
export class NavBarComponent implements OnInit {

  constructor(private auth: Auth) { }

  ngOnInit() {
  }

}
