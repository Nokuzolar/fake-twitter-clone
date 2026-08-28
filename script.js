// ===============================
// DARK MODE
// ===============================

const darkModeButton = document.getElementById("darkModeButton");

darkModeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});


// ===============================
// POST TWEET
// ===============================

const postTweetButton = document.getElementById("postTweetButton");
const tweetInput = document.getElementById("tweetInput");
const tweetContainer = document.getElementById("tweetContainer");


postTweetButton.addEventListener("click", function () {

    const tweetText = tweetInput.value.trim();

    if (tweetText === "") {

        alert("Please write something before tweeting.");

        return;
    }


    const tweet = document.createElement("article");

    tweet.classList.add("tweet");


    tweet.innerHTML = `
        <div class="profile-picture">
            NV
        </div>

        <div class="tweet-content">

            <div class="tweet-header">

                <strong>You</strong>

                <span>@yourusername</span>

                <span>· now</span>

            </div>

            <p>${tweetText}</p>

            <div class="tweet-actions">

                <button>
                    <i class="fa-regular fa-comment"></i>
                    <span>0</span>
                </button>

                <button>
                    <i class="fa-solid fa-retweet"></i>
                    <span>0</span>
                </button>

                <button class="like-button">

                    <i class="fa-regular fa-heart"></i>

                    <span>0</span>

                </button>

                <button>
                    <i class="fa-solid fa-share"></i>
                </button>

            </div>

        </div>
    `;


    tweetContainer.prepend(tweet);

    tweetInput.value = "";

});


// ===============================
// LIKE BUTTON
// ===============================

document.addEventListener("click", function (event) {

    const likeButton = event.target.closest(".like-button");

    if (!likeButton) {
        return;
    }


    const icon = likeButton.querySelector("i");

    const count = likeButton.querySelector("span");

    let likes = Number(count.textContent);


    if (likeButton.classList.contains("liked")) {

        likes--;

        likeButton.classList.remove("liked");

        icon.classList.remove("fa-solid");

        icon.classList.add("fa-regular");

    } else {

        likes++;

        likeButton.classList.add("liked");

        icon.classList.remove("fa-regular");

        icon.classList.add("fa-solid");

    }


    count.textContent = likes;

});


// ===============================
// FOLLOW BUTTON
// ===============================

const followButtons = document.querySelectorAll(".follow-button");


followButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (button.textContent === "Follow") {

            button.textContent = "Following";

        } else {

            button.textContent = "Follow";

        }

    });

});


// ===============================
// TWEET MODAL
// ===============================

const tweetModal = document.getElementById("tweetModal");

const openTweetButton =
    document.getElementById("openTweetButton");

const closeTweetButton =
    document.getElementById("closeTweetButton");

const modalTweetInput =
    document.getElementById("modalTweetInput");

const modalPostButton =
    document.getElementById("modalPostButton");

const characterCount =
    document.getElementById("characterCount");


// OPEN MODAL

openTweetButton.addEventListener("click", function () {

    tweetModal.classList.add("show");

    modalTweetInput.focus();

});


// CLOSE MODAL

closeTweetButton.addEventListener("click", function () {

    tweetModal.classList.remove("show");

});


// CLOSE WHEN CLICKING OUTSIDE

tweetModal.addEventListener("click", function (event) {

    if (event.target === tweetModal) {

        tweetModal.classList.remove("show");

    }

});


// CHARACTER COUNT

modalTweetInput.addEventListener("input", function () {

    const length = modalTweetInput.value.length;

    characterCount.textContent = `${length} / 280`;


    if (length > 280) {

        characterCount.style.color = "red";

        modalPostButton.disabled = true;

    } else {

        characterCount.style.color = "";

        modalPostButton.disabled = false;

    }

});


// POST FROM MODAL

modalPostButton.addEventListener("click", function () {

    const text = modalTweetInput.value.trim();


    if (text === "") {

        alert("Please write something.");

        return;

    }


    if (text.length > 280) {

        alert("Your tweet is too long.");

        return;

    }


    const tweet = document.createElement("article");

    tweet.classList.add("tweet");


    tweet.innerHTML = `
        <div class="profile-picture">
            NV
        </div>

        <div class="tweet-content">

            <div class="tweet-header">

                <strong>You</strong>

                <span>@yourusername</span>

                <span>· now</span>

            </div>

            <p>${text}</p>

            <div class="tweet-actions">

                <button>
                    <i class="fa-regular fa-comment"></i>
                    <span>0</span>
                </button>

                <button>
                    <i class="fa-solid fa-retweet"></i>
                    <span>0</span>
                </button>

                <button class="like-button">

                    <i class="fa-regular fa-heart"></i>

                    <span>0</span>

                </button>

                <button>
                    <i class="fa-solid fa-share"></i>
                </button>

            </div>

        </div>
    `;


    tweetContainer.prepend(tweet);


    modalTweetInput.value = "";

    characterCount.textContent = "0 / 280";

    tweetModal.classList.remove("show");

});