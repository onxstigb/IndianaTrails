import { loadPage } from "../model/model.js";
import { showToast } from "../js/toast.js";

function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    if (pageID == "") {
        pageID = "home";
    }

    console.log(pageID);

    loadPage(pageID);

    setupTrailFeedback();
    setupTrailTip();
}

function initApp() {
    loadPage("home");

    window.addEventListener("hashchange", changeRoute);

    setupLogin();
}

function setupLogin() {
    const loginBtn = document.querySelector("#loginBtn");
    const loginModal = document.querySelector("#loginModal");
    const closeLogin = document.querySelector("#closeLogin");
    const loginForm = document.querySelector("#loginForm");

    loginBtn.addEventListener("click", function() {
        loginModal.classList.add("show");
    });

    closeLogin.addEventListener("click", function() {
        loginModal.classList.remove("show");
    });

    loginModal.addEventListener("click", function(event) {
        if (event.target == loginModal) {
            loginModal.classList.remove("show");
        }
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        validateLogin();
    });
}

function validateLogin() {
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email.trim() == "") {
        showToast(
            "Please enter your email address.",
            "error"
        );
        return;
    }

    if (password.trim() == "") {
        showToast(
            "Please enter your password.",
            "error"
        );
        return;
    }

    if (email != email.trim()) {
        showToast(
            "Your email cannot begin or end with spaces.",
            "error"
        );
        return;
    }

    if (password != password.trim()) {
        showToast(
            "Your password cannot begin or end with spaces.",
            "error"
        );
        return;
    }

    if (email.length < 6) {
        showToast(
            "Your email must be at least 6 characters long.",
            "error"
        );
        return;
    }

    if (password.length < 8) {
        showToast(
            "Your password must be at least 8 characters long.",
            "error"
        );
        return;
    }

    if (!email.includes("@")) {
        showToast(
            "Please enter a valid email containing @.",
            "error"
        );
        return;
    }

    if (!email.includes(".")) {
        showToast(
            "Please enter a valid email address.",
            "error"
        );
        return;
    }

    showToast(
        "You have successfully signed in!",
        "success"
    );

    document.querySelector("#loginModal").classList.remove("show");
}

function setupTrailFeedback() {
    const loadTrails = document.querySelector("#loadTrails");

    if (!loadTrails) {
        return;
    }

    loadTrails.addEventListener("click", function() {
        const loadingToast = showToast(
            "Loading trail conditions...",
            "loading"
        );

        setTimeout(function() {
            loadingToast.classList.add("hide");

            setTimeout(function() {
                loadingToast.remove();
            }, 300);

            showToast(
                "Trail conditions loaded!",
                "success"
            );
        }, 2000);
    });
}

function setupTrailTip() {
    const trailTip = document.querySelector("#trailTip");

    if (!trailTip) {
        return;
    }

    trailTip.addEventListener("click", function() {
        showToast(
            "Always bring water and check the weather before your hike.",
            "info"
        );
    });
}

initApp();