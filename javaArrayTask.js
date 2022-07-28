var arr=[{'Company':'samsung','Model':'Galaxy','Memory':'64','Price':'15000'},
{'Company':'Nokia','Model':'S370','Memory':'128 ','Price':'22000'},
{'Company':'Apple','Model':'S12','Memory':'64 ','Price':'25000'},
{'Company':'Xiaomi','Model':'Note','Memory':'32 ','Price':'12000'},
{'Company':'Motarola','Model':'G10','Memory':'32 ','Price':'15000'}];
var arr2=[];
arr2.push(arr[0]);
alert(arr2);
printer(arr);
function printer(arr){

    var text="";
    for (i=0;i<arr.length;i++) {
        text+='<tr>';
        text+='<td>'+arr[i].Company+'</td>'+'<td>'+arr[i].Model+'</td>'+'<td>'+arr[i].Memory+'</td>'+'<td>'+arr[i].Price+'</td>'+'<td>'+"<input type='checkbox' onclick='checkeme(this)'>"+'</td>';
    }
    //text+='<td>'+samsung[0].Company+'</td>'+'<td>'+samsung[0].Model+'</td>'+'<td>'+samsung[0]["Memory(GB)"]+'</td>'+'<td>'+samsung[0].Price+'</td>';
    
    text+='</tr>';
    text+='<tr>'+'<td>'+'</td>'+'<td>'+'</td>'+'<td>'+'</td>'+'<td>'+'</td>'+'<td>'+"<Button onclick='deleteItem()' id='btn'>Delete</Button>"+'</td>'+'</tr>';
    document.getElementById('tbody').innerHTML=text;
    
}

function checkeme(args){
    let tr=args.closest('tr');
    let nodes=Array.from(tr.closest('tbody').children);
    let index=nodes.indexOf(tr);
    alert(index);
   
    arr2.push(arr[index]);
    //arr.splice(index,1);
   
   
    
    
}
function deleteItem(){
   for(i=0;i<arr.length;i++)
   {
    for(j=0;j<arr2.length;j++)
    {
        if(arr[i].Company==arr2[j].Company)
        {
            arr.splice(i,1);
        }
    }
   }
    printer(arr);
}
    
   



