var choice="";//选择项
var checked=false;
var videoPath;
function video1(){
    if(choice=='1' && checked==true){
        checked=false;
        choice="";
        document.getElementById('btn_1').style.background="#FF00FF";
    }
    else {
        if(checked==true){

        }
        else{
            checked=true;
            choice='1';
            document.getElementById('btn_1').style.background="#FF0000";
        }
    }
}
function video2(){
    if(choice=='2' && checked==true){
        checked=false;
        choice="";
        document.getElementById('btn_2').style.background="#FF00FF";
    }
    else {
        if(checked==true){

        }
        else{
            checked=true;
            choice='2';
            document.getElementById('btn_2').style.background="#FF0000";
        }
    }
}
function video3(){
    if(choice=='3' && checked==true){
        checked=false;
        choice="";
        document.getElementById('btn_3').style.background="#FF00FF";
    }
    else {
        if(checked==true){

        }
        else{
            checked=true;
            choice='3';
            document.getElementById('btn_3').style.background="#FF0000";
        }
    }
}
function video4(){
    if(choice=='4' && checked==true){
        checked=false;
        choice="";
        document.getElementById('btn_4').style.background="#FF00FF";
    }
    else {
        if(checked==true){

        }
        else{
            checked=true;
            choice='4';
            document.getElementById('btn_4').style.background="#FF0000";
        }
    }
}
function video5(){
    if(choice=='5' && checked==true){
        checked=false;
        choice="";
        document.getElementById('btn_5').style.background="#FF00FF";
    }
    else {
        if(checked==true){

        }
        else{
            checked=true;
            choice='5';
            document.getElementById('btn_5').style.background="#FF0000";
        }
    }
}
function video6(){
    if(choice=='6' && checked==true){
        checked=false;
        choice="";
        document.getElementById('btn_6').style.background="#FF00FF";
    }
    else {
        if(checked==true){

        }
        else{
            checked=true;
            choice='6';
            document.getElementById('btn_6').style.background="#FF0000";
        }
    }
}
function video7(){
    if(choice=='7' && checked==true){
        checked=false;
        choice="";
        document.getElementById('btn_7').style.background="#FF00FF";
    }
    else {
        if(checked==true){

        }
        else{
            checked=true;
            choice='7';
            document.getElementById('btn_7').style.background="#FF0000";
        }
    }
}
function video8(){
    if(choice=='8' && checked==true){
        checked=false;
        choice="";
        document.getElementById('btn_8').style.background="#FF00FF";
    }
    else {
        if(checked==true){

        }
        else{
            checked=true;
            choice='8';
            document.getElementById('btn_8').style.background="#FF0000";
        }
    }
}
function videoSubmit(){
    videoPath="../Resource/video/"+choice+".ogg";
    document.getElementById("video")
        .setAttribute("src",videoPath);
    document.getElementById("btn_"+choice).style.display="none";
    checked=false;
    choice="";

}