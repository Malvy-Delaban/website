import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-learn-more-button',
  templateUrl: './learn-more-button.component.html',
  styleUrls: ['./learn-more-button.component.scss']
})
export class LearnMoreButtonComponent implements OnInit {
  @Input() isContactMe!: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
