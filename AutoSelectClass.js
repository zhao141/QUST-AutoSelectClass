
/*点击选课按钮*/
function Click_button(){
    var course_block=document.getElementsByClassName('body_tr');
for (k=0;k<course_block.length;k++){
    
    if(course_block[k].getElementsByClassName('jsxm')[0].textContent==='尔雅'||
       course_block[k].getElementsByClassName('jsxm')[0].textContent==='卓越'){
      
        document.getElementsByClassName("btn btn-primary btn-sm")[k+1].click();
        
    }else{console.log(course_block[k].getElementsByClassName('jsxm')[0].textContent)}
};
return true};

/*刷新课程列表*/
function RefreshClasses(){
    var but=document.getElementsByClassName('btn btn-primary btn-sm');
    but[0].click();
};

/*打开选课panel*/
function Open(){
    var course_block=document.getElementsByClassName('panel panel-info');
for (j=1;j<=course_block.length-1;j++){
    course_block[j].children[0].children[7].click();
	var z;
    for(z=0;z<=1000;z++)if(course_block[j].getElementsByClassName("panel-body table-responsive")[0].style.display=="block"){
	
		console.log("open folder", course_block[j].children[0].children[7].innerHTML);
		/*点击选课按钮*/
		var result = Click_button();
		break;
		}
   
};
     /*刷新课程列表*/
    setTimeout(RefreshClasses,2);
};

/*清理已选课程*/
function Clean_panel(){
var panel = document.getElementsByClassName("panel panel-info");
    for(var i=1;i<panel.length;i++){
    if(panel[i].getElementsByClassName("panel-heading kc_head")[0].style.backgroundColor=="rgb(193, 255, 193)"){
    panel[i].remove();
    }
    }
}


/*入口在这*/
function StartSelecting(){
    /*去掉跨校区弹窗提示*/
    document.getElementById("kxqxktskg").value = 0;
    /*清理已选课程*/
    Clean_panel();
    
    Open();
    
    
    console.log("完成一次抢课");
};


setInterval(StartSelecting,500,2);
