// Libraries Imports
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Local Imports
import { PaymentFormComponent } from './payment-form.component';

describe('PaymentFormComponent', () => {
	let component: PaymentFormComponent;
	let fixture: ComponentFixture<PaymentFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PaymentFormComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PaymentFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
