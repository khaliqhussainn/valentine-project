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
        "From the first moment I saw you, I knew my heart had found its home. You are not just the love of my life you are the reason I believe in love at all. Every heartbeat whispers your name, every dream begins and ends with you. I don't just want to be with you today I want to wake up beside your smile for every tomorrow that follows. You are my forever, my always, and everything in between.",
      color: "from-purple-900 via-pink-700 to-rose-500",
      bgColor: "bg-gradient-to-br from-[#1a001a] via-[#2d0a2d] to-[#1a001a]",
      reasons: [
        "Your smile makes all my tension disappear in an instant",
        "Your presence fills my heart with a calm I never knew I needed",
        "You turn the simplest moments into something magical just by being there",
        "Your kindness pushes me to become a better version of myself",
        "Even when I irritate you, your love and gentle gestures make me feel safe and wanted",
        "You are my storm that washes away every worry and leaves me at peace",
      ],
      heartQuotes: [
        {
          emoji: "💫",
          text: "The day I met you, the stars rearranged themselves",
        },
        {
          emoji: "💛",
          text: "Every moment with you feels like a beautiful dream I never want to wake up from",
        },
        {
          emoji: "💍",
          text: "I don't need a perfect life — I just need you in it",
        },
        {
          emoji: "🌙",
          text: "You are my today, my tomorrow, and all of my forevers",
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
