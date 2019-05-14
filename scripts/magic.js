$(".read-more").on("click", function (event) {
    event.preventDefault();

    const contentText = getContext(event.target.id);

    const div = $("<div>");
    $(div).attr("id", "modal-container");
    $(div).addClass("readme");
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
    divContent.append(closeBtn);
    divContent.append(content);
    divModal.append(divContent);





    div.append(divModal);

    $(this).parent().parent().parent().parent().parent().prepend(div);

});

function getContext(id) {

    const blobberReadme = "Blobber Royal Game";
    const fftReadme = "Food for Thought App";
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



// "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam unde autem ad fugiat ut esse,perferendis illo, dolorum recusandae nostrum natus voluptas nisi eveniet facere sapiente id quodsit!"