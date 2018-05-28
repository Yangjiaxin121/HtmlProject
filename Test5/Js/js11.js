var groupNum;
var qArray1=new Array();
var s;
var submitTag=false;
var i=0;
var preQusetion;
var timeTemp=30;
var timerName1;
var num=113;
var q1Num=5; //必答题数量
var q1Sum=19; //每一组必答题总数.
function start1() {
    groupNum=location.search.split("?")[1];
    Random1();
    s=qArray1[0]+","+qArray1[1]+","+qArray1[2]+","+qArray1[3]+","+qArray1[4];
    timerName1=setInterval("timer1()",1000);
     document.getElementById('qusetion')
        .setAttribute("src", "../Questions/" + Math
            .floor(qArray1[i]) + ".txt");
     document.getElementById('start1').style.display="none";
}
function Random1() {
  qArray1[0]=Math.floor(Math.random()*num)*8+parseInt(groupNum);
  qArray1[1]=Math.floor(Math.random()*num)*8+parseInt(groupNum);
  while(qArray1[0]==qArray1[1]){
      qArray1[1]=Math.floor(Math.random()*num)*8+parseInt(groupNum);
  }
    qArray1[2]=Math.floor(Math.random()*num)*8+parseInt(groupNum);
    while(qArray1[2]==qArray1[1] || qArray1[2]==qArray1[0]){
        qArray1[2]=Math.floor(Math.random()*num)*8+parseInt(groupNum);
    }
    qArray1[3]=Math.floor(Math.random()*num)*8+parseInt(groupNum);
    while(qArray1[3]==qArray1[1] || qArray1[3]==qArray1[0] || qArray1[3]==qArray1[2]){
        qArray1[3]=Math.floor(Math.random()*num)*8+parseInt(groupNum);
    }
    qArray1[4]=Math.floor(Math.random()*num)*8+parseInt(groupNum);
    while(qArray1[4]==qArray1[1] || qArray1[4]==qArray1[0] || qArray1[4]==qArray1[2]|| qArray1[4]==qArray1[3]){
        qArray1[4]=Math.floor(Math.random()*num)*8+parseInt(groupNum);
    }
}
function submit() {
    submitTag=true;
    // if(choice==answer[bgPath2-1]){
    //     switch(choice){
    //         case 'A':
    //             document.getElementById('btn_A').style.backgroundImage='url("resource/icon/ACorrect.png")';
    //             document.getElementById('btn_B').style.backgroundImage='url("resource/icon/BWrong.png")';
    //             document.getElementById('btn_C').style.backgroundImage='url("resource/icon/CWrong.png")';
    //             document.getElementById('btn_D').style.backgroundImage='url("resource/icon/DWrong.png")';
    //             break;
    //         case 'B':
    //             document.getElementById('btn_A').style.backgroundImage='url("resource/icon/AWrong.png")';
    //             document.getElementById('btn_B').style.backgroundImage='url("resource/icon/BCorrect.png")';
    //             document.getElementById('btn_C').style.backgroundImage='url("resource/icon/CWrong.png")';
    //             document.getElementById('btn_D').style.backgroundImage='url("resource/icon/DWrong.png")';
    //             break;
    //         case 'C':
    //             document.getElementById('btn_A').style.backgroundImage='url("resource/icon/AWrong.png")';
    //             document.getElementById('btn_B').style.backgroundImage='url("resource/icon/BWrong.png")';
    //             document.getElementById('btn_C').style.backgroundImage='url("resource/icon/CCorrect.png")';
    //             document.getElementById('btn_D').style.backgroundImage='url("resource/icon/DWrong.png")';
    //             break;
    //         case 'D':
    //             document.getElementById('btn_A').style.backgroundImage='url("resource/icon/AWrong.png")';
    //             document.getElementById('btn_B').style.backgroundImage='url("resource/icon/BWrong.png")';
    //             document.getElementById('btn_C').style.backgroundImage='url("resource/icon/CWrong.png")';
    //             document.getElementById('btn_D').style.backgroundImage='url("resource/icon/DCorrect.png")';
    //             break;
    //
    //     }
    //
    // }
    // else{
    //     error=bgPath2+" "+error;
    //     switch(answer[bgPath2-1]){
    //         case 'A':
    //             document.getElementById('btn_A').style.backgroundImage='url("resource/icon/ACorrect.png")';
    //             document.getElementById('btn_B').style.backgroundImage='url("resource/icon/BWrong.png")';
    //             document.getElementById('btn_C').style.backgroundImage='url("resource/icon/CWrong.png")';
    //             document.getElementById('btn_D').style.backgroundImage='url("resource/icon/DWrong.png")';
    //             break;
    //         case 'B':
    //             document.getElementById('btn_A').style.backgroundImage='url("resource/icon/AWrong.png")';
    //             document.getElementById('btn_B').style.backgroundImage='url("resource/icon/BCorrect.png")';
    //             document.getElementById('btn_C').style.backgroundImage='url("resource/icon/CWrong.png")';
    //             document.getElementById('btn_D').style.backgroundImage='url("resource/icon/DWrong.png")';
    //             break;
    //         case 'C':
    //             document.getElementById('btn_A').style.backgroundImage='url("resource/icon/AWrong.png")';
    //             document.getElementById('btn_B').style.backgroundImage='url("resource/icon/BWrong.png")';
    //             document.getElementById('btn_C').style.backgroundImage='url("resource/icon/CCorrect.png")';
    //             document.getElementById('btn_D').style.backgroundImage='url("resource/icon/DWrong.png")';
    //             break;
    //         case 'D':
    //             document.getElementById('btn_A').style.backgroundImage='url("resource/icon/AWrong.png")';
    //             document.getElementById('btn_B').style.backgroundImage='url("resource/icon/BWrong.png")';
    //             document.getElementById('btn_C').style.backgroundImage='url("resource/icon/CWrong.png")';
    //             document.getElementById('btn_D').style.backgroundImage='url("resource/icon/DCorrect.png")';
    //             break;
    //
    //     }
    //     clicked=false;
    }

function next() {
    if(submitTag==true) {
        if (i ==4) {
            window.location.href="../Html/choose1.html"+"?"+s+"?"+groupNum.toString();
        }
        else {
            i += 1;
            document.getElementById('qusetion')
                .setAttribute("src", "../Questions/" + Math
                    .floor(qArray1[i]) + ".txt");
        }
    }
    submitTag=false;
    }
    // document.getElementById('btn_A').style.backgroundImage='url("resource/icon/AFree.png")';
    // document.getElementById('btn_B').style.backgroundImage='url("resource/icon/BFree.png")';
    // document.getElementById('btn_C').style.backgroundImage='url("resource/icon/CFree.png")';
    // document.getElementById('btn_D').style.backgroundImage='url("resource/icon/DFree.png")';
    //clicked=false;
    //}
function timer1() {
     if(preQusetion!=qArray1[i]){
        timeTemp=30;
     }

    timeTemp-=1;
    document.getElementById('time1').innerHTML=timeTemp.toString()+"s";
     if(timeTemp<=10 && preQusetion==qArray1[i]){
         if(timeTemp==10){
             alert("时间还剩"+timeTemp+"s");
         }
         if(timeTemp==5){
             alert("时间还剩"+timeTemp+"s");
         }

             //跳转到下一题-----------------------------------
         if(timeTemp==0){
                 if (i == 4) {
                     window.location.href="../Html/choose1.html"+"?"+s+"?"+groupNum.toString();
                 }
                 else {
                     i += 1;
                     document.getElementById('qusetion')
                         .setAttribute("src", "../Questions/" + Math
                             .floor(qArray1[i]) + ".txt");
                     timeTemp=30;
                 }
             }

    }
   preQusetion=qArray1[i];
}

