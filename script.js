
let news = [
  { id: 1, title: 'Election Results',
  content: "Newly elected minister..." },
  { id: 2, title: 'Sporting Success',
  content: "World Cup winners..." },
  { id: 3, title: 'Tornado Warning',
  content: "Residents should prepare..." }
  ];

function addCard(data) {
  
  arrayOfNews = Array.from(document.getElementsByClassName("col"))
  arrayOfNews.forEach(news => news.remove())

  data.forEach(element => {

    const template = document.getElementById("card-template").content.cloneNode(true);

    let objKeys = Object.keys(element)
    template.querySelector('.card-title').innerText = element[objKeys[1]];
    template.querySelector('.card-text').innerText = element[objKeys[2]];

    document.querySelector('.container').appendChild(template);
  })
}
addCard(news);
setInterval(addCard, 5000, news);

function addNewsToArray() {
  lastIdNumber = news[news.length - 1].id
  news.push({
    id: lastIdNumber + 1, title: document.getElementById("title").value,
    content: document.getElementById("content").value
  })
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}