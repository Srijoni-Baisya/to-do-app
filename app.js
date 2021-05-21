$(document).ready(function(){
    var item, title, author, publisher, bookLink, bookImage;
    var outputList = document.getElementById("list-output");
    var bookUrl = "https://www.googleapis.com/books/v1/volumes?q=";
    var placeHolder = "<img src='placeholder.png'";
    var searchData;
    console.log(bookUrl,outputList);

   $("#search").click(function(){
        outputList.innerHTML="";
        searchData = $("#search-box").val()
        console.log(searchData);
        
        if(searchData == "" || searchData == null){
            alert("Search a Book first");
        }

        else{
            $.ajax({
                url: bookUrl + searchData,
                dataType:"json",
                success:function(res){
                    console.log(res);
                    
                    if(res.totalItem==0){
                        alert("no results! try again please...");
                    }
                    else{
                      
                       // $(".book-list").css('visibility : visible');
                        displayResults(res);
                    }
                },
                error:function(){
                    alert("Sorry, something went wrong!..");
                }
            })
        }
        $("#search-box").val("");
    })
    function displayResults(res){
        for (var i=0; i<res.items.length; i++){
            item = res.items[i];
            title = item.volumeInfo.title;
            author = item.volumeInfo.authors;
            publisher = item.volumeInfo.publisher;
            bookIsbn = item.volumeInfo.industryIdentifiers[1].identifier;
            bookImage = (item.volumeInfo.imageLinks)?item.volumeInfo.imageLinks.thumbnail : placeHolder;

            img = '<img src="'+bookImage+'" class="img-thumbnail">';
            book_name = '<h3>'+title+'</h3>';
            writer = '<h4>Author : '+author+'</h4>';
            published = '<h4>Publisher : '+publisher+'</h4><hr>';
            row = img+book_name+writer+published;
            document.getElementById("list-output").innerHTML += row;
        }
    }
    
})