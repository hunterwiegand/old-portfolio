$(".read-more").on("click", function (event) {
    event.preventDefault();

    const contentText = getContext(event.target.id);

    const div = $("<div>");
    $(div).attr("id", "modal-container");
    $(div).addClass("readme mt-4");
    const divModal = $("<div>");
    $(divModal).attr("id", "modal");
    const divClose = $("<div>");
    $(divClose).attr("id", "close-modal");
    divModal.append(divClose);
    const divContent = $("<div>");
    $(divContent).attr("id", "modal-content");
    const closeBtn = $("<span>").html("&times;");
    $(closeBtn).addClass("close-button");
    const content = $("<p>").html(contentText);
    divClose.append(closeBtn);
    divContent.append(content);
    divModal.append(divContent);

    div.append(divModal);

    $(this).parent().parent().parent().parent().parent().parent().prepend(div);
    // $(this).prepend(div);


    // if ($("#modal-container").length) {
    //     console.log("there is a modal");
    //     $(window).click(function (event) {
    //         console.log(event.target);
    //         console.log(document.getElementById("modal-container"));
    //         if (event.target == document.getElementById("modal-container")) {
    //             document.getElementById("modal-container").style.display = "none";
    //         }
    //     });
    // }

});

function getContext(id) {

    const blobberReadme = "Blobber Royal \n\n" + 
    "Notable Technologies: \n" +
    "Phaser.js, Socket.io, Express, Node.js, MySQL/Sequlize, jQuery, Microsoft's voice detection api. \n" +
    "Blobber Royal is a multiplayer web application that utilizes voice commands for various movements. My team consisted of me and two of my colleagues. This project was really exciting for my team because we were embarking on many new technologies. This was our first dive into socket.io and the concept of web sockets. We also experimented with different voice detection apis, and javascript game engines.";
    const fftReadme = "Food for Thought App \n" + 
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!";
    const mysticSpellsReadme = "Hangman Game";
    const nodeSiriReadme = "Siri like node App";
    const giffyReadme = "Giffy api generator";

    switch (id) {
        case "blobber-readme":
            return blobberReadme;
        case "fft-readme":
            return fftReadme;
        case "mystic-spells-readme":
            return mysticSpellsReadme;
        case "node-siri-readme":
            return nodeSiriReadme;
        case "giffy-readme":
            return giffyReadme;

    }
}

$(document).on("click", ".close-button", function () {
    console.log("testing");
    $("#modal-container").remove();
})

// $(".close-button").on("click", function () {
//     console.log("testing");
//     $("#modal-container").remove();
// })



// $("#testing-btn").on("click", function(event) {
//     console.log("herfgbhqa");
//     $("#id01").css("display", "block")
// })

//  // Get the modal
//  var modal = document.getElementById('id01');
          
//  // When the user clicks anywhere outside of the modal, close it
//  window.onclick = function(event) {
//    if (event.target == modal) {
//      modal.style.display = "none";
//    }
//  }



// "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!"