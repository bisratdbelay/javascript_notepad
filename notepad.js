var fileName = document.getElementById("textHeader");
var fileContent = document.getElementById("textContent");

fileName.value="";
fileContent.value="";

function downloadFile() {
    
if(fileName.value === "" || fileContent.value ==="")
window.alert("Enter file name and content.");

else {

var e = fileContent.value;
var c = document.createElement("a");

c.download = fileName.value + ".txt";

var t = new Blob([e], {
type: "text/plain"
});

c.href = window.URL.createObjectURL(t);

c.click();

}
}
