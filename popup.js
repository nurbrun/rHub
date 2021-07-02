injectTableButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: injectTable,
  });
});
function injectTable() {
  // pulled from https://docs.google.com/spreadsheets/d/1Bu1ZE22ujitrkRoLBp_uptfezdQ9cVhUpDoukXb-NGM/edit#gid=588546488
  // parsed at https://csvjson.com/csv2json [hash enabled]
  let elementJSON = {
    "air": {
      "Common": 100,
      "Uncommon": 300,
      "Rare": 600,
      "Epic": "1,200",
      "Legendary": "2,500",
      "Mythic": "10,000"
    },
    "earth": {
      "Common": 100,
      "Uncommon": 300,
      "Rare": 600,
      "Epic": "1,200",
      "Legendary": "2,500",
      "Mythic": "10,000"
    },
    "water": {
      "Common": 100,
      "Uncommon": 300,
      "Rare": 600,
      "Epic": "1,200",
      "Legendary": "2,500",
      "Mythic": "10,000"
    },
    "fire": {
      "Common": 100,
      "Uncommon": 300,
      "Rare": 600,
      "Epic": "1,200",
      "Legendary": "2,500",
      "Mythic": "10,000"
    },
    "rain": {
      "Common": 5,
      "Uncommon": 15,
      "Rare": 30,
      "Epic": 60,
      "Legendary": 125,
      "Mythic": 500
    },
    "sea": {
      "Common": 5,
      "Uncommon": 15,
      "Rare": 30,
      "Epic": 60,
      "Legendary": 125,
      "Mythic": 500
    },
    "mud": {
      "Common": 5,
      "Uncommon": 15,
      "Rare": 30,
      "Epic": 60,
      "Legendary": 125,
      "Mythic": 500
    },
    "dust": {
      "Common": 5,
      "Uncommon": 15,
      "Rare": 30,
      "Epic": 60,
      "Legendary": 125,
      "Mythic": 500
    },
    "pressure": {
      "Common": 5,
      "Uncommon": 15,
      "Rare": 30,
      "Epic": 60,
      "Legendary": 125,
      "Mythic": 500
    },
    "lava": {
      "Common": 5,
      "Uncommon": 15,
      "Rare": 30,
      "Epic": 60,
      "Legendary": 125,
      "Mythic": 500
    },
    "energy": {
      "Common": 5,
      "Uncommon": 15,
      "Rare": 30,
      "Epic": 60,
      "Legendary": 125,
      "Mythic": 500
    },
    "steam": {
      "Common": 5,
      "Uncommon": 15,
      "Rare": 30,
      "Epic": 60,
      "Legendary": 125,
      "Mythic": 500
    },
    "heat": {
      "Common": 5,
      "Uncommon": 15,
      "Rare": 30,
      "Epic": 60,
      "Legendary": 125,
      "Mythic": 500
    },
    "garbage": {
      "Common": 5,
      "Uncommon": 15,
      "Rare": 30,
      "Epic": 60,
      "Legendary": 125,
      "Mythic": 500
    },
    "wind": {
      "Common": 16.3,
      "Uncommon": 48.8,
      "Rare": 97.5,
      "Epic": 195,
      "Legendary": 406.3,
      "Mythic": "1,625"
    },
    "flood": {
      "Common": 20,
      "Uncommon": 60,
      "Rare": 120,
      "Epic": 240,
      "Legendary": 500,
      "Mythic": "2,000"
    },
    "plant": {
      "Common": 20,
      "Uncommon": 60,
      "Rare": 120,
      "Epic": 240,
      "Legendary": 500,
      "Mythic": "2,000"
    },
    "ocean": {
      "Common": 20,
      "Uncommon": 60,
      "Rare": 120,
      "Epic": 240,
      "Legendary": 500,
      "Mythic": "2,000"
    },
    "brick": {
      "Common": 12.5,
      "Uncommon": 37.5,
      "Rare": 75,
      "Epic": 150,
      "Legendary": 312.5,
      "Mythic": "1,250"
    },
    "gunpowder": {
      "Common": 16.3,
      "Uncommon": 48.8,
      "Rare": 97.5,
      "Epic": 195,
      "Legendary": 406.3,
      "Mythic": "1,625"
    },
    "atmosphere": {
      "Common": 16.3,
      "Uncommon": 48.8,
      "Rare": 97.5,
      "Epic": 195,
      "Legendary": 406.3,
      "Mythic": "1,625"
    },
    "obsidian": {
      "Common": 16.3,
      "Uncommon": 48.8,
      "Rare": 97.5,
      "Epic": 195,
      "Legendary": 406.3,
      "Mythic": "1,625"
    },
    "stone": {
      "Common": 12.5,
      "Uncommon": 37.5,
      "Rare": 75,
      "Epic": 150,
      "Legendary": 312.5,
      "Mythic": "1,250"
    },
    "earthquake": {
      "Common": 12.5,
      "Uncommon": 37.5,
      "Rare": 75,
      "Epic": 150,
      "Legendary": 312.5,
      "Mythic": "1,250"
    },
    "salt": {
      "Common": 8.8,
      "Uncommon": 26.3,
      "Rare": 52.5,
      "Epic": 105,
      "Legendary": 218.8,
      "Mythic": 875
    },
    "cloud": {
      "Common": 38.8,
      "Uncommon": 116.3,
      "Rare": 232.5,
      "Epic": 465,
      "Legendary": 968.8,
      "Mythic": "3,875"
    },
    "geyser": {
      "Common": 23.8,
      "Uncommon": 71.3,
      "Rare": 142.5,
      "Epic": 285,
      "Legendary": 593.8,
      "Mythic": "2,375"
    },
    "wave": {
      "Common": 50,
      "Uncommon": 150,
      "Rare": 300,
      "Epic": 600,
      "Legendary": "1,250",
      "Mythic": "5,000"
    },
    "tobacco": {
      "Common": 42.5,
      "Uncommon": 127.5,
      "Rare": 255,
      "Epic": 510,
      "Legendary": "1,062.5",
      "Mythic": "4,250"
    },
    "swamp": {
      "Common": 31.3,
      "Uncommon": 93.8,
      "Rare": 187.5,
      "Epic": 375,
      "Legendary": 781.3,
      "Mythic": "3,125"
    },
    "moss": {
      "Common": 35,
      "Uncommon": 105,
      "Rare": 210,
      "Epic": 420,
      "Legendary": 875,
      "Mythic": "3,500"
    },
    "grass": {
      "Common": 31.3,
      "Uncommon": 93.8,
      "Rare": 187.5,
      "Epic": 375,
      "Legendary": 781.3,
      "Mythic": "3,125"
    },
    "coal": {
      "Common": 35,
      "Uncommon": 105,
      "Rare": 210,
      "Epic": 420,
      "Legendary": 875,
      "Mythic": "3,500"
    },
    "wall": {
      "Common": 42.5,
      "Uncommon": 127.5,
      "Rare": 255,
      "Epic": 510,
      "Legendary": "1,062.5",
      "Mythic": "4,250"
    },
    "explosion": {
      "Common": 38.8,
      "Uncommon": 116.3,
      "Rare": 232.5,
      "Epic": 465,
      "Legendary": 968.8,
      "Mythic": "3,875"
    },
    "sand": {
      "Common": 57.5,
      "Uncommon": 172.5,
      "Rare": 345,
      "Epic": 690,
      "Legendary": "1,437.5",
      "Mythic": "5,750"
    },
    "life": {
      "Common": 35,
      "Uncommon": 105,
      "Rare": 210,
      "Epic": 420,
      "Legendary": 875,
      "Mythic": "3,500"
    },
    "alcohol": {
      "Common": 24,
      "Uncommon": 71,
      "Rare": 143,
      "Epic": 285,
      "Legendary": 594,
      "Mythic": "2,375"
    },
    "carrot": {
      "Common": 27.5,
      "Uncommon": 82.5,
      "Rare": 165,
      "Epic": 330,
      "Legendary": 687.5,
      "Mythic": "2,750"
    },
    "cabbage": {
      "Common": 23.8,
      "Uncommon": 71.3,
      "Rare": 142.5,
      "Epic": 285,
      "Legendary": 593.8,
      "Mythic": "2,375"
    },
    "paper": {
      "Common": 46.3,
      "Uncommon": 138.8,
      "Rare": 277.5,
      "Epic": 555,
      "Legendary": "1,156.3",
      "Mythic": "4,625"
    },
    "dark glass": {
      "Common": 35,
      "Uncommon": 105,
      "Rare": 210,
      "Epic": 420,
      "Legendary": 875,
      "Mythic": "3,500"
    },
    "hurricane": {
      "Common": 65,
      "Uncommon": 195,
      "Rare": 390,
      "Epic": 780,
      "Legendary": "1,625",
      "Mythic": "6,500"
    },
    "volcano": {
      "Common": 61.3,
      "Uncommon": 183.8,
      "Rare": 367.5,
      "Epic": 735,
      "Legendary": "1,531.3",
      "Mythic": "6,125"
    },
    "metal": {
      "Common": 83.8,
      "Uncommon": 251.3,
      "Rare": 503,
      "Epic": "1,005",
      "Legendary": "2,093.8",
      "Mythic": "8,375"
    },
    "storm": {
      "Common": 91.3,
      "Uncommon": 273.8,
      "Rare": 547.5,
      "Epic": "1,095",
      "Legendary": "2,281.3",
      "Mythic": "9,125"
    },
    "fog": {
      "Common": 46.3,
      "Uncommon": 138.8,
      "Rare": 277.5,
      "Epic": 555,
      "Legendary": "1,156.3",
      "Mythic": "4,625"
    },
    "sky": {
      "Common": 72.5,
      "Uncommon": 217.5,
      "Rare": 435,
      "Epic": 870,
      "Legendary": "1,812.5",
      "Mythic": "7,250"
    },
    "sound": {
      "Common": 102.5,
      "Uncommon": 307.5,
      "Rare": 615,
      "Epic": "1,230",
      "Legendary": "2,562.5",
      "Mythic": "10,250"
    },
    "diamond": {
      "Common": 50,
      "Uncommon": 150,
      "Rare": 300,
      "Epic": 600,
      "Legendary": "1,250",
      "Mythic": "5,000"
    },
    "glass": {
      "Common": 61.3,
      "Uncommon": 183.8,
      "Rare": 367.5,
      "Epic": 735,
      "Legendary": "1,531.3",
      "Mythic": "6,125"
    },
    "clay": {
      "Common": 80,
      "Uncommon": 240,
      "Rare": 480,
      "Epic": 960,
      "Legendary": "2,000",
      "Mythic": "8,000"
    },
    "vacuum": {
      "Common": 155,
      "Uncommon": 465,
      "Rare": 930,
      "Epic": "1,860",
      "Legendary": "3,875",
      "Mythic": "15,500"
    },
    "tsunami": {
      "Common": 132.5,
      "Uncommon": 397.5,
      "Rare": 795,
      "Epic": "1,590",
      "Legendary": "3,312.5",
      "Mythic": "13,250"
    },
    "ash": {
      "Common": 76.3,
      "Uncommon": 228.8,
      "Rare": 457.5,
      "Epic": 915,
      "Legendary": "1,906.3",
      "Mythic": "7,625"
    },
    "mountain": {
      "Common": 80,
      "Uncommon": 240,
      "Rare": 480,
      "Epic": 960,
      "Legendary": "2,000",
      "Mythic": "8,000"
    },
    "isle": {
      "Common": 83.8,
      "Uncommon": 251.3,
      "Rare": 502.5,
      "Epic": "1,005",
      "Legendary": "2,093.8",
      "Mythic": "8,375"
    },
    "fireworks": {
      "Common": 230,
      "Uncommon": 690,
      "Rare": "1,380",
      "Epic": "2,760",
      "Legendary": "5,750",
      "Mythic": "23,000"
    },
    "grenade": {
      "Common": 155,
      "Uncommon": 465,
      "Rare": 930,
      "Epic": "1,860",
      "Legendary": "3,875",
      "Mythic": "15,500"
    },
    "steel": {
      "Common": 121.3,
      "Uncommon": 363.8,
      "Rare": 727.5,
      "Epic": "1,455",
      "Legendary": "3,031.3",
      "Mythic": "12,125"
    },
    "ring": {
      "Common": 233.8,
      "Uncommon": 701.3,
      "Rare": "1,402.5",
      "Epic": "2,805",
      "Legendary": "5,843.8",
      "Mythic": "23,375"
    },
    "bullet": {
      "Common": 200,
      "Uncommon": 600,
      "Rare": "1,200",
      "Epic": "2,400",
      "Legendary": "5,000",
      "Mythic": "20,000"
    },
    "electricity": {
      "Common": 177.5,
      "Uncommon": 532.5,
      "Rare": "1,065",
      "Epic": "2,130",
      "Legendary": "4,437.5",
      "Mythic": "17,750"
    },
    "boiler": {
      "Common": 95,
      "Uncommon": 285,
      "Rare": 570,
      "Epic": "1,140",
      "Legendary": "2,375",
      "Mythic": "9,500"
    },
    "rust": {
      "Common": 87.5,
      "Uncommon": 262.5,
      "Rare": 525,
      "Epic": "1,050",
      "Legendary": "2,187.5",
      "Mythic": "8,750"
    },
    "sun": {
      "Common": 76.3,
      "Uncommon": 228.8,
      "Rare": 457.5,
      "Epic": 915,
      "Legendary": "1,906.3",
      "Mythic": "7,625"
    },
    "dew": {
      "Common": 80,
      "Uncommon": 240,
      "Rare": 480,
      "Epic": 960,
      "Legendary": "2,000",
      "Mythic": "8,000"
    },
    "compass": {
      "Common": 290,
      "Uncommon": 870,
      "Rare": "1,740",
      "Epic": "3,480",
      "Legendary": "7,250",
      "Mythic": "29,000"
    },
    "sand clock": {
      "Common": 260,
      "Uncommon": 780,
      "Rare": "1,560",
      "Epic": "3,120",
      "Legendary": "6,500",
      "Mythic": "26,000"
    },
    "bottle": {
      "Common": 68.8,
      "Uncommon": 206.3,
      "Rare": 412.5,
      "Epic": 825,
      "Legendary": "1,718.8",
      "Mythic": "6,875"
    },
    "tinplate": {
      "Common": 98.8,
      "Uncommon": 296.3,
      "Rare": 592.5,
      "Epic": "1,185",
      "Legendary": "2,468.8",
      "Mythic": "9,875"
    },
    "glasses": {
      "Common": 237.5,
      "Uncommon": 712.5,
      "Rare": "1,425",
      "Epic": "2,850",
      "Legendary": "5,937.5",
      "Mythic": "23,750"
    },
    "archipelago": {
      "Common": 256.3,
      "Uncommon": 768.8,
      "Rare": "1,537.5",
      "Epic": "3,075",
      "Legendary": "6,406.3",
      "Mythic": "25,625"
    },
    "river": {
      "Common": 128.8,
      "Uncommon": 386.3,
      "Rare": 772.5,
      "Epic": "1,545",
      "Legendary": "3,218.8",
      "Mythic": "12,875"
    },
    "cactus": {
      "Common": 170,
      "Uncommon": 510,
      "Rare": "1,020",
      "Epic": "2,040",
      "Legendary": "4,250",
      "Mythic": "17,000"
    },
    "blade": {
      "Common": 140,
      "Uncommon": 420,
      "Rare": 840,
      "Epic": "1,680",
      "Legendary": "3,500",
      "Mythic": "14,000"
    },
    "horizon": {
      "Common": 192.5,
      "Uncommon": 577.5,
      "Rare": "1,155",
      "Epic": "2,310",
      "Legendary": "4,812.5",
      "Mythic": "19,250"
    },
    "beach": {
      "Common": 173.8,
      "Uncommon": 521.3,
      "Rare": "1,042.5",
      "Epic": "2,085",
      "Legendary": "4,343.8",
      "Mythic": "17,375"
    },
    "time": {
      "Common": 590,
      "Uncommon": "1,770",
      "Rare": "3,540",
      "Epic": "7,080",
      "Legendary": "14,750",
      "Mythic": "59,000"
    },
    "wheat": {
      "Common": 102.5,
      "Uncommon": 307.5,
      "Rare": 615,
      "Epic": "1,230",
      "Legendary": "2,562.5",
      "Mythic": "10,250"
    },
    "tree": {
      "Common": 98.8,
      "Uncommon": 296.3,
      "Rare": 592.5,
      "Epic": "1,185",
      "Legendary": "2,468.8",
      "Mythic": "9,875"
    },
    "bulb": {
      "Common": 406.3,
      "Uncommon": "1,218.8",
      "Rare": "2,437.5",
      "Epic": "4,875",
      "Legendary": "10,156.3",
      "Mythic": "40,625"
    },
    "cannabis": {
      "Common": 173.8,
      "Uncommon": 521.3,
      "Rare": "1,042.5",
      "Epic": "2,085",
      "Legendary": "4,343.8",
      "Mythic": "17,375"
    },
    "oxygen": {
      "Common": 346.3,
      "Uncommon": "1,038.8",
      "Rare": "2,077.5",
      "Epic": "4,155",
      "Legendary": "8,656.3",
      "Mythic": "34,625"
    },
    "pot": {
      "Common": 207.5,
      "Uncommon": 622.5,
      "Rare": "1,245",
      "Epic": "2,490",
      "Legendary": "5,187.5",
      "Mythic": "20,750"
    },
    "gun": {
      "Common": 560,
      "Uncommon": "1,680",
      "Rare": "3,360",
      "Epic": "6,720",
      "Legendary": "14,000",
      "Mythic": "56,000"
    },
    "radiation": {
      "Common": 305,
      "Uncommon": 915,
      "Rare": "1,830",
      "Epic": "3,660",
      "Legendary": "7,625",
      "Mythic": "30,500"
    },
    "desert": {
      "Common": 320,
      "Uncommon": 960,
      "Rare": "1,920",
      "Epic": "3,840",
      "Legendary": "8,000",
      "Mythic": "32,000"
    },
    "knife": {
      "Common": 477.5,
      "Uncommon": "1,432.5",
      "Rare": "2,865",
      "Epic": "5,730",
      "Legendary": "11,937.5",
      "Mythic": "47,750"
    },
    "barrel": {
      "Common": 395,
      "Uncommon": "1,185",
      "Rare": "2,370",
      "Epic": "4,740",
      "Legendary": "9,875",
      "Mythic": "39,500"
    },
    "atomic bomb": {
      "Common": 421.3,
      "Uncommon": "1,263.8",
      "Rare": "2,527.5",
      "Epic": "5,055",
      "Legendary": "10,531.3",
      "Mythic": "42,125"
    },
    "tequila": {
      "Common": 200,
      "Uncommon": 600,
      "Rare": "1,200",
      "Epic": "2,400",
      "Legendary": "5,000",
      "Mythic": "20,000"
    },
    "rainbow": {
      "Common": 346.3,
      "Uncommon": "1,038.8",
      "Rare": "2,077.5",
      "Epic": "4,155",
      "Legendary": "8,656.3",
      "Mythic": "34,625"
    },
    "flour": {
      "Common": 312.5,
      "Uncommon": 937.5,
      "Rare": "1,875",
      "Epic": "3,750",
      "Legendary": "7,812.5",
      "Mythic": "31,250"
    },
    "alarm": {
      "Common": 897.5,
      "Uncommon": "2,692.5",
      "Rare": "5,385",
      "Epic": "10,770",
      "Legendary": "22,437.5",
      "Mythic": "89,750"
    },
    "cloth": {
      "Common": 537.5,
      "Uncommon": "1,612.5",
      "Rare": "3,225",
      "Epic": "6,450",
      "Legendary": "13,437.5",
      "Mythic": "53,750"
    },
    "whiskey": {
      "Common": 522.5,
      "Uncommon": "1,567.5",
      "Rare": "3,135",
      "Epic": "6,270",
      "Legendary": "13,062.5",
      "Mythic": "52,250"
    },
    "sandstorm": {
      "Common": 447.5,
      "Uncommon": "1,342.5",
      "Rare": "2,685",
      "Epic": "5,370",
      "Legendary": "11,187.5",
      "Mythic": "44,750"
    },
    "paint": {
      "Common": 350,
      "Uncommon": "1,050",
      "Rare": "2,100",
      "Epic": "4,200",
      "Legendary": "8,750",
      "Mythic": "35,000"
    },
    "bread": {
      "Common": 526.3,
      "Uncommon": "1,578.8",
      "Rare": "3,158",
      "Epic": "6,315",
      "Legendary": "13,156.3",
      "Mythic": "52,625"
    },
    "flag": {
      "Common": "1,190",
      "Uncommon": "3,570",
      "Rare": "7,140",
      "Epic": "14,280",
      "Legendary": "29,750",
      "Mythic": "119,000"
    },
    "black matter": {
      "Common": "125",
      "Uncommon": "375",
      "Rare": "750",
      "Epic": "1,500",
      "Legendary": "3,125",
      "Mythic": "12,500"
    },
    "virus": {
      "Common": "91.3",
      "Uncommon": "273.8",
      "Rare": "547.5",
      "Epic": "1,095",
      "Legendary": "2,281.3",
      "Mythic": "9,125"
    },
    "chain": {
      "Common": "128.8",
      "Uncommon": "386.3",
      "Rare": "772.5",
      "Epic": "1,545",
      "Legendary": "3,218.8",
      "Mythic": "12,875"
    },
    "plasma": {
      "Common": "91.3",
      "Uncommon": "273.8",
      "Rare": "547.5",
      "Epic": "1,095",
      "Legendary": "2,281.3",
      "Mythic": "9,125"
    },
    "black hole": {
      "Common": "395",
      "Uncommon": "1,185",
      "Rare": "2,370",
      "Epic": "4,740",
      "Legendary": "9,875",
      "Mythic": "39,500"
    },
    "shit": {
      "Common": "676.3",
      "Uncommon": "2,028.8",
      "Rare": "4,057.5",
      "Epic": "8,115",
      "Legendary": "16,906.3",
      "Mythic": "67,625"
    },
    "gold": {
      "Common": "2,705",
      "Uncommon": "8,115",
      "Rare": "16,230",
      "Epic": "32,460",
      "Legendary": "67,625",
      "Mythic": "270,500"
    },
    "lens": {
      "Common": "128.8",
      "Uncommon": "386.3",
      "Rare": "772.5",
      "Epic": "1,545",
      "Legendary": "3,218.8",
      "Mythic": "12,875"
    },
    "microscope": {
      "Common": "357.5",
      "Uncommon": "1,072.5",
      "Rare": "2,145",
      "Epic": "4,290",
      "Legendary": "8,937.5",
      "Mythic": "35,750"
    },
    "prism": {
      "Common": "612.5",
      "Uncommon": "1,837.5",
      "Rare": "3,675",
      "Epic": "7,350",
      "Legendary": "15,312.5",
      "Mythic": "61,250"
    },
    "prism": {
      "Common": "612.5",
      "Uncommon": "1,837.5",
      "Rare": "3,675",
      "Epic": "7,350",
      "Legendary": "15,312.5",
      "Mythic": "61,250"
    },
    "smoke": {
      "Common": "42.5",
      "Uncommon": "127.5",
      "Rare": "255",
      "Epic": "510",
      "Legendary": "1,062.5",
      "Mythic": "4,250"
    },
    "pipe": {
      "Common": "661.3",
      "Uncommon": "1,983.8",
      "Rare": "3,967.5",
      "Epic": "7,935",
      "Legendary": "16,531.3",
      "Mythic": "66,125"
    },
    "reed pipe": {
      "Common": "695",
      "Uncommon": "2,084.8",
      "Rare": "4169.3",
      "Epic": "8,338.3",
      "Legendary": "17,371.5",
      "Mythic": "69,485.3"
    },
    "music": {
      "Common": "1,595",
      "Uncommon": "4,784.3",
      "Rare": "9,568",
      "Epic": "19,136",
      "Legendary": "39,866.8",
      "Mythic": "159,466"
    },
    "money": {
      "Common": "5,461",
      "Uncommon": "16,384",
      "Rare": "32,768",
      "Epic": "32,768",
      "Legendary": "136,531",
      "Mythic": "546,125"
    },
    "block": {
      "Common": "95",
      "Uncommon": "285",
      "Rare": "570",
      "Epic": "1,140",
      "Legendary": "2,375",
      "Mythic": "9,500"
    },
    "blockchain": {
      "Common": "413.75",
      "Uncommon": "1,241.25",
      "Rare": "2,482.5",
      "Epic": "4,965",
      "Legendary": "10,343.75",
      "Mythic": "41,375"
    },
    "broom": {
      "Common": "413.75",
      "Uncommon": "1,241.25",
      "Rare": "2,482.5",
      "Epic": "4,965",
      "Legendary": "10,343.75",
      "Mythic": "41,375"
    },
    "frost": {
      "Common": "50",
      "Uncommon": "150",
      "Rare": "300",
      "Epic": "600",
      "Legendary": "1,250",
      "Mythic": "5,000"
    },
    "ice": {
      "Common": "53.75",
      "Uncommon": "161.25",
      "Rare": "322.50",
      "Epic": "645",
      "Legendary": "1,343.75",
      "Mythic": "5,375"
    },
    "fridge": {
      "Common": "365",
      "Uncommon": "1,095",
      "Rare": "2,190",
      "Epic": "4,380",
      "Legendary": "9,125",
      "Mythic": "36,500"
    },
    "mirror": {
      "Common": "556.25",
      "Uncommon": "1,668.75",
      "Rare": "3,337.5",
      "Epic": "6,675",
      "Legendary": "13,906.25",
      "Mythic": "55,625"
    },
    "graphite": {
      "Common": "42.5",
      "Uncommon": "127.50",
      "Rare": "255",
      "Epic": "510",
      "Legendary": "1,062.50",
      "Mythic": "4,250"
    },
    "pencil": {
      "Common": "661.25",
      "Uncommon": "1,983.75",
      "Rare": "3,967.5",
      "Epic": "7,935",
      "Legendary": "16,531.25",
      "Mythic": "66,125"
    },
    "book": {
      "Common": "800",
      "Uncommon": "2,400",
      "Rare": "4,800",
      "Epic": "9,600",
      "Legendary": "20,000",
      "Mythic": "80,000"
    },
    "battery": {
      "Common": "440",
      "Uncommon": "1,320",
      "Rare": "2,640",
      "Epic": "5,280",
      "Legendary": "11,000",
      "Mythic": "44,000"
    },
    "flashlight": {
      "Common": "1,006.25",
      "Uncommon": "3,018.75",
      "Rare": "6,037.50",
      "Epic": "12,075",
      "Legendary": "25,156.25",
      "Mythic": "100,625"
    },
    "painting": {
      "Common": "1,407.50",
      "Uncommon": "4,222.50",
      "Rare": "8,445",
      "Epic": "16,890",
      "Legendary": "35,187.50",
      "Mythic": "140,750"
    },
    "calculator": {
      "Common": "777.5",
      "Uncommon": "2,332.5",
      "Rare": "4,665",
      "Epic": "9,330",
      "Legendary": "19,437.5",
      "Mythic": "77,750"
    },
    "atom": {
      "Common": "372.5",
      "Uncommon": "1,117.5",
      "Rare": "2,235",
      "Epic": "4,470",
      "Legendary": "9,312.5",
      "Mythic": "37,250"
    },
    "bitcoin": {
      "Common": "1,370",
      "Uncommon": "4,110",
      "Rare": "8,220",
      "Epic": "16,440",
      "Legendary": "34,250",
      "Mythic": "137,000"
    },
    "cable": {
      "Common": "391.25",
      "Uncommon": "1,173.75",
      "Rare": "2,347.5",
      "Epic": "4,695",
      "Legendary": "9,781.25",
      "Mythic": "39,125"
    },
    "hill": {
      "Common": "177.5",
      "Uncommon": "532.5",
      "Rare": "1,065",
      "Epic": "2,130",
      "Legendary": "4,437.5",
      "Mythic": "17,750"
    },
    "kite": {
      "Common": "586.25",
      "Uncommon": "1,758.75",
      "Rare": "3,517.5",
      "Epic": "7,035",
      "Legendary": "14,656.25",
      "Mythic": "58,625"
    },
    "tiling": {
      "Common": "170",
      "Uncommon": "510",
      "Rare": "1,020",
      "Epic": "2,040",
      "Legendary": "4,250",
      "Mythic": "17,000"
    },
    "hammer": {
      "Common": "365",
      "Uncommon": "1,095",
      "Rare": "2,190",
      "Epic": "4,380",
      "Legendary": "9,125",
      "Mythic": "36,500"
    },
    "seaweed": {
      "Common": "173.75",
      "Uncommon": "512.25",
      "Rare": "1,042.5",
      "Epic": "2,085",
      "Legendary": "4,343.75",
      "Mythic": "17,375"
    },
    "stool": {
      "Common": "646.25",
      "Uncommon": "1,938.75",
      "Rare": "3,877.5",
      "Epic": "7,755",
      "Legendary": "16,156.25",
      "Mythic": "64,625"
    },
    "gas": {
      "Common": "113.75",
      "Uncommon": "341.25",
      "Rare": "682.5",
      "Epic": "1,365",
      "Legendary": "2,843.75",
      "Mythic": "11,375"
    },
    "bubbles": {
      "Common": "121.25",
      "Uncommon": "363.75",
      "Rare": "727.5",
      "Epic": "1,455",
      "Legendary": "3,031.25",
      "Mythic": "12,125"
    },
    "soda": {
      "Common": "222.5",
      "Uncommon": "667.5",
      "Rare": "1,335",
      "Epic": "2,670",
      "Legendary": "5,562.5",
      "Mythic": "22,250"
    },
    "pickax": {
      "Common": "286.25",
      "Uncommon": "858.75",
      "Rare": "1,717.5",
      "Epic": "3,435",
      "Legendary": "7,156.25",
      "Mythic": "28,625"
    },
    "peat": {
      "Common": "158.75",
      "Uncommon": "476.25",
      "Rare": "952.5",
      "Epic": "1,905",
      "Legendary": "3,968.75",
      "Mythic": "15,875"
    },
    "nft": {
      "Common": "7,403.75",
      "Uncommon": "22,211.25",
      "Rare": "44,422.5",
      "Epic": "88,845",
      "Legendary": "185,093.75",
      "Mythic": "740,375"
    },
    "golem": {
      "Common": "207.50",
      "Uncommon": "622.50",
      "Rare": "1,245",
      "Epic": "2,490",
      "Legendary": "5,187.50",
      "Mythic": "20,750"
    },
    "bacteria": {
      "Common": "72.50",
      "Uncommon": "217.50",
      "Rare": "435",
      "Epic": "870",
      "Legendary": "1,812.50",
      "Mythic": "7,250"
    },
    "petri dish": {
      "Common": "256.25",
      "Uncommon": "768.75",
      "Rare": "1,537.50",
      "Epic": "3,075",
      "Legendary": "6,406.25",
      "Mythic": "25,625"
    },
    "kettle": {
      "Common": "267.50",
      "Uncommon": "802.50",
      "Rare": "1,605",
      "Epic": "3,210",
      "Legendary": "6,687",
      "Mythic": "26,750"
    },
    "seed": {
      "Common": "151.25",
      "Uncommon": "453.75",
      "Rare": "907.50",
      "Epic": "1,815",
      "Legendary": "3,781.25",
      "Mythic": "15,125"
    },
    "grape": {
      "Common": "410",
      "Uncommon": "1,230",
      "Rare": "2,460",
      "Epic": "4,920",
      "Legendary": "10,250",
      "Mythic": "41,000"
    },
    "sunflower": {
      "Common": "248.75",
      "Uncommon": "746.25",
      "Rare": "1,492.50",
      "Epic": "2,985",
      "Legendary": "6,218.75",
      "Mythic": "24,875"
    },
    "wire": {
      "Common": "350",
      "Uncommon": "1,050",
      "Rare": "2,100",
      "Epic": "4,200",
      "Legendary": "8,750",
      "Mythic": "35,000"
    },
    "oil": {
      "Common": "597.50",
      "Uncommon": "1,792.50",
      "Rare": "3,585",
      "Epic": "7,170",
      "Legendary": "14,937.50",
      "Mythic": "59,750.00"
    },
    "salad": {
      "Common": "657.50",
      "Uncommon": "1,972.50",
      "Rare": "3,945",
      "Epic": "7,890",
      "Legendary": "16,437.50",
      "Mythic": "65,750"
    },
    "string": {
      "Common": "657.50",
      "Uncommon": "1,972.50",
      "Rare": "3,945",
      "Epic": "7,890",
      "Legendary": "16,437.50",
      "Mythic": "65,750"
    },
    "piano": {
      "Common": "2,453.75",
      "Uncommon": "7,361.25",
      "Rare": "14,722.50",
      "Epic": "29,445",
      "Legendary": "61,343.75",
      "Mythic": "245,375"
    }
  }
  let rigJSON = {
    "Common": "150",
    "Uncommon": "250",
    "Rare": "400",
    "Epic": "800",
    "Legendary": "5,000",
    "Mythic": "10,000"
  }
  // debugger;
  function updateListener(){
    const targetNode = document.getElementsByClassName('MobileCardDesign')[0];
    // Options for the observer (which mutations to observe)
    const config = {childList: true};
    // Callback function to execute when mutations are observed
    const callback = function(mutationsList, observer) {
      populatePage()
    };
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);
    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
  };
  function populatePage(){
    // Itterate through html cards
    let cardList = document.getElementsByClassName("large-card");
    for (let i = 0; i < cardList.length; i++) {
      if (typeof(cardList[i].children[0].children[0].children[0]) !== "undefined") {
        var raw_img_url = cardList[i].children[0].children[0].children[0].children[0].src
        var card_name = cardList[i].children[1].children[1].children[0].innerText
        var raw_price = cardList[i].children[1].children[1].children[1].innerText
        var clean_price = parseFloat(raw_price.split("WAX")[0]);
        console.log(clean_price);
        switch (raw_img_url) {
          case (raw_img_url.match(/uncommon/) || {}).input:
           var rarity = "Uncommon"
            break;
          case (raw_img_url.match(/common/) || {}).input:
           var rarity = "Common"
            break;
          case (raw_img_url.match(/rare/) || {}).input:
           var rarity = "Rare"
            break;
          case (raw_img_url.match(/epic/) || {}).input:
           var rarity = "Epic"
            break;
          case (raw_img_url.match(/legendary/) || {}).input:
           var rarity = "Legendary"
            break;
          case (raw_img_url.match(/mythic/) || {}).input:
           var rarity = "Mythic"
            break;
          default:
           var rarity = "nil"
            break;
        }
        switch (raw_img_url) {
          case (raw_img_url.match(/Frigs/) || {}).input:
           var rig = true
            break;
          default:
           var rig = false
            break;
        }
        if (elementJSON[card_name.toLowerCase()] || (rig==true)) {
          var parent = cardList[i].children[0].children[0].children[0];
          if (rig == true){
            aether_value = rigJSON[rarity];
          } else {
            aether_value = elementJSON[card_name.toLowerCase()][rarity];
            var aetherDiv = document.createElement('div');
            parent.appendChild(aetherDiv);
            aetherDiv.innerHTML = aether_value;
            aetherDiv.style.position = "absolute";
            aetherDiv.style.margin = "auto";
            aetherDiv.style.left = 0;
            aetherDiv.style.right = 0;
            aetherDiv.style.top = "-3.5px";
            aetherDiv.style.letterSpacing = "2px";
            aetherDiv.style.fontSize = "12px";
            aetherDiv.style.fontWeight = 900;
          };
          var ratioDiv = document.createElement('div');
          parent.appendChild(ratioDiv);
          ratioDiv.innerHTML = (clean_price/ (parseFloat(aether_value.toString().replace(',','')))).toFixed(1)+" : 1";
          ratioDiv.style.position = "absolute";
          ratioDiv.style.margin = "auto";
          ratioDiv.style.left = 0;
          ratioDiv.style.right = 0;
          ratioDiv.style.top = "-18.5px";
          ratioDiv.style.letterSpacing = "2px";
          ratioDiv.style.fontSize = "12px";
          ratioDiv.style.fontWeight = 900;
          ratioDiv.style.color = "#42ba67";
        } 
      }
    }
  }
  populatePage();
  updateListener();
}