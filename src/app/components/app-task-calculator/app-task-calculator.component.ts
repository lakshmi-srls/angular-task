import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-task-calculator',
  templateUrl: './app-task-calculator.component.html',
  styleUrls: ['./app-task-calculator.component.css']
})
export class AppTaskCalculatorComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  result:number = 0;

  calculationForm:FormGroup;

  ngOnInit(): void {
    this.createcalculationForm();
  }

  createcalculationForm():void{
    this.calculationForm = this.fb.group({
      input_1: ["",[Validators.required, Validators.pattern("^[0-9]*$")]],
      input_2: ["",[Validators.required, Validators.pattern("^[0-9]*$")]],
      input_3: ["",[Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  get calculationFormValidate(){ return this.calculationForm.controls}

  getResult():void{

    if(this.calculationForm.invalid){
      return;
    }

    let i1 = this.calculationForm.value.input_1;
    let i2 = this.calculationForm.value.input_2;
    let i3 = this.calculationForm.value.input_3;
    this.result = this.calcultion(+i1,+i2,+i3);
       
  }

  private calcultion(input_1:number = 0,input_2:number = 0,input_3:number = 0):number{
    return (input_1 * input_2 * input_3)
  }

}
