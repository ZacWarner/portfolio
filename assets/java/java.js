$(document).ready(function () {


    //first site
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
            .attr("data-slide-to", "2");
        var li4 = $("<li>").attr("data-target", "#projectsCar")
            .attr("data-slide-to", "3");
        carIndicators.append(li1, li2, li3, li4);

        var carInner = $("<div>").addClass("carousel-inner");
        var car1 = carItemBuilder("assets/images/basic portfolio.png", "My First Portfolio!", "The first portfolio I built using just html and css");
        var car2 = carItemBuilder("assets/images/hangman game.png", "Word Guess Game!", "hangman made with java and html!");
        var car3 = carItemBuilder("assets/images/movie trivia.png", "Movie Trivia!", "A movie trivia game pulling questions from an api");
        var car4 = carItemBuilder("aseets/images/projectOne.png", "Project one!", "A group project with mapbox functionality and other apis!")
        car1.addClass("active");
        carInner.append(car1, car2, car3, car4);

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

    function contact() {
        $("#cardRow").empty();

        var card = $("<div>").addClass("card w-100").attr("id", "contactCard");
        var cardHeader = $("<h5>").addClass("card-header text-right").html("Contact    <i class='fas fa-reply' id='return'></i>");
        var cardBody = $("<div>").addClass("card-body");
        var loc = $("<p>").html("I currently live in Rocklin, CA");
        var phone = $("<p>").html("<i class='fas fa-mobile-alt'></i> 916-300-8620");
        var email = $("<p>").html('<i class="fas fa-envelope"></i> zektgn@gmail.com');
        var linked = $("<p>").html('<i class="fab fa-linkedin mx-1"></i>linkedin link');
        var gitHub = $("<p>").html('<i class="fab fa-github"></i> ZacWarner');
        cardBody.append(loc, phone, email, linked, gitHub);
        card.append(cardHeader, cardBody);

        $("#cardRow").append(card);
    };

    function carItemBuilder(link, title, description) {
        var carItem = $("<div>").addClass("carousel-item");
        var img = $("<img>").addClass("d-block w-100 carImage").attr("src", link).attr("alt", title);
        var carCap = $("<div>").addClass("carousel-caption d-none d-md-block");
        var h5 = $("<h5>").addClass("m-0 p-1 rounded-top").attr("id", "carTitle").html(title);
        var p = $("<p>").addClass("rounded-bottom").attr("id", "carDescription").html(description);
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

    $(document).on("click", "#Contact", function () {
        contact();
    });







    //second site start

    $(document).on("click", "#upgrade", function () {
        $("#site").empty();
        $("body").css("background", "url('assets/images/background.jpg')").css("background-size", "100%");
        console.log("again");
        $("#site").addClass("text-white");
        newHeader();
        newNavBar();
        buildFramWork();
        openingStuff();
    });

    //functions for building second site.
    function newHeader() {
        var nav = $("<div>").addClass(" jumbotron border-bottom border-dark jumbotron-fluid text-white mx-5 mt-3 mb-0 px-5 pb-0 bg-transparent");
        var div = $("<div>").addClass("container");
        var row = $("<div>").addClass("row").addClass("align-text-bottom");
        var col1 = $("<div>").addClass("col-md-6");
        var col2 = $("<div>").addClass("col-md-6");
        var h1 = $("<h1>").text("Zac Warner");
        var h6 = $("<h4>").addClass("down").text("A full stack devolper")
        col1.append(h1);
        col2.append(h6);
        row.append(col1, col2);
        div.append(row);
        nav.append(div);

        $("body").prepend(nav);
    };

    function newNavBar() {
        var nav = $("<nav>").addClass("navbar navbar-expand-lg navbar-light bg-transparent text-white justify-content-center");
        var container = $("<div>").addClass("container");
        var row = $("<div>").addClass("row justify-content-center")
        var a = $("<a>").addClass("navbar-brand h5").html("home");
        var tog = $("<button>").addClass("navbar-toggler").attr("id", "button").attr("data-toggle", "collapse")
            .attr("data-target", "#navbarSupportedContent").attr("aria-expanded", "false").attr("aria-label", "Toggle navigation");
        var icon = $("<span>").addClass("navbar-toggler-icon");
        tog.append(icon);
        var div = $("<div>").addClass("collapse navbar-collapse").attr("id", "navbarSupportedContent");
        var ul = $("<ul>").addClass("navbar-nav mr-auto");
        var l1 = navbarListItemBuilder("About Me");
        var l2 = navbarListItemBuilder("Portfolio");
        var l3 = navbarListItemBuilder("Contact");
        ul.append(l1, l2, l3);
        div.append(ul);
        row.append(a, tog, div);
        container.append(row);
        nav.append(container);
        $("#site").prepend(nav);
    };

    function navbarListItemBuilder(imp) {
        var li = $("<li>").addClass("nav-item");
        var a = $("<a>").addClass("nav-link h5").html(imp).attr("id", imp + "Link");
        li.append(a);
        return li;
    };

    function buildFramWork() {
        var body = $("<div>").addClass("container");
        var bodyRow = $("<div>").addClass("row");
        var leftCol = $("<div>").addClass("col-md-2").attr("id", "leftCol");
        var centerBody = $("<div>").addClass("col-md-8").attr("id", "body");
        var rightCol = $("<div>").addClass("col-md-8").attr("id", "rightCol");
        var bottomRow = $("<div>").addClass("row justify-content-center text-center").attr("id", "bottom");
        bodyRow.append(leftCol, centerBody, rightCol);
        body.append(bodyRow, bottomRow);
        $("#site").append(bodyRow);
    };

    function openingStuff() {
        var card = $("<div>").addClass("card text-white border-0 bg-transparent text-center");
        var cardBody = $("<div>").addClass("card-body");
        var cardTitle = $("<h5>").addClass("card-title ").text("Welcome to my Website!");
        var h6 = $("<h6>").addClass("card-subtitle border-bottom mb-2").text("Hope you enjoy it! made using:");
        var p1 = $("<p>").addClass("car-text").text("Html");
        var p2 = $("<p>").addClass("car-text").text("JavaScript");
        var p3 = $("<p>").addClass("car-text").text("CSS");
        var p4 = $("<p>").addClass("car-text").text("Jquery");
        var p5 = $("<p>").addClass("car-text").text("Bootstrap")

        cardBody.append(cardTitle, h6, p1, p2, p3, p4, p5);
        card.append(cardBody);
        $("#body").append(card);
    };

    function newPortfolio() {
        $("#body").css("background", "url(http://www.public-domain-photos.com/free-stock-photos-4/travel/san-diego/san-diego-bay-3.jpg) no-repeat center center fixed;")
            .css("-webkit-background-size", "cover")
            .css("-moz-background-size:", "cover")
            .css("-o-background-size:", "cover")
            .css("background-size", "cover")
            .css("margin", "3%");
        console.log("change");
    };

    $(document).on("click", "#PortfolioLink", function () {
        $("#body").empty();
        newPortfolio();

        console.log("click")
    });
});