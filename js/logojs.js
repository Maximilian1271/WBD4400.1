//////////////////////////////////////////////////////////////////////////
//																		//
//																		//
//					   TweenMax-Js für Logo animation   				//
//																		//
//																		//
//////////////////////////////////////////////////////////////////////////


window.onload=function(){
	var timeline= new TimelineMax({delay:2})

	timeline
	.to(".logo", 1, {top:"50%", ease: CustomEase.create("custom", "M0,0 C0.128,0.572 0.247,1.117 0.512,1.09 0.724,1.068 0.688,1 1,1")}, "fr1")
	.to("#circle_1_", 2, {fill: "white"})
	.set("#circle_1_", {transformOrigin: "50% 50%"})
	.to("#circle_1_", .4, {scale: 35}, "fr2")
	.to("#circle_1_", 2, {autoAlpha: 0}, "fr2+=1")
	.to(".logo", 1, {autoAlpha: 0}, "fr2+=1")
	.to(".xy", 2, {autoAlpha:1, ease: Power4.easeOut}, "fr2+=3")
}