import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  
})
export class FormComponent implements OnInit{

  constructor(private formservice:FormService) { }
  ngOnInit(): void {
    
  }

  log(x:any){
    console.log(x)
  }
  onSubmit(data:any){
    console.log(data)
    this.formservice.register(data)
    
  }

}
