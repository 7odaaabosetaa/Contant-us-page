// let icon = document.querySelector('header i');
// let ul = document.querySelector("header ul");
// let input = document.querySelectorAll("form .inp");
// console.log(input);
// let i = 0;
// let it = false;

// let submit = document.querySelector("input[type='submit']");

// submit.addEventListener("submit",(e)=>{
  
//     input.forEach((input)=>{
//         if (input.value ===""){
//             i += 1;
            
//         }
//     })
//     setTimeout(()=>{
//                 if (i === 4 ||i === 3 || i === 2 ||i === 1){
//                     alert("you must write somethink")
//                 }
//             },300)
//             console.log(i)
//             if(i == 1){
//             it == true;
//             }
//               if(it === false){
//     e.preventDefault();
// }
// })





icon.addEventListener("click",()=>{
    ul.classList.toggle("active")
});
