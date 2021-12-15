$(document).ready(function() {
  $('#tweet-text').on('input', () => {
    let length = $('#tweet-text').val().length
    let counter = $('#tweet-text').next().find('output')
    counter.text(140 - length)
    if(length > 140){
      counter.css({'color': 'red'})
    } else {
      counter.css({'color': '#545149'})
    }
  })
});