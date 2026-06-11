//=====(ZMIENNE)=====
let money = 0;
let multiplier = 0;
let rebirth = 0;
let superRebirth = 0;
let mega = 0;
//=====(ADMIN)=====
let adminX = 1;
//=====(UBGRADE 1)=====
let up1Count = 0;
let up1Cost = 1000;
let up1Boost = 1;
let up1Cap = 20;
//=====(UBGRADE 2)=====
let up2Count = 0;
let up2Cost = 250000;
let up2Active = false;
let up2Boost = 1;
//=====(UBGRADE 3)=====
let up3Count = 0;
let up3Cost = 250;
let up3Boost = 1;
let up3Cap = 10;
//=====(UBGRADE 4)=====
let up4Count = 0;
let up4Cost = 4000;
let up4Active = false;
let up4Boost = 1;
let playTime = 0;
//=====(UBGRADE 5)=====
let up5Count = 0;
let up5Cost = 20;
let up5Active = false;
let up5Boost = 1;
//=====(UBGRADE 6)=====
let up6Count = 0;
let up6Cost = 125;
let up6Boost = 1;
let up6Cap = 25;
//=====(UBGRADE 7)=====
let up7Count = 0;
let up7Cost = 8;
let up7Boost = 1;
//=====(UBGRADE 8)=====
let up8Count = 0;
let up8Cost = 25;
let up8Active = false;
let up8Boost = 1;
//=====(UBGRADE 9)=====
let up9Count = 0;
let up9Cost = 125;
let up9Active = false;
//=====(AUTO UPDATE EKRANU)=====
let toUpgradeVis = false;
let up3Vis = false;
let up4Vis = false;
let up5Vis = false;
let up6Vis = false;
let up7Vis = false;
let up8Vis = false;
let up9Vis = false;
let SRVis = false;
let SRUpgVis = false;
let ToResearchVis = false;
let MeVis = false;
//=====(RESEARCHERS)=====
let researchers = 0;
let researchersMoneyCost = 400000000000;
let researchersMultiplierCost = 200000000;
let researchersRebirthCost = 5000000;
let researchersSuperRebirthCost = 2000;
//=====(RESEARCHERS SPEED)=====
let researchSpeedMoneyCost = 10000000000;
let researchSpeedMultiplierCost = 25000000;
let researchSpeedRebirthCost = 500000;
let researchSpeedSuperRebirthCost = 250;
let researchSpeedMoneyMulti = 1;
let researchSpeedMultiplierMulti = 1;
let researchSpeedRebirthMulti = 1;
let researchSpeedSuperRebirthMulti = 1;
let researchSpeedUpgradesMulti = 1;
//=====(RESEARCH UPGRADES)=====
let researchTick = 1000
let currentResearchers = 0
let researchersSpending = 0
//=====(UBGRADE 1 RESEARCH)=====
let up1Researchers = 0
let up1TimeIs = 0
let up1TimeLeft = 60
let up1Lv = 0
let up1Scale = 1.4
let up1BoostRe = 1
//=====(UBGRADE 2 RESEARCH)=====
let up2Researchers = 0
let up2TimeIs = 0
let up2TimeLeft = 200
let up2Lv = 0
let up2Scale = 1.4
let up2BoostRe = 0
//=====(UBGRADE 3 RESEARCH)=====
let up3Researchers = 0
let up3TimeIs = 0
let up3TimeLeft = 450
let up3Lv = 0
let up3Scale = 1.3
let up3BoostRe = 1
//=====(UBGRADE 4 RESEARCH)=====
let up4Researchers = 0
let up4TimeIs = 0
let up4TimeLeft = 800
let up4Lv = 0
let up4Scale = 1.5
let up4BoostRe = 1
let up4BoostActive = false
//=====(UBGRADE 5 RESEARCH)=====
let up5Researchers = 0
let up5TimeIs = 0
let up5TimeLeft = 120
let up5Lv = 0
let up5Scale = 1.6
let up5BoostRe = 0
//=====(UBGRADE 6 RESEARCH)=====
let up6Researchers = 0
let up6TimeIs = 0
let up6TimeLeft = 300
let up6Lv = 0
let up6Scale = 1.6
let up6BoostRe = 1
//=====(UBGRADE 7 RESEARCH)=====
let up7Researchers = 0
let up7TimeIs = 0
let up7TimeLeft = 500
let up7Lv = 0
let up7Scale = 2.2
let up7BoostRe = 0
//=====(UBGRADE 8 RESEARCH)=====
let up8Researchers = 0
let up8TimeIs = 0
let up8TimeLeft = 1200
let up8Lv = 0
let up8Scale = 2
let up8BoostRe = 1
let up8BoostActive = false
//=====(UBGRADE 9 RESEARCH)=====
let up9Researchers = 0
let up9TimeIs = 0
let up9TimeLeft = 600
let up9Lv = 0
let up9Scale = 1.6
let up9BoostRe = 1
let up9BoostActive = false
//=====(UBGRADE 10 RESEARCH)=====
let up10Researchers = 0
let up10TimeIs = 0
let up10TimeLeft = 1000
let up10Lv = 0
let up10Scale = 1.3
let up10BoostRe = 1
//=====(UBGRADE 11 RESEARCH)=====
let up11Researchers = 0
let up11TimeIs = 0
let up11TimeLeft = 2400
let up11Lv = 1
let up11Scale = 1.8
let up11BoostRe = 1
let up11BoostActive = false
//=====(UBGRADE 12 RESEARCH)=====
let up12Researchers = 0
let up12TimeIs = 0
let up12TimeLeft = 10000
let up12Lv = 0
let up12Scale = 1.8
let up12BoostRe = 1
let up12BoostActive = false
//=====(AUTO GAIN)=====
let multiplierGain = 0;
let multiplierGainTest = 0.1;
let multiplierTime = 10;
let multiplierTimeTest = 8;
let multiplierGainResearchers = 0;
let multiplierGainTimeIs = 0;
let multiplierGainTimeLeft = 150;
let multiplierScale = 1.7;
let multiplierTimeResearchers = 0;
let multiplierTimeTimeIs = 0;
let multiplierTimeTimeLeft = 200;
let multiplierGainLv = 0
let multiplierTimeLv = 0

let rebirthGain = 0;
let rebirthGainTest = 0.1;
let rebirthTime = 10;
let rebirthTimeTest = 8;
let rebirthGainResearchers = 0;
let rebirthGainTimeIs = 0;
let rebirthGainTimeLeft = 500;
let rebirthScale = 1.9;
let rebirthTimeResearchers = 0;
let rebirthTimeTimeIs = 0;
let rebirthTimeTimeLeft = 450;
let rebirthGainLv = 0
let rebirthTimeLv = 0

let superRebirthGain = 0;
let superRebirthGainTest = 0.1;
let superRebirthTime = 10;
let superRebirthTimeTest = 8;
let superRebirthGainResearchers = 0;
let superRebirthGainTimeIs = 0;
let superRebirthGainTimeLeft = 900;
let superRebirthScale = 2.2;
let superRebirthTimeResearchers = 0;
let superRebirthTimeTimeIs = 0;
let superRebirthTimeTimeLeft = 920;
let superRebirthGainLv = 0
let superRebirthTimeLv = 0

let up2ReVis = false;
let up3ReVis = false;
let up4ReVis = false;
let up6ReVis = false;
let up7ReVis = false;
let up8ReVis = false;
let up9ReVis = false;
let up10ReVis = false;
let up11ReVis = false;
let up12ReVis = false;
let RVis = false;
let sRVis = false;
//=====(ZAPIS)=====
function saveGame() {
    let save = {
        //=====(ZMIENNE DO ZAPISU)=====
        money: money,
        multiplier: multiplier,
        rebirth: rebirth,
        superRebirth: superRebirth,
        mega : mega,
        up1Count: up1Count,
        up1Cost: up1Cost,
        up1Boost: up1Boost,
        up2Count: up2Count,
        up2Cost: up2Cost,
        up2Boost: up2Boost,
        up2Active: up2Active,
        up3Count: up3Count,
        up3Cost: up3Cost,
        up3Boost: up3Boost,
        up4Count: up4Count,
        up4Cost: up4Cost,
        up4Boost: up4Boost,
        up4Active: up4Active,
        playTime: playTime,
        up5Count: up5Count,
        up5Cost: up5Cost,
        up5Boost: up5Boost,
        up5Active: up5Active,
        up6Count: up6Count,
        up6Cost: up6Cost,
        up6Boost: up6Boost,
        up7Count: up7Count,
        up7Cost: up7Cost,
        up7Boost: up7Boost,
        up8Count: up8Count,
        up8Cost: up8Cost,
        up8Boost: up8Boost,
        up8Active: up8Active,
        up9Count: up9Count,
        up9Active: up9Active,
        up9Cost : up9Cost,
        toUpgradeVis : toUpgradeVis,
        up3Vis : up3Vis,
        up4Vis : up4Vis,
        up5Vis : up5Vis,
        up6Vis : up6Vis,
        up7Vis : up7Vis,
        up8Vis : up8Vis,
        up9Vis : up9Vis,
        SRVis : SRVis,
        SRUpgVis : SRUpgVis,
        ToResearchVis : ToResearchVis,
        researchers : researchers,
        researchersMoneyCost : researchersMoneyCost,
        researchersMultiplierCost : researchersMultiplierCost,
        researchersRebirthCost : researchersRebirthCost,
        researchersSuperRebirthCost : researchersSuperRebirthCost,
        researchSpeedMoneyCost : researchSpeedMoneyCost,
        researchSpeedMultiplierCost : researchSpeedMultiplierCost,
        researchSpeedRebirthCost : researchSpeedRebirthCost,
        researchSpeedSuperRebirthCost : researchSpeedSuperRebirthCost,
        researchSpeedMoneyMulti : researchSpeedMoneyMulti,
        researchSpeedMultiplierMulti : researchSpeedMultiplierMulti,
        researchSpeedRebirthMulti : researchSpeedRebirthMulti,
        researchSpeedSuperRebirthMulti : researchSpeedSuperRebirthMulti,
        currentResearchers : currentResearchers,
        researchTick : researchTick,
        up1Researchers : up1Researchers,
        up1TimeIs : up1TimeIs,
        up1TimeLeft : up1TimeLeft,
        up1Lv : up1Lv,
        up1Scale : up1Scale,
        up1BoostRe : up1BoostRe,
        up2Researchers : up2Researchers,
        up2TimeIs : up2TimeIs,
        up2TimeLeft : up2TimeLeft,
        up2Lv : up2Lv,
        up2Scale : up2Scale,
        up2BoostRe : up2BoostRe,
        up3Researchers : up3Researchers,
        up3TimeIs : up3TimeIs,
        up3TimeLeft : up3TimeLeft,
        up3Lv : up3Lv,
        up3Scale : up3Scale,
        up3BoostRe : up3BoostRe,
        up4Researchers : up4Researchers,
        up4TimeIs : up4TimeIs,
        up4TimeLeft : up4TimeLeft,
        up4Lv : up4Lv,
        up4Scale : up4Scale,
        up4BoostRe : up4BoostRe,
        up4BoostActive : up4BoostActive,
        up5Researchers : up5Researchers,
        up5TimeIs : up5TimeIs,
        up5TimeLeft : up5TimeLeft,
        up5Lv : up5Lv,
        up5Scale : up5Scale,
        up5BoostRe : up5BoostRe,
        up6Researchers : up6Researchers,
        up6TimeIs : up6TimeIs,
        up6TimeLeft : up6TimeLeft,
        up6Lv : up6Lv,
        up6Scale : up6Scale,
        up6BoostRe : up6BoostRe,
        up7Researchers : up7Researchers,
        up7TimeIs : up7TimeIs,
        up7TimeLeft : up7TimeLeft,
        up7Lv : up7Lv,
        up7Scale : up7Scale,
        up7BoostRe : up7BoostRe,
        up8Researchers : up8Researchers,
        up8TimeIs : up8TimeIs,
        up8TimeLeft : up8TimeLeft,
        up8Lv : up8Lv,
        up8Scale : up8Scale,
        up8BoostRe : up8BoostRe,
        up8BoostActive : up8BoostActive,
        up9Researchers : up9Researchers,
        up9TimeIs : up9TimeIs,
        up9TimeLeft : up9TimeLeft,
        up9Lv : up9Lv,
        up9Scale : up9Scale,
        up9BoostRe : up9BoostRe,
        up9BoostActive : up9BoostActive,
        up10Researchers : up10Researchers,
        up10TimeIs : up10TimeIs,
        up10TimeLeft : up10TimeLeft,
        up10Lv : up10Lv,
        up10Scale : up10Scale,
        up10BoostRe : up10BoostRe,
        up11Researchers : up11Researchers,
        up11TimeIs : up11TimeIs,
        up11TimeLeft : up11TimeLeft,
        up11Lv : up11Lv,
        up11Scale : up11Scale,
        up11BoostRe : up11BoostRe,
        up11BoostActive : up11BoostActive,
        up12Researchers : up12Researchers,
        up12TimeIs : up12TimeIs,
        up12TimeLeft : up12TimeLeft,
        up12Lv : up12Lv,
        up12Scale : up12Scale,
        up12BoostRe : up12BoostRe,
        up12BoostActive : up12BoostActive,
        multiplierGain : multiplierGain,
        multiplierGainTest : multiplierGainTest,
        multiplierTime : multiplierTime,
        multiplierTimeTest : multiplierTimeTest,
        multiplierGainResearchers : multiplierGainResearchers,
        multiplierGainTimeIs : multiplierGainTimeIs,
        multiplierGainTimeLeft : multiplierGainTimeLeft,
        multiplierScale : multiplierScale,
        multiplierTimeResearchers : multiplierTimeResearchers,
        multiplierTimeTimeIs : multiplierTimeTimeIs,
        multiplierTimeTimeLeft : multiplierTimeTimeLeft,
        multiplierGainLv : multiplierGainLv,
        multiplierTimeLv : multiplierTimeLv,
        rebirthGain : rebirthGain,
        rebirthGainTest : rebirthGainTest,
        rebirthTime : rebirthTime,
        rebirthTimeTest : rebirthTimeTest,
        rebirthGainResearchers : rebirthGainResearchers,
        rebirthGainTimeIs : rebirthGainTimeIs,
        rebirthGainTimeLeft : rebirthGainTimeLeft,
        rebirthScale : rebirthScale,
        rebirthTimeResearchers : rebirthTimeResearchers,
        rebirthTimeTimeIs : rebirthTimeTimeIs,
        rebirthTimeTimeLeft : rebirthTimeTimeLeft,
        rebirthGainLv : rebirthGainLv,
        rebirthTimeLv : rebirthTimeLv,
        superRebirthGain : superRebirthGain,
        superRebirthGainTest : superRebirthGainTest,
        superRebirthTime : superRebirthTime,
        superRebirthTimeTest : superRebirthTimeTest,
        superRebirthGainResearchers : superRebirthGainResearchers,
        superRebirthGainTimeIs : superRebirthGainTimeIs,
        superRebirthGainTimeLeft : superRebirthGainTimeLeft,
        superRebirthScale : superRebirthScale,
        superRebirthTimeResearchers : superRebirthTimeResearchers,
        superRebirthTimeTimeIs : superRebirthTimeTimeIs,
        superRebirthTimeTimeLeft : superRebirthTimeTimeLeft,
        superRebirthGainLv : superRebirthGainLv,
        superRebirthTimeLv : superRebirthTimeLv,
        up2ReVis : up2ReVis,
        up3ReVis : up3ReVis,
        up4ReVis : up4ReVis,
        up6ReVis : up6ReVis,
        up7ReVis : up7ReVis,
        up8ReVis : up8ReVis,
        up9ReVis : up9ReVis,
        up10ReVis : up10ReVis,
        up11ReVis : up11ReVis,
        up12ReVis : up12ReVis,
        RVis : RVis,
        sRVis : sRVis,
    };
    localStorage.setItem("mojaGraSave", JSON.stringify(save));
    console.log("Gra zapisana!");
}
//=====(WCZYTYWANIE)=====
function loadGame() {
    let savedData = localStorage.getItem("mojaGraSave");
    if (savedData) {
        let save = JSON.parse(savedData);
        //=====(ZMIENNE DO WCZYTYWANIA)=====
        money = save.money;
        multiplier = save.multiplier;
        rebirth = save.rebirth;
        superRebirth = save.superRebirth;
        mega = save.mega;
        up1Count = save.up1Count;
        up1Cost = save.up1Cost;
        up1Boost = save.up1Boost;
        up2Count = save.up2Count;
        up2Cost = save.up2Cost;
        up2Boost = save.up2Boost;
        up2Active = save.up2Active;
        up3Count = save.up3Count;
        up3Cost = save.up3Cost;
        up3Boost = save.up3Boost;
        up4Count = save.up4Count;
        up4Cost = save.up4Cost;
        up4Boost = save.up4Boost;
        up4Active = save.up4Active;
        playTime = save.playTime;
        up5Count = save.up5Count;
        up5Cost = save.up5Cost;
        up5Boost = save.up5Boost;
        up5Active = save.up5Active;
        up6Count = save.up6Count;
        up6Cost = save.up6Cost;
        up6Boost = save.up6Boost;
        up7Count = save.up7Count;
        up7Cost = save.up7Cost;
        up7Boost = save.up7Boost;
        up8Count = save.up8Count;
        up8Cost = save.up8Cost;
        up8Boost = save.up8Boost;
        up8Active = save.up8Active;
        up9Count = save.up9Count;
        up9Active = save.up9Active;
        up9Cost = save.up9Cost;
        toUpgradeVis = save.toUpgradeVis;
        up3Vis = save.up3Vis;
        up4Vis = save.up4Vis;
        up5Vis = save.up5Vis;
        up6Vis = save.up6Vis;
        up7Vis = save.up7Vis;
        up8Vis = save.up8Vis;
        up9Vis = save.up9Vis;
        SRVis = save.SRVis;
        SRUpgVis = save.SRUpgVis;
        ToResearchVis = save.ToResearchVis;
        researchers = save.researchers;
        researchersMoneyCost = save.researchersMoneyCost;
        researchersMultiplierCost = save.researchersMultiplierCost;
        researchersRebirthCost = save.researchersRebirthCost;
        researchersSuperRebirthCost = save.researchersSuperRebirthCost;
        researchSpeedMoneyCost = save.researchSpeedMoneyCost;
        researchSpeedMultiplierCost = save.researchSpeedMultiplierCost;
        researchSpeedRebirthCost = save.researchSpeedRebirthCost;
        researchSpeedSuperRebirthCost = save.researchSpeedSuperRebirthCost;
        researchSpeedMoneyMulti = save.researchSpeedMoneyMulti;
        researchSpeedMultiplierMulti = save.researchSpeedMultiplierMulti;
        researchSpeedRebirthMulti = save.researchSpeedRebirthMulti;
        researchSpeedSuperRebirthMulti = save.researchSpeedSuperRebirthMulti;
        currentResearchers = save.currentResearchers;
        researchTick = save.researchTick;
        up1Researchers = save.up1Researchers;
        up1TimeIs = save.up1TimeIs;
        up1TimeLeft = save.up1TimeLeft;
        up1Lv = save.up1Lv;
        up1Scale = save.up1Scale;
        up1BoostRe = save.up1BoostRe;
        up2Researchers = save.up2Researchers;
        up2TimeIs = save.up2TimeIs;
        up2TimeLeft = save.up2TimeLeft;
        up2Lv = save.up2Lv;
        up2Scale = save.up2Scale;
        up2BoostRe = save.up2BoostRe;
        up3Researchers = save.up3Researchers;
        up3TimeIs = save.up3TimeIs;
        up3TimeLeft = save.up3TimeLeft;
        up3Lv = save.up3Lv;
        up3Scale = save.up3Scale;
        up3BoostRe = save.up3BoostRe;
        up4Researchers = save.up4Researchers;
        up4TimeIs = save.up4TimeIs;
        up4TimeLeft = save.up4TimeLeft;
        up4Lv = save.up4Lv;
        up4Scale = save.up4Scale;
        up4BoostRe = save.up4BoostRe;
        up4BoostActive = save.up4BoostActive;
        up5Researchers = save.up5Researchers;
        up5TimeIs = save.up5TimeIs;
        up5TimeLeft = save.up5TimeLeft;
        up5Lv = save.up5Lv;
        up5Scale = save.up5Scale;
        up5BoostRe = save.up5BoostRe;
        up6Researchers = save.up6Researchers;
        up6TimeIs = save.up6TimeIs;
        up6TimeLeft = save.up6TimeLeft;
        up6Lv = save.up6Lv;
        up6Scale = save.up6Scale;
        up6BoostRe = save.up6BoostRe;
        up7Researchers = save.up7Researchers;
        up7TimeIs = save.up7TimeIs;
        up7TimeLeft = save.up7TimeLeft;
        up7Lv = save.up7Lv;
        up7Scale = save.up7Scale;
        up7BoostRe = save.up7BoostRe;
        up8Researchers = save.up8Researchers;
        up8TimeIs = save.up8TimeIs;
        up8TimeLeft = save.up8TimeLeft;
        up8Lv = save.up8Lv;
        up8Scale = save.up8Scale;
        up8BoostRe = save.up8BoostRe;
        up8BoostActive = save.up8BoostActive;
        up9Researchers = save.up9Researchers;
        up9TimeIs = save.up9TimeIs;
        up9TimeLeft = save.up9TimeLeft;
        up9Lv = save.up9Lv;
        up9Scale = save.up9Scale;
        up9BoostRe = save.up9BoostRe;
        up9BoostActive = save.up9BoostActive;
        up10Researchers = save.up10Researchers;
        up10TimeIs = save.up10TimeIs;
        up10TimeLeft = save.up10TimeLeft;
        up10Lv = save.up10Lv;
        up10Scale = save.up10Scale;
        up10BoostRe = save.up10BoostRe;
        up11Researchers = save.up11Researchers;
        up11TimeIs = save.up11TimeIs;
        up11TimeLeft = save.up11TimeLeft;
        up11Lv = save.up11Lv;
        up11Scale = save.up11Scale;
        up11BoostRe = save.up11BoostRe;
        up11BoostActive = save.up11BoostActive;
        up12Researchers = save.up12Researchers;
        up12TimeIs = save.up12TimeIs;
        up12TimeLeft = save.up12TimeLeft;
        up12Lv = save.up12Lv;
        up12Scale = save.up12Scale;
        up12BoostRe = save.up12BoostRe;
        up12BoostActive = save.up12BoostActive;
        multiplierGain = save.multiplierGain;
        multiplierGainTest = save.multiplierGainTest;
        multiplierTime = save.multiplierTime;
        multiplierTimeTest = save.multiplierTimeTest;
        multiplierGainResearchers = save.multiplierGainResearchers;
        multiplierGainTimeIs = save.multiplierGainTimeIs;
        multiplierGainTimeLeft = save.multiplierGainTimeLeft;
        multiplierScale = save.multiplierScale;
        multiplierTimeResearchers = save.multiplierTimeResearchers;
        multiplierTimeTimeIs = save.multiplierTimeTimeIs;
        multiplierTimeTimeLeft = save.multiplierTimeTimeLeft;
        multiplierGainLv = save.multiplierGainLv;
        multiplierTimeLv = save.multiplierTimeLv;
        rebirthGain = save.rebirthGain;
        rebirthGainTest = save.rebirthGainTest;
        rebirthTime = save.rebirthTime;
        rebirthTimeTest = save.rebirthTimeTest;
        rebirthGainResearchers = save.rebirthGainResearchers;
        rebirthGainTimeIs = save.rebirthGainTimeIs;
        rebirthGainTimeLeft = save.rebirthGainTimeLeft;
        rebirthScale = save.rebirthScale;
        rebirthTimeResearchers = save.rebirthTimeResearchers;
        rebirthTimeTimeIs = save.rebirthTimeTimeIs;
        rebirthTimeTimeLeft = save.rebirthTimeTimeLeft;
        rebirthGainLv = save.rebirthGainLv;
        rebirthTimeLv = save.rebirthTimeLv;
        superRebirthGain = save.superRebirthGain;
        superRebirthGainTest = save.superRebirthGainTest;
        superRebirthTime = save.superRebirthTime;
        superRebirthTimeTest = save.superRebirthTimeTest;
        superRebirthGainResearchers = save.superRebirthGainResearchers;
        superRebirthGainTimeIs = save.superRebirthGainTimeIs;
        superRebirthGainTimeLeft = save.superRebirthGainTimeLeft;
        superRebirthScale = save.superRebirthScale;
        superRebirthTimeResearchers = save.superRebirthTimeResearchers;
        superRebirthTimeTimeIs = save.superRebirthTimeTimeIs;
        superRebirthTimeTimeLeft = save.superRebirthTimeTimeLeft;
        superRebirthGainLv = save.superRebirthGainLv;
        superRebirthTimeLv = save.superRebirthTimeLv;
        up2ReVis = save.up2ReVis;
        up3ReVis = save.up3ReVis;
        up4ReVis = save.up4ReVis;
        up6ReVis = save.up6ReVis;
        up7ReVis = save.up7ReVis;
        up8ReVis = save.up8ReVis;
        up9ReVis = save.up9ReVis;
        up10ReVis = save.up10ReVis;
        up11ReVis = save.up11ReVis;
        up12ReVis = save.up12ReVis;
        RVis = save.RVis;
        sRVis = save.sRVis;
        console.log("Gra wczytana!");
    }
}
function exportSave() {
    let saveString = localStorage.getItem("mojaGraSave");
    if (!saveString) {
        alert("There is no save to export!");
        return;
    }
    let encoded = btoa(saveString);
    document.getElementById("import-input").value = encoded;
    navigator.clipboard.writeText(encoded).then(() => {
        let alertElement = document.getElementById("export-alert");
        alertElement.className = "export-alert-visible";
        setTimeout(() => {
            alertElement.className = "export-alert-hidden";
        }, 3000);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}
function importSave() {
    let encoded = document.getElementById("import-input").value;
    try {
        let saveString = atob(encoded); // Base64 → JSON
        JSON.parse(saveString); // sprawdź czy to poprawny JSON
        localStorage.setItem("mojaGraSave", saveString);
        location.reload();
    } catch(e) {
        alert("Wrong saving file!");
    }
}
//=====(HARD RESET)=====
function resetGame() {
    localStorage.removeItem("mojaGraSave");
    localStorage.removeItem("gameTheme");
    location.reload();
}
//=====(FUNKCJA DO FORMATOWANIA)=====
function formatujLiczbe(n) {
    if (n === null || n === undefined || isNaN(n)) return "0";
    if (!isFinite(n)) return "∞";
    n = Number(n); // upewnij się że to liczba, nie string
    if (n < 1000) {
        return parseFloat(n.toFixed(2));
    } else if (n < 1000000) {
        return parseFloat((n / 1000).toFixed(2)) + "k";
    } else if (n < 1000000000) {
        return parseFloat((n / 1000000).toFixed(2)) + "m";
    } else {
        let wykladnik = Math.floor(Math.log10(n));
        let mantysa = parseFloat((n / Math.pow(10, wykladnik)).toFixed(2));
        return mantysa + "e" + wykladnik;
    }
}
//=====(MENU)=====
function switchMainTab(id) {
    const mainTabs = document.querySelectorAll('.main-tab');
    mainTabs.forEach(tab => tab.classList.remove('active'));
    const activeTab = document.getElementById(id);
    activeTab.classList.add('active');
    const firstSub = activeTab.querySelector('.sub-tab');
    if (firstSub) {
        switchSubTab(firstSub.id);
    }
}
//=====(MENU)======
function switchSubTab(id) {
    const currentMain = document.querySelector('.main-tab.active');
    const subTabs = currentMain.querySelectorAll('.sub-tab');
    subTabs.forEach(sub => sub.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}
function round(liczba) {
    return Math.round(liczba * 100) / 100;
}
//=====(BACKGROUND)======
function changeTheme(themeName) {
    document.body.classList.remove('theme-white', 'theme-gray', 'theme-black');
    if (themeName === 'white') {
        document.body.classList.add('theme-white');
    } else if (themeName === 'gray') {
        document.body.classList.add('theme-gray');
    } else if (themeName === 'black') {
        document.body.classList.add('theme-black');
    }
    localStorage.setItem("gameTheme", themeName);
}
function loadTheme() {
    let savedTheme = localStorage.getItem("gameTheme");
    if (savedTheme) {
        changeTheme(savedTheme);
    } else {
        changeTheme('gray');
    }
}
//=====(PRZYCISKI)=====
function buyMultiplier() {
    if (money >= 100) {
        money -= 100;
        multiplier += 1 * (rebirth + 1) * up2Boost * up3Boost * up7Boost * up1BoostRe;
        updateUI();
    }
}
//=====
function buyRebirth() {
    if (multiplier >= 100) {
        money = 0;
        let gain = round(((Math.log10(multiplier + 1.01) - 1) ** 2) * (superRebirth + 1) * up4Boost * up5Boost * up7Boost * up1BoostRe);
        if (isFinite(gain) && gain > 0) rebirth += gain;
        multiplier = 0;
        updateUI();
    }
}
//=====
function buySuperRebirth() {
    if (rebirth >= 100) {
        money = 0;
        multiplier = 0;
        let gain = round(((Math.log10(rebirth + 1.01) - 1) ** 2.2) * (mega + 1) * up6Boost * up7Boost * up8Boost * up1BoostRe * up3BoostRe);
        if (isFinite(gain) && gain > 0) superRebirth += gain;
        rebirth = 0;
        updateUI();
    }
}
//=====
function buyMega() {
    if (superRebirth >= 100) {
        money = 0;
        multiplier = 0;
        rebirth = 0;
        let gain = round(((Math.log10(superRebirth + 1.01) - 1) ** 2.3) * up9BoostRe * up10BoostRe * up11BoostRe);
        if (isFinite(gain) && gain > 0) mega += gain;
        superRebirth = 0;
        updateUI();
    }
}
//=====(UPGRADE)=====
function Upgrade1() {
     if(money >= up1Cost && up1Count < up1Cap) {
         money -= up1Cost;
         up1Cost *= 1.31;
         up1Boost *= 1.24;
         up1Count++;
         updateUI();
     }
}
function Upgrade1Max(event){
    event.stopPropagation();
    while(money >= up1Cost && up1Count < up1Cap) {
        money -= up1Cost;
        up1Cost *= 1.4;
        up1Boost *= 1.10;
        up1Count++;
        updateUI();
    }
}
function Upgrade2() {
    if(money >= up2Cost && up2Count < 1) {
        money -= up2Cost;
        up2Active = true;
        up2Count++;
        updateUI();
    }
}
function Upgrade3() {
    if(multiplier >= up3Cost && up3Count < up3Cap) {
        multiplier -= up3Cost;
        up3Cost *= 1.33;
        up3Boost *= 1.65;
        up3Count++;
        updateUI();
    }
}
function Upgrade3Max() {
    while(multiplier >= up3Cost && up3Count < up3Cap) {
        multiplier -= up3Cost;
        up3Cost *= 1.4;
        up3Boost *= 1.15;
        up3Count++;
        updateUI();
    }
}
function Upgrade4() {
    if(multiplier >= up4Cost && up4Count < 1) {
        multiplier -= up4Cost;
        up4Active = true;
        up4Count++;
        updateUI();
    }
}
function Upgrade5() {
    if(rebirth >= up5Cost && up5Count < 1) {
        rebirth -= up5Cost;
        up5Active = true;
        up5Count++;
        updateUI();
    }
}
function Upgrade6() {
    if(rebirth >= up6Cost && up6Count < up6Cap) {
        rebirth -= up6Cost;
        up6Cost *= 1.05;
        up6Boost *= 1.05;
        up6Count++;
        updateUI();
    }
}
function Upgrade6Max() {
    while(rebirth >= up6Cost && up6Count < up6Cap) {
        rebirth -= up6Cost;
        up6Cost *= 1.05;
        up6Boost *= 1.05;
        up6Count++;
        updateUI();
    }
}
function Upgrade7() {
    if(superRebirth >= up7Cost && up7Count < 5) {
        superRebirth -= up7Cost;
        up7Cost *= 1.67;
        up7Boost *= 1.8;
        up7Count++;
        updateUI();
    }
}
function Upgrade7Max() {
    while (superRebirth >= up7Cost && up7Count < 5) {
        superRebirth -= up7Cost;
        up7Cost *= 1.67;
        up7Boost *= 1.8;
        up7Count++;
        updateUI();
    }
}
function Upgrade8() {
    if(superRebirth >= up8Cost && up8Count < 1) {
        superRebirth -= up8Cost;
        up8Active = true;
        up8Count++;
        updateUI();
    }
}
function Upgrade9() {
    if(superRebirth >= up9Cost && up9Count < 1) {
        superRebirth -= up9Cost;
        up9Active = true;
        up9Count++;
        updateUI();
    }
}
//=====(PRZYCISKI RESEARCHERS)=====
function BuyResearchersMoney() {
    if(money >= researchersMoneyCost){
        money -= researchersMoneyCost;
        researchersMoneyCost *= 30;
        researchers += 1;
        currentResearchers += 1;
    }
}
function BuyResearchersMoneyMax(event) {
    event.stopPropagation();
    while(money >= researchersMoneyCost){
        money -= researchersMoneyCost;
        researchersMoneyCost *= 30;
        researchers += 1;
        currentResearchers += 1;
    }
}
function BuyResearchersMultiplier() {
    if(multiplier >= researchersMultiplierCost){
        multiplier -= researchersMultiplierCost;
        researchersMultiplierCost *= 25;
        researchers += 1;
        currentResearchers += 1;
    }
}
function BuyResearchersMultiplierMax(event) {
    event.stopPropagation();
    while(multiplier >= researchersMultiplierCost){
        multiplier -= researchersMultiplierCost;
        researchersMultiplierCost *= 25;
        researchers += 1;
        currentResearchers += 1;
    }
}
function BuyResearchersRebirth() {
    if(rebirth >= researchersRebirthCost){
        rebirth -= researchersRebirthCost;
        researchersRebirthCost *= 20;
        researchers += 1;
        currentResearchers += 1;
    }
}
function BuyResearchersRebirthMax(event) {
    event.stopPropagation();
    while(rebirth >= researchersRebirthCost){
        rebirth -= researchersRebirthCost;
        researchersRebirthCost *= 20;
        researchers += 1;
        currentResearchers += 1;
    }
}
function BuyResearchersSuperRebirth() {
    if(superRebirth >= researchersSuperRebirthCost){
        superRebirth -= researchersSuperRebirthCost;
        researchersSuperRebirthCost *= 11;
        researchers += 1;
        currentResearchers += 1;
    }
}
function BuyResearchersSuperRebirthMax(event) {
    event.stopPropagation();
    while(superRebirth >= researchersSuperRebirthCost){
        superRebirth -= researchersSuperRebirthCost;
        researchersSuperRebirthCost *= 11;
        researchers += 1;
        currentResearchers += 1;
    }
}
function BuyResearchSpeedMoney() {
    if(money >= researchSpeedMoneyCost){
        money -= researchSpeedMoneyCost;
        researchSpeedMoneyCost *= 3;
        researchSpeedMoneyMulti += 0.01;
    }
}
function BuyResearchSpeedMoneyMax(event) {
    event.stopPropagation();
    while(money >= researchSpeedMoneyCost){
        money -= researchSpeedMoneyCost;
        researchSpeedMoneyCost *= 3;
        researchSpeedMoneyMulti += 0.01;
    }
}
function BuyResearchSpeedMultiplier() {
    if(multiplier >= researchSpeedMultiplierCost){
        multiplier -= researchSpeedMultiplierCost;
        researchSpeedMultiplierCost *= 2.5;
        researchSpeedMultiplierMulti += 0.01;
    }
}
function BuyResearchSpeedMultiplierMax(event) {
    event.stopPropagation();
    while(multiplier >= researchSpeedMultiplierCost){
        multiplier -= researchSpeedMultiplierCost;
        researchSpeedMultiplierCost *= 2.5;
        researchSpeedMultiplierMulti += 0.01;
    }
}
function BuyResearchSpeedRebirth() {
    if(rebirth >= researchSpeedRebirthCost){
        rebirth -= researchSpeedRebirthCost;
        researchSpeedRebirthCost *= 2;
        researchSpeedRebirthMulti *= 1.51;
    }
}
function BuyResearchSpeedRebirthMax(event) {
    event.stopPropagation();
    while(rebirth >= researchSpeedRebirthCost){
        rebirth -= researchSpeedRebirthCost;
        researchSpeedRebirthCost *= 2;
        researchSpeedRebirthMulti += 0.01;
    }
}
function BuyResearchSpeedSuperRebirth() {
    if(superRebirth >= researchSpeedSuperRebirthCost){
        superRebirth -= researchSpeedSuperRebirthCost;
        researchSpeedSuperRebirthCost *= 1.5;
        researchSpeedSuperRebirthMulti += 0.01;
    }
}
function BuyResearchSpeedSuperRebirthMax(event) {
    event.stopPropagation();
    while(superRebirth >= researchSpeedSuperRebirthCost){
        superRebirth -= researchSpeedSuperRebirthCost;
        researchSpeedSuperRebirthCost *= 1.5;
        researchSpeedSuperRebirthMulti += 0.01;
    }
}
//=====(RESEARCHERS SPENDING)=====
function Recall() {
    up1Researchers = 0;
    up2Researchers = 0;
    up3Researchers = 0;
    up4Researchers = 0;
    up5Researchers = 0;
    up6Researchers = 0;
    up7Researchers = 0;
    up8Researchers = 0;
    up9Researchers = 0;
    up10Researchers = 0;
    up11Researchers = 0;
    up12Researchers = 0;
    multiplierTimeResearchers = 0;
    multiplierGainResearchers = 0;
    rebirthTimeResearchers = 0;
    rebirthGainResearchers = 0;
    superRebirthTimeResearchers = 0;
    currentResearchers = researchers;
}
function reserchers_add1(){
    researchersSpending += 1;
}
function reserchers_add10(){
    researchersSpending += 10;
}
function reserchers_add100(){
    researchersSpending += 100;
}
function reserchers_min1(){
    researchersSpending -= 1;
}
function reserchers_min10(){
    researchersSpending -= 10;
}
function reserchers_min100(){
    researchersSpending -= 100;
}
function reserchers_pro10(){
    researchersSpending = Math.floor(currentResearchers / 10);
}
function reserchers_pro25(){
    researchersSpending = Math.floor(currentResearchers / 4);
}
function reserchers_pro100(){
    researchersSpending = currentResearchers;
}
function reserchers_reset(){
    researchersSpending = 0;
}
//=====(UPGRADE RESEARCH)=====
function upgrade1Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up1Researchers) {
            up1Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up1Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade1Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up1Researchers > 0) {
        up1TimeIs += up1Researchers * (wynik / 2);
        if (up1TimeIs >= up1TimeLeft) {
            up1TimeIs -= up1TimeLeft;
            up1TimeLeft *= up1Scale;
            up1BoostRe *= 1.1;
            up1Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade1Active, Math.round(researchTick / 2));
}
function upgrade2Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up2Researchers) {
            up2Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up2Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade2Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up2Researchers > 0) {
        up2TimeIs += up2Researchers * (wynik / 2);
        if (up2TimeIs >= up2TimeLeft) {
            up2TimeIs -= up2TimeLeft;
            up2TimeLeft *= up2Scale;
            up2BoostRe += 1;
            up1Cap += 1;
            up3Cap += 1;
            up6Cap += 1;
            up2Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade2Active, Math.round(researchTick / 2));
}
function upgrade3Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up3Researchers) {
            up3Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up3Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade3Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up3Researchers > 0) {
        up3TimeIs += up3Researchers * (wynik / 2);
        if (up3TimeIs >= up3TimeLeft) {
            up3TimeIs -= up3TimeLeft;
            up3TimeLeft *= up3Scale;
            up3BoostRe *= 1.2;
            up3Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade3Active, Math.round(researchTick / 2));
}
function upgrade4Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up4Researchers) {
            up4Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up4Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade4Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up4Researchers > 0) {
        up4TimeIs += up4Researchers * (wynik / 2);
        if (up4TimeIs >= up4TimeLeft) {
            up4TimeIs -= up4TimeLeft;
            up4TimeLeft *= up4Scale;
            up4BoostRe += 0.2;
            up4BoostActive = true;
            up4Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade4Active, Math.round(researchTick / 2));
}
function upgrade5Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up5Researchers) {
            up5Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up5Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade5Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up5Researchers > 0) {
        up5TimeIs += up5Researchers * (wynik / 2);
        if (up5TimeIs >= up5TimeLeft) {
            up5TimeIs -= up5TimeLeft;
            up5TimeLeft *= up5Scale;
            if (researchTick >= 800){
                researchTick -= 40;
                up5BoostRe += 40;
            }
            else if(researchTick >= 700){
                researchTick -= 20;
                up5BoostRe += 20;
            }
            else if(researchTick >= 400){
                researchTick -= 10;
                up5BoostRe += 10;
            }
            else if(researchTick >= 200){
                researchTick -= 2;
                up5BoostRe += 2;
            }
            else if(researchTick > 100) {
                researchTick -= 1;
                up5BoostRe += 1;
            }
            up5Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade5Active, Math.round(researchTick / 2));
}
function upgrade6Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up6Researchers) {
            up6Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up6Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade6Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up6Researchers > 0) {
        up6TimeIs += up6Researchers * (wynik / 2);
        if (up6TimeIs >= up6TimeLeft) {
            up6TimeIs -= up6TimeLeft;
            up6TimeLeft *= up6Scale;
            researchSpeedUpgradesMulti *= 1.2;
            up6BoostRe *= 1.2;
            up6Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade6Active, Math.round(researchTick / 2));
}
function upgrade7Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up7Researchers) {
            up7Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up7Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade7Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up7Researchers > 0) {
        up7TimeIs += up7Researchers * (wynik / 2);
        if (up7TimeIs >= up7TimeLeft) {
            up7TimeIs -= up7TimeLeft;
            up7TimeLeft *= up7Scale;
            researchers += 1;
            currentResearchers += 1;
            up7BoostRe += 1;
            up7Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade7Active, Math.round(researchTick / 2));
}
function upgrade8Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up8Researchers) {
            up8Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up8Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade8Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up8Researchers > 0) {
        up8TimeIs += up8Researchers * (wynik / 2);
        if (up8TimeIs >= up8TimeLeft) {
            up8TimeIs -= up8TimeLeft;
            up8TimeLeft *= up8Scale;
            up8BoostRe += 0.2;
            up8BoostActive = true;
            up8Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade8Active, Math.round(researchTick / 2));
}
function upgrade9Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up9Researchers) {
            up9Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up9Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade9Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up9Researchers > 0) {
        up9TimeIs += up9Researchers * (wynik / 2);
        if (up9TimeIs >= up9TimeLeft) {
            up9TimeIs -= up9TimeLeft;
            up9TimeLeft *= up9Scale;
            up9BoostRe *= 1.15;
            up9BoostActive = true;
            up9Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade9Active, Math.round(researchTick / 2));
}
function upgrade10Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up10Researchers) {
            up10Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up10Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade10Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up10Researchers > 0) {
        up10TimeIs += up10Researchers * (wynik / 2);
        if (up10TimeIs >= up10TimeLeft) {
            up10TimeIs -= up10TimeLeft;
            up10TimeLeft *= up10Scale;

            up10BoostRe *= 1.05;
            up10Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade10Active, Math.round(researchTick / 2));
}
function upgrade11Research() {
    if (researchersSpending < 0) {
        if (Math.abs(researchersSpending) <= up11Researchers) {
            up11Researchers += researchersSpending;
            currentResearchers += Math.abs(researchersSpending);
        }
    }
    else if (researchersSpending > 0) {
        if (researchersSpending <= currentResearchers) {
            up11Researchers += researchersSpending;
            currentResearchers -= researchersSpending;
        }
    }
}
function upgrade11Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up11Researchers > 0) {
        up11TimeIs += up11Researchers * (wynik / 2);
        if (up11TimeIs >= up11TimeLeft) {
            up11TimeIs -= up11TimeLeft;
            up11TimeLeft *= up11Scale;
            up11BoostActive = true;
            up11Lv += 1;
        }
    }
    updateUI();
    setTimeout(upgrade11Active, Math.round(researchTick / 2));
}
function upgrade12Research() {
    if (up12Lv == 0){
        if (researchersSpending < 0) {
            if (Math.abs(researchersSpending) <= up12Researchers) {
                up12Researchers += researchersSpending;
                currentResearchers += Math.abs(researchersSpending);
            }
        }
        else if (researchersSpending > 0) {
            if (researchersSpending <= currentResearchers) {
                up12Researchers += researchersSpending;
                currentResearchers -= researchersSpending;
            }
        }
   }
}
function upgrade12Active() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (up12Researchers > 0 && up12Lv < 1) {
        up12TimeIs += up12Researchers * (wynik / 2);
        if (up12TimeIs >= up12TimeLeft) {
            up12TimeIs -= up12TimeLeft;
            up12TimeLeft *= up12Scale;
            up12BoostActive = true;
            up12Lv = "MAX";
        }
    }
    if (up12Lv == "MAX") {
        currentResearchers += up12Researchers;
        up12Researchers = 0;
    }
    updateUI();
    setTimeout(upgrade12Active, Math.round(researchTick / 2));
}
function multiplierGainAutomation() {
    if (multiplierGainTest != "MAX"){
        if (researchersSpending < 0) {
            if (Math.abs(researchersSpending) <= multiplierGainResearchers) {
                multiplierGainResearchers += researchersSpending;
                currentResearchers += Math.abs(researchersSpending);
            }
        }
        else if (researchersSpending > 0) {
            if (researchersSpending <= currentResearchers) {
                multiplierGainResearchers += researchersSpending;
                currentResearchers -= researchersSpending;
            }
        }
    }
}
function multiplierGainAutomationActive() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (multiplierGainResearchers > 0 && multiplierGainTest != "MAX") {
        multiplierGainTimeIs += multiplierGainResearchers * (wynik / 2);
        if (multiplierGainTimeIs >= multiplierGainTimeLeft) {
            multiplierGainTimeIs -= multiplierGainTimeLeft;
            multiplierGainTimeLeft *= multiplierScale;
            if (multiplierGainLv == 0) {
                multiplierGain += 0.1;
                multiplierGainTest += 0.1;
            } else if (multiplierGainLv == 1) {
                multiplierGain += 0.1;
                multiplierGainTest += 0.3;
            } else if (multiplierGainLv == 2) {
                multiplierGain += 0.3;
                multiplierGainTest += 0.5;
            } else if (multiplierGainLv == 3) {
                multiplierGain += 0.5;
                multiplierGainTest += 1;
            } else if (multiplierGainLv == 4) {
                multiplierGain += 1;
                multiplierGainTest += 3;
            } else if (multiplierGainLv == 5) {
                multiplierGain += 3;
                multiplierGainTest += 5;
            } else if (multiplierGainLv == 6) {
                multiplierGain += 5;
                multiplierGainTest += 10;
            } else if (multiplierGainLv == 7) {
                multiplierGain += 10;
                multiplierGainTest += 5;
            } else if (multiplierGainLv == 8) {
                multiplierGain += 5;
                multiplierGainTest += 15;
            } else if (multiplierGainLv == 9) {
                multiplierGain += 15;
                multiplierGainTest += 10;
            } else if (multiplierGainLv == 10) {
                multiplierGain += 10;
                multiplierGainTest += 20;
            } else if (multiplierGainLv == 11) {
                multiplierGain += 20;
                multiplierGainTest += 30;
            } else if (multiplierGainLv == 12) {
                multiplierGain += 30;
                multiplierGainTest = "MAX"
            }
            multiplierGainLv += 1;
        }
        if (multiplierGainTest == "MAX") {
            currentResearchers += multiplierGainResearchers;
            multiplierGainResearchers = 0;
        }

    }
        updateUI();
        setTimeout(multiplierGainAutomationActive, Math.round(researchTick / 2));
}
function multiplierTimeAutomation() {
    if (multiplierTimeTest != "MAX"){
        if (researchersSpending < 0) {
            if (Math.abs(researchersSpending) <= multiplierTimeResearchers) {
                multiplierTimeResearchers += researchersSpending;
                currentResearchers += Math.abs(researchersSpending);
            }
        }
        else if (researchersSpending > 0) {
            if (researchersSpending <= currentResearchers) {
                multiplierTimeResearchers += researchersSpending;
                currentResearchers -= researchersSpending;
            }
        }
    }
}
function multiplierTimeAutomationActive() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (multiplierTimeResearchers > 0 && multiplierTimeTest != "MAX") {
        multiplierTimeTimeIs += multiplierTimeResearchers * (wynik / 2);
        if (multiplierTimeTimeIs >= multiplierTimeTimeLeft) {
            multiplierTimeTimeIs -= multiplierTimeTimeLeft;
            multiplierTimeTimeLeft *= multiplierScale;
            if (multiplierTimeLv == 0) {
                multiplierTime -= 2;
                multiplierTimeTest -= 3;
            }
            else if (multiplierTimeLv == 1) {
                multiplierTime -= 3;
                multiplierTimeTest -= 1;
            }
            else if (multiplierTimeLv == 2) {
                multiplierTime -= 1;
                multiplierTimeTest -= 1;
            }
            else if (multiplierTimeLv == 3) {
                multiplierTime -= 1;
                multiplierTimeTest -= 1;
            }
            else if (multiplierTimeLv == 4) {
                multiplierTime -= 1;
                multiplierTimeTest -= 0.5;
            }
            else if (multiplierTimeLv == 5) {
                multiplierTime -= 0.5;
                multiplierTimeTest -= 0.5;
            }
            else if (multiplierTimeLv == 6) {
                multiplierTime -= 0.5;
                multiplierTimeTest -= 0.1;
            }
            else if (multiplierTimeLv == 7) {
                multiplierTime -= 0.1;
                multiplierTimeTest -= 0.1;
            }
            else if (multiplierTimeLv == 8) {
                multiplierTime -= 0.1;
                multiplierTimeTest -= 0.1;
            }
            else if (multiplierTimeLv == 9) {
                multiplierTime -= 0.1;
                multiplierTimeTest -= 0.1;
            }
            else if (multiplierTimeLv == 10) {
                multiplierTime -= 0.1;
                multiplierTimeTest -= 0.1;
            }
            else if (multiplierTimeLv == 11) {
                multiplierTime -= 0.1;
                multiplierTimeTest = "MAX";
            }
            multiplierTimeLv += 1;
        }
        if (multiplierTimeTest == "MAX") {
            currentResearchers += multiplierTimeResearchers;
            multiplierTimeResearchers = 0;
        }
    }
    updateUI();
    setTimeout(multiplierTimeAutomationActive, Math.round(researchTick / 2));
}
function rebirthGainAutomation() {
    if (rebirthGainTest != "MAX"){
        if (researchersSpending < 0) {
            if (Math.abs(researchersSpending) <= rebirthGainResearchers) {
                rebirthGainResearchers += researchersSpending;
                currentResearchers += Math.abs(researchersSpending);
            }
        }
        else if (researchersSpending > 0) {
            if (researchersSpending <= currentResearchers) {
                rebirthGainResearchers += researchersSpending;
                currentResearchers -= researchersSpending;
            }
        }
    }
}
function rebirthGainAutomationActive() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (rebirthGainResearchers > 0 && rebirthGainTest != "MAX") {
        rebirthGainTimeIs += rebirthGainResearchers * (wynik / 2);
        if (rebirthGainTimeIs >= rebirthGainTimeLeft) {
            rebirthGainTimeIs -= rebirthGainTimeLeft;
            rebirthGainTimeLeft *= rebirthScale;
            if (rebirthGainLv == 0) {
                rebirthGain += 0.1;
                rebirthGainTest += 0.1;
            } else if (rebirthGainLv == 1) {
                rebirthGain += 0.1;
                rebirthGainTest += 0.3;
            } else if (rebirthGainLv == 2) {
                rebirthGain += 0.3;
                rebirthGainTest += 0.5;
            } else if (rebirthGainLv == 3) {
                rebirthGain += 0.5;
                rebirthGainTest += 1;
            } else if (rebirthGainLv == 4) {
                rebirthGain += 1;
                rebirthGainTest += 3;
            } else if (rebirthGainLv == 5) {
                rebirthGain += 3;
                rebirthGainTest += 5;
            } else if (rebirthGainLv == 6) {
                rebirthGain += 5;
                rebirthGainTest += 10;
            } else if (rebirthGainLv == 7) {
                rebirthGain += 10;
                rebirthGainTest += 5;
            } else if (rebirthGainLv == 8) {
                rebirthGain += 5;
                rebirthGainTest += 15;
            } else if (rebirthGainLv == 9) {
                rebirthGain += 15;
                rebirthGainTest += 10;
            } else if (rebirthGainLv == 10) {
                rebirthGain += 10;
                rebirthGainTest += 20;
            } else if (rebirthGainLv == 11) {
                rebirthGain += 20;
                rebirthGainTest += 30;
            } else if (rebirthGainLv == 12) {
                rebirthGain += 30;
                rebirthGainTest = "MAX"
            }
            rebirthGainLv += 1;
        }
        if (rebirthGainTest == "MAX") {
            currentResearchers += rebirthGainResearchers;
            rebirthGainResearchers = 0;
        }

    }
    updateUI();
    setTimeout(rebirthGainAutomationActive, Math.round(researchTick / 2));
}
function rebirthTimeAutomation() {
    if (rebirthTimeTest != "MAX"){
        if (researchersSpending < 0) {
            if (Math.abs(researchersSpending) <= rebirthTimeResearchers) {
                rebirthTimeResearchers += researchersSpending;
                currentResearchers += Math.abs(researchersSpending);
            }
        }
        else if (researchersSpending > 0) {
            if (researchersSpending <= currentResearchers) {
                rebirthTimeResearchers += researchersSpending;
                currentResearchers -= researchersSpending;
            }
        }
    }
}
function rebirthTimeAutomationActive() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (rebirthTimeResearchers > 0 && rebirthTimeTest != "MAX") {
        rebirthTimeTimeIs += rebirthTimeResearchers * (wynik / 2);
        if (rebirthTimeTimeIs >= rebirthTimeTimeLeft) {
            rebirthTimeTimeIs -= rebirthTimeTimeLeft;
            rebirthTimeTimeLeft *= rebirthScale;
            if (rebirthTimeLv == 0) {
                rebirthTime -= 2;
                rebirthTimeTest -= 3;
            }
            else if (rebirthTimeLv == 1) {
                rebirthTime -= 3;
                rebirthTimeTest -= 1;
            }
            else if (rebirthTimeLv == 2) {
                rebirthTime -= 1;
                rebirthTimeTest -= 1;
            }
            else if (rebirthTimeLv == 3) {
                rebirthTime -= 1;
                rebirthTimeTest -= 1;
            }
            else if (rebirthTimeLv == 4) {
                rebirthTime -= 1;
                rebirthTimeTest -= 0.5;
            }
            else if (rebirthTimeLv == 5) {
                rebirthTime -= 0.5;
                rebirthTimeTest -= 0.5;
            }
            else if (rebirthTimeLv == 6) {
                rebirthTime -= 0.5;
                rebirthTimeTest -= 0.1;
            }
            else if (rebirthTimeLv == 7) {
                rebirthTime -= 0.1;
                rebirthTimeTest -= 0.1;
            }
            else if (rebirthTimeLv == 8) {
                rebirthTime -= 0.1;
                rebirthTimeTest -= 0.1;
            }
            else if (rebirthTimeLv == 9) {
                rebirthTime -= 0.1;
                rebirthTimeTest -= 0.1;
            }
            else if (rebirthTimeLv == 10) {
                rebirthTime -= 0.1;
                rebirthTimeTest -= 0.1;
            }
            else if (rebirthTimeLv == 11) {
                rebirthTime -= 0.1;
                rebirthTimeTest = "MAX";
            }
            rebirthTimeLv += 1;
        }
        if (rebirthTimeTest == "MAX") {
            currentResearchers += rebirthTimeResearchers;
            rebirthTimeResearchers = 0;
        }
    }
    updateUI();
    setTimeout(rebirthTimeAutomationActive, Math.round(researchTick / 2));
}
function superRebirthGainAutomation() {
    if (superRebirthGainTest != "MAX"){
        if (researchersSpending < 0) {
            if (Math.abs(researchersSpending) <= superRebirthGainResearchers) {
                superRebirthGainResearchers += researchersSpending;
                currentResearchers += Math.abs(researchersSpending);
            }
        }
        else if (researchersSpending > 0) {
            if (researchersSpending <= currentResearchers) {
                superRebirthGainResearchers += researchersSpending;
                currentResearchers -= researchersSpending;
            }
        }
    }
}
function superRebirthGainAutomationActive() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (superRebirthGainResearchers > 0 && superRebirthGainTest != "MAX") {
        superRebirthGainTimeIs += superRebirthGainResearchers * (wynik / 2);
        if (superRebirthGainTimeIs >= superRebirthGainTimeLeft) {
            superRebirthGainTimeIs -= superRebirthGainTimeLeft;
            superRebirthGainTimeLeft *= superRebirthScale;
            if (superRebirthGainLv == 0) {
                superRebirthGain += 0.1;
                superRebirthGainTest += 0.1;
            } else if (superRebirthGainLv == 1) {
                superRebirthGain += 0.1;
                superRebirthGainTest += 0.3;
            } else if (superRebirthGainLv == 2) {
                superRebirthGain += 0.3;
                superRebirthGainTest += 0.5;
            } else if (superRebirthGainLv == 3) {
                superRebirthGain += 0.5;
                superRebirthGainTest += 1;
            } else if (superRebirthGainLv == 4) {
                superRebirthGain += 1;
                superRebirthGainTest += 3;
            } else if (superRebirthGainLv == 5) {
                superRebirthGain += 3;
                superRebirthGainTest += 5;
            } else if (superRebirthGainLv == 6) {
                superRebirthGain += 5;
                superRebirthGainTest += 10;
            } else if (superRebirthGainLv == 7) {
                superRebirthGain += 10;
                superRebirthGainTest += 5;
            } else if (superRebirthGainLv == 8) {
                superRebirthGain += 5;
                superRebirthGainTest += 15;
            } else if (superRebirthGainLv == 9) {
                superRebirthGain += 15;
                superRebirthGainTest += 10;
            } else if (superRebirthGainLv == 10) {
                superRebirthGain += 10;
                superRebirthGainTest += 20;
            } else if (superRebirthGainLv == 11) {
                superRebirthGain += 20;
                superRebirthGainTest += 30;
            } else if (superRebirthGainLv == 12) {
                superRebirthGain += 30;
                superRebirthGainTest = "MAX"
            }
            superRebirthGainLv += 1;
        }
        if (superRebirthGainTest == "MAX") {
            currentResearchers += superRebirthGainResearchers;
            superRebirthGainResearchers = 0;
        }

    }
    updateUI();
    setTimeout(superRebirthGainAutomationActive, Math.round(researchTick / 2));
}
function superRebirthTimeAutomation() {
    if (superRebirthTimeTest != "MAX"){
        if (researchersSpending < 0) {
            if (Math.abs(researchersSpending) <= superRebirthTimeResearchers) {
                superRebirthTimeResearchers += researchersSpending;
                currentResearchers += Math.abs(researchersSpending);
            }
        }
        else if (researchersSpending > 0) {
            if (researchersSpending <= currentResearchers) {
                superRebirthTimeResearchers += researchersSpending;
                currentResearchers -= researchersSpending;
            }
        }
    }
}
function superRebirthTimeAutomationActive() {
    let wynik = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    if (superRebirthTimeResearchers > 0 && superRebirthTimeTest != "MAX") {
        superRebirthTimeTimeIs += superRebirthTimeResearchers * (wynik / 2);
        if (superRebirthTimeTimeIs >= superRebirthTimeTimeLeft) {
            superRebirthTimeTimeIs -= superRebirthTimeTimeLeft;
            superRebirthTimeTimeLeft *= superRebirthScale;
            if (superRebirthTimeLv == 0) {
                superRebirthTime -= 2;
                superRebirthTimeTest -= 3;
            }
            else if (superRebirthTimeLv == 1) {
                superRebirthTime -= 3;
                superRebirthTimeTest -= 1;
            }
            else if (superRebirthTimeLv == 2) {
                superRebirthTime -= 1;
                superRebirthTimeTest -= 1;
            }
            else if (superRebirthTimeLv == 3) {
                superRebirthTime -= 1;
                superRebirthTimeTest -= 1;
            }
            else if (superRebirthTimeLv == 4) {
                superRebirthTime -= 1;
                superRebirthTimeTest -= 0.5;
            }
            else if (superRebirthTimeLv == 5) {
                superRebirthTime -= 0.5;
                superRebirthTimeTest -= 0.5;
            }
            else if (superRebirthTimeLv == 6) {
                superRebirthTime -= 0.5;
                superRebirthTimeTest -= 0.1;
            }
            else if (superRebirthTimeLv == 7) {
                superRebirthTime -= 0.1;
                superRebirthTimeTest -= 0.1;
            }
            else if (superRebirthTimeLv == 8) {
                superRebirthTime -= 0.1;
                superRebirthTimeTest -= 0.1;
            }
            else if (superRebirthTimeLv == 9) {
                superRebirthTime -= 0.1;
                superRebirthTimeTest -= 0.1;
            }
            else if (superRebirthTimeLv == 10) {
                superRebirthTime -= 0.1;
                superRebirthTimeTest -= 0.1;
            }
            else if (superRebirthTimeLv == 11) {
                superRebirthTime -= 0.1;
                superRebirthTimeTest = "MAX";
            }
            superRebirthTimeLv += 1;
        }
        if (superRebirthTimeTest == "MAX") {
            currentResearchers += superRebirthTimeResearchers;
            superRebirthTimeResearchers = 0;
        }
    }
    updateUI();
    setTimeout(superRebirthTimeAutomationActive, Math.round(researchTick / 2));
}
function mAutoGain() {
    let gain = 1 * (rebirth + 1) * up2Boost * up3Boost * up7Boost * up1BoostRe;
    if (gain > 0) {
        multiplier += gain * (multiplierGain / 100)
    }
    updateUI();
    setTimeout(mAutoGain, Math.round(multiplierTime * 1000));
}
function rAutoGain() {
    let gain = round(((Math.log10(multiplier + 1.01) - 1) ** 2) * (superRebirth + 1) * up4Boost * up5Boost * up7Boost * up1BoostRe);
    if (gain > 0) {
        rebirth += gain * (rebirthGain / 100)
    }
    updateUI();
    setTimeout(rAutoGain, Math.round(rebirthTime * 1000));
}
function srAutoGain() {
    let gain = round(((Math.log10(rebirth + 1.01) - 1) ** 2.2) * (mega + 1)  * up6Boost * up7Boost * up8Boost * up1BoostRe * up3BoostRe);
    if (gain > 0) {
        superRebirth += gain * (superRebirthGain / 100)
    }
    updateUI();
    setTimeout(srAutoGain, Math.round(superRebirthTime * 1000));
}
//=====(PRZYCISKI ADMIN)=====
function AdminM(){
    multiplier += adminX;
}
//=====
function AdminR(){
    rebirth += adminX;
}
//=====
function AdminRS(){
    superRebirth += adminX;
}
//=====
function AdminXReset(){
    adminX = 1;
}
//=====
function AdminX10(){
    adminX *= 10;
}
//=====
function AdminX100(){
    adminX *= 100;
}
//=====(AUTO KASA)=====
setInterval(() => {
    money += (multiplier + 1) * up1Boost * up7Boost * up1BoostRe;
    updateUI();
}, 100);
//=====(CZAS GRY)=====
setInterval(() => {
    playTime += 0.1
    updateUI();
}, 100);
//=====(AUTO ZAPIS)=====
setInterval(() => {
    saveGame();
}, 5000);
//=====(WCZYTYWANIE GRY)=====
window.onload = function() {
    loadGame();
    loadTheme();
    upgrade1Active();
    upgrade2Active();
    upgrade3Active();
    upgrade4Active();
    upgrade5Active();
    upgrade6Active();
    upgrade7Active();
    upgrade8Active();
    upgrade9Active();
    upgrade10Active();
    upgrade11Active();
    upgrade12Active();
    multiplierGainAutomationActive();
    multiplierTimeAutomationActive();
    rebirthGainAutomationActive();
    rebirthTimeAutomationActive();
    superRebirthGainAutomationActive();
    superRebirthTimeAutomationActive();
    mAutoGain();
    rAutoGain();
    srAutoGain();
};
//=====(AKTUALIZACJA EKRANU)=====
function updateUI() {
    let multiplier_gain = (rebirth + 1) * up2Boost * up3Boost * up7Boost * up1BoostRe;
    let test_rebirth_gain = round(((Math.log10(multiplier + 1.01) - 1) ** 2) * (superRebirth + 1) * up4Boost * up5Boost * up7Boost * up1BoostRe);
    let rebirth_gain = 0;
    if (test_rebirth_gain >= 1 && multiplier >= 100) {
        rebirth_gain = test_rebirth_gain;
    } else {
        rebirth_gain = 0;
    }
    let test_superRebirth_gain = round(((Math.log10(rebirth + 1.01) - 1) ** 2.2) * (mega + 1)  * up6Boost * up7Boost * up8Boost * up1BoostRe * up3BoostRe);
    let superRebirth_gain = 0;
    if (test_superRebirth_gain >= 1 && rebirth >= 100) {
        superRebirth_gain = test_superRebirth_gain.toFixed(2);
    } else {
        superRebirth_gain = 0;
    }
    let test_mega_gain = round(((Math.log10(superRebirth + 1.01) - 1) ** 2.3) * up9BoostRe * up10BoostRe * up11BoostRe);
    let mega_gain = 0;
    if (test_mega_gain >= 1 && superRebirth >= 100) {
        mega_gain = test_mega_gain.toFixed(2);
    } else {
        mega_gain = 0;
    }
    document.getElementById("AdminX").innerText =
        formatujLiczbe(adminX);
    //==========
    document.getElementById("money_amount").innerText =
        "Money: " + formatujLiczbe(money) + "$";
    //==========
    document.getElementById("multiplier_amount").innerText =
        "Multiplier: " + formatujLiczbe(multiplier);
    document.getElementById("multiplier_gain").innerText =
        formatujLiczbe(multiplier_gain);
    let btnMultiplier = document.getElementById("btn-multiplier");
    if (money < 100) {
        btnMultiplier.classList.add("btn-locked");
    } else {
        btnMultiplier.classList.remove("btn-locked");
    }
    //==========
    document.getElementById("rebirth_amount").innerText =
        "Rebirth: " + formatujLiczbe(rebirth);
    let btnRebirth = document.getElementById("btn-rebirth");
    if (multiplier < 100) {
        btnRebirth.classList.add("btn-locked");
    } else {
        btnRebirth.classList.remove("btn-locked");
    }
    document.getElementById("rebirth_gain").innerText =
        formatujLiczbe(rebirth_gain);
    //==========
    document.getElementById("superRebirth_amount").innerText =
        "Super Rebirth: " + formatujLiczbe(superRebirth);
    document.getElementById("superRebirth_gain").innerText =
        formatujLiczbe(superRebirth_gain);
    let btnSuperRebirth = document.getElementById("btn-superRebirth");
    if (rebirth < 100) {
        btnSuperRebirth.classList.add("btn-locked");
    } else {
        btnSuperRebirth.classList.remove("btn-locked");
    }
    //==========
    document.getElementById("up1_cost").innerText =
        formatujLiczbe(up1Cost);
    document.getElementById("up1_count").innerText =
        up1Count;
    document.getElementById("up1_boost").innerText =
        round(up1Boost);
    document.getElementById("up1_cap").innerText =
        up1Cap;
    let btnUp1 = document.getElementById("btn-Up-1");
    if (money < up1Cost || up1Count == up1Cap) {
        btnUp1.classList.add("btn-locked");
    } else {
        btnUp1.classList.remove("btn-locked");
    }
    //==========
    let test_up2_boost = 0.6 + 0.6 * Math.log10(Math.log10(Math.max(1, money) * 13 + 1) * 13)
    if (up2Active == true){
        up2Boost = test_up2_boost;
    }
    document.getElementById("up2_count").innerText =
        up2Count;
    document.getElementById("up2_boost").innerText =
        round(test_up2_boost);
    let btnUp2 = document.getElementById("btn-Up-2");
    if (money < 250000 || up2Count == 1) {
        btnUp2.classList.add("btn-locked");
    } else {
        btnUp2.classList.remove("btn-locked");
    }
    //==========
    document.getElementById("up3_cost").innerText =
        formatujLiczbe(up3Cost);
    document.getElementById("up3_count").innerText =
        up3Count;
    document.getElementById("up3_boost").innerText =
        round(up3Boost);
    document.getElementById("up3_cap").innerText =
        up3Cap;
    let btnUp3 = document.getElementById("btn-Up-3");
    if (multiplier < up3Cost || up3Count == up3Cap) {
        btnUp3.classList.add("btn-locked");
    } else {
        btnUp3.classList.remove("btn-locked");
    }
    //==========
    let test_up4_boost = round(1.16 + Math.log10(Math.log10(Math.max(1, playTime)**0.6 + 1.1) + 1.2))
    if (up4Active == true) {
        up4Boost = test_up4_boost;
    }
    document.getElementById("up4_count").innerText =
        up4Count;
    document.getElementById("up4_boost").innerText =
        round(test_up4_boost);
    let btnUp4 = document.getElementById("btn-Up-4");
    if (multiplier < 4000 || up4Count == 1) {
        btnUp4.classList.add("btn-locked");
    } else {
        btnUp4.classList.remove("btn-locked");
    }
    //==========
    let test_up5_boost = round(1 + 0.35 * Math.log10(Math.max(1,rebirth))**0.35)
    if (up5Active == true) {
        up5Boost = test_up5_boost;
    }
    document.getElementById("up5_count").innerText =
        up5Count;
    document.getElementById("up5_boost").innerText =
        round(test_up5_boost);
    let btnUp5 = document.getElementById("btn-Up-5");
    if (rebirth < 20 || up5Count == 1) {
        btnUp5.classList.add("btn-locked");
    } else {
        btnUp5.classList.remove("btn-locked");
    }
    //==========
    document.getElementById("up6_cost").innerText =
        formatujLiczbe(up6Cost);
    document.getElementById("up6_count").innerText =
        up6Count;
    document.getElementById("up6_boost").innerText =
        round(up6Boost);
    document.getElementById("up6_cap").innerText =
        up6Cap;
    let btnUp6 = document.getElementById("btn-Up-6");
    if (rebirth < up6Cost || up6Count == up6Cap) {
        btnUp6.classList.add("btn-locked");
    } else {
        btnUp6.classList.remove("btn-locked");
    }
    //==========
    document.getElementById("up7_cost").innerText =
        formatujLiczbe(up7Cost);
    document.getElementById("up7_count").innerText =
        up7Count;
    document.getElementById("up7_boost").innerText =
        round(up7Boost);
    let btnUp7 = document.getElementById("btn-Up-7");
    if (superRebirth < up7Cost || up7Count == 5) {
        btnUp7.classList.add("btn-locked");
    } else {
        btnUp7.classList.remove("btn-locked");
    }
    //==========
    let test_up8_boost = 1 + ((up1Count + up2Count + up3Count + up4Count + up5Count + up6Count + up7Count + up8Count + up9Count) * 0.02)
    if (up8Active == true) {
        up8Boost = test_up8_boost;
    }
    document.getElementById("up8_count").innerText =
        up8Count;
    document.getElementById("up8_boost").innerText =
        round(test_up8_boost);
    let btnUp8 = document.getElementById("btn-Up-8");
    if (superRebirth < 18 || up8Count == 1) {
        btnUp8.classList.add("btn-locked");
    } else {
        btnUp8.classList.remove("btn-locked");
    }
    //==========
    document.getElementById("up9_count").innerText =
        up9Count;
    let btnUp9 = document.getElementById("btn-Up-9");
    if (superRebirth < 100 || up9Count == 1) {
        btnUp9.classList.add("btn-locked");
    } else {
        btnUp9.classList.remove("btn-locked");
    }
    //==========
    document.getElementById("money-upg").innerText =
        "Money: " + formatujLiczbe(money) + "$";
    document.getElementById("multiplier-upg").innerText =
        "Multiplier: " + formatujLiczbe(multiplier);
    document.getElementById("rebirth-upg").innerText =
        "Rebirth: " + formatujLiczbe(rebirth);
    document.getElementById("superRebirth-upg").innerText =
        "Super Rebirth: " + formatujLiczbe(superRebirth);
    //=====(AUTO UPDATE EKRANU)=====
    let toUpgrade  = document.getElementById("toUpgrade");
    if (money >= 5000 || toUpgradeVis == true ) {
        toUpgradeVis = true;
        toUpgrade.classList.remove("hidden");
    } else {
        toUpgrade.classList.add("hidden");
    }
    let Up3  = document.getElementById("btn-Up-3");
    if (multiplier >= 200 || up3Vis == true) {
        up3Vis = true;
        Up3.classList.remove("hidden");
    } else {
        Up3.classList.add("hidden");
    }
    let Up4  = document.getElementById("btn-Up-4");
    if (rebirth >= 5 || up4Vis == true) {
        up4Vis = true;
        Up4.classList.remove("hidden");
    } else {
        Up4.classList.add("hidden");
    }
    let Up5  = document.getElementById("btn-Up-5");
    if (rebirth >= 10 || up5Vis == true) {
        up5Vis = true;
        Up5.classList.remove("hidden");
    } else {
        Up5.classList.add("hidden");
    }
    let Up6  = document.getElementById("btn-Up-6");
    if (superRebirth >= 1 || up6Vis == true) {
        up6Vis = true;
        Up6.classList.remove("hidden");
    } else {
        Up6.classList.add("hidden");
    }
    let Up7  = document.getElementById("btn-Up-7");
    if (superRebirth >= 2 || up7Vis == true) {
        up7Vis = true;
        Up7.classList.remove("hidden");
    } else {
        Up7.classList.add("hidden");
    }
    let Up8  = document.getElementById("btn-Up-8");
    if (superRebirth >= 10 || up8Vis == true) {
        up8Vis = true;
        Up8.classList.remove("hidden");
    } else {
        Up8.classList.add("hidden");
    }
    let Up9  = document.getElementById("btn-Up-9");
    if (superRebirth >= 50 || up9Vis == true) {
        up9Vis = true;
        Up9.classList.remove("hidden");
    } else {
        Up9.classList.add("hidden");
    }
    let SR  = document.getElementById("SR");
    if (rebirth >= 40 || SRVis == true) {
        SRVis = true;
        SR.classList.remove("hidden");
    } else {
        SR.classList.add("hidden");
    }
    let SRUpg  = document.getElementById("superRebirth-upg");
    if (rebirth >= 40 || SRUpgVis == true) {
        SRUpgVis = true;
        SRUpg.classList.remove("hidden");
    } else {
        SRUpg.classList.add("hidden");
    }
    let ToResearch  = document.getElementById("ToResearch");
    if (up9Active == true || ToResearchVis == true) {
        ToResearchVis = true;
        ToResearch.classList.remove("hidden");
    } else {
        ToResearch.classList.add("hidden");
    }
    let Me  = document.getElementById("Me");
    if (up9BoostActive == true || MeVis == true) {
        MeVis = true;
        Me.classList.remove("hidden");
    } else {
        Me.classList.add("hidden");
    }
    //===================
    let lvl = (up1Lv + up2Lv + up3Lv + up4Lv + up5Lv + up6Lv + up7Lv + up8Lv + up9Lv + up10Lv + up11Lv + up12Lv) - 1;
    //===================
    let Up2Re  = document.getElementById("research-upgrade-2");
    if (lvl >= 2 || up2ReVis == true) {
        up2ReVis = true;
        Up2Re.classList.remove("hidden");
    } else {
        Up2Re.classList.add("hidden");
    }
    let Up3Re  = document.getElementById("research-upgrade-3");
    if (lvl >= 5 || up3ReVis == true) {
        up3ReVis = true;
        Up3Re.classList.remove("hidden");
    } else {
        Up3Re.classList.add("hidden");
    }

    let Up4Re  = document.getElementById("research-upgrade-4");
    if (lvl >= 11 || up4ReVis == true) {
        up4ReVis = true;
        Up4Re.classList.remove("hidden");
    } else {
        Up4Re.classList.add("hidden");
    }
    let Up6Re  = document.getElementById("research-upgrade-6");
    if (lvl >= 4 || up6ReVis == true) {
        up6ReVis = true;
        Up6Re.classList.remove("hidden");
    } else {
        Up6Re.classList.add("hidden");
    }
    let Up7Re  = document.getElementById("research-upgrade-7");
    if (lvl >= 7 || up7ReVis == true) {
        up7ReVis = true;
        Up7Re.classList.remove("hidden");
    } else {
        Up7Re.classList.add("hidden");
    }
    let Up8Re  = document.getElementById("research-upgrade-8");
    if (lvl >= 18 || up8ReVis == true) {
        up8ReVis = true;
        Up8Re.classList.remove("hidden");
    } else {
        Up8Re.classList.add("hidden");
    }
    let Up9Re  = document.getElementById("research-upgrade-9");
    if (lvl >= 10 || up9ReVis == true) {
        up9ReVis = true;
        Up9Re.classList.remove("hidden");
    } else {
        Up9Re.classList.add("hidden");
    }
    let Up10Re  = document.getElementById("research-upgrade-10");
    if (lvl >= 12 || up10ReVis == true) {
        up10ReVis = true;
        Up10Re.classList.remove("hidden");
    } else {
        Up10Re.classList.add("hidden");
    }
    let Up11Re  = document.getElementById("research-upgrade-11");
    if (lvl >= 16 || up11ReVis == true) {
        up11ReVis = true;
        Up11Re.classList.remove("hidden");
    } else {
        Up11Re.classList.add("hidden");
    }
    let Up12Re  = document.getElementById("research-upgrade-12");
    if (lvl >= 40 || up12ReVis == true) {
        up12ReVis = true;
        Up12Re.classList.remove("hidden");
    } else {
        Up12Re.classList.add("hidden");
    }
    let R  = document.getElementById("R");
    if (multiplierGain >= 1 || RVis == true) {
        RVis = true;
        R.classList.remove("hidden");
    } else {
        R.classList.add("hidden");
    }
    let sR  = document.getElementById("S-R");
    if (rebirthGain >= 1 || sRVis == true) {
        sRVis = true;
        sR.classList.remove("hidden");
    } else {
        sR.classList.add("hidden");
    }
    //======================
    document.getElementById("research-money-cost").innerText =
        formatujLiczbe(researchersMoneyCost);
    let btnResMoney = document.getElementById("btn-research-money");
    if (money < researchersMoneyCost) {
        btnResMoney.classList.add("btn-locked");
    } else {
        btnResMoney.classList.remove("btn-locked");
    }
    document.getElementById("research-multiplier-cost").innerText =
        formatujLiczbe(researchersMultiplierCost);
    let btnResMultiplier = document.getElementById("btn-research-multiplier");
    if (multiplier < researchersMultiplierCost) {
        btnResMultiplier.classList.add("btn-locked");
    } else {
        btnResMultiplier.classList.remove("btn-locked");
    }
    document.getElementById("research-rebirth-cost").innerText =
        formatujLiczbe(researchersRebirthCost);
    let btnResRebirth = document.getElementById("btn-research-rebirth");
    if (rebirth < researchersRebirthCost) {
        btnResRebirth.classList.add("btn-locked");
    } else {
        btnResRebirth.classList.remove("btn-locked");
    }
    document.getElementById("research-superRebirth-cost").innerText =
        formatujLiczbe(researchersSuperRebirthCost);
    let btnResSuperRebirth = document.getElementById("btn-research-superRebirth");
    if (superRebirth < researchersSuperRebirthCost) {
        btnResSuperRebirth.classList.add("btn-locked");
    } else {
        btnResSuperRebirth.classList.remove("btn-locked");
    }
    document.getElementById("research-speed-money-cost").innerText =
        formatujLiczbe(researchSpeedMoneyCost);
    let btnSpeedMoney = document.getElementById("btn-research-speed-money");
    if (money < researchSpeedMoneyCost) {
        btnSpeedMoney.classList.add("btn-locked");
    } else {
        btnSpeedMoney.classList.remove("btn-locked");
    }
    document.getElementById("research-speed-multiplier-cost").innerText =
        formatujLiczbe(researchSpeedMultiplierCost);
    let btnSpeedMultiplier = document.getElementById("btn-research-speed-multiplier");
    if (multiplier < researchSpeedMultiplierCost) {
        btnSpeedMultiplier.classList.add("btn-locked");
    } else {
        btnSpeedMultiplier.classList.remove("btn-locked");
    }
    document.getElementById("research-speed-rebirth-cost").innerText =
        formatujLiczbe(researchSpeedRebirthCost);
    let btnSpeedRebirth = document.getElementById("btn-research-speed-rebirth");
    if (rebirth < researchSpeedRebirthCost) {
        btnSpeedRebirth.classList.add("btn-locked");
    } else {
        btnSpeedRebirth.classList.remove("btn-locked");
    }
    document.getElementById("research-speed-superRebirth-cost").innerText =
        formatujLiczbe(researchSpeedSuperRebirthCost);
    let btnSpeedSuperRebirth = document.getElementById("btn-research-speed-superRebirth");
    if (superRebirth < researchSpeedSuperRebirthCost) {
        btnSpeedSuperRebirth.classList.add("btn-locked");
    } else {
        btnSpeedSuperRebirth.classList.remove("btn-locked");
    }
    if (researchers == 1) {
        document.getElementById("researchers-amount").innerText =
            "You have " + formatujLiczbe(researchers) + " researcher";
    }
    else {
        document.getElementById("researchers-amount").innerText =
            "You have " + formatujLiczbe(researchers) + " researchers";
    }
    if (researchers == 1) {
        document.getElementById("researchers-amount").innerText =
            "You have " + formatujLiczbe(researchers) + " researcher";
    } else {
        document.getElementById("researchers-amount").innerText =
            "You have " + formatujLiczbe(researchers) + " researchers";
    }
    document.getElementById("money-speed").innerText = researchSpeedMoneyMulti.toFixed(2);
    document.getElementById("multiplier-speed").innerText = researchSpeedMultiplierMulti.toFixed(2);
    document.getElementById("rebirth-speed").innerText = researchSpeedRebirthMulti.toFixed(2);
    document.getElementById("superRebirth-speed").innerText = researchSpeedSuperRebirthMulti.toFixed(2);
    document.getElementById("upgrades-speed").innerText = researchSpeedUpgradesMulti.toFixed(2);
    let łącznaPrędkość = researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti;
    document.getElementById("suma-speed").innerText = łącznaPrędkość.toFixed(2);
    //==========
    document.getElementById("money-re").innerText =
        "Money: " + formatujLiczbe(money) + "$";
    document.getElementById("multiplier-re").innerText =
        "Multiplier: " + formatujLiczbe(multiplier);
    document.getElementById("rebirth-re").innerText =
        "Rebirth: " + formatujLiczbe(rebirth);
    document.getElementById("superRebirth-re").innerText =
        "Super Rebirth: " + formatujLiczbe(superRebirth);
    //==========
    document.querySelectorAll(".researchers-teraz").forEach(el => el.innerText = currentResearchers);
    document.querySelectorAll(".researchers-suma").forEach(el => el.innerText = researchers);
    document.querySelectorAll(".research-speed-okno").forEach(el => el.innerText = formatujLiczbe(łącznaPrędkość));
    document.querySelectorAll(".researchers-spending").forEach(el => el.innerText = researchersSpending)
    //==========
    document.getElementById("up1-lv").innerText =
        up1Lv;
    document.getElementById("up1-boost").innerText =
        formatujLiczbe(up1BoostRe);
    document.getElementById("up1-time-is").innerText =
        formatujLiczbe(up1TimeIs);
    document.getElementById("up1-time-left").innerText =
        formatujLiczbe(up1TimeLeft);
    document.getElementById("up1-researchers").innerText =
        up1Researchers;
    let progress1 = (up1TimeIs / up1TimeLeft) * 100;
    document.getElementById("up1-progress").style.width = progress1 + "%";
    //==========
    document.getElementById("up2-lv").innerText =
        up2Lv;
    document.getElementById("up2-boost").innerText =
        formatujLiczbe(up2BoostRe);
    document.getElementById("up2-time-is").innerText =
        formatujLiczbe(up2TimeIs);
    document.getElementById("up2-time-left").innerText =
        formatujLiczbe(up2TimeLeft);
    document.getElementById("up2-researchers").innerText =
        up2Researchers;
    let progress2 = (up2TimeIs / up2TimeLeft) * 100;
    document.getElementById("up2-progress").style.width = progress2 + "%";
    //==========
    document.getElementById("up3-lv").innerText =
        up3Lv;
    document.getElementById("up3-boost").innerText =
        formatujLiczbe(up3BoostRe);
    document.getElementById("up3-time-is").innerText =
        formatujLiczbe(up3TimeIs);
    document.getElementById("up3-time-left").innerText =
        formatujLiczbe(up3TimeLeft);
    document.getElementById("up3-researchers").innerText =
        up3Researchers;
    let progress3 = (up3TimeIs / up3TimeLeft) * 100;
    document.getElementById("up3-progress").style.width = progress3 + "%";
    //==========
    let test_up4_boost_re = round((1.1 + 0.28 * Math.log10(Math.log10(Math.max(1, superRebirth) + 5) + 0.35)) ** (1 + (up4Lv / 4)));
    if (up4BoostActive == true) {
        up4BoostRe = test_up4_boost_re;
    }
    document.getElementById("up4-lv").innerText =
        up4Lv;
    document.getElementById("up4-boost").innerText =
        formatujLiczbe(up4BoostRe);
    document.getElementById("up4-time-is").innerText =
        formatujLiczbe(up4TimeIs);
    document.getElementById("up4-time-left").innerText =
        formatujLiczbe(up4TimeLeft);
    document.getElementById("up4-researchers").innerText =
        up4Researchers;
    let progress4 = (up4TimeIs / up4TimeLeft) * 100;
    document.getElementById("up4-progress").style.width = progress4 + "%";
//==========
    document.getElementById("up5-lv").innerText =
        up5Lv;
    document.getElementById("up5-boost").innerText =
        formatujLiczbe(up5BoostRe);
    document.getElementById("up5-time-is").innerText =
        formatujLiczbe(up5TimeIs);
    document.getElementById("up5-time-left").innerText =
        formatujLiczbe(up5TimeLeft);
    document.getElementById("up5-researchers").innerText =
        up5Researchers;
    let progress5 = (up5TimeIs / up5TimeLeft) * 100;
    document.getElementById("up5-progress").style.width = progress5 + "%";
//==========
    document.getElementById("up6-lv").innerText =
        up6Lv;
    document.getElementById("up6-boost").innerText =
        formatujLiczbe(up6BoostRe);
    document.getElementById("up6-time-is").innerText =
        formatujLiczbe(up6TimeIs);
    document.getElementById("up6-time-left").innerText =
        formatujLiczbe(up6TimeLeft);
    document.getElementById("up6-researchers").innerText =
        up6Researchers;
    let progress6 = (up6TimeIs / up6TimeLeft) * 100;
    document.getElementById("up6-progress").style.width = progress6 + "%";
//==========
    document.getElementById("up7-lv").innerText =
        up7Lv;
    document.getElementById("up7-boost").innerText =
        formatujLiczbe(up7BoostRe);
    document.getElementById("up7-time-is").innerText =
        formatujLiczbe(up7TimeIs);
    document.getElementById("up7-time-left").innerText =
        formatujLiczbe(up7TimeLeft);
    document.getElementById("up7-researchers").innerText =
        up7Researchers;
    let progress7 = (up7TimeIs / up7TimeLeft) * 100;
    document.getElementById("up7-progress").style.width = progress7 + "%";
    //==========
    let test_up8_boost_re = round((1.1 + 0.28 * Math.log10(Math.log10(Math.max(1, money) + 5) + 0.35)) ** (1 + (up8Lv / 4)));
    if (up8BoostActive == true) {
        up8BoostRe = test_up8_boost_re;
    }
    researchSpeedUpgradesMulti = up8BoostRe * up6BoostRe;
    document.getElementById("up8-lv").innerText =
        up8Lv;
    document.getElementById("up8-boost").innerText =
        formatujLiczbe(up8BoostRe);
    document.getElementById("up8-time-is").innerText =
        formatujLiczbe(up8TimeIs);
    document.getElementById("up8-time-left").innerText =
        formatujLiczbe(up8TimeLeft);
    document.getElementById("up8-researchers").innerText =
        up8Researchers;
    let progress8 = (up8TimeIs / up8TimeLeft) * 100;
    document.getElementById("up8-progress").style.width = progress8 + "%";
    //==========
    researchSpeedUpgradesMulti = up8BoostRe * up6BoostRe;
    document.getElementById("up9-lv").innerText =
        up9Lv;
    document.getElementById("up9-boost").innerText =
        formatujLiczbe(up9BoostRe);
    document.getElementById("up9-time-is").innerText =
        formatujLiczbe(up9TimeIs);
    document.getElementById("up9-time-left").innerText =
        formatujLiczbe(up9TimeLeft);
    document.getElementById("up9-researchers").innerText =
        up9Researchers;
    let progress9 = (up9TimeIs / up9TimeLeft) * 100;
    document.getElementById("up9-progress").style.width = progress9 + "%";
    //==========
    document.getElementById("mega_amount").innerText =
        "Mega: " + formatujLiczbe(mega);
    document.getElementById("mega_gain").innerText =
        formatujLiczbe(mega_gain);
    let btnMega = document.getElementById("btn-mega");
    if (superRebirth < 100) {
        btnMega.classList.add("btn-locked");
    } else {
        btnMega.classList.remove("btn-locked");
    }
    document.getElementById("up10-lv").innerText =
        up10Lv;
    document.getElementById("up10-boost").innerText =
        formatujLiczbe(up10BoostRe);
    document.getElementById("up10-time-is").innerText =
        formatujLiczbe(up10TimeIs);
    document.getElementById("up10-time-left").innerText =
        formatujLiczbe(up10TimeLeft);
    document.getElementById("up10-researchers").innerText =
        up10Researchers;
    let progress10 = (up10TimeIs / up10TimeLeft) * 100;
    document.getElementById("up10-progress").style.width = progress10 + "%";
   //===========
    let test_up11_boost_re = round((1 + 0.33 * Math.log10(Math.log10(Math.max(1, mega) + 5) + 0.35)) ** (1 + (up11Lv / 5)));
    if (up11BoostActive == true && mega > 0) {
        up11BoostRe = test_up11_boost_re;
    }
    document.getElementById("up11-lv").innerText =
        up11Lv;
    document.getElementById("up11-boost").innerText =
        formatujLiczbe(up11BoostRe);
    document.getElementById("up11-time-is").innerText =
        formatujLiczbe(up11TimeIs);
    document.getElementById("up11-time-left").innerText =
        formatujLiczbe(up11TimeLeft);
    document.getElementById("up11-researchers").innerText =
        up11Researchers;
    let progress11 = (up11TimeIs / up11TimeLeft) * 100;
    document.getElementById("up11-progress").style.width = progress11 + "%";
    //=============
    document.getElementById("up12-lv").innerText =
        up12Lv;
    document.getElementById("up12-time-is").innerText =
        formatujLiczbe(up12TimeIs);
    document.getElementById("up12-time-left").innerText =
        formatujLiczbe(up12TimeLeft);
    document.getElementById("up12-researchers").innerText =
        up12Researchers;
    if (up12Lv == 0){
        let progress12 = (up12TimeIs / up12TimeLeft) * 100;
        document.getElementById("up12-progress").style.width = progress12 + "%";
   }
    else{
        document.getElementById("up12-progress").style.width = "0%";
        up12TimeLeft = "MAX";
        up12TimeIs = "MAX";
    }
    document.getElementById("multiplier-time-is").innerText =
        formatujLiczbe(multiplierGainTimeIs);
    document.getElementById("multiplier-time-left").innerText =
        formatujLiczbe(multiplierGainTimeLeft);
    document.getElementById("multiplier-researchers").innerText =
        multiplierGainResearchers;
    document.getElementById("multiplier-gain").innerText =
        multiplierGain;
    document.getElementById("multiplier-gain-1").innerText =
        multiplierGain;
    document.getElementById("multiplier-gain-test").innerText =
        multiplierGainTest;
    if (multiplierGainTest != "MAX"){
        let progressMultiplierGain = (multiplierGainTimeIs / multiplierGainTimeLeft) * 100;
        document.getElementById("multiplier-progress").style.width = progressMultiplierGain + "%";
    }
    else{
        document.getElementById("multiplier-progress").style.width = "0%";
        multiplierGainTimeLeft= "MAX";
        multiplierGainTimeIs = "MAX";
    }
    document.getElementById("multiplier-time-time-is").innerText =
        formatujLiczbe(multiplierTimeTimeIs);
    document.getElementById("multiplier-time-time-left").innerText =
        formatujLiczbe(multiplierTimeTimeLeft);
    document.getElementById("multiplier-time-researchers").innerText =
        multiplierTimeResearchers;
    if (multiplierTimeTest != "MAX") {
        document.getElementById("multiplier-time").innerText =
            round(multiplierTime);
        document.getElementById("multiplier-time-1").innerText =
            round(multiplierTime);
        document.getElementById("multiplier-time-test").innerText =
            round(multiplierTimeTest);
    }
    else {
        document.getElementById("multiplier-time").innerText =
            round(multiplierTime);
        document.getElementById("multiplier-time-1").innerText =
            round(multiplierTime);
        document.getElementById("multiplier-time-test").innerText =
            multiplierTimeTest;
    }
    if (multiplierTimeTest != "MAX"){
        let progressMultiplierTime = (multiplierTimeTimeIs / multiplierTimeTimeLeft) * 100;
        document.getElementById("multiplier-time-progress").style.width = progressMultiplierTime + "%";
    }
    else{
        document.getElementById("multiplier-time-progress").style.width = "0%";
        multiplierTimeTimeLeft= "MAX";
        multiplierTimeTimeIs = "MAX";
    }
    document.getElementById("rebirth-time-is").innerText =
        formatujLiczbe(rebirthGainTimeIs);
    document.getElementById("rebirth-time-left").innerText =
        formatujLiczbe(rebirthGainTimeLeft);
    document.getElementById("rebirth-researchers").innerText =
        rebirthGainResearchers;
    document.getElementById("rebirth-gain").innerText =
        rebirthGain;
    document.getElementById("rebirth-gain-1").innerText =
        rebirthGain;
    document.getElementById("rebirth-gain-test").innerText =
        rebirthGainTest;
    if (rebirthGainTest != "MAX"){
        let progressRebirthGain = (rebirthGainTimeIs / rebirthGainTimeLeft) * 100;
        document.getElementById("rebirth-progress").style.width = progressRebirthGain + "%";
    }
    else{
        document.getElementById("rebirth-progress").style.width = "0%";
        rebirthGainTimeLeft= "MAX";
        rebirthGainTimeIs = "MAX";
    }
    document.getElementById("rebirth-time-time-is").innerText =
        formatujLiczbe(rebirthTimeTimeIs);
    document.getElementById("rebirth-time-time-left").innerText =
        formatujLiczbe(rebirthTimeTimeLeft);
    document.getElementById("rebirth-time-researchers").innerText =
        rebirthTimeResearchers;
    if (rebirthTimeTest != "MAX") {
        document.getElementById("rebirth-time").innerText =
            round(rebirthTime);
        document.getElementById("rebirth-time-1").innerText =
            round(rebirthTime);
        document.getElementById("rebirth-time-test").innerText =
            round(rebirthTimeTest);
    }
    else {
        document.getElementById("rebirth-time").innerText =
            round(rebirthTime);
        document.getElementById("rebirth-time-1").innerText =
            round(rebirthTime);
        document.getElementById("rebirth-time-test").innerText =
            rebirthTimeTest;
    }
    if (rebirthTimeTest != "MAX"){
        let progressRebirthTime = (rebirthTimeTimeIs / rebirthTimeTimeLeft) * 100;
        document.getElementById("rebirth-time-progress").style.width = progressRebirthTime + "%";
    }
    else{
        document.getElementById("rebirth-time-progress").style.width = "0%";
        rebirthTimeTimeLeft= "MAX";
        rebirthTimeTimeIs = "MAX";
    }


    document.getElementById("superRebirth-time-is").innerText =
        formatujLiczbe(superRebirthGainTimeIs);
    document.getElementById("superRebirth-time-left").innerText =
        formatujLiczbe(superRebirthGainTimeLeft);
    document.getElementById("superRebirth-researchers").innerText =
        superRebirthGainResearchers;
    document.getElementById("superRebirth-gain").innerText =
        superRebirthGain;
    document.getElementById("superRebirth-gain-1").innerText =
        superRebirthGain;
    document.getElementById("superRebirth-gain-test").innerText =
        superRebirthGainTest;
    if (superRebirthGainTest != "MAX"){
        let progressSuperRebirthGain = (superRebirthGainTimeIs / superRebirthGainTimeLeft) * 100;
        document.getElementById("superRebirth-progress").style.width = progressSuperRebirthGain + "%";
    }
    else{
        document.getElementById("superRebirth-progress").style.width = "0%";
        superRebirthGainTimeLeft= "MAX";
        superRebirthGainTimeIs = "MAX";
    }
    document.getElementById("superRebirth-time-time-is").innerText =
        formatujLiczbe(superRebirthTimeTimeIs);
    document.getElementById("superRebirth-time-time-left").innerText =
        formatujLiczbe(superRebirthTimeTimeLeft);
    document.getElementById("superRebirth-time-researchers").innerText =
        superRebirthTimeResearchers;
    if (superRebirthTimeTest != "MAX") {
        document.getElementById("superRebirth-time").innerText =
            round(superRebirthTime);
        document.getElementById("superRebirth-time-1").innerText =
            round(superRebirthTime);
        document.getElementById("superRebirth-time-test").innerText =
            round(superRebirthTimeTest);
    }
    else {
        document.getElementById("superRebirth-time").innerText =
            round(superRebirthTime);
        document.getElementById("superRebirth-time-1").innerText =
            round(superRebirthTime);
        document.getElementById("superRebirth-time-test").innerText =
            superRebirthTimeTest;
    }
    if (superRebirthTimeTest != "MAX"){
        let progressSuperRebirthTime = (superRebirthTimeTimeIs / superRebirthTimeTimeLeft) * 100;
        document.getElementById("superRebirth-time-progress").style.width = progressSuperRebirthTime + "%";
    }
    else{
        document.getElementById("superRebirth-time-progress").style.width = "0%";
        superRebirthTimeTimeLeft= "MAX";
        superRebirthTimeTimeIs = "MAX";
    }
}
