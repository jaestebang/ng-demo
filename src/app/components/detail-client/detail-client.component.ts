import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IClient, UpdateClientDTO } from 'src/app/interfaces/iclient';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.scss']
})
export class DetailClientComponent implements OnInit {

  @Input()
  client: UpdateClientDTO = {};

  @Output() emmitBack = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Event emmit back search
   */
  onBack() {
    this.emmitBack.emit();    
  }

}
