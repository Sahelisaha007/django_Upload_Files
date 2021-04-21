
var slider1=document.getElementById("myRange1");
var output1=document.getElementById("value1");
var file_input1=document.getElementById("file-input1");
var file1=document.getElementById("file1");

output1.innerHTML = slider1.value;
slider1.oninput = function(){
    output1.innerHTML = this.value;
    if(this.value >0){
        var color = 'linear-gradient(40deg, #b6daf3, #605ea1)';
        file_input1.style.background = color;
        file_input1.style.cursor = 'pointer';
        file_input1.style.display= 'block';
        file_input1.style.position= 'relative';
        file1.disabled = false;
        file_input1.style.borderRadius  = '25px';
        

        file_input1.style.width =  '200px';
        file_input1.style.height =  '50px';
        file_input1.style.boxShadow= '0 4px 7px rgba(0, 0, 0, 0.4)';
        file_input1.style.display= 'flex';
        file_input1.style.alignItems= 'center';
        file_input1.style.justifyContent= 'center';
        

    }else{
        var color = 'linear-gradient(40deg, #888587, #505052)';
        file_input1.style.cursor = 'default';
        file_input1.style.background = color;
        file1.disabled = true;
        
    }
}

slider1.addEventListener("mousemove", function(){
    var x = slider1.value;
    var color = 'linear-gradient(90deg, rgb(117, 252,117)'+ x + '% , rgb(214, 214,214)' + x +'%)';
    slider1.style.background = color;
}
)




var slider2=document.getElementById("myRange2");
var output2=document.getElementById("value2");
var file_input2=document.getElementById("file-input2");
var file2=document.getElementById("file2");

output2.innerHTML = slider2.value;
slider2.oninput = function(){
    output2.innerHTML = this.value;
    if(this.value >0){
        var color = 'linear-gradient(40deg, #b6daf3, #605ea1)';
        file_input2.style.background = color;
        file_input2.style.cursor = 'pointer';
        file_input2.style.display= 'block';
        file_input2.style.position= 'relative';
        file2.disabled = false;
        file_input2.style.borderRadius  = '25px';
        

        file_input2.style.width =  '200px';
        file_input2.style.height =  '50px';
        file_input2.style.boxShadow= '0 4px 7px rgba(0, 0, 0, 0.4)';
        file_input2.style.display= 'flex';
        file_input2.style.alignItems= 'center';
        file_input2.style.justifyContent= 'center';
        

    }else{
        var color = 'linear-gradient(40deg, #888587, #505052)';
        file_input2.style.cursor = 'default';
        file_input2.style.background = color;
        file2.disabled = true;
        
    }
}

slider2.addEventListener("mousemove", function(){
    var x = slider2.value;
    var color = 'linear-gradient(90deg, rgb(117, 252,117)'+ x + '% , rgb(214, 214,214)' + x +'%)';
    slider2.style.background = color;
}
)

 
