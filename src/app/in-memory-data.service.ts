import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from "./booking";

@Injectable({    /* Das ist die Datenbank die eigentlich auf einem Server liegt*/
  providedIn: 'root'  /* Die url des DB Server müsste später ausgetauscht werden*/
})/* Vorerst so damit realitäts nah Programmiert werden kann*/
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const bookings : Booking []= [
      {
          id : 1,
          name: "Pascal Ruge",
          roomNumber: 100,
          startDate: new Date(),
          endDate: new Date("2024-08-13")
        },
        {
          id : 2,
          name: "Max Mustermann",
          roomNumber: 50,
          startDate: new Date(),
          endDate: new Date("2024-08-13")
        },
        {
          id : 3,
          name: "Kevin Werner",
          roomNumber: 30,
          startDate: new Date(),
          endDate: new Date("2024-08-13")
        },
        {
          id : 4,
          name: "Ute Schmidt",
          roomNumber: 45,
          startDate: new Date(),
          endDate: new Date("2024-08-13")
        },
        {
        id: 5,
        name: 'Jane Smith',
        roomNumber: 102,
        startDate: new Date('2023-09-05'),
        endDate: new Date('2023-09-12')
      },
    ]
    return bookings;
  }
  constructor() {}
}
