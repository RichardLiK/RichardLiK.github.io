function $(id){
	return document.getElementById(id);
}
//实现welcome界面

function contentSecChange(){

	$('welcomeSec').style.display = 'none';
	$('secContent').style.display = 'block';
}
var t = setTimeout("contentSecChange()", 2000);

//四格li透明度递减
var secContent = document.getElementById('secContent');
var liList = secContent.getElementsByTagName('li');
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
	liList[i].onclick = function(){
		loadXMLDoc('test1.txt','src', this);
		console.log(this);
	};
}
// liList[1].onclick = function(){
// 	loadXMLDoc('personalInfo.html','view');
// };
//console.log(liList);

