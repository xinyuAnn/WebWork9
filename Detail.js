var hei = document.getElementById("hei");
		hei.onmouseover = function(){
			hei.style.background = "#fe0d4a";
		}
		hei.onmouseout = function(){
			hei.style.background = "black";
		}
		var hei1 = document.getElementById("hei1");
		hei1.onmouseover = function(){
			hei1.style.background = "#fe0d4a";
		}
		hei1.onmouseout = function(){
			hei1.style.background = "black";
		}
		var hei2 = document.getElementById("hei2");
		hei2.onmouseover = function(){
			hei2.style.background = "#fe0d4a";
		}
		hei2.onmouseout = function(){
			hei2.style.background = "black";
		}
		var hei3 = document.getElementById("hei3");
		hei3.onmouseover = function(){
			hei3.style.background = "#fe0d4a";
		}
		hei3.onmouseout = function(){
			hei3.style.background = "black";
		}
		var hei4 = document.getElementById("hei4");
		hei4.onmouseover = function(){
			hei4.style.background = "#fe0d4a";
		}
		hei4.onmouseout = function(){
			hei4.style.background = "black";
		}
		var hei5 = document.getElementById("hei5");
		hei5.onmouseover = function(){
			hei5.style.background = "#fe0d4a";
		}
		hei5.onmouseout = function(){
			hei5.style.background = "black";
		}
		var hei6 = document.getElementById("hei6");
		hei6.onmouseover = function(){
			hei6.style.background = "#fe0d4a";
		}
		hei6.onmouseout = function(){
			hei6.style.background = "black";
		}
		var hei7 = document.getElementById("hei7");
		hei7.onmouseover = function(){
			hei7.style.background = "#fe0d4a";
		}
		hei7.onmouseout = function(){
			hei7.style.background = "black";
		}	
		//您已经选择的含量
		var hanliang = document.getElementById("hanliang");
		var imgp = document.createElement("img");
		imgp.src = "img/duigou.png";
		var hanliang1 = document.getElementById("hanliang1");
		var imgz = document.createElement("img");
		imgz.src = "img/duigou.png";
		var wupin = document.getElementById("wupin");
		hanliang.style.border = "1px solid #ff0f19";
		hanliang.appendChild(imgp);
		imgp.style.display = "block";
		hanliang1.style.border = "none";
		imgz.style.display = "none";
		wupin.innerHTML = "150ml";
		hanliang.onmouseover = function(){
			hanliang.style.cursor = "default";
		}
		hanliang.onclick = function(){
			hanliang.style.border = "1px solid #ff0f19";
			hanliang.appendChild(imgp);
			imgp.style.display = "block";
			hanliang1.style.border = "none";
			imgz.style.display = "none";
			wupin.innerHTML = "150ml";
		}
		hanliang1.onmouseover = function(){
			hanliang1.style.cursor = "default";
		}
		hanliang1.onclick = function(){
			hanliang1.style.border = "1px solid #ff0f19";
			hanliang1.appendChild(imgz);
			imgz.style.display = "block";
			hanliang.style.border = "none";
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
		var tu1 = document.getElementById("tu1");
		var tu = document.getElementById("tu");
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
			tu1.style.border = "2px solid #ff9003";
			tu2.style.border = "none";
			img1.appendChild(img1x);
			img1x.style.display = "block";
			img2x.style.display = "none";
			img2.innerHTML = "";
			imgx1.style.display = "block";
			imgx2.style.display = "none";
			img2.appendChild(imgx1);
		}
		tu1.onmousemove = function(){
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
			tu1.style.border = "2px solid #ff9003";
			tu2.style.border = "none";
			img1.appendChild(img1x);
			img1x.style.display = "block";
			img2x.style.display = "none";
			img2.innerHTML = "";
			imgx1.style.display = "block";
			imgx2.style.display = "none";
			img2.appendChild(imgx1);
		}
		var tu2 = document.getElementById("tu2");
		tu2.onmousemove = function(){
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
			tu2.style.border = "2px solid #ff9003";
			tu1.style.border = "none";
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
			var left = ev.clientX - tu.offsetLeft - 2*slider.offsetWidth;
			var top = ev.clientY - tu.offsetTop - 2*slider.offsetHeight - slider.offsetHeight/2+offset;
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