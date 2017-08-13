import {Component} from '@angular/core';
import {DateValidationService} from "./services/date-validation.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DateValidationService]



})

export class AppComponent {
  dt;

  newStartDate:Date = null;
  newEndDate:Date = null;
  resultOfValidation:string = "hello";
  constructor(private dateValidationService:DateValidationService) {
    this.dt = new Date();

  }


  convertStringDateToDate(startDate:string, endDate:string){
    this.newStartDate = new Date(startDate);
    this.newEndDate = new Date(endDate);
  }
  compareTwoDates(startDate:Date,endDate:Date):number{
    if(startDate.getTime() > endDate.getTime())
      return -1;
    else
      return 0;
  }
  displayMessageAndIntervalBetweenDates(startDate:Date,endDate:Date){
    this.messageToDisplayToUser(startDate, endDate);
    document.getElementById('isValidMessage').style.display = "block";

  }

  private messageToDisplayToUser(startDate: Date, endDate: Date) {
    if (this.resultOfValidation == "bdv")
      this.displayMessagesWhenTwoDatesValid(startDate, endDate);
    if ((this.resultOfValidation == "sdnv")) {
      this.resultOfValidation = "the start date is not valid";
      document.getElementById('interval').style.display = "none";
    }

    if (this.resultOfValidation == "ednv")
      this.resultOfValidation = "the end date is not valid";
    if (this.resultOfValidation == "bdnv") {
      this.resultOfValidation = "both dates are not valid";
      document.getElementById('interval').style.display = "none";
      /* line above was added intentionally to hide interval
       day number if we reset manually the dates in the browser
        */
    }
  }

  private displayMessagesWhenTwoDatesValid(startDate: Date, endDate: Date) {
    if (this.compareTwoDates(startDate, endDate) == -1) {
      this.resultOfValidation = "Both dates are valid.But startDate is inferior to end Date";
      document.getElementById('interval').style.display = "none";



    }
    else {
      this.resultOfValidation = "Both dates are valid";
      document.getElementById('interval').style.display = "block";
    }
  }

  checkForValidationDates(startDate:string,endDate:string):void{
    this.convertStringDateToDate(startDate,endDate);

    this.resultOfValidation = this.dateValidationService
      .checkForValidationDates(this.newStartDate,this.newEndDate);

    this.displayMessageAndIntervalBetweenDates(this.newStartDate,this.newEndDate);
  }

}


