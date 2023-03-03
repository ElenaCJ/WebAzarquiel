import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { M as MenuAside, C as Competencias, S as Salidas, a as Contenido, A as Accesotable } from "../../../chunks/accesotable.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-ijk4db.svelte-ijk4db{--opacidad-negro:0.35;background-image:linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url(../src/images/paginas/fondo-pagina-videojuegos1.jpg);background-attachment:fixed;background-size:cover;background-position:center;width:100%}.container.svelte-ijk4db.svelte-ijk4db{padding:0px 60px}.fondo.svelte-ijk4db.svelte-ijk4db{background-color:rgb(255, 255, 255)}.encabezado.svelte-ijk4db.svelte-ijk4db{color:white;padding:2% 0%}.encabezado.svelte-ijk4db h1.svelte-ijk4db{font-size:40px;color:white;font-weight:500}.encabezado.svelte-ijk4db h1 i.svelte-ijk4db{padding-top:2.3%;font-size:48px;padding-bottom:33px}h1.svelte-ijk4db.svelte-ijk4db{text-align:center;padding:28px;color:#343434;font-weight:400}hr.svelte-ijk4db.svelte-ijk4db{height:12px;border:0;box-shadow:inset 0 12px 12px -12px rgba(0, 0, 0, 0.5)}.card.svelte-ijk4db.svelte-ijk4db{background-color:transparent;border:none;padding:2% 0%;margin-bottom:4%;scroll-snap-align:center}.card.svelte-ijk4db p.svelte-ijk4db{text-align:center;font-size:22px}.salidas-box.svelte-ijk4db.svelte-ijk4db{width:100%;padding:0% 10%;display:flex;justify-content:space-evenly;align-items:center;background-color:255, 255, 255, 0.5}#contenido-curso.svelte-ijk4db p.svelte-ijk4db{color:#595959;font-size:20px}.contenido-box.svelte-ijk4db.svelte-ijk4db{width:100%;display:flex;justify-content:space-evenly}.acceso-box.svelte-ijk4db.svelte-ijk4db{margin:1rem 5rem 0 0;display:flex;align-items:center;width:100%;padding-bottom:3%}.btn-primary.svelte-ijk4db.svelte-ijk4db{background-color:#22b8f0;border-color:#22b8f0;width:40%;margin:4vh}@media screen and (max-width: 1300px){.salidas-box.svelte-ijk4db.svelte-ijk4db{width:100%;padding:0% 4%;display:flex;justify-content:space-around;align-items:center;background-color:255, 255, 255, 0.5}#contenido-curso.svelte-ijk4db p.svelte-ijk4db{color:#595959;font-size:17px}}@media screen and (max-width: 1150px){.contenido-box.svelte-ijk4db.svelte-ijk4db{display:flex;justify-content:space-around;flex-direction:row;width:100%}.salidas-box.svelte-ijk4db.svelte-ijk4db{width:100%;padding:0% 10%;display:flex;justify-content:space-around;align-items:center;flex-wrap:wrap;background-color:255, 255, 255, 0.5}.contenido-box.svelte-ijk4db.svelte-ijk4db{display:flex;justify-content:space-around;flex-direction:row;flex-wrap:wrap;width:100%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  document.querySelectorAll("#temario .lista a").forEach((elemento) => {
    elemento.addEventListener("click", () => {
      document.querySelector("#temario .activo").classList.remove("activo");
      elemento.parentElement.classList.add("activo");
    });
  });
  $$result.css.add(css);
  return `<main class="${"svelte-ijk4db"}">
${validate_component(MenuAside, "MenuAside").$$render($$result, {}, {}, {})}



<div class="${"encabezado svelte-ijk4db"}"><h1 class="${"svelte-ijk4db"}">CURSO ESPECIALIZADO EN DESARROLLO DE VIDEOJUEGOS <br>
        <i class="${"fa fa-graduation-cap svelte-ijk4db"}"></i></h1></div>

${validate_component(Competencias, "Competencias").$$render(
    $$result,
    {
      src: "src/images/paginas/gaming.jpg",
      competenciastext: "La competencia general de este curso de especialización consiste en diseñar y desarrollar\r\n    videojuegos para diferentes dispositivos y plataformas, garantizando la experiencia del\r\n    usuario, utilizando herramientas de última generación que permitan actuar en todas las\r\n    fases de su desarrollo, así como aplicaciones interactivas de realidad virtual y aumentada."
    },
    {},
    {}
  )}

<div class="${"card svelte-ijk4db"}" id="${"salidas-profesionales"}"><h1 style="${"color: white"}" class="${"svelte-ijk4db"}">SALIDAS PROFESIONALES</h1>
        <div class="${"salidas-box svelte-ijk4db"}">${validate_component(Salidas, "Salidas").$$render(
    $$result,
    {
      div: "div1",
      carrera: "Desarrollador de Videojuegos.",
      icon: "fa-solid fa-headset"
    },
    {},
    {}
  )}
                    ${validate_component(Salidas, "Salidas").$$render(
    $$result,
    {
      div: "div2",
      carrera: "Responsable de pruebas de videojuegos.",
      icon: "fa-solid fa-dice"
    },
    {},
    {}
  )}
                    ${validate_component(Salidas, "Salidas").$$render(
    $$result,
    {
      div: "div3",
      carrera: "Responsable del proceso de creacion de videojuegos.",
      icon: "fa-solid fa-gamepad"
    },
    {},
    {}
  )}
                    ${validate_component(Salidas, "Salidas").$$render(
    $$result,
    {
      div: "div4",
      carrera: "Diseñador gráfico 2D y 3D de videojuegos.",
      icon: "fa-solid fa-dice-d6"
    },
    {},
    {}
  )}
                    ${validate_component(Salidas, "Salidas").$$render(
    $$result,
    {
      div: "div5",
      carrera: "Desarrollador de aplicaciones de realidad virtual",
      icon: "fa-solid fa-vr-cardboard"
    },
    {},
    {}
  )}</div></div>
<div class="${"fondo svelte-ijk4db"}"><div class="${"container svelte-ijk4db"}"><div class="${"card svelte-ijk4db"}" id="${"contenido-curso"}"><h1 class="${"svelte-ijk4db"}">CONTENIDO DEL CURSO</h1>
                <p class="${"svelte-ijk4db"}">Estas son las asignaturas que cursarás a lo largo del año escolar (7 meses) que dura nuestro curso.<br>
                    El recuento computado de horas suponen un total de <b>600</b> horas. Es decir, 19 horas semanales de curso.</p>
                <div class="${"contenido-box svelte-ijk4db"}">${validate_component(Contenido, "Contenido").$$render(
    $$result,
    {
      div: "div1",
      titulo: "Programación en red e inteligencia artificial.",
      horasanuales: " 95 horas anuales",
      horassemanales: " 3 horas semanales"
    },
    {},
    {}
  )}
                    ${validate_component(Contenido, "Contenido").$$render(
    $$result,
    {
      div: "div2",
      titulo: "Diseño gráfico 2D y 3D.",
      horasanuales: " 125 horas anuales",
      horassemanales: " 4 horas semanales"
    },
    {},
    {}
  )}
                    ${validate_component(Contenido, "Contenido").$$render(
    $$result,
    {
      div: "div3",
      titulo: "Programación y motores de videojuegos.",
      horasanuales: " 187 horas anuales",
      horassemanales: " 5 horas semanales"
    },
    {},
    {}
  )}
                    ${validate_component(Contenido, "Contenido").$$render(
    $$result,
    {
      div: "div4",
      titulo: "Diseño, Gestión, publicación y producción.",
      horasanuales: " 125 horas anuales",
      horassemanales: " 4 horas semanales"
    },
    {},
    {}
  )}
                    ${validate_component(Contenido, "Contenido").$$render(
    $$result,
    {
      div: "div5",
      titulo: "Realidad virtual y realidad aumentada.",
      horasanuales: " 95 horas anuales",
      horassemanales: " 3 horas semanales"
    },
    {},
    {}
  )}</div></div></div>
                <hr class="${"svelte-ijk4db"}">
            <div class="${"container svelte-ijk4db"}"><div class="${"card svelte-ijk4db"}" id="${"acceso-curso"}"><h1 class="${"svelte-ijk4db"}">Acceso al Curso</h1>
                    <div class="${"acceso-box svelte-ijk4db"}">${validate_component(Accesotable, "Accesotable").$$render(
    $$result,
    {
      titulacion1: "Técnico Superior en Administración de Sistemas Informáticos en Red ",
      titulacion2: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma ",
      titulacion3: "Técnico Superior en Desarrollo de Aplicaciones Web",
      titulacion4: "Técnico Superior en Animaciones 3D, Juegos y Entornos Interactivos ",
      subtitulacion1: "establecido por\r\n                            el Real Decreto 1629/2009, de 30 de octubre, por el que se establece el título de\r\n                            Técnico Superior en Administración de Sistemas Informáticos en Red y se fijan sus\r\n                            enseñanzas mínimas",
      subtitulacion2: "establecido por el\r\n                            Real Decreto 450/2010, de 16 de abril, por el que se establece el título de Técnico\r\n                            Superior en Desarrollo de Aplicaciones Multiplataforma y se fijan sus enseñanzas\r\n                            mínimas.",
      subtitulacion3: "establecido por el Real Decreto\r\n                            686/2010, de 20 de mayo, por el que se establece el título de Técnico Superior en\r\n                            Desarrollo de Aplicaciones Web y se fijan sus enseñanzas mínimas.",
      subtitulacion4: "establecido por el\r\n                            Real Decreto 1583/2011, de 4 de noviembre, por el que se establece el título de\r\n                            Técnico Superior en Animaciones 3D, Juegos y Entornos Interactivos y se fijan sus\r\n                            enseñanzas mínimas."
    },
    {},
    {}
  )}</div></div></div>
            <hr class="${"svelte-ijk4db"}">
            <div class="${"container svelte-ijk4db"}"><div class="${"card svelte-ijk4db"}" id="${"consultar-plazas"}"><h1 class="${"svelte-ijk4db"}">Consultar Plazas</h1>
                <p class="${"read-more svelte-ijk4db"}"><a href="${"/index.php/al-dia/922-aula-ateca-disponible-ya"}" class="${"btn btn-primary svelte-ijk4db"}">Leer más...
                    </a></p></div></div></div>
</main>`;
});
export {
  Page as default
};
