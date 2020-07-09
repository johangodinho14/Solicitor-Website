const imageSlider = ()=>{
    let backgroundImage = document.getElementById('imageSlider');

        let i     = 0;

        setInterval(()=>{
            backgroundImage.style.backgroundImage = "url(./images/img"+i+".jpg)";
            i+=1;
            if(i>=3){
                i = 0;
                return;
            }
        },3000);
    
}

window.addEventListener("load",()=>{
    imageSlider();
});