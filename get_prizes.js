var prizes = [];

$(".prize").each(function(i, el) {
    var text = $(el).find('h5').text();
    var amount = $($(el).find('.amount')[0]).text();
    var title = text.substring(0, text.length - amount.length);
    var description = $($(el).find('p')[1]).text()
    prizes.push({
        amount:amount,
        title:title,
        description:description
    });
});

console.log(JSON.stringify(prizes));
