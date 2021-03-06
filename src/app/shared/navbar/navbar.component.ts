import { Component } from '@angular/core';

/**
 * This class represents the navigation bar component.
 */
@Component({
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})

export class NavbarComponent {
  navs = [
    { url: '/blog', content: 'Blog' },
    { url: '/contact-me', content: 'Contact Me' }
  ];
}
