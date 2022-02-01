import { Transferencia } from './../../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{

  valor: number;
  destino: number;

  @Output() aoTransferir = new EventEmitter<any>();

  constructor(private service: TransferenciaService) { }

  transferir(){
    console.log('Solicitada nova tranferencia');
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino};
    this.service.adicionar(valorEmitir).subscribe(result => {
      console.log(result);
      this.limparCampos();
    })
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }


}
