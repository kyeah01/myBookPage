let bookmarkList = document.getElementById('book_mark_list')

const reader = async (url) => {
  let response = await fetch(url, {mode: 'no-cors'})

  let contents = await response.text()

  console.log(contents)
} 


chrome.bookmarks.getTree((bookmarkTree) => {
  const bookmarkList = bookmarkTree[0].children[1].children
    .find((bookmark) => bookmark.title == "my_bookmark")
  
  for (let bookmark of bookmarkList.children) {
    reader(bookmark.url)
    document.write(`<p>${JSON.stringify(bookmark)}</p>`)
  }
})

// chrome.bookmarks.find('새 폴더')