import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-progresso',
    templateUrl: './progresso.component.html',
    styleUrls: ['./progresso.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class ProgressoComponent {
    @Input() public progresso: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
