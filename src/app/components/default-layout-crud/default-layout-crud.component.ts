import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-default-layout-crud',
  standalone: true,
  imports: [],
  templateUrl: './default-layout-crud.component.html',
  styleUrl: './default-layout-crud.component.css'
})

export class DefaultLayoutCrudComponent {
  @Input() title: string = "";
  @Input() legendPage: string = "";
  @Input() title2: string = "";
  @Input() legend: string = "";
  @Input() btnPrimary: string = "";
  @Input() legend2: string = "";
  @Input() loginOrCreate: string = "";
}