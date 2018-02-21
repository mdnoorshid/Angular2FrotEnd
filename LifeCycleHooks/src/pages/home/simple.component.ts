import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
    selector: 'simple',
    template: `<div>You have Entered: {{simpleInput}}</div>
               <h3>You have interacted with the input for <span style="color:red">{{checkedInput}}</span> times</h3>         
    `
})
export class SimpleComponent implements OnChanges, OnInit {
    @Input() simpleInput: String = "defualtValue";
    checkedInput: number = 0;
    showInteraction:boolean = false ;

    ngOnChanges(changes: SimpleChanges) {
        console.log(".inside ngOnChanges method......");
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);

            console.log(propertyName + ': currentValue = ' + current + ", prevoiusValue = " + previous);

        }
    }

    /**
     * The ngOnInit method of a component is called directly after the constructor and after the ngOnChange is
     * triggered for the first time. It is the perfect place for initialisation work.
     */
    ngOnInit() {
        console.log(".inside ngOnInit method......");
    }

    /**
     * ngDoCheck is triggered every time the input properties of a component or a directive are checked. 
     */
    ngDoCheck() {
        console.log(".inside ngDoCheck() method.....");
        this.checkedInput++;
        if(this.checkedInput === 20 ){
          this.showInteraction = true ;
        }
    }
 
    /**
     * Called just before Angular destroys the directive/component.
     */
    ngOnDestroy() {
        console.log(".inside ngOnDestory method....");
    }

    /**
     * Called once after the first ngDoCheck()
     */
    ngAfterContentInit() {
        console.log(".inside ngAfterContentInit method....");
    }

    /**
     * ngAfterViewInit is called only during first change detection cycle.
     */
    ngAfterViewInit() {
        console.log(".inside ngAfterViewInit method....");
    }
 
    /**
     * ngAfterVIewChecked is called every time Angular has finished running change detection on a
     * component and it's children
     */
    ngAfterViewChecked() {
        console.log(".inside ngAfterViewChecked method....");
    }

}