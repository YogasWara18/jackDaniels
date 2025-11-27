const navLinks = [
 {
	id: "Whisky",
	title: "Whisky",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "work",
	title: "The Art",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const cocktailLists = [
 {
	name: "Chapel Hill Shiraz",
	country: "AU",
	detail: "Battle",
	price: "$10",
 },
 {
	name: "Caten Malbee",
	country: "AU",
	detail: "Battle",
	price: "$49",
 },
 {
	name: "Rhino Pale Ale",
	country: "CA",
	detail: "750 ml",
	price: "$20",
 },
 {
	name: "Irish Guinness",
	country: "IE",
	detail: "600 ml",
	price: "$29",
 },
];

const mockTailLists = [
 {
	name: "Tropical Bloom",
	country: "US",
	detail: "Battle",
	price: "$10",
 },
 {
	name: "Passionfruit Mint",
	country: "US",
	detail: "Battle",
	price: "$49",
 },
 {
	name: "Citrus Glow",
	country: "CA",
	detail: "750 ml",
	price: "$20",
 },
 {
	name: "Lavender Fizz",
	country: "IE",
	detail: "600 ml",
	price: "$29",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Perfectly balanced blends",
 "Garnished to perfection",
 "Ice-cold every time",
 "Expertly shaken & stirred",
];

const goodLists = [
 "Handpicked ingredients",
 "Signature techniques",
 "Bartending artistry in action",
 "Freshly muddled flavors",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
 contact: {
	phone: "(555) 987-6543",
	email: "hello@jsmcocktail.com",
 },
};

const openingHours = [
 { day: "Mon–Thu", time: "11:00am – 12am" },
 { day: "Fri", time: "11:00am – 2am" },
 { day: "Sat", time: "9:00am – 2am" },
 { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Minted Mellow",
	image: "/images/drink1.png",
	title: "Gentleman Jack Citrus Mint Whiskey Cocktail",
	description: "Refined and refreshing, Minted Mellow celebrates the smooth elegance of Gentleman Jack—double mellowed for exceptional balance.",
 },
 {
	id: 2,
	name: "Apple Barrel Chill",
	image: "/images/drink2.png",
	title: "Jack Daniel’s Tennessee Apple Whiskey Cocktail",
	description: "Crisp, juicy, and irresistibly smooth, Apple Barrel Chill brings together the bold character of Jack Daniel’s Tennessee Whiskey and the refreshing sweetness of green apple liqueur.",
 },
 {
	id: 3,
	name: "Golden Hive Elixir",
	image: "/images/drink3.png",
	title: "Jack Daniel’s Tennessee Honey Winter Cocktail",
	description: "Smooth, sweet, and seasonally inspired, Golden Hive Elixir blends the mellow warmth of Jack Daniel’s Tennessee Honey with citrus notes and a touch of spice.",
 },
 {
	id: 4,
	name: "Smoky Thyme Reverie",
	image: "/images/drink4.png",
	title: "Jack Daniel’s Old No. 7 Layered Whiskey Cocktails",
	description: "A sophisticated blend of depth and aroma, Smoky Thyme Reverie showcases the bold character of Jack Daniel’s Old No. 7 Tennessee Whiskey in a visually striking layered cocktail. The dark base reveals the whiskey’s rich sour mash heritage.",
 },
];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};