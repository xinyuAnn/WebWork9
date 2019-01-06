span1.innerHTML = "¥" + " " + "10";
function on(){
	var st1 = document.getElementById("money").value;
	var span1 = document.getElementById('span1');
	span1.innerHTML = "¥" + " " + st1;
}
var box = document.getElementById('box');
var oNavlist = document.getElementById('nav').children;
var sliderd = document.getElementById('sliderd');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;
window.onload = function(){
	var cover = document.getElementsByClassName('top0')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>250){
			cover.style.position = 'fixed';
			cover.style.zIndex = 10000;
			cover.style.marginLeft = "42px";
		}else{
			cover.style.position = 'static';
		}
	}
}

function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

box.onmouseover = function(){
	animate(left,{opacity:100})
	animate(right,{opacity:100})
	clearInterval(timer)
}
box.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 3000);
	}
	right.onclick = next;
	left.onclick = prev;
	for( var i=0; i<oNavlist.length; i++ ){
	(function(i){
	oNavlist[i].onclick = function(){
	index = i+1;
	navmove();
	animate(sliderd,{left:-809*index});
	}
	})(i);
}
function next(){
	if(isMoving){
	return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(sliderd,{left:-809*index},function(){
	if(index==7){
	sliderd.style.left = '-809px';
	index = 1;
	}
	isMoving = false;
	});
}
function prev(){
	if(isMoving){
	return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(sliderd,{left:-809*index},function(){
	if(index==0){
	sliderd.style.left = '-6000px';
	index = 6;
	}
	isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
	oNavlist[i].className = "";
	}
	if(index >6 ){
	oNavlist[0].className = "active";
	}else if(index<=0){
	oNavlist[5].className = "active";
	}else {
	oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next, 3000);
window.onload = roll(20);
function roll(t) {
	var slider1 = document.getElementById("slider1");
	var slider2 = document.getElementById("slider2");
	var box1 = document.getElementById("box1");
	slider2.innerHTML = slider1.innerHTML;
	box1.scrollTop = 0;
	var timer = setInterval(rollStart, t);
	box1.onmouseover = function () {
	clearInterval(timer)
	}
	box1.onmouseout = function () {
	timer = setInterval(rollStart, t);
	}
}
function rollStart() {
	if (box1.scrollTop >= slider1.scrollHeight) {
	box1.scrollTop = 0;
	} else {
	box1.scrollTop++;
	}
}
var bian = document.getElementById("bian");
var bian2 = document.getElementById("bian2");
var bian3 = document.getElementById("bian3");
var xiaoerweima = document.getElementById("xiaoerweima");
var daerweima = document.getElementById("daerweima");
var bian4 = document.getElementById("bian4");
bian.onmouseover = function(){
	bian.style.marginRight = "0";
}
bian.onmouseout = function(){
	bian.style.marginRight = "-80px";
}
bian2.onmouseover = function(){
	bian2.style.marginRight = "0";
}
bian2.onmouseout = function(){
	bian2.style.marginRight = "-80px";
}
bian3.onmouseover = function(){
	bian3.style.marginRight = "0";
	xiaoerweima.style.display = "none";
	daerweima.style.display = "block";
}
bian3.onmouseout = function(){
	bian3.style.marginRight = "-80px";
	xiaoerweima.style.display = "block";
daerweima.style.display = "none";
}
	bian4.onmouseover = function(){
	bian4.style.marginRight = "0";
}
	bian4.onmouseout = function(){
	bian4.style.marginRight = "-80px";
}
window.onload = function(){
	var cover = document.getElementsByClassName('top0')[0];
	window.onscroll = function(){
	var st = document.documentElement.scrollTop || document.body.scrollTop;
	if(st>200){
		cover.style.position = 'fixed';
		cover.style.zIndex = 10000;
	}else{
		cover.style.position = 'static';
		cover.style.marginLeft = "0px";
	}
	}
}