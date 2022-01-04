# Tweeter Project made by Cassie/Ren Chen #

Tweeter is a simple, single-page Twitter clone.

I wrote this in order to practice HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills. 

# Get yourself on Tweeter! #

Take a look inside through the window of the app
![Windows Ver](https://github.com/ShurenKai/tweeter/blob/experimental/docs/windowTweetPage.png?raw=true)

... or if mobile is your thing, we have a view for that too due to the fantastic efforts of responsive design!

![Mobile ver](https://github.com/ShurenKai/tweeter/blob/experimental/docs/compactMobilePage.png?raw=true)

Oh! You made yourself a new tweet! Oh... you're impersonating me.. that's okay! More Rens in the world is always fun!
![newTweet](https://github.com/ShurenKai/tweeter/blob/experimental/docs/newTweet.png?raw=true)

If you go to the dev tools and look down at styles, you can force Hover-based items to be shown in its hovered form!
![Force Hover](https://github.com/ShurenKai/tweeter/blob/experimental/docs/hoverForced.png?raw=true)

This is what our tweet looks like if you could hover over everything on it at once :D
![Forced Hover View](https://github.com/ShurenKai/tweeter/blob/experimental/docs/hoverAesthetics.png?raw=true)

That is the end of the Tweeter Tour, you can find the functionality and dependencies down below. Happy tweeting :3

# The Bare Necessities (Requirements) #
- [x] A client-side Single Page App (SPA)
- [x] Communicates with a server via AJAX

# Display Requirements #

## Navigation Bar: ##
- [x] is fixed to the top
- [x] has padding on both sides
- [x] contains Compose button

## Compose Tweet box: ##
- [x] is displayed above the list of tweets
- [x] contains a form for submitting tweets, which itself contains:
> - [x] a textarea for new tweet content
> - [x] a left-aligned button for submitting new tweets
> - [x] contains a Character Counter, right-aligned, which by default shows 140

## List of Tweets: ##

- [x] displays tweets in reverse-chronological order (that is, by creation time descending)

### Individual Tweets have a: ###

- [x] header, which contains the user's:

> - [x] avatar, on the left
> - [x] name, on the left and after the avatar
> - [x] handle, on the right
> - [x] body, which contains the tweet text

- [x] footer, which displays:
> - [x] how long ago the tweet was created, on the left
> - [x] "Flag", "Re-tweet" and "Like" action icons on the right


# Behaviour #

## Individual Tweets ##

- [x] When the user hovers over a tweet, that tweet should display a box shadow.

## Action Icons ##

- [x] When the user hovers over an icon ("Flag", "Re-tweet" and "Like") the icon should change colour.

## Character Counter ##

- [x] When a user types into the Compose Tweet textarea, the Character Counter is updated to show how many characters a user may still type (subtracting the number of characters they've typed from the maximum allowable character count of 140)

- [x] The Character Counter turns red (or similar) when more than 140 characters have been typed into the Compose Tweet textarea, and it shows how many characters over the 140 limit have been typed (using a negative number)

## Compose Tweet ##

- [x] When a user submits an invalid tweet (the tweet textarea is empty or contains more than 140 characters), an appropriate error message is displayed

- [x] When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet textarea is cleared, and the Character Counter is reset (to 140)

#### Dependencies ####
- "body-parser": "^1.15.2",
- "chance": "^1.0.2",
- "express": "^4.13.4",
- "md5": "^2.1.0",