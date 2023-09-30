function run(){
    let htmlCode = document.getElementById("htmlCode").value;
    let cssCode = document.getElementById("cssCode").value;
    let jsCode = document.getElementById("jsCode").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode + "<style>"+cssCode+"</style>";
    
    output.contentWindow.eval(jsCode);
}