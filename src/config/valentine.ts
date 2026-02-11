// ❤️ Valentine Configuration
// Names come from .env — set NEXT_PUBLIC_GIRLFRIEND_NAME and NEXT_PUBLIC_SENDER_NAME there

// Helper function to check if a day should be unlocked based on current date
function isDayUnlocked(dayDate: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const unlockDate = new Date(dayDate);
  unlockDate.setHours(0, 0, 0, 0);

  return today >= unlockDate;
}

export const valentineConfig = {
  name: process.env.NEXT_PUBLIC_GIRLFRIEND_NAME || "My Love",
  senderName: process.env.NEXT_PUBLIC_SENDER_NAME || "Your Baby",

  // Valentine's Week Days Configuration
  days: {
    "rose-day": {
      date: "2026-02-07",
      title: "Rose Day",
      emoji: "🌹",
      get unlocked() {
        return isDayUnlocked(this.date);
      },
      tagline: "A rose for the most beautiful soul I know",
      message:
        "The moment my eyes met yours, I felt a pull as ancient and certain as the bee to the bloom. In the garden of my life, you are the masterpiece: your smile has the velvet grace of a rose, your eyes hold the golden warmth of a sunflower, and your spirit carries the serene purity of a lotus. I promise to be your faithful gardener to nourish your dreams and shield you from every thorn. Happy Rose Day, my love.",
      color: "from-red-900 via-rose-700 to-pink-500",
      bgColor: "bg-gradient-to-br from-[#1a0000] via-[#2d0a0a] to-[#1a0000]",
    },
    "propose-day": {
      date: "2026-02-08",
      title: "Propose Day",
      emoji: "💍",
      get unlocked() {
        return isDayUnlocked(this.date);
      },
      tagline:
        "Every love story is beautiful, but ours is my favourite and special",
      message:
        "My Jaan you're my everything, you're my dream which i imagine in my life i never think about better life partner than you, i am so lucky to have you in my life i love you more than you ever imagine, I Love you more than you ever dream, I am here for you always fulfilling your all dreams I will be there for you till my last breathe, I promise baby you will find me always your side standing in front of you protecting from whole world, I promise I take care of you like a baby more than myself, more than anyone I’ll never make you feel sad or regret choosing me, we can fight, argue, scratch each other face but it will be temperory in the end I’m yours and you’re mine always and forever. I promise baby I always love you! I LOVE YOU SO MUCH MARYAM NADEEM. You are my forever, my always, and everything in between.",
      color: "from-purple-900 via-pink-700 to-rose-500",
      bgColor: "bg-gradient-to-br from-[#1a001a] via-[#2d0a2d] to-[#1a001a]",
      reasons: [
        "I'll always choose you, every single day, no matter what",
        "I cook food for you, care for you, fullfill your all needs, I will be there for you in every situation",
        "I fight and argue sometimes do things which you don't like but everything is temporary but my love for you is permanent never forget that, even in my busy day i always find time for you because you are my first priority.",
        "I may not be perfect, not handsome, not rich, but i love you more than anyone and even if i have nothing i still do everything for you to complete your need, i know we have a lot of problems i don't know how we will solve them but i promise you i will never leave you alone in any situation, i will be there for you always, i will protect you from whole world, i will be your safe place, My life!!",
        "Even when I irritate you, which i know i do most of the time 🙂‍↕️, it's my right and i love to tease you but there's love, care and respect for you always, please forgive my bad behaviour sometimes i am not like you want sometime you can't talk freely about every topic i hate about it myself i don't know why i overreact but i want you to tell me everything freely safely everything whatever you want please... i promise i try to change this mistake as well ",
        "There will never be ego or attitude between you and me. Even if I have to say sorry an infinite number of times, I will because you are mine, my wife, and your respect is my responsibility. Just as I will never allow you to bend before others, I will never allow anyone to do the same to you. I don’t want long fights or endless arguments. Even if we’re angry with each other, I want to resolve it within five minutes. I don’t want us to sleep while holding anger in our hearts. I want to solve every problem as soon as it arises, because I can’t bear even a second without talking to you. I can’t bear even a second without you without your love, your care, and your presence.",
      ],
      heartQuotes: [
        {
          emoji: "💫",
          text: "You're so pure, so kind, so beautiful inside and out. I am the luckiest person alive to have you in my life",
        },
        {
          emoji: "💛",
          text: "You're the prettiest, cutiest, gorgeiest, sexist, hotest and most beautiful girl in the whole universe.",
        },
        {
          emoji: "💍",
          text: "Marry me i don't want to spend a single day without you, i want to be with you for forever, i want to be your husband and i want you to be my wife, i want to make you the happiest woman in the world, i want to give you all the love and care you deserve, i want to be your everything, i want to be your forever, i want to be your always, i want to be your all, i want to be yours and you be mine for forever.",
        },
        {
          emoji: "🌙",
          text: "You are my today, my tomorrow, and all of my forevers love, my baby, my khuchupuchu my maruuummyy, my everything, I LOVE YOU SO MUCH!!!",
        },
      ],
    },
    "chocolate-day": {
      date: "2026-02-09",
      title: "Chocolate Day",
      emoji: "🍫",
      get unlocked() {
        return isDayUnlocked(this.date);
      },
      tagline: "Sweet moments, sweeter memories, sweetest you",
      message:
        "I remember the day we started talking. I remember the first time you smiled with me. I remember the day you loved me. You are the best thing that has ever happened to me. I may not be with you right now, but my heart is always there with you. I want to kiss you, hold you close, and spoil you with all the things you love—chocolates, lava cake, waffles, fruit trifle… everything. My love, my baby, I'll always remember to wish you and remind you how special you are to me",
      color: "from-amber-900 via-yellow-800 to-orange-600",
      bgColor: "bg-gradient-to-br from-[#1a0f00] via-[#2d1a0a] to-[#1a0f00]",
      chocolateTypes: [
        {
          name: "Dark Chocolate",
          emoji: "🍫",
          meaning: "Deep, intense love that only grows richer with time",
        },
        {
          name: "Milk Chocolate",
          emoji: "🤎",
          meaning: "Sweet comfort and warmth you bring to my life",
        },
        {
          name: "White Chocolate",
          emoji: "🤍",
          meaning: "Pure, innocent joy of being with you",
        },
        {
          name: "Truffle",
          emoji: "🎁",
          meaning: "You're the rare treasure I cherish every day",
        },
      ],
      memories: [
        "The first time you smiled at me",
        "Every laugh we've shared together",
        "The moment I knew I loved you",
        "All the little things that make you, you",
      ],
    },
    "teddy-day": {
      date: "2026-02-10",
      title: "Teddy Day",
      emoji: "🧸",
      get unlocked() {
        return isDayUnlocked(this.date);
      },
      tagline: "My Sweetieee Softyyy Softyy Maruuummyy",
      message:
        "I always want to be your safe place, your comfort, your home where you feel lite not heavy, i know i am strict sometimes and you'll think before saying anything to me but i don't want like this i want you to be freely with me say what you feel, any problem, any happy or sad thing, any mistake all things, i want you to told me first just like in your heart your mind knows everything i want to be there for you inside your heart knows every little thing about you and made you happy, safe and mossssssst happiest person in this world, i will protect you always i will be your soft, safe place i wish i could hug you right now make you feel better but i keep counting days and once you're with me for forever i'll do everything for you my love, my princess, my baby, my everything, I LOVE YOU SO MUCH!!!! ",
      color: "from-orange-900 via-amber-700 to-yellow-500",
      bgColor: "bg-gradient-to-br from-[#1a1000] via-[#2d1f0a] to-[#1a1000]",
    },
    "promise-day": {
      date: "2026-02-11",
      title: "Promise Day",
      emoji: "🤞",
      get unlocked() {
        return isDayUnlocked(this.date);
      },
      tagline: "Forever isn't long enough with you",
      message:
        "Today I promise you not just my words, but my actions. I promise to love you in your brightest days and hold you through your darkest nights. I promise to be your partner, your friend, your supporter, and your biggest cheerleader.",
      color: "from-blue-900 via-indigo-700 to-purple-500",
      bgColor: "bg-gradient-to-br from-[#00001a] via-[#0a0a2d] to-[#00001a]",
      promises: [
        "I promise to always make you smile, even on your hardest days",
        "I promise to listen when you need to talk and stay silent when you need peace",
        "I promise to choose you, every single day, no matter what",
        "I promise to love every version of you - past, present, and future",
        "I promise to be your safe place, your home, your forever",
      ],
    },
    "hug-day": {
      date: "2026-02-12",
      title: "Hug Day",
      emoji: "🤗",
      get unlocked() {
        return isDayUnlocked(this.date);
      },
      tagline: "In your arms, I found my home",
      message:
        "They say home is where the heart is, but for me, home is wherever you are. Your hugs have this magical power to make everything okay. Distance may keep us apart, but my heart hugs yours every single moment.",
      color: "from-green-900 via-emerald-700 to-teal-500",
      bgColor: "bg-gradient-to-br from-[#001a0a] via-[#0a2d1a] to-[#001a0a]",
    },
    "kiss-day": {
      date: "2026-02-13",
      title: "Kiss Day",
      emoji: "💋",
      get unlocked() {
        return isDayUnlocked(this.date);
      },
      tagline: "A thousand kisses wouldn't be enough",
      message:
        "Every kiss with you feels like the first time butterflies in my stomach, heart racing, time standing still. I'm sending you a thousand virtual kisses until I can give you real ones again.",
      color: "from-pink-900 via-rose-600 to-red-400",
      bgColor: "bg-gradient-to-br from-[#1a000f] via-[#2d0a1f] to-[#1a000f]",
    },
    "valentines-day": {
      date: "2026-02-14",
      title: "Valentine's Day",
      emoji: "❤️",
      get unlocked() {
        return isDayUnlocked(this.date);
      },
      tagline: "You are my always and forever",
      message:
        "Happy Valentine's Day to the love of my life. Today, tomorrow, and every day after that, I choose you. You're not just my Valentine you're my everything.",
      color: "from-red-800 via-rose-600 to-pink-400",
      bgColor: "bg-gradient-to-br from-[#1a0005] via-[#2d0a15] to-[#1a0005]",
    },
  },
};

export type DayKey = keyof typeof valentineConfig.days;

export const dayOrder: DayKey[] = [
  "rose-day",
  "propose-day",
  "chocolate-day",
  "teddy-day",
  "promise-day",
  "hug-day",
  "kiss-day",
  "valentines-day",
];
