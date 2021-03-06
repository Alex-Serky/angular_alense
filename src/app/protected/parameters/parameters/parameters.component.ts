import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../../core/services/auth.service';
import { User } from './../../../shared/models/user';

@Component({
  selector: 'al-parameters',
  templateUrl: './parameters.component.html',
  styles: []
})
export class ParametersComponent implements OnInit {

  parametersForm: FormGroup;
  pomodoros: number[] = [15, 20, 25, 30, 35, 40, 45, 50, 55, 60];


  constructor(
    public fb: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.parametersForm = this.fb.group({
      pomodoro: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const user: User = this.authService.currentUser; // On récupère la dernière valeur de l'utilisateur
    user.pomodoroDuration = this.parametersForm.get('pomodoro').value * 60;
    this.authService.updateUserState(user).subscribe();
  }

}
