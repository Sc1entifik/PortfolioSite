const IMAGES = "/images";
const imageFilePath = (rootPath: string, fileNumber: string) => `${rootPath}${fileNumber}.png`
const DFK = IMAGES + "/dfkSummonerSheet/dfkSummonerSheet";
const MAT_TOOL = IMAGES + "/dfkMaterialMiningTool/dfkMaterialMiningTool";
const JAMMMING = IMAGES + "/jammming/jammming";
const MTG_INVENTORY = IMAGES + "/mtgInventoryTool/mtgInventory";
const NVIM_TELEPORT = IMAGES + "/nvimTeleport/nvimTeleport";
const ROBOT = IMAGES + "/funnyRobotPictures";

export const ImagesMap = {
	DFK1: imageFilePath(DFK, "1"), 
	DFK2: imageFilePath(DFK, "2"), 
	DFK3: imageFilePath(DFK, "3"), 
	MAT_TOOL1: imageFilePath(MAT_TOOL, "1"),
	MAT_TOOL2: imageFilePath(MAT_TOOL, "2"),
	MAT_TOOL3: imageFilePath(MAT_TOOL, "3"),
	JAMMMING1: imageFilePath(JAMMMING, "1"),
	JAMMMING2: imageFilePath(JAMMMING, "2"),
	JAMMMING3: imageFilePath(JAMMMING, "3"),
	MTG1: imageFilePath(MTG_INVENTORY, "1"),
	MTG2: imageFilePath(MTG_INVENTORY, "2"),
	MTG3: imageFilePath(MTG_INVENTORY, "3"),
	NVIM1: imageFilePath(NVIM_TELEPORT, "1"),
	NVIM2: imageFilePath(NVIM_TELEPORT, "2"),
	NVIM3: imageFilePath(NVIM_TELEPORT, "3"),
	DALEK: ROBOT + "/dalekCropped.jpg",
	ROSIE: ROBOT + "/rosieCropped.jpg",
	JOHNNY_FIVE: ROBOT + "/johnnyFiveCropped.jpg",
	DARPA_TINY_ROBOT: ROBOT + "/darpaTinyRobotCropped.jpg",
	ROOMBA: ROBOT + "/catOnRoombaCropped.jpg",
	BENDER: ROBOT + "/benderCropped.jpg",
}; 
