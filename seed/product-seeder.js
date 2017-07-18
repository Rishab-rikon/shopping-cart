var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
	new Product({
	imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
	title: 'Gothic Video Game',
	description: "Gothic is a single-player action role-playing video game for Microsoft Windows <devel></devel>oped by the German company Piranha Bytes. It was first released in Germany on March 15, 2001, followed by the English North American release eight months later on November 23, 2001, and the Polish release on March 28, 2002. Gothic has been well received by critics, scoring an average of 80% and 81/100 on Game Rankings' and Metacritic's aggregates, respectively",
	price: '770'	
	}),
	new Product({
	imagePath: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Dark_souls_3_cover_art.jpg',
	title: 'Dark Souls 3',
	description: "Dark Souls III is an action role-playing video game developed by FromSoftware and published by Bandai Namco Entertainment for PlayStation 4, Xbox One, and Microsoft Windows. The fourth entry in the Souls series,[1] Dark Souls III was released in Japan in March 2016, and worldwide in April 2016",
	price: '4299'	
	}),
	new Product({
	imagePath: 'https://upload.wikimedia.org/wikipedia/en/2/21/Nier_Automata_cover_art.jpg',
	title: 'Nier Automata',
	description:"Nier: Automata is an action role-playing video game developed by PlatinumGames and published by Square Enix for PlayStation 4 and Microsoft Windows. The game was released in Japan in February 2017, and worldwide the following month. Nier: Automata is a sequel to the 2010 video game Nier, a spin-off of the Drakengard series. Set in the midst of a proxy war between machines created by otherworldly invaders and the remnants of humanity, the story follows the battles of a combat android, her companion, and a fugitive prototype. Gameplay combines role-playing elements with action-based combat and mixed genre gameplay similar to that of Nier.",
	price:'2999'
	}),
	new Product({
	imagePath: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Outlast2.png',
	title: 'Outlast 2',
	description:"Outlast 2 is a first-person survival horror video game developed and published by Red Barrels for Microsoft Windows, PlayStation 4 and Xbox One on April 25, 2017. It is the sequel to the 2013 video game Outlast, and features a journalist named Blake Langermann, along with his wife Lynn, roaming the Arizona desert to explore the murder of a pregnant woman only known as Jane Doe.[2] Blake and Lynn get separated in a helicopter crash, and Blake has to find his wife while traveling through a village inhabited by a sect that believes the end of days are upon them.",
	price:'2750'
	}),
	new Product({
	imagePath: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Dark_Souls_II_cover.jpg',
	title: 'Dark Souls 2',
	description:"Dark Souls II[a] is an action role-playing video game developed by FromSoftware and published by Bandai Namco Games. The third game in the Souls series, Dark Souls II was released for Microsoft Windows, PlayStation 3, and Xbox 360",
	price:'2627'
	}),
	new Product({
	imagePath: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Payday2cover.jpg',
	title: 'Payday 2',
	description:"Payday 2 is a cooperative first-person shooter video game developed by Overkill Software and published by 505 Games has former published by Sony. The game is a sequel to 2011's Payday: The Heist. It was released on 13 August 2013 for Microsoft Windows, PlayStation 3 and Xbox 360. An improved version of the game, subtitled Crimewave Edition, was released for PlayStation 4 and Xbox One in June 2015 (on 12 June in the UK and Europe and on 16 June in North America).[3] The game has been announced for the Nintendo Switch and will come out in the fall of 2017.",
	price:'999'
	})
];
var done=0;
for (var i= 0; i<products.length;i++){
	products[i].save(function (err, result){
		done++;
		if(done===products.length){
			exit();
		}
	});
}
function exit(){
	mongoose.disconnect();
}