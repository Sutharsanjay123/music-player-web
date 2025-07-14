let songs = [
  {
    name: 'Mood (feat. iann dior)',
    artist: '24kGoldn',
    streams: 5700000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ff8c985ecb3b7c5f847be357'
  },
  {
    name: 'Blinding Lights',
    artist: 'The Weeknd',
    streams: 5514000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36'
  },
  {
    name: 'Dynamite',
    artist: 'BTS',
    streams: 5746000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273755995e9ff2b1b0c753f5eb8'
  },
  {
    name: 'ROCKSTAR (feat. Roddy Ricch)',
    artist: 'DaBaby',
    streams: 5746000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27320e08c8cc23f404d723b5647'
  },
  {
    name: 'For The Night (feat. Lil Baby & DaBaby)',
    artist: 'Pop Smoke',
    streams: 5823000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27377ada0863603903f57b34369'
  },
  {
    name: 'Laugh Now Cry Later (feat. Lil Durk)',
    artist: 'Drake',
    streams: 5760999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27352c75ed37313b889447011ef'
  },
  {
    name: 'Hawái',
    artist: 'Maluma',
    streams: 5787000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2734805528033046475b63f0fd5'
  },
  {
    name: 'Lemonade',
    artist: 'Internet Money',
    streams: 5799000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273d46a8fffbe6c8630784f04da'
  },
  {
    name: 'Savage Love (Laxed - Siren Beat)',
    artist: 'Jawsh 685',
    streams: 5767000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273e3eb3b8feeafb746ecf659e7'
  },
  {
    name: 'Head & Heart (feat. MNEK)',
    artist: 'Joel Corry',
    streams: 5734000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27391e93c59bacfe819db9601eb'
  },
  {
    name: 'Heather',
    artist: 'Conan Gray',
    streams: 5357000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27388e3cda6d29b2552d4d6bc43'
  },
  {
    name: 'Holy (feat. Chance The Rapper)',
    artist: 'Justin Bieber',
    streams: 5672999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273572c68f79b356c21202e248c'
  },
  {
    name: 'you broke me first',
    artist: 'Tate McRae',
    streams: 5642000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2730c2c97099fd6a637ed0aa4a4'
  },
  {
    name: 'UN DIA (ONE DAY) (Feat. Tainy)',
    artist: 'J Balvin',
    streams: 5571000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273312bd86cc2db22fde885ee73'
  },
  {
    name: 'POPSTAR (feat. Drake)',
    artist: 'DJ Khaled',
    streams: 5800000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273efaecb4b9cbae7c120d14617'
  },
  {
    name: 'Breaking Me',
    artist: 'Topic',
    streams: 5789000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ca801dab96017456b9847ac2'
  },
  {
    name: 'Mood Swings (feat. Lil Tjay)',
    artist: 'Pop Smoke',
    streams: 5480000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27377ada0863603903f57b34369'
  },
  {
    name: 'death bed (coffee for your head)',
    artist: 'Powfu',
    streams: 5726000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273bf01fd0986a195d485922167'
  },
  {
    name: 'WHATS POPPIN (feat. DaBaby, Tory Lanez & Lil Wayne) - Remix',
    artist: 'Jack Harlow',
    streams: 5904000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273b5f0a8d46cef9647548c64dc'
  },
  {
    name: 'Come & Go (with Marshmello)',
    artist: 'Juice WRLD',
    streams: 5625000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2733e0698e4ae5ffb82a005aeeb'
  },
  {
    name: 'What You Know Bout Love',
    artist: 'Pop Smoke',
    streams: 5709000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27377ada0863603903f57b34369'
  },
  {
    name: 'Wishing Well',
    artist: 'Juice WRLD',
    streams: 5650000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2733e0698e4ae5ffb82a005aeeb'
  },
  {
    name: 'Go Crazy',
    artist: 'Chris Brown',
    streams: 5755000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27363e0ddbb488d0eeec0e738fc'
  },
  {
    name: 'Midnight Sky',
    artist: 'Miley Cyrus',
    streams: 5705000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273d59c3c489691c8b41043cab2'
  },
  {
    name: 'Take You Dancing',
    artist: 'Jason Derulo',
    streams: 5789000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27354eab2e4aa8b8706b6b526d2'
  },
  {
    name: 'Dance Monkey',
    artist: 'Tones And I',
    streams: 5824000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273c6f7af36ecdc3ed6e0a1f169'
  },
  {
    name: 'ily (i love you baby) (feat. Emilee)',
    artist: 'Surf Mesa',
    streams: 5674000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273b3de5764cc02f94714487c86'
  },
  {
    name: 'Someone You Loved',
    artist: 'Lewis Capaldi',
    streams: 5501000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273fc2101e6889d6ce9025f85f2'
  },
  {
    name: 'GREECE (feat. Drake)',
    artist: 'DJ Khaled',
    streams: 5695000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2737db0d21fc5696a3fcedfb933'
  },
  {
    name: 'Stuck with U (with Justin Bieber)',
    artist: 'Ariana Grande',
    streams: 5597000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2732babb9dbd8f5146112f1bf86'
  },
  {
    name: 'Circles',
    artist: 'Post Malone',
    streams: 5695000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2739478c87599550dd73bfa7e02'
  },
  {
    name: 'The Woo (feat. 50 Cent & Roddy Ricch)',
    artist: 'Pop Smoke',
    streams: 5490000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27377ada0863603903f57b34369'
  },
  {
    name: 'Memories',
    artist: 'Maroon 5',
    streams: 5764000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273b8c0135a218de2d10a8435f5'
  },
  {
    name: 'The Box',
    artist: 'Roddy Ricch',
    streams: 5895999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273600adbc750285ea1a8da249f'
  },
  {
    name: 'bad guy',
    artist: 'Billie Eilish',
    streams: 5701000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce'
  },
  {
    name: 'Wonder',
    artist: 'Shawn Mendes',
    streams: 5333000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2733d9621bb2904dc57a60a6b36'
  },
  {
    name: 'Tusa',
    artist: 'KAROL G',
    streams: 5802999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ddd3154c58e15a8bdb63bbcc'
  },
  {
    name: 'Mad at Disney',
    artist: 'salem ilese',
    streams: 5738000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2731cb068e27f83975bc827586e'
  },
  {
    name: 'HIGHEST IN THE ROOM',
    artist: 'Travis Scott',
    streams: 5598000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273e42b5fea4ac4c3d6328b622b'
  },
  {
    name: "Still Don't Know My Name",
    artist: 'Labrinth',
    streams: 5316000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27389c39ba1acdf33ed7acd3867'
  },
  {
    name: 'Rain On Me (with Ariana Grande)',
    artist: 'Lady Gaga',
    streams: 5672000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273c8583f0bd97d3042d4971acf'
  },
  {
    name: 'Robbery',
    artist: 'Juice WRLD',
    streams: 5685000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273af149eb4002f65f83afc63c4'
  },
  {
    name: 'Put Your Records On',
    artist: 'Ritt Momney',
    streams: 5399000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273d52d8eb3be188231e120dbbd'
  },
  {
    name: 'Smile (with The Weeknd)',
    artist: 'Juice WRLD',
    streams: 5694000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2733e0698e4ae5ffb82a005aeeb'
  },
  {
    name: 'Party Girl',
    artist: 'StaySolidRocky',
    streams: 5728000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273f3fb166b5515fb19b070773c'
  },
  {
    name: 'Be Kind (with Halsey)',
    artist: 'Marshmello',
    streams: 5630000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273fdf2e993e10e67396b3bf759'
  },
  {
    name: 'Before You Go',
    artist: 'Lewis Capaldi',
    streams: 5459000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273f6cda6c81dd1c2d5783fbd2d'
  },
  {
    name: 'everything i wanted',
    artist: 'Billie Eilish',
    streams: 5704000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273f2248cf6dad1d6c062587249'
  },
  {
    name: 'Be Like That - feat. Swae Lee & Khalid',
    artist: 'Kane Brown',
    streams: 5727000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273b670be86ddfa9d49caa56971'
  },
  {
    name: "Stunnin' (feat. Harm Franklin)",
    artist: 'Curtis Waters',
    streams: 5885000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273c8e201b69f790a7c6e7e1429'
  },
  {
    name: 'Ice Cream (with Selena Gomez)',
    artist: 'BLACKPINK',
    streams: 5790000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2733709f2400b95a7c6f22a7ee0'
  },
  {
    name: 'my future',
    artist: 'Billie Eilish',
    streams: 5444000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273c6031b915b9ce1378be1200f'
  },
  {
    name: 'Believer',
    artist: 'Imagine Dragons',
    streams: 5775999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a'
  },
  {
    name: 'ROXANNE',
    artist: 'Arizona Zervas',
    streams: 5621000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273069a93617a916760ab88ffea'
  },
  {
    name: 'FRANCHISE (feat. Young Thug & M.I.A.)',
    artist: 'Travis Scott',
    streams: 5835000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27370f2ab5608885749f7210b5f'
  },
  {
    name: 'Say So',
    artist: 'Doja Cat',
    streams: 5787000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27382b243023b937fd579a35533'
  },
  {
    name: 'Adore You',
    artist: 'Harry Styles',
    streams: 5675999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27377fdcfda6535601aff081b6a'
  },
  {
    name: 'Ride It',
    artist: 'Regard',
    streams: 5880000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2735c27813ae019011fcb370c78'
  },
  {
    name: 'Lean (feat. Towy, Osquel, Beltito & Sammy & Falsetto)',
    artist: 'Super Yei',
    streams: 5863000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27355fd948694de3039b1f87c76'
  },
  {
    name: 'Falling',
    artist: 'Harry Styles',
    streams: 5567000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27377fdcfda6535601aff081b6a'
  },
  {
    name: 'Sunday Best',
    artist: 'Surfaces',
    streams: 5878000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2733667dc27da7b24360d6050d0'
  },
  {
    name: 'Godzilla (feat. Juice WRLD)',
    artist: 'Eminem',
    streams: 5807999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2732f44aec83b20e40f3baef73c'
  },
  {
    name: 'Supalonely',
    artist: 'BENEE',
    streams: 5863000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27382f4ec53c54bdd5be4eed4a0'
  },
  {
    name: 'Daisy',
    artist: 'Ashnikko',
    streams: 5834000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273a759c9110a458a97f767eb2d'
  },
  {
    name: 'Are You Bored Yet? (feat. Clairo)',
    artist: 'Wallows',
    streams: 5682000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27384feca0133d9a8e6539a8325'
  },
  {
    name: '7 rings',
    artist: 'Ariana Grande',
    streams: 5778000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27356ac7b86e090f307e218e9c8'
  },
  {
    name: 'If the World Was Ending - feat. Julia Michaels',
    artist: 'JP Saxe',
    streams: 5464000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273dedbec8cca43642f06533476'
  },
  {
    name: 'Perfect',
    artist: 'Ed Sheeran',
    streams: 5599000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96'
  },
  {
    name: 'You Got It',
    artist: 'Vedo',
    streams: 5774000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273873c4523604fff8ef176124c'
  },
  {
    name: 'cardigan',
    artist: 'Taylor Swift',
    streams: 5613000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27395f754318336a07e85ec59bc'
  },
  {
    name: 'THE SCOTTS',
    artist: 'THE SCOTTS',
    streams: 5716000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27311d6f8c713ef93a9bb64ddfe'
  },
  {
    name: 'After Party',
    artist: 'Don Toliver',
    streams: 5629000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27345190a074bef3e8ce868b60c'
  },
  {
    name: 'Martin & Gina',
    artist: 'Polo G',
    streams: 5832000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273339f780dfdbc38558ea0761d'
  },
  {
    name: "Don't Start Now",
    artist: 'Dua Lipa',
    streams: 5794000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2738583df1a14bea9175f9ac520'
  },
  {
    name: 'Wolves (feat. Post Malone)',
    artist: 'Big Sean',
    streams: 5724000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273b1b3fdd23be4c158d4d2c32f'
  },
  {
    name: 'Dior',
    artist: 'Pop Smoke',
    streams: 5547999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2738fe5d04b06aff90f9fe796f5'
  },
  {
    name: 'Got It On Me',
    artist: 'Pop Smoke',
    streams: 5688000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27377ada0863603903f57b34369'
  },
  {
    name: 'Clean White Noise - Loopable with no fade',
    artist: 'Erik Eriksson',
    streams: 5000000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273a9c080fdc40e78a4b81e0520'
  },
  {
    name: 'Tap In',
    artist: 'Saweetie',
    streams: 5954000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273a2e401d7c502d86ae39e5278'
  },
  {
    name: 'Lose Control',
    artist: 'MEDUZA',
    streams: 5598000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273d43c59e52d6a8032a4e27fc4'
  },
  {
    name: 'Hate The Other Side (with Marshmello & The Kid Laroi)',
    artist: 'Juice WRLD',
    streams: 5701000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2733e0698e4ae5ffb82a005aeeb'
  },
  {
    name: 'Runnin',
    artist: '21 Savage',
    streams: 5819000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ed3a4b6dd53a2055bd2053b9'
  },
  {
    name: "Say You Won't Let Go",
    artist: 'James Arthur',
    streams: 5358000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27320beb61f61fcbeb33b10a9ab'
  },
  {
    name: 'DOLLAZ ON MY HEAD (feat. Young Thug)',
    artist: 'Gunna',
    streams: 5825000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273d7547a7624116ac5f8a51fd2'
  },
  {
    name: 'Mr. Right Now (feat. Drake)',
    artist: '21 Savage',
    streams: 5647000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ed3a4b6dd53a2055bd2053b9'
  },
  {
    name: 'Star Shopping',
    artist: 'Lil Peep',
    streams: 5585000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273e813c020ab6245eae154ec16'
  },
  {
    name: 'WHATS POPPIN',
    artist: 'Jack Harlow',
    streams: 5923000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27305a448540b069450ccfba889'
  },
  {
    name: '21',
    artist: 'Polo G',
    streams: 5782999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273339f780dfdbc38558ea0761d'
  },
  {
    name: 'Blueberry Faygo',
    artist: 'Lil Mosey',
    streams: 5774000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ab3f9995f4f3a83e0591c940'
  },
  {
    name: 'hot girl bummer',
    artist: 'blackbear',
    streams: 5782000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2730b7c6d46885f7434c99e6d8b'
  },
  {
    name: "my ex's best friend (with blackbear)",
    artist: 'Machine Gun Kelly',
    streams: 5731000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273d4d4929a3a86fe2f9fadbd42'
  },
  {
    name: "when the party's over",
    artist: 'Billie Eilish',
    streams: 5367000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce'
  },
  {
    name: 'All of Me',
    artist: 'John Legend',
    streams: 5422000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27394c9217a398f5174757c0c78'
  },
  {
    name: 'Hello (feat. A Boogie Wit da Hoodie)',
    artist: 'Pop Smoke',
    streams: 5905000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27346e1307c35579c3483ea7b03'
  },
  {
    name: '10,000 Hours (with Justin Bieber)',
    artist: 'Dan + Shay',
    streams: 5654000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27386953b1cbaa29e477db0b479'
  },
  {
    name: 'feel something',
    artist: 'Bea Miller',
    streams: 5740000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27337b16e42d8ac8413bb2dc6ed'
  },
  {
    name: 'Shape of You',
    artist: 'Ed Sheeran',
    streams: 5825000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96'
  },
  {
    name: 'Señorita',
    artist: 'Shawn Mendes',
    streams: 5759000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273e6095c382c2853667c1623eb'
  },
  {
    name: 'Life Is Good (feat. Drake)',
    artist: 'Future',
    streams: 5675999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2738a01c7b77a34378a62f46402'
  },
  {
    name: 'exile (feat. Bon Iver)',
    artist: 'Taylor Swift',
    streams: 5298000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27395f754318336a07e85ec59bc'
  },
  {
    name: 'Chicago Freestyle (feat. Giveon)',
    artist: 'Drake',
    streams: 5735000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273bba7cfaf7c59ff0898acba1f'
  },
  {
    name: 'Dancing With A Stranger (with Normani)',
    artist: 'Sam Smith',
    streams: 5741000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2733b52eca47232bedfbb5e9443'
  },
  {
    name: "It's You",
    artist: 'Ali Gatie',
    streams: 5732000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27350a744f0ef5c3e260d9de720'
  },
  {
    name: 'OUT WEST (feat. Young Thug)',
    artist: 'JACKBOYS',
    streams: 5802000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273dfc2f59568272de50a257f2f'
  },
  {
    name: 'Maniac',
    artist: 'Conan Gray',
    streams: 5628000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27388e3cda6d29b2552d4d6bc43'
  },
  {
    name: 'Pumped Up Kicks',
    artist: 'Foster The People',
    streams: 5733000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273c03f8ef4160b2a3b72dd407d'
  },
  {
    name: 'thank u, next',
    artist: 'Ariana Grande',
    streams: 5717000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27356ac7b86e090f307e218e9c8'
  },
  {
    name: 'Everybody Dies In Their Nightmares',
    artist: 'XXXTENTACION',
    streams: 5734000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273203c89bd4391468eea4cc3f5'
  },
  {
    name: 'Conversations',
    artist: 'Juice WRLD',
    streams: 5747000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2733e0698e4ae5ffb82a005aeeb'
  },
  {
    name: 'Righteous',
    artist: 'Juice WRLD',
    streams: 5706000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2733e0698e4ae5ffb82a005aeeb'
  },
  {
    name: 'We Paid (feat. 42 Dugg)',
    artist: 'Lil Baby',
    streams: 5926000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27376a4577dd654bf457a4ad1f8'
  },
  {
    name: 'The Scientist',
    artist: 'Coldplay',
    streams: 5560000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ad6f442ecac8735b9285a923'
  },
  {
    name: 'Thunder',
    artist: 'Imagine Dragons',
    streams: 5605000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a'
  },
  {
    name: 'Bruises',
    artist: 'Lewis Capaldi',
    streams: 5736000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273fc2101e6889d6ce9025f85f2'
  },
  {
    name: 'Savage Remix (feat. Beyoncé)',
    artist: 'Megan Thee Stallion',
    streams: 5822000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2739e1cf949785e00f925be7713'
  },
  {
    name: 'July',
    artist: 'Noah Cyrus',
    streams: 5708000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2737f66b73bd6e86f4c8d2a7692'
  },
  {
    name: 'Closer',
    artist: 'The Chainsmokers',
    streams: 5748000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273495ce6da9aeb159e94eaa453'
  },
  {
    name: 'No Guidance (feat. Drake)',
    artist: 'Chris Brown',
    streams: 5698000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2739e588b0c2afe8178b2b76231'
  },
  {
    name: "Ballin' (with Roddy Ricch)",
    artist: 'Mustard',
    streams: 5809000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27393b1e96fad758869d0974162'
  },
  {
    name: 'Jangueo',
    artist: 'Alex Rose',
    streams: 5861000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273462c6ba1c246cc8aeb62086c'
  },
  {
    name: 'Bandit (with YoungBoy Never Broke Again)',
    artist: 'Juice WRLD',
    streams: 5474000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2735b4bee4c0dfe7f1ec4b2cc6d'
  },
  {
    name: "Pa' Olvidarme De Ella",
    artist: 'Piso 21',
    streams: 5728000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27326dfdcfae1c961172197a362'
  },
  {
    name: 'Boy With Luv (feat. Halsey)',
    artist: 'BTS',
    streams: 5645000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27329d00196831bec20ebbff5c7'
  },
  {
    name: 'Mariposa',
    artist: 'Peach Tree Rascals',
    streams: 5675999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273180bec60ad04205a903e4441'
  },
  {
    name: 'Photograph',
    artist: 'Ed Sheeran',
    streams: 5614000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27313b3e37318a0c247b550bccd'
  },
  {
    name: '24 (feat. Lil Baby)',
    artist: 'Money Man',
    streams: 5868000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273857c40ebfcf12f3377e1daf1'
  },
  {
    name: 'Thinking out Loud',
    artist: 'Ed Sheeran',
    streams: 5780999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27313b3e37318a0c247b550bccd'
  },
  {
    name: "Hips Don't Lie (feat. Wyclef Jean)",
    artist: 'Shakira',
    streams: 5778000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27327ddd747545c0d0cfe7595fa'
  },
  {
    name: 'Starboy',
    artist: 'The Weeknd',
    streams: 5679000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452'
  },
  {
    name: 'Flex (feat. Juice WRLD)',
    artist: 'Polo G',
    streams: 5752000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273339f780dfdbc38558ea0761d'
  },
  {
    name: 'Every Breath You Take',
    artist: 'The Police',
    streams: 5820000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273c8e97cafeb2acb85b21a777e'
  },
  {
    name: 'Sofia',
    artist: 'Clairo',
    streams: 5744000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27333ccb60f9b2785ef691b2fbc'
  },
  {
    name: 'Rags2Riches 2 (feat. Lil Baby)',
    artist: 'Rod Wave',
    streams: 5874000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27322ff91d8f39712b1c63bb0d4'
  },
  {
    name: 'BOP',
    artist: 'DaBaby',
    streams: 5769000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273f2b94b2fda4f08836d6371ba'
  },
  {
    name: 'RITMO (Bad Boys For Life)',
    artist: 'Black Eyed Peas',
    streams: 5721000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2739e57eff8f10bfc9a8dbfe337'
  },
  {
    name: 'Fuck Love (feat. Trippie Redd)',
    artist: 'XXXTENTACION',
    streams: 5797000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273203c89bd4391468eea4cc3f5'
  },
  {
    name: 'the 1',
    artist: 'Taylor Swift',
    streams: 5777000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27395f754318336a07e85ec59bc'
  },
  {
    name: 'Do I Wanna Know?',
    artist: 'Arctic Monkeys',
    streams: 5547999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163'
  },
  {
    name: 'Take on Me',
    artist: 'a-ha',
    streams: 5573000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273e8dd4db47e7177c63b0b7d53'
  },
  {
    name: 'Watermelon Sugar',
    artist: 'Harry Styles',
    streams: 5547999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2737cf2b9825bb43083d123ac22'
  },
  {
    name: 'XO Tour Llif3',
    artist: 'Lil Uzi Vert',
    streams: 5732000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27341b41e6f7924e530a9b00f9c'
  },
  {
    name: 'Old Town Road - Remix',
    artist: 'Lil Nas X',
    streams: 5878000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273c0e7bf5cdd630f314f20586a'
  },
  {
    name: 'Daylight',
    artist: 'Joji',
    streams: 5528000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2730e991b59cee17246a5e604d0'
  },
  {
    name: 'Sigues Con El',
    artist: 'Dímelo Flow',
    streams: 5883000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273cb757053249cfc9b5182d670'
  },
  {
    name: "I Don't Care (with Justin Bieber)",
    artist: 'Ed Sheeran',
    streams: 5797999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27357cc434093fd4b6af7500fd8'
  },
  {
    name: 'Wow.',
    artist: 'Post Malone',
    streams: 5829000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2739478c87599550dd73bfa7e02'
  },
  {
    name: 'Dream Girl - Remix',
    artist: 'Ir Sais',
    streams: 5767000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273297245e15c7f7f8f779f870c'
  },
  {
    name: 'Hola - Remix',
    artist: 'Dalex',
    streams: 5654000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2738f0f79f8cb6c758356ec53b6'
  },
  {
    name: 'Higher Love',
    artist: 'Kygo',
    streams: 5693000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2737c8977a0ad3a3a0627be9ed7'
  },
  {
    name: 'This City',
    artist: 'Sam Fischer',
    streams: 5602000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27370e6c775adc0f71e6bef0a9b'
  },
  {
    name: 'How Do You Sleep?',
    artist: 'Sam Smith',
    streams: 5477000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27376bc1c851462191faec76bf8'
  },
  {
    name: 'Something Just Like This',
    artist: 'The Chainsmokers',
    streams: 5617000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2730c13d3d5a503c84fcc60ae94'
  },
  {
    name: 'LA CANCIÓN',
    artist: 'J Balvin',
    streams: 5754000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2734891d9b25d8919448388f3bb'
  },
  {
    name: 'Ransom',
    artist: 'Lil Tecca',
    streams: 5745000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273bd69bbde4aeee723d6d08058'
  },
  {
    name: 'Sucker',
    artist: 'Jonas Brothers',
    streams: 5842000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273de1a3a5eaa0c75bb18e7b597'
  },
  {
    name: 'Beautiful People (feat. Khalid)',
    artist: 'Ed Sheeran',
    streams: 5640000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273358f874d5d31e76a8fe3f6d0'
  },
  {
    name: 'Yellow',
    artist: 'Coldplay',
    streams: 5429000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27345e735e3fc6f0c157d484982'
  },
  {
    name: "Life's A Mess (feat. Halsey)",
    artist: 'Juice WRLD',
    streams: 5630000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2733e0698e4ae5ffb82a005aeeb'
  },
  {
    name: 'Silence',
    artist: 'Marshmello',
    streams: 5520000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273f33ba583059dc2f7d08bf2b8'
  },
  {
    name: 'Without Me',
    artist: 'Eminem',
    streams: 5908000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2736ca5c90113b30c3c43ffb8f4'
  },
  {
    name: 'forget me too (feat. Halsey)',
    artist: 'Machine Gun Kelly',
    streams: 5654000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273d4d4929a3a86fe2f9fadbd42'
  },
  {
    name: 'Yeah! (feat. Lil Jon & Ludacris)',
    artist: 'Usher',
    streams: 5894000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273365b3fb800c19f7ff72602da'
  },
  {
    name: 'I Fall Apart',
    artist: 'Post Malone',
    streams: 5556000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27355404f712deb84d0650a4b41'
  },
  {
    name: 'Stay With Me',
    artist: 'Sam Smith',
    streams: 5418000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273b11bdc91cb9ac6b14f5c1dae'
  },
  {
    name: "I'm Yours",
    artist: 'Jason Mraz',
    streams: 5686000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273160074c4d30216702688437c'
  },
  {
    name: '20 Min',
    artist: 'Lil Uzi Vert',
    streams: 5773000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2730d5a84e4e47399d2726c330c'
  },
  {
    name: 'BLIND (feat. Young Thug)',
    artist: 'DaBaby',
    streams: 5709000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273e818d05b79be19f4d49f1ebf'
  },
  {
    name: 'Blastoff (feat. Juice Wrld & Trippie Redd)',
    artist: 'Internet Money',
    streams: 5760999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2738de76cfb913ec21e57ed0dee'
  },
  {
    name: 'Glock In My Lap',
    artist: '21 Savage',
    streams: 5847000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ed3a4b6dd53a2055bd2053b9'
  },
  {
    name: 'GO (feat. Juice WRLD)',
    artist: 'The Kid LAROI',
    streams: 5487000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273891f0552bed344dc2bfe322f'
  },
  {
    name: "I'm Not The Only One",
    artist: 'Sam Smith',
    streams: 5677000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273b11bdc91cb9ac6b14f5c1dae'
  },
  {
    name: 'Girls in the Hood',
    artist: 'Megan Thee Stallion',
    streams: 5821000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ecc94f4366ce3ba60da0b400'
  },
  {
    name: 'HUMBLE.',
    artist: 'Kendrick Lamar',
    streams: 5908000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699'
  },
  {
    name: 'Let You Down',
    artist: 'NF',
    streams: 5662000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273cd733919ee57d0cc466e152f'
  },
  {
    name: 'Sunflower - Spider-Man: Into the Spider-Verse',
    artist: 'Post Malone',
    streams: 5755000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2739478c87599550dd73bfa7e02'
  },
  {
    name: 'Lalala',
    artist: 'Y2K',
    streams: 5843000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2738a6ccb507dd6a66f7f6e2440'
  },
  {
    name: 'Make You Mine',
    artist: 'PUBLIC',
    streams: 5606000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2730d0621554b1c6c9dbf3556be'
  },
  {
    name: 'Look At Me!',
    artist: 'XXXTENTACION',
    streams: 5763000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27371af28545729f60b3eca66f7'
  },
  {
    name: 'Rags2Riches (feat. ATR Son Son)',
    artist: 'Rod Wave',
    streams: 5904000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273f2236d03f572845515ac658f'
  },
  {
    name: 'Hold On',
    artist: 'Chord Overstreet',
    streams: 5618000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273c60473419a4ce96822541181'
  },
  {
    name: 'ocean eyes',
    artist: 'Billie Eilish',
    streams: 5511000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273a9f6c04ba168640b48aa5795'
  },
  {
    name: 'Congratulations',
    artist: 'Post Malone',
    streams: 5630000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27355404f712deb84d0650a4b41'
  },
  {
    name: 'Goodbyes (feat. Young Thug)',
    artist: 'Post Malone',
    streams: 5547999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2739478c87599550dd73bfa7e02'
  },
  {
    name: 'El Efecto - Remix',
    artist: 'Rauw Alejandro',
    streams: 5770999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2739ebb3103889bd70d30d65bdc'
  },
  {
    name: 'Callaita',
    artist: 'Bad Bunny',
    streams: 5610000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2734aef420e62863ebf622c27f5'
  },
  {
    name: 'Billie Jean',
    artist: 'Michael Jackson',
    streams: 5920000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be'
  },
  {
    name: 'Hold Me While You Wait',
    artist: 'Lewis Capaldi',
    streams: 5688000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273fc2101e6889d6ce9025f85f2'
  },
  {
    name: 'Lights Up',
    artist: 'Harry Styles',
    streams: 5575000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27377fdcfda6535601aff081b6a'
  },
  {
    name: 'Surrender',
    artist: 'Natalie Taylor',
    streams: 5390000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273688ac69834f3a021155789c8'
  },
  {
    name: "Summer Of '69",
    artist: 'Bryan Adams',
    streams: 5508000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273cf1fee2a55e98e22bf358512'
  },
  {
    name: 'Dusk Till Dawn - Radio Edit',
    artist: 'ZAYN',
    streams: 5258000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27323852b7ef0ecfe29d38d97ee'
  },
  {
    name: 'Happier',
    artist: 'Ed Sheeran',
    streams: 5522000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96'
  },
  {
    name: 'Piece Of Your Heart',
    artist: 'MEDUZA',
    streams: 5677000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ead13021d0f2957958081f28'
  },
  {
    name: 'Story of My Life',
    artist: 'One Direction',
    streams: 5600000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2732f76b797c382bedcafdf45e1'
  },
  {
    name: 'What Makes You Beautiful',
    artist: 'One Direction',
    streams: 5726000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2734a5584795dc73860653a9a3e'
  },
  {
    name: 'El Efecto',
    artist: 'Rauw Alejandro',
    streams: 5849000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273976be14b5e8f1e7b5d8e340c'
  },
  {
    name: "Can't Hold Us - feat. Ray Dalton",
    artist: 'Macklemore & Ryan Lewis',
    streams: 5640999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27398a02fef3a8b1d80a0f164ec'
  },
  {
    name: 'Money In The Grave (Drake ft. Rick Ross)',
    artist: 'Drake',
    streams: 5831000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2733f3b653b0a7b9e889a712c3d'
  },
  {
    name: 'Roses - Imanbek Remix',
    artist: 'SAINt JHN',
    streams: 5785000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27369450869a3ffaf23bc3898bf'
  },
  {
    name: 'Sign of the Times',
    artist: 'Harry Styles',
    streams: 5516000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2736c619c39c853f8b1d67b7859'
  },
  {
    name: 'Like That (feat. Gucci Mane)',
    artist: 'Doja Cat',
    streams: 5879000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27382b243023b937fd579a35533'
  },
  {
    name: 'All I Want',
    artist: 'Kodaline',
    streams: 5209000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2733e42854096da9a3b1ca901c9'
  },
  {
    name: 'i love you',
    artist: 'Billie Eilish',
    streams: 5421000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce'
  },
  {
    name: 'When I Was Your Man',
    artist: 'Bruno Mars',
    streams: 5612000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273926f43e7cce571e62720fd46'
  },
  {
    name: 'Pop Out (feat. Lil Tjay)',
    artist: 'Polo G',
    streams: 5772000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ae8b07ecdcf7aadefe00264f'
  },
  {
    name: 'MIDDLE CHILD',
    artist: 'J. Cole',
    streams: 5837000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2737f37a4001ae7d8be430bd91b'
  },
  {
    name: 'High Fashion (feat. Mustard)',
    artist: 'Roddy Ricch',
    streams: 5831000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273600adbc750285ea1a8da249f'
  },
  {
    name: 'Feel Good Inc.',
    artist: 'Gorillaz',
    streams: 5818000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27319d85a472f328a6ed9b704cf'
  },
  {
    name: 'Save That Shit',
    artist: 'Lil Peep',
    streams: 5534000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2734958dc3c8e7aa7db22f55af3'
  },
  {
    name: 'Dancin (feat. Luvli) - Krono Remix',
    artist: 'Aaron Smith',
    streams: 5720000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273f7a3a5656060030a0d24855c'
  },
  {
    name: 'Fix You',
    artist: 'Coldplay',
    streams: 5209000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2735f86467ff3b8221f3c9039b4'
  },
  {
    name: 'Hate Me (with Juice WRLD)',
    artist: 'Ellie Goulding',
    streams: 5657000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273dc854e032e8588d5e75eebc6'
  },
  {
    name: 'The Nights',
    artist: 'Avicii',
    streams: 5527000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2730ae4f4d42e4a09f3a29f64ad'
  },
  {
    name: 'Outside (feat. Ellie Goulding)',
    artist: 'Calvin Harris',
    streams: 5645999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273063c048e9ef6bd021b744756'
  },
  {
    name: 'Rich Nigga Shit (feat. Young Thug)',
    artist: '21 Savage',
    streams: 5825000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ed3a4b6dd53a2055bd2053b9'
  },
  {
    name: "There's Nothing Holdin' Me Back",
    artist: 'Shawn Mendes',
    streams: 5866000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521'
  },
  {
    name: 'Losing My Religion',
    artist: 'R.E.M.',
    streams: 5665999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273e2dd4e821bcc3f70dc0c8ffd'
  },
  {
    name: 'I.F.L.Y.',
    artist: 'Bazzi',
    streams: 5812000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2733a376bd9b9b1f4b2686807db'
  },
  {
    name: 'Moral of the Story',
    artist: 'Ashe',
    streams: 5572000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273aea0d98794e91056c608e069'
  },
  {
    name: 'Under the Bridge',
    artist: 'Red Hot Chili Peppers',
    streams: 5558999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273153d79816d853f2694b2cc70'
  },
  {
    name: 'Call You Mine',
    artist: 'The Chainsmokers',
    streams: 5585000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2735e90ff76fd49a23f7333de76'
  },
  {
    name: 'Californication',
    artist: 'Red Hot Chili Peppers',
    streams: 5592000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27394d08ab63e57b0cae74e8595'
  },
  {
    name: 'idontwannabeyouanymore',
    artist: 'Billie Eilish',
    streams: 5483000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273a9f6c04ba168640b48aa5795'
  },
  {
    name: 'Happiest Year',
    artist: 'Jaymes Young',
    streams: 5501000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2730e423d98a00610e237fe40ab'
  },
  {
    name: 'My Oh My (feat. DaBaby)',
    artist: 'Camila Cabello',
    streams: 5724000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2735f53c0dbe5190a0af0fa28f3'
  },
  {
    name: 'Legends Never Die',
    artist: 'League of Legends',
    streams: 5498000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273cb5ec46d6f1d2cf8d36d3663'
  },
  {
    name: 'Love The Way You Lie',
    artist: 'Eminem',
    streams: 5749000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273c08d5fa5c0f1a834acef5100'
  },
  {
    name: 'Hit Different',
    artist: 'SZA',
    streams: 5679000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273a135dd969dce9f38ed32ef98'
  },
  {
    name: 'Treat You Better',
    artist: 'Shawn Mendes',
    streams: 5444000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2731376b4b16f4bfcba02dc571b'
  },
  {
    name: 'Redbone',
    artist: 'Childish Gambino',
    streams: 5743000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273b08b996d08001270adc8b555'
  },
  {
    name: 'How to Save a Life',
    artist: 'The Fray',
    streams: 5640000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27359b8b957f164ce660919f1f4'
  },
  {
    name: 'Fantasias',
    artist: 'Rauw Alejandro',
    streams: 5879000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ca6183e9d0bfb66f996eefce'
  },
  {
    name: 'Train Wreck',
    artist: 'James Arthur',
    streams: 5311000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27320beb61f61fcbeb33b10a9ab'
  },
  {
    name: 'Ric Flair Drip (& Metro Boomin)',
    artist: 'Offset',
    streams: 5880000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2730f206fe737d46f2f2d826d83'
  },
  {
    name: 'South of the Border (feat. Camila Cabello & Cardi B)',
    artist: 'Ed Sheeran',
    streams: 5857000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27373304ce0653c7758dd94b259'
  },
  {
    name: 'SUGAR',
    artist: 'BROCKHAMPTON',
    streams: 5453000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27346f07fa4f28bf824840ddacb'
  },
  {
    name: 'Chanel',
    artist: 'Frank Ocean',
    streams: 5775999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273a0b780c23fc3c19bd412b234'
  },
  {
    name: '7 Summers',
    artist: 'Morgan Wallen',
    streams: 5457000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273b00fc73517a7d56a85601e4a'
  },
  {
    name: 'EARFQUAKE',
    artist: 'Tyler, The Creator',
    streams: 5553999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57'
  },
  {
    name: 'The Bigger Picture',
    artist: 'Lil Baby',
    streams: 5590000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273c0ee50f512295c64a2c8af3d'
  },
  {
    name: 'you were good to me',
    artist: 'Jeremy Zucker',
    streams: 5561000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273d841ad4d4aa791514d7e9758'
  },
  {
    name: 'F.N',
    artist: 'Lil Tjay',
    streams: 5567000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273d2fe0b3a495888636cbed083'
  },
  {
    name: 'Young Dumb & Broke',
    artist: 'Khalid',
    streams: 5797999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273988ede5e1276e758b5f9e577'
  },
  {
    name: '夜に駆ける',
    artist: 'YOASOBI',
    streams: 5670000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7'
  },
  {
    name: "I Think I'm OKAY (with YUNGBLUD & Travis Barker)",
    artist: 'Machine Gun Kelly',
    streams: 5628000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273cfc4b1939aba562fc97159c5'
  },
  {
    name: 'Can I Call You Tonight?',
    artist: 'Dayglow',
    streams: 5640999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ccd63af052f7e438c05f6c94'
  },
  {
    name: 'Locked out of Heaven',
    artist: 'Bruno Mars',
    streams: 5726000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273926f43e7cce571e62720fd46'
  },
  {
    name: 'China',
    artist: 'Anuel AA',
    streams: 5785999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2735fa6dc9fc261344044c301a9'
  },
  {
    name: 'CITY OF ANGELS',
    artist: '24kGoldn',
    streams: 5686000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273fe9008022f3f54d81dcc8030'
  },
  {
    name: 'Sweet Dreams (Are Made of This) - Remastered',
    artist: 'Eurythmics',
    streams: 5692000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273b3994c94dfb241923664bb4d'
  },
  {
    name: "Gangsta's Paradise",
    artist: 'Coolio',
    streams: 5647000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2737632fe25cd368dc205927f0c'
  },
  {
    name: 'One Dance',
    artist: 'Drake',
    streams: 5792000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2739416ed64daf84936d89e671c'
  },
  {
    name: 'Just Give Me a Reason (feat. Nate Ruess)',
    artist: 'P!nk',
    streams: 5778000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2739d0f0d226987b449808e7b6f'
  },
  {
    name: 'Alone, Pt. II',
    artist: 'Alan Walker',
    streams: 5670000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273153261ff7373a171c24ab9f9'
  },
  {
    name: 'Con Calma',
    artist: 'Daddy Yankee',
    streams: 5737000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273896ffcd42561c44fea2bae7b'
  },
  {
    name: 'Heathens',
    artist: 'Twenty One Pilots',
    streams: 5732000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2732ca3ba8f334ca5a5f0312efb'
  },
  {
    name: 'Someone To You',
    artist: 'BANNERS',
    streams: 5468000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273d8fac444b26ac8c2e9ff1a48'
  },
  {
    name: 'Suicidal',
    artist: 'YNW Melly',
    streams: 5735000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2730f47d89f02cd58a168b8193e'
  },
  {
    name: 'Slidin',
    artist: '21 Savage',
    streams: 5774000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ed3a4b6dd53a2055bd2053b9'
  },
  {
    name: 'Heartless (feat. Morgan Wallen)',
    artist: 'Diplo',
    streams: 5765000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273d79c10cdf4a58309a37d195a'
  },
  {
    name: 'PTSD',
    artist: 'G Herbo',
    streams: 5883000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273569f6e71b5644c6a48927f3f'
  },
  {
    name: 'Blood On My Jeans',
    artist: 'Juice WRLD',
    streams: 5868000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2733e0698e4ae5ffb82a005aeeb'
  },
  {
    name: 'Excitement',
    artist: 'Trippie Redd',
    streams: 5474000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273de32a6662a7db272328f4761'
  },
  {
    name: 'Graduation (with Juice WRLD)',
    artist: 'benny blanco',
    streams: 5731000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2739e714501730245ec76623000'
  },
  {
    name: 'Psycho',
    artist: 'Red Velvet',
    streams: 5664000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273df5022bdf1ac4bf52135c4be'
  },
  {
    name: '11 PM',
    artist: 'Maluma',
    streams: 5777000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273073bc2070f7fa02b2a6bda64'
  },
  {
    name: 'New Rules',
    artist: 'Dua Lipa',
    streams: 5762000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2736b915e407b70e121e06fe979'
  },
  {
    name: 'You Need To Calm Down',
    artist: 'Taylor Swift',
    streams: 5770999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647'
  },
  {
    name: 'Wolves',
    artist: 'Selena Gomez',
    streams: 5724000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273307910d4242c0d6b1fedf955'
  },
  {
    name: 'IDGAF',
    artist: 'Dua Lipa',
    streams: 5836000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2736b915e407b70e121e06fe979'
  },
  {
    name: 'A Thousand Years',
    artist: 'Christina Perri',
    streams: 5421000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2733dea4a2ccd58ad1f8e4dbb03'
  },
  {
    name: 'Many Men',
    artist: '21 Savage',
    streams: 5635000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ed3a4b6dd53a2055bd2053b9'
  },
  {
    name: 'November Rain',
    artist: "Guns N' Roses",
    streams: 5294000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273e44963b8bb127552ac761873'
  },
  {
    name: 'Paradise',
    artist: 'Coldplay',
    streams: 5449000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273c471949318c6c7cfef0111fd'
  },
  {
    name: 'emotions',
    artist: 'iann dior',
    streams: 5630000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2739fc7b0fa3ee822614a14dd2e'
  },
  {
    name: 'Whatever It Takes',
    artist: 'Imagine Dragons',
    streams: 5672000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a'
  },
  {
    name: 'Adicto (with Anuel AA & Ozuna)',
    artist: 'Tainy',
    streams: 5734000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27354e5aec17a447066f52874fb'
  },
  {
    name: 'Loco Contigo (feat. J. Balvin & Tyga)',
    artist: 'DJ Snake',
    streams: 5694000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273caf82abb2338880577e472be'
  },
  {
    name: 'bury a friend',
    artist: 'Billie Eilish',
    streams: 5905000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce'
  },
  {
    name: 'Golden',
    artist: 'Harry Styles',
    streams: 5448000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27377fdcfda6535601aff081b6a'
  },
  {
    name: 'Takeaway',
    artist: 'The Chainsmokers',
    streams: 5528000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2735e90ff76fd49a23f7333de76'
  },
  {
    name: 'witchblades',
    artist: 'Lil Peep',
    streams: 5642000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273c73bd9b0e34b067d7d3bd7b9'
  },
  {
    name: 'you should see me in a crown',
    artist: 'Billie Eilish',
    streams: 5677999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce'
  },
  {
    name: 'Empty',
    artist: 'Juice WRLD',
    streams: 5745000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273af149eb4002f65f83afc63c4'
  },
  {
    name: 'Post Malone (feat. RANI)',
    artist: 'Sam Feldt',
    streams: 5590000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27354de16ac6dc5346bfc1187f5'
  },
  {
    name: 'ME! (feat. Brendon Urie of Panic! At The Disco)',
    artist: 'Taylor Swift',
    streams: 5610000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647'
  },
  {
    name: "If I Can't Have You",
    artist: 'Shawn Mendes',
    streams: 5692000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273625acd26e0e455312667565f'
  },
  {
    name: 'Unforgettable',
    artist: 'French Montana',
    streams: 5726000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2738a31195a371b2233456f6c07'
  },
  {
    name: 'The Take (feat. Chris Brown)',
    artist: 'Tory Lanez',
    streams: 5464000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2733f5d63f12fa8e44a86936e07'
  },
  {
    name: 'Bad Romance',
    artist: 'Lady Gaga',
    streams: 5696000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2735c9890c0456a3719eeecd8aa'
  },
  {
    name: 'Summer',
    artist: 'Calvin Harris',
    streams: 5596000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273063c048e9ef6bd021b744756'
  },
  {
    name: 'Stronger',
    artist: 'Kanye West',
    streams: 5617000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2739bbd79106e510d13a9a5ec33'
  },
  {
    name: 'Devil Eyes',
    artist: 'Hippie Sabotage',
    streams: 5391000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273ecdad1ee6d530eb965d7c51e'
  },
  {
    name: 'TiK ToK',
    artist: 'Kesha',
    streams: 5755000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2737a6339d6ddfd579f77559b3c'
  },
  {
    name: 'Last Resort',
    artist: 'Papa Roach',
    streams: 5589000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273985bf5ede2fe4a048ee85f28'
  },
  {
    name: 'Best Friend',
    artist: 'Rex Orange County',
    streams: 5575000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27333a6b45fa8354efe37633964'
  },
  {
    name: 'Umbrella',
    artist: 'Rihanna',
    streams: 5583000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273f9f27162ab1ed45b8d7a7e98'
  },
  {
    name: "i hate u, i love u (feat. olivia o'brien)",
    artist: 'gnash',
    streams: 5492000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27308862f843ea27f44f8e8cbd8'
  },
  {
    name: 'Happy - From "Despicable Me 2"',
    artist: 'Pharrell Williams',
    streams: 5647000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273e8107e6d9214baa81bb79bba'
  },
  {
    name: 'The Real Slim Shady',
    artist: 'Eminem',
    streams: 5949000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42'
  },
  {
    name: 'Viva La Vida',
    artist: 'Coldplay',
    streams: 5485000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2733d9d867b880ebf840fceec69'
  },
  {
    name: 'You Give Love A Bad Name',
    artist: 'Bon Jovi',
    streams: 5541000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2731336b31b6a1799f0de5807ac'
  },
  {
    name: 'Wake Me Up',
    artist: 'Avicii',
    streams: 5532000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273e14f11f796cef9f9a82691a7'
  },
  {
    name: 'Low (feat. T-Pain)',
    artist: 'Flo Rida',
    streams: 5918000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273f9bd7a6c772ac496015be3f8'
  },
  {
    name: 'She Will Be Loved - Radio Mix',
    artist: 'Maroon 5',
    streams: 5650999,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27392f2d790c6a97b195f66d51e'
  },
  {
    name: 'Let Me Love You',
    artist: 'DJ Snake',
    streams: 5649000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273212d776c31027c511f0ee3bc'
  },
  {
    name: "Can't Stop",
    artist: 'Red Hot Chili Peppers',
    streams: 5618000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273de1af2785a83cc660155a0c4'
  },
  {
    name: 'Sugar',
    artist: 'Maroon 5',
    streams: 5748000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273442b53773d50e1b5369bb16c'
  },
  {
    name: 'Location',
    artist: 'Khalid',
    streams: 5736000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273988ede5e1276e758b5f9e577'
  },
  {
    name: 'You Shook Me All Night Long',
    artist: 'AC/DC',
    streams: 5532000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2730b51f8d91f3a21e8426361ae'
  },
  {
    name: 'Just the Way You Are',
    artist: 'Bruno Mars',
    streams: 5637000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27378c6c624a95d1bd02ba1fa02'
  },
  {
    name: "That's What I Like",
    artist: 'Bruno Mars',
    streams: 5853000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273232711f7d66a1e19e89e28c5'
  },
  {
    name: 'Sex on Fire',
    artist: 'Kings of Leon',
    streams: 5542000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2732519d01c0cca06f134eeadd8'
  },
  {
    name: 'Love On The Brain',
    artist: 'Rihanna',
    streams: 5509000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b27333c6b920eabcf4c00d7a1093'
  },
  {
    name: 'Zombie',
    artist: 'The Cranberries',
    streams: 5307000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273e2213d84fabb15100c425198'
  },
  {
    name: 'Buttercup',
    artist: 'Jack Stauber',
    streams: 5705000,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b273affdacd1466cdde505ab97ee'
  }]