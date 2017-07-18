var Electronic = require('../models/electronic');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var electronics = [
new Electronic({
	imagePath: 'https://rukminim1.flixcart.com/image/832/832/television/h/q/y/sony-klv-32w562d-original-imaernd3pbzfhhxn.jpeg',
	title: 'Sony Bravia 80.1cm (32) Full HD Smart LED TV',
	model: 'KLV-32W562D, 2 x HDMI, 2 x USB',
	description: 'With a slim design and a narrow bezel, the TV is designed to look very stylish in your TV unit. With the built in subwoofer and ClearPhase technology, the TV provides clear and powerful sound, making your music and movies more enjoyable. With MotionFlow technology, this TV makes fast action movies fun to watch.',
	price: '33999'
}),	
new Electronic({
	imagePath: 'https://rukminim1.flixcart.com/image/832/832/j2nlwnk0/air-conditioner-new/h/5/j/12k-ester-pro-5-star-1-split-carrier-original-imaety23fhjngygt.jpeg',
	title: 'Carrier 1.5 Ton 5 Star Split AC - White',
	model: '18K Ester Pro 5 Star, Copper Condenser',
	description: 'Anti Bacteria Filter, Auto Restart, Copper Condenser, Dust Filter, Dehumidification, Sleep Mode.',
	price: '32999'
}),
new Electronic({
	imagePath: 'https://rukminim1.flixcart.com/image/832/832/home-theatre-system/6/f/s/ht-rt3-sony-original-imaek6cakz6w8c4h.jpeg',
	title: 'Sony HT-RT3 5.1 Soundbar',
	model: 'HT-RT3',
	description: 'Speaker Layout: Standard (5.1 Channel / 4.1 Channel): Yes (5.1 Channel), All Front (5.1 Channel / 4.1 Channel): Yes (5.1 Channel), Supported Media (File System: Yes (FAT32, NTFS), External HDD (Read, Copy / Move): Yes (Read)), Amplifier / Receiver Function (Bluetooth, TV: Yes (HDMI ARC / Opt), USB, Analog), Amplifier Features (Type: S-Master, Speaker Level Control: SW Vol: 0 - 12, Voice Up: Yes (1 - 3)), Amplifier / Receiver Inputs and Outputs (Bluetooth Reception: 1, USB: 1 (USB-A), Analog Audio In (Including TV CEC), HDMI Out: 1 (ARC), Optical In, Decoding Format(s): LPCM (2 Channel / 5.1 Channel), through HDMI, Dolby Digital, Dolby Dual Mono, Input Selector, Remote Control, Display, Power Standby, Auto Standby: Yes (Default: On), Hotel Mode, Muting, Playback Control (Repeat All: Yes (USB), Repeat Track: Yes (USB), Shuffle: Yes (USB), Resume - Stop: Yes (USB)), LED Indicator: Yes (BT), Auto Power Off (Auto Standby)',
	price: '17999'
}),
new Electronic({
	imagePath: 'https://rukminim1.flixcart.com/image/832/832/camera/g/8/v/nikon-d4s-dslr-original-imaehc9wqmk4tkjk.jpeg',
	title: 'Nikon D4S DSLR Camera (Body only)  (Black)',
	model: 'D4S',
	description: 'Effective Angle of View: Nikon FX Format, 100% Frame Coverage, Manual Monitor Brightness Control and Automatic Monitor Brightness Control Using Ambient Brightness Sensor',
	price: '348555'
}),
new Electronic({
	imagePath: 'https://rukminim1.flixcart.com/image/832/832/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg',
	title: 'HP LaserJet M1005 Multi-function Printer  (Black, White, Toner Cartridge)',
	model: 'LaserJet M1005',
	description: '    Media Sizes (Custom): Media Input Tray and Priority Tray - 76 x 127 to 216 x 356 mm, Scan File Format: JPEG, TIFF (Compressed and Uncompressed), PDF, GIF, and BMP, Scan Input Modes: Scanning Via HP LaserJet Scan Application or TWAIN- or WIA-compliant Appl,HP Black LaserJet Toner cartridge pre-installed.',
	price: '15890'
}),
new Electronic({
	imagePath: 'https://rukminim1.flixcart.com/image/832/832/external-hard-drive/y/a/n/wd-elements-original-imadmhegj4jkaghs.jpeg',
	title: 'WD Elements 2.5 inch 1 TB External Hard Drive  (Black)',
	model: 'WD Elements',
	description: " Is your laptop slowing down because its internal hard disk is almost full? Then it's time for you to get this Elements external hard drive from WD and transfer all your important files and documents without having to delete any of them. ",
	price: '4099'
})
];

var done=0;
for (var i= 0; i<electronics.length;i++){
	electronics[i].save(function (err, result){
		done++;
		if(done===electronics.length){
			exit();
		}
	});
}
function exit(){
	mongoose.disconnect();
}