function callFourSquare() {

  var exploreURL="https://api.foursquare.com/v2/venues/explore?";
  var clientId="RGIHNQWTCTBBQWAZEUZZKILDWF0EAQERVTXJUI23QU40ZZYJ";
  var clientSecret="ULCGZV4SQQNFZ21VPGK455SYCS4QSNHP1INNF1CZ21LPBF0E";
  var near=$("#theInput").val();

  if((exploreURL||clientId||clientSecret)==null)
      {
        alert("An error has occurred, please try again later");

      }else if(!near || near.length==0)
      {
        alert("Please enter a search value");
        
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
            content = '<div class="group" id="group'+i+'">' + groups.type+ '</div>';
            $(content).appendTo("#results");
            $.each(groups.items, function(j, item){
              createItem(item, i, j);
            });
       });
  });

}

function createItem(item, i, j)

{
    var name = item.venue.name;
    var category = item.venue.categories[0].name;
    var rating = item.venue.rating;
    var address = item.venue.location.formattedAddress;

    itemContent ='<div class ="item" id="item'+j+'">' + 
    '<p>Name: '+name+'</p>'+ 
    '<p>Category: '+category+'</p>'+ 
    '<p>Rating: '+rating+'</p>'+ 
    '<p>Address: '+address+'</p>'
    +'</div>';
    $(itemContent).appendTo("#group"+i);
}


