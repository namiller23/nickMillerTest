function callFourSquare() {

  var exploreURL="https://api.foursquare.com/v2/venues/explore?";
  var clientId="RGIHNQWTCTBBQWAZEUZZKILDWF0EAQERVTXJUI23QU40ZZYJ";
  var clientSecret="ULCGZV4SQQNFZ21VPGK455SYCS4QSNHP1INNF1CZ21LPBF0E";
  var near=$("#theInput").val();

  $.getJSON(exploreURL+"client_id="+clientId+"&client_secret="+clientSecret+"&v=20160601&near="+near,
    function(data) {
        $.each(data.response.groups[0].items, function(i,venues){
            content = '<p>' + venues.venue.name + '</p>';
            $(content).appendTo("#names");
       });
});
}
