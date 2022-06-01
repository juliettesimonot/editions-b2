const posters= document.querySelectorAll("article");
const backColors = ["#ffc72e", "#2f7ba9", "#ea75b7", "#52a461", "#ff651a"];
const linksAnchors=document.querySelectorAll(".ancre");


//change anchor weight
function anchorFontWeight(i){
        let anchorActive=document.querySelector(".active");
        anchorActive.classList.remove("active");
        linksAnchors[i].classList.add("active");
}

//Change back color on scroll & anchor weight 
window.addEventListener('scroll', function() {
        if( posters[0].getBoundingClientRect().top >= 0 &&  posters[0].getBoundingClientRect().top <= 280) {
                document.body.style.backgroundColor =  backColors[0]; 
                anchorFontWeight(0);
        } else if( posters[1].getBoundingClientRect().top >= 0 &&  posters[1].getBoundingClientRect().top <= 300) {
                document.body.style.backgroundColor =  backColors[1]; 
                anchorFontWeight(1);
        } else if( posters[2].getBoundingClientRect().top >= 0 &&  posters[2].getBoundingClientRect().top <= 300) {
                document.body.style.backgroundColor =  backColors[2]; 
                anchorFontWeight(2);
        } else if( posters[3].getBoundingClientRect().top >= 0 &&  posters[3].getBoundingClientRect().top <= 300) {
                document.body.style.backgroundColor =  backColors[3]; 
                anchorFontWeight(3);
        } else if( posters[4].getBoundingClientRect().top >= 0 &&  posters[4].getBoundingClientRect().top <= 300) {
                document.body.style.backgroundColor =  backColors[4]; 
                anchorFontWeight(4);
        } 
});


//change anchore weight on click
for(let i=0; i<linksAnchors.length; i++){
        linksAnchors[i].addEventListener('click', () =>{
                anchorFontWeight(i);
        })
}





