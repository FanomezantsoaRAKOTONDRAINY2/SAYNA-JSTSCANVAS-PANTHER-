const suit = document.querySelector('.cursair');

    // l'image qui suit le cursair

    window.addEventListener("mousemove", function (e){
        suit.style.left = e.clientX+"px";
        suit.style.top = e.clientY+"px";

    });

