







function deconv(base, arr = []) {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        temp = temp + arr[i] * Math.pow(base, i);
    }
    return temp;
}




function converter(n, base ,tobase) {
    if(base == tobase){
        return n;
    }
    if(base!=16){
   var reverse = reverze(n);
    }else{

    }
    let dec;
    switch (base) {
        case 2:
            dec = deconv(2, reverse);
            
            break;

        case 8:
            dec = deconv(8, reverse);
          
            break;

        case 10:
            
            
            break;

        case 16:
            dec = hexdeconv(16, n);
            
            break;

    }
    let temp;
    if(base == 10){
        temp = dectobase(n , tobase);
    }
    else{
        temp = dectobase(dec , tobase);
    }
return temp;
}



function swit(intemp) {
    let strg;
    switch (intemp) {
        case 10:
            strg = "A";
            break;

        case 11:
            strg = "B";
            break;

        case 12:
            strg = "C";
            break;

        case 13:
            strg = "D";
            break;

        case 14:
            strg = "E";
            break;

        case 15:
            strg = "F";
            break;
    }
    return strg;
}

function dectobase(n, base) {
    let rem = [];
    let i = 0;
    if (base == 16) {
        let strg = "";
        let strtemp = "";
        let intemp = 66;
        while (true) {
            if (n >= base) {

                intemp = n % base;
                n = Math.trunc(n / base);
                
                if (intemp > 9) {
                    strg = strg + swit(intemp);


                }
                else {
                    strg = strg + intemp.toString();

                }


            }
            else {
                
                if (n > 9) {
                    strg = strg + swit(n);
                    break;
                }
                else {
                    strg = strg + n.toString();
                    break;
                }

                
            }
        }
        let strf = "";
        let j=strg.length;
        for(let i=0;  i<strg.length; i++){
            strf = strf + strg[j - 1];
            j = j-1;
        }
        // console.log(strf);
        return strf;
    }
    else {
        while (true) {
            if (n >= base) {

                rem[i] = n % base;
                n = Math.trunc(n / base);
              
                i = i + 1;
            }
            else {

                rem[i] = n;
                break;
            }
        }
            let temp = 0;

            

                
          
           
                for (let z = rem.length; z > 0; z--) {
                    temp = temp * 10;

                    temp = temp + rem[z - 1];
                }
                // console.log(temp);
                return temp;

            

    }

}





    

   


    function reverze(n) {
        let i = 0;
        let arr = [];
        while (true) {


            if (n >= 10) {
                arr[i] = n % 10;
                n = Math.trunc(n / 10);
                i = i + 1;

            }
            else {
                arr[i] = n;
                break;
            }
        }
        
        return arr;

    }

    // converter(11672 , 8, 16);
    
// reverze(12345);


    // ######################################## creting function to convert hexadecimal to decimal #########
    function revswit(ctemp) {
        
        switch (ctemp) {
            case "A":
                return 10;
                break;
    
            case "B":
                return 11;
                break;
    
            case "C":
                return 12;
                break;
    
            case "D":
                return 13;
                break;
    
            case "E":
                return 14;
                break;
    
            case "F":
                return 15;
                break;
        }
       
    }

    function hexdeconv(base, arr) {
        let t;
        arr = arr.toUpperCase();
        let temp = 0;
        let c;
        for(let i=arr.length; i>0; i--){
            t = arr[i-1];
            // temp = parseInt(arr[i-1])*Math.pow(base, i-1)
            if(t=="A" || t=="B" || t=="C" || t=="C" || t=="D" || t=="E" || t=="F"){
                c=revswit(arr[i-1]);
                temp = temp + c*Math.pow(base, arr.length-i);
            }
            else{
                // console.log(arr[i-1] + "  " + Math.pow(base, arr.length-i));
                temp = temp + parseInt(arr[i-1])*Math.pow(base, arr.length-i)
            }
        }
       
        return temp;
    }
    // converter("100E" , 16, 2);
// hexdeconv(16, "1056");




// #####################################################page start##################################

function clck(){
    let input = document.getElementById("inp").value;
    let base = formid.one[formid.one.selectedIndex].value;
    base = parseInt(base);
    if(base == 16){
    }
    else{
        input = parseInt(input);
    }
    
    console.log(typeof(input));
    console.log(input);
    console.log(base);
    
    if(document.getElementById("inp").value == ""){
        document.getElementById("divone").innerHTML = (`<h3>${formid.one[formid.one.selectedIndex].text} To Binary</h3>` + "Input some value")
    console.log(converter(input , base, 8));
    document.getElementById("divtwo").innerHTML = (`<h3>${formid.one[formid.one.selectedIndex].text} To Octal</h3>` + "Input some value")
    document.getElementById("divthree").innerHTML = (`<h3>${formid.one[formid.one.selectedIndex].text} To Decimal</h3>` + "Input some value")
    document.getElementById("divfour").innerHTML = (`<h3>${formid.one[formid.one.selectedIndex].text} To Hexadecimal</h3>` + "Input some value")
    }
    else{
        document.getElementById("divone").innerHTML = (`<h3>${formid.one[formid.one.selectedIndex].text} To Binary</h3>` + converter(input , base, 2))
    console.log(converter(input , base, 8));
    document.getElementById("divtwo").innerHTML = (`<h3>${formid.one[formid.one.selectedIndex].text} To Octal</h3>` + converter(input , base, 8))
    document.getElementById("divthree").innerHTML = (`<h3>${formid.one[formid.one.selectedIndex].text} To Decimal</h3>` + converter(input , base, 10))
    document.getElementById("divfour").innerHTML = (`<h3>${formid.one[formid.one.selectedIndex].text} To Hexadecimal</h3>` + converter(input , base, 16))
    }
 


}



// $(document).ready(function() {
//     $(window).keydown(function(event){
//       if(event.keyCode == 13) {
//         event.preventDefault();
//         return false;
//       }
//     });
//   });


    addEventListener('keypress', function (e) {
        var o = formid.one[formid.one.selectedIndex].value;
    if (e.key === 'Enter') {
        if(o==2||o==8||o==10||o==16){
            document.querySelector('#btn').click();
      console.groupCollapsed("enter prressed");
        }
       
    }
});




