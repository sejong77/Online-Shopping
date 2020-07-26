/* JSON으로부터 Items을 받아와서 Fetch 해준다 */
function loadItems() {
	return fetch('data/data.json')
		.then(response => response.json())
		.then(json => json.items);
}

/* Items들의 목록을 받아와서 화면에 보여준다 */
function displayItems(items) {
	const container = document.querySelector('.items');
	container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

/* HTML String */
function createHTMLString(item) {
	return `
  <li class="item">
		<img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
		<span class="item__description">${item.gender}, ${item.size}</span>
  </li>
  `;
}

/* Main */
loadItems()
	.then(items => {
		displayItems(items);
		//setEventListeners(items);
	})
	.catch(console.log);
