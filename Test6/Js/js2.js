var gruopNum;
var answer2=['A','C','A','C', 'C'
    ,'A','B','C', 'C','A',
    'C','A', 'A','C','C',
    'C'];
var q2=new Array();
var sum=16; //总题数
var i2=0; //当前题号
var submitTag=false;
var choice;
var times=0;
var checked=false;
var newQ=new Array();
var preQusetion;
var timeTemp;
var timerName2;
var timerTag=1;
var color2="#00FFFF";;
window.onload=function () {
    init();
    document.getElementById('qusetion2')
        .setAttribute("src","../question/q2/"+q2[i2]+".html" );
}
function start2() {
    timerName2=setInterval("timer2()",1000);
}
function stop2() {
    window.clearInterval(timerName2);
    timeTemp=30;
    document.getElementById('time2').innerHTML=timeTemp.toString()+"s";
}
function init(){
    for(var i=0;i<sum;i++){
        q2[i]=i+1;
    }
}
function choiceA2(){
    choice='A' ;
    document.getElementById('btn_A2').style.background=color2;
    document.getElementById('btn_B2').style.background="#FFFFFF";
    document.getElementById('btn_C2').style.background="#FFFFFF";

}
function choiceB2(){
    choice='D' ;
    document.getElementById('btn_A2').style.background="#FFFFFF";
    document.getElementById('btn_B2').style.background=color2;
    document.getElementById('btn_C2').style.background="#FFFFFF";

}
function choiceC2(){
    choice='D' ;
    document.getElementById('btn_A2').style.background="#FFFFFF";
    document.getElementById('btn_B2').style.background="#FFFFFF";
    document.getElementById('btn_C2').style.background=color2;

}


function submit2() {
    submitTag = true;
    if(times==0){
        if (choice == answer2[i2]){
            switch (choice) {
                case 'A':
                    var j=document.getElementById("judge2");
                    j.style.color="#51A251";
                    j.innerText="回答正确，正确答案为A";
                    document.getElementById("btn_A2").style.background="#51A251";
                    document.getElementById("btn_B2").style.background="#FF0000";
                    document.getElementById("btn_C2").style.background="#FF0000";
                    break;
                case 'B':
                    var j=document.getElementById("judge2");
                    j.style.color="#51A251";
                    j.innerText="回答正确，正确答案为B";
                    document.getElementById("btn_A2").style.background="#FF0000";
                    document.getElementById("btn_B2").style.background="#51A251";
                    document.getElementById("btn_C2").style.background="#FF0000";

                    break;
                case 'C':
                    var j=document.getElementById("judge2");
                    j.style.color="#51A251";
                    j.innerText="回答正确，正确答案为C";
                    document.getElementById("btn_A2").style.background="#FF0000";
                    document.getElementById("btn_B2").style.background="#FF0000";
                    document.getElementById("btn_C2").style.background="#51A251";
                    break;
                    }
        }
        else {
            switch (answer2[i2]){
                case 'A':
                    var j=document.getElementById("judge2");
                    j.style.color="#FF0000";
                    j.innerText="回答错误，正确答案为A";
                    document.getElementById("btn_A2").style.background="#51A251";
                    document.getElementById("btn_B2").style.background="#FF0000";
                    document.getElementById("btn_C2").style.background="#FF0000";
                    break;
                case 'B':
                    var j=document.getElementById("judge2");
                    j.style.color="#FF0000";
                    j.innerText="回答错误，正确答案为B";
                    document.getElementById("btn_A2").style.background="#FF0000";
                    document.getElementById("btn_B2").style.background="#51A251";
                    document.getElementById("btn_C2").style.background="#FF0000";
                    break;
                case 'C':
                    var j=document.getElementById("judge2");
                    j.style.color="#FF0000";
                    j.innerText="回答错误，正确答案为C";
                    document.getElementById("btn_A2").style.background="#FF0000";
                    document.getElementById("btn_B2").style.background="#FF0000";
                    document.getElementById("btn_C2").style.background="#51A251";
                    break;
                    }

        }
    }
    times=1;
}
// function Randon4() {
//     newQ[0]=Math.floor(Math.random()*(sum-1)+1);
//     newQ[1]=Math.floor(Math.random()*(sum-1)+1);
//     if(newQ[1]==newQ[0]){
//         Randon4();
//     }
//     newQ[2]=Math.floor(Math.random()*(sum-1)+1);
//     if(newQ[2]==newQ[0] || newQ[2]==newQ[1]){
//         Randon4();
//     }
//     newQ[3]=Math.floor(Math.random()*(sum-1)+1);
//     if(newQ[3]==newQ[0] || newQ[3]==newQ[1] || newQ[3]==newQ[2]){
//         Randon4();
//     }
// }
function next2() {
    if (submitTag == true) {
        if (i2 == (sum-1)) {
            // Randon4();
            window.location.href = "../Html/choose1.html"+"?"+"2"
                +"?"+"3"+"?"+"5"+"?"+"1"+"?1";
        }
        else {
            i2 += 1;
            document.getElementById('qusetion2')
                .setAttribute("src","../question/q2/"+q2[i2]+".html" );
            document.getElementById("q2").innerText = "第" + (i2+ 1) + "题";
            document.getElementById("judge2").innerText="";
            document.getElementById('btn_A2').value = "A";
            document.getElementById('btn_B2').value = "B";
            document.getElementById('btn_C2').value = "C";
            document.getElementById('btn_A2').style.background= "#FFFFFF";
            document.getElementById('btn_B2').style.background= "#FFFFFF";
            document.getElementById('btn_C2').style.background= "#FFFFFF";
            document.getElementById('time2').style.color= "#000000";
            checked=false;
            choice="";
            submitTag = false;
            times=0;

        }
    }
    else {
        alert("先提交答案，才能进入下一题");
    }
}
function timer2() {
    if(preQusetion!=i2){
        timeTemp=30;
    }
    timeTemp-=1;
    document.getElementById('time2').innerHTML=timeTemp.toString()+"s";
    if(timeTemp==10){
        document.getElementById('time2').style.color= "#FF0000";
    }
    //跳转到下一题-----------------------------------
    if(timeTemp==0){
        if (i2 == (sum-1)) {
            // Randon4();
            window.location.href = "../Html/choose1.html"+"?"+"2"
                +"?"+"3"+"?"+"5"+"?"+"1"+"?1";
        }
        else {
            i2 += 1;
            document.getElementById('qusetion2')
                .setAttribute("src","../question/q2/"+q2[i2]+".html" );
            document.getElementById("q2").innerText = "第" + (i2+ 1) + "题";
            document.getElementById("judge2").innerText="";
            document.getElementById('btn_A2').value = "A";
            document.getElementById('btn_B2').value = "B";
            document.getElementById('btn_C2').value = "C";
            document.getElementById('btn_A2').style.background= "#FFFFFF";
            document.getElementById('btn_B2').style.background= "#FFFFFF";
            document.getElementById('btn_C2').style.background= "#FFFFFF";
            document.getElementById('time2').style.color= "#000000";
            checked=false;
            choice="";
            submitTag = false;
            times=0;
            timeTemp=30;
        }
    }
    preQusetion=i2;
}





