window.onload = () => {
    dme = true;
    const loadBgIMG = () => {
        let src=$("#bg").css("background-image");
        let url=src.match(/\((.*?)\)/)[1].replace(/('|")/g,'');
        let img=new Image();
        img.onload=()=>{
            let el = document.getElementById("ted");
            el.classList.add("bg-transparent");
            el.classList.remove("bg-dark");
        }
        img.src=url;
        if(img.complete)img.onload();
    }

    if (!localStorage.getItem("darkModeEnabled") || localStorage.getItem("darkModeEnabled") == "true") {
        localStorage.setItem("darkModeEnabled",true);
        console.log("loading");
        loadBgIMG()
    } else {
        dme = false;
        $("#bg").css("background-image","url(assets/images/background-light.jpg)");
        $("#ict").text("Turn off the lights");
        let n = $("#icn");
        n.removeClass("fa-sun-o");
        n.addClass("fa-moon-o");
        console.log("loading");
        loadBgIMG();
    }

    $("#light").click(()=>{
        localStorage.setItem("darkModeEnabled",!dme);
        location.reload();
    })

}