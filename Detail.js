		var draw = document.getElementById("draw");
		var imgp = document.createElement("img");
		imgp.src = "img/duigou.png";
		var dra = document.getElementById("dra");
		var imgz = document.createElement("img");
		imgz.src = "img/duigou.png";
		var wupin = document.getElementById("wupin");
		draw.style.border = "1px solid #ff0f19";
		draw.appendChild(imgp);
		imgp.style.display = "block";
		dra.style.border = "none";
		imgz.style.display = "none";
		wupin.innerHTML = "150ml";
		draw.onmouseover = function(){
			draw.style.cursor = "default";
		}
		draw.onclick = function(){
			draw.style.border = "1px solid #ff0f19";
			draw.appendChild(imgp);
			imgp.style.display = "block";
			dra.style.border = "none";
			imgz.style.display = "none";
			wupin.innerHTML = "150ml";
		}
		dra.onmouseover = function(){
			dra.style.cursor = "default";
		}
		dra.onclick = function(){
			dra.style.border = "1px solid #ff0f19";
			dra.appendChild(imgz);
			imgz.style.display = "block";
			draw.style.border = "none";
			imgp.style.display = "none";
			wupin.innerHTML = "200ml";
		}
		var img1 = document.getElementById("img1");
		var img1x = document.createElement("img");
		img1x.src = "img/pp0.jpeg"
		img1x.id = "img1x";
		var img2x = document.createElement("img");
		img2x.src = "img/pp1.jpeg";
		img2x.id = "img2x";
		var pic1 = document.getElementById("pic1");
		var pic = document.getElementById("pic");
  		var slider = document.getElementById("slider");
  		var img2 = document.getElementById("img2");
  		window.onload = function(){
			var imgx1 = document.createElement("img");
  			imgx1.src = "img/pp0.jpeg"
  			imgx1.id = "Bimg";
  			imgx1.style.width = 1632+"px";
  			imgx1.style.height = 1632+"px";
  			var Bimg = document.getElementById("Bimg");
  			var imgx2 = document.createElement("img");
	  		imgx2.src = "img/pp1.jpeg"
	  		imgx2.style.width = 1632+"px";
	  		imgx2.style.height = 1632+"px";
			pic1.style.border = "2px solid #ff9003";
			pic2.style.border = "none";
			img1.appendChild(img1x);
			img1x.style.display = "block";
			img2x.style.display = "none";
			img2.innerHTML = "";
			imgx1.style.display = "block";
			imgx2.style.display = "none";
			img2.appendChild(imgx1);
		}
		pic1.onmousemove = function(){
			var imgx1 = document.createElement("img");
  			imgx1.src = "img/pp0.jpeg"
  			imgx1.id = "Bimg";
  			imgx1.style.width = 1632+"px";
  			imgx1.style.height = 1632+"px";
  			var Bimg = document.getElementById("Bimg");
  			var imgx2 = document.createElement("img");
	  		imgx2.src = "img/pp1.jpeg"
	  		imgx2.style.width = 1632+"px";
	  		imgx2.style.height = 1632+"px";
			pic1.style.border = "2px solid #ff9003";
			pic2.style.border = "none";
			img1.appendChild(img1x);
			img1x.style.display = "block";
			img2x.style.display = "none";
			img2.innerHTML = "";
			imgx1.style.display = "block";
			imgx2.style.display = "none";
			img2.appendChild(imgx1);
		}
		var pic2 = document.getElementById("pic2");
		pic2.onmousemove = function(){
			var imgx2 = document.createElement("img");
	  		imgx2.src = "img/pp1.jpeg"
	  		imgx2.id = "Bimg";
	  		imgx2.style.width = 1632+"px";
	  		imgx2.style.height = 1632+"px";
			var Bimg = document.getElementById("Bimg");
			var imgx1 = document.createElement("img");
  			imgx1.src = "img/pp0.jpeg"
  			imgx1.style.width = 1632+"px";
  			imgx1.style.height = 1632+"px";
			pic2.style.border = "2px solid #ff9003";
			pic1.style.border = "none";
			img1.appendChild(img2x);
			img2x.style.display = "block";
			img1x.style.display = "none";
			img2.innerHTML = "";
			imgx2.style.display = "block";
			imgx1.style.display = "none";
			img2.appendChild(imgx2);
		}
		img1.onmouseover = function(){
  			slider.style.display = "block";
  			img2.style.display = "block";
  		}
  		img1.onmouseout = function(){
  			slider.style.display = "none";
  			img2.style.display = "none";
  		}
  		img1.onmousemove = function(ev){
  			var ev = ev||window.event;
  			var offset = document.documentElement.scrollTop;
			var left = ev.clientX - pic.offsetLeft - 2.3*slider.offsetWidth;
			var top = ev.clientY - pic.offsetTop - 2*slider.offsetHeight - slider.offsetHeight/2+offset;
			var maxLeft = img1.offsetWidth - slider.offsetWidth;
			var maxTop = img1.offsetHeight - slider.offsetHeight;
			left = left>maxLeft?maxLeft:left<0?0:left;
			top = top>maxTop?maxTop:top<0?0:top;
			slider.style.left = left + "px";
			slider.style.top = top + "px";
			var w = left/maxLeft;
			var h = top/maxTop;
			var BmaxLeft = img2.offsetWidth - Bimg.offsetWidth;
			var BmaxTop = img2.offsetHeight - Bimg.offsetHeight;
			Bimg.style.left = w*BmaxLeft + "px";
			Bimg.style.top = h*BmaxTop + "px";
  		}
		var xzuo = document.getElementById("xzuo");
		var xzhong = document.getElementById("xzhong");
		var xyou = document.getElementById("xyou");
		var kucun = document.getElementById("kucun");
		xzhong.value = 1;
		xzuo.onmouseover = function(){
			if(xzhong.value <= 1){
				xzuo.style.cursor = "not-allowed";
			}
			else{
				xzuo.style.cursor = "default";
			}
		}
		xyou.onmouseover = function(){
			if(xzhong.value>=5){
				xyou.style.cursor = "not-allowed";
			}
			else{
				xyou.style.cursor = "default";
			}
		}
		xzuo.onclick = function(){
			if(xzhong.value <= 1){
				xzuo.style.cursor = "not-allowed";
			}
			else{
				xzuo.style.cursor = "default";
				xzhong.value = xzhong.value-1;
			}
		}
		xyou.onclick = function(){
			if(xzhong.value>=5){
				xyou.style.cursor = "not-allowed";
			}
			else{
				xyou.style.cursor = "default";
				xzhong.value = parseInt(xzhong.value)+1;
			}
		}
		var two = document.getElementById("two");
		var out = document.getElementById("out");
		var tankuang = document.getElementById("tankuang");
		out.style.width = window.outerWidth + "px";
		
		two.onclick = function(){
			tankuang.style.width =  document.documentElement.clientWidth + "px";
			tankuang.style.height = document.body.offsetHeight + "px";
			tankuang.style.display = "block";
			var tishi = document.getElementById("tishi");
			tishi.style.top = (document.documentElement.scrollTop + (document.documentElement.clientHeight - tishi.offsetHeight) / 2) + "px";
    		tishi.style.left = (document.documentElement.scrollLeft + (document.documentElement.clientWidth - tishi.offsetWidth) / 2) + "px";
		}
		var X = document.getElementById("X");
		var jixu = document.getElementById("jixu");
		X.onmouseover = function(){
			X.style.cursor = "pointer"
		}
		X.onclick = function(){
			tankuang.style.display = "none";
		}
		jixu.onclick = function(){
			tankuang.style.display = "none";
		}