import { EventEmitter, OnInit } from '@angular/core';
export declare class ModalComponent implements OnInit {
    toggleClass: boolean;
    toggleClassChange: EventEmitter<boolean>;
    constructor();
    ngOnInit(): void;
}
