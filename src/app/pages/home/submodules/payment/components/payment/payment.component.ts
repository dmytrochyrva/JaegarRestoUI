import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-payment',
	templateUrl: './payment.component.html',
	styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
	@Output() cancel = new EventEmitter();
	@Output() confirmPayment = new EventEmitter();

	constructor() {}
}
