function tabFn(evt, cityName) {
    var i, servicecontent, servicelinks;
    servicecontent = document.getElementsByClassName("servicecontent");
    for (i = 0; i < servicecontent.length; i++) {
        servicecontent[i].style.display = "none";
    }
    servicelinks = document.getElementsByClassName("servicelinks");
    for (i = 0; i < servicelinks.length; i++) {
        servicelinks[i].className = servicelinks[i].className.replace(
            " active",
            ""
        );
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it

$(document).ready(function() {
    var header = $(".navbar_head");

    $(window).scroll(function(e) {
        if (header.offset().top !== 0) {
            if (!header.hasClass("shadow")) {
                header.addClass("shadow");
            }
        } else {
            header.removeClass("shadow");
        }
    });
    document.getElementById("defaultOpen").click();
});

//Submit form Ajax
window.addEventListener("DOMContentLoaded", function() {
    // get the form elements defined in your form HTML above

    var form = document.getElementById("contact-form");
    var button = document.getElementById("contact-form-button");
    var status = document.getElementById("contact-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        button.style = "display: none ";
        status.innerHTML = "Thanks you! We will be contacting you soon";
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}


/**-----------responsive menu function----------------- */
function menuIcon() {
    var element = document.getElementById("nav_bar");
    element.classList.toggle("active");
}