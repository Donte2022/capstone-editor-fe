import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-prompt',
  templateUrl: './update-prompt.component.html',
  styleUrls: ['./update-prompt.component.css']
})
export class UpdatePromptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onCancel() {
    console.log("back to main")
  }

  onSave() {
    console.log("saving changes")
  }
}
