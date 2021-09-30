username = "James"

function getUserName() {
    // from the JSON string 
    // you got from the backend
    return "James"
}

// template = "<h2>Hello " + username + "</h2>" +
// "<p>Welcome, to your homepage</p>"
template = `<h2>Hello ${getUserName()}</h2>
<p>Welcome, to your homepage</p>
${1 === 1}
${2 + 4}
`



document.getElementById("container").innerHTML = template