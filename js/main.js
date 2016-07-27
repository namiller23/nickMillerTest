function callFourSquare() {



  var exploreURL="https://api.foursquare.com/v2/venues/explore?";
  var clientId="RGIHNQWTCTBBQWAZEUZZKILDWF0EAQERVTXJUI23QU40ZZYJ";
  var clientSecret="ULCGZV4SQQNFZ21VPGK455SYCS4QSNHP1INNF1CZ21LPBF0E";
  var near=$("#theInput").val();

  if((exploreURL||clientId||clientSecret)==null)
      {
        alert("an error has occurred");

      }else if(!near || near.length==0)
      {
        alert("please enter a value");
        
      }else
      {
        getResponse(exploreURL,clientId,clientSecret,near);
      }
}

function getResponse(exploreURL,clientId,clientSecret,near)
{

  $.getJSON(exploreURL+"client_id="+clientId+"&client_secret="+clientSecret+"&v=20160601&near="+near,
    function(data) {
        $.each(data.response.groups, function(i, groups){
            content = '<h3>' + groups.type+ '</h3>';
            $(content).appendTo("#results");
            $.each(groups.items, function(i, item){
              createItem(item);
            });
       });
  });

}

function createItem(item)
{
  
}


