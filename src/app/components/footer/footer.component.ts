import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  phoneNumber: string = '375293689868';
  instagramLink: string = 'https://www.instagram.com/yourprofile';

}
