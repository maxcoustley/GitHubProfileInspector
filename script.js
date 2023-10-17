var form = document.getElementById("form")

form.addEventListener('submit', function(e){
    e.preventDefault()

    var username = document.getElementById("username").value

    alert(username)
    
    fetch("https://api.github.com/users/"+username)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        document.getElementById("result").innerHTML = `
            <img src="${data.avatar_url}"/>
        `
    })
})