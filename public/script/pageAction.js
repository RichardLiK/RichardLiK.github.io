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
}
console.log(liList);