import React from 'react'
import ReactDOM from 'react-dom'

import Search from './components/Search'

// process.env.NODE_ENV is a magic variable that gets compiled away into the
// environment that we are in.
const BLOBS_ENDPOINT =
  process.env.NODE_ENV === 'development'
    ? 'https://blobs_testing.snowyluma.com/emoji/blobs'
    : 'https://api.mousey.app/emoji/blobs'

function updatePageState(data) {
  console.log(data)
  document.querySelector('#emoji-count').textContent = data.emoji_count
}

function mount(data) {
  const searchNode = document.querySelector('#search')
  searchNode.style.display = 'block'

  ReactDOM.render(<Search data={data} />, searchNode)
}

if (window.fetch) {
  fetch(BLOBS_ENDPOINT)
    .then((resp) => resp.json())
    .then((data) => {
      updatePageState(data)
      mount(data)
    })
}
