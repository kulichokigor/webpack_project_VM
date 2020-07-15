import $ from 'jquery'

$('<h1/>')
    .text('Jquery import in webpack')
    .css({
        textAlign:'center',
        color:'blue'
    })
    .appendTo($('header'))