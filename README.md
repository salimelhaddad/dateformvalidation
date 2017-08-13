# Dateformvalidation

This a test given to Salim EL Haddad by One of the two founders of the start-up Nimble ways Mr.Antoine ORY-LAMBALLE
## Requirements

             =>create a web site using angular4
             =>Specification:->Two date fields and a button to submit.
                             -> When both the two dates are valid.It should display the number
                                of days between the two dates.
                             -> Styling the web site (User experience)
## Project Description


the project consists of creating two input date fields,a start date and an end date.
The start date should be inferior to the end date.So a function called "displayMessagesWhenTwoDatesValid"
is used to make sure it's the case.it's also required to check if both dates are valid,
otherwaise a message is diplayed in the page explaining the reason of the error.If the
dates are both valid,then a message is displayed specifying the number of dates between
the the two dates.
## Details


Project structure:
        the project is created using angular-cli .It contains one component
        which is the app-comonent and one service which check for validation of the two dates.
Modules used:
* MomentModule : It is a module containing a variety of pipes . In the context of this
                 project,it's used to compute the difference of days between the two dates entered
                 by the user.
* RoundPipe: used to round a float number to its closest integer.
* Angular Material 2 : used for designing the user experience.In the context of this project
                       ,BrowserAnimationsModule,MdButtonModule,MdDatepickerModule,MdInputModule
                       and MdNativeDateModule.Please refer to the documentation to see their
                       utilities in details:"https://material.angular.io/components"
