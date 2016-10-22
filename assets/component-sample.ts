import { Component, OnInit, Destroy, Input, Output, EventEmitter } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'profile',
  template: require('./profile.html'),
  styles: [
    require('./profile.scss')
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileComponent implements OnInit {
  @Input() profileId: string;
  @Output() sayFullName: EventEmitter<string> = new EventEmitter<string>();

  public profile: { firstname: string, lastname: string };

  get fullName(): string {
    return `${this.profile.firstname} ${this.profile.lastname}`;
  }

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.fetch()
      .subscribe((result) => this.profile = result);
  }

  onClick() {
    this.sayFullName.emit(this.fullName);
  }
}