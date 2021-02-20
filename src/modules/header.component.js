import $ from 'jquery'

$('<h1 />').text('Hello world from jquery').appendTo($('header')).css({textAlign: 'center', color: 'red'})