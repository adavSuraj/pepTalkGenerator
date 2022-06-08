const pep1 = [
  'Champ,',
  'Fact:',
  'Everybody says',
  'Dang...',
  'Check it:',
  'Just saying...',
  'Superstar,',
  'Tiger,',
  'Self,',
  'Know this:',
  'News alert:',
  'Girl,',
  'Ace,',
  'Excuse me but',
  'Experts agree:',
  'In my opinion,',
  'Hear ye, hear ye:',
  'Okay, listen up:',
];

const pep2 = [
  'the mere idea of you',
  'your soul',
  'your hair today',
  'everything you do',
  'your personal style',
  'every thought of you',
  'that sparkle in your eye',
  'what you got going on',
  'the essential you',
  "your life's journey",
  'that saucy personality',
  'your DNA',
  'that brain of yours',
  'your choice of attire',
  'the way you roll',
  'whatever your secret is',
  "all of y'all",
];

const pep3 = [
  'has serious game,',
  'rains magic,',
  'deserved the Nobel Prize,',
  'raises the roof,',
  'breeds miracles,',
  'is paying off big time,',
  'shows mad skills,',
  'just shimmers,',
  'is a national treasure,',
  'gets the party hopping,',
  'is the next big thing,',
  'roars like a lion,',
  'is a rainbow factory,',
  'is made of diamonds,',
  'makes birds sing,',
  'should be taught in school,',
  'makes my world go round,',
  'is 100% legit,',
];

const pep4 = [
  '24/7.',
  'can I get an amen?',
  "and that's a fact.",
  'so treat yourself.',
  'you feel me?',
  "that's just science.",
  'would I lie?',
  'for reals.',
  'mic drop.',
  'you hidden gem.',
  'snuggle bear.',
  'period.',
  'can I get an amen?',
  "now let's dance.",
  'high five.',
  'say it again!',
  'according to CNN.',
  'so get used to it.',
];

const insult1 = [
  'Terrifically',
  'Totally',
  'Utterly',
  'Stupidly',
  'Absolutely',
  'Thoroughly',
  'Perfectly',
  'Mega',
  'Outright',
  'Massively',
  'Out-and-out',
  'Super',
  'Humongously',
  'Exceedingly',
  'Ultra',
  'Enormously',
  'Vastly',
  'Immensely',
  'Really',
  'Incredibly',
  'Unbelievably',
  'Hugely',
  'Very',
  'Uber',
  'Tremendously',
  '100%',
];

const insult2 = [
  'Mad',
  'Brainless',
  'Silly',
  'Idiotic',
  'Senseless',
  'Childish',
  'Ridiculous',
  'Crazy',
  'Foolish',
  'Ludicrous',
  'Revolting',
  'Ugly',
  'Stinking',
  'Unhinged',
  'Smelly',
  'Daft',
  'Stupid',
  'Foul',
  'Mouldy',
  'Terrible',
  'Psychotic',
  'Thick',
];

const insult3 = [
  'Wank',
  'Bell',
  'Cum',
  'Sperm',
  'Twat',
  'Cock',
  'Spunk',
  'Tit',
  'Ring',
  'Anus',
  'Sphincter',
  'Arse',
  'Testicle',
  'Nipple',
  'Piss',
  'Bum',
  'Fuck',
  'Shit',
  'Scrotum',
  'Penis',
  'Flap',
  'Semen',
];

const insult4 = [
  'Brick',
  'Bucket',
  'Wizard',
  'Guzzler',
  'Sponge',
  'Biscuit',
  'Bandit',
  'Gobbler',
  'Monkey',
  'Stick',
  'Lord',
  'Muncher',
  'Ferret',
  'Licker',
  'Cup',
  'Lizard',
  'Gusset',
  'Trench',
  'Lover',
  'Gurgler',
  'Cake',
  'Sandwich',
  'Garden',
];

function pepGen() {
  let pep =
    pep1[Math.floor(Math.random() * pep1.length)] +
    ' ' +
    pep2[Math.floor(Math.random() * pep2.length)] +
    ' ' +
    pep3[Math.floor(Math.random() * pep3.length)] +
    ' ' +
    pep4[Math.floor(Math.random() * pep4.length)];

  document.getElementById('pep-talk').innerHTML = pep;
}

function insultGen() {
  //https://www.thepoke.co.uk/wp-content/uploads/2013/02/InsultGeneratorV2-1.3yellow.jpg
  let insult =
    insult1[Math.floor(Math.random() * insult1.length)] +
    ' ' +
    insult2[Math.floor(Math.random() * insult2.length)] +
    ' ' +
    insult3[Math.floor(Math.random() * insult3.length)] +
    ' ' +
    insult4[Math.floor(Math.random() * insult4.length)];
  document.getElementById('insult').innerHTML = insult;
}
