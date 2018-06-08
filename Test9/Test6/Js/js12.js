var finnalarray=new Array();
var counts;
var submitTag=false;
var choice;
var i=0; //题号
var preQusetion;
var timeTemp=30;
var timerName1;
var q1=new Array();
var qPath1="../question/q1/q1";
var qPath2; //组号
var qPath23="/";
var qPath3;
var qPath4=".html";
var qPath;
var q1Num=5; //必答题数量
var q1Sum=20; //每一组必答题总数.
var checked=false; //选项选中
var answer=[]; //当前答案数组
var times=0; //控制提交次数
var color2="#00FFFF";
var timerTag=1;
var answer11=['C','C','A','D','C',
'C','C','C','B','A'];
var answer12=['D','D','D','D','A',
    'A','C','A','C','C'
   ];
var answer13=['D','D','D','B','C',
    'C','B','C','A','C'
    ];
var answer14=['D','D','C','D','A',
    'B','C','C','C','B'
    ];
var answer15=['C','C','A','A','B',
    'A','C','B','B','B'
    ];
var answer16=['C','C','D','A','C',
    'C','C','B','B','A',
    ];
var answer17=['C','C','B','D','D',
    'D','C','B','B','B'
    ];
var answer18=['D','C','A','C','D',
    'B','C','A','C','B'
    ];
window.onload=function () {

    start1();

    switch (qPath2) {
        case '1':
            answer = [].concat(answer11);
            break;
        case '2':
            answer = [].concat(answer12);
            break;
        case '3':
            answer = [].concat(answer13);
            break;
        case '4':
            answer = [].concat(answer14);
            break;
        case '5':
            answer = [].concat(answer15);
            break;
        case '6':
            answer =[].concat(answer16);
            break;
        case '7':
            answer =[].concat(answer17);
            break;
        case '8':
            answer =[].concat(answer18);
            break;
    }

}
function only3() {
        if(qPath2==1 || qPath2==2 || qPath2==3 || qPath2==5 || qPath2==6 || qPath2==8){
            if(q1[i]>5){
                document.getElementById("btn_D").style.display="none";
            }
        }
    if(qPath2==4){
        if(q1[i]>7){
            document.getElementById("btn_D").style.display="none";
        }
    }
    if(qPath2==7){
        if(q1[i]>6){
            document.getElementById("btn_D").style.display="none";
        }
    }



}
function start1() {

    counts=parseInt(location.search.split("?")[1]);
    for(var j=0;j<counts;j++){
        finnalarray[j]=location.search.split("?")[2+j].toString();
    }
    qPath2=location.search.split("?")[counts+1].toString();
   q1=["5","3","2","8","7","10"];
    qPath3=q1[i].toString();
    qPath=qPath1+qPath2+qPath23+qPath3+qPath4;



    document.getElementById('qusetion')
        .setAttribute("src", qPath);
}
// function Random1() {
//     var section = q1Sum / q1Num;
//     for (var i = 0; i < q1Num; i++) {
//         q1[i] = Math.floor(Math.random() * section) + section * i;
//     }
//     if(q1[0]==0){
//         Random1();
//     }
// }
function choiceA(){
    choice='A' ;
    document.getElementById('btn_A').style.background=color2;
    document.getElementById('btn_B').style.background="#FFFFFF";
    document.getElementById('btn_C').style.background="#FFFFFF";
    document.getElementById('btn_D').style.background="#FFFFFF";
}
function choiceB(){
    choice='B' ;
    document.getElementById('btn_A').style.background="#FFFFFF";
    document.getElementById('btn_B').style.background=color2;
    document.getElementById('btn_C').style.background="#FFFFFF";
    document.getElementById('btn_D').style.background="#FFFFFF";
}
function choiceC(){
    choice='C' ;
    document.getElementById('btn_A').style.background="#FFFFFF";
    document.getElementById('btn_B').style.background="#FFFFFF";
    document.getElementById('btn_C').style.background=color2;
    document.getElementById('btn_D').style.background="#FFFFFF";
}
function choiceD(){
    choice='D' ;
    document.getElementById('btn_A').style.background="#FFFFFF";
    document.getElementById('btn_B').style.background="#FFFFFF";
    document.getElementById('btn_C').style.background="#FFFFFF";
    document.getElementById('btn_D').style.background=color2;
}

function submit() {
    submitTag = true;
    document.getElementById("submit").style.background="#FF0000";
    window.clearInterval(timerName1);
    if (i == 5){
        if(counts==8){
            document.getElementById("next").style.display="none";
            var html ="<input type=\"button\" value=\"进入抢答题\" onclick=\"q3();\" class='button1'>";
            document.getElementById("add").innerHTML=html;
        }
        else{
            document.getElementById("next").style.display="none";
            var html ="<input type=\"button\" value=\"下一组必答题\" onclick=\"q2();\" class='button1'>";
            document.getElementById("add").innerHTML=html;
        }
        }
    if(times==0){
        if (choice == answer[q1[i]-1]) {
            playT();
            switch (choice) {
                case 'A':
                    var j=document.getElementById("judge");
                    j.style.color="#51A251";
                    j.innerText="回答正确，正确答案为A";
                    document.getElementById("btn_A").style.background="#51A251";
                    document.getElementById("btn_B").style.background="#FF0000";
                    document.getElementById("btn_C").style.background="#FF0000";
                    document.getElementById("btn_D").style.background="#FF0000";
                    break;
                case 'B':
                    var j=document.getElementById("judge");
                    j.style.color="#51A251";
                    j.innerText="回答正确，正确答案为B";
                    document.getElementById("btn_A").style.background="#FF0000";
                    document.getElementById("btn_B").style.background="#51A251";
                    document.getElementById("btn_C").style.background="#FF0000";
                    document.getElementById("btn_D").style.background="#FF0000";
                    break;
                case 'C':
                    var j=document.getElementById("judge");
                    j.style.color="#51A251";
                    j.innerText="回答正确，正确答案为C";
                    document.getElementById("btn_A").style.background="#FF0000";
                    document.getElementById("btn_B").style.background="#FF0000";
                    document.getElementById("btn_C").style.background="#51A251";
                    document.getElementById("btn_D").style.background="#FF0000";
                    break;
                case 'D':
                    var j=document.getElementById("judge");
                    j.style.color="#51A251";
                    j.innerText="回答正确，正确答案为D";
                    document.getElementById("btn_A").style.background="#FF0000";
                    document.getElementById("btn_B").style.background="#FF0000";
                    document.getElementById("btn_C").style.background="#FF0000";
                    document.getElementById("btn_D").style.background="#51A251";
                    break;
            }
        }
        else {
            playF();
            switch (answer[q1[i]-1]) {
                case 'A':
                    var j=document.getElementById("judge");
                    j.style.color="#FF0000";
                    j.innerText="回答错误，正确答案为A";
                    document.getElementById("btn_A").style.background="#51A251";
                    document.getElementById("btn_B").style.background="#FF0000";
                    document.getElementById("btn_C").style.background="#FF0000";
                    document.getElementById("btn_D").style.background="#FF0000";
                    break;
                case 'B':
                    var j=document.getElementById("judge");
                    j.style.color="#FF0000";
                    j.innerText="回答错误，正确答案为B";
                    document.getElementById("btn_A").style.background="#FF0000";
                    document.getElementById("btn_B").style.background="#51A251";
                    document.getElementById("btn_C").style.background="#FF0000";
                    document.getElementById("btn_D").style.background="#FF0000";
                    break;
                case 'C':
                    var j=document.getElementById("judge");
                    j.style.color="#FF0000";
                    j.innerText="回答错误，正确答案为C";
                    document.getElementById("btn_A").style.background="#FF0000";
                    document.getElementById("btn_B").style.background="#FF0000";
                    document.getElementById("btn_C").style.background="#51A251";
                    document.getElementById("btn_D").style.background="#FF0000";
                    break;
                case 'D':
                    var j=document.getElementById("judge");
                    j.style.color="#FF0000";
                    j.innerText="回答错误，正确答案为D";
                    document.getElementById("btn_A").style.background="#FF0000";
                    document.getElementById("btn_B").style.background="#FF0000";
                    document.getElementById("btn_C").style.background="#FF0000";
                    document.getElementById("btn_D").style.background="#51A251";
                    break;

            }

        }
    }
    times=1;
}
function q3() {
    window.location.href="../Html/answerQuicklyQuestions.html"
}

function q2() {

    var temp="";
    for(var i=0;i<finnalarray.length;i++){
        temp=temp+"?"+finnalarray[i];
    }
    window.location.href="../Html/chooseQ.html"+"?"+counts+temp;
}
function next() {
        if (submitTag == true) {


            i += 1;
            qPath3 = q1[i].toString();

            qPath = qPath1 + qPath2 + qPath23 + qPath3 + qPath4;

            only3();
            document.getElementById('qusetion')
                .setAttribute("src", qPath);
            document.getElementById("q").innerText = "第" + (i + 1) + "题";
            document.getElementById("judge").innerText = "";
            document.getElementById('btn_A').value = "A";
            document.getElementById('btn_B').value = "B";
            document.getElementById('btn_C').value = "C";
            document.getElementById('btn_D').value = "D";
            document.getElementById('btn_A').style.background = "#FFFFFF";
            document.getElementById('btn_B').style.background = "#FFFFFF";
            document.getElementById('btn_C').style.background = "#FFFFFF";
            document.getElementById('btn_D').style.background = "#FFFFFF";
            document.getElementById('time1').style.color = "#000000";
            document.getElementById("submit").style.background="#AB82FF";
            document.getElementById('time1').style.color= "#000000";
            checked = false;
            choice = "";
            submitTag = false;
            timerTag=1;
            times = 0;

        }
        else {
            alert("先提交答案，才能进入下一题");
        }
}

// function timer1() {
//     if(preQusetion!=i){
//         timeTemp=30;
//     }
//     timeTemp-=1;
//     document.getElementById('time1').innerHTML=timeTemp.toString()+"s";
//     if(timeTemp==10){
//         document.getElementById('time1').style.color="#FF0000";
//     }
//     //跳转到下一题-----------------------------------
//     if(timeTemp==0){
//             if (i == 5) {
//                 if(counts==8){
//                     window.clearInterval(timerName1);
//                     document.getElementById("next").style.display="none";
//
//                     var html ="<input type=\"button\" value=\"进入抢答题\" onclick=\"q3();\" class='button1'>";
//                     document.getElementById("add").innerHTML=html;
//                 }
//                 else{
//                     window.clearInterval(timerName1);
//                     document.getElementById("next").style.display="none";
//                     var html ="<input type=\"button\" value=\"下一组必答题\" onclick=\"q2();\" class='button1'>";
//                     document.getElementById("add").innerHTML=html;
//                 }
//             }
//             else {
//                 i += 1;
//                 qPath3 = q1[i].toString();
//                 qPath = qPath1 + qPath2 + qPath23 + qPath3 + qPath4;
//
//                 document.getElementById('qusetion')
//                     .setAttribute("src", qPath);
//                 document.getElementById("q").innerText = "第" + (i + 1) + "题";
//                 document.getElementById("judge").innerText="";
//                 document.getElementById('btn_A').value = "A";
//                 document.getElementById('btn_B').value = "B";
//                 document.getElementById('btn_C').value = "C";
//                 document.getElementById('btn_D').value = "D";
//                 document.getElementById('btn_A').style.background= "#FFFFFF";
//                 document.getElementById('btn_B').style.background= "#FFFFFF";
//                 document.getElementById('btn_C').style.background= "#FFFFFF";
//                 document.getElementById('btn_D').style.background= "#FFFFFF";
//                 document.getElementById('time1').style.color= "#000000";
//                 checked=false;
//                 choice="";
//                 submitTag = false;
//                 times=0;
//                 timeTemp=30;
//             }
//         }
//         preQusetion=i;
// }
function playT() {
    var e=document.getElementById("audio1");
    e.setAttribute("src","../Resource/audio/bg1.mp3");

    var start = 0;
    e.addEventListener("ended",function() {
        start++;
        start == times && e.pause();
    });
}
function playF() {
    var e=document.getElementById("audio1");
    e.setAttribute("src","../Resource/audio/bg2.mp3");

    var start = 0;
    e.addEventListener("ended",function() {
        start++;
        start == times && e.pause();
    });
}
function startT1() {
    if(timerTag==1){
        timerName1=setInterval("timer1()",1000);
        timerTag=0;
    }

}
function timer1() {
    if (preQusetion != i) {
        timeTemp = 15;
    }
    timeTemp -= 1;
    document.getElementById('time1').innerHTML = timeTemp.toString() + "s";
    if (timeTemp == 10) {
        document.getElementById('time1').style.color = "#FF0000";
    }
    //跳转到下一题-----------------------------------
    if (timeTemp == 0) {
        if (i == 5) {
            if (counts == 8) {
                document.getElementById("next").style.display = "none";
                var html = "<input type=\"button\" value=\"进入抢答题\" onclick=\"q3();\" class='button1'>";
                document.getElementById("add").innerHTML = html;
            }
            else {
                document.getElementById("next").style.display = "none";
                var html = "<input type=\"button\" value=\"下一组必答题\" onclick=\"q2();\" class='button1'>";
                document.getElementById("add").innerHTML = html;
            }
        }
        else {
            window.clearInterval(timerName1);
        }

    }

    preQusetion = i;
}

