import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  goToExperiences($experiencesAnchor: any) {
    // this.viewportScroller.scrollToAnchor($experiencesAnchor);
    $experiencesAnchor.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
