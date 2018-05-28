var gruopNum2;
var difficulty;
var gruopNum1;
function chooseFinish() {


    difficulty=location.search.split("?")[1].toString();

    var a1;
    var A1=document.getElementsByName("category");
    for(var i=0;i<A1.length;i++){
        if(A1[i].checked){
            a1=(A1[i].value).toString();
        }
    }

    window.location.href="../Html/riskQuestions.html"+"?"+difficulty+"?"+a1;
}
function chooseNext() {

    var a;
    var A=document.getElementsByName("difficulty");
    for(var i=0;i<A.length;i++){
        if(A[i].checked){
            a=(A[i].value).toString();
        }
    }
    window.location.href="../Html/choose2.html"+"?"+a;
}