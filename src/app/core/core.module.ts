import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { HeaderComponent } from './components/header/header.component'
import { MenuComponent } from './components/menu/menu.component'
import { TopbarComponent } from './components/topbar/topbar.component'



@NgModule({
  declarations: [HeaderComponent, MenuComponent, TopbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent, MenuComponent, TopbarComponent
  ]
})
export class CoreModule { }
