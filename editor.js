function f1() {
    //function to make the text bold using DOM method
    document.getElementById("textarea1").style.fontWeight = "bold";
}
  
function f2() {
    //function to make the text italic using DOM method
    document.getElementById("textarea1").style.fontStyle = "italic";
}
  
function f3() {
    //function to make the text alignment left using DOM method
    document.getElementById("textarea1").style.textAlign = "left";
}
  
function f4() {
    //function to make the text alignment center using DOM method
    document.getElementById("textarea1").style.textAlign = "center";
}
  
function f5() {
    //function to make the text alignment right using DOM method
    document.getElementById("textarea1").style.textAlign = "right";
}
  
function f6() {
    //function to make the text in Uppercase using DOM method
    document.getElementById("textarea1").style.textTransform = "uppercase";
}
  
function f7() {
    //function to make the text in Lowercase using DOM method
    document.getElementById("textarea1").style.textTransform = "lowercase";
}
  
function f8() {
    //function to make the text capitalize using DOM method
    document.getElementById("textarea1").style.textTransform = "capitalize";
}
  
function f9() {
    //function to make the text back to normal by removing all the methods applied 
    //using DOM method
    document.getElementById("textarea1").style.fontWeight = "normal";
    document.getElementById("textarea1").style.textAlign = "left";
    document.getElementById("textarea1").style.fontStyle = "normal";
    document.getElementById("textarea1").style.textTransform = "capitalize";
    document.getElementById("textarea1").value = " ";
}











function genPdf(){

    var text = document.getElementById("textarea1").value;
    var len = text.length;
    if(len == 0){
        alert("Please Enter Something");
    }else {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
        month +=1;
    var year = date.getFullYear();
    var calendar = "PDF Generated On:"+day+"-"+month+"-"+year;
    var doc = new jsPDF();
    doc.text(20,20,text);
    doc.text(122,280,calendar);
    var fName = document.getElementById("fileName").value;
    var fNameLen = fName.length;
            if(fNameLen == 0){
                alert("Please Enter File Name To Proceed");
            }else {
    doc.save(fName+'.pdf');
       }

    }

}