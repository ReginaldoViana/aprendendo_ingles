import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class TopoComponent {
    public titulo:string = 'Aprendendo Inglês'
}