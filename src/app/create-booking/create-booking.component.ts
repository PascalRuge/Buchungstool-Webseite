import { Component, OnInit } from '@angular/core';
import { Booking } from "../booking";
import { Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BookingService } from '../booking.service';

@Component({
  selector: 'create-booking',
  templateUrl: './create-booking.component.html',
  styleUrl: './create-booking.component.css'
})
export class CreateBookingComponent implements OnInit {
  bookingForm!: FormGroup;

  booking: Booking = {
    id: 100,
    name: "Your Name",
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date()
  }

  constructor(
     private router: Router,
     private activatedRoute: ActivatedRoute,
     private bookingService: BookingService,
     private formbuilder: FormBuilder  // FormBuilder wird hier über Dependency Injection injiziert
  ) { }

  ngOnInit(): void { 
    // Initialisiere das Formular in ngOnInit, nachdem der FormBuilder bereitgestellt wurde
    this.bookingForm = this.formbuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      roomNumber: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });

    // Falls es sich nicht um die Erstellung handelt, sondern um das Bearbeiten einer Buchung:
    if (this.router.url != '/create') {
      const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

      this.bookingService.getBookingById(id).subscribe((result) => {
        this.booking = result;

        this.bookingForm.setValue({
          id: this.booking.id,
          roomNumber: this.booking.roomNumber,
          name: this.booking.name,
          startDate: this.booking.startDate,
          endDate: this.booking.endDate
        });
      });
    }
  }

  save(): void {
    // Hole die Werte aus dem Formular
    this.booking.id = this.bookingForm.get('id')?.value;
    this.booking.name = this.bookingForm.get('name')?.value;
    this.booking.roomNumber = this.bookingForm.get('roomNumber')?.value;
    this.booking.startDate = this.bookingForm.get('startDate')?.value;
    this.booking.endDate = this.bookingForm.get('endDate')?.value;

    this.bookingService.addBooking(this.booking).subscribe();
    this.router.navigate(['bookings']);
  }

  dateChanged(event: Event, isStart: boolean): void {
    const val = (event.target as HTMLInputElement).value;
    if (isStart) {
      this.booking.startDate = new Date(val);
    } else {
      this.booking.endDate = new Date(val);
    }
  }
}