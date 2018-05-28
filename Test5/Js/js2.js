var gruopNum;
var answer2=['B','B','B','A',
    'B','B','B','A',
    'B','C','A','A',
    'A','A','C','A'];
var q2=new Array();
var sum=16; //总题数
var i2=0; //当前题号
var submitTag=false;
var choice;
var times=0;
var checked=false;
window.onload=function () {
    init();
    document.getElementById('qusetion2')
        .setAttribute("src","../question/q2/"+q2[i2]+".html" );
}
function init(){
    for(var i=0;i<sum;i++){
        q2[i]=i+1;
    }
}
function choiceA2(){
    if(choice=='A' && checked==true){
        checked=false;
        choice="";
        document.getElementById('btn_A2').value="A";
    }
    else {
        if(checked==true){

        }
        else{
            checked=true;
            choice='A';
            document.getElementById('btn_A2').value="取消选中";
        }

    }
}
function choiceB2(){
    if(choice=='B' && checked==true){
        checked=false;
        choice="";
        document.getElementById('btn_B2').value="B";
    }
    else {
        if(checked==true){

        }
        else{
            checked=true;
            choice='B';
            document.getElementById('btn_B2').value="取消选中";
        }
    }
}
function choiceC2(){
    if(choice=='C' && checked==true){
        checked=false;
        choice="";
        document.getElementById('btn_C2').value="C";
    }
    else {
        if(checked==true){

        }
        else{
            checked=true;
            choice='C';
            document.getElementById('btn_C2').value="取消选中";
        }
    }
}
function choiceD2(){
    if(choice=='D' && checked==true){
        checked=false;
        choice="";
        document.getElementById('btn_D2').value="D";
    }
    else {
        if(checked==true){

        }
        else{
            checked=true;
            choice='D';
            document.getElementById('btn_D2').value="取消选中";
        }
    }
}

function submit2() {
    submitTag = true;
    if(times==0){
        if (choice == answer2[i2]){
            switch (choice) {
                case 'A':
                    var j=document.getElementById("judge2");
                    j.style.color="#00FF00";
                    j.innerText="回答正确，正确答案为A";
                    document.getElementById("btn_A2").style.background="#00FF00";
                    document.getElementById("btn_B2").style.background="#FF0000";
                    document.getElementById("btn_C2").style.background="#FF0000";
                    break;
                case 'B':
                    var j=document.getElementById("judge2");
                    j.style.color="#00FF00";
                    j.innerText="回答正确，正确答案为B";
                    document.getElementById("btn_A2").style.background="#FF0000";
                    document.getElementById("btn_B2").style.background="#00FF00";
                    document.getElementById("btn_C2").style.background="#FF0000";

                    break;
                case 'C':
                    var j=document.getElementById("judge2");
                    j.style.color="#00FF00";
                    j.innerText="回答正确，正确答案为C";
                    document.getElementById("btn_A2").style.background="#FF0000";
                    document.getElementById("btn_B2").style.background="#FF0000";
                    document.getElementById("btn_C2").style.background="#00FF00";
                    break;
                    }
        }
        else {
            switch (answer2[i2]){
                case 'A':
                    var j=document.getElementById("judge2");
                    j.style.color="#FF0000";
                    j.innerText="回答错误，正确答案为A";
                    document.getElementById("btn_A2").style.background="#00FF00";
                    document.getElementById("btn_B2").style.background="#FF0000";
                    document.getElementById("btn_C2").style.background="#FF0000";
                    break;
                case 'B':
                    var j=document.getElementById("judge2");
                    j.style.color="#FF0000";
                    j.innerText="回答错误，正确答案为B";
                    document.getElementById("btn_A2").style.background="#FF0000";
                    document.getElementById("btn_B2").style.background="#00FF00";
                    document.getElementById("btn_C2").style.background="#FF0000";
                    break;
                case 'C':
                    var j=document.getElementById("judge2");
                    j.style.color="#FF0000";
                    j.innerText="回答错误，正确答案为C";
                    document.getElementById("btn_A2").style.background="#FF0000";
                    document.getElementById("btn_B2").style.background="#FF0000";
                    document.getElementById("btn_C2").style.background="#00FF00";
                    break;
                    }

        }
    }
    times=1;
}
function next2() {
    if (submitTag == true) {
        if (i2 == (3)) {
            window.location.href = "../Html/choose1.html";
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





