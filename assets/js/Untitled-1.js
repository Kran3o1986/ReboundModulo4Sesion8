

const URL = "https://sinca.mma.gob.cl/index.php/json/listadomapa2k19/";
const formulario = document.querySelector("#formulario");
const inputComuna = document.querySelector("#inputComuna");
const displayResultado = document.querySelector("#resultados");

const fetchData = async () => {
    try {
        const res = await fetch(URL);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

const mostrarDatosComuna = (comuna) => {
    const unit = comuna.realtime[0]?.tableRow?.unit;
    const value = comuna.realtime[0]?.tableRow?.value;
    const status = comuna.realtime[0]?.tableRow?.status;

    displayResultado.innerHTML = `
  <h2>Resultados:</h2>
  <p class="fs-4"><span class="fw-semibold">Comuna:</span> ${comuna.comuna}</p>
  <p class="fs-4">
    <span class="fw-semibold">Región:</span> ${comuna.region}
  </p>
  <p class="fs-4">La concentración de la contaminación en el aire es ${value} ${unit}</p>
  <p class="fs-4">
    La calidad del aire es: ${status}
  </p>`;
};

const buscarComuna = async (comuna) => {
    displayResultado.innerHTML = `
<div class="spinner-grow" role="status">
  <span class="sr-only">Loading...</span>
</div>
`;

    try {
        if (!comuna.trim()) throw new Error("No ha ingresado una comuna");

        const data = await fetchData();
        const comunaEncontrada = data.find(
            (item) => comuna.toLowerCase() === item.comuna.toLowerCase()
        );

        if (!comunaEncontrada)
            throw new Error(
                "¡Lo sentimos! La comuna ingresada no se encuentra disponible"
            );
        mostrarDatosComuna(comunaEncontrada);
    } catch (error) {
        displayResultado.innerHTML = `<h2>${error.message}</h2>`;
    }
};

const limpiarResultados = () => {
    displayResultado.innerHTML = "";
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    buscarComuna(inputComuna.value);
});

inputComuna.addEventListener("click", () => {
    limpiarResultados();
});

/* El rebound pedía esta función para formatear el texto de la búsqueda para la comparación con lo que devolvía la API, pero implementarla causaba problemas con comunas con conectores simples, como es el caso de Viña del Mar. Por esta razón decidí igualar las búsquedas de forma inversa, convirtiendo todo a lowercase, pero dejé esta función en el documento para demostrar cómo hubiese sido su implementación

const formatearBusqueda = (texto) => {
  const textoSplit = texto.split(" ");

  return textoSplit
    .map((item) => item[0].toUpperCase() + item.substring(1))
    .join(" ");
};

*/