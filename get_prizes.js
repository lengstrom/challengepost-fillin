// Instructions:
// 	 - Go to http://manage.devpost.com/challenges/2924-hackmit-2015/edit?form=prizes
// 	 - Paste https://github.com/lengstrom/devpost-fillin/blob/master/get_prizes.js into browser
// 	 - Copy logged JSON
// 	 - $$$

var prizes = [];

$(".prize").each(function(i, el) {
    var text = $(el).find('h5').text();
    var amount = $($(el).find('.amount')[0]).text();
    var title = text.substring(0, text.length - amount.length);
    var description = $($(el).find('p')[1]).text()
    prizes.push({
        amount:amount.trim(),
        title:title.trim(),
        description:description.trim()
    });
});

console.log(JSON.stringify(prizes));
