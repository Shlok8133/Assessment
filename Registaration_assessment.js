$(document).ready(function () {
    $("#registrationForm").on("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        
        let errors = [];
        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        let email = $("#email").val();
        let mobile = $("#mobile").val();

        // First name validation (3-6 characters, alphabets only)
        if (firstName.length < 3 || firstName.length > 6 || !/^[a-zA-Z]+$/.test(firstName)) {
            errors.push("First name must be 3-6 letters.");
        }

        // Last name validation (3-6 characters, alphabets only)
        if (lastName.length < 3 || lastName.length > 6 || !/^[a-zA-Z]+$/.test(lastName)) {
            errors.push("Last name must be 3-6 letters.");
        }

        // Email validation (must contain @ and .)
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            errors.push("Enter a valid email address.");
        }

        // Mobile validation (10 digits only)
        if (!/^\d{10}$/.test(mobile)) {
            errors.push("Mobile number must be 10 digits.");
        }

        // If errors exist, show the popup
        if (errors.length > 0) {
            $("#popupText").html(errors.join("<br>"));
            $(".overlay").show();
            $("#popupMessage").show();
        } else {
            alert("Form submitted successfully!");
        }
    });

    // Close popup
    $("#closePopup").on("click", function () {
        $(".overlay").hide();
        $("#popupMessage").hide();
    });
});