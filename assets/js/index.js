window.onload = () => {
    let src=$("#bg").css("background-image");
    let url=src.match(/\((.*?)\)/)[1].replace(/('|")/g,'');
    let img=new Image();
    img.onload=()=>{
        let el = document.getElementsByClassName("bg-dark")[0];
        el.classList.add("bg-transparent")
        el.classList.remove("bg-dark");
    }
    img.src=url;
    if(img.complete)img.onload();
}