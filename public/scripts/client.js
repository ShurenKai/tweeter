/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  $('#new-tweet-thoughts').submit(function(event){
    event.preventDefault();
    $.ajax({
      url: 'http://localhost:8080/tweets',
      method:'POST',
      data: $(this).serialize(),
      success: (tweets) => {
        renderTweets(tweets)
      },
      error: (err) => {
        console.log('Error: ', err)
      }
    })
    $('#tweet-text').val('')
  })

  const loadTweets = () => {
    $.ajax({
      url: 'http://localhost:8080/tweets',
      method: 'GET',
      success: (tweets) => {
        console.log('hello world')
        renderTweets(tweets)
      },
      error: (err) => {
        console.log("Error: ", err)
      }
    })
  }
  loadTweets()

  const createTweetElement = function(data){
    const $tweets = $('<article>').addClass('tweets');
    $tweets.append(`<header>
      <div>
        <img src=${data.user['avatars']}alt="Image"> 
        <p>${data.user.name}</p>
      </div>
      <p>${data.user['handle']}</p>
    </header>
      <p class="content">${data.content.text}</p>
    <footer>
      <p class="days-ago">${timeago.format(data['created_at'])}</p>
      <div class="social-media">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>`)
    return $tweets
  }

  const renderTweets = function(tweets) {
    const masterTweets = $('#tweets-container')
    for(let tweet of tweets){
      let $newTweet = createTweetElement(tweet)
      masterTweets.prepend($newTweet)
    }
  }
})