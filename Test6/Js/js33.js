var difficulty;

var qPath1="../question/q3/";

var qPath2="/";
var qPath3=".html";
var sum=6; //题目总数
var Q=new Array();

var submitTag=false;
var choice="";
var i3=0; //题号
var checked=false;
var timeTemp=30;
var timerName3;
var answer3=[]; //当前答案数组
var times=0;

var tmp1;
var tmp2;
var tmp3;
var tmp4;
var tmp5;
var c1;
var c2;
var color1="#FF0000";
var count=0;
function chA() {
    c1="A";
    document.getElementById("A").style.background=color1;
    document.getElementById("B").style.background="#FFFFFF";
    document.getElementById("C").style.background="#FFFFFF";
    document.getElementById("1").style.display="inline";
    document.getElementById("2").style.display="inline";
    document.getElementById("3").style.display="inline";
    document.getElementById("4").style.display="inline";
    document.getElementById("5").style.display="inline";
    document.getElementById("6").style.display="inline";
    document.getElementById("7").style.display="inline";
    document.getElementById("8").style.display="inline";
    delete3();


}
function chB() {
    c1="B";
    document.getElementById("A").style.background="#FFFFFF";
    document.getElementById("B").style.background=color1;
    document.getElementById("C").style.background="#FFFFFF";

    document.getElementById("1").style.display="inline";
    document.getElementById("2").style.display="inline";
    document.getElementById("3").style.display="inline";
    document.getElementById("4").style.display="inline";
    document.getElementById("5").style.display="inline";
    document.getElementById("6").style.display="inline";
    document.getElementById("7").style.display="inline";
    document.getElementById("8").style.display="inline";
    delete3();
}
function chC() {
    c1="C";
    document.getElementById("A").style.background="#FFFFFF";
    document.getElementById("B").style.background="#FFFFFF";
    document.getElementById("C").style.background=color1;
    document.getElementById("1").style.display="inline";
    document.getElementById("2").style.display="inline";
    document.getElementById("3").style.display="inline";
    document.getElementById("4").style.display="inline";
    document.getElementById("5").style.display="inline";
    document.getElementById("6").style.display="inline";
    document.getElementById("7").style.display="inline";
    document.getElementById("8").style.display="inline";
    delete3();
}
function ch1() {
    c2="1";
    document.getElementById("1").style.background=color1;
    document.getElementById("2").style.background="#FFFFFF";
    document.getElementById("3").style.background="#FFFFFF";
    document.getElementById("4").style.background="#FFFFFF";
    document.getElementById("5").style.background="#FFFFFF";
    document.getElementById("6").style.background="#FFFFFF";
    document.getElementById("7").style.background="#FFFFFF";
    document.getElementById("8").style.background="#FFFFFF";
}
function ch2() {
    c2="2";
    document.getElementById("1").style.background="#FFFFFF";
    document.getElementById("2").style.background=color1;
    document.getElementById("3").style.background="#FFFFFF";
    document.getElementById("4").style.background="#FFFFFF";
    document.getElementById("5").style.background="#FFFFFF";
    document.getElementById("6").style.background="#FFFFFF";
    document.getElementById("7").style.background="#FFFFFF";
    document.getElementById("8").style.background="#FFFFFF";
}
function ch3() {
    c2="3";
    document.getElementById("1").style.background="#FFFFFF";
    document.getElementById("2").style.background="#FFFFFF";
    document.getElementById("3").style.background=color1;
    document.getElementById("4").style.background="#FFFFFF";
    document.getElementById("5").style.background="#FFFFFF";
    document.getElementById("6").style.background="#FFFFFF";
    document.getElementById("7").style.background="#FFFFFF";
    document.getElementById("8").style.background="#FFFFFF";
}
function ch4() {
    c2="4";
    document.getElementById("1").style.background="#FFFFFF";
    document.getElementById("2").style.background="#FFFFFF";
    document.getElementById("3").style.background="#FFFFFF";
    document.getElementById("4").style.background=color1;
    document.getElementById("5").style.background="#FFFFFF";
    document.getElementById("6").style.background="#FFFFFF";
    document.getElementById("7").style.background="#FFFFFF";
    document.getElementById("8").style.background="#FFFFFF";
}
function ch7() {
    c2="7";
    document.getElementById("1").style.background="#FFFFFF";
    document.getElementById("2").style.background="#FFFFFF";
    document.getElementById("3").style.background="#FFFFFF";
    document.getElementById("4").style.background="#FFFFFF";
    document.getElementById("5").style.background="#FFFFFF";
    document.getElementById("6").style.background="#FFFFFF";
    document.getElementById("7").style.background=color1;
    document.getElementById("8").style.background="#FFFFFF";
}
function ch5() {
    c2="5";
    document.getElementById("1").style.background="#FFFFFF";
    document.getElementById("2").style.background="#FFFFFF";
    document.getElementById("3").style.background="#FFFFFF";
    document.getElementById("4").style.background="#FFFFFF";
    document.getElementById("5").style.background=color1;
    document.getElementById("6").style.background="#FFFFFF";
    document.getElementById("7").style.background="#FFFFFF";
    document.getElementById("8").style.background="#FFFFFF";
}
function ch8() {
    c2="8";
    document.getElementById("1").style.background="#FFFFFF";
    document.getElementById("2").style.background="#FFFFFF";
    document.getElementById("3").style.background="#FFFFFF";
    document.getElementById("4").style.background="#FFFFFF";
    document.getElementById("5").style.background="#FFFFFF";
    document.getElementById("6").style.background="#FFFFFF";
    document.getElementById("7").style.background="#FFFFFF";
    document.getElementById("8").style.background=color1;
}
function ch6() {
    c2="6";
    document.getElementById("1").style.background="#FFFFFF";
    document.getElementById("2").style.background="#FFFFFF";
    document.getElementById("3").style.background="#FFFFFF";
    document.getElementById("4").style.background="#FFFFFF";
    document.getElementById("5").style.background="#FFFFFF";
    document.getElementById("6").style.background=color1;
    document.getElementById("7").style.background="#FFFFFF";
    document.getElementById("8").style.background="#FFFFFF";
}
function ok() {

    Q[count]=c1+c2;
    document.getElementById("choose").style.display="none";
    document.getElementById("container").style.display="block";
    count++;
    document.getElementById("qusetion3")
        .setAttribute("src", qPath1+c1+qPath2+c2+qPath3);
    timerName3=setInterval("timer3()",1000);
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
    if(count==8){
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

    if (submitTag == true) {
        document.getElementById("choose").style.display="block";
        document.getElementById("container").style.display="none";
        document.getElementById("A").style.background="#FFFFFF";
        document.getElementById("B").style.background="#FFFFFF";
        document.getElementById("C").style.background="#FFFFFF";
        document.getElementById("1").style.background="#FFFFFF";
        document.getElementById("2").style.background="#FFFFFF";
        document.getElementById("3").style.background="#FFFFFF";
        document.getElementById("4").style.background="#FFFFFF";
        document.getElementById("5").style.background="#FFFFFF";
        document.getElementById("6").style.background="#FFFFFF";
        document.getElementById("7").style.background="#FFFFFF";
        document.getElementById("8").style.background="#FFFFFF";
        window.clearInterval(timerName3);
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
function delete3(){
    for(var i=0;i<Q.length;i++){
        for(var j=1;j<=8;j++){
            if((c1+j)==Q[i]){
                document.getElementById(j).style.display="none";
            }
        }
    }

}

