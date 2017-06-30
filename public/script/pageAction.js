function $(id){
	return document.getElementById(id);
}
//实现welcome界面
var welcomeSec = $('welcomeSec');
welcomeSec.style.opacity = 1;
//welcomeSec.style.display = 'none';//
var secContent = $('secContent');
//secContent.style.opacity = 0;//0
//secContent.style.display = 'block';//
function contentSecChange(ele1, ele2, interval){
	clearInterval(interval);
	ele1.style.display = 'none';
	ele2.style.display = 'block';
}
function opaChange(ele, method){
	if(method == 'plus'){
		if(ele.style.opacity < 1){
			while(ele.style.opacity < 1){
				ele.style.opacity += 0.03;	
			}
			
		} else{
			contentSecChange(welcomeSec, secContent, welOpacityChange);
		}
	} else if(method == 'subtraction'){
		if(ele.style.opacity > 0){
			ele.style.opacity -= 0.03;
		} else{
			//contentSecChange(welcomeSec, secContent, conOpacityChange);
			contentSecChange(welcomeSec, secContent, welOpacityChange);
		}
	}
	
} 
var welOpacityChange = setInterval("opaChange(welcomeSec, 'subtraction')", 1);//50
//这里加只能加一次，即变成0.03，不知道什么原因
//var conOpacityChange = setInterval("opaChange(secContent, 'plus')", 100);

//四格li透明度递减
var secContent = document.getElementById('secContent');
//console.log( secContent.getElementsByClassName('basicContent'));
var liList = secContent.getElementsByClassName('basicContent')[0].getElementsByTagName('li');
var baseOpicity = 0.8;

for (var i = 0; i < liList.length; i++){
	baseOpicity =  baseOpicity - (baseOpicity * (i + 1)) / 15;
	//console.log(baseOpicity);
	//liList[i].style.background = "ragb(255, 255, 255," + baseOpicity + ")";
	liList[i].style.opacity = baseOpicity;
	//console.log("666" + liList[i].style.background);
	//这里ajax会自动执行
	//liList[i].addEventListener("click", loadXMLDoc('test1.txt','src', liList[i]));
	//用onclick就不会自动执行，按照预期，点击li加载对应的文本内容
	var cacheContent;
	liList[i].onmouseover = function(){
		cacheContent = this.innerHTML;
		//console.log(cacheContent);
		loadXMLDoc(cacheContent + '.txt','src', this);
		//console.log(cache[i]);
	};
	liList[i].onmouseout = function(){
		this.innerHTML = cacheContent;
	}
}
// liList[1].onclick = function(){
// 	loadXMLDoc('personalInfo.html','view');
// };
//console.log(liList);

