import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'test-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() toggleClass = false;

  @Output() toggleClassChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
