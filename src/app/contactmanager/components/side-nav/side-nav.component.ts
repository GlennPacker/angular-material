import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  users: Observable<User[]>;

  get mode() {
    return this.isSmallScreen ? 'side' : 'over';
  }

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px`);

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.getList();

    this.users.subscribe(users => {
      console.log(users);
    });
  }

  isSmallScreen() {
    return this.mediaMatcher.matches;
  }

}
