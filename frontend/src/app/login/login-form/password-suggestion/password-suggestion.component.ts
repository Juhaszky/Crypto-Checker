import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'password-suggestion',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-template pTemplate="footer">
      <p class="mt-2">Suggestions</p>
      <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </ng-template>
  `,
  styleUrls: ['./password-suggestion.component.scss'],
})
export class PasswordSuggestionComponent {}
