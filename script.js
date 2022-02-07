const circle = document.querySelector("._container__circle");

const para = document.querySelector("._container p");

let observeSection = document.querySelector("._container");

let observeFunction = new IntersectionObserver((entries,observ)=>{
 entries.forEach((e)=>{
   if(e.isIntersecting){
     circle.style.transform = `translateX(100px)`;
     circle.style.opacity = "1";
     para.classList.add("active");
   }else{
     circle.style.transform = `translateX(0px)`
     circle.style.opacity = "0";
     para.classList.remove("active");
   }
 })
}, {
  rootMargin: "-200px",
  threshold: .5,
});

observeFunction.observe(observeSection);