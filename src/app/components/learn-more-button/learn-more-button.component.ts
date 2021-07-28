import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-learn-more-button',
  templateUrl: './learn-more-button.component.html',
  styleUrls: ['./learn-more-button.component.scss']
})
export class LearnMoreButtonComponent implements OnInit {
  @Input() textWhite!: boolean;
  @Input() textGreen!: boolean;
  @Input() textPurple!: boolean;
  @Input() text!: string;

  constructor() {}

  ngOnInit(): void {
  }

}
