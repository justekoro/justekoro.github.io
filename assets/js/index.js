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
        $("#ict").text("Turn on the lights");
        $("#icn").addClass("fa-sun-o")
        localStorage.setItem("darkModeEnabled",true);
        console.log("loading");
        loadBgIMG()
    } else {
        dme = false;
        $("#bg").css("background-image","url(assets/images/background-light.jpg)");
        $("#ict").text("Turn off the lights");
        let n = $("#icn");
        n.addClass("fa-moon-o");
        console.log("loading");
        loadBgIMG();
    }

    $("#light").click(()=>{
        localStorage.setItem("darkModeEnabled",!dme);
        location.reload();
    })

    $("#wai-t").click(()=>{
        $("#presa").addClass("fade-2s");
        setTimeout(()=>{
            $("#title").text("Who am I?");
            $("#subtitle").css("display","none");
            $("#text").css("display","block");
            $("#text").html("hi! I'm koro, a 17 yo developer from France.<br/>I started programming in 2017 with Discord Bots, applications that allows you to use almost the full potential of Discord by coding. Then, I wanted to try other things and I got interested in web development in 2019. I only have the basics in frontend development.");
            $(".active")[0].classList.remove("active")
            $("#wai-t").addClass("active");
            if(!$("#arrows").hasClass("invisible"))$("#arrows").addClass("invisible");
            setTimeout(()=>$("#presa").removeClass("fade-2s"),1000)
        },1000);
    });

    $("#home").click(()=>{
        $("#presa").addClass("fade-2s");
        setTimeout(()=>{
            $("#title").text("krbk");
            $("#subtitle").text("Backend developer")
            $("#subtitle").css("display","block");
            $("#text").css("display","none");
            $(".active")[0].classList.remove("active")
            $("#home").addClass("active");
            if(!$("#arrows").hasClass("invisible"))$("#arrows").addClass("invisible");
            setTimeout(()=>$("#presa").removeClass("fade-2s"),1000)
        },1000);
    });

    $("#contact").click(()=>{
        $("#presa").addClass("fade-2s");
        setTimeout(()=>{
            $("#title").text("Contact me");
            $("#text").text("Click on the buttons below!")
            $("#subtitle").css("display","none");
            $("#text").css("display","block");
            if($("#arrows").hasClass("invisible"))$("#arrows").removeClass("invisible");
            $(".active")[0].classList.remove("active")
            $("#contact").addClass("active");
            setTimeout(()=>$("#presa").removeClass("fade-2s"),1000)
        },1000);
    })

}
