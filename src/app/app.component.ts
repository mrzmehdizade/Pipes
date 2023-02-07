import { Component } from '@angular/core';
import { CurrencyPipe, DecimalPipe, JsonPipe, TitleCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TitleCasePipe, DatePipe,CurrencyPipe,DecimalPipe,JsonPipe]

})
export class AppComponent {
  constructor(private titleCasePipe: TitleCasePipe,private datePipe: DatePipe){}
  title = 'Pipes';
  inputName:string='';
  inputDate:string='';
  inputAmount:string='';
  inputHeight:number=0;
  car={
    color:'black',
year:2022,
production:'iran'
  }

  public onChangeName(event:Event){
    this.inputName=(event.target as HTMLInputElement).value;
    // this.inputName=this.titleCasePipe.transform(this.inputName)
  }
 public onChangeDate(event:Event){
this.inputDate=(event.target as HTMLInputElement).value;
  }
  public onChangeAmount(event:Event){
    this.inputAmount=(event.target as HTMLInputElement).value;
      }
public onChangeHeight(event:Event){
  this.inputHeight=Number((event.target as HTMLInputElement).value);

}

}
