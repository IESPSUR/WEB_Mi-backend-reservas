// Detectar la página actual
const pagina = document.body.id;

// LOGIN
if (pagina === "pagina-login") {
  const form = document.getElementById("form-login");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (!email || !pass || !email.includes("@")) {
      alert("Introduce un correo válido y una contraseña.");
      return;
    }

    localStorage.setItem("usuario", email);
    window.location.href = "reserva.html";
  });
}

// RESERVA
if (pagina === "pagina-reserva") {
  const email = localStorage.getItem("usuario");

  if (!email) {
    window.location.href = "login.html";
  }

  const mensaje = document.getElementById("mensaje-bienvenida");
  mensaje.textContent = `Bienvenido/a, ${email}.`;

  const form = document.getElementById("form-reserva");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const datos = {
      fecha: document.getElementById("fecha").value,
      recurso: document.getElementById("recurso").value,
      unidades: document.getElementById("unidades").value,
      comentarios: document.getElementById("comentarios").value,
    };

    localStorage.setItem("reserva", JSON.stringify(datos));
    window.location.href = "resumen.html";
  });

  document.getElementById("cerrar-sesion").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "login.html";
  });
}

// RESUMEN
if (pagina === "pagina-resumen") {
  const datos = JSON.parse(localStorage.getItem("reserva"));

  if (!datos) {
    window.location.href = "login.html";
  }

  const cont = document.getElementById("datos-reserva");
  cont.innerHTML = `
    <p><strong>Fecha:</strong> ${datos.fecha}</p>
    <p><strong>Recurso:</strong> ${datos.recurso}</p>
    <p><strong>Personas:</strong> ${datos.unidades}</p>
    <p><strong>Comentarios:</strong> ${datos.comentarios}</p>
  `;

  document.getElementById("cerrar-sesion").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "login.html";
  });
}
