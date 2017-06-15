//troggle实现函数
function troggleFunc(idNum, xmlhttp){
	var myDivContent = document.getElementById(idNum).innerHTML;
	if (myDivContent != ""){
		document.getElementById(idNum).innerHTML = "";
		console.log("myDivContent2:" + myDivContent);
	} else {
		
		document.getElementById(idNum).innerHTML = xmlhttp.responseText;
		console.log("myDivContent3:" + myDivContent);
	}
	//myDivContent = xmlhttp.responseText;
	//document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
}
//ajax实现,利用filename，path加载文件内容，e用来判断内容加载对象
function loadXMLDoc(filename, path, e){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function()
	{
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
	    {
	    	//实现secContent内容替换
	    	//document.getElementById("secContent").innerHTML = xmlhttp.responseText;
	    	//troggle实现
	    	//troggleFunc("myDiv",xmlhttp);
	    	//对象引用改变对象本身
	    	// console.log(e);
	    	var myDivContent;
	    	if(e == undefined){
	    		myDivContent = document.getElementById("secContent");
	    	}	else {
	    	 
	    		myDivContent = e;
	    		console.log(e);
	    	}
	    	myDivContent.innerHTML = xmlhttp.responseText;
	    }
	}
	xmlhttp.open("POST",path + "/" + filename,true);
	//设置ajax请求格式，通过send可以向后台传数据
	//xmlhttp.open("GET","src/" + filename,true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  	xmlhttp.setRequestHeader('Access-Control-Allow-Origin', 'https://richardlik.github.io');
	//xmlhttp.send("filename=" + filename);
	xmlhttp.send();
}