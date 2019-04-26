import { Component, OnInit } from '@angular/core';
export interface Menu{
  route: string;
  title: string;
}
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navMenu: Array<Menu> = [{
    route: '/home',
    title: 'Home'
  }, {
    route: '/messages',
    title: 'Messages'
  }];
  constructor() { }

  ngOnInit() {
  }

}
