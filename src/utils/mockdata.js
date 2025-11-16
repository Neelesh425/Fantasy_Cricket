// Mock Player Data
export const mockPlayers = [
  {
    id: 1,
    name: "Virat Kohli",
    country: "India",
    role: "Batsman",
    image: "https://imgs.search.brave.com/6ZZEBFoP1fJACS8Bght_ARIheAZFG_oDgvOOO91aNHc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci8zNzkv/NDM2L0hELXdhbGxw/YXBlci12aXJhdC1r/b2hsaS1zbWlsZS12/aXJhdC1rb2hsaS1z/bWlsZS1iYXRzbWFu/LXNwb3J0cy1jcmlj/a2V0ZXIta2luZy1r/b2hsaS10aHVtYm5h/aWwuanBn",
    stats: {
      matches: 274,
      runs: 13848,
      average: 58.18,
      strikeRate: 93.54,
      centuries: 50,
      fifties: 72,
      highestScore: 183
    },
    recentForm: [78, 45, 112, 23, 89, 67, 156, 34, 91, 103],
    fantasyPoints: 9850,
    trending: true
  },
  {
    id: 2,
    name: "Rohit Sharma",
    country: "India",
    role: "Batsman",
    image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319500/319593.png",
    stats: {
      matches: 251,
      runs: 10866,
      average: 48.96,
      strikeRate: 89.87,
      centuries: 31,
      fifties: 57,
      highestScore: 264
    },
    recentForm: [45, 89, 23, 67, 134, 78, 45, 98, 56, 123],
    fantasyPoints: 8920,
    trending: true
  },
  {
    id: 3,
    name: "Jasprit Bumrah",
    country: "India",
    role: "Bowler",
    image: "https://imgs.search.brave.com/jp9PS1EeSrDN__4bGoj3zDgBihe3OxhPOsKxIN48wzY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTk4/MjcwNjY5MS9waG90/by92aXNha2hhcGF0/bmFtLWluZGlhLWlu/ZGlhLWJvd2xlci1q/YXNwcml0LWJ1bXJh/aC1pbi1ib3dsaW5n/LWFjdGlvbi1kdXJp/bmctZGF5LXR3by1v/Zi10aGUtMm5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1C/QkQ2NzBtUUkydWRn/Q2M2OVpBYWI1WGZO/TnBER2diSnZfQnhx/UG5sMU5jPQ",
    stats: {
      matches: 143,
      wickets: 242,
      average: 23.45,
      economy: 4.56,
      strikeRate: 30.8,
      bestBowling: "6/19",
      fiveWickets: 5
    },
    recentForm: [3, 2, 4, 1, 5, 2, 3, 4, 2, 3],
    fantasyPoints: 9120,
    trending: true
  },
  {
    id: 4,
    name: "Babar Azam",
    country: "Pakistan",
    role: "Batsman",
    image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/313600/313696.png",
    stats: {
      matches: 115,
      runs: 5729,
      average: 56.43,
      strikeRate: 88.32,
      centuries: 19,
      fifties: 31,
      highestScore: 158
    },
    recentForm: [67, 89, 112, 45, 78, 156, 34, 92, 67, 101],
    fantasyPoints: 8750,
    trending: true
  },
  {
    id: 5,
    name: "Ben Stokes",
    country: "England",
    role: "All-rounder",
    image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/302600/302698.png",
    stats: {
      matches: 188,
      runs: 6323,
      average: 38.26,
      strikeRate: 88.45,
      centuries: 13,
      fifties: 30,
      wickets: 198,
      bowlingAverage: 32.89
    },
    recentForm: [56, 78, 34, 89, 45, 67, 123, 23, 91, 67],
    fantasyPoints: 8450,
    trending: false
  },
  {
    id: 6,
    name: "Kane Williamson",
    country: "New Zealand",
    role: "Batsman",
    image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/277200/277259.png",
    stats: {
      matches: 174,
      runs: 7368,
      average: 47.52,
      strikeRate: 81.34,
      centuries: 25,
      fifties: 35,
      highestScore: 251
    },
    recentForm: [78, 45, 89, 123, 67, 34, 98, 56, 112, 45],
    fantasyPoints: 7890,
    trending: false
  }
];

// Dashboard Stats
export const dashboardStats = {
  totalPlayers: 156,
  activePlayers: 124,
  totalMatches: 1247,
  upcomingMatches: 18
};

// Recent Matches
export const recentMatches = [
  {
    id: 1,
    team1: "India",
    team2: "Australia",
    winner: "India",
    date: "2025-11-10",
    format: "ODI",
    venue: "Mumbai"
  },
  {
    id: 2,
    team1: "England",
    team2: "Pakistan",
    winner: "Pakistan",
    date: "2025-11-12",
    format: "T20",
    venue: "Dubai"
  },
  {
    id: 3,
    team1: "New Zealand",
    team2: "South Africa",
    winner: "New Zealand",
    date: "2025-11-14",
    format: "Test",
    venue: "Wellington"
  }
];

// Leaderboard Data
export const leaderboardData = {
  topRunScorers: mockPlayers.slice(0, 5).sort((a, b) => b.stats.runs - a.stats.runs),
  topWicketTakers: [
    mockPlayers[2],
    {
      id: 7,
      name: "Mitchell Starc",
      country: "Australia",
      role: "Bowler",
      stats: { wickets: 234, average: 22.89, economy: 4.89 },
      fantasyPoints: 8900
    },
    {
      id: 8,
      name: "Rashid Khan",
      country: "Afghanistan",
      role: "Bowler",
      stats: { wickets: 198, average: 18.45, economy: 4.12 },
      fantasyPoints: 8650
    }
  ],
  topFantasyPlayers: mockPlayers.slice(0, 5).sort((a, b) => b.fantasyPoints - a.fantasyPoints)
};

// Performance chart data
export const performanceChartData = [
  { month: 'Jun', runs: 450, wickets: 12 },
  { month: 'Jul', runs: 520, wickets: 15 },
  { month: 'Aug', runs: 480, wickets: 18 },
  { month: 'Sep', runs: 590, wickets: 14 },
  { month: 'Oct', runs: 620, wickets: 20 },
  { month: 'Nov', runs: 580, wickets: 16 }
];