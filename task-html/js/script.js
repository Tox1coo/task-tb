const modal = document.querySelector('.modal'),
	btn = document.querySelector('.btn.btn--body'),
	form = document.querySelector('.modal_form'),
	fields = document.querySelector('.fields');
const json = {};

modal.addEventListener('click', event => {
	if (!modal.contains(event.target) || event.target.className === modal.className) {
		modal.classList.remove("active");
	}
});

btn.addEventListener('click', event => {
	modal.classList.add("active");
});

form.addEventListener('submit', event => {
	event.preventDefault();

	json.name = form.elements.name.value;
	json.surname = form.elements.surname.value;
	json.email = form.elements.email.value;
	json.report = form.elements.report.value;
	json.message = form.elements.message.value;
	createFields(json);
	modal.classList.remove("active");

});

function createFields(json) {
	fields.innerHTML = "";
	form.reset();
	fields.style.display = "block";
	const ul = document.createElement('ul');
	for (const key in json) {
		const li = document.createElement('li');
		console.log(key);
		const text = `${key}: ${json[key]}`;
		li.innerText = text;
		ul.appendChild(li);
	}
	fields.appendChild(ul);
}

