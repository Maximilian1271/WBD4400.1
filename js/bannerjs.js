//////////////////////////////////////////////////////////////////////////
//																		//
//																		//
//					   TweenMax-Js für werbebanner   					//
//																		//
//																		//
//////////////////////////////////////////////////////////////////////////


window.onload=function(){
	var timeline = new TimelineMax({delay:2})											//Timeline für design elemente (alles außer text)
	var texthandler= new TimelineMax({repeat:Infinity, paused:true})			//Verantwortlich dafür das sich der text unendlich wiederholt. Könnte theoretisch mehr text elemente handlen

	timeline
	.to(".logo", .9, {left: "23.5%", ease: Expo.easeOut}, "p1") // x: -(452/2),
	.to(".dot", 1, {opacity:1}, "p1+=2")
	.to(".dot", .2, {scale: 100}, "p2")
	.to(".dot", 1.5, {opacity: 0}, "p2+=.5")
	.to(".logo", 1, {scale: .25, x:-133, y:-18, ease: Expo.easeOut})
	.to(".bg", .5, {opacity: 1})
	.add(function(){texthandler.play()})										//Startet Text timeline

	texthandler
	.to(".text1", 1, {left:"50%", opacity: 1, ease: Power2.easeOut}, "p3")
	.to(".text1", 3, {opacity: 0}, "p3+=5")
	.to(".text2", 1, {left:"50%", opacity: 1, ease: Power2.easeOut}, "p4")
	.to(".text2", 3, {opacity: 0}, "p4+=5")
	.set(".text1", {left: "initial", opacity: "initial"})
	.set(".text2", {left: "initial", opacity: "initial"})
}