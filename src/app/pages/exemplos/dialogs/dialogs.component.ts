import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from 'src/app/shared/components/confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss'],
})
export class DialogsComponent implements OnInit {
  constructor(private confirmDialogService: ConfirmDialogService) {}

  ngOnInit(): void {}

  showDialog() {
    this.confirmDialogService.confirmThis(
      'Acabar com Brasília?',
      'Lançar mísseis em Brasília e acabar com todos os políticos?',
      () => console.log('dados apagados'),
      () => console.log('cancelado')
    );
  }
}
