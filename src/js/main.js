


// $('.links a').animate({height: "hide"})

    let boxWidth= $('.menu-link').outerWidth()
    
$('.closebtn').click(function(){
    $('.nav').css({left: `-${boxWidth}px`},500)
    $('.bars').removeClass("d-none")
    $('.closebtn').addClass("d-none")
    $('.links ').animate({height: "hide",lineHeight:"hide"},400)
    })
$('.nav').css({left: `-${boxWidth}%}`}, 500) 
$('.bars').click(function(){
    $('.links').animate()
    $('.nav').css({left:"0%"})
    $('.bars').addClass("d-none")
    $('.closebtn').removeClass("d-none")
    $('.links ').animate({height: "show",lineHeight:"show"},1000)
    })

    


$('.nav u')
$(".Search").click(function(){
    $('.contactUs').addClass('d-none')
    $('.display').addClass('d-none')
    $('#search').removeClass('d-none')

})
$(".Contact").click(function(){
    $('.contactUs').removeClass('d-none')
    $('#search').addClass('d-none')
    $('.display').addClass('d-none')
})
 

    
class Ui { 
    
    
    displayCategories(arr) {
        let div =document.querySelector('#display')
        div.innerHTML=""
    let box = "";

    for (let i = 0; i < arr.length; i++) {
        box += `
        <div class="col-lg-3 col-md-4 col-sm-6">
                <div id="${arr[i].strCategory}" class=" meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${arr[i].strCategoryThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute text-center text-black p-2">
                        <h3>${arr[i].strCategory}</h3>
                        <p>${arr[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                    </div>
                </div>
        </div>
        `
    }

    div.innerHTML = box
 }



//  ===================================================
 
 displayArea(arr) {
      let div =document.querySelector('#display')
        div.innerHTML=""
    let box = "";
console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        box += `
        <div class="col-lg-3 col-md-4 col-sm-6 >
                <div id ="${arr[i].strArea}" class=" area-meals rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h3>${arr[i].strArea}</h3>
                </div>
        </div>
        `
    }

    div.innerHTML = box
  
}
// ======================================================
displayAreaMeals(arr) {
      let div =document.querySelector('#display')
        div.innerHTML=""
    let box = "";

    for (let i = 0; i < arr.length ; i++) {
        box += ` 
         <div class="col-lg-3 col-md-4 col-sm-6">
                <div id="${arr[i].idMeal}" class="mealDescription position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${arr[i].strMealThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute text-center text-black p-2">
                        <h3>${arr[i].strMeal}</h3>
                       
                    </div>
                </div>
        </div>`
         
    }
 
  div.innerHTML = box
 
  

}
  
 



//  ===================================================

displayIngredients(arr) {
      let div =document.querySelector('#display')
        div.innerHTML=""
    let box = "";

    for (let i = 0; i < arr.length; i++) {
        box += `
          <div class="col-lg-3 col-md-4 col-sm-12">
                <div id="${arr[i].strIngredient}" class="ingredientsMeal-id rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${arr[i].strIngredient}</h3>
                        <p>${arr[i].strDescription?.split(" ").slice(0,20).join(" ")}</p>
                </div>
        </div>`
    }
 
  div.innerHTML = box
 
  
}
//  ===================================================
displayIngredientsMeals(arr) {
      let div =document.querySelector('#display')
        div.innerHTML=""
    let box = "";

    for (let i = 0; i < arr.length; i++) {
        box += ` 
         <div class="col-lg-3 col-md-4 col-sm-6">
                <div id="${arr[i].idMeal}" class="mealDescription position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${arr[i].strMealThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute text-center text-black p-2">
                        <h3>${arr[i].strMeal}</h3>
                       
                    </div>
                </div>
        </div>`
         
    }
  
  div.innerHTML = box
 
  

}
//  ===================================================

displayMealDetails(meal) {
    console.log(meal)
      let div =document.querySelector('#display')
 
          $('.display').removeClass('d-none')
          $('#search').addClass('d-none')
        

    let ingredients = ``

    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients += `<li class="strIngredient alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]} </li>`
        }

    }

     
    let tags = []

    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
    }


       let box = ` 
          <div class="col-lg-3 col-md-4 col-sm-10 text-center" >
                 <img src="${meal.strMealThumb}" class="w-100" alt="">
                <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-lg-9 col-md-8 col-sm-10 text-center ">
             <h2>Instructions</h2>
             <p>${meal.strInstructions}</p>
            <p>Area : ${meal.strArea}</p> 
            <p>Category : ${meal.strCategory}</p> 
            <p>  Recipes :</p> 
             <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${ingredients}
                </ul>
       
            
          

              <p class=" mt-2"> Tags :</p> 
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${tagsStr}
                </ul>
           <span class="bg-light text-dark p-2 rounded-3">${meal.strTags}</span>
           <div class=" btn-meal mt-4">
            <button type="button" class="btn btn-success"><a href="${meal.strSource}">Source</a></button>
            <button type="button" class="btn btn-danger"><a href="${meal.strYoutube}">Youtube</a>
         </button>
           </div>
            </div>`;


  div.innerHTML = box
  
} 
//=====================================
showSearch(arr) {
    let div =document.querySelector('#display')
      div.innerHTML=""
  let box = "";

  for (let i = 0; i < arr.length; i++) {
      box += ` 
       <div class="col-lg-3 col-md-4 col-sm-6">
              <div id="${arr[i].idMeal}" class="mealDescription position-relative overflow-hidden rounded-2 cursor-pointer">
                  <img class="w-100" src="${arr[i].strMealThumb}" alt="" srcset="">
                  <div class="meal-layer position-absolute text-center text-black p-2">
                      <h3>${arr[i].strMeal}</h3>
                     
                  </div>
              </div>
      </div>`
       
  }

div.innerHTML = box
}
///====================================================
SearchByName(arr) {
    let div =document.querySelector('#search-item')
     
  let box = "";

  for (let i = 0; i < arr.length; i++) {
      box += ` 
       <div class="col-lg-3 col-md-4 col-sm-6">
              <div id="${arr[i].idMeal}" class="mealDescription position-relative overflow-hidden rounded-2 cursor-pointer">
                  <img class="w-100" src="${arr[i].strMealThumb}" alt="" srcset="">
                  <div class="meal-layer position-absolute text-center text-black p-2">
                      <h3>${arr[i].strMeal}</h3>
                     
                  </div>
              </div>
      </div>`
       
  }

div.innerHTML = box
}

}

$('#nameInput').keyup(function(){
    let nname =$('#nameInput').val()
    let nameVal =/^[a-zA-Z ]+$/
   if(!nname.match(nameVal)){
       document.getElementById("nameAlert").classList.replace("d-none", "d-block")
 } else {
               document.getElementById("nameAlert").classList.replace("d-block", "d-none")           

        
                }
   }
)




$('#emailInput').keyup(function(){
    let nname =$('#emailInput').val()
    let valid =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
   if(!nname.match(valid)){    
                document.getElementById("emailAlert").classList.replace("d-none", "d-block")

            } else {
                document.getElementById("emailAlert").classList.replace("d-block", "d-none")

            }
   }
)



$('#phoneInput').keyup(function(){
    let nname =$('#phoneInput').val()
    let valid =/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
   if(!nname.match(valid)){    
                document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

            } else {
                document.getElementById("phoneAlert").classList.replace("d-block", "d-none")

            }
   }
)




$('#ageInput').keyup(function(){
    let nname =$('#ageInput').val()
    let valid =/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/
   if(!nname.match(valid)){    
                document.getElementById("ageAlert").classList.replace("d-none", "d-block")

            } else {
                document.getElementById("ageAlert").classList.replace("d-block", "d-none")

            }
   }
)

$('#passwordInput').keyup(function(){
    let nname =$('#passwordInput').val()
    let valid =/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/
   if(!nname.match(valid)){    
                document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

            } else {
                document.getElementById("passwordAlert").classList.replace("d-block", "d-none")

            }
   }


   
)

$('#repasswordInput').keyup(function(){
    let nname =$('#repasswordInput').val()
    
   if(!nname.match($('#passwordInput').val())){    
                document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

            } else {
                document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")

            }
   }
)
