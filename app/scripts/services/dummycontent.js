'use strict';

angular.module('banetApp')
  .factory('dummyContent', function() {

    var dummyPosts = [
      'If you command me to do something that I was already planning on doing the chances of me doing that thing automatically drop to zero',
      'My mom says its her house but when its time to clean it magically becomes my house too',
      'When people ask me why I don\'t have any tattoos, I say to them, "Would you put a bumper sticker on a Ferrari?',
      'How fucked up would it be if the last sentence of the last Harry Potter book was"And then Harry woke up back in his bed under the staircase"',
      'No matter how old you are, no matter how badass you think you are, if a toddler hands you their ringing toy phone....you answer it.',
      'Some kids were dropped as a baby.. BUT YOU were clearly thrown in the air, smacked by a ceiling fan, and tossed out the window.',
      'If I had a dollar for every time I had no idea what was going on, I\'d be asking people why they were giving me dollars.',
      'I wanna be a nice person but everyone is so stupid',
      'Running seems like a great idea until you actually start running'
    ];
    var dummyChannels = ['Cologne', 'Pixelpark', 'Webdevelopment', 'JavaScript', 'Stories'];
    var dummyUsers = ['Spiderman', 'Batman', 'Iron Man', 'Hulk', 'Chuck Norris', 'Spongebob'];

    return {
      getDummyPost: function() {
        return dummyPosts[Math.floor(Math.random() * (dummyPosts.length))];
      },
      getDummyChannels: function() {
        return dummyChannels;
      },
      getDummyChannel: function() {
        return dummyChannels[Math.floor(Math.random() * (dummyChannels.length))];
      },
      getDummyUser: function() {
        return dummyUsers[Math.floor(Math.random() * (dummyUsers.length))];
      }
    };
  });
