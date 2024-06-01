let btn = document.querySelector("button") ;
let ul = document.querySelector("ul") ;
let input = document.querySelector("input") ;


btn.addEventListener("click" , function() {
    let item  = document.createElement("li") ;
    item.innerText = input.value ;

    let delBtn = document.createElement("button") ;
    delBtn.innerText = "delete" ;
    delBtn.classList.add("delete") ;

    item.appendChild(delBtn) ;
    ul.appendChild(item) ;
    input.value = "" ;

}) ;
/*THESE FOLLOWING CODE WILL ONLY WORK FOR THE EXISTING ELEMENTS 
AND NOT FOR THE ONES THAT ARE ADDED ON TIME SO IF 
BUTTON OF CLASS "DELETE ARE ADDED IN TIME THEN THESE FOLLOWIN 
EVENT LISTENERS WONT BE APPLIED "*/ 

let delBtns = document.querySelectorAll(".delete") ;
for (a of delBtns ) {
    a.addEventListener("click" , function() {
        let par = this.parentElement ;
        par.addEventListener("click" , function() {
            par.remove() ;
        })
    }) ;
}

/*SO INORDER TO MAKE THE SAME ACTION TO HAPPEN FOR THE NEWLY 
ADDED
 ELEMENTS WE USE EVENT DELEGATION. this is done with the parent 
element of the particular element   */
/*USAGE OF EVENT DELEGATION :  */
ul.addEventListener("click" , function (event){
   if( event.target.nodeName == "BUTTON" ) {
        let listItem = event.target.parentElement ;
        listItem.remove();
        console.log("deleted") ; 
   }

} );


