var difficulty;
var category;
var qPath1;
var qPath2;
var qPath3=".html";
var sum=6; //题目总数
var newQ=new Array();
var submitTag=false;
var choice="";
var i3=0; //题号
var checked=false;
var timeTemp=30;
var timerName3;
var answer3=[]; //当前答案数组
var times=0;
var count;
var tmp1;
var tmp2;
var tmp3;
var tmp4;
var tmp5;
window.onload=function (){
    tmp1=location.search.split("?")[1].toString();
    tmp2=location.search.split("?")[2].toString();
    tmp3=location.search.split("?")[3].toString();
    tmp4=location.search.split("?")[4].toString();
    tmp5=parseInt(location.search.split("?")[5]);
    difficulty=location.search.split("?")[6].toString();
    category=location.search.split("?")[7].toString();
    init();
    timerName3=setInterval("timer3()",1000);
    Random3();
    document.getElementById("q3Num").innerText="第"+tmp5+"道"
    document.getElementById("qusetion3")
        .setAttribute("src", qPath1+qPath2+qPath3);

}
function Random3() {
    switch (tmp5){
        case 1:
            qPath2=tmp1;
            break;
        case 2:
            qPath2=tmp2;
            break;
        case 3:
            qPath2=tmp3;
            break;
        case 4:
            qPath2=tmp4;
            break;
        case 5:
            qPath2=tmp1;
            break;
        case 6:
            qPath2=tmp2;
            break;
        case 7:
            qPath2=tmp3;
            break;
        case 8:
            qPath2=tmp4;
            break;
            }
}


function init() {
    switch (difficulty+category) {
        case"easy1":
            qPath1="../question/q3/1/easy/";
            answer3=['A','C','A','C','B' ];
            break;
        case"easy2":
            qPath1="../question/q3/2/easy/";
            answer3=['A','B','A','B','A' ];
            break;
        case"easy3":
            qPath1="../question/q3/3/easy/";
            answer3=['C','A','C','C','C'];
            break;
        case"easy4":
            qPath1="../question/q3/4/easy/";
            answer3=['A','B','B','A','B'];
            break;
        case"easy5":
            qPath1="../question/q3/5/easy/";
            answer3=['B','D','C','B','C'];
            break;
        case"easy6":
            qPath1="../question/q3/6/easy/";
            answer3=['B','B','B','A','C' ];
            break;
        case"normal1":
            qPath1="../question/q3/1/normal/";
            answer3=['B','C','B','A','A'];
            break;
        case"normal2":
            qPath1="../question/q3/2/normal/";
            answer3=['C','C','B','C','B'];
            break;
        case"normal3":
            qPath1="../question/q3/3/normal/";
            answer3=['B','A','C','B','C'];
            break;
        case"normal4":
            qPath1="../question/q3/4/normal/";
            answer3=['A','C','C','B','C'];
            break;
        case"normal5":
            qPath1="../question/q3/5/normal/";
            answer3=['C','D','A','A','A'];
            break;
        case"normal6":
            qPath1="../question/q3/6/normal/";
            answer3=['C','C','C','C','D'];
            break;
        case"hard1":
            qPath1="../question/q3/1/hard/";
            answer3=[ 'C','A','B','C','A' ];
            break;
        case"hard2":
            qPath1="../question/q3/2/hard/";
            answer3=['C','B','C','A','C'];
            break;
        case"hard3":
            qPath1="../question/q3/3/hard/";
            break;
        case"hard4":
            qPath1="../question/q3/4/hard/";
            answer3=['B','A','A','A','C'];
            break;
        case"hard5":
            qPath1="../question/q3/5/hard/";
            answer3=['C','C','B','C','C'];
            break;
        case"hard6":
            qPath1="../question/q3/6/hard/";
            answer3=[ 'C','A','C','C','C'];
            break;
    }
}
function choiceA3(){
    if(choice=='A' && checked==true){
        checked=false;
        choice="";
        document.getElementById('btn_A3').value="A";
    }
    else {
        if(checked==true){

        }
        else{
            checked=true;
            choice='A';
            document.getElementById('btn_A3').value="取消选中";
        }
    }
}
function choiceB3(){
    if(choice=='B' && checked==true){
        checked=false;
        choice="";
        document.getElementById('btn_B3').value="B";
    }
    else {
        if(checked==true){

        }
        else{
            checked=true;
            choice='B';
            document.getElementById('btn_B3').value="取消选中";
        }
    }
}
function choiceC3(){
    if(choice=='C' && checked==true){
        checked=false;
        choice="";
        document.getElementById('btn_C3').value="C";
    }
    else {
        if(checked==true){

        }
        else{
            checked=true;
            choice='C';
            document.getElementById('btn_C3').value="取消选中";
        }
    }
}
function choiceD3(){
    if(choice=='D' && checked==true){
        checked=false;
        choice="";
        document.getElementById('btn_D3').value="D";
    }
    else {
        if(checked==true){

        }
        else{
            checked=true;
            choice='D';
            document.getElementById('btn_D3').value="取消选中";
        }
    }
}
function submit3() {
    submitTag = true;
    if(tmp5==8){
        var html ="<input type=\"button\" value=\"进入视频题\" onclick=\"q();\">";
        document.getElementById("add3").innerHTML=html;
        document.getElementById("next3").style.display="none";
    }
    if(times==0){
        if (choice == answer3[qPath2]){
            switch (choice) {
                case 'A':
                    var j=document.getElementById("judge3");
                    j.style.color="51A251";
                    j.innerText="回答正确，正确答案为A";
                    document.getElementById("btn_A3").style.background="#55AA55";
                    document.getElementById("btn_B3").style.background="#FF0000";
                    document.getElementById("btn_C3").style.background="#FF0000";
                    document.getElementById("btn_D3").style.background="#FF0000";
                    break;
                case 'B':
                    var j=document.getElementById("judge3");
                    j.style.color="#55AA55";
                    j.innerText="回答正确，正确答案为B";
                    document.getElementById("btn_A3").style.background="#FF0000";
                    document.getElementById("btn_B3").style.background="#55AA55";
                    document.getElementById("btn_C3").style.background="#FF0000";
                    document.getElementById("btn_D3").style.background="#FF0000";
                    break;
                case 'C':
                    var j=document.getElementById("judge3");
                    j.style.color="#55AA55";
                    j.innerText="回答正确，正确答案为C";
                    document.getElementById("btn_A3").style.background="#FF0000";
                    document.getElementById("btn_B3").style.background="#FF0000";
                    document.getElementById("btn_C3").style.background="#55AA55";
                    document.getElementById("btn_D3").style.background="#FF0000";
                    break;
                case 'D':
                    var j=document.getElementById("judge");
                    j.style.color="#55AA55";
                    j.innerText="回答正确，正确答案为D";
                    document.getElementById("btn_A3").style.background="#FF0000";
                    document.getElementById("btn_B3").style.background="#FF0000";
                    document.getElementById("btn_C3").style.background="#FF0000";
                    document.getElementById("btn_D3").style.background="#55AA55";
                    break;
                    }
        }
        else {
            switch (answer3[qPath2]) {
                case 'A':
                    var j=document.getElementById("judge3");
                    j.style.color="#FF0000";
                    j.innerText="回答错误，正确答案为A";
                    document.getElementById("btn_A3").style.background="#55AA55";
                    document.getElementById("btn_B3").style.background="#FF0000";
                    document.getElementById("btn_C3").style.background="#FF0000";
                    document.getElementById("btn_D3").style.background="#FF0000";
                    break;
                case 'B':
                    var j=document.getElementById("judge3");
                    j.style.color="#FF0000";
                    j.innerText="回答错误，正确答案为B";
                    document.getElementById("btn_A3").style.background="#FF0000";
                    document.getElementById("btn_B3").style.background="#55AA55";
                    document.getElementById("btn_C3").style.background="#FF0000";
                    document.getElementById("btn_D3").style.background="#FF0000";
                    break;
                case 'C':
                    var j=document.getElementById("judge3");
                    j.style.color="#FF0000";
                    j.innerText="回答错误，正确答案为C";
                    document.getElementById("btn_A3").style.background="#FF0000";
                    document.getElementById("btn_B3").style.background="#FF0000";
                    document.getElementById("btn_C3").style.background="#55AA55";
                    document.getElementById("btn_D3").style.background="#FF0000";
                    break;
                case 'D':
                    var j=document.getElementById("judge");
                    j.style.color="#FF0000";
                    j.innerText="回答错误，正确答案为D";
                    document.getElementById("btn_A3").style.background="#FF0000";
                    document.getElementById("btn_B3").style.background="#FF0000";
                    document.getElementById("btn_C3").style.background="#FF0000";
                    document.getElementById("btn_D3").style.background="#55AA55";
                    break;

            }

        }
    }
    times=1;
}
function q() {
    window.location.href = "../Html/video.html";
}
function next3() {
    tmp5++;
    if (submitTag == true) {
            // if(tmp5==3){
            //     var html ="<input type=\"button\" value=\"进入视频题\" onclick=\"q();\">";
            //     document.getElementById("add3").innerHTML=html;
            //     }
        window.location.href = "../Html/choose1.html"+"?"+tmp1
                    +"?"+tmp2+"?"+tmp3+"?"+tmp4+"?"+tmp5.toString();

            }

    else {
        alert("先提交答案，才能进入下一题");
    }
}
function timer3() {



    timeTemp-=1;
    document.getElementById('time3').innerHTML=timeTemp.toString()+"s";
    if(timeTemp==10){
        document.getElementById('time3').style.color="#FF0000";
    }
    //跳转到下一题-----------------------------------
    if(timeTemp==0){

        window.location.href = "../Html/video.html";


    }

}