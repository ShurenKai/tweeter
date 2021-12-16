/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
    },

  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },

  "created_at": 1461116232227
};

$(() => {
    $.ajax({
      url: '/tweets',
      method:'POST',
      dataType: 'json',
      success: (tweets) => {
        createTweetElement(tweets)
      },
      error: (err) => {
        console.log('Error: ', err)
      }
    })

    $('button').submit(function(event){
      event.preventDefault()
      let data = $(this).serialize()
    })

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
    let tweetest = [tweets]
    const masterTweets = $('#tweets-container')
    for(let tweet of tweetest){
      let $newTweet = createTweetElement(tweet)
      masterTweets.append($newTweet)
    }
  }

  $(() => {
    renderTweets(data)
  })
})