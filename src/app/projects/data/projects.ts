export interface Project {
	title: string;
	descriptionHeader: string;
	description: string;
	image1: string;
	image2:string;
	image3:string;
	githubLink:string;
	projectLink?: string;
}

export const projects: Project[] = [
	{
		title: "DFK Summoner Sheet",
		descriptionHeader: "NFT Genetics Precision",
		description: "Defi Kingdoms is a popular rpg influenced web-3 game where players collect NFT heros with stats that do jobs, battle, and go on missions on the Defi Kingdoms and Kaia blockchains.\nDFK Summoner Sheet helps players with one of the most complicated aspects of the game. Choosing hero pairs to summon other heros for their collection. Compare multiple summoning pairs for any hero all at once using real time blockchain genetic data from each hero and see all the relevant data neatly displayed on one screen.",
		image1: "/images/dfkSummonerSheet/dfkSummonerSheet1.png",
		image2: "/images/dfkSummonerSheet/dfkSummonerSheet2.png",
		image3: "/images/dfkSummonerSheet/dfkSummonerSheet5Cropped.png",
		githubLink: "https://github.com/Sc1entifik/DFK-SummoningSheet",
		projectLink: "https://scientifik.pythonanywhere.com/"
	},

	{
		title: "DFK Mat Mining Profitability Tool",
		descriptionHeader: "Material Mine With Confidence",
		description: "Determining what materials to mine with which heroes and in which kingdom with fluctuating material prices and gas costs can seem like a hurculean task. The days of following You Tube tutorials and using macro spreadsheets with outdated pricing snd thirty columns of irrelevant data are over!\nThe DFK Mat Mining Profitability Tool gets real time price data of all your mats from the Dexscreener API. Just plug in the total gas cost to send your heroes out to quest and complete their quest. The tool will calculate the price of your mats in your kingdom's gas token and subtract the gas spent to get your profit or loss.",
		image1: "/images/dfkMaterialMiningTool/dfkMaterialMiningTool1.png",
		image2: "/images/dfkMaterialMiningTool/dfkMaterialMiningTool2Cropped.png",
		image3: "/images/dfkMaterialMiningTool/dfkMaterialMiningTool3Cropped.png",
		githubLink: "https://github.com/Sc1entifik/DFK-SummoningSheet",
		projectLink: "https://scientifik.pythonanywhere.com/"
	},

	{
		title: "Jammming Spotify Playlist Manager",
		descriptionHeader: "Manage Spotify Playlists With Ease",
		description: "Jammming allows you to create, and manage your spotify playlists by removing all the things from the classic Spotify app that do not help you manage your playlists.\nSearch for songs and albums using multiple search criteria that are query string compatible. Listen to track samples as you are jammming and adding songs to your playlist. Reorder and rename your playlists with ease. Then listen to your playlist anytime and anywhere useing your Spotify app!",
		image1: "/images/jammming/jammming1.png",
		image2: "/images/jammming/jammming2.png",
		image3: "/images/jammming/jammming3.png",
		githubLink: "https://github.com/Sc1entifik/CCJammming",
		projectLink: "https://cc-jammming.vercel.app/"
	},

	{
		title: "MTG Inventory Tool",
		descriptionHeader: "Upload Entire Card Collections To The Cloud",
		description: "When using card trading websites being able to leverage your entire collection is huge. Filtering through want lists for cards that you own that are valued high by someone else gives you built in trading leverage. However most trading sites use .csv upload files that are very finicky and impractical.\nMTG Inventory Tool lets you quickly generate .csv files that will let you upload full collections using the set abbreviation and collector number on the bottom of any card. You simply fill out a file with collector numbers separated by periods and run the tool. The tool will output a .csv file you can upload to your favorite trading site.",
		image1: "/images/mtgInventoryTool/mtgInventory1.png",
		image2: "/images/mtgInventoryTool/mtgInventory2.png",
		image3: "/images/mtgInventoryTool/mtgInventory3.png",
		githubLink: "https://github.com/Sc1entifik/MtgCloudInventoryTool"
	},

	{
		title: "NVIM Teleport",
		descriptionHeader: "Configure Your Nvim Setup With Confidence",
		description: "Nvim allows you to work fully in the terminal with lightning speed and accuracy. Everyone that uses nvim knows that the only real pain point is the complicated yet powerful configuration system. You want to try new configurations and plug-ins or you want to set up a new machine to your NVIM configuration but it feels like if you breath on the thing it will break.\nThis is why I made NVIM Teleport. NVIM Teleport allows you to version control your NVIM configurations, swap out broken configs with the one you have on tap ready to go, and get your new computer setup with NVIM in minutes not hours. Comes with a barebones but powerful configuration featuring Telescope, LazyVim, and Mason LSP.", 
		image1: "/images/nvimTeleport/nvimTeleport1.png",
		image2: "/images/nvimTeleport/nvimTeleport2.png",
		image3: "/images/nvimTeleport/nvimTeleport3.png",
		githubLink: "https://github.com/Sc1entifik/NvimTeleport"
	}
];
