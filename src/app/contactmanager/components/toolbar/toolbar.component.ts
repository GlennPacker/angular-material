import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() isSmallScreen: boolean;
  @Output() toggleSideNav = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
    this.toggleSideNav.emit();
  }

}
