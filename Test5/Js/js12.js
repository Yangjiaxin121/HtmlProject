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
var answer11=['A','A','C','A','B',
'B','D','C','B','C',
'B','C','B','B','A',
'A','B','B','A','B'];
var answer12=['D','D','D','D','D',
    'C','D','A','A','A',
    'A','C','C','B','C',
    'A','B','A','B','A'];
var answer13=['B','B','D','D','D',
    'D','B','D','D','C',
    'D','A','C','C','A',
    'A','C','C','D','A'];
var answer14=['D','D','D','B','D',
    'D','B','B','D','C',
    'A','A','B','C','C',
    'C','B','A','B','A'];
var answer15=['C','C','B','C','C',
    'D','A','B','D','C',
    'C','D','B','D','B',
    'D','D','A','A','B'];
var answer16=['D','D','C','D','B',
    'D','C','D','A','A',
    'C','D','D','C','D',
    'B','B','D','D','C'];
var answer17=['C','D','A','A','C',
    'A','D','D','D','C',
    'D','D','A','B','D',
    'D','D','D','C','C'];
var answer18=['A','C','C','C','D',
    'D','C','C','B','C',
    'C','C','A','C','C',
    'A','B','B','B','B'];
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
    if(qPath2==1){
        if(q1[i]>=11 && q1[i]<=20){
            document.getElementById("btn_D").style.display="none";
        }
    }
    if(qPath2==2){
        if(q1[i]>=11 && q1[i]<=20){
            document.getElementById("btn_D").style.display="none";
        }
    }
    if(qPath2==8){
        if(q1[i]>=10 && q1[i]<=20){
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
    Random1();
    qPath3=q1[i].toString();
    qPath=qPath1+qPath2+qPath23+qPath3+qPath4;
    timerName1=setInterval("timer1()",1000);
    only3();

    document.getElementById('qusetion')
        .setAttribute("src", qPath);
}
function Random1() {
    var section = q1Sum / q1Num;
    for (var i = 0; i < q1Num; i++) {
        q1[i] = Math.floor(Math.random() * section) + section * i;
    }
    if(q1[0]==0){
        Random1();
    }
}
function choiceA(){
    if(choice=='A' && checked==true){
        checked=false;
        choice="";
        document.getElementById('btn_A').value="A";
    }
    else {
        if(checked==true){

        }
        else{
            checked=true;
            choice='A';
            document.getElementById('btn_A').value="取消选中";
        }
    }
}
function choiceB(){
    if(choice=='B' && checked==true){
        checked=false;
        choice="";
        document.getElementById('btn_B').value="B";
    }
    else {
        if(checked==true){

        }
        else{
            checked=true;
            choice='B';
            document.getElementById('btn_B').value="取消选中";
        }
    }
}
function choiceC(){
    if(choice=='C' && checked==true){
        checked=false;
        choice="";
        document.getElementById('btn_C').value="C";
    }
    else {
        if(checked==true){

        }
        else{
            checked=true;
            choice='C';
            document.getElementById('btn_C').value="取消选中";
        }
    }
}
function choiceD(){
    if(choice=='D' && checked==true){
        checked=false;
        choice="";
        document.getElementById('btn_D').value="D";
    }
    else {
        if(checked==true){

        }
        else{
            checked=true;
            choice='D';
            document.getElementById('btn_D').value="取消选中";
        }
    }
}
function submit() {
    submitTag = true;

    if(times==0){
        if (choice == answer[q1[i]-1]) {
            switch (choice) {
                case 'A':
                    var j=document.getElementById("judge");
                    j.style.color="#00FF00";
                    j.innerText="回答正确，正确答案为A";
                    document.getElementById("btn_A").style.background="#00FF00";
                    document.getElementById("btn_B").style.background="#FF0000";
                    document.getElementById("btn_C").style.background="#FF0000";
                    document.getElementById("btn_D").style.background="#FF0000";
                    break;
                case 'B':
                    var j=document.getElementById("judge");
                    j.style.color="#00FF00";
                    j.innerText="回答正确，正确答案为B";
                    document.getElementById("btn_A").style.background="#FF0000";
                    document.getElementById("btn_B").style.background="#00FF00";
                    document.getElementById("btn_C").style.background="#FF0000";
                    document.getElementById("btn_D").style.background="#FF0000";
                    break;
                case 'C':
                    var j=document.getElementById("judge");
                    j.style.color="#00FF00";
                    j.innerText="回答正确，正确答案为C";
                    document.getElementById("btn_A").style.background="#FF0000";
                    document.getElementById("btn_B").style.background="#FF0000";
                    document.getElementById("btn_C").style.background="#00FF00";
                    document.getElementById("btn_D").style.background="#FF0000";
                    break;
                case 'D':
                    var j=document.getElementById("judge");
                    j.style.color="#00FF00";
                    j.innerText="回答正确，正确答案为D";
                    document.getElementById("btn_A").style.background="#FF0000";
                    document.getElementById("btn_B").style.background="#FF0000";
                    document.getElementById("btn_C").style.background="#FF0000";
                    document.getElementById("btn_D").style.background="#00FF00";
                    break;
            }
        }
        else {
            switch (answer[q1[i]-1]) {
                case 'A':
                    var j=document.getElementById("judge");
                    j.style.color="#FF0000";
                    j.innerText="回答错误，正确答案为A";
                    document.getElementById("btn_A").style.background="#00FF00";
                    document.getElementById("btn_B").style.background="#FF0000";
                    document.getElementById("btn_C").style.background="#FF0000";
                    document.getElementById("btn_D").style.background="#FF0000";
                    break;
                case 'B':
                    var j=document.getElementById("judge");
                    j.style.color="#FF0000";
                    j.innerText="回答错误，正确答案为B";
                    document.getElementById("btn_A").style.background="#FF0000";
                    document.getElementById("btn_B").style.background="#00FF00";
                    document.getElementById("btn_C").style.background="#FF0000";
                    document.getElementById("btn_D").style.background="#FF0000";
                    break;
                case 'C':
                    var j=document.getElementById("judge");
                    j.style.color="#FF0000";
                    j.innerText="回答错误，正确答案为C";
                    document.getElementById("btn_A").style.background="#FF0000";
                    document.getElementById("btn_B").style.background="#FF0000";
                    document.getElementById("btn_C").style.background="#00FF00";
                    document.getElementById("btn_D").style.background="#FF0000";
                    break;
                case 'D':
                    var j=document.getElementById("judge");
                    j.style.color="#FF0000";
                    j.innerText="回答错误，正确答案为D";
                    document.getElementById("btn_A").style.background="#FF0000";
                    document.getElementById("btn_B").style.background="#FF0000";
                    document.getElementById("btn_C").style.background="#FF0000";
                    document.getElementById("btn_D").style.background="#00FF00";
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
            if (i == 1){
                if(counts==2){
                    var html ="<input type=\"button\" value=\"进入抢答题\" onclick=\"q3();\">";
                    document.getElementById("add").innerHTML=html;
                }
                else{
                    var html ="<input type=\"button\" value=\"下一组必答题\" onclick=\"q2();\">";
                    document.getElementById("add").innerHTML=html;
                }
                }
            else {
                i += 1;
                qPath3 = q1[i].toString();

                qPath = qPath1 + qPath2 + qPath23 + qPath3 + qPath4;
                only3();

                document.getElementById('qusetion')
                    .setAttribute("src", qPath);
                document.getElementById("q").innerText = "第" + (i + 1) + "题";
                document.getElementById("judge").innerText="";
                document.getElementById('btn_A').value = "A";
                document.getElementById('btn_B').value = "B";
                document.getElementById('btn_C').value = "C";
                document.getElementById('btn_D').value = "D";
                document.getElementById('btn_A').style.background= "#FFFFFF";
                document.getElementById('btn_B').style.background= "#FFFFFF";
                document.getElementById('btn_C').style.background= "#FFFFFF";
                document.getElementById('btn_D').style.background= "#FFFFFF";
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

function timer1() {
    if(preQusetion!=i){
        timeTemp=30;
    }
    timeTemp-=1;
    document.getElementById('time1').innerHTML=timeTemp.toString()+"s";
    if(timeTemp==10){
            alert("时间还剩"+timeTemp+"s");
    }
    //跳转到下一题-----------------------------------
    if(timeTemp==0){
            if (i == 4) {
                window.location.href="../Html/answerQuicklyQuestions"+"?"+qPath2;
            }
            else {
                i += 1;
                qPath3 = q1[i].toString();
                qPath = qPath1 + qPath2 + qPath23 + qPath3 + qPath4;
                only3();
                document.getElementById('qusetion')
                    .setAttribute("src", qPath);
                timeTemp=30;
            }
        }
        preQusetion=i;
}

