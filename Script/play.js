var precount = 0;
var score = 0;
var hasc = 0;
var tmid = window.setTimeout(show,1000);   
var tid;

function GetRandomNum(Min,Max)
{   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
}   

function show()   
{   
	var count = document.getElementById('count');
	var p = document.getElementById('people');
    count.className='count1';
    p.className='people1'
    window.clearTimeout(tmid);
    tmid = window.setTimeout(show1,1000);
}  

function show1()   
{   //alert(2);
	var count = document.getElementById('count');
	var p = document.getElementById('people');
    count.className='count2';
    p.className='people'
    window.clearTimeout(tmid);
    tmid = window.setTimeout(show2,1000);
}

function show2()   
{   //alert(3);
	var count = document.getElementById('count');
	var p = document.getElementById('people');
    count.className='count3';
    p.className='people1'
    window.clearTimeout(tmid);
    tmid = window.setTimeout(show3,600);
}


function changetop(str,dis,i,left){
	var sc = document.getElementById('score');
	var l = document.getElementById('people');
	var btndiv = document.getElementById('btn');
	var obj = document.getElementById(str);
	obj.style.top = dis*i+"px";
	
	if(i == 20){
		hasc += 1;
		var obj = document.getElementById(str);
		obj.style.display = "none";
		
		var lg = l.style.marginLeft;
		lg = parseInt(lg.substring(0,lg.length-2));
		if(left>=lg+70 && left<=lg+100){
			score += 1;
			sc.innerHTML = "获得礼物："+score;
			l.className = "lg1";
			window.setTimeout(function(){l.className = "lg";},500);
		}
		if(hasc==18){
			if(score==18){
				alert("生日快乐呀");
			}
			else{
				alert("厉害了，获得礼物："+score);
			}
			btndiv.style.display = "block";
		}
	}
}

function down(){
	precount +=1;

	if(precount>18){
		window.clearTimeout(tid);
		
	}
	
	var w = document.documentElement.clientWidth-50;
	var h = document.documentElement.clientHeight-170;
	var dis = h/20;
	
	var left = GetRandomNum(80,w);
	var str = "dl"+precount;
	var obj = document.getElementById(str);
	obj.style.top = "0px";
	obj.style.left = left+"px";
	obj.style.display = "block";
	
	for(i=1;i<=20;i++){	
		var ttid = window.setTimeout(changetop,100*i,str,dis,i,left);
	}
}

function show3()   
{   
	var count = document.getElementById('count');
	var p = document.getElementById('present');
	var l = document.getElementById('people');
    count.style.display="none";
    p.style.display="none";
    l.className="lg";
    document.onmousemove=function(e){
    	e=e? e:window.event;
    	if(e.clientX<=75){
    		l.style.marginLeft="0px";
    	}
    	else if(e.clientX>=document.body.clientWidth-75){
    		l.style.marginLeft=document.body.clientWidth-150+"px";
    	}
    	else{
    		l.style.marginLeft = e.clientX-75 +"px";
    	}
    }
    
    tid = setInterval(down,1000);
    

}


function onBBtn(obj) {
	obj.className = 'bbtn1';
}

function outBBtn(obj) {
	obj.className = 'bbtn';
} 

function onRBtn(obj) {
	obj.className = 'rbtn1';
}

function outRBtn(obj) {
	obj.className = 'rbtn';
} 


 
