$(document).ready(function(){
    $('button').click(function(){
        $.get("https://api.github.com/users/RoLo-dev", displayName)
        function displayName(data) {
            let userName = data.login
            console.log(userName)
            $('#name').html(userName);
        }
    })
})