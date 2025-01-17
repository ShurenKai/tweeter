/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * DOM work
 */

$(() => {
  const escape = function(str) {
    let div = document.createElement("span");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  //////////////////////////////////////////////////
  // new tweet logic if it's under 140 characters //
  //////////////////////////////////////////////////
  $('#new-tweet-thoughts').submit(function(event) {
    event.preventDefault();
    $('#counter').text(140);
    const contexts = $(this).serialize();
    const valLength = $(this.text).val().length;
    const checkNull = $(this.text);
    if (!checkNull || !valLength || valLength > 140) {
      $("#err").html("Please input a message between 1 and 140 characters!").addClass("error");
    } else {
      $.ajax({
        url: '/tweets',
        method:'POST',
        data: contexts,
      })
        .done(() => {
          $('#tweets-container').empty();
          loadTweets();
        })
        .fail((err) => {
          $("#err").html("Please input a message between 1 and 140 characters!").addClass("error");
        });
      $('#tweet-text').val('');
    }
  });
  /////////////////////////////////////////////////
  // load pre-existing tweets from faux database //
  /////////////////////////////////////////////////
  const loadTweets = () => {
    $.ajax({
      url: 'http://localhost:8080/tweets',
      method: 'GET',
      success: (tweets) => {
        $('.error').removeClass();
        $('#err').empty();
        renderTweets(tweets);
      },
      error: (err) => {
        $("#err").html("Please input a message between 1 and 140 characters!").addClass("error");
      }
    });
  };
  loadTweets();

  ////////////////////////////////////////////
  // create the container for the new tweet //
  ////////////////////////////////////////////
  const createTweetElement = function(data) {
    const safeHTML = `<span>${escape(data.content.text)}</span>`;
    const $tweets = $('<article>').addClass('tweets');
    $tweets.append(`<header>
      <div>
        <img src=${data.user['avatars']}alt="Image"> 
        <p>${data.user.name}</p>
      </div>
      <p>${data.user['handle']}</p>
    </header>
      <p class="content">${safeHTML}</p>
    <footer>
      <p class="days-ago">${timeago.format(data['created_at'])}</p>
      <div class="social-media">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>`);
    return $tweets;
  };

  //////////////////////////////////////////
  // prepend new tweet into fauz database //
  //////////////////////////////////////////
  const renderTweets = function(tweets) {
    const masterTweets = $('#tweets-container');
    for (let tweet of tweets) {
      let $newTweet = createTweetElement(tweet);
      masterTweets.prepend($newTweet);
    }
  };
});