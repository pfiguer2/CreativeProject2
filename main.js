function randomGenerator(min, max) {
    return Math.random() * (max - min) + min;
}

function trendyDad() {
  var options1 = ["sneakers", "cat", "design", "glasses", "hat"];
  var randInt = randomGenerator(0, options1.length - 1);
  var itemTrendyDad = options1[randInt];
  
}

function nottrendyDad() {
  var options2 = [];
  var randInt = randomGenerator(0, options2.length - 1);
  var itemNotTrendyDad = options2[randInt];
}

function handymanDad() {
  var options3 = [];
  var randInt = randomGenerator(0, options3.length - 1);
  var itemHandymanDad = options3[randInt];
}

function chefDad() {
  var options4 = [];
  var randInt = randomGenerator(0, options4.length - 1);
  var itemChefDad = options4[randInt];
}

function chuloDad() {
  var options5 = [];
  var randInt = randomGenerator(0, options5.length - 1);
  var itemChuloDad = options5[randInt];
}

function gangsterDad() {
  var options6 = [];
  var randInt = randomGenerator(0, options6.length - 1);
  var itemGangsterDad = options6[randInt];
}