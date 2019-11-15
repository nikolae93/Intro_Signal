/*

An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer
 network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, 
 and thus two versions of addresses. One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules.

Example

For inputString = "172.16.254.1", the output should be
isIPv4Address(inputString) = true;

For inputString = "172.316.254.1", the output should be
isIPv4Address(inputString) = false.

316 is not in range [0, 255].

For inputString = ".254.255.0", the output should be
isIPv4Address(inputString) = false.

There is no first number.

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string consisting of digits, full stops and lowercase English letters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 30.

[output] boolean

true if inputString satisfies the IPv4 address naming rules, false otherwise.

*/

function isIPv4Address(ip) {
    var brojac =0 ;
    var tacke =[]; 
    niz = ip.split("");

    for (var i=0;i<niz.length;i++){
        if(niz[i]==="."){ brojac+=1; tacke.push(i) ; }
    }
   
      if(tacke.length===3){
      var br1,br2,br3 ;     
      var u1,u2,u3,u4 ;
      u1 = ip.substring(0,tacke[0]); 
      u2=  ip.substring(tacke[0]+1,tacke[1]);
      u3= ip.substring(tacke[1]+1,tacke[2]);
      u4 = ip.substring(tacke[2]+1,niz.length);

      if (isNaN(u1) || isNaN(u2) || isNaN(u3) || isNaN(u4)){ return false ;}

          br1 = parseInt(u1);
          br2 = parseInt(u2);
          br3 = parseInt(u3);
          br4 = parseInt(u4);
          
          if (  (br1>=0 && br1<=255) && (br2>=0 && br2<=255) && (br3>=0 && br3<=255) 
            && (br4>=0 && br4<=255) 
          ){return true;}
          else {return false;}

      }else{
          return false;
      }

}
