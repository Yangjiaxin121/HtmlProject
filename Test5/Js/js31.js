var Array1=new Array();
var tag;
var gruopNumber;
var s;
var q;
var i=113;
var j=50;
var timeTemp=30;
var timerName3;
function start3(){
    Array1=location.search.split("?")[1].split(",");
    s=Array1[0]+","+Array1[1]+","+Array1[2]+","+Array1[3]+","+Array1[4];
    gruopNumber=parseInt(location.search.split("?")[2]);
    tag=location.search.split("?")[3]+location.search.split("?")[4];
    RandomRisk();
    timerName3=setInterval("timer3()",1000);
    document.getElementById("question3").setAttribute("src","../Questions/"+q+".txt");
    document.getElementById('start3').style.display="none";
    addNode();
}
function RandomRisk() {
    switch (tag){
        case "easy1":
            q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            while (q==Array1[0] || q==Array1[1] ||q==Array1[2] ||q==Array1[3] ||q==Array1[4] || q>j) {
                q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            }
            break;
        case "easy2":
            q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            while (q==Array1[0] || q==Array1[1] ||q==Array1[2] ||q==Array1[3] ||q==Array1[4] || q<j || q>2*j) {
                q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            }
            break;
        case "easy3":
            q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            while (q==Array1[0] || q==Array1[1] ||q==Array1[2] ||q==Array1[3] ||q==Array1[4]  || q<2*j || q>3*j) {
                q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            }
            break;
        case "easy4":
            q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            while (q==Array1[0] || q==Array1[1] ||q==Array1[2] ||q==Array1[3] ||q==Array1[4]  || q<3*j || q>4*j) {
                q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            }
            break;
        case "easy5":
            q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            while (q==Array1[0] || q==Array1[1] ||q==Array1[2] ||q==Array1[3] ||q==Array1[4]  || q<4*j || q>5*j) {
                q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            }
            break;
        case "easy6":
            q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            while (q==Array1[0] || q==Array1[1] ||q==Array1[2] ||q==Array1[3] ||q==Array1[4]  || q<5*j || q>6*j) {
                q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            }
            break;
        case "normal1":
            q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            while (q==Array1[0] || q==Array1[1] ||q==Array1[2] ||q==Array1[3] ||q==Array1[4]  || q<6*j || q>7*j) {
                q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            }
            break;
        case "normal2":
            q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            while (q==Array1[0] || q==Array1[1] ||q==Array1[2] ||q==Array1[3] ||q==Array1[4]  || q<7*j || q>8*j ) {
                q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            }
            break;
        case "normal3":
            q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            while (q==Array1[0] || q==Array1[1] ||q==Array1[2] ||q==Array1[3] ||q==Array1[4]  || q<8*j || q>9*j) {
                q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            }
            break;
        case "normal4":
            q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            while (q==Array1[0] || q==Array1[1] ||q==Array1[2] ||q==Array1[3] ||q==Array1[4]  || q<9*j || q>10*j ) {
                q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            }
            break;
        case "normal5":
            q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            while (q==Array1[0] || q==Array1[1] ||q==Array1[2] ||q==Array1[3] ||q==Array1[4]  || q<10*j || q>11*j) {
                q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            }
            break;
        case "normal6":
            q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            while (q==Array1[0] || q==Array1[1] ||q==Array1[2] ||q==Array1[3] ||q==Array1[4]  || q<11*j || q>12*j) {
                q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            }
            break;
        case "hard1":
            q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            while (q==Array1[0] || q==Array1[1] ||q==Array1[2] ||q==Array1[3] ||q==Array1[4]  || q<12*j || q>13*j) {
                q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            }
            break;
        case "hard2":
            q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            while (q==Array1[0] || q==Array1[1] ||q==Array1[2] ||q==Array1[3] ||q==Array1[4]  || q<13*j || q>14*j) {
                q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            }
            break;
        case "hard3":
            q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            while (q==Array1[0] || q==Array1[1] ||q==Array1[2] ||q==Array1[3] ||q==Array1[4]  || q<14*j || q>15*j) {
                q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            }
            break;
        case "hard4":
            q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            while (q==Array1[0] || q==Array1[1] ||q==Array1[2] ||q==Array1[3] ||q==Array1[4]  || q<15*j || q>16*j) {
                q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            }
            break;
        case "hard5":
            q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            while (q==Array1[0] || q==Array1[1] ||q==Array1[2] ||q==Array1[3] ||q==Array1[4]  || q<16*j || q>17*j) {
                q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            }
            break;
        case "hard6":
            q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            while (q==Array1[0] || q==Array1[1] ||q==Array1[2] ||q==Array1[3] ||q==Array1[4]  || q<17*j || q>18*j) {
                q=Math.floor(Math.random()*i)*8+parseInt(gruopNumber);
            }
            break;
    }
}
function timer3() {

    timeTemp-=1;
    document.getElementById('time3').innerHTML=timeTemp.toString()+"s";
    if(timeTemp==10 ){
        alert("时间还剩"+timeTemp+"s");
        if(timeTemp==5){
            alert("时间还剩"+timeTemp+"s");
        }
        //跳转到下一题-----------------------------------
        if(timeTemp==0){
            window.location.href="../Html/videoQuestion.html";
            }

        }

    }
function tovideo() {
    window.location.href="../Html/videoQuestion.html";
}
function addNode() {
    var a=document.createElement("input");
    a.setAttribute("onclick","tovideo()");
    a.setAttribute("value","视频题环节");
    a.setAttribute("type","button");
    a.setAttribute("style","width:100px;height:50px");
    document.getElementById("Test").appendChild(a);
}


