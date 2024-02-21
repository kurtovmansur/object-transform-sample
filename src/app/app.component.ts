import { Component } from '@angular/core';
import { DocumentServiceService } from './services/document-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'object-transform-sample';
  
  constructor(public readonly documentService:DocumentServiceService) {
  }
}
