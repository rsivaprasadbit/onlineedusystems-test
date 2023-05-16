import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-learner-content',
  templateUrl: './learner-content.component.html',
  styleUrls: ['./learner-content.component.css']
})
export class LearnerContentComponent implements OnInit {
  ngOnInit(): void {
    this.currentIndex = this.subtitles.indexOf(this.subtitle || '');
  }
  @Input() id: string | undefined;
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() content: string | undefined;
  @Input() imageUrl: string | undefined;
  @Input() items:string[]|undefined;
  @Input() subtitles: string[] =[];

  currentIndex = 0;

  scrollToNext() {
    this.currentIndex++;
    const elements = document.getElementsByClassName(
      'content-section'
    ) as HTMLCollectionOf<HTMLElement>;
    if (elements.length > 0) {
      const element = elements[this.currentIndex];
      if (element) {
        element.scrollIntoView();
      } else {
        this.currentIndex = 0;
      }
    }
  }
   
}

