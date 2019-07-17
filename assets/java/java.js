$(document).ready(function () {


    //first site
    function startMenu() {
        $("#cardRow").empty();
        var mySkills = ["Html", "JavaScript", "Node", "React", "MongoDb"];
        var myProjects = ["Agora", "Movie Trivia", "Discount Destinations"]

        var cardDeck = $("<div>").addClass("card-deck justify-content-center");
        var aboutTile = cardBuilder("About", "Skills: ", mySkills);
        var portTile = cardBuilder("Portfolio", "My Projects:", myProjects);
        var contactTile = cardBuilder("Contact", "How to get in touch!");

        cardDeck.append(aboutTile, portTile, contactTile);

        $("#cardRow").append(cardDeck);

    };

    function cardBuilder(title, subTitle, listArr) {
        var card = $("<div>").addClass("card text-center text-white bg-transparent startCard border-3 border-dark").attr("style", "width: 18rem; height: 22rem;")
            .attr("id", title);
        var cardBody = $("<div>").addClass("card-body my-4");
        var cardTitle = $("<h4>").addClass("card-title").html(title);
        var hr = $("<hr>").addClass("border-3 border-dark");
        var cardSubtitle = $("<h5>").addClass("card-subtitle mb-3 text-white").html(subTitle);
        if (listArr) {
            let ul = $("<ul>").addClass("text-left")
            for (let i = 0; i < listArr.length; i++) {
                let p = $("<li>").addClass("card-subtitle my-2 text-white").html(listArr[i]);
                ul.append(p);
            }
            cardSubtitle.append(ul);
        }

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

        var card = $("<div>").addClass("card text-center justify-content-center w-100").attr("id", "portfolioCard");
        var cardHeader = $("<h5>").addClass("card-header").html("Portfolio <i class='fas fa-reply' id='return'></i>");
        var cardBody = $("<div>").addClass("card-body text-center justify-content-center w-100");
        var row = $("<div>").addClass("row text-center justify-content-center")
        var col12 = $("<div>").addClass("col-md-12 text-center justify-content-center")

        var carousel = $("<div>").addClass("carousel slide text-center justify-content-center").attr("id", "projectsCar")
            .attr("data-ride", "carousel");

        var carIndicators = $("<ol>").addClass("carousel-indicators");
        var li1 = $("<li>").addClass("active").attr("data-target", "#projectsCar")
            .attr("data-slide-to", "0");
        var li2 = $("<li>").attr("data-target", "#projectsCar")
            .attr("data-slide-to", "1");
        var li3 = $("<li>").attr("data-target", "#projectsCar")
            .attr("data-slide-to", "2");

        carIndicators.append(li1, li2, li3);

        var carInner = $("<div>").addClass("carousel-inner text-center justify-content-center");

        var car1 = carItemBuilder("assets/images/AgoraMainPage.png",
            "Agora, a market place to sell items",
            "A full stack web app using node, express, and passport",
            "https://project2agora.herokuapp.com/",
            "https://github.com/ZacWarner/Project2");
        var car2 = carItemBuilder("assets/images/movie trivia.png",
            "Movie Trivia!",
            "A movie trivia game pulling questions from an api",
            "https://zacwarner.github.io/TriviaGame/",
            "https://github.com/ZacWarner/TriviaGame");
        var car3 = carItemBuilder("assets/images/projectOne.png",
            "Discount Destinations!",
            "A group project with mapbox functionality and other apis!",
            "https://zacwarner.github.io/GroupApp/",
            "https://github.com/ZacWarner/GroupApp")
        car1.addClass("active");
        carInner.append(car1, car2, car3);

        var carPrev = $("<a>").addClass("carousel-control-prev").attr("href", "#projectsCar")
            .attr("role", "button").attr("data-slide", "prev")
            .html("<span class='carousel-control-prev-icon' aria-hidden='true'></span><span class='sr-only'>Previous</span>");
        var carNext = $("<a>").addClass("carousel-control-next").attr("href", "#projectsCar")
            .attr("role", "button").attr("data-slide", "next")
            .html("<span class='carousel-control-next-icon' aria-hidden='true'></span><span class='sr-only'>Next</span>");

        carousel.append(carIndicators, carInner, carPrev, carNext);

        col12.append(carousel)
        row.append(col12)
        cardBody.append(row);
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
        var linked = $("<p>");
        var gitHub = $("<p>");
        var gitHubLInk = $("<a>").addClass("text-dark").attr("href", "https://github.com/ZacWarner").html('<i class="fab fa-github"></i> ZacWarner');
        var linkedInLink = $("<a>").addClass("text-dark").attr("href", "https://www.linkedin.com/in/zac-warner-5a8079122/").html('<i class="fab fa-linkedin mx-1"></i>linkedin');
        linked.append(linkedInLink);
        gitHub.append(gitHubLInk);
        cardBody.append(loc, phone, email, linked, gitHub);
        card.append(cardHeader, cardBody);

        $("#cardRow").append(card);
    };

    function carItemBuilder(img, title, description, link, gitHub) {
        var carItem = $("<div>").addClass("carousel-item text-center justify-content-center");
        var a = $("<a>").attr("href", link);
        var img = $("<img>").addClass("d-block mx-auto carImage").attr("src", img).attr("alt", title);
        var carCap = $("<div>").addClass("carousel-caption d-none d-md-block");
        var h5 = $("<h5>").addClass("m-0 p-1 rounded-top").attr("id", "carTitle").html(title);
        var p = $("<p>").addClass(" m-0").attr("id", "carDescription").html(description);
        var p2 = $("<p>").addClass("rounded-bottom pb-2 m-0").attr("id", "carDescription").html("click the picture to check out the deployed link. Link to Github repo bellow.");
        var gitHub = $("<a>").addClass("rounded text-white m-0 pb-1 px-4").attr("id", "carDescription").attr("href", gitHub).html('<i class="fab fa-github"></i> GitHub Repo');
        carCap.append(h5, p, p2, gitHub);
        a.append(img)
        carItem.append(a, carCap);
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



});



