function getJoke(searchTerm, useSearchTerm) {
  var myurl= "https://icanhazdadjoke.com/";
  if (useSearchTerm) {
    myurl += "search?term=" + searchTerm;
    $.ajax({
      url : myurl,
      crossDomain: true,
      dataType : "json",
      success : function(parsed_json) {
        var jokes = parsed_json["results"];
        if (jokes.length == 0) {
          console.log(searchTerm)
          var joke = getJoke("", false);
          $("#jokeText").text(joke);
        }
        else {
          var randIdx = Math.floor(Math.random() * jokes.length);
          var joke = jokes[randIdx]["joke"];
          $("#jokeText").text(joke);
        }
      }
    }); 
  }
  else {
    $.ajax({
      url : myurl,
      crossDomain: true,
      dataType : "json",
      success : function(parsed_json) {
        var joke = parsed_json["joke"];
        $("#jokeText").text(joke);
      }
    }); 
  }
}

function trendyDad() {
  var options1 = ["sneakers", "cat", "design", "glasses", "hat", "hipster", "shoes", "glitter"];
  var randInt = Math.floor(Math.random() * options1.length);
  var itemTrendyDad = options1[randInt];
  getJoke(itemTrendyDad, true);
}

function nottrendyDad() {
  var options2 = ["socks", "beer", "pickles", "baseball", "hotdogs", "screwdriver", "duck", "barbies"];
  var randInt = Math.floor(Math.random() * options2.length);
  var itemNotTrendyDad = options2[randInt];
  getJoke(itemNotTrendyDad, true);
}

function handymanDad() {
  var options3 = ["hammer", "toolbelt", "tools", "mistakes", "broken", "fix"];
  var randInt = Math.floor(Math.random() * options3.length);
  var itemHandymanDad = options3[randInt];
  getJoke(itemHandymanDad, true);
}

function chefDad() {
  var options4 = ["cooking", "food", "cheese", "wine", "poodle"];
  var randInt = Math.floor(Math.random() * options4.length);
  var itemChefDad = options4[randInt];
  getJoke(itemChefDad, true);
}

function chuloDad() {
  var options5 = ["exercise", "muscles", "protein", "drugs", "bear"];
  var randInt = Math.floor(Math.random() * options5.length);
  var itemChuloDad = options5[randInt];
  getJoke(itemChuloDad, true);
}

function gangsterDad() {
  var options6 = ["nice", "ghetto"];
  var randInt = Math.floor(Math.random() * options6.length);
  var itemGangsterDad = options6[randInt];
  getJoke(itemGangsterDad, true);
}