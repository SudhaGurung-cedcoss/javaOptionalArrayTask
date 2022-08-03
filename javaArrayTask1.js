var arr=[{'Company':'samsung','Model':'Galaxy','Memory':'64 ','Price':15000,'Quantity':20,'Rate':''},
{'Company':'Nokia','Model':'S370','Memory':'128 ','Price':22000,'Quantity':15,'Rate':''},
{'Company':'Apple','Model':'S12','Memory':'64 ','Price':25000,'Quantity':21,'Rate':''},
{'Company':'Xiaomi','Model':'Note','Memory':'32 ','Price':12000,'Quantity':13,'Rate':''},
{'Company':'Motarola','Model':'G10','Memory':'32 ','Price':15000,'Quantity':18,'Rate':''}];

printer(arr);
function printer(arr){
    var text="";
    for (var i=0;i<arr.length;i++) {
        text+='<tr>';
        text+='<td>'+arr[i].Company+'</td>'+'<td>'+arr[i].Model+'</td>'+'<td>'+arr[i].Memory+'</td>'+'<td>'+arr[i].Price+'</td>'+'<td>'+arr[i].Quantity+'</td>'+'<td>'+arr[i].Rate+'</td>';
     }
    //text+='<td>'+samsung[0].Company+'</td>'+'<td>'+samsung[0].Model+'</td>'+'<td>'+samsung[0]["Memory(GB)"]+'</td>'+'<td>'+samsung[0].Price+'</td>';
    text+='</tr>';
    document.getElementById('tbody').innerHTML=text;
   }

function addData(){
        alert("hello");
        push(arr);

  }

 function push(arr){


    var company=document.getElementById('companyInput').value;
    //alert(company);
    var model=document.getElementById('modelInput').value;
    var memory=document.getElementById('memoryInput').value;
    var price=document.getElementById('priceInput').value;
    arr.splice(2,0,{'Company':company,'Model':model,'Memory':memory,'Price':price});
    //  alert(arr);
    printer(arr);
  }


    var sumProduct;
    var productArray=[];
    var totalAmount=0;
    var totalQuantity=0;

   //add items
    function add(){
    var selectProduct=document.getElementById('selectProduct').value;
    quantity=document.getElementById('quantity').value;
    match(selectProduct);
    var value=searchIndex(selectProduct);
    var c=arr[value].Company;
    var p=arr[value].Price;
    var p1=searchItemExist(selectProduct);
    if(p1==-1)
    {
        sumProduct={Company:c,Quantity:quantity,Amount:p};
        productArray.push(sumProduct);
        console.log(productArray);
     }
    else{
        productArray[p1].Quantity=parseInt(productArray[p1].Quantity)+parseInt(quantity);
        productArray[p1].Amount=parseInt(productArray[p1].Amount)*parseInt(quantity);
    }
       showData();
  }

  //update values
   function update() {
        var selectCompany=document.getElementById('selectProduct').value;
        quantity=document.getElementById('quantity').value;
        updatingValues(selectCompany);
   }
  function match(selectProduct){
     var t=true;
     for(let i=0;i<arr.length;i++)
    {
        if(arr[i].Company==selectProduct)
        {
            arr[i].Quantity=arr[i].Quantity-quantity;
            if(arr[i].Quantity<0)
            {
                alert("out of stock");
                t=false;
            }
          if(t==false)
          break;
        }
    }
     printer(arr);
  }

  function rate(){
     selectCompany=document.getElementById('selectProduct').value; 
     selectRating=document.getElementById('selectRating').value;
      
     assignRate(selectCompany,selectRating);
  }

  function assignRate(selectCompany,selectRating){
    for(let i=0;i<arr.length;i++)
    {
      
        if(arr[i].Company==selectCompany)
        {
          
            arr[i].Rate=selectRating;
          
        }
    }
    printer(arr);
  }

  function updatingValues(selectCompany){
 
    for(let i=0;i<arr.length;i++)
    {
      
        if(arr[i].Company==selectCompany)
        {
          
            arr[i].Quantity=quantity;
          
        }
    }
    printer(arr);
  }
  //check the item is exist
  function searchItemExist(selectProduct){
    for(let i=0;i<productArray.length;i++)
    {
       // alert(selectProduct);
        if(productArray[i].Company==selectProduct)
        {
         // alert(selectProduct);
         return i;
        } 
    }
    return -1;
  }
//showing data
  function showData()
  {
    //console.log("pa:",productArray);
    var textt="";
    for(i=0;i<productArray.length;i++)
    {
           // console.log("hello",productArray[i])
            textt+='<tr>'+'<td>'+productArray[i].Company+'</td>'+'<td>'+productArray[i].Quantity+'</td>'+'<td>'+productArray[i].Amount+'</td>'+'</tr>';
          //  console.log("textt="+textt);
              
    }
    document.getElementById('table4').style.display="block";
    document.getElementById('bill').innerHTML=textt ;
    
  }


  //searching index
  function searchIndex(selectOption){
    for(i=0;i<arr.length;i++)
    {
        if(arr[i].Company==selectOption)
        return i;
       
    }
  }

//generating bill
  function billGen(){
   var billgenerate="";
    for(i=0;i<productArray.length;i++) {
            totalQuantity+=parseInt(productArray[i].Quantity);
            totalAmount+=parseInt(productArray[i].Amount);
            billgenerate='<tr>'+'<td>'+"total"+'</td>'+'<td>'+totalQuantity+'</td>'+'<td>'+totalAmount+'</td>'+'</tr>';
    }
    document.getElementById('bill').innerHTML+=billgenerate;
}

 //performing sorting
   function sorting(){
  
    var sort=document.getElementById('sort').value;
    var sort_by=document.getElementById('sort_by').value;
    //   alert(sort_by);
      if(sort=="-1")
        sort_by="Company";
        if(sort=="asc"){
            if(sort_by=="Company" || sort_by=="Model") {
                arr= arr.sort((a,b)=>{
                let companyA=a.Company.toLowerCase();
                let companyB=b.Company.toLowerCase();
        
                if (companyA < companyB) {
                    return -1;
                }
                if (companyA > companyB) {
                    return 1;
                }
                return 0;
            });
            document.getElementById('tbody').innerHTML="";
            printer(arr);
            console.log(arr);
            }


            if(sort_by=="Memory") {
                arr= arr.sort((a,b)=>{
                return a.Memory-b.Memory
            });
            document.getElementById('tbody').innerHTML="";
            printer(arr);
            console.log(arr);
            }

            if(sort_by=="Price") {
                arr= arr.sort((a,b)=>{
                return a.Price-b.Price
            });
            document.getElementById('tbody').innerHTML="";
            printer(arr);
            console.log(arr);
            }
        }

        if(sort=="dsc"){
            if(sort_by=="Company" || sort_by=="Model"){
           arr= arr.sort((a,b)=>{
                let companyA=a.Company.toLowerCase();
                let companyB=b.Company.toLowerCase();
        
                if (companyA > companyB) {
                    return -1;
                }
                if (companyA < companyB) {
                    return 1;
                }
                return 0;
            });
            document.getElementById('tbody').innerHTML="";
            printer(arr);
            console.log(arr);
        }

        if(sort_by=="Memory") {
            arr= arr.sort((a,b)=>{
            return b.Memory-a.Memory
        });
        document.getElementById('tbody').innerHTML="";
        printer(arr);
        //console.log(arr);
        }

        if(sort_by=="Price") {
            arr= arr.sort((a,b)=>{
            return b.Price-a.Price
        });
        document.getElementById('tbody').innerHTML="";
        printer(arr);
      //  console.log(arr);
        }
     }

      }
    
   


    
  //searchin element
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
 
     
 

