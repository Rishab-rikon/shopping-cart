var Mobile = require('../models/mobile');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var mobiles = [
new Mobile({
	imagePath: 'http://ecx.images-amazon.com/images/I/51odjdfuPTL.jpg',
	title: 'Apple iPhone 7 (Black, 32GB) ',
	model: 'iPhone 7',
	description: 'For all the iPhone lovers, Apple brings you the best yet. The iPhone 7 improvises on the best features of the previous generations of Apple phones. Be it the camera, the battery or the speakers, the iPhone 7 aces the game. Experience a power packed performance with the iPhone 7. Sporting a stylish compact body, the iPhone 7 is splash proof and water resistant. From a brilliant display to overwhelming sound quality, name it and the iPhone 7 has it all. ',
	price: '42499',
	spec1: 'iOS 10.0.1',
	spec2: '2 GB',
	spec3: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot, bluetooth v4.2, A-GPS, GLONASS, USB v2.0, reversible connector',
	spec4: 'GSM / CDMA / HSPA / EVDO / LTE',
	spec5: '12MP front, 7MP back.',
	spec6: 'EarPods with Lightning Connector (wired), Lightning to 3.5mm Headphone Jack Adapter, Lightning to USB Cable, USB Power Adapter'
}),
new Mobile({
	imagePath: 'http://ecx.images-amazon.com/images/I/916hZ%2B3lOyL._SL1500_.jpg',
	title: 'Moto G5 (3 GB, Lunar Grey) ',
	model: 'XT1677',
	description: 'Our first-ever Moto G with a head-turning metal design gives you more than you’d expect for less than you’d think. Free yourself with a 2800mAh all-day battery and rapid charging.* Take beautiful photos even in bright light with a fast-focusing 13 MP camera. Stay entertained on the go with a fast 1.4 GHz octa-core processor.* Unlock your phone using only your fingerprint. And turn on the camera with a twist of your wrist—our exclusive Moto Experiences give you simple shortcuts to the features you use most.',
	price: '11999',
	spec1: 'Android',
	spec2: '3 GB',
	spec3: 'Bluetooth 4.2, WiFi Hotspot',
	spec4: 'GSM, (850/900/1800/1900 MHz), UMTS, HSPA+(850/900/2100 MHz), 4G LTE, B1, (3/5/8/40), GPRS, EDGE',
	spec5: '13MP rear camera with fast auto-focus and professional mode | 5MP wide-angle selfie camera',
	spec6: 'Handset, Charger, Wired Earphones, Battery, Getting Started Guide'
}),
new Mobile({
	imagePath: 'http://ecx.images-amazon.com/images/I/61hpb1zAWgL._SL1000_.jpg',
	title: 'Google Pixel XL (Very Silver, 128 GB) ',
	model: 'G-2PW2200-052-B',
	description: "It has the highest rated smartphone camera. Ever. A battery that lasts all day. Unlimited storage for all your photos and videos. And it's the first phone with the Google Assistant built in.The first phone with the Google Assistant built in.Know when local places close, if it's still going to rain on Saturday, and if your favorite team won last night.Create an event, set a reminder, and text your friend the info.The highest rated smartphone camera. Ever.Unlimited storage for all your photos and videos.Your closest friends, closer.A seamless glass-aluminum body.Unlock fast with Pixel Imprint.A brilliant AMOLED screen, with true blacks and 16.77 million colors.Get up to 7 hours of battery life in just 15 minutes. †Connect your old iPhone® or Android device to your new Pixel with the Quick Switch Adapter. ‡Sign into your Google Account on your Pixel or create a new one.Choose what you want to move, like contacts, calendar events, photos, videos, music, SMS messages, iMessages® and more. Then sit back and let Pixel do the work. ",
	price: '63400',
	spec1: 'Android',
	spec2: '4 GB',
	spec3: 'Qualcomm SnapdragonTM 821 2.15Ghz + 1.6Ghz, 64Bit Quad-Core Processor',
	spec4: 'GSM, (850/900/1800/1900 MHz), UMTS, HSPA+(850/900/2100 MHz), 4G LTE, B1, (3/5/8/40), GPRS, EDGE',
	spec5: 'Main Camera 12.3MP,Large 1.55μm pixels,f/2.0 Aperture ',
	spec6: 'Handset, USB-C 18 W Adapter with USB-PD, USB-C to USB-C Cable, USB-C to USB Standard-A Plug Cable, SIM Tool, Headphones with Rubber Earbuds, OTG Dongle, Safety and Warranty Information, Quick Start Guide, Google Assistant Card, Google Social Promo Card'
}),
new Mobile({
	imagePath: 'http://ecx.images-amazon.com/images/I/71quSjy21LL._SL1500_.jpg',
	title: 'Sony Xperia XZs (Black) ',
	model: '43024122',
	description: 'Xperia XZs comes with the World’s first super slow motion video recording capabilities that allows you to capture 960 frames per second, so you can dramatize every moment you shoot. It is powered by a 19 MP motion eye camera that features ground-breaking predictive capture technology which senses movement and captures image even before you click. All this wrapped in a IP68 water resistant Alkaleido metal built that adds to the strength and finishing of Xperia XZs. The ultimate Snapdragon 820 (64bit) for super-fast processing and high performance. It has a 64GB internal memory for enhanced storage option so you go free hand recording in 4K video mode or downloading Hi-Res audio content. ',
	price: '46999',
	spec1: 'Android',
	spec2: '4 GB',
	spec3: 'Bluetooth, WiFi Hotspot',
	spec4: 'GSM GPRS/EDGE (2G) UMTS HSPA+ (3G) LTE (4G) Cat11*** A-GNSS (GPS + GLONASS)*** WiFi Miracast Bluetooth® 4.2 wireless technology DLNA Certified® Google Cast NFC USB Type-CTM',
	spec5: '19MP primary camera with triple image sensing technology, predictive hybrid autofocus, 960 FPS super slow motion videos, predictive capture, 0.5 sec quick launch and capture, anti-distortion shutter, HDR photo, X8 digital zoom, steady shot with intelligent active mode (5-axis stabilization), 4k recording and 13MP front facing camera ',
	spec6: 'Handset, Quick Charger, Type-C Data Cable, Stereo Headphones and Start up Guide'
}),
new Mobile({
	imagePath: 'http://ecx.images-amazon.com/images/I/71farp8DWKL._SL1500_.jpg',
	title: 'Samsung Galaxy S6 (Gold Platinum, 64GB) ',
	model: 'SM-G920FZDEITV',
	description: 'Inspired by the works of glassblowers and artisan metalsmiths, the Samsung Galaxy S6 edge represents a seamless fusion of glass and metal. Make a breathtaking design statement with the world\'s first dual-edge display, beautiful curves and radiant glass surfaces that reflect a wide spectrum of dazzling colours. Add some colour to your interactions with the Samsung Galaxy S6 edge. By colour-coding the five people you care most about, you can simply tab a contact\'s colour on the edge display to call, text or email them. These innovative colour-coded notifications, let you easily see who is trying to get in touch, even when your device is upside down. Both of the Samsung Galaxy S6 edge\'s front and rear cameras feature higher resolution and F1.9 aperture, allowing you to take clearer images wherever you are. What\'s more, simply press the home button twice to go straight into camera mode - so you\'ll never miss an important moment again. Never worry about your battery again thanks to the Samsung Galaxy S6 edge\'s lightning-fast charging speed, which is up to 1.5 times faster than previous models. Its wireless charging compatibility means you can simply pop the Samsung Galaxy S6 edge onto a compatible charging pad for a wire-free recharge. With twice the booting speed of previous models and super-fast app launching, the Samsung Galaxy S6 edge gives you unbeatable results and improved energy efficiency. Its 64-bit architecture is truly powerful, letting you take multitasking and multimedia functions to the next level. Equipped with a 5.1" Quad HD (2560X1440) Super AMOLED display, the Samsung Galaxy S6 edge provides an impeccably sharp viewing experience. Featuring an adaptive display, it provides unbeatable clarity both indoors and outside. Plus, improved brightness levels and pixel density let you take superb images wherever you are. ',
	price: '81346',
	spec1: 'Android',
	spec2: '3 GB',
	spec3: 'Bluetooth, WiFi Hotspot',
	spec4: 'EDGE',
	spec5: '6MP primary camera and 5MP front facing camera.',
	spec6: ' Handset, Charger,Ear phone,warrantycard and User Manual '
}),
new Mobile({
	imagePath: 'http://ecx.images-amazon.com/images/I/41SCtQjI2%2BL.jpg',
	title: 'HTC 10 4GB RAM (Topaz Gold, 32GB) ',
	model: 'HTC 10',
	description: "HTC 10. It's more of what you're looking for in a flagship phone. Unparalleled performance. Superb 24-bit Hi-Res sound. The world's first Optical Image Stabilization in both front and back cameras. And one of the highest smartphone camera rankings ever from DxOMark. All in a beautifully crafted metal unibody. ",
	price: '99000',
	spec1: 'Android',
	spec2: '4 GB',
	spec3: 'Bluetooth, WiFi Hotspot',
	spec4: 'EDGE',
	spec5: '12MP (HTC UltraPixelTM 2 with 1.55μm pixel) Rear Camera, 5MP (1.34μm pixels) Front Camera ',
	spec6: 'Handset, Charger,Ear phone,warrantycard and User Manual'
})
];

var done=0;
for (var i= 0; i<mobiles.length;i++){
	mobiles[i].save(function (err, result){
		done++;
		if(done===mobiles.length){
			exit();
		}
	});
}
function exit(){
	mongoose.disconnect();
}