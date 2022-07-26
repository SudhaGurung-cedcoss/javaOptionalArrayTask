
const IncompletedArray=[];
const completeArray=[];
function add()
{
    
var str= document.getElementById('new-task').value;
    
    IncompletedArray.push(str);
   // alert(Arrlist);
    //console.log("yyyy",IncompletedArray);
    populate();  
  
}

function populate(){
   text="";
    for(i=0;i<IncompletedArray.length;i++)
    {
        text+="<li><input type='checkbox' onclick='inComplete(this)' >"+"<label>"+IncompletedArray[i]+"</label>"+"<button onclick='inCompleteEdit(this)'>Edit</button>"+"<button class='delete' onclick='incompleteDelete(this)'>Delete</button></li>";
      // alert(text);
    }
    document.getElementById('incomplete-tasks').innerHTML=text;
    
}

function inComplete(args){
    let li=args.closest('li');
    let nodes=Array.from(li.closest('ul').children);
    let index=nodes.indexOf(li);
    
    var data=IncompletedArray[index];
   completeArray.push(data);
    //alert(completeArray);
    //completeArray.splice(index,0,data);
    //console.log(completeArray);
    IncompletedArray.splice(index,1);
    
    populate();
    funpopulate();


}

function funpopulate(){

    text="";
    for(i=0;i<completeArray.length;i++){
        text+="<li><input type='checkbox' onclick='moveToIncomplete(this)' checked >"+"<label>"+completeArray[i]+"</label>"+"<button class='edit' onclick='CompleteEdit(this)' >Edit</button><button class='delete' onclick='completeDelete(this)'>Delete</button></li>";
       // alert(text);
    }
  document.getElementById('completed-tasks').innerHTML=text;
     
}
function moveToIncomplete(args){
    let li=args.closest('li');
    let nodes=Array.from(li.closest('ul').children);
    let index=nodes.indexOf(li);
    
    var data=completeArray[index];
   IncompletedArray.push(data);
   // alert(IncompletedArray);
   // IncompletedArray.splice(index,0,data);
   // console.log(completeArray);
    completeArray.splice(index,1);
    
    
    funpopulate();
    populate();


}

function inCompleteEdit(args)
{
    let li=args.closest('li');
    let nodes=Array.from(li.closest('ul').children);
    let index=nodes.indexOf(li);
    
    //alert(index);
    //console.log(IncompletedArray);
    
    document.getElementById('new-task').value=IncompletedArray[index];
    document.getElementById('btnadd').innerHTML="Update";
    document.getElementById('btnadd').onclick=function(){
        inCompletedupdation(index);
    }
   
  //  completeArray.push(data);
   
}

function CompleteEdit(args)
{
    let li=args.closest('li');
    let nodes=Array.from(li.closest('ul').children);
    let index=nodes.indexOf(li);
    
    
    
    document.getElementById('new-task').value=completeArray[index];
    document.getElementById('btnadd').innerHTML="Update";
    document.getElementById('btnadd').onclick=function(){
        completeupdation(index);
    }
   
  //  completeArray.push(data);
   
}

function  inCompletedupdation(args){

    IncompletedArray[args]=document.getElementById('new-task').value;
    populate();
    document.getElementById('new-task').value="";
    document.getElementById('btnadd').innerHTML="add";
    document.getElementById('btnadd').onclick=function(){
        add();
    }
   
  

}

function completeupdation(args){

completeArray[args]=document.getElementById('new-task').value;
    funpopulate();
    document.getElementById('new-task').value="";
    document.getElementById('btnadd').innerHTML="add";
    document.getElementById('btnadd').onclick=function(){
        add();
    }
   
  

}
 
function incompleteDelete(args){
    let li=args.closest('li');
    let nodes=Array.from(li.closest('ul').children);
    let index=nodes.indexOf(li);
   
    IncompletedArray.splice(index,1);
    populate();
    
    

}

function completeDelete(args){
    let li=args.closest('li');
    let nodes=Array.from(li.closest('ul').children);
    let index=nodes.indexOf(li);
    var data=completeArray[index];
    completeArray.splice(index,1);
    funpopulate();
    
    

}