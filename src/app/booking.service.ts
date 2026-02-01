import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Booking } from './booking';
import { Bookings } from './mock-bookings'; // Importiere deine Mock-Daten
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookingService {


  private bookings: Booking[] = Bookings;

  constructor(private httpClient:HttpClient) { }

  bookingsUrl :string = "/api/bookings";  /* Hier wird die URl des DB Servers eigentlich eingetragen - Später muss geändert werden zZ nur Local*/
 
  getBookings(): Observable<Booking[]> {
    var response = this.httpClient.get<Booking[]>(this.bookingsUrl);
    console.log(response);
    return response; 
  }

  deleteBooking(booking: Booking): Observable<void> {
    this.bookings = this.bookings.filter(b => b.id !== booking.id); 
    return of(); 
  }

  getBookingById(id: number): Observable<Booking> {
    const foundBooking = this.bookings.find(b => b.id === id);
    return of(foundBooking!); 
  }

  // Simuliere das Hinzufügen einer neuen Buchung
  addBooking(booking: Booking): Observable<Booking> {
    booking.id = this.bookings.length + 1; 
    this.bookings.push(booking); 
    return of(booking); 
  }
}
