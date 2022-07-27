const arr=[{'Company':'samsung','Model':'Galaxy','Memory':'64 GB','Price':'15000'},
{'Company':'Nokia','Model':'S370','Memory':'128 GB','Price':'22000'},
{'Company':'Apple','Model':'S12','Memory':'64 GB','Price':'25000'},
{'Company':'Xiaomi','Model':'Note','Memory':'32 GB','Price':'12000'},
{'Company':'Motarola','Model':'G10','Memory':'32 GB','Price':'15000'}];


    var text="";
    for (i=0;i<arr.length;i++) {
        text+='<tr>';
        text+='<td>'+arr[i].Company+'</td>'+'<td>'+arr[i].Model+'</td>'+'<td>'+arr[i].Memory+'</td>'+'<td>'+arr[i].Price+'</td>';
    }
    //text+='<td>'+samsung[0].Company+'</td>'+'<td>'+samsung[0].Model+'</td>'+'<td>'+samsung[0]["Memory(GB)"]+'</td>'+'<td>'+samsung[0].Price+'</td>';
    
    text+='</tr>';

    document.getElementById('tbody').innerHTML=text;
    






