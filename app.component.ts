import { Component } from '@angular/core';
import {faFastForward, faChevronRight, faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faFastForward=faFastForward;
  faChevronRight=faChevronRight;
  faEdit=faEdit;
   title = 'Ejercicio numero 1 a ver';

}
