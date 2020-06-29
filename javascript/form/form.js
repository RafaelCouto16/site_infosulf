function numberTelefone() {
		const select = document.querySelector("#dddMobile");
		const mobile = document.querySelector("#mobile");
		const namber = document.querySelector("#namber");

		mobile.value = `(${select.value}) ${namber.value}`;

		return mobile.value;
}
