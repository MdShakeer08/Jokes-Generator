const jokes = ["Why did the soccer player take so long to eat dinner? Because he                        thought he couldn’t use his hands.",
               
  "Name the kind of tree you can hold in your hand? A palm tree!",

  " What do birds give out on Halloween? Tweets.",

  "What has ears but cannot hear? A cornfield.",

  "What’s a cat’s favorite dessert? A bowl full of mice-cream.",

  "Where did the music teacher leave her keys? In the piano!",

  "What did the policeman say to his hungry stomach? 'Freeze. You’re under a vest.'",

  "What did the left eye say to the right eye? Between us, something smells!",

  "What do you call a guy who’s really loud? Mike.",

  "Why do birds fly south in the winter? It’s faster than walking!",

  "What did the lava say to his girlfriend? 'I lava you'",
               "What do you call a pony with a cough? \nA little horse.",

               "What did one hat say to the other? \nYou wait here. I’ll go on a head.",

               "What do you call a magic dog? \nA labracadabrador.",

               "What did the shark say when he ate the clownfish? \nThis tastes a little funny.",

               "What’s orange and sounds like a carrot? \nA parrot.",

               "Why can’t you hear a pterodactyl go to the bathroom? \nBecause the “P” is silent.",

               "What do you call a woman with one leg? \nEileen.",

               "What did the pirate say when he turned 80? \nAye matey.",

               "Why did the frog take the bus to work today? \nHis car got toad away.",

               "What did the buffalo say when his son left for college? \nBison.",

               "What is an astronaut’s favorite part on a computer? \nThe space bar.",

               "Why did the yogurt go to the art exhibition? \nBecause it was cultured.",

               "What do you call an apology written in dots and dashes? \nRe-Morse code.",

               "Did you hear about the two people who stole a calendar? \nThey each got six months.",

               "Why did the hipster burn his mouth? \nHe drank the coffee before it was cool.",

               "What do cows do on date night? \nGo to the moo-vies.",

               "What do cows say when they hear a bad joke? \n'I am not amoosed.'”",

               "Why do French people eat snails? \nThey don’t like fast food.",

               "Why did the golfer wear two pairs of pants?  \nJust in case he got a hole in one!",

               "Why don’t the circus lions eat the clowns?  \nBecause they taste funny!",

               "How many tickles does it take to make an octopus laugh? \nTen-tickles.",

               "What did 0 say to 8? \nNice belt.",

               "What do you call a pig that does karate? \nA pork chop.",

               "What did the football coach say to the broken vending machine? \nGive me my quarterback.",

               "Why are elephants wrinkly? \nBecause you can’t iron them.",

               "What did the cake say to the fork? \nYou want a piece of me?",

               "Why did the strawberry cry? \nHe found himself in a jam.",

               "Why is it annoying to eat next to basketball players? \nThey dribble all the time.",

               "What did the lettuce say to the celery? \nQuit stalking me!",

               "What do you call a train carrying bubblegum? \nA chew-chew train.",

               "What’s small and red and has a rough voice? \nA hoarse radish!",

               "Why do mushrooms get invited to all the parties? \nBecause they are such fungis.",

               "Why shouldn’t you tell secrets in a cornfield? \nToo many ears.",

               "Why couldn’t the bad sailor learn the alphabet? \nBecause he always got lost at “C.“",

               "How did the two cats end their fight? \nThey hissed and made up.",
  
              ]

function generateJokes(howMany) {
  const randomJokes = [ ]
  
  for(let i=0; i<howMany; i++) {
  const randomIndex = Math.floor(Math.random() * jokes.length)
  randomJokes.push(jokes[randomIndex]);
  }

  const jokesList = document.getElementById("jokes-list")
  jokesList.innerHTML = "";
  randomJokes.forEach((joke) => {
    const li = document.createElement("li")
    li.textContent = joke
    jokesList.appendChild(li)
  })
}