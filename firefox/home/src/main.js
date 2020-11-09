(function () {
	var list = document.getElementById('sites-list');

	if (!list || !sites) return;

	var style = document.head.appendChild(document.createElement('style'));

	for (let name in sites) {
		let site = sites[name],
			id = `li-${name.toLowerCase().replace(/\s+/g, '-')}`;

		let a = list.appendChild(document.createElement('a'));
		a.href = site.url;

		let li = a.appendChild(document.createElement('li'));
		li.textContent = name;
		li.id = id;

		style.append(`#${id}:hover{color:${site.color};background:${site.background}}`);
	}
})();