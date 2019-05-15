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
    divContent.append(contentText);
    divModal.append(divContent);

    div.append(divModal);

    $(this).parent().parent().parent().parent().parent().parent().prepend(div);
});

function getContext(id) {

    const readmeTemplate = $("<div>").addClass("container");

    let row0 = $("<div>").addClass("row");
    const row1 = $("<div>").addClass("row");
    const row2 = $("<div>").addClass("row");
    const row3 = $("<div>").addClass("row");
    const colsm120 = $("<div>").addClass("col-sm-12 text-center");
    const colsm121 = $("<div>").addClass("col-sm-12 text-center");
    const colsm123 = $("<div>").addClass("col-sm-12");
    const colsm124 = $("<div>").addClass("col-sm-12 mt-3");
    const titleSpan = $("<span>");
    const insightSpan = $("<span>");
    const descriptionSpan = $("<span>");
    const notableTech = $("<span>").html("Notable Technologies");
    const ul0 = $("<ul>");
    const ul1 = $("<ul>");
    let li = $("<li>");
    const colsm60 = $("<div>").addClass("col-sm-6");
    const colsm61 = $("<div>").addClass("col-sm-6");

    const BlobberReadme = {
        title: titleSpan.html("Blobber Royal"),
        tech0: [
            "Phaser.js",
            "Socket.io",
            "Express",
            "Node.js",
            "MySQL/Sequelize"
        ],
        tech1: [
            "jQuery",
            "Microsoft Azure Speec to Text SDK",
            "HandleBars",
            "Javascript"
        ],

        insight: insightSpan.html("Blobber Royal is a multiplayer web application that utilizes voice commands for various movements. My team consisted of me and two of my colleagues. This project was really exciting for my team because we were embarking on many new technologies. This was our first dive into socket.io and the concept of web sockets. We also experimented with different voice detection apis, and javascript game engines."),

        description: descriptionSpan.html("Blobber Royal is a game where you shouting at the screen actually does something usefull! The object of the game is to shout 'Left', 'Up', 'Right', 'Down' to move your blob across the battlefield. Once you collide with an opposing blob both blobs will bounce back. You goal is to bounce the enemy blob out of the playing field until they lose all their lives."),

        formate: function () {
            const text = readmeTemplate.append(row0);
            row0.append(colsm120);
            colsm120.append(this.title);
            readmeTemplate.append(row1);
            row1.addClass("mb-3");
            row1.append(colsm121);
            colsm121.append(notableTech);
            readmeTemplate.append(row2);
            row2.append(colsm60);
            colsm60.append(ul0);

            this.tech0.forEach(element => {
                ul0.append($("<li>").html(element));
            });

            row2.append(colsm61);
            colsm61.append(ul1);

            this.tech1.forEach(element => {
                ul1.append($("<li>").html(element));
            });

            readmeTemplate.append(row3);
            row3.append(colsm123);
            colsm123.append(this.insight);
            row3.append(colsm124);
            colsm124.append(this.description);

            





            return text;
        }

    }




    // const testingFormat = readmeTemplate.append(row).append(colsm12).append((span).html(BlobberReadme.title));

    // // console.log(testingFormat);
    // console.log(BlobberReadme.formate())


    const blobberReadme = "Blobber Royal \n\n" +
        "Notable Technologies: \n" +
        "Phaser.js, Socket.io, Express, Node.js, MySQL/Sequlize, jQuery, Microsoft's voice detection api. \n" +
        "Blobber Royal is a multiplayer web application that utilizes voice commands for various movements. My team consisted of me and two of my colleagues. This project was really exciting for my team because we were embarking on many new technologies. This was our first dive into socket.io and the concept of web sockets. We also experimented with different voice detection apis, and javascript game engines. \n" +
        "";
    const fftReadme = "Food for Thought App \n" +
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!";
    const mysticSpellsReadme = "Hangman Game";
    const nodeSiriReadme = "Siri like node App";
    const giffyReadme = "Giffy api generator";

    switch (id) {
        case "blobber-readme":
            const flarg = BlobberReadme.formate();
            // console.log(flarg);
            return flarg;
        case "fft-readme":
            console.log(fftReadme);
            return fftReadme;
        case "mystic-spells-readme":
            return mysticSpellsReadme;
        case "node-siri-readme":
            return nodeSiriReadme;
        case "giffy-readme":
            return giffyReadme;

    }
}

function format(title) {

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