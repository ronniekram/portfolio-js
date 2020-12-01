const content = document.getElementById("main-content");
const about = document.getElementById("about-link");
const portfolio = document.getElementById("portfolio-link");
const contact = document.getElementById("contact-link");
const home = document.getElementById("home-link");

document.addEventListener("DOMContentLoaded", () => {
    about.addEventListener("click", renderAbout);
    contact.addEventListener("click", renderContact);
    portfolio.addEventListener("click", renderPortfolio);
    home.addEventListener("click", renderHome);
})


function renderAbout() {
    clearPage();
    content.innerHTML = `<div>
    <div class="container">
        <div class="row d-lg-flex align-items-lg-center" style="margin-top: 4rem;">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body" style="background: rgba(38,38,38,0.87);border-radius: 10px;">
                        <h4 class="card-title" style="color: rgb(255,255,255);font-family: Montserrat, sans-serif;font-weight: bold;">Who I Am: Professionally</h4>
                        <p class="card-text" style="font-family: Roboto, sans-serif;font-size: 14px;color: rgb(255,255,255);">Software Engineer and former chef carrying a decade of experience in communication, organization, efficiency and focus.<br><br>I love the process of creating and collaborating with teammates to develop projects into something
                            special and exciting. That's what drew me to web development. Years of writing recipes and creating menus taught me a great deal about the highs and lows of the creative process. Nothing can beat the reward and feeling
                            of pride from putting out something really special. Working through Flatiron’s bootcamp provided me with the same feelings of pride and accomplishment I found in the kitchen.<br><br>I look forward to finding a workplace
                            that fosters growth, both personally and professionally. I am interested in working for companies who care as much about their communities as they do their shareholders, who consider their environmental and societal impacts
                            and consider strong ethics and morals to be their backbone.&nbsp;</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body" style="background: #262626de;border-radius: 10px;">
                        <h4 class="card-title" style="color: rgb(255,255,255);font-family: Montserrat, sans-serif;font-weight: bold;">Who I Am: Personally</h4>
                        <div class="text-center" style="margin-bottom: 1rem;"><img src="assets/img/portfolio-pic.jpg" style="border: 1px solid rgb(255,255,255);border-radius: 10px;" width="60%"></div>
                        <p class="card-text" style="color: rgb(255,255,255);font-size: 14px;">I live in Pittsburgh, PA with my husband and our two dogs, Grampa and Goblin. We moved back east after a long stay in Portland, OR. I still love to cook and bake. (I'm open to bringing treats to the office!) I enjoy pretty
                            much any hobby where I'm using my hands. Lately it's been macrame, tending to houseplants and home improvement! You can also find me playing pinball on occasion. Those are the bullet points, but I'm an open book!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`

}

function renderContact() {
    clearPage();
    content.innerHTML = `
    <div class="social-icons" style="margin-top: 10rem; background: rgba(210,210,210, 0.8); text-align: center; border-radius: 10px;">
        <a href="http://linkedin.com/in/arynn-boniface" target="_blank class="contact-link">
            <img src="assets/img/linkedin.png" class="contact-link" />
        </a>

        <a href="http://github.com/ronniekram" target="_blank">
            <img src="assets/img/github.png" class="contact-link" />
        </a>

        <a href="https://dev.to/arynnboniface" target="_blank">
            <img src="assets/img/blogging.png" class="contact-link" />
        </a>

        <a
        href="mailto:arynn.boniface@gmail.com">
            <img src="assets/img/gmail.png" class="contact-link" />
        </a>
</div>`

}

function renderPortfolio() {
    clearPage();
    content.innerHTML = `
    <div class="d-lg-flex" style="margin-top: 4rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-4"><img src="assets/img/Screen%20Shot%202020-11-22%20at%207.57.14%20PM.png" width="100%" style="border-top-left-radius: 10px;border-top-right-radius: 10px;">
                    <div class="card" style="border-width: 0px;">
                        <div class="card-body" style="background: rgba(57,57,57,0.8);border-radius: 0;border-bottom-right-radius: 10px;border-bottom-left-radius: 10px;color: rgb(224,224,224);border-width: 0;border-style: none;">
                            <h4 class="card-title" style="border-radius: 10px;font-family: Roboto, sans-serif;color: rgb(224,224,224);">Eleplant</h4>
                            <p class="card-text" style="font-family: Roboto, sans-serif;color: rgb(224,224,224);font-size: 14px;">Built with Sinatra.&nbsp;<br><br>Allows a user to keep track of their houseplants, watering schedule and plant wishlist.<br><br></p>
                            <div style="color: rgb(210,210,210);"><a href="https://github.com/ronniekram/sinatra-plant-tracker" style="padding: 0;padding-right: .5rem;color: rgb(210,210,210);font-family: Montserrat, sans-serif;" target="_blank">GITHUB</a><a href="https://eleplant-tracker.herokuapp.com/"
                                    style="padding: 0;padding-left: .5rem;color: rgb(210,210,210);font-family: Montserrat, sans-serif;" target="_blank">SEE IT IN ACTION</a></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4"><img src="assets/img/Screen%20Shot%202020-11-22%20at%207.58.54%20PM.png" width="100%" style="border-top-left-radius: 10px;border-top-right-radius: 10px;">
                    <div class="card" style="border-width: 0px;">
                        <div class="card-body" style="border-radius: 10px;background: rgba(57,57,57,0.8);font-family: Roboto, sans-serif;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;border-top-right-radius: 0;border-top-left-radius: 0;color: rgb(224,224,224);">
                            <h4 class="card-title">Teacher's Library</h4>
                            <p class="card-text" style="font-size: 14px;">Built with Rails. <br><br>Allows a user to keep track of books and lesson plans and add books to lesson plans.</p>
                            <div><a href="https://github.com/ronniekram/teacher-rails-v2" style="padding: 0;padding-right: .5rem;color: rgb(210,210,210);font-family: Montserrat, sans-serif;" target="_blank">GITHUB</a><a href="https://teachers-library.herokuapp.com/"
                                    style="padding: 0;padding-left: .5rem;color: rgb(210,210,210);font-family: Montserrat, sans-serif;" target="_blank">SEE IT IN ACTION</a></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4"><img src="assets/img/seeking-guidance.png" width="100%" style="border-top-left-radius: 10px;border-top-right-radius: 10px;border-bottom-right-radius: 0;border-bottom-left-radius: 0;">
                    <div class="card" style="border-width: 0px;">
                        <div class="card-body" style="border-radius: 10px;background: rgba(57,57,57,0.8);font-family: Roboto, sans-serif;border-top-left-radius: 0;border-top-right-radius: 0;border-bottom-right-radius: 10px;border-bottom-left-radius: 10px;color: rgb(224,224,224);">
                            <h4 class="card-title">Seeking Guidance</h4>
                            <p class="card-text" style="font-size: 14px;">Built with vanilla JS and Rails back end.<br><br>A user can generate their own tarot card spread (1, 3 or 5 cards) by asking a question.</p>
                            <div><a href="https://github.com/ronniekram/tarot-js" style="padding-right: .5rem;color: rgb(210,210,210);font-family: Montserrat, sans-serif;" target="_blank">GITHUB</a><a href="https://ronniekram.github.io/tarot-frontend/" style="padding-left: .5rem;color: rgb(210,210,210);font-family: Montserrat, sans-serif;"
                                    target="_blank">SEE IT IN ACTION</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style="margin-top: 5rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-4"><img src="assets/img/village-watch.png" width="100%" style="border-top-left-radius: 10px;border-top-right-radius: 10px;">
                    <div class="card" style="border-width: 0px;">
                        <div class="card-body" style="border-radius: 10px;background: rgba(57,57,57,0.8);font-family: Roboto, sans-serif;border-top-left-radius: 0;border-top-right-radius: 0;border-bottom-right-radius: 10px;border-bottom-left-radius: 10px;border-style: none;color: rgb(224,224,224);">
                            <h4 class="card-title">Village Watch</h4>
                            <p class="card-text" style="font-size: 14px;">Built with React/Redux and Rails back end.<br><br>A user can create an Animal Crossing island or recreate their own by searching through a database of Animal Crossing villagers.</p>
                            <div><a href="https://github.com/ronniekram/ac-villager-front" style="padding-right: .5rem;color: rgb(210,210,210);font-family: Montserrat, sans-serif;" target="_blank">GITHUB</a><a href="https://village-watch.netlify.app/" style="padding-left: .5rem;color: rgb(210,210,210);font-family: Montserrat, sans-serif;"
                                    target="_blank">SEE IT IN ACTION</a></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4"></div>
                <div class="col-md-4"></div>
            </div>
        </div>
    </div>
    `
}

function renderHome() {
    clearPage();
    content.innerHTML = `
    <div class="container" id="main-content">
        <div class="row" style="width: 100%;">
            <div class="col-md-12" style="width: 100%;margin-top: 10rem;background: rgba(54,54,54,0.87);margin-bottom: 4rem;">
                <h1 class="text-center" style="color: rgb(255,255,255);font-family: Roboto, sans-serif;">hello. i'm arynn and i'm a software engineer.</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12" style="background: #363636de;width: 100%;">
                <h1 class="text-center" style="color: rgb(255,255,255);font-family: Montserrat, sans-serif;font-weight: bold;font-style: normal;font-size: 50px;">IT'S NICE TO MEET YOU.</h1>
            </div>
        </div>
    </div>
    `

}

function clearPage() {
    content.innerHTML = ""
}