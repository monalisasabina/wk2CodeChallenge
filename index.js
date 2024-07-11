document.addEventListener('DOMContentLoaded',() =>{
    
    let array=[];

    let form=document.querySelector('form');
      form.addEventListener('submit',(event) =>{
      event.preventDefault();
      addShopping(event.target.querySelector('#shoppingList').value) 
      form.reset();    
      
      //Maintain a JavaScript array to store shopping list items.
      array.forEach((value) => {
        const input = form.querySelector('#shoppingList');
        if(input){
            input.value=value;
            console.log(input);
        }
      })     
    })
  
    //USING THE CLEAR LIST BUTTON TO REMOVE ITEMS FROM THE LIST
    document.getElementById('buttons').addEventListener('click',() =>{  
     let clearList=document.querySelector('ol');
        clearList.remove();  
    })

})

function addShopping(items){
    let value=document.querySelector('input#shoppingList').value;

    // 'IF' STATEMENT CHECKS IF THE USER HAS PLACED ITEM ON THE BOX.
    // IF NOT, THEN THE USER WILL BE ALERTED TO DO SO
    if(value === "") {
    alert("Please add items in the box");
    } else {
    let list=document.createElement('li');
    list.textContent=` ${items} `;
    list.className='list1';
    document.querySelector('#listItems').appendChild(list);

    //CREATING A BUTTON FOR MARK PURCHASE
    let checkMark=document.createElement('button');
    checkMark.textContent='MARK PURCHASED';
    checkMark.className="btn1";
    list.appendChild(checkMark);
    

    // WHEN THE ITEM IS PURCHASED, THE BUTTON WHEN CLICKED IT TURNS IN A DIFFERENT COLOR
    checkMark.addEventListener('click',() => {checkMark.style.backgroundColor='coral'})
     
 }
}
