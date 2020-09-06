import { Component } from '@angular/core';
import { slideInAnimation } from 'src/app/shared/utils/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent { }
