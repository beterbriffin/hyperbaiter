//=====(ZMIENNE)=====
let money = 0;
let multiplier = 0;
let rebirth = 0;
//=====(ADMIN)=====
let superRebirth = 0;
let adminX = 1;
//=====(UBGRADE 1)=====
let up1Count = 0;
let up1Cost = 10000;
let up1Boost = 1;
let up1Cap = 10;
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
let up7Cost = 6;
let up7Boost = 1;
//=====(UBGRADE 8)=====
let up8Count = 0;
let up8Cost = 18;
let up8Active = false;
let up8Boost = 1;
//=====(UBGRADE 9)=====
let up9Count = 0;
let up9Cost = 100;
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
//=====(RESEARCHERS)=====
let researchers = 0;
let researchersMoneyCost = 100000000000;
let researchersMultiplierCost = 100000000;
let researchersRebirthCost = 1000000;
let researchersSuperRebirthCost = 1000;
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
//=====(ZAPIS)=====
function saveGame() {
    let save = {
        //=====(ZMIENNE DO ZAPISU)=====
        money: money,
        multiplier: multiplier,
        rebirth: rebirth,
        superRebirth: superRebirth,
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
        console.log("Gra wczytana!");
    }
}
//=====(HARD RESET)=====
function resetGame() {
    localStorage.removeItem("mojaGraSave");
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
        let gain = round(((Math.log10(rebirth + 1.01) - 1) ** 2.2) * up6Boost * up7Boost * up8Boost * up1BoostRe * up3BoostRe);
        if (isFinite(gain) && gain > 0) superRebirth += gain;
        rebirth = 0;
        updateUI();
    }
}
//=====(UPGRADE)=====
function Upgrade1() {
     if(money >= up1Cost && up1Count < up1Cap) {
         money -= up1Cost;
         up1Cost *= 1.4;
         up1Boost *= 1.10;
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
        up3Cost *= 1.4;
        up3Boost *= 1.15;
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
        up7Cost *= 1.4;
        up7Boost *= 1.2;
        up7Count++;
        updateUI();
    }
}
function Upgrade7Max() {
    while (superRebirth >= up7Cost && up7Count < 5) {
        superRebirth -= up7Cost;
        up7Cost *= 1.4;
        up7Boost *= 1.2;
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
        researchSpeedRebirthMulti += 0.01;
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
    upgrade1Active();
    upgrade2Active();
    upgrade3Active();
    upgrade4Active();
    upgrade5Active();
    upgrade6Active();
    upgrade7Active();
    upgrade8Active();
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
    let test_superRebirth_gain = round(((Math.log10(rebirth + 1.01) - 1) ** 2.2) * up6Boost * up7Boost * up8Boost * up1BoostRe * up3BoostRe);
    let superRebirth_gain = 0;
    if (test_superRebirth_gain >= 1) {
        superRebirth_gain = test_superRebirth_gain.toFixed(2);
    } else {
        superRebirth_gain = 0;
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
    document.getElementById("researchers-teraz").innerText =
        currentResearchers;
    document.getElementById("researchers-suma").innerText =
        researchers;
    document.getElementById("research-speed-okno").innerText =
        formatujLiczbe(łącznaPrędkość);
    document.getElementById("researchers-spending").innerText =
        researchersSpending;
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
}
