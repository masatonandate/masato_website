let x = document.querySelector('.homepage_headertwo');
x.addEventListener("mouseover", function(event) {
    event.target.style.color = "blue";

});

x.addEventListener("mouseout", function(event){
    event.target.style.color = "";
});

