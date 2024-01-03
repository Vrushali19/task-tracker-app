import { Directive, ElementRef, OnInit, Input} from "@angular/core";

@Directive({
    selector: '[taskListHighlight]'
})

export class TaskListHightlightDirective implements OnInit {
    @Input() taskStatus : string;
    constructor(private elRef: ElementRef){}
    
    ngOnInit(){
        this.highlight();
    }

    private highlight() {
      if(this.taskStatus) {
        this.elRef.nativeElement.style.color = 'white';
        switch(this.taskStatus) {
          case "To Do": 
            this.elRef.nativeElement.style.backgroundColor = '#0288D1';
            break;
          case "In Progress": 
            this.elRef.nativeElement.style.backgroundColor = '#FB8C00';
            break;
          case "Done": 
            this.elRef.nativeElement.style.backgroundColor = '#43A047';
            break;
        }
      }
    }
}