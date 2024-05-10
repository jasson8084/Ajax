$(document).ready(function(){
    $("#searchUser").click(function(){
        var userId = $('#userId').val();
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users/' + userId,
            type: 'GET',
            success: function(user) {
                $.ajax({
                    url: 'https://jsonplaceholder.typicode.com/posts?userId=' + userId,
                    type: 'GET',
                    success: function(posts) {
                        var html = '';
                        html += '<div class="card carta" style="width: 18rem;">';
                            html += '<img src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg" class="card-img-top"">';
                            html += '<div class="card-body">'
                                html += '<li class="list-group-item">Usuario: ' + user.id + '</li>';
                                html += '<li class="list-group-item">Nombre: ' + user.name + '</li>';
                                html += '<li class="list-group-item">Email: ' + user.email + '</li>';
                                html += '<li class="list-group-item">Ciudad: ' + user.address.city + '</li>';
                            html += '</div>';
                        html += '</div>';
                        $('#result').html(html);
                    },
                    error: function(error) {
                        console.log('Error:', error);
                    }
                });
            },
            error: function(error) {
                console.log('Error:', error);
            }
        });
    });
});