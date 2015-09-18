data = JSON.parse("");

for (var i = 0 ; i < data.length; i++) {
    var prizes = data[i].prizes;
    for (var j = 0; j < prizes.length; j++) {
        var prize = prizes[j];
        $(".clearfix > .blue").click();
        $("#prize_name").val(prize.title);
        $("#prize_value").val();
        $("#prize_winners").val();
        $("#prize_description").val(prize.description);
        $(".actions > input").click();
    }
}

