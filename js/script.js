let popup =document.querySelector("#popup")
// input popup dom
let popupInput =document.querySelector(".popupInput")
let show =document.querySelector(".show")
let error =document.querySelector(".error")

// --------name submit function
let nameSubmit = ()=>{
    if(popupInput.value== ""){
        error.innerHTML ="Error :Enter Your Name plz"
    }
    else{
        show.innerHTML =popupInput.value 
        popupInput.value = ""
        popup.style ="display:none"
    }
}
// enter click function

let EnterClick =(item)=>{
    console.log(item.key)
    if(item.key == "Enter"){
        nameSubmit()
    }
}