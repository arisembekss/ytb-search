// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}
// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    //gapi.client.setApiKey('AIzaSyCXacHojSgGPNOivoJ8EazHRDq7KU9bUgc');
    gapi.client.setApiKey('AIzaSyAo4GpRQ9uQvvCKgf6ZGL0-PSH8OU-V0vY');
}
 
// Called when the search button is clicked in the html code
function search() {
    var query = document.getElementById('query').value;
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        maxResults: '25',
        q:query
    });
    // Send the request to the API server, call the onSearchResponse function when the data is returned
    request.execute(onSearchResponse);
}
// Triggered by this line: request.execute(onSearchResponse);
function onSearchResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    v/*ar txt = "";
    var myObj = JSON.parse(responseString);
        txt += "<div>"
        for (var x in myObj.items) {
         
            txt += "<b>" + x.etag+"</b><br>";
          }
        
        txt += "</div>"*/
    document.getElementById('response').innerHTML = responseString;
   // document.getElementById('response').innerHTML = txt;
}