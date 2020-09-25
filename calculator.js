function insert(num){
	document.view.output.value += num;
}

function clean(){
	document.view.output.value="";	
}

function equal(){
	var ans=document.view.output.value;
	if(ans){
		document.view.output.value=eval(ans)
	}
}

function back(){
	var ans=document.view.output.value;
	document.view.output.value=ans.substring(0,ans.length-1)
}
