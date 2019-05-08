$(document).ready(function () {

    function Aboutme() {






    };

    function startMenu() {
        $("#cardRow").empty();

        var cardDeck = $("<div>").addClass("card-deck justify-content-center");
        var aboutTile = cardBuilder("About", "About me!");
        var portTile = cardBuilder("Portfolio", "My Projects");
        var contactTile = cardBuilder("Contact", "How to get in touch!");

        cardDeck.append(aboutTile, portTile, contactTile);

        $("#cardRow").append(cardDeck);

    };

    function cardBuilder(title, subTitle) {
        var card = $("<div>").addClass("card text-center startCard").attr("style", "width: 18rem; height: 22rem;")
            .attr("id", title);
        var cardBody = $("<div>").addClass("card-body my-4");
        var cardTitle = $("<h5>").addClass("card-title").html(title);
        var hr = $("<hr>");
        var cardSubtitle = $("<h6>").addClass("card-subtitle mb-2 text-muted").html(subTitle);

        cardBody.append(cardTitle, hr, cardSubtitle);
        card.append(cardBody);

        return card;

    };

    function aboutMe() {
        $("#cardRow").empty();

        var card = $("<div>").addClass("card").attr("id", "aboutCard");
        var cardHeader = $("<h5>").addClass("card-header").html("About    <i class='fas fa-reply' id='return'></i>");
        var cardBody = $("<div>").addClass("card-body");
        var img = $("<img>").addClass("img-responsive float-left mx-2").attr("src", "assets/images/ZacWarner.jpg").attr("id", "myPic");
        var p = $("<p>").html("I’m a highly motivated Full Stack Web developer with a deep understanding of Java, HTML, and CSS. I have years of experience in customer service and working in a team setting.I worked as a retail manager for over 5 years where I learned how to motivate and drive a team of people to reach deadlines while maintaining a high level of customer satisfaction.I enjoy using cutting edge technology to tackle challenges and create efficient solutions to problems.I’m a quick learner and strive to quickly become an asset to whoever I work with quickly becoming the go - to guy for problems or important tasks.After taking a coding class in college, I fell in love with it and decided to skip the traditional learning environment for something more cutting edge.Through the UCD Coding Bootcamp, I have gained hands - on experience coding full - stack applications in teams and on my own.My goal as a developer is to create new and efficient web applications that push the boundaries of what was possible, while putting user experiences first.")

        cardBody.append(img, p);
        card.append(cardHeader, cardBody);

        $("#cardRow").append(card);

    };

    function portfolio() {
        $("#cardRow").empty();

        var card = $("<div>").addClass("card text-center").attr("id", "portfolioCard");
        var cardHeader = $("<h5>").addClass("card-header").html("Portfolio <i class='fas fa-reply' id='return'></i>");
        var cardBody = $("<div>").addClass("card-body");

        var carousel = $("<div>").addClass("carousel slide").attr("id", "projectsCar")
            .attr("data-ride", "carousel");

        var carIndicators = $("<ol>").addClass("carousel-indicators");
        var li1 = $("<li>").addClass("active").attr("data-target", "#projectsCar")
            .attr("data-slide-to", "0");
        var li2 = $("<li>").attr("data-target", "#projectsCar")
            .attr("data-slide-to", "1");
        var li3 = $("<li>").attr("data-target", "#projectsCar")
            .attr("data-slide-to", "3");
        carIndicators.append(li1, li2, li3);

        var carInner = $("<div>").addClass("carousel-inner");
        var car1 = carItemBuilder("assets/images/basic portfolio.png", "My First Portfolio!", "The first portfolio I built using just html and css");
        var car2 = carItemBuilder("assets/images/hangman game.png", "Word Guess Game!", "hangman made with java and html!");
        var car3 = carItemBuilder("assets/images/movie trivia.png", "Movie Trivia!", "A movie trivia game pulling questions from an api");
        car1.addClass("active");
        carInner.append(car1, car2, car3);

        var carPrev = $("<a>").addClass("carousel-control-prev").attr("href", "#projectsCar")
            .attr("role", "button").attr("data-slide", "prev")
            .html("<span class='carousel-control-prev-icon' aria-hidden='true'></span><span class='sr-only'>Previous</span>");
        var carNext = $("<a>").addClass("carousel-control-next").attr("href", "#projectsCar")
            .attr("role", "button").attr("data-slide", "next")
            .html("<span class='carousel-control-next-icon' aria-hidden='true'></span><span class='sr-only'>Next</span>");

        carousel.append(carIndicators, carInner, carPrev, carNext);

        cardBody.append(carousel);
        card.append(cardHeader, cardBody);

        $("#cardRow").append(card);


    };

    function carItemBuilder(link, title, description) {
        var carItem = $("<div>").addClass("carousel-item");
        var img = $("<img>").addClass("d-block w-100 carImage").attr("src", link).attr("alt", title);
        var carCap = $("<div>").addClass("carousel-caption d-none d-md-block");
        var h5 = $("<h5>").addClass("m-0 p-1").attr("id", "carTitle").html(title);
        var p = $("<p>").attr("id", "carDescription").html(description);
        carCap.append(h5, p);
        carItem.append(img, carCap);
        return carItem;
    };

    startMenu();

    $(document).on("click", "#About", function () {
        aboutMe();
    });

    $(document).on("click", "#return", function () {
        console.log("click")
        startMenu();
    });

    $(document).on("click", "#Portfolio", function () {
        portfolio();
    });

});