const loadFollowers = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/Alidhuniya/followers", true);

    xhr.onload = () => {
        if (xhr.status === 200) {
            const users = JSON.parse(xhr.responseText);
            
            let output = '';

            for (var i in users) {
                output += `
                <div class="user">
                <img src= "${users[i].avatar_url}" width="100" height="100">
                <li>Name: ${users[i].login}</li>
                <li>ID: ${users[i].id}</li>
                <li>Profile: <a href="${users[i].html_url}">Go to Followers Github Profile</a></li>
                </div>
                `
            }

            document.getElementById("followers").innerHTML = output;
            
        }
    }

    xhr.send();
}


document.getElementById("btn").addEventListener("click", loadFollowers);
