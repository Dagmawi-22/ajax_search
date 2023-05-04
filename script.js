$(document).ready(function(){
    $("#search-result").on('change', function getResults(){
        var matchvalue = $(this).val(); // this.value
        $.ajax({ 
            url: 'https://jsonplaceholder.typicode.com/comments?postId=3',
            data: { matchvalue: matchvalue },
            type: 'get'
        }).done(function(responseData) {
            console.log('Done: ', responseData);
            let res = responseData.filter(
                (filtered) =>
                  filtered.name.toLowerCase().includes(matchvalue)
              );

              var html;

              for(var key in res) {
                var value = res[key];
                    html+='<li>'+key+':'+value+'</li>'
                }
                $("#search-results").append(html);

        }).fail(function() {
            console.log('Failed to get results.');
        });
    });
}); 