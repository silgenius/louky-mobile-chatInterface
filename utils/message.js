const messages = [
    {
      id: '1',
      message: "Ever get the feeling you know someone here but can't place who?",
      sender_id: 'user_anon1',
      replied_to: null,
      timeStamp: '2025-10-13T14:02:00Z',
    },
    {
      id: '2',
      message: 'All the time. Your vibe feels familiar actually.',
      sender_id: 'user_anon2',
      replied_to: {
        id: '1',
        message:
          "Ever get the feeling you know someone here but can't place who?",
      },
      timeStamp: '2025-10-13T14:04:10Z',
    },
    {
      id: '3',
      message: 'You go to the library around 3pm? Just a wild guess.',
      sender_id: 'user_anon1',
      replied_to: {
        id: '2',
        message: 'All the time. Your vibe feels familiar actually. All the time. Your vibe feels familiar actually. All the time. Your vibe feels familiar actually. All the time. Your vibe feels familiar actually. All the time. Your vibe feels familiar actually. All the time. Your vibe feels familiar actually.',
      },
      timeStamp: '2025-10-13T14:06:45Z',
    },
    {
      id: '4',
      message: 'Okay... that’s oddly specific. Maybe 😅',
      sender_id: 'user_anon2',
      replied_to: {
        id: '3',
        message: 'You go to the library around 3pm? Just a wild guess.',
      },
      timeStamp: '2025-10-13T14:07:30Z',
    },
    {
      id: '5',
      message:
        'We definitely know each other. Do you drink green tea with honey?',
      sender_id: 'user_anon1',
      replied_to: {
        id: '4',
        message: 'Okay... that’s oddly specific. Maybe 😅',
      },
      timeStamp: '2025-10-13T14:08:55Z',
    },
    {
      id: '6',
      message: 'Wait… that’s either a very good guess or you stalk me 😂',
      sender_id: 'user_anon2',
      replied_to: {
        id: '5',
        message:
          'We definitely know each other. Do you drink green tea with honey?',
      },
      timeStamp: '2025-10-13T14:09:40Z',
    },
    {
      id: '7',
      message: 'Nah, just observant. Maybe we’ve sat near each other?',
      sender_id: 'user_anon1',
      replied_to: {
        id: '6',
        message: 'Wait… that’s either a very good guess or you stalk me 😂',
      },
      timeStamp: '2025-10-13T14:10:25Z',
    },
    {
      id: '8',
      message: 'Alright. One more test. What color is my water bottle?',
      sender_id: 'user_anon2',
      replied_to: {
        id: '7',
        message: 'Nah, just observant. Maybe we’ve sat near each other?',
      },
      timeStamp: '2025-10-13T14:11:10Z',
    },
    {
      id: '9',
      message: "Dark blue with stickers? One says 'Be Kind'.",
      sender_id: 'user_anon1',
      replied_to: {
        id: '8',
        message: 'Alright. One more test. What color is my water bottle?',
      },
      timeStamp: '2025-10-13T14:12:05Z',
    },
    {
      id: '10',
      message: '😳 Okay yeah. We’ve met. This is getting spooky.',
      sender_id: 'user_anon2',
      replied_to: {
        id: '9',
        message: "Dark blue with stickers? One says 'Be Kind'.",
      },
      timeStamp: '2025-10-13T14:13:00Z',
    },
    {
      id: '11',
      message:
        'So now I have to know… are you the one who always hums Coldplay under your breath?',
      sender_id: 'user_anon1',
      replied_to: {
        id: '10',
        message: '😳 Okay yeah. We’ve met. This is getting spooky.',
      },
      timeStamp: '2025-10-13T14:14:22Z',
    },
    {
      id: '12',
      message: 'Nope, not Coldplay. You’re confusing me with someone else 😉',
      sender_id: 'user_anon2',
      replied_to: {
        id: '11',
        message:
          'So now I have to know… are you the one who always hums Coldplay under your breath?',
      },
      timeStamp: '2025-10-13T14:15:31Z',
    },
    {
      id: '13',
      message:
        'Darn. Thought I had you. Alright then… you ever wear mismatched socks on purpose?',
      sender_id: 'user_anon1',
      replied_to: {
        id: '12',
        message: 'Nope, not Coldplay. You’re confusing me with someone else 😉',
      },
      timeStamp: '2025-10-13T14:16:45Z',
    },
    {
      id: '14',
      message: 'Okay rude 😂 but yeah, guilty. How did you notice that?',
      sender_id: 'user_anon2',
      replied_to: {
        id: '13',
        message:
          'Darn. Thought I had you. Alright then… you ever wear mismatched socks on purpose?',
      },
      timeStamp: '2025-10-13T14:17:12Z',
    },
    {
      id: '15',
      message:
        'Honestly? Saw them peeking out when you crossed your legs last Thursday.',
      sender_id: 'user_anon1',
      replied_to: {
        id: '14',
        message: 'Okay rude 😂 but yeah, guilty. How did you notice that?',
      },
      timeStamp: '2025-10-13T14:18:03Z',
    },
    {
      id: '16',
      message:
        'Okay now I’m suspicious. Were you the one sitting near the window?',
      sender_id: 'user_anon2',
      replied_to: {
        id: '15',
        message:
          'Honestly? Saw them peeking out when you crossed your legs last Thursday.',
      },
      timeStamp: '2025-10-13T14:19:20Z',
    },
    {
      id: '17',
      message: 'Window seat. Hoodie. Headphones. That’s my regular setup.',
      sender_id: 'user_anon1',
      replied_to: {
        id: '16',
        message:
          'Okay now I’m suspicious. Were you the one sitting near the window?',
      },
      timeStamp: '2025-10-13T14:20:00Z',
    },
    {
      id: '18',
      message: 'Yep. Definitely know who you are now. But I’m not telling.',
      sender_id: 'user_anon2',
      replied_to: {
        id: '17',
        message: 'Window seat. Hoodie. Headphones. That’s my regular setup.',
      },
      timeStamp: '2025-10-13T14:21:45Z',
    },
    {
      id: '19',
      message: 'Now that’s just mean. Drop a hint at least?',
      sender_id: 'user_anon1',
      replied_to: {
        id: '18',
        message: 'Yep. Definitely know who you are now. But I’m not telling.',
      },
      timeStamp: '2025-10-13T14:22:18Z',
    },
    {
      id: '20',
      message:
        'Mmm… okay. We’ve had exactly three conversations. Two in real life, one in this app.',
      sender_id: 'user_anon2',
      replied_to: {
        id: '19',
        message: 'Now that’s just mean. Drop a hint at least?',
      },
      timeStamp: '2025-10-13T14:23:40Z',
    },
    {
      id: '21',
      message: 'Wait… are you the one I talked to in the elevator that one time?',
      sender_id: 'user_anon1',
      replied_to: {
        id: '20',
        message:
          'Mmm… okay. We’ve had exactly three conversations. Two in real life, one in this app.',
      },
      timeStamp: '2025-10-13T14:24:12Z',
    },
    {
      id: '22',
      message:
        'Yup. I dropped my phone, you picked it up. We said ‘hi’ like 3 times awkwardly.',
      sender_id: 'user_anon2',
      replied_to: {
        id: '21',
        message:
          'Wait… are you the one I talked to in the elevator that one time?',
      },
      timeStamp: '2025-10-13T14:25:09Z',
    },
    {
      id: '23',
      message: 'That’s wild. Small world, huh?',
      sender_id: 'user_anon1',
      replied_to: {
        id: '22',
        message:
          'Yup. I dropped my phone, you picked it up. We said ‘hi’ like 3 times awkwardly.',
      },
      timeStamp: '2025-10-13T14:26:00Z',
    },
    {
      id: '24',
      message: 'Smaller than we think. Honestly, this is kinda fun.',
      sender_id: 'user_anon2',
      replied_to: {
        id: '23',
        message: 'That’s wild. Small world, huh?',
      },
      timeStamp: '2025-10-13T14:26:45Z',
    },
    {
      id: '25',
      message: 'Okay, mystery friend. What’s your go-to drink from the cafe?',
      sender_id: 'user_anon1',
      replied_to: {
        id: '24',
        message: 'Smaller than we think. Honestly, this is kinda fun.',
      },
      timeStamp: '2025-10-13T14:27:10Z',
    },
    {
      id: '26',
      message: 'Hazelnut latte, extra foam. You?',
      sender_id: 'user_anon2',
      replied_to: {
        id: '25',
        message: 'Okay, mystery friend. What’s your go-to drink from the cafe?',
      },
      timeStamp: '2025-10-13T14:28:02Z',
    },
    {
      id: '27',
      message: 'Classic black coffee, no sugar. I’m boring 😅',
      sender_id: 'user_anon1',
      replied_to: {
        id: '26',
        message: 'Hazelnut latte, extra foam. You?',
      },
      timeStamp: '2025-10-13T14:28:33Z',
    },
    {
      id: '28',
      message:
        'Nah, just efficient. You’d survive the apocalypse. I’d die hunting oat milk.',
      sender_id: 'user_anon2',
      replied_to: {
        id: '27',
        message: 'Classic black coffee, no sugar. I’m boring 😅',
      },
      timeStamp: '2025-10-13T14:29:20Z',
    },
    {
      id: '29',
      message:
        '🤣 I’ll bring extra in case we team up. Mystery apocalypse partner?',
      sender_id: 'user_anon1',
      replied_to: {
        id: '28',
        message:
          'Nah, just efficient. You’d survive the apocalypse. I’d die hunting oat milk.',
      },
      timeStamp: '2025-10-13T14:30:01Z',
    },
    {
      id: '30',
      message:
        'Deal. But only if you tell me who you *really* are by the end of the week 👀',
      sender_id: 'user_anon2',
      replied_to: {
        id: '29',
        message:
          '🤣 I’ll bring extra in case we team up. Mystery apocalypse partner?',
      },
      timeStamp: '2025-10-13T14:31:00Z',
    },
    {
      id: '31',
      message:
        'What if I already know who you are, but I’m enjoying the mystery too much to say?',
      sender_id: 'user_anon1',
      replied_to: {
        id: '30',
        message:
          'Deal. But only if you tell me who you *really* are by the end of the week 👀',
      },
      timeStamp: '2025-10-13T14:32:10Z',
    },
    {
      id: '32',
      message: 'Oh, dangerous game. You sure about that?',
      sender_id: 'user_anon2',
      replied_to: {
        id: '31',
        message:
          'What if I already know who you are, but I’m enjoying the mystery too much to say?',
      },
      timeStamp: '2025-10-13T14:32:55Z',
    },
    {
      id: '33',
      message: 'Maybe. Or maybe I’m bluffing.',
      sender_id: 'user_anon1',
      replied_to: {
        id: '32',
        message: 'Oh, dangerous game. You sure about that?',
      },
      timeStamp: '2025-10-13T14:33:33Z',
    },
    {
      id: '34',
      message: 'Classic you. Always dodging direct answers 😒',
      sender_id: 'user_anon2',
      replied_to: {
        id: '33',
        message: 'Maybe. Or maybe I’m bluffing.',
      },
      timeStamp: '2025-10-13T14:34:01Z',
    },
    {
      id: '35',
      message:
        'Whoa. That sounded… really specific. You sure we’ve only talked twice IRL?',
      sender_id: 'user_anon1',
      replied_to: {
        id: '34',
        message: 'Classic you. Always dodging direct answers 😒',
      },
      timeStamp: '2025-10-13T14:34:45Z',
    },
    {
      id: '36',
      message: 'Maybe I’ve been paying more attention than you thought 😉',
      sender_id: 'user_anon2',
      replied_to: {
        id: '35',
        message:
          'Whoa. That sounded… really specific. You sure we’ve only talked twice IRL?',
      },
      timeStamp: '2025-10-13T14:35:30Z',
    },
    {
      id: '37',
      message: 'Alright Sherlock, tell me one thing about me that proves it.',
      sender_id: 'user_anon1',
      replied_to: {
        id: '36',
        message: 'Maybe I’ve been paying more attention than you thought 😉',
      },
      timeStamp: '2025-10-13T14:36:02Z',
    },
    {
      id: '38',
      message:
        'You tap your pen three times before you write anything. Every single time.',
      sender_id: 'user_anon2',
      replied_to: {
        id: '37',
        message: 'Alright Sherlock, tell me one thing about me that proves it.',
      },
      timeStamp: '2025-10-13T14:36:49Z',
    },
    {
      id: '39',
      message:
        'Okay. You either have a superpower or you’ve stared at me for way too long.',
      sender_id: 'user_anon1',
      replied_to: {
        id: '38',
        message:
          'You tap your pen three times before you write anything. Every single time.',
      },
      timeStamp: '2025-10-13T14:37:30Z',
    },
    {
      id: '40',
      message: 'Can’t it be both? 👀',
      sender_id: 'user_anon2',
      replied_to: {
        id: '39',
        message:
          'Okay. You either have a superpower or you’ve stared at me for way too long.',
      },
      timeStamp: '2025-10-13T14:38:00Z',
    },
    {
      id: '41',
      message: 'I’m both flattered and mildly alarmed.',
      sender_id: 'user_anon1',
      replied_to: {
        id: '40',
        message: 'Can’t it be both? 👀',
      },
      timeStamp: '2025-10-13T14:38:42Z',
    },
    {
      id: '42',
      message:
        "Don't worry. I'm not a stalker, just observant… and maybe a little intrigued.",
      sender_id: 'user_anon2',
      replied_to: {
        id: '41',
        message: 'I’m both flattered and mildly alarmed.',
      },
      timeStamp: '2025-10-13T14:39:15Z',
    },
    {
      id: '43',
      message:
        'You’re definitely not just a random stranger. I’d bet coffee on it.',
      sender_id: 'user_anon1',
      replied_to: {
        id: '42',
        message:
          "Don't worry. I'm not a stalker, just observant… and maybe a little intrigued.",
      },
      timeStamp: '2025-10-13T14:40:00Z',
    },
    {
      id: '44',
      message:
        'Free coffee? Tempting. But what if I said I already owed you one?',
      sender_id: 'user_anon2',
      replied_to: {
        id: '43',
        message:
          'You’re definitely not just a random stranger. I’d bet coffee on it.',
      },
      timeStamp: '2025-10-13T14:40:38Z',
    },
    {
      id: '45',
      message: 'Now THAT is a clue.',
      sender_id: 'user_anon1',
      replied_to: {
        id: '44',
        message:
          'Free coffee? Tempting. But what if I said I already owed you one?',
      },
      timeStamp: '2025-10-13T14:41:15Z',
    },
    {
      id: '46',
      message:
        'You held the door open for me once, remember? I spilled coffee on my own shoes.',
      sender_id: 'user_anon2',
      replied_to: {
        id: '45',
        message: 'Now THAT is a clue.',
      },
      timeStamp: '2025-10-13T14:42:08Z',
    },
    {
      id: '47',
      message: 'No way. You’re *that* person? That was like a month ago!',
      sender_id: 'user_anon1',
      replied_to: {
        id: '46',
        message:
          'You held the door open for me once, remember? I spilled coffee on my own shoes.',
      },
      timeStamp: '2025-10-13T14:42:50Z',
    },
    {
      id: '48',
      message:
        'Yup. Brown boots. Cursed lid. And you said ‘coffee karma is real.’',
      sender_id: 'user_anon2',
      replied_to: {
        id: '47',
        message: 'No way. You’re *that* person? That was like a month ago!',
      },
      timeStamp: '2025-10-13T14:43:27Z',
    },
    {
      id: '49',
      message:
        'Okay I’m 99% sure who you are now. And I lowkey wish we had talked more.',
      sender_id: 'user_anon1',
      replied_to: {
        id: '48',
        message:
          'Yup. Brown boots. Cursed lid. And you said ‘coffee karma is real.’',
      },
      timeStamp: '2025-10-13T14:44:10Z',
    },
    {
      id: '50',
      message:
        'Well, the week’s not over. Want to meet for a very non-anonymous coffee?',
      sender_id: 'user_anon2',
      replied_to: {
        id: '49',
        message:
          'Okay I’m 99% sure who you are now. And I lowkey wish we had talked more.',
      },
      timeStamp: '2025-10-13T14:45:00Z',
    },
  ];
  
  export default messages.reverse().slice(0, 20);
  