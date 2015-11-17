$(document).ready(function(){
gameSearch();

});

function gameSearch(){
   // api key and url for building api query string
   var apikey = "7f088175f0a1a4cf059ef9e5047a62b7d63e8ec2";
   var baseUrl = "http://www.giantbomb.com/api";

   // build url
   var gameSearchURL = baseUrl + '/search/?api_key=' + apikey + '&format=jsonp&limit=50';
   var query = 'Batman';

   var search = gameSearchURL+ '&query='+ encodeURI(query);
   console.log("this is search ",search);

   $.ajax({
      type: "GET",
      url: gameSearchURL+ '&query='+ encodeURI(query),
      dataType: "jsonp",
      crossDomain: true,
      jsonp: 'json_callback',
      success: function(data){
      console.log('success ',data);
   }

   });

}