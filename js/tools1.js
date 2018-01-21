//id
function byId(id){
	return document.getElementById(id);
}
//class
function byClassName(className){
	if(document.getElementsByClassName){
		return document.getElementsByClassName(className);
	}else{
		let arr = [];
		let ele = document.getElementsByTagName("*");
		for(let i = 0;i < ele.length;i ++){
			if(ele[i].className == className){
				arr.push(ele[i]);
			}
		}
		return arr;
	}
}
//tagName
function byTagName(obj,tagName){
	return obj.getElementsByTagName(tagName);
}
