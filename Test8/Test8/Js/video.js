var choice="";//选择项
var checked=false;
var videoPath;
var count=0;
function video1(){
    choice='1';
    document.getElementById('btn_1').style.background="#FF0000";
    document.getElementById('btn_2').style.background="#FF00FF";
    document.getElementById('btn_3').style.background="#FF00FF";
    document.getElementById('btn_4').style.background="#FF00FF";
    document.getElementById('btn_5').style.background="#FF00FF";
    document.getElementById('btn_6').style.background="#FF00FF";
    document.getElementById('btn_7').style.background="#FF00FF";
    document.getElementById('btn_8').style.background="#FF00FF";
}
function video2(){
    choice='2';
    document.getElementById('btn_1').style.background="#FF00FF";
    document.getElementById('btn_2').style.background="#FF0000";
    document.getElementById('btn_3').style.background="#FF00FF";
    document.getElementById('btn_4').style.background="#FF00FF";
    document.getElementById('btn_5').style.background="#FF00FF";
    document.getElementById('btn_6').style.background="#FF00FF";
    document.getElementById('btn_7').style.background="#FF00FF";
    document.getElementById('btn_8').style.background="#FF00FF";
}
function video3(){
    choice='3';
    document.getElementById('btn_1').style.background="#FF00FF";
    document.getElementById('btn_2').style.background="#FF00FF";
    document.getElementById('btn_3').style.background="#FF0000";
    document.getElementById('btn_4').style.background="#FF00FF";
    document.getElementById('btn_5').style.background="#FF00FF";
    document.getElementById('btn_6').style.background="#FF00FF";
    document.getElementById('btn_7').style.background="#FF00FF";
    document.getElementById('btn_8').style.background="#FF00FF";
}
function video4(){
    choice='4';
    document.getElementById('btn_1').style.background="#FF00FF";
    document.getElementById('btn_2').style.background="#FF00FF";
    document.getElementById('btn_3').style.background="#FF00FF";
    document.getElementById('btn_4').style.background="#FF0000";
    document.getElementById('btn_5').style.background="#FF00FF";
    document.getElementById('btn_6').style.background="#FF00FF";
    document.getElementById('btn_7').style.background="#FF00FF";
    document.getElementById('btn_8').style.background="#FF00FF";
}
function video5(){
    choice='5';
    document.getElementById('btn_1').style.background="#FF00FF";
    document.getElementById('btn_2').style.background="#FF00FF";
    document.getElementById('btn_3').style.background="#FF00FF";
    document.getElementById('btn_4').style.background="#FF00FF";
    document.getElementById('btn_5').style.background="#FF0000";
    document.getElementById('btn_6').style.background="#FF00FF";
    document.getElementById('btn_7').style.background="#FF00FF";
    document.getElementById('btn_8').style.background="#FF00FF";
}
function video6(){
    choice='6';
    document.getElementById('btn_1').style.background="#FF00FF";
    document.getElementById('btn_2').style.background="#FF00FF";
    document.getElementById('btn_3').style.background="#FF00FF";
    document.getElementById('btn_4').style.background="#FF00FF";
    document.getElementById('btn_5').style.background="#FF00FF";
    document.getElementById('btn_6').style.background="#FF0000";
    document.getElementById('btn_7').style.background="#FF00FF";
    document.getElementById('btn_8').style.background="#FF00FF";
}
function video7(){
    choice='7';
    document.getElementById('btn_1').style.background="#FF00FF";
    document.getElementById('btn_2').style.background="#FF00FF";
    document.getElementById('btn_3').style.background="#FF00FF";
    document.getElementById('btn_4').style.background="#FF00FF";
    document.getElementById('btn_5').style.background="#FF00FF";
    document.getElementById('btn_6').style.background="#FF00FF";
    document.getElementById('btn_7').style.background="#FF0000";
    document.getElementById('btn_8').style.background="#FF00FF";
}
function video8(){
    choice='8';
    document.getElementById('btn_1').style.background="#FF00FF";
    document.getElementById('btn_2').style.background="#FF00FF";
    document.getElementById('btn_3').style.background="#FF00FF";
    document.getElementById('btn_4').style.background="#FF00FF";
    document.getElementById('btn_5').style.background="#FF00FF";
    document.getElementById('btn_6').style.background="#FF00FF";
    document.getElementById('btn_7').style.background="#FF00FF";
    document.getElementById('btn_8').style.background="#FF0000";
}
function showAnswer() {
    document.getElementById("showAnswer").style.display="none";
    document.getElementById("video").style.display="none";
    document.getElementById("test").setAttribute("src","../question/q4/answer/"+choice+".html");
    document.getElementById("test").style.display="block";
    choice="";
}
function videoSubmit(){
    document.getElementById("test").style.display="none";
    document.getElementById("video").style.display="block";
    videoPath="../Resource/video/"+choice+".ogg";
    document.getElementById("video")
        .setAttribute("src",videoPath);
    document.getElementById("btn_"+choice).style.display="none";
    document.getElementById("showAnswer").style.display="block";
    count++;

    if(count==8){
        document.getElementById("addQ").style.display="block";
        document.getElementById("sub").style.display="none";

    }

}
function add(){
    window.location.href="../Html/additionalQuestions.html";
}