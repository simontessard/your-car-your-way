import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  @Input() username: string = '';
  @Output() join = new EventEmitter<string>();

  onJoin() {
    if (this.username.trim()) {
      this.join.emit(this.username);
    }
  }
}