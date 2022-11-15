import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capstone-editor-fe';

  isCreatingStage: boolean = false;
  isCreatingTitle: boolean = false;
  isCreatingProcess: boolean = false;
  isViewingMain: boolean = false;
  isUpdating: boolean = true;
}

