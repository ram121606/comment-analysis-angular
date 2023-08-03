import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  result : any;
  comment : any;
  text = new FormControl('',[Validators.required]);

  constructor(private http : HttpClient){}
  
  analyze(){
    const data = {
      comment : this.comment
    }
    console.log(data)
    return this.http.post<any>("http://127.0.0.1:8000/predict",data).subscribe((response)=>{
      this.result = "'"+response+"'"
    })
  }
}
