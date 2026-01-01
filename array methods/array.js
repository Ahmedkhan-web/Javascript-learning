// Simple Array

var data = [10 , 20 , 30 , 40 , 50];
var sum = 0;
document.write ("<ul>")
for (i = 0; i < data.length; i++){
    document.write ("<li>" + data[i] + "</li>");  
    sum = sum + data[i];
}
document.write ("</ul>")
document.write("Total sum" + sum)