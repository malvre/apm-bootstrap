import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu = [
    {
      title: 'Home', icon: 'bi bi-house-door-fill', url: 'exemplos/home'
    },
    {
      title: 'Data Table', icon: 'bi bi-table', url: 'exemplos/datatable'
    },
    {
      title: 'Dialogs', icon: 'bi bi-chat-left-fill', url: 'exemplos/dialogs'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
