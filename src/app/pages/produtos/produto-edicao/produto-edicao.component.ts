import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-edicao',
  templateUrl: './produto-edicao.component.html',
  styleUrls: ['./produto-edicao.component.scss'],
})
export class ProdutoEdicaoComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {}
}
