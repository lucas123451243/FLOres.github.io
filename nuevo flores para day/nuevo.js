const flores = document.querySelectorAll(".flor");

flores.forEach(flor => {

    let escala = 1;

    setInterval(()=>{

        escala = escala === 1 ? 1.1 : 1;

        flor.style.transform = `scale(${escala})`;

    },2000);

});