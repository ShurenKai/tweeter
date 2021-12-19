$(document).ready(function() {
  let text = $('#tweet-text').on('input', () => {
    let length = text.val().length
    let counter = text.next().children().last()
    counter.text(140 - length)
    if(length > 140){
      counter.css({'color': 'red'})
    } else {
      counter.css({'color': '#545149'})
    }
  })
});