var Gaming = require('../models/gaming');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var gamings = [
new Gaming({
	imagePath: 'http://ecx.images-amazon.com/images/I/41O17f0BfDL._SY450_.jpg',
	title: 'Logitech 910-000093 Gaming Mouse for PC ',
	description:  "Logitech exclusive, the G5's 36-gram adjustable weight cartridge gives you thousands of variations on balance and weight-including one that´s perfect for your unique gaming style. Polytetrafluoroethylene (PTFE) gaming feet provide the ultra-smooth glide you want in a gaming-grade mouse, while the 2000 dpi laser engine sends out an astounding 1000 USB reports per second for precision response at blinding speeds. Logitech´s SetPoint software allows you to customize your mouse with advanced features such as game detection and in-game adjustable sensitivity (including independent x- and y-axis settings).",
	price: ' 61552'
}),
new Gaming({
	imagePath: 'http://ecx.images-amazon.com/images/I/718OOJWADSL._SX450_.jpg',
	title: 'Circle Adroit X7C Gaming Keyboard with 7 Colour Backlit Mode ',
	description: "FEATURES: 7 Colour Backlit mode, breathing light 19 key Anti-Ghost S mould Ergonomic design, Reduce fatigue for long time use 6 multimedia keys High quality ABS environmental protection material Pass more than 30 stringent reliability testing Intelligent independent lock Windows independent lock Advanced waterproof conductive film Can make the WASD and the direction key function swap SPECIFICATIONS: Key : 104 key + 6 key ( Multimedia) Line Length : 1.8M Rated operating voltage current : 5.5V/150mA Key stroke : 3.6MM Key tapping times : 10000000 times Prot : USB",
	price: '2340'
}),
new Gaming({
	imagePath: 'http://ecx.images-amazon.com/images/I/819NOE1JkML._SL1500_.jpg',
	title: 'Audio-Technica ATH-AG1X Closed Back High-Fidelity Gaming Headset ',
	description: "Featuring newly designed 53 mm drivers with Audio-Technica's double air damping system (D.A.D.S.), the ATH-AG1X high-fidelity gaming headset gives you an incredibly immersive gaming experience with sharp, detailed audio and deep, resonating bass. The headset also boasts an improved 3D Wing Support system and extremely soft ear pads for a comfortable, secure fit that lets you happily game on for hours. The ATH-AG1X also comes equipped with a premium gooseneck microphone to handle your in-game communication. The mic's super cardioid element is excellent at rejecting unwanted ambient noise, so your voice will come through crystal clear all the time. There's even an included windscreen that slips onto the mic to further combat wind and breath noise, if need be. For additional control and convenience, the headset's 1.2 m (3.9') cable includes a simple volume/locking mute switch for easy one-hand operation, and comes with a 2.0 m (6.6') extension cable. ",
	price: '37949'
}),
new Gaming({
	imagePath: 'http://ecx.images-amazon.com/images/I/813iNFxMEuL._SL1500_.jpg',
	title: 'MSI GE62VR 6RF Apache Pro 15.6" Gaming Laptop (Core-i7 6th Gen/ DDR4 16GB/1TB (SATA) 7200rpm+128GB SSD (M.2 SATA)/Nvidia Geforce GTX 1060, 6GB GDDR5/Window10) with Laptop Bag',
	description: '•Windows 10 Home / Windows 10 Pro •Latest 6th Gen. Intel® CoreTM i7 processor •Latest GeForce® GTX 1060 6GB GDDR5 with desktop level performance •15.6" Full HD (1920x1080), IPS level panel (Optional) •Exclusive Cooler Boost 4 Technology •The X Boost function from MSI technology supports faster storage access speed. •Dragon Center provides six functions to get a total control of your personal computer •WTFast free premium license for 2-month •NVMe M.2 SSD by PCIe Gen3 X4 up to 2200MB/s speed(optional) •The latest USB 3.1 SuperSpeed+ interface built in •USB Type-C reversible plug •Exclusive SHIFT technology boosts performance under controlled noise & temperature •Nahimic 2 Sound Technology delivering 360⁰ immersive audio experience •Audio Boost enhancing the gaming headset sound detail and sound stage •Sound by Dynaudio system •True Color Technology for increased color contrast and greater image detail •SteelSeries Engine 3 with GameSense to personalize your play style •Keyboard by Steelseries with full color backlighting •Upgraded Killer Gigabit LAN Controller + Killer Shield + 802.11 ac •Xsplit Gamecaster 1 year free premium license for broadcasting, recording and sharing •Matrix Display supporting 4K output up to 2 external monitors •Elegant brushed aluminum chassis, creating an ideal fusion of aesthetics and performance ',
	price: '138939'
}),
new Gaming({
	imagePath: 'http://ecx.images-amazon.com/images/I/71lMucX7DYL._SX450_.jpg',
	title: 'Logitech G19S Gaming Keyboard (Black) ',
	description: "Logitech G19S Gaming Keyboard comes with adjustable , color gamepanel LCD. Extend your cockpit with the G19s GamePanel LCD. Stay informed with real-time game stats, background system information, VoIP communication data, video playback and image slide shows. Add community-developed applets to work with your GamePanel monitor or create your own. Locate keys in any room with custom backlit keys. Choose 1 out of 16 million colors and assign a unique color to each profile, profile mode, and mode style in the same game. You can tell, without looking down, which mode you’re in to ensure your setup is optimized. G19s includes 12 programmable G-keys that simplify complex actions by allowing you to configure up to 36 unique functions across three different modes with three macros per key. With G-keys, instant access to a variety of customizable functions is just a click away. Program G-keys to interact with your mouse to change DPI levels on the fly and instantly switch from lightning-fast speed to pixel-perfect precision. Assign a G-key to open microphone channels and talk to friends through Ventrilo or to record your play on the fly. You can even assign a G-key to send a text broadcast to your team. Harness the power of G-keys to configure single key presses, complex macros or intricate LUA scripts on the fly, and quickly simplify actions to stay immersed in your game and never lose a step. Using infrared technology, we studied the interaction between hand and keyboard, and then added advanced surface materials to strategic zones for improved durability and comfort. A hydrophobic coating helps keep hands from sticking to the palm rest. Double UV coating on the keys provides extra long life durability. In addition, fingerprint-resistant coating on the faceplate helps maintain a fresh look. Details make the difference. The powered USB ports let you transfer data to and from peripherals, like MP3 players and flash drives, while also charging battery-powered devices. Anti-ghosting means every key you press is registered even when you press more than one key at the same time. G19s not only includes anti-ghosting on common multi-key inputs such as control-alt-delete, it includes it over all 26 keys so you can perform multiple complex actions, such as pressing six keys at once, without interference or ghosting. You’re about to record a record high number of perfect headshots when an accidental keystroke sends you on an unplanned, unwanted trip to your desktop. Don’t let this kind of mistake ruin your streak or your game, easily disable the Windows key with one button so your game won’t be interrupted. You can thank us later. You can keep mouse, headset and other cords out of the way by routing them through channels on the underside of G19s. You can upload the latest enhancements developed exclusively for GamePanel by the Logitech open-source community. G19s saves your profiles so you never lose your settings, even when you bring it to other PCs. Convenient one-touch controls give you instant access to volume control and media playback without needing to press a function key. ",
	price: '48741'
}),
new Gaming({
	imagePath: 'http://ecx.images-amazon.com/images/I/51xtCWt7SML._SL1000_.jpg',
	title: 'Gigabyte Aivia Krypton Two-Sided Gaming Mouse Pad (GP-KRYPTON MAT) ',
	description: 'Good mouse pad',
	price: '9945'
})
];

var done=0;
for (var i= 0; i<gamings.length;i++){
	gamings[i].save(function (err, result){
		done++;
		if(done===gamings.length){
			exit();
		}
	});
}
function exit(){
	mongoose.disconnect();
}