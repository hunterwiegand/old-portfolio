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
    // const content = $("<p>").html(contentText);
    divClose.append(closeBtn);
    divContent.append(contentText);
    divModal.append(divContent);

    div.append(divModal);

    $(this).parent().parent().parent().parent().parent().parent().prepend(div);
});

function getContext(id) {

    switch (id) {
        case "blobber-readme":
            return BlobberReadme.format;
        case "fft-readme":
            return FFTReadme.format;
        case "mystic-spells-readme":
            return MysticSpellsReadme.format;
        case "node-siri-readme":
            return NodeSiriReadme.format;
        case "giffy-readme":
            return GiffyReadme.format;

    }
}

const BlobberReadme = {
    title: $("<span>").html("Blobber Royal"),
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

    insight: $("<span>").html("Blobber Royal is a multiplayer web application that utilizes voice commands for various movements. My team consisted of me and two of my colleagues. This project was really exciting for my team because we were embarking on many new technologies. This was our first dive into socket.io and the concept of web sockets. We also experimented with different voice detection apis, and javascript game engines."),

    description: $("<span>").html("Blobber Royal is a game where you shouting at the screen actually does something usefull! The object of the game is to shout 'Left', 'Up', 'Right', 'Down' to move your blob across the battlefield. Once you collide with an opposing blob both blobs will bounce back. You goal is to bounce the enemy blob out of the playing field until they lose all their lives."),

    format: function () {
        return formatReadme(BlobberReadme.title.html(), BlobberReadme.tech0, BlobberReadme.tech1, BlobberReadme.insight.html(), BlobberReadme.description.html())
    }
}

const FFTReadme = {
    title: $("<span>").html("Food For Thought"),
    tech0: [
        "HTML5",
        "Bootstrap",
        "FireBase",
        "Git version control"
    ],
    tech1: [
        "fullCalendar.js",
        "jQuery",
        "EdamameAPI",
        "ajax"
    ],

    insight: $("<span>").html("Food For Thought was my first project working with a team. During this project I learned the basics of Firebase, and how to handle state change. I also dove into unknown waters while figuring out how to utilize the fullCalendar.js library. I have many thanks to this project for teaching me the importance of Git version control, and how to troubleshoot when gitHub doesn't play nice."),

    description: $("<span>").html("Food For Thought was created to solve an issue we all get faced with. 'I want to cook all my left over ingredients, but I have no idea what to make with them'. Well fret no more, because with Food For Thought all you have to do is enter your pantry items, then head over to the recipe page; select the items you want to cook with, and BAM. You are greeted with three recipes to choose from. But that's not all! After you decide you want to cook the meal, you can plan it out and choose what day you want to eat it on. This process will also populate your shopping cart with any items you're missing from the recipe"),

    format: function() {
        return formatReadme(FFTReadme.title.html(), FFTReadme.tech0, FFTReadme.tech1, FFTReadme.insight.html(), FFTReadme.description.html())
    }
}

const MysticSpellsReadme = {
    title: $("<span>").html("Food For Thought"),
    tech0: [
        ""
    ],
    tech1: [
        ""
    ],
    insight: $("<span>").html(""),
    description: $("<span>").html(""),
    format: function() {
        return formatReadme(MysticSpellsReadme.title.html(), MysticSpellsReadme.tech0, MysticSpellsReadme.tech1, MysticSpellsReadme.insight.html(), MysticSpellsReadme.description.html())
    }
}

const NodeSiriReadme = {
    title: $("<span>").html("Node-Siri"),
    tech0: [
        ""
    ],
    tech1: [
        ""
    ],
    insight: $("<span>").html(""),
    description: $("<span>").html(""),
    format: function() {
        return formatReadme(NodeSiriReadme.title.html(), NodeSiriReadme.tech0, NodeSiriReadme.tech1, NodeSiriReadme.insight.html(), NodeSiriReadme.description.html())
    }
}

const GiffyReadme = {
    title: $("<span>").html("Giffy"),
    tech0: [
        ""
    ],
    tech1: [
        ""
    ],
    insight: $("<span>").html(""),
    description: $("<span>").html(""),
    format: function() {
        return formatReadme(GiffyReadme.title.html(), GiffyReadme.tech0, GiffyReadme.tech1, GiffyReadme.insight.html(), GiffyReadme.description.html())
    }
}

function formatReadme(title, tech0, tech1, insight, description) {
    const readmeTemplate = $("<div>").addClass("container");
    const row0 = $("<div>").addClass("row");
    const row1 = $("<div>").addClass("row");
    const row2 = $("<div>").addClass("row");
    const row3 = $("<div>").addClass("row");
    const colsm120 = $("<div>").addClass("col-sm-12 text-center");
    const colsm121 = $("<div>").addClass("col-sm-12 text-center");
    const colsm123 = $("<div>").addClass("col-sm-12");
    const colsm124 = $("<div>").addClass("col-sm-12 mt-3");
    const notableTech = $("<span>").html("Notable Technologies");
    const ul0 = $("<ul>");
    const ul1 = $("<ul>");
    const colsm60 = $("<div>").addClass("col-sm-6");
    const colsm61 = $("<div>").addClass("col-sm-6");

    const text = readmeTemplate.append(row0);
    row0.append(colsm120);
    colsm120.append(title);
    readmeTemplate.append(row1);
    row1.addClass("mb-3");
    row1.append(colsm121);
    colsm121.append(notableTech);
    readmeTemplate.append(row2);
    row2.append(colsm60);
    colsm60.append(ul0);

    tech0.forEach(element => {
        ul0.append($("<li>").html(element));
    });

    row2.append(colsm61);
    colsm61.append(ul1);

    tech1.forEach(element => {
        ul1.append($("<li>").html(element));
    });

    readmeTemplate.append(row3);
    row3.append(colsm123);
    colsm123.append(insight);
    row3.append(colsm124);
    colsm124.append(description);

    return text;
}

$(document).on("click", ".close-button", function () {
    $("#modal-container").remove();
})
