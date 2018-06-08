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
var answer=["C","B","C","B","C",
"B","A","B","A","A"
]; //当前答案数组
var times=0;
var tag=true;
var tmp1;
var tmp2;
var tmp3;
var tmp4;
var tmp5;
var c1;
var c2;
var color1="#FF0000";
var count=0;
var color2="#AB82FF";
var color3="#00FFFF";
function chA() {
    c1="A";
    document.getElementById("A").style.background=color1;
    document.getElementById("B").style.background=color2;
    document.getElementById("C").style.background=color2;
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
    document.getElementById("A").style.background=color2;
    document.getElementById("B").style.background=color1;
    document.getElementById("C").style.background=color2;

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
    document.getElementById("A").style.background=color2;
    document.getElementById("B").style.background=color2;
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
    document.getElementById("2").style.background=color2;
    document.getElementById("3").style.background=color2;
    document.getElementById("4").style.background=color2;
    document.getElementById("5").style.background=color2;
    document.getElementById("6").style.background=color2;
    document.getElementById("7").style.background=color2;
    document.getElementById("8").style.background=color2;
}
function ch2() {
    c2="2";
    document.getElementById("1").style.background=color2;
    document.getElementById("2").style.background=color1;
    document.getElementById("3").style.background=color2;
    document.getElementById("4").style.background=color2;
    document.getElementById("5").style.background=color2;
    document.getElementById("6").style.background=color2;
    document.getElementById("7").style.background=color2;
    document.getElementById("8").style.background=color2;
}
function ch3() {
    c2="3";
    document.getElementById("1").style.background=color2;
    document.getElementById("2").style.background=color2;
    document.getElementById("3").style.background=color1;
    document.getElementById("4").style.background=color2;
    document.getElementById("5").style.background=color2;
    document.getElementById("6").style.background=color2;
    document.getElementById("7").style.background=color2;
    document.getElementById("8").style.background=color2;
}
function ch4() {
    c2="4";
    document.getElementById("1").style.background=color2;
    document.getElementById("2").style.background=color2;
    document.getElementById("3").style.background=color2;
    document.getElementById("4").style.background=color1;
    document.getElementById("5").style.background=color2;
    document.getElementById("6").style.background=color2;
    document.getElementById("7").style.background=color2;
    document.getElementById("8").style.background=color2;
}
function ch7() {
    c2="7";
    document.getElementById("1").style.background=color2;
    document.getElementById("2").style.background=color2;
    document.getElementById("3").style.background=color2;
    document.getElementById("4").style.background=color2;
    document.getElementById("5").style.background=color2;
    document.getElementById("6").style.background=color2;
    document.getElementById("7").style.background=color1;
    document.getElementById("8").style.background=color2;
}
function ch5() {
    c2="5";
    document.getElementById("1").style.background=color2;
    document.getElementById("2").style.background=color2;
    document.getElementById("3").style.background=color2;
    document.getElementById("4").style.background=color2;
    document.getElementById("5").style.background=color1;
    document.getElementById("6").style.background=color2;
    document.getElementById("7").style.background=color2;
    document.getElementById("8").style.background=color2;
}
function ch8() {
    c2="8";
    document.getElementById("1").style.background=color2;
    document.getElementById("2").style.background=color2;
    document.getElementById("3").style.background=color2;
    document.getElementById("4").style.background=color2;
    document.getElementById("5").style.background=color2;
    document.getElementById("6").style.background=color2;
    document.getElementById("7").style.background=color2;
    document.getElementById("8").style.background=color1;
}
function ch6() {
    c2="6";
    document.getElementById("1").style.background=color2;
    document.getElementById("2").style.background=color2;
    document.getElementById("3").style.background=color2;
    document.getElementById("4").style.background=color2;
    document.getElementById("5").style.background=color2;
    document.getElementById("6").style.background=color1;
    document.getElementById("7").style.background=color2;
    document.getElementById("8").style.background=color2;
}
function ok() {
    if(tag){
        timeTemp=30;
        timerName3=setInterval("timer3()",1000);
    }
    document.getElementById("ok").style.background="#FF0000";
    Q[count]=c1+c2;

    count++;
    if(c1=="A"){
        document.getElementById("abcdBtn").style.display="block";
    }else{
        document.getElementById("abcdBtn").style.display="none";
    }
    document.getElementById("qusetion3")
        .setAttribute("src", qPath1+c1+qPath2+c2+qPath3);
   tag=false;
    document.getElementById("btn_A3").style.background="#FFFFFF";
    document.getElementById("btn_B3").style.background="#FFFFFF";
    document.getElementById("btn_C3").style.background="#FFFFFF";
    document.getElementById("btn_D3").style.background="#FFFFFF";
    document.getElementById("judge3").innerText="";
}
function choiceA3(){
    choice='A' ;
    document.getElementById('btn_A3').style.background=color3;
    document.getElementById('btn_B3').style.background="#FFFFFF";
    document.getElementById('btn_C3').style.background="#FFFFFF";
    document.getElementById('btn_D3').style.background="#FFFFFF";
}
function choiceB3(){
    choice='B' ;
    document.getElementById('btn_A3').style.background="#FFFFFF";
    document.getElementById('btn_B3').style.background=color3;
    document.getElementById('btn_C3').style.background="#FFFFFF";
    document.getElementById('btn_D3').style.background="#FFFFFF";
}
function choiceC3(){
    choice='C' ;
    document.getElementById('btn_A3').style.background="#FFFFFF";
    document.getElementById('btn_B3').style.background="#FFFFFF";
    document.getElementById('btn_C3').style.background=color3;
    document.getElementById('btn_D3').style.background="#FFFFFF";
}
function choiceD3(){
    choice='D' ;
    document.getElementById('btn_A3').style.background="#FFFFFF";
    document.getElementById('btn_B3').style.background="#FFFFFF";
    document.getElementById('btn_C3').style.background="#FFFFFF";
    document.getElementById('btn_D3').style.background=color3;
}
// function submit3() {
//     submitTag = true;
//     window.clearInterval(timerName3);
//     if(count==8){
//
//         var html ="<input type=\"button\" value=\"进入视频题\" onclick=\"q();\">";
//         document.getElementById("add3").innerHTML=html;
//         document.getElementById("next3").style.display="none";
//     }
//     if(times==0){
//         if (choice == answer3[qPath2]){
//             switch (choice) {
//                 case 'A':
//                     var j=document.getElementById("judge3");
//                     j.style.color="51A251";
//                     j.innerText="回答正确，正确答案为A";
//                     document.getElementById("btn_A3").style.background="#55AA55";
//                     document.getElementById("btn_B3").style.background="#FF0000";
//                     document.getElementById("btn_C3").style.background="#FF0000";
//                     document.getElementById("btn_D3").style.background="#FF0000";
//                     break;
//                 case 'B':
//                     var j=document.getElementById("judge3");
//                     j.style.color="#55AA55";
//                     j.innerText="回答正确，正确答案为B";
//                     document.getElementById("btn_A3").style.background="#FF0000";
//                     document.getElementById("btn_B3").style.background="#55AA55";
//                     document.getElementById("btn_C3").style.background="#FF0000";
//                     document.getElementById("btn_D3").style.background="#FF0000";
//                     break;
//                 case 'C':
//                     var j=document.getElementById("judge3");
//                     j.style.color="#55AA55";
//                     j.innerText="回答正确，正确答案为C";
//                     document.getElementById("btn_A3").style.background="#FF0000";
//                     document.getElementById("btn_B3").style.background="#FF0000";
//                     document.getElementById("btn_C3").style.background="#55AA55";
//                     document.getElementById("btn_D3").style.background="#FF0000";
//                     break;
//                 case 'D':
//                     var j=document.getElementById("judge");
//                     j.style.color="#55AA55";
//                     j.innerText="回答正确，正确答案为D";
//                     document.getElementById("btn_A3").style.background="#FF0000";
//                     document.getElementById("btn_B3").style.background="#FF0000";
//                     document.getElementById("btn_C3").style.background="#FF0000";
//                     document.getElementById("btn_D3").style.background="#55AA55";
//                     break;
//             }
//         }
//         else {
//             switch (answer3[qPath2]) {
//                 case 'A':
//                     var j=document.getElementById("judge3");
//                     j.style.color="#FF0000";
//                     j.innerText="回答错误，正确答案为A";
//                     document.getElementById("btn_A3").style.background="#55AA55";
//                     document.getElementById("btn_B3").style.background="#FF0000";
//                     document.getElementById("btn_C3").style.background="#FF0000";
//                     document.getElementById("btn_D3").style.background="#FF0000";
//                     break;
//                 case 'B':
//                     var j=document.getElementById("judge3");
//                     j.style.color="#FF0000";
//                     j.innerText="回答错误，正确答案为B";
//                     document.getElementById("btn_A3").style.background="#FF0000";
//                     document.getElementById("btn_B3").style.background="#55AA55";
//                     document.getElementById("btn_C3").style.background="#FF0000";
//                     document.getElementById("btn_D3").style.background="#FF0000";
//                     break;
//                 case 'C':
//                     var j=document.getElementById("judge3");
//                     j.style.color="#FF0000";
//                     j.innerText="回答错误，正确答案为C";
//                     document.getElementById("btn_A3").style.background="#FF0000";
//                     document.getElementById("btn_B3").style.background="#FF0000";
//                     document.getElementById("btn_C3").style.background="#55AA55";
//                     document.getElementById("btn_D3").style.background="#FF0000";
//                     break;
//                 case 'D':
//                     var j=document.getElementById("judge");
//                     j.style.color="#FF0000";
//                     j.innerText="回答错误，正确答案为D";
//                     document.getElementById("btn_A3").style.background="#FF0000";
//                     document.getElementById("btn_B3").style.background="#FF0000";
//                     document.getElementById("btn_C3").style.background="#FF0000";
//                     document.getElementById("btn_D3").style.background="#55AA55";
//                     break;
//
//             }
//
//         }
//     }
//     times=1;
// }
function q() {
    window.location.href = "../Html/video.html";
}
// function next3() {
//
//     if(count==8){
//
//          var html ="<input type=\"button\" value=\"进入视频题\" onclick=\"q();\">";
//         document.getElementById("add3").innerHTML=html;
//         document.getElementById("next3").style.display="none";
//      }
//     document.getElementById("A").style.background=color2;
//         document.getElementById("B").style.background=color2;
//         document.getElementById("C").style.background=color2;
//         document.getElementById("1").style.background=color2;
//         document.getElementById("2").style.background=color2;
//         document.getElementById("3").style.background=color2;
//         document.getElementById("4").style.background=color2;
//         document.getElementById("5").style.background=color2;
//         document.getElementById("6").style.background=color2;
//         document.getElementById("7").style.background=color2;
//         document.getElementById("8").style.background=color2;
//         document.getElementById("ok").style.background="#FFD700";
// }
function next3(){
    window.clearInterval(timerName3);
    tag=true;
    if(c1=="B" || c1=="C"){
        document.getElementById("qusetion3")
            .setAttribute("src", "../question/answer/"+c1+"/"+c2+".html");
    }else {
        document.getElementById("qusetion3")
            .setAttribute("src", "");
        if (choice == answer[c2]) {
            switch (choice) {
                case 'A':
                    var j=document.getElementById("judge3");
                    j.style.color="#51A251";
                    j.innerText="回答正确";
                    break;
                case 'B':
                    var j=document.getElementById("judge3");
                    j.style.color="#51A251";
                    j.innerText="回答正确";
                    break;
                case 'C':
                    var j=document.getElementById("judge3");
                    j.style.color="#51A251";
                    j.innerText="回答正确";
                    break;
                case 'D':
                    var j=document.getElementById("judge3");
                    j.style.color="#51A251";
                    j.innerText="回答正确";
                    break;
            }
        }
        else {
            switch (answer[c2]) {
                case 'A':
                    var j=document.getElementById("judge3");
                    j.style.color="#FF0000";
                    j.innerText="回答错误";
                    break;
                case 'B':
                    var j=document.getElementById("judge3");
                    j.style.color="#FF0000";
                    j.innerText="回答错误";
                    break;
                case 'C':
                    var j=document.getElementById("judge3");
                    j.style.color="#FF0000";
                    j.innerText="回答错误";
                    break;
                case 'D':
                    var j=document.getElementById("judge3");
                    j.style.color="#FF0000";
                    j.innerText="回答错误，正确答案为D";
                    document.getElementById("btn_A3").style.background="#FF0000";
                    document.getElementById("btn_B3").style.background="#FF0000";
                    document.getElementById("btn_C3").style.background="#FF0000";
                    document.getElementById("btn_D3").style.background="#51A251";
                    break;

            }

        }
    }
    if(count==8){

        var html ="<input type=\"button\" value=\"进入视频题\" style=\"width: 150px\" onclick=\"q();\" class='button2'>";
        document.getElementById("add3").innerHTML=html;
        document.getElementById("next3").style.display="none";
    }
    document.getElementById("A").style.background=color2;
    document.getElementById("B").style.background=color2;
    document.getElementById("C").style.background=color2;
    document.getElementById("1").style.background=color2;
    document.getElementById("2").style.background=color2;
    document.getElementById("3").style.background=color2;
    document.getElementById("4").style.background=color2;
    document.getElementById("5").style.background=color2;
    document.getElementById("6").style.background=color2;
    document.getElementById("7").style.background=color2;
    document.getElementById("8").style.background=color2;
    document.getElementById("ok").style.background="#FFD700";
    document.getElementById('time3').style.color="#000000";


}
function timer3() {

    timeTemp-=1;
    document.getElementById('time3').innerHTML=timeTemp.toString()+"s";
    if(timeTemp==10){
        document.getElementById('time3').style.color="#FF0000";
    }
    //跳转到下一题-----------------------------------
    if(timeTemp==0){
        window.clearInterval(timerName3);
        tag=true;
        document.getElementById("A").style.background=color2;
        document.getElementById("B").style.background=color2;
        document.getElementById("C").style.background=color2;
        document.getElementById("1").style.background=color2;
        document.getElementById("2").style.background=color2;
        document.getElementById("3").style.background=color2;
        document.getElementById("4").style.background=color2;
        document.getElementById("5").style.background=color2;
        document.getElementById("6").style.background=color2;
        document.getElementById("7").style.background=color2;
        document.getElementById("8").style.background=color2;
        document.getElementById("ok").style.background="#FFD700";
        document.getElementById('time3').style.color="#000000";
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

