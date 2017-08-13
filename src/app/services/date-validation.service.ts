import { Injectable } from '@angular/core';

@Injectable()
export class DateValidationService {

  message:string = "";

  constructor() { }

  isValidFormDate(startOrEndDate:Date):boolean{

    if(Object.prototype.toString.call(startOrEndDate) === "[object Date]") {
      if(isNaN(startOrEndDate.getTime()) )
        return false;
      else
        return true;
    }else
      return false;
  }

  checkForValidationDates(startDate:Date, endDate:Date):string{
    if(this.isValidFormDate(startDate) && this.isValidFormDate(endDate))
      this.message = "bdv";
    else if (!this.isValidFormDate(startDate))
      if (this.isValidFormDate(endDate))
        this.message = "sdnv";
      else
        this.message = "bdnv";
    else if(!this.isValidFormDate(endDate) )
      if (this.isValidFormDate(startDate))
        this.message = "ednv";
      else
        this.message = "bdnv";
    return this.message;

  }



}
