async function getData() {
    const response = await fetch('https://api.github.com/users/mojombo/repos')
    const data = await response.json()

    const repoList = document.getElementById('repo-list')

    const h1 = document.querySelector('h1')
    h1.innerHTML = data[0].owner.login

    for (let index = 0; index < data.length; index++) {
        const li = document.createElement('li')
        repoList.append(li)
        const h3 = document.createElement('h3')
        li.append(h3)
        h3.innerText = data[index].name
        const p = document.createElement('p')
        li.append(p)
        p.innerText = 'stars: ' + data[index].stargazers_count
    }
}
getData()

//star for star?
