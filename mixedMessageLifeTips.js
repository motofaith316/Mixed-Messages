// random Life Tip Generator function

let lifeTips = ['Memorize something everyday.', 'Constantly try to reduce your attachment to possessions.', 'Develop an endless curiosity about this world.', 'Remember people’s names', 'Get fit!','Learn to focus only on the present.','Even more specifically, live in THIS moment.','Smile more often.',
 'Drink water.', 'Don’t take life so seriously!', 'Think positive thoughts.', 'Read books.', 'Get in the sun.', 'Help others.', 'Set aside a specific time to worry each day.','Be honest at all times.', 'Sleep less', 'Read “Bringers of Light” and “Conversations with God” by Neale Donald Walsch.', 'Figure out what your goals and dreams are.', 'Start your day off right.', 'Utilize ‘The Burning Method.’',
'Travel.', 'The Rubber Band Method', 'Learn to be unaffected by the words of others.' ];

let tip = lifeTips[Math.floor(Math.random() * lifeTips.length)]



 console.log(`Your life tip for today is:  ${tip}`)