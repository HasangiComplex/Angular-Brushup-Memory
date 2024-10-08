import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// If we don't include angular, the service will not be properly  registered in Angular'
export class DatesService {

  constructor() {
  }

  getToday(): Date {
    const startOfDateTimestamp = new Date().setHours(0,0,0,0)
    return  new Date(startOfDateTimestamp)
  }

  getYesterday(): Date {
    const today = this.getToday();
    return new Date(today.setDate(today.getDate() - 1))
  }

  getTomorrow(): Date {
    const today = this.getToday();
    return new Date(today.setDate(today.getDate()+1))
  }

}
