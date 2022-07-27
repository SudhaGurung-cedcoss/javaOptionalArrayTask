const arr=[{'Company':'samsung','Model':'Galaxy','Memory':'64 ','Price':'15000'},
{'Company':'Nokia','Model':'S370','Memory':'128 ','Price':'22000'},
{'Company':'Apple','Model':'S12','Memory':'64 ','Price':'25000'},
{'Company':'Xiaomi','Model':'Note','Memory':'32 ','Price':'12000'},
{'Company':'Motarola','Model':'G10','Memory':'32 ','Price':'15000'}];


    var text="";
    for (i=0;i<arr.length;i++) {
        text+='<tr>';
        text+='<td>'+arr[i].Company+'</td>'+'<td>'+arr[i].Model+'</td>'+'<td>'+arr[i].Memory+'</td>'+'<td>'+arr[i].Price+'</td>';
    }
    //text+='<td>'+samsung[0].Company+'</td>'+'<td>'+samsung[0].Model+'</td>'+'<td>'+samsung[0]["Memory(GB)"]+'</td>'+'<td>'+samsung[0].Price+'</td>';
    
    text+='</tr>';
    document.getElementById('tbody').innerHTML=text;
  
 function search(){

    var item=document.getElementById('searchItem').value;
    var selectOptionValue=document.getElementById('dropdown').value;


//samsung
  if(item=='samsung'){
   var text2='<tr>';
    
   text2+='<td>'+arr[0].Company+'</td>'+'<td>'+arr[0].Model+'</td>'+'<td>'+arr[0].Memory+'</td>'+'<td>'+arr[0].Price+'</td>';
    text2+='</tr>';
    
    document.getElementById('thead2').style.display="block";
    document.getElementById('display').style.display="block";
    document.getElementById('display').innerHTML=text2;
    
}

if(item=='Galaxy'){
    var text2='<tr>';
     
    text2+='<td>'+arr[0].Company+'</td>'+'<td>'+arr[0].Model+'</td>'+'<td>'+arr[0].Memory+'</td>'+'<td>'+arr[0].Price+'</td>';
     text2+='</tr>';
     
     document.getElementById('thead2').style.display="block";
     document.getElementById('display').style.display="block";
     document.getElementById('display').innerHTML=text2;
     
 }

 if(item=='S370'){
    var text2='<tr>';
     
    text2+='<td>'+arr[1].Company+'</td>'+'<td>'+arr[1].Model+'</td>'+'<td>'+arr[1].Memory+'</td>'+'<td>'+arr[1].Price+'</td>';
     text2+='</tr>';
     
     document.getElementById('thead2').style.display="block";
     document.getElementById('display').style.display="block";
     document.getElementById('display').innerHTML=text2;
     
 }

 if(item=='S12'){
    var text2='<tr>';
     
    text2+='<td>'+arr[2].Company+'</td>'+'<td>'+arr[2].Model+'</td>'+'<td>'+arr[2].Memory+'</td>'+'<td>'+arr[2].Price+'</td>';
     text2+='</tr>';
     
     document.getElementById('thead2').style.display="block";
     document.getElementById('display').style.display="block";
     document.getElementById('display').innerHTML=text2;
     
 }

 if(item=='Note'){
    var text2='<tr>';
     
    text2+='<td>'+arr[3].Company+'</td>'+'<td>'+arr[3].Model+'</td>'+'<td>'+arr[3].Memory+'</td>'+'<td>'+arr[3].Price+'</td>';
     text2+='</tr>';
     
     document.getElementById('thead2').style.display="block";
     document.getElementById('display').style.display="block";
     document.getElementById('display').innerHTML=text2;
     
 }


 if(item=='G10'){
    var text2='<tr>';
     
    text2+='<td>'+arr[4].Company+'</td>'+'<td>'+arr[4].Model+'</td>'+'<td>'+arr[4].Memory+'</td>'+'<td>'+arr[4].Price+'</td>';
     text2+='</tr>';
     
     document.getElementById('thead2').style.display="block";
     document.getElementById('display').style.display="block";
     document.getElementById('display').innerHTML=text2;
     
 }

 if(item=='64'){
    var text2="";
     
    text2+='<tr>'+'<td>'+arr[0].Company+'</td>'+'<td>'+arr[0].Model+'</td>'+'<td>'+arr[0].Memory+'</td>'+'<td>'+arr[0].Price+'</td>'+'</tr>'+'<tr>'+'<td>'+arr[2].Company+'</td>'+'<td>'+arr[2].Model+'</td>'+'<td>'+arr[2].Memory+'</td>'+'<td>'+arr[2].Price+'</td>'+'</tr>';
     
     document.getElementById('thead2').style.display="block";
     document.getElementById('display').style.display="block";
     document.getElementById('display').innerHTML=text2;
     
 }

 if(item=='32'){
    var text2="";
     
    text2+='<tr>'+'<td>'+arr[3].Company+'</td>'+'<td>'+arr[3].Model+'</td>'+'<td>'+arr[3].Memory+'</td>'+'<td>'+arr[3].Price+'</td>'+'</tr>'+'<tr>'+'<td>'+arr[4].Company+'</td>'+'<td>'+arr[4].Model+'</td>'+'<td>'+arr[4].Memory+'</td>'+'<td>'+arr[4].Price+'</td>'+'</tr>';
     
     document.getElementById('thead2').style.display="block";
     document.getElementById('display').style.display="block";
     document.getElementById('display').innerHTML=text2;
     
 }

 if(item=='128'){
    var text2="";
     
    text2+='<tr>'+'<td>'+arr[1].Company+'</td>'+'<td>'+arr[1].Model+'</td>'+'<td>'+arr[1].Memory+'</td>'+'<td>'+arr[1].Price+'</td>'+'</tr>';
     
     document.getElementById('thead2').style.display="block";
     document.getElementById('display').style.display="block";
     document.getElementById('display').innerHTML=text2;
     
 }


 if(item=='15000'){
    var text2="";
     
    text2+='<tr>'+'<td>'+arr[0].Company+'</td>'+'<td>'+arr[0].Model+'</td>'+'<td>'+arr[0].Memory+'</td>'+'<td>'+arr[0].Price+'</td>'+'</tr>'+'<tr>'+'<td>'+arr[4].Company+'</td>'+'<td>'+arr[4].Model+'</td>'+'<td>'+arr[4].Memory+'</td>'+'<td>'+arr[4].Price+'</td>'+'</tr>';
     
     
     document.getElementById('thead2').style.display="block";
     document.getElementById('display').style.display="block";
     document.getElementById('display').innerHTML=text2;
     
 }

 if(item=='12000'){
    var text2="";
     
    text2+='<tr>'+'<td>'+arr[3].Company+'</td>'+'<td>'+arr[3].Model+'</td>'+'<td>'+arr[3].Memory+'</td>'+'<td>'+arr[3].Price+'</td>'+'</tr>'; 
     
     document.getElementById('thead2').style.display="block";
     document.getElementById('display').style.display="block";
     document.getElementById('display').innerHTML=text2;
     
 }

 if(item=='25000'){
    var text2="";
     
    text2+='<tr>'+'<td>'+arr[2].Company+'</td>'+'<td>'+arr[2].Model+'</td>'+'<td>'+arr[2].Memory+'</td>'+'<td>'+arr[2].Price+'</td>'+'</tr>';
       document.getElementById('thead2').style.display="block";
     document.getElementById('display').style.display="block";
     document.getElementById('display').innerHTML=text2;
     
 }


 if(item=='22000'){
    var text2="";
     
    text2+='<tr>'+'<td>'+arr[1].Company+'</td>'+'<td>'+arr[1].Model+'</td>'+'<td>'+arr[1].Memory+'</td>'+'<td>'+arr[1].Price+'</td>'+'</tr>';
       document.getElementById('thead2').style.display="block";
     document.getElementById('display').style.display="block";
     document.getElementById('display').innerHTML=text2;
     
 }
 


if(item=='Nokia'){
    var text2='<tr>';
     
    text2+='<td>'+arr[1].Company+'</td>'+'<td>'+arr[1].Model+'</td>'+'<td>'+arr[1].Memory+'</td>'+'<td>'+arr[1].Price+'</td>';
     text2+='</tr>';
     
     document.getElementById('thead2').style.display="block";
      document.getElementById('display').style.display="block";
      document.getElementById('display').innerHTML=text2;
     
 }

 if(item=='Apple'){
    var text2='<tr>';
     
    text2+='<td>'+arr[2].Company+'</td>'+'<td>'+arr[2].Model+'</td>'+'<td>'+arr[2].Memory+'</td>'+'<td>'+arr[2].Price+'</td>';
     text2+='</tr>';
      
     document.getElementById('thead2').style.display="block";
      document.getElementById('display').style.display="block";
      document.getElementById('display').innerHTML=text2;
      
     
 }

 if(item=='Xiaomi'){
    var text2='<tr>';
     
    text2+='<td>'+arr[3].Company+'</td>'+'<td>'+arr[3].Model+'</td>'+'<td>'+arr[3].Memory+'</td>'+'<td>'+arr[3].Price+'</td>';
     text2+='</tr>';
 
     document.getElementById('thead2').style.display="block";
     document.getElementById('display').style.display="block";
     document.getElementById('display').innerHTML=text2;
     
 }

 if(item=='Motarola'){
    var text2='<tr>';
     
    text2+='<td>'+arr[4].Company+'</td>'+'<td>'+arr[4].Model+'</td>'+'<td>'+arr[4].Memory+'</td>'+'<td>'+arr[4].Price+'</td>';
     text2+='</tr>';
 
     document.getElementById('thead2').style.display="block";
     document.getElementById('display').style.display="block";
     document.getElementById('display').innerHTML=text2;
     
 }

 

  }
 
     
 




