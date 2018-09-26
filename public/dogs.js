let dogs = [];
const source = $('#doggos-template').html();
const template = Handlebars.compile(source);

const render = function() {
    $('.myDoggos').empty();

    let newHTML = template({dogs});
    $('.myDoggos').append(newHTML);
}

const buttonActive = function () {
    $.get('dogs').then((data)=> {
        console.log(data);
        dogs = data;
        render();
    })
};