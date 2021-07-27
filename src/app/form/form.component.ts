import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, Routes } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  btnText = "Submit";
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  submitForm() {
    localStorage.setItem('healthcondition','true');
    this.btnText = "Your information is saved.";
    setTimeout(()=>this.router.navigate(['/grocerylist']),1000);
  }
}
