import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-task-graph',
  templateUrl: './app-task-graph.component.html',
  styleUrls: ['./app-task-graph.component.css']
})
export class AppTaskGraphComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  costTrackerList:any = [];

  costTrackerForm:FormGroup;

  ngOnInit(): void {
    this.createCostTrackerForm();
  }

  createCostTrackerForm():void{
    this.costTrackerForm = this.fb.group({
      title: ["",Validators.required],
      amount: ["",Validators.required],
      date: ["",Validators.required]
    });
  }

  get costTrackerFormValidate(){ return this.costTrackerForm.controls}

  addItem():void{
    if(this.costTrackerForm.invalid){
      return;
    }
    this.costTrackerList.push(this.costTrackerForm.value);
    console.log(this.costTrackerList);
    this.createCostTrackerForm();
  }

}
