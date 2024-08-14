$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }


    let boton = document.querySelector(".pause")
    let audioEtiqueta = document.querySelector("audio")

    boton.addEventListener("click", () => {
      audioEtiqueta.setAttribute("src", "#")
      audioEtiqueta.play()
      console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    })
   
});


    let boton = document.querySelector(".reproductor")
    let audioEtiqueta = document.querySelector("audio")

    boton.addEventListener("click", () => {
      audioEtiqueta.setAttribute("src", "cuandome.mp3")
      audioEtiqueta.play()
      console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    })


