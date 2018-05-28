var final;
var finnalArray=new Array();
var gq=""; //选择哪一组题
var counts;
var temp="";
window.onload=function () {
    var c=location.search.split("?")[1].toString();
    counts=parseInt(c);
    if(counts==0){

    }
    else{
        for(var i=0;i<counts;i++)
        {
            finnalArray[i]=location.search.split("?")[2+i].toString();
        }
        for(var j=0;j<finnalArray.length;j++){
            switch (finnalArray[j]) {
                case "1":
                    document.getElementById("g1").style.display="none";
                    break;
                case "2":
                    document.getElementById("g2").style.display="none";
                    break;
                case "3":
                    document.getElementById("g3").style.display="none";
                    break;
                case "4":
                    document.getElementById("g4").style.display="none";
                    break;
                case "5":
                    document.getElementById("g5").style.display="none";
                    break;
                case "6":
                    document.getElementById("g6").style.display="none";
                    break;
                case "7":
                    document.getElementById("g7").style.display="none";
                    break;
                case "8":
                    document.getElementById("g8").style.display="none";
                    break;
            }
        }
    }
}
function g1() {

    if (counts == 0) {
        counts += 1;
        window.location.href = "../Html/requiredQuestions.html" + "?" + counts.toString()+"?"+"1";
    }
    else {
        for (var i = 0; i < finnalArray.length; i++) {
            temp = temp + "?" + finnalArray[i];

        }
        counts += 1;
        window.location.href = "../Html/requiredQuestions.html" + "?" + counts.toString() + temp+"?"+"1";
    }
}
function g2() {

    if (counts == 0) {
        counts += 1;
        window.location.href = "../Html/requiredQuestions.html" + "?" + counts.toString()+"?"+"2";
    }
    else {
        for (var i = 0; i < finnalArray.length; i++) {
            temp = temp + "?" + finnalArray[i];

        }
        counts += 1;
        window.location.href = "../Html/requiredQuestions.html" + "?" + counts.toString() + temp+"?"+"2";
    }
}
function g3() {

    if (counts == 0) {
        counts += 1;
        window.location.href = "../Html/requiredQuestions.html" + "?" + counts.toString()+"?"+"3";
    }
    else {
        for (var i = 0; i < finnalArray.length; i++) {
            temp = temp + "?" + finnalArray[i];

        }
        counts += 1;
        window.location.href = "../Html/requiredQuestions.html" + "?" + counts.toString() + temp+"?"+"3";
    }
}
function g4() {

    if (counts == 0) {
        counts += 1;
        window.location.href = "../Html/requiredQuestions.html" + "?" + counts.toString()+"?"+"4";
    }
    else {
        for (var i = 0; i < finnalArray.length; i++) {
            temp = temp + "?" + finnalArray[i];

        }
        counts += 1;
        window.location.href = "../Html/requiredQuestions.html" + "?" + counts.toString() + temp+"?"+"4";
    }
}
function g5() {

    if (counts == 0) {
        counts += 1;
        window.location.href = "../Html/requiredQuestions.html" + "?" + counts.toString()+"?"+"5";
    }
    else {
        for (var i = 0; i < finnalArray.length; i++) {
            temp = temp + "?" + finnalArray[i];

        }
        counts += 1;
        window.location.href = "../Html/requiredQuestions.html" + "?" + counts.toString() + temp+"?"+"5";
    }
}
function g6() {

    if (counts == 0) {
        counts += 1;
        window.location.href = "../Html/requiredQuestions.html" + "?" + counts.toString()+"?"+"6";
    }
    else {
        for (var i = 0; i < finnalArray.length; i++) {
            temp = temp + "?" + finnalArray[i];

        }
        counts += 1;
        window.location.href = "../Html/requiredQuestions.html" + "?" + counts.toString() + temp+"?"+"6";
    }
}
function g7() {

    if (counts == 0) {
        counts += 1;
        window.location.href = "../Html/requiredQuestions.html" + "?" + counts.toString()+"?"+"7";
    }
    else {
        for (var i = 0; i < finnalArray.length; i++) {
            temp = temp + "?" + finnalArray[i];

        }
        counts += 1;
        window.location.href = "../Html/requiredQuestions.html" + "?" + counts.toString() + temp+"?"+"7";
    }
}
function g8() {

    if (counts == 0) {
        counts += 1;
        window.location.href = "../Html/requiredQuestions.html" + "?" + counts.toString()+"?"+"8";
    }
    else {
        for (var i = 0; i < finnalArray.length; i++) {
            temp = temp + "?" + finnalArray[i];

        }
        counts += 1;
        window.location.href = "../Html/requiredQuestions.html" + "?" + counts.toString() + temp+"?"+"8";
    }
}






