import { Component } from '@angular/core';
import { GformServiceService } from '../service/gform-service.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent {
  constructor(private _gformservice: GformServiceService) {}
  login = [...this._gformservice.login];
}
