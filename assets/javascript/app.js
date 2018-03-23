$(document).ready(function () {
    window.onload = $(function () {
        $("#triviaQuestions").hide();
        $("#gameOver").hide();
        $("audio").hide();
    });



    var time = 20;
    var intervalId;
    var correct = 0;
    var wrong = 0;
    var empty = 4;

    $(".begin").click(startGame);
    $(".done").click(submit);
    $(".reset").click(reset);

    function startGame() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000)
        $(".start").hide();
        $("#triviaQuestions").show();
        $('input[name="q"]').prop('checked', false);

    }

    function submit() {
        stop();
        $("#triviaQuestions").hide();
        $(".timesUp").hide();
        $("#gameOver").show();
        data();
        $(".correct").text(correct);
        $(".unanswered").text(empty);
        $(".incorrect").text(wrong);
    }

    function decrement() {
        time--;
        $(".timer").html(time);
        if (time === 0) {
            stop();
            time = 20;
            alert("Times Up!")
            $("#triviaQuestions").hide();
            $(".submitted").hide();
            $("#gameOver").show();
            $(".timesUp").show();
            data();
            $(".correct").text(correct);
            $(".unanswered").text(empty);
            $(".incorrect").text(wrong);
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    function data() {
        for (i = 1; i < 5; i++) {
            var value = $(".q" + i + ":checked");
            console.log(value.val())
            if (value.val() === "r") {
                correct++;
                empty--;
            } else if (value.val() === "w") {
                wrong++;
                empty--;
            }
        }
        console.log(correct)
    }

    function reset() {
        time = 20;
        correct = 0;
        wrong = 0;
        empty = 4;
        startGame();
        $("#gameOver").hide();
        ;
    }
})