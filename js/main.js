

var signup=document.querySelector("#formone a")
var signin=document.querySelector("#formtwo a")
var one=document.getElementById("formone")
var two=document.getElementById("formtwo")
var resign=document.getElementById("resign")
var containerone=document.querySelector("#formone .container")
var containertwo=document.querySelector("#formtwo .container")

signup.addEventListener("click",function(){
one.classList.add("d-none")
two.classList.remove("d-none")

})


signin.addEventListener("click",function(){
    one.classList.remove("d-none")
    two.classList.add("d-none")




})



var nam=document.querySelector("#formtwo #inputname")
var email=document.querySelector("#formtwo #inputemail")
var password=document.querySelector("#formtwo #inputpass")
var btntwo=document.querySelector("#formtwo .btntwo")



var emailone=document.querySelector("#formone #inputemail")
var passwordone=document.querySelector("#formone #inputpass")
var btnone=document.querySelector("#formone .btnone")
var del=document.querySelector("#formone .del")
var clrone=document.querySelector("#formone .clrone")
var clrtwo=document.querySelector("#formtwo .clrtwo")
var alr=document.querySelectorAll(".alert")


var all=[]
if (localStorage.getItem("list array")==null){
    var all=[]


}
else{
    all=JSON.parse(localStorage.getItem("list array"))
    display()


}
btntwo.addEventListener("click",function add(){
    var person={
        namper:nam.value,
        emailper:email.value,
        passper:password.value,
    }
    all.push(person)
    localStorage.setItem("list array",JSON.stringify(all))
    display()
    
})


function display(){

    for(var i=0;i<all.length;i++){
         var x=all[i].emailper
         var yy=all[i].passper

         emailone.setAttribute("value",x)
         passwordone.setAttribute("value",yy)
    
}
}


del.addEventListener("click",function(){

        emailone.setAttribute("value","")
        passwordone.setAttribute("value","")
        all=[]
        localStorage.setItem("list array",JSON.stringify(all))
})

clrone.addEventListener("click",function(){
    emailone.value=""
    passwordone.value=""
    for(var i=0; i<alr.length;i++){
        alr[i].classList.add("d-none")
    }
})

clrtwo.addEventListener("click",function(){
    nam.value=""
    email.value=""
    password.value=""
    for(var i=0; i<alr.length;i++){
        alr[i].classList.add("d-none")
    }


    
})
var x=JSON.parse(localStorage.getItem("list array"))

function validation(element){
    var regex={
        inputname:/^[a-zA-Z]{3,10}$/,
        inputemail:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        inputpass:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    }

    if(regex[element.id].test(element.value)==true){
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        element.nextElementSibling.classList.add("d-none"); 
        
//كده التحقق اتحقق




//         var x=JSON.parse(localStorage.getItem("list array"))


//   for(var i=0;i<x.length;i++){
//         if(x[i].emailper==emailone.value){
      
            btnone.addEventListener("click",function(){
                one.classList.add("d-none")
                two.classList.add("d-none")
                resign.classList.remove("d-none")
                document.getElementById("resign").innerHTML=`hello${all[0].namper}`
    
            })
             

   
    //     }
    //   else{
    //     btnone.addEventListener("click",function(){
    //         containerone.previousElementSibling.classList.remove("d-none");
    //      })



    
    //   }
    // }


    }    


    else{
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        element.nextElementSibling.classList.remove("d-none");

        btnone.addEventListener("click",function(){
            containerone.previousElementSibling.classList.remove("d-none");
        })
        btntwo.addEventListener("click",function(){
            containertwo.previousElementSibling.classList.remove("d-none");
          
        })

        }
        
    }



    


