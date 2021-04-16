let monTab = ["pomme", "fraise", "melon", "citron"];
monTab.shift();
monTab.push("pasteque");
monTab.unshift("banane");
console.log(monTab[1].toUpperCase());
console.log(monTab);
monTab.sort();
console.log(monTab);

let chiffres = [4, 5, 2, 1, 3];
chiffres.sort();
console.log(chiffres);
chiffresString = chiffres.join("-");
console.log(chiffresString);
chiffresArray = chiffresString.split("-");
console.log(chiffresArray);
console.log(parseInt(chiffresArray));
chiffreRevenuEnChiffres = [
    parseInt(chiffresArray[0, 1, 2, 3, 4])];
