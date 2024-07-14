

class Categories extends Ui{ 
    
    constructor(){
        super()
      this.ui = new Ui();
        this.getCategories ();
        this.displayCategories ([]);
        console.log('ali')
    }
    
       
async getCategories(){
  const loading = document.querySelector(".loading");
   loading.classList.remove("d-none");
 let url = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)

    if (url.ok) {
        const res = await url.json();
     
        this.displayCategories(res.categories)
         
         loading.classList.add("d-none"); 
        }
    
        
    }

}


$('.Categories').click(function(){
  $('.display').removeClass('d-none')
  $('.contactUs').addClass('d-none')
  $('#search').addClass('d-none')
 
       new Categories()
    })








//=======================================
class Area extends Ui{ 
    
    constructor(){
        super()
      this.ui = new Ui();
        this.getArea ();
        this.displayArea ([]);
        
    }
    
       
async getArea(){
  const loading = document.querySelector(".loading");
  loading.classList.remove("d-none");
 
 let url = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)

    if (url.ok) {
        const res = await url.json();
        console.log(res.meals)

        
        this.displayArea(res.meals)
        
          loading.classList.add("d-none"); 
        }
         this.getElement();
        
    }
    getElement() {
        document.querySelectorAll(".area-meals").forEach((link) => {
          link.addEventListener("click", () => {
             let id = link.id;
             
             this.getDetails(id);
             
             
             
          });
       });
    }
    getDetails(idMeal) {
      $('.display').removeClass('d-none')
      $('#search').addClass('d-none')
       let details = new AreaMeals(idMeal);
       
       
       
    }

}


$('.Area').click(function(){
  $('.display').removeClass('d-none')
  $('#search').addClass('d-none')
  $('.contactUs').addClass('d-none')
  new Area()
})
 

//////================================================

class AreaMeals extends Ui{ 
    
    constructor(area){
        super()
        
      this.ui = new Ui();
        this.getAreaMeals (area);
        this.displayAreaMeals([]);
          console.log(area)
    }
  
       
async getAreaMeals(area){
  const loading = document.querySelector(".loading");
  loading.classList.remove("d-none");
 
 let url = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    if (url.ok) {
        const res = await url.json();
      console.log(res.meals)

        
        this.displayAreaMeals(res.meals)
         
        loading.classList.add("d-none"); 
        }
    
      
   
        this.getElement();
    }
    getElement() {
        document.querySelectorAll(".mealDescription").forEach((link) => {
          link.addEventListener("click", () => {
             let id = link.id;
             
             this.getDetails(id);
             
             
             
          });
       });
    }
    getDetails(idMeal) {
       
       let details = new mealId(idMeal);
      
       
       
    }
  

}

// let o = new AreaMeals ()

 




 // ==================
//////================================================




class Ingredients extends Ui{ 
    
    constructor(){
        super()
      this.ui = new Ui();
        this.getIngredients ();
        this.displayIngredients([]);
        
    }
    
       
async getIngredients(){
  const loading = document.querySelector(".loading");
  loading.classList.remove("d-none");
 
 let url = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    if (url.ok) {
        const res = await url.json();
      

        
        this.displayIngredients(res.meals)
        loading.classList.add("d-none"); 
      
        }
    
        this.getElement();
    }
    getElement() {
        document.querySelectorAll(".ingredientsMeal-id").forEach((link) => {
          link.addEventListener("click", () => {
             let id = link.id;
             
             this.getDetails(id);
             
             
             
          });
       });
    }
    getDetails(idMeal) {
       
       let details = new IngredientsMeal(idMeal);
    
       
    }

}


$('.Ingredients').click(function(){
  $('.display').removeClass('d-none')
  $('#search').addClass('d-none')
  $('.contactUs').addClass('d-none')
  new Ingredients()
})


//=======================================================





class IngredientsMeal extends Ui{ 
    
    constructor(ingredientsId){
        super()
      this.ui = new Ui();
      
        this.getIngredientsMeals(ingredientsId);
        this.displayIngredientsMeals([]);
        
    }
   
    
async  getIngredientsMeals(ingredients){
  const loading = document.querySelector(".loading");
  loading.classList.remove("d-none");
 let url = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
    if (url.ok) {
        const res = await url.json();
       

        
        this.displayIngredientsMeals(res.meals)
         
        loading.classList.add("d-none"); 
        }
    
        this.getElement();
    }
    getElement() { 
        console.log("ali")
        document.querySelectorAll(".mealDescription").forEach((link) => {
          link.addEventListener("click", () => {
             let id = link.id;
             
             this.getDetails(id);
             
             
             
          });
       });
    }
    getDetails(idMeal) {
       
       let details = new mealId(idMeal);
       
      
       
       
    }
   
   };

// ==================



class mealId extends Ui{ 
    
    constructor(mealID){
        super()
      this.ui = new Ui();
      console.log(mealID)
        this.getMealDetails(mealID);
        this.displayMealDetails([]);
        
    }
   
    
async  getMealDetails(mealID){
  const loading = document.querySelector(".loading");
  loading.classList.remove("d-none");
 let url = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    if (url.ok) {
        const res = await url.json();
     console.log(res.meals[0])

        
        this.displayMealDetails(res.meals[0])
         
        loading.classList.add("d-none"); 
        }
    
       
    }
  
   
   };

//===========================================
class searchMeal extends Ui{ 
    
    constructor(term){
        super()
      this.ui = new Ui();
      
        this.searchByName(term);
        this.showSearch([]);
        
    }
   
    
async   searchByName(term=''){
  const loading = document.querySelector(".loading");
  loading.classList.remove("d-none");
 let url =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    if (url.ok) {
        const res = await url.json();
        console.log(res.meals)

        
        this.showSearch(res.meals)
         
        loading.classList.add("d-none"); 
        }
    
       
        this.getElement();
      }
      getElement() { 
          console.log("ali")
          document.querySelectorAll(".mealDescription").forEach((link) => {
            link.addEventListener("click", () => {
               let id = link.id;
               
               this.getDetails(id);
               
               
               
            });
         });
      }
      getDetails(idMeal) {
         
         let details = new mealId(idMeal);
         
        
         
         
      }
   };


   $(document).ready(function(){
    new searchMeal()
  })

 



  
  class SearchByNameMeal extends Ui{ 
    
    constructor(term){
        super()
      this.ui = new Ui();
      
        this.searchByName(term);
        this.SearchByName([]);
        
    }
   
    
async   searchByName(term){
  const loading = document.querySelector(".loading");
  loading.classList.remove("d-none");
 let url =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    if (url.ok) {
        const res = await url.json();
        console.log(res.meals)

        
        this.SearchByName(res.meals)
         
        loading.classList.add("d-none"); 
        }
      
       
        this.getElement();
      }
      getElement() { 
          console.log("ali")
          document.querySelectorAll(".mealDescription").forEach((link) => {
            link.addEventListener("click", () => {
               let id = link.id;
               console.log(id)
               this.getDetails(id);
                $('.display').removeClass('d-none')
                $('#search').addClass('d-none')
               
               
               
            });
          })
      }
      getDetails(idMeal) {
         
         let details = new mealId(idMeal);
   
  
      
        
         
         
      }
   };



 class ValueMeal extends Ui{
  constructor(){
  super()
  this.ui = new Ui();

  this.getElement(); 
  
}

getElement() { 
  

   
  var nameMeals=''
      
        var nameValue =  document.querySelector("#byname").addEventListener('keyup',function(){
              nameMeals = $('#byname').val()
          console.log(nameMeals)
            
          let gg =new SearchByNameMeal (nameMeals);
         
          
         })
   
  
    
   }


}
let v= new ValueMeal()

//=================================================================
class SearchByLaterMeal extends Ui{ 
    
  constructor(term){
      super()
    this.ui = new Ui();
    
      this.searchByLater(term);
      this.SearchByLater([]);
      
  }
 
  
async   searchByLater(term){
const loading = document.querySelector(".loading");
loading.classList.remove("d-none");
let url =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`)
  if (url.ok) {
      const res = await url.json();
      console.log(res.meals)

      
      this.SearchByName(res.meals)
       
      loading.classList.add("d-none"); 
      }
    
     
      this.getElement();
    }
    getElement() { 
        console.log("ali")
        document.querySelectorAll(".mealDescription").forEach((link) => {
          link.addEventListener("click", () => {
             let id = link.id;
             console.log(id)
             this.getDetails(id);
              $('.display').removeClass('d-none')
              $('#search').addClass('d-none')
             
             
             
          });
        })
    }
    getDetails(idMeal) {
       
       let details = new mealId(idMeal);
 

    
      
       
       
    }
 };







//=============================================

class ValueMealByLater extends Ui{
  constructor(){
  super()
  this.ui = new Ui();

  this.getElement(); 
  
}

getElement() { 
  

   
  var laterMeals=''
      
        var laterValue =  document.querySelector("#bylater").addEventListener('keyup',function(){
              laterMeals = $('#bylater').val()
          console.log(laterMeals)
            
          let gg =new SearchByLaterMeal (laterMeals);
         
          
         })
   
  
    
   }


}
let f= new ValueMealByLater()