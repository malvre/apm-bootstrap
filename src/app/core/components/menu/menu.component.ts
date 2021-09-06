import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu = [
    {
      title: 'Home', icon: 'bi bi-house-door-fill', url: 'home'
    },
    {
      title: 'Produtos', icon: 'bi bi-cart-fill', url: 'produtos'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
