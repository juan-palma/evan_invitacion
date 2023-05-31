function iniciar() {
	const urlREgistro = "#";
	const btnRegistro = document.querySelectorAll('.btnRegistro');

	btnRegistro.forEach(el => {
		el.addEventListener('click', (e) => {
			e.stopPropagation();
			window.location.href = urlREgistro;
		})
	});
}




// iniciar la solicitud de los modulos y la ejecucion inicial del sistema.
//importamos los archivos y librerias necesarios
requirejs.config({
	baseUrl: "assets/js/owner",
	paths: { a: "../animaciones", l: "../librerias", n: "/node_modules"},
});
requirejs(["l/modernizr", "precarga", "validaciones", "alertas", "peticiones"], iniciar);

