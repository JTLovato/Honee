
let splashBtn = document.getElementById("splashBtn");
let  splash = document.getElementById("splash");
let main = document.getElementById("main");
let mainNav = document.getElementById("mainNav");
let health = document.getElementById("health");
let hygiene = document.getElementById("hygiene");
let social = document.getElementById("social");
let enjoy = document.getElementById("enjoy");
let relax = document.getElementById("relax");
let work = document.getElementById("work");
let profile = document.getElementById("profile");

let centerNav = document.getElementById("centerNav");
let centerNavCard = document.getElementById("centerNavCard");
let leftNav = document.getElementById("leftNav");
let leftNavCard = document.getElementById("leftNavCard");
let rightNav = document.getElementById("rightNav");
let rightNavCard = document.getElementById("rightNavCard");

let centerNavP = document.getElementById("centerNavP");
let leftNavP = document.getElementById("leftNavP");
let rightNavP = document.getElementById("rightNavP");

let closeHelpCard = document.getElementById("closeHelpCard");
let closeContactCard = document.getElementById("closeContactCard");
let closeResourcesCard = document.getElementById("closeResourcesCard");

let healthCard = document.getElementById("healthCard");
let hygieneCard = document.getElementById("hygieneCard");
let socialCard = document.getElementById("socialCard");
let enjoyCard = document.getElementById("enjoyCard");
let relaxCard = document.getElementById("relaxCard");
let workCard = document.getElementById("workCard");
let profileCard = document.getElementById("profileCard");



let closeHealthCard = document.getElementById("closeHealthCard");
let closeHygieneCard = document.getElementById("closeHygieneCard");
let closeSocialCard = document.getElementById("closeSocialCard");
let closeEnjoyCard = document.getElementById("closeEnjoyCard");
let closeRelaxCard = document.getElementById("closeRelaxCard");
let closeWorkCard = document.getElementById("closeWorkCard");
let closeProfileCard = document.getElementById("closeProfileCard");

let healthQuote = document.getElementById("healthQuote");
let healthAuthor = document.getElementById("healthAuthor");
let hygieneQuote = document.getElementById("hygieneQuote");
let hygieneAuthor = document.getElementById("hygieneAuthor");
let socialQuote = document.getElementById("socialQuote");
let socialAuthor = document.getElementById("socialAuthor");
let enjoyQuote = document.getElementById("enjoyQuote");
let enjoyAuthor = document.getElementById("enjoyAuthor");
let relaxQuote = document.getElementById("relaxQuote");
let relaxAuthor = document.getElementById("relaxAuthor");
let workQuote = document.getElementById("workQuote");
let workAuthor = document.getElementById("workAuthor");

let moreReading = document.getElementById("moreReading");

let soundOn = document.getElementById("soundOn");
let soundOff = document.getElementById("soundOff");
let iconBG = document.getElementById("iconBG");

let healthSquare1 = document.getElementById("healthSquare1");
let healthSquare2 = document.getElementById("healthSquare2");
let healthSquare3 = document.getElementById("healthSquare3");
let healthSquare4 = document.getElementById("healthSquare4");
let healthCount = 0;
let healthResults = document.getElementById("healthResults");
let healthSquareHold = document.getElementById("healthSquareHold");

let hygieneSquare1 = document.getElementById("hygieneSquare1");
let hygieneSquare2 = document.getElementById("hygieneSquare2");
let hygieneSquare3 = document.getElementById("hygieneSquare3");
let hygieneSquare4 = document.getElementById("hygieneSquare4");
let hygieneCount = 0;
let hygieneResults = document.getElementById("hygieneResults");
let hygieneSquareHold = document.getElementById("hygieneSquareHold");

let socialSquare1 = document.getElementById("socialSquare1");
let socialSquare2 = document.getElementById("socialSquare2");
let socialSquare3 = document.getElementById("socialSquare3");
let socialSquare4 = document.getElementById("socialSquare4");
let socialCount = 0;
let socialResults = document.getElementById("socialResults");
let socialSquareHold = document.getElementById("socialSquareHold");

let workSquare1 = document.getElementById("workSquare1");
let workSquare2 = document.getElementById("workSquare2");
let workSquare3 = document.getElementById("workSquare3");
let workSquare4 = document.getElementById("workSquare4");
let workCount = 0;
let workResults = document.getElementById("workResults");
let workSquareHold = document.getElementById("workSquareHold");

let relaxSquare1 = document.getElementById("relaxSquare1");
let relaxSquare2 = document.getElementById("relaxSquare2");
let relaxSquare3 = document.getElementById("relaxSquare3");
let relaxSquare4 = document.getElementById("relaxSquare4");
let relaxCount = 0;
let relaxResults = document.getElementById("relaxResults");
let relaxSquareHold = document.getElementById("relaxSquareHold");

let enjoySquare1 = document.getElementById("enjoySquare1");
let enjoySquare2 = document.getElementById("enjoySquare2");
let enjoySquare3 = document.getElementById("enjoySquare3");
let enjoySquare4 = document.getElementById("enjoySquare4");
let enjoyCount = 0;
let enjoyResults = document.getElementById("enjoyResults");
let enjoySquareHold = document.getElementById("enjoySquareHold");





splashBtn.addEventListener("click", disappearFunc);

function disappearFunc() {
    splash.classList.add("splashGone");
    main.classList.add("hexGrow");
    mainNav.classList.add("mainNavClick");
    moreReading.classList.add("unhide");
}

centerNav.addEventListener("click", function() {
    centerNav.classList.add("centerNavShow");
    centerNavCard.style.display = "flex";
    centerNavP.style.display = "none";
})
leftNav.addEventListener("click", function() {
    leftNav.classList.add("leftNavShow");
    leftNavCard.style.display = "inline-block";
    leftNavP.style.display = "none";
})
rightNav.addEventListener("click", function() {
    rightNav.classList.add("rightNavShow");
    rightNavCard.style.display = "inline-block";
    rightNavP.style.display = "none";
})

closeHelpCard.addEventListener("click", function() {
    centerNav.classList.remove("centerNavShow");
    centerNavCard.style.display = "none";
    centerNavP.style.display = "flex";
})
closeResourcesCard.addEventListener("click", function() {
    leftNav.classList.remove("leftNavShow");
    leftNavCard.style.display = "none";
    leftNavP.style.display = "block";
})
closeContactCard.addEventListener("click", function() {
    rightNav.classList.remove("rightNavShow");
    rightNavCard.style.display = "none";
    rightNavP.style.display = "block";
})

health.addEventListener("click", function() {
    healthCard.classList.add("healthShow");
    health.classList.add("full");
    setTimeout(() => { health.classList.add("hide"); }, 249);
    hygiene.classList.add("hide");
    social.classList.add("hide");
    enjoy.classList.add("hide");
    relax.classList.add("hide");
    work.classList.add("hide");
    profile.classList.add("hide");
})

hygiene.addEventListener("click", function() {
    hygieneCard.classList.add("hygieneShow");
    hygiene.classList.add("full");
    setTimeout(() => { hygiene.classList.add("hide"); }, 249);
    health.classList.add("hide");
    social.classList.add("hide");
    enjoy.classList.add("hide");
    relax.classList.add("hide");
    work.classList.add("hide");
    profile.classList.add("hide");
})

social.addEventListener("click", function() {
    socialCard.classList.add("socialShow");
    social.classList.add("full");
    setTimeout(() => { social.classList.add("hide"); }, 249);
    health.classList.add("hide");
    hygiene.classList.add("hide");
    enjoy.classList.add("hide");
    relax.classList.add("hide");
    work.classList.add("hide");
    profile.classList.add("hide");
})

enjoy.addEventListener("click", function() {
    enjoyCard.classList.add("enjoyShow");
    enjoy.classList.add("full");
    setTimeout(() => { enjoy.classList.add("hide"); }, 249);
    health.classList.add("hide");
    hygiene.classList.add("hide");
    social.classList.add("hide");
    relax.classList.add("hide");
    work.classList.add("hide");
    profile.classList.add("hide");
})

relax.addEventListener("click", function() {
    relaxCard.classList.add("relaxShow");
    relax.classList.add("full");
    setTimeout(() => { relax.classList.add("hide"); }, 249);
    health.classList.add("hide");
    hygiene.classList.add("hide");
    social.classList.add("hide");
    enjoy.classList.add("hide");
    work.classList.add("hide");
    profile.classList.add("hide");
})

work.addEventListener("click", function() {
    workCard.classList.add("workShow");
    work.classList.add("full");
    setTimeout(() => { work.classList.add("hide"); }, 249);
    health.classList.add("hide");
    hygiene.classList.add("hide");
    social.classList.add("hide");
    enjoy.classList.add("hide");
    relax.classList.add("hide");
    profile.classList.add("hide");
})

profile.addEventListener("click", function() {
    profileCard.classList.add("profileShow");
    profile.classList.add("full");
    setTimeout(() => { profile.classList.add("hide"); }, 249);
    health.classList.add("hide");
    hygiene.classList.add("hide");
    social.classList.add("hide");
    enjoy.classList.add("hide");
    relax.classList.add("hide");
    work.classList.add("hide");
})


//          Remove Card Buttons

closeHealthCard.addEventListener("click", function() {
    healthCard.classList.remove("healthShow");
    health.classList.remove("full");
    health.classList.remove("hide");
    hygiene.classList.remove("hide");
    social.classList.remove("hide");
    enjoy.classList.remove("hide");
    relax.classList.remove("hide");
    work.classList.remove("hide");
    profile.classList.remove("hide");

})

closeHygieneCard.addEventListener("click", function() {
    hygieneCard.classList.remove("hygieneShow");
    hygiene.classList.remove("full");
    hygiene.classList.remove("hide");
    health.classList.remove("hide");
    social.classList.remove("hide");
    enjoy.classList.remove("hide");
    relax.classList.remove("hide");
    work.classList.remove("hide");
    profile.classList.remove("hide");
})

closeSocialCard.addEventListener("click", function() {
    socialCard.classList.remove("socialShow");
    social.classList.remove("full");
    social.classList.remove("hide");
    health.classList.remove("hide");
    hygiene.classList.remove("hide");
    enjoy.classList.remove("hide");
    relax.classList.remove("hide");
    work.classList.remove("hide");
    profile.classList.remove("hide");
})

closeEnjoyCard.addEventListener("click", function() {
    enjoyCard.classList.remove("enjoyShow");
    enjoy.classList.remove("full");
    enjoy.classList.remove("hide");
    health.classList.remove("hide");
    social.classList.remove("hide");
    hygiene.classList.remove("hide");
    relax.classList.remove("hide");
    work.classList.remove("hide");
    profile.classList.remove("hide");
})

closeRelaxCard.addEventListener("click", function() {
    relaxCard.classList.remove("relaxShow");
    relax.classList.remove("full");
    relax.classList.remove("hide");
    health.classList.remove("hide");
    social.classList.remove("hide");
    enjoy.classList.remove("hide");
    hygiene.classList.remove("hide");
    work.classList.remove("hide");
    profile.classList.remove("hide");

})

closeWorkCard.addEventListener("click", function() {
    workCard.classList.remove("workShow");
    work.classList.remove("full");
    work.classList.remove("hide");
    health.classList.remove("hide");
    social.classList.remove("hide");
    enjoy.classList.remove("hide");
    relax.classList.remove("hide");
    hygiene.classList.remove("hide");
    profile.classList.remove("hide");
})

closeProfileCard.addEventListener("click", function() {
    profileCard.classList.remove("profileShow");
    profile.classList.remove("full");
    profile.classList.remove("hide");
    health.classList.remove("hide");
    social.classList.remove("hide");
    enjoy.classList.remove("hide");
    relax.classList.remove("hide");
    work.classList.remove("hide");
    hygiene.classList.remove("hide");
})



//        Random Quote Creator


function quoteMaker() {
    let quoteNum = Math.floor((Math.random() * 4) + 1);
    console.log(quoteNum);
    if (quoteNum == "1") {
        healthQuote.innerHTML = "Health Is Not Valued, Till Sickness Comes";
        healthAuthor.innerHTML = "<i>-Thomas Fuller</i>";
        hygieneQuote.innerHTML = "First Impressions Are Everything. Don't Stink.";
        hygieneAuthor.innerHTML = "<i>-J. Michael Wilson</i>";
        socialQuote.innerHTML = "A Sweet Friendship Refreshes The Soul.";
        socialAuthor.innerHTML = "<i>-Proverbs 27:</i>";
        enjoyQuote.innerHTML = "If You Want To Be Happy. Be.";
        enjoyAuthor.innerHTML = "<i>-Leo Tolstoy</i>";
        relaxQuote.innerHTML = "If You Relax Your Mind, It Can Begin Working.";
        relaxAuthor.innerHTML = "<i>-Unknown</i>";
        workQuote.innerHTML = "Work Hard In Silence. Let Your Success Talk.";
        workAuthor.innerHTML = "<i>-Frank Ocean</i>";
    }
    else if (quoteNum == "2")   {
        healthQuote.innerHTML = "The First Wealth Is Health";
        healthAuthor.innerHTML = "<i>-Ralph Waldo Emerson</i>";
        hygieneQuote.innerHTML = "One Who Maintains Cleanliness Keeps Away Diseases";
        hygieneAuthor.innerHTML = "<i>-Same Veda</i>";
        socialQuote.innerHTML = "A Friend Is Someone Who Knows All About You And Still Loves You.";
        socialAuthor.innerHTML = "<i>-Elbert Hubbard</i>";
        enjoyQuote.innerHTML = "Happiness Depends On Ourselves";
        enjoyAuthor.innerHTML = "<i>-Aristotle</i>";
        relaxQuote.innerHTML = "The Time To Relax Is When You Don't Have Time For It.";
        relaxAuthor.innerHTML = "<i>-Sydney J. Harris</i>";
        workQuote.innerHTML = "Hard Work Beats Talent When Talent Doesn't Work Hard";
        workAuthor.innerHTML = "<i>-Michael Jordan</i>";
    } else if (quoteNum == "3") {
        healthQuote.innerHTML = "Prevention Is Better Than Cure";
        healthAuthor.innerHTML = "<i>-Desiderius Erasmus</i>";
        hygieneQuote.innerHTML = "Wash Yo' Damn Hands!";
        hygieneAuthor.innerHTML = "<i>-Samuel L. Jackson</i>";
        socialQuote.innerHTML = "Every Family Has Different Values.";
        socialAuthor.innerHTML = "<i>-Lewis Black</i>";
        enjoyQuote.innerHTML = "If You're Not Having Fun It's Not Worth Doing.";
        enjoyAuthor.innerHTML = "<i>-Tommy Bolin</i>";
        relaxQuote.innerHTML = "The Thing About Meditation Is: You Become More You.";
        relaxAuthor.innerHTML = "<i>-David Lynch</i>";
        workQuote.innerHTML = "Do Or Do Not. There Is No Try.";
        workAuthor.innerHTML = "<i>-Yoda</i>";
    } else {
        healthQuote.innerHTML = "He Who Has Health, Has Hope";
        healthAuthor.innerHTML = "<i>-Thomas Carlyle</i>";
        hygieneQuote.innerHTML = "Cleanliness Is Indeed Next To Godliness.";
        hygieneAuthor.innerHTML = "<i>-Christopher Morley</i>";
        socialQuote.innerHTML = "Family Means No One Gets Left Behind Or Forgotten.";
        socialAuthor.innerHTML = "<i>-Stitch</i>";
        enjoyQuote.innerHTML = "I'm not Being Immature, I'm Having Fun. Try It Sometime.";
        enjoyAuthor.innerHTML = "<i>-Charlie Simmonds</i>";
        relaxQuote.innerHTML = "The Sun Will Be Out Tomorrow, No Matter What. Chill.";
        relaxAuthor.innerHTML = "<i>-Annabeth Burell</i>";
        workQuote.innerHTML = "Without Labor Nothing Prospers.";
        workAuthor.innerHTML = "<i>-Sophocles</i>";
    }
}
quoteMaker();


//     Sound Buttons

soundOn.addEventListener("click", function() {
    iconBG.style.backgroundColor = "#bff1b3";
})

soundOff.addEventListener("click", function() {
    iconBG.style.backgroundColor = "#fb7c6e";
})


//        turn green buttons in hexagon cards

function healthGreen(element) {
    element.style.backgroundColor = "lightgreen";
    healthCount ++;
    console.log(healthCount);
}
function hygieneGreen(element) {
    element.style.backgroundColor = "lightgreen";
    hygieneCount ++;
    console.log(hygieneCount);
}
function socialGreen(element) {
    element.style.backgroundColor = "lightgreen";
    socialCount ++;
    console.log(socialCount);
}
function enjoyGreen(element) {
    element.style.backgroundColor = "lightgreen";
    enjoyCount ++;
    console.log(enjoyCount);
}
function relaxGreen(element) {
    element.style.backgroundColor = "lightgreen";
    relaxCount ++;
    console.log(relaxCount);
}
function workGreen(element) {
    element.style.backgroundColor = "lightgreen";
    workCount ++;
    console.log(workCount);
}

//      submit button pressed and calculates which results to show.

function healthSubmit() {
    healthSquareHold.classList.add("hide");
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcountHealth) {
          localStorage.clickcountHealth = Number(localStorage.clickcountHealth)+1;
        } else {
          localStorage.clickcountHealth = 1;
        }
        if (healthCount >= 2) {
            healthResults.innerHTML = `
            <h3 class="results">Congrats! </h3>
            <p>Good Job! Your Streak Is At ` + localStorage.clickcountHealth + ` Days!</p>
            `
        } else {
            healthResults.innerHTML = `
                <p>That's Okay, You Lost Your Streak Of ` + localStorage.clickcountHealth + ` But You Can Try Again!</p>
            `
            localStorage.clickcountHealth = 0;
        }
      } else {
        document.getElementById("healthSquareHold").innerHTML = "Sorry, your browser does not support web storage...";
      }
}

function hygieneSubmit() {
    hygieneSquareHold.classList.add("hide");
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcountHygiene) {
          localStorage.clickcountHygiene = Number(localStorage.clickcountHygiene)+1;
        } else {
          localStorage.clickcountHygiene = 1;
        }
        if (hygieneCount >= 4) {
            hygieneResults.innerHTML = `
            <h3 class="results">Congrats! </h3>
            <p>Good Job! Your Streak Is At ` + localStorage.clickcountHygiene + ` Days!</p>
            `
        } else {
            hygieneResults.innerHTML = `
                <p>That's Okay, You Lost Your Streak Of ` + localStorage.clickcountHygiene + ` But You Can Try Again!</p>
            `
            localStorage.clickcountHygiene = 0;
        }
      } else {
        document.getElementById("hygieneSquareHold").innerHTML = "Sorry, your browser does not support web storage...";
      }
}

function socialSubmit() {
    socialSquareHold.classList.add("hide");
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcountSocial) {
          localStorage.clickcountSocial = Number(localStorage.clickcountSocial)+1;
        } else {
          localStorage.clickcountSocial = 1;
        }
        if (socialCount >= 2) {
            socialResults.innerHTML = `
            <h3 class="results">Congrats! </h3>
            <p>Good Job! Your Streak Is At ` + localStorage.clickcountSocial + ` Days!</p>
            `
        } else {
            socialResults.innerHTML = `
                <p>That's Okay, You Lost Your Streak Of ` + localStorage.clickcountSocial + ` But You Can Try Again!</p>
            `
            localStorage.clickcountSocial = 0;
        }
      } else {
        document.getElementById("socialSquareHold").innerHTML = "Sorry, your browser does not support web storage...";
      }
}

function enjoySubmit() {
    enjoySquareHold.classList.add("hide");
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcountEnjoy) {
          localStorage.clickcountEnjoy = Number(localStorage.clickcountEnjoy)+1;
        } else {
          localStorage.clickcountEnjoy = 1;
        }
        if (enjoyCount >= 1) {
            enjoyResults.innerHTML = `
            <h3 class="results">Congrats! </h3>
            <p>Good Job! Your Streak Is At ` + localStorage.clickcountEnjoy + ` Days!</p>
            `
        } else {
            enjoyResults.innerHTML = `
                <p>That's Okay, You Lost Your Streak Of ` + localStorage.clickcountEnjoy + ` But You Can Try Again!</p>
            `
            localStorage.clickcountEnjoy = 0;
        }
      } else {
        document.getElementById("enjoySquareHold").innerHTML = "Sorry, your browser does not support web storage...";
      }
}

function relaxSubmit() {
    relaxSquareHold.classList.add("hide");
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcountRelax) {
          localStorage.clickcountRelax = Number(localStorage.clickcountRelax)+1;
        } else {
          localStorage.clickcountRelax = 1;
        }
        if (relaxCount >= 2) {
            relaxResults.innerHTML = `
            <h3 class="results">Congrats! </h3>
            <p>Good Job! Your Streak Is At ` + localStorage.clickcountRelax + ` Days!</p>
            `
        } else {
            relaxResults.innerHTML = `
                <p>That's Okay, You Lost Your Streak Of ` + localStorage.clickcountRelax + ` But You Can Try Again!</p>
            `
            localStorage.clickcountRelax = 0;
        }
      } else {
        document.getElementById("relaxSquareHold").innerHTML = "Sorry, your browser does not support web storage...";
      }
}

function workSubmit() {
    workSquareHold.classList.add("hide");
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcountWork) {
          localStorage.clickcountWork = Number(localStorage.clickcountWork)+1;
        } else {
          localStorage.clickcountWork = 1;
        }
        if (workCount >= 1) {
            workResults.innerHTML = `
            <h3 class="results">Congrats! </h3>
            <p>Good Job! Your Streak Is At ` + localStorage.clickcountWork + ` Days!</p>
            `
        } else {
            workResults.innerHTML = `
                <p>That's Okay, You Lost Your Streak Of ` + localStorage.clickcountWork + ` But You Can Try Again!</p>
            `
            localStorage.clickcountWork = 0;
        }
      } else {
        document.getElementById("workSquareHold").innerHTML = "Sorry, your browser does not support web storage...";
      }
}