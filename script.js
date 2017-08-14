$(document).ready(function() {
  //function to generate a random quote
  function generate_quote() {
    //named variable for jSON api link
    $api_link =
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON($api_link, function(data) {
      //set variables for quote and author pulled from jSON
      var quote = data.quoteText;
      var author = data.quoteAuthor;
      //sets the element to the quote and author
      $(".quoteOutput").html(quote);
      $(".quoteAuthor").html(author);
      //button to tweet a quote
      $(".twitter-share-button").attr(
        "href",
        "https://twitter.com/intent/tweet?text=" + quote + "- " + author
      );
    });
  }
  //button to generate a quote
  $("#quote").on("click", function() {
    generate_quote();
  });
});
