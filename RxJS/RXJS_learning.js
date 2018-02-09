/* var observable = Rx.Observable.interval(1000);
var observer = {
    next: function(value) {
        //console.log(value);
    }
};

observable.map(function(value) {
        return "Md Noorshid--->" + value * 2;
    })
    .throttleTime(2000)
    .subscribe(observer);


var subject = new Rx.Subject();

subject.subscribe({
    next: function(value) {
        //console.log(value);
    },
    error: function(error) {
        //console.log(error);
    },
    complete: function() {
        //console.log("complete");
    }
});

subject.subscribe({
    next: function(value) {
       //console.log(value);
    }
    ,
      error: function(error){
    	  console.log(error);
      }
});


subject.next("Hi My Name is Md Noorshid");
subject.error("There is an Error...."); 

observable.filter(function(value){
	return value%2==0;
})
.subscribe({
	next: function(value){
		//console.log(value);
	},
	error:function(error){
		//console.log(error);
	}
	
});  */

// From one or multiple values
//var observable=Rx.Observable.of("Md","Noorshid");
/* var observer={
	next:function(value){
		console.log(value);
	}
} */

//observable.subscribe(observer);

//From an array of values
/* var observable=Rx.Observable.from([1,2,3,4,5,6]);
observable.subscribe({next:function(value){console.log(value)}}); */

//From an event
/* var button=document.querySelector('button');
var observable=Rx.Observable.fromEvent(button, 'click');
observable.subscribe(
(value) => console.log(value)
);

 */
 
 
 //Getting x and y coordinate 
//var a = [];
var myDiv=document.getElementById("myDiv");
//window object is for whole screen
var mouseEventObservable=Rx.Observable.fromEvent(window,'mousemove');
var observer={
	next:function(value){
	//console.log("X:"+value.clientX+", Y:"+value.clientY);	
	var obj={X:value.clientX,Y:value.clientY};
	/* console.log(JSON.stringify(obj));
	this.a.push(obj); */
	/* a.push(obj);
	console.log(a); */
	//console.log(obj);
	  document.getElementById('xValue').innerHTML="X: "+obj.X;
	  document.getElementById('yValue').innerHTML="Y: "+obj.Y;
}
}

mouseEventObservable.subscribe(
//(value) => console.log("X:"+value.clientX+", Y:"+value.clientY)
observer
);

//Taking value from input event
var input = document.querySelector("input");
var inputEvent=Rx.Observable.fromEvent(input,'input');

inputEvent.filter(event => event.target.value.length > 2)
.map(event => event.target.value)
.subscribe((value) => console.log(value));

var myDiv=document.getElementById('myDiv');
var myDivEvent=Rx.Observable.fromEvent(myDiv,'click');

myDivEvent.subscribe((value) => console.log(value));


















