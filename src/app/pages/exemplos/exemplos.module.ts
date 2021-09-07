import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ExemplosRoutingModule } from './exemplos-routing.module'
import { CoreModule } from 'src/app/core/core.module'
import { DashboardComponent } from './dashboard/dashboard.component'
import { AutocompleteComponent } from './autocomplete/autocomplete.component'
import { DatatableComponent } from './datatable/datatable.component'
import { DialogsComponent } from './dialogs/dialogs.component'
import { EventEmitterComponent } from './event-emitter/event-emitter.component'
import { FormularioComponent } from './formulario/formulario.component'
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    DashboardComponent,
    AutocompleteComponent,
    DatatableComponent,
    DialogsComponent,
    EventEmitterComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    ExemplosRoutingModule,
  ]
})
export class ExemplosModule { }
