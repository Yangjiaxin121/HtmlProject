var gruopNum2;
var difficulty;
var gruopNum1;
function chooseFinish() {
    var tmp1=location.search.split("?")[1].toString();
    var tmp2=location.search.split("?")[2].toString();
    var tmp3=location.search.split("?")[3].toString();
    var tmp4=location.search.split("?")[4].toString();
    var tmp5=location.search.split("?")[5].toString();
    difficulty=location.search.split("?")[6].toString();
    var a1;
    var A1=document.getElementsByName("category");
    for(var i=0;i<A1.length;i++){
        if(A1[i].checked){
            a1=(A1[i].value).toString();
        }
    }
    window.location.href="../Html/riskQuestions.html"+"?"+tmp1
        +"?"+tmp2+"?"+tmp3+"?"+tmp4+"?"+tmp5+"?"+difficulty+"?"+a1;
}
function chooseNext() {

    var tmp1=location.search.split("?")[1].toString();
    var tmp2=location.search.split("?")[2].toString();
    var tmp3=location.search.split("?")[3].toString();
    var tmp4=location.search.split("?")[4].toString();
    var tmp5=location.search.split("?")[5].toString();
    var a;
    var A=document.getElementsByName("difficulty");
    for(var i=0;i<A.length;i++){
        if(A[i].checked){
            a=(A[i].value).toString();
        }
    }
    window.location.href="../Html/choose2.html"+"?"+tmp1
    +"?"+tmp2+"?"+tmp3+"?"+tmp4+"?"+tmp5+"?"+a;
}