$(function() {
    $(".change-devoured").on("click", function(event) {
        let id = $(this).data("id");
        let newDevoured = $(this).data("newsleep");

        let newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed to devoured", newDevoured);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let newBurger = {
            name: $("#ca").val().trim(),
            devoured: $("#").val().trim
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event) {
        let id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted burger", id);
                location.reload();
            }
        );
    });
});