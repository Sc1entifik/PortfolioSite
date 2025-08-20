export interface Project {
	title: string;
	descriptionHeader: string;
	description: string;
	image1: string;
	image2: string;
	image3: string;
	githubLink: string;
	projectLink?: string;
}

export const projects: Project[] = [
	{
		title: "DFK Summoner Sheet",
		descriptionHeader: "NFT Genetics Precision",
		description: "Defi Kingdoms is a popular rpg influenced web-3 game where players collect NFT heros with stats that do jobs, battle, and go on missions on the Defi Kingdoms and Kaia blockchains.\nDFK Summoner Sheet helps players with one of the most complicated aspects of the game. Choosing hero pairs for summoning other heros. Compare multiple summoning candidates using real time blockchain genetic data and see all the relevant stats neatly displayed on one screen.",
		image1: "/images/dfkSummonerSheet/dfkSummonerSheet1.png",
		image2: "/images/dfkSummonerSheet/dfkSummonerSheet2.png",
		image3: "/images/dfkSummonerSheet/dfkSummonerSheet5Cropped.png",
		githubLink: "https://github.com/Sc1entifik/DFK-SummoningSheet",
		projectLink: "https://scientifik.pythonanywhere.com/"
	},

	{
		title: "DFK Mat Mining Profitability Tool",
		descriptionHeader: "Material Mine With Confidence",
		description: "Determining what materials to mine with which heroes and in which kingdom with fluctuating material prices and gas costs can seem like a hurculean task. The days of following You Tube tutorials and using macro spreadsheets with outdated pricing and thirty columns of irrelevant data are over!\nGive the DFK Mat Mining Profitability Tool your questing gas costs and all the materials you mined and you will get real time price data of all your mats from the Dexscreener API.", 
		image1: "/images/dfkMaterialMiningTool/dfkMaterialMiningTool1.png",
		image2: "/images/dfkMaterialMiningTool/dfkMaterialMiningTool2Cropped.png",
		image3: "/images/dfkMaterialMiningTool/dfkMaterialMiningTool3Cropped.png",
		githubLink: "https://github.com/Sc1entifik/DFK-SummoningSheet",
		projectLink: "https://scientifik.pythonanywhere.com/"
	},

	{
		title: "Jammming Spotify Playlist Manager",
		descriptionHeader: "Manage Spotify Playlists With Ease",
		description: "Jammming allows you to create, and manage your spotify playlists by removing all the things from the classic Spotify app that do not help you manage your playlists.\nSearch for songs and albums using multiple search criteria that are query string compatible. Listen to track samples as you are jammming and adding songs to your playlist. Reorder and rename your playlists with ease. Then listen to your playlist anytime and anywhere using your Spotify app!",
		image1: "/images/jammming/jammming1.png",
		image2: "/images/jammming/jammming2.png",
		image3: "/images/jammming/jammming3.png",
		githubLink: "https://github.com/Sc1entifik/CCJammming",
		projectLink: "https://cc-jammming.vercel.app/"
	},

	{
		title: "MTG Inventory Tool",
		descriptionHeader: "Generate Coud Inventories For Your Cards ",
		description: "Card trading websites are effective for getting the cards you need. Leveraging your whole collection on these sites is a huge advantage. \nThe bulk card import features on these sites are finicky and unreliable and adding cards one by one is just impracical.\nThe MTG Inventory Tool is a Python tool that quickly generates bulk .csv import files using the collection number and abbreviation symbol on the bottom of every card.",
		image1: "/images/mtgInventoryTool/mtgInventory1.png",
		image2: "/images/mtgInventoryTool/mtgInventory2.png",
		image3: "/images/mtgInventoryTool/mtgInventory3.png",
		githubLink: "https://github.com/Sc1entifik/MtgCloudInventoryTool"
	},

	{
		title: "NVIM Teleport",
		descriptionHeader: "Configure Your Nvim Setup With Confidence",
		description: "Nvim allows you to work fully in the terminal with lightning speed and accuracy. Every Nvim user knows that the pain point is setup and configuration. You can either use a bloated premade configuration or have to deal with awful plug in documentation and opaque error messages.\nThis is why I made NVIM Teleport. NVIM Teleport is a Bash script that aids the version control of NVIM configurations. Fearlessly configure Nvim knowing you have your spare ready to go. Comes with a barebones but powerful configuration featuring Telescope, LazyVim, and Mason LSP.", 
		image1: "/images/nvimTeleport/nvimTeleport1.png",
		image2: "/images/nvimTeleport/nvimTeleport2.png",
		image3: "/images/nvimTeleport/nvimTeleport3.png",
		githubLink: "https://github.com/Sc1entifik/NvimTeleport"
	}
];
