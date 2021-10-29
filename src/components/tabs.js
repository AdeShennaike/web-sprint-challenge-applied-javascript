const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  //create tags
  const divTop = document.createElement('div')
  const divTab = document.createElement('div')
  const divTab2 = document.createElement('div')
  const divTab3 = document.createElement('div')

  //element hierarchy
  divTop.appendChild(divTab)
  divTop.appendChild(divTab2)
  divTop.appendChild(divTab3)

  //content
  divTab.textContent = topics[0]
  divTab2.textContent = topics[1]
  divTab3.textContent = topics[2]

  //classes
  divTop.classList.add('topics')
  divTab.classList.add('tab')
  divTab2.classList.add('tab')
  divTab3.classList.add('tab')

  return divTop
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
