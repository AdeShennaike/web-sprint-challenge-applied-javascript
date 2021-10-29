const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  //create tags
  const divHead = document.createElement('div')
  const spanEle = document.createElement('span')
  const h1Ele = document.createElement('h1')
  const spanEle2 = document.createElement('span')

  //element hierarchy
  divHead.appendChild(spanEle) 
  divHead.appendChild(h1Ele)
  divHead.appendChild(spanEle2)

  //content
  spanEle.textContent = date
  h1Ele.textContent = title
  spanEle2.textContent = temp

  //classes
  divHead.classList.add('header') 
  spanEle.classList.add('date') 
  spanEle2.classList.add('temp')

  return divHead
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  document.querySelector(selector).appendChild(Header('Avatar', 'June 23', 'hot'))
}

export { Header, headerAppender }
