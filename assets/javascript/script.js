//search button is clicked
//run trhough API for results
///ajax call
//console.log response
//create var so we push results
//append and prepend so the results come up
///
$(document).ready(function(){
    console.log('linked');
    var search = "dogs";
    var startYear = "1990";
    var endYear = "2018";
    
    $(".search").on("click", function(){
        //var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json" +
        //"q=" + search + "&" + startYear + "&" + endYear + "api-key=d5509a29ae854d48bb9975e751d29693";
       var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        queryURL += '?' + $.param({
         'api-key': "d5509a29ae854d48bb9975e751d29693",
         'q': "dogs",
         'begin_date': "19990101",
         'end_date': "20180101"
       });
    
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then (function(response){
            console.log(queryURL);
            console.log(response);
            })
    });
});