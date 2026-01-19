import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() link: string = '';
  @Input() backgroundImage: string = '';
  @Input() backgroundPosition: string = 'top right';
}
