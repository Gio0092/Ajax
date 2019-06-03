$(function(){
    $('#addProduct').click (function(){
        //console.log('click')
        getProducts();
    });
    function getProducts(){
        $.ajax({
            url: 'https://mini-shop-rg.herokuapp.com/products',
            type: 'GET',
            dataType: 'json',

            success: function(ask){
                var productList = $('#newProduct');
                console.log(ask);
                var productsCollected = ask;
                var newItem = "";
                for(var i = 0; i < productsCollected.length; i++){
                    var product = productsCollected[i];
                    newItem +=
                    "<div><h2>" + 
                    product.name +
                     "</h2><br><img src=" + 
                     product.image + 
                     "/><br><h3>" +
                     product.price + 
                     "</h3><br><p>" + 
                     product.description +
                     "</p></div>";
                    productList.html(newItem);
                }
            },
            error: function(error){
                alert('Ha ocurrido un error');
 
             },
             complete: function(status){
                 //alert('Petición done');
             }
        });
    }
    
    
});