
    function display(){
      var valid=true;

      var username=document.getElementById('name').value;
      usercheck=/^(?:[A-Z][^\s]*\s?)+$/;
      
      if(username.match(usercheck)){
        document.getElementById('nameError').innerHTML="";
      }
       else{
        document.getElementById('nameError').innerHTML="Invalid user name expression";
        document.getElementById('nameError').style.color="red";
        document.getElementById('nameError').style.fontFamily="ubuntu";
        document.getElementById('nameError').style.fontSize="8px";
        valid=false;
       }
      
      var uemail=document.getElementById('email').value;
      var emailcheck=/^([A-Z a-z 0-9\-\.]+[@][a-z]+[\.][a-z]{2,3})/;
      if(uemail.match(emailcheck)){
        document.getElementById('emailerror').innerHTML="";
      }else{
        document.getElementById('emailerror').innerHTML="Invalid email id Expression";
        document.getElementById('emailerror').style.color="red";
        document.getElementById('emailerror').style.fontFamily="ubuntu";
        document.getElementById('emailerror').style.fontSize="8px";
        valid=false;
       }
       
       

      var uphoneno=document.getElementById('phoneno').value;
      numberlimit=/[0-9]{9}/;
      if(numberlimit.test(uphoneno)){
        document.getElementById('numberError').innerHTML="";
      }else{
        document.getElementById('numberError').innerHTML="Invalid Number";
        document.getElementById('numberError').style.color="red";
        document.getElementById('numberError').style.fontFamily="ubuntu";
        document.getElementById('numberError').style.fontSize="8px";
       valid=false;
      }
     
     
     var uaddress=document.getElementById('address').value;
     if(uaddress=="")
     {
      document.getElementById('addresserror').innerHTML="enter Address";
      document.getElementById('addresserror').style.color="red";
      document.getElementById('addresserror').style.fontFamily="ubuntu";
      document.getElementById('addresserror').style.fontSize="8px";
      valid=false;
     }
     else{
      document.getElementById('addresserror').innerHTML="";
     }
      
     
      
      var ucity=document.getElementById('city').value;
      if(ucity=="")
      {
        document.getElementById('Cityerror').innerHTML="enter city";
      document.getElementById('Cityerror').style.color="red";
      document.getElementById('Cityerror').style.fontFamily="ubuntu";
      document.getElementById('Cityerror').style.fontSize="8px";
        valid=false;
      }else{
        document.getElementById('Cityerror').innerHTML="";
       }
      
      
      var upostcode=document.getElementById('postcode').value;
      if(upostcode==""){
        document.getElementById('Posterror').innerHTML="enter post";
      document.getElementById('Posterror').style.color="red";
      document.getElementById('Posterror').style.fontFamily="ubuntu";
      document.getElementById('Posterror').style.fontSize="8px";
      valid=false;
      }else{
        document.getElementById('Posterror').innerHTML="";
       }
      

      var uprovince=document.getElementById('sel1').value;
     
   

      var product1=document.getElementById('pro1').value;
      if(product1==""){
        document.getElementById('pro1Error').innerHTML="enter number";
      document.getElementById('pro1Error').style.color="red";
      document.getElementById('pro1Error').style.fontFamily="ubuntu";
      document.getElementById('pro1Error').style.fontSize="8px";
      valid=false;

      }else{
        document.getElementById('pro1Error').innerHTML="";
       }
      
      
      var product2=document.getElementById('pro2').value;
      if(product2==""){
        document.getElementById('pro2Error').innerHTML="enter number";
        document.getElementById('pro2Error').style.color="red";
        document.getElementById('pro2Error').style.fontFamily="ubuntu";
        document.getElementById('pro2Error').style.fontSize="8px";
        valid=false;
  
      }else{
        document.getElementById('pro2Error').innerHTML="";
       }
 
      
      var product3=document.getElementById('pro3').value;
      if(product3==""){
        document.getElementById('pro3Error').innerHTML="enter number";
        document.getElementById('pro3Error').style.color="red";
        document.getElementById('pro3Error').style.fontFamily="ubuntu";
        document.getElementById('pro3Error').style.fontSize="8px";
        valid=false;
  
      }
      else{
        document.getElementById('pro3Error').innerHTML="";
       }

     
      var Deltime=document.getElementById('Deliverytime').value;
      if(Deltime==""){
        document.getElementById('delError').innerHTML="enter number";
        document.getElementById('delError').style.color="red";
        document.getElementById('delError').style.fontFamily="ubuntu";
        document.getElementById('delError').style.fontSize="8px";
        valid=false;
  
      }
   
     
      if(valid==true)
       { document.getElementById('box2').style.display="block";
       }else{
        document.getElementById('box2').style
        .display="none";
       }
     
   //   let dataFrom=new Array(username,uemail,uphoneno,uaddress,ucity,upostcode,Province,product1,product2,product3,Deltime);
      let dataFrom=[{fname:username,email:uemail,phoneno:uphoneno,address:uaddress,city:ucity,postcode:upostcode,Province:uprovince,product1:product1,product2:product2,product3:product3}] ;  
      
     

     var shipcharges=20;
      var tax=30;
     var sum=dataFrom[0].product1*10+dataFrom[0].product2*20+dataFrom[0].product3*30+shipcharges;
     Total=sum+tax;

      var test='<tr>'+'<td>'+"<pre>Name                  :</pre>"+'</td>'+'<td>'+dataFrom[0].fname+'</td>'+'</tr>'+'<tr>'+'<td>'+"<pre>Email                 :</pre>"+'</td>'+'<td>'+dataFrom[0].email+'</td>'+'</tr>'+'<tr>'+'<td>'+"<pre>Phone no              :</pre>"+'</td>'+'<td>'+dataFrom[0].phoneno+'</td>'+'</tr>'+'<tr>'+'<td>'+"<pre>Delivery Address      :</pre>"+'</td>'+'<td>'+dataFrom[0].address+'</td>'+'</tr>'+'<tr>'+'<td>'+'<pre>'+dataFrom[0].product1+"Product 1@ $10.00    :</pre> "+'</td>'+'<td>'+dataFrom[0].product1*10+'</td>'+'</tr>'+'<tr>'+'<td>'+'<pre>'+dataFrom[0].product2+"Product 2@ $20.00    :</pre>"+'</td>'+'<td>'+'$'+dataFrom[0].product2*20+'</td>'+'</tr>'+'<tr>'+'<td>'+'<pre>'+dataFrom[0].product3+"Product 3@ $30.00    :</pre>"+'</td>'+'<td>'+'$'+dataFrom[0].product3*30+'</td>'+'</tr>'+'<tr>'+'<td>'+"<pre>Shipping Charges      :</pre>"+'</td>'+'<td>'+'$'+shipcharges+'</td>'+'</tr>'+'<td>'+"<pre>Sub Total             :</pre>"+'</td>'+'<td>'+'$'+sum+'</td>'+'</tr>'+'<td>'+"<pre>Taxes @ 13%           :</pre>"+'</td>'+'<td>'+'$'+tax+'</td>'+'</tr>'+'<td>'+"<pre>Total                 :</pre>"+'</td>'+'<td>'+'$'+Total+'</td>'+'</tr>';
     
      
    document.getElementById('invoice').innerHTML=test;
    }