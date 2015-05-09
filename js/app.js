var initialCats = [
	{
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
		nicknames: ['Tabtab', 'T-bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
	},
	{
		clickCount: 0,
		name: 'Tiger',
		imgSrc: 'img/4154543904_6e2428c421_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904',
		nicknames: ['Tigger']
	},
	{
		clickCount: 0,
		name: 'Scaredy',
		imgSrc: 'img/22252709_010df3379e_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709',
		nicknames: ['Casper']
	},
	{
		clickCount: 0,
		name: 'Shadow',
		imgSrc: 'img/1413379559_412a540d29_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559',
		nicknames: ['Shooty']
	},
	{
		clickCount: 0,
		name: 'Sleepy',
		imgSrc: 'img/9648464288_2516b35537_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288',
		nicknames: ['Zzzzzz']
	}
]

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.nicknames = ko.observableArray(data.nicknames);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.title = ko.computed(function() {
		var title;
		var clicks = this.clickCount();
		if (clicks < 10)
			title = 'Newborn';
		else if(clicks < 50)
			title = 'Infant';
		else if(clicks < 70)
			title = 'Child';
		else if(clicks < 90)
			title = 'Teen';
		else if(clicks < 110)
			title = 'Adult';
		else
			title = 'Ninja';
		return title;
	}, this);
	
}

var AppViewModel = function() { // this means the binding context
	var self = this;
	this.catList = ko.observableArray([]);
	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});
	
	this.currentCat = ko.observable(this.catList()[0]);
	
	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};
	
	this.incrementCount = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new AppViewModel());
