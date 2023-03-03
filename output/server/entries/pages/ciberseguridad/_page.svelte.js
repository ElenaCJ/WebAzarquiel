import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { M as MenuAside, C as Competencias, S as Salidas, a as Contenido, A as Accesotable } from "../../../chunks/accesotable.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-t9m9xn.svelte-t9m9xn{--opacidad-negro:0.35;background-image:linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url(../src/images/paginas/keyboard.jpg);background-attachment:fixed;background-size:cover;background-position:center;width:100%}.container.svelte-t9m9xn.svelte-t9m9xn{padding:0px 60px}.fondo.svelte-t9m9xn.svelte-t9m9xn{background-color:rgb(255, 255, 255)}.encabezado.svelte-t9m9xn.svelte-t9m9xn{color:white;padding:2% 0%}.encabezado.svelte-t9m9xn h1.svelte-t9m9xn{font-size:40px;color:white;font-weight:500}.encabezado.svelte-t9m9xn h1 i.svelte-t9m9xn{padding-top:2.3%;font-size:48px;padding-bottom:33px}h1.svelte-t9m9xn.svelte-t9m9xn{text-align:center;padding:28px;color:#343434;font-weight:400}hr.svelte-t9m9xn.svelte-t9m9xn{height:12px;border:0;box-shadow:inset 0 12px 12px -12px rgba(0, 0, 0, 0.5)}.card.svelte-t9m9xn.svelte-t9m9xn{background-color:transparent;border:none;padding:2% 0%;margin-bottom:4%;scroll-snap-align:center}.card.svelte-t9m9xn p.svelte-t9m9xn{text-align:center;font-size:22px}.salidas-box.svelte-t9m9xn.svelte-t9m9xn{width:100%;padding:0% 10%;display:flex;justify-content:space-evenly;align-items:center;background-color:255, 255, 255, 0.5}#contenido-curso.svelte-t9m9xn p.svelte-t9m9xn{color:#595959;font-size:20px}.contenido-box.svelte-t9m9xn.svelte-t9m9xn{width:100%;display:flex;justify-content:space-evenly}.acceso-box.svelte-t9m9xn.svelte-t9m9xn{margin:1rem 5rem 0 0;display:flex;align-items:center;width:100%;padding-bottom:3%}.btn-primary.svelte-t9m9xn.svelte-t9m9xn{background-color:#22b8f0;border-color:#22b8f0;width:40%;margin:4vh}@media screen and (max-width: 1300px){.salidas-box.svelte-t9m9xn.svelte-t9m9xn{width:100%;padding:0% 4%;display:flex;justify-content:space-around;align-items:center;background-color:255, 255, 255, 0.5}#contenido-curso.svelte-t9m9xn p.svelte-t9m9xn{color:#595959;font-size:17px}}@media screen and (max-width: 1150px){.contenido-box.svelte-t9m9xn.svelte-t9m9xn{display:flex;justify-content:space-around;flex-direction:row;width:100%}.salidas-box.svelte-t9m9xn.svelte-t9m9xn{width:100%;padding:0% 10%;display:flex;justify-content:space-around;align-items:center;flex-wrap:wrap;background-color:255, 255, 255, 0.5}.contenido-box.svelte-t9m9xn.svelte-t9m9xn{display:flex;justify-content:space-around;flex-direction:row;flex-wrap:wrap;width:100%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-t9m9xn"}">
    ${validate_component(MenuAside, "MenuAside").$$render($$result, {}, {}, {})}



<div class="${"encabezado svelte-t9m9xn"}"><h1 class="${"svelte-t9m9xn"}">CURSO ESPECIALIZADO EN CIBERSEGURIDAD <br>
        <i class="${"fa fa-graduation-cap svelte-t9m9xn"}"></i></h1></div>

${validate_component(Competencias, "Competencias").$$render(
    $$result,
    {
      src: "src/images/paginas/ciberseguridad.jpg",
      competenciastext: "La figura del especialista en Ciberseguridad se ha convertido en imprescindible en una sociedad en la que la presencia de delitos digitales es cada vez más común.\r\n    Si estás pensando en dedicarte a la protección de la seguridad en la red, necesitarás una gran especialización y conocimientos avanzados en derecho e informática."
    },
    {},
    {}
  )}

<div class="${"card svelte-t9m9xn"}" id="${"salidas-profesionales"}"><h1 style="${"color: white"}" class="${"svelte-t9m9xn"}">SALIDAS PROFESIONALES</h1>
        <div class="${"salidas-box svelte-t9m9xn"}">${validate_component(Salidas, "Salidas").$$render(
    $$result,
    {
      div: "div1",
      carrera: "Arquitecto de seguridad.",
      icon: "fa-solid fa-folder-tree"
    },
    {},
    {}
  )}
                    ${validate_component(Salidas, "Salidas").$$render(
    $$result,
    {
      div: "div2",
      carrera: "Hacker ético.",
      icon: "fa-brands fa-redhat"
    },
    {},
    {}
  )}
                    ${validate_component(Salidas, "Salidas").$$render(
    $$result,
    {
      div: "div3",
      carrera: "Chief Information Security Officer.",
      icon: "fa-solid fa-user-shield"
    },
    {},
    {}
  )}
                    ${validate_component(Salidas, "Salidas").$$render(
    $$result,
    {
      div: "div4",
      carrera: "Especialista en incidencias.",
      icon: "fa-solid fa-helmet-safety"
    },
    {},
    {}
  )}
                    ${validate_component(Salidas, "Salidas").$$render(
    $$result,
    {
      div: "div5",
      carrera: "Analista de seguridad.",
      icon: "fa-solid fa-magnifying-glass-chart"
    },
    {},
    {}
  )}</div></div>
<div class="${"fondo svelte-t9m9xn"}"><div class="${"container svelte-t9m9xn"}"><div class="${"card svelte-t9m9xn"}" id="${"contenido-curso"}"><h1 class="${"svelte-t9m9xn"}">CONTENIDO DEL CURSO</h1>
                <p class="${"svelte-t9m9xn"}">Estas son las asignaturas que cursarás a lo largo del año escolar (7 meses) que dura nuestro curso.<br>
                    El recuento computado de horas suponen un total de <b>600</b> horas. Es decir, 19 horas semanales de curso.</p>
                <div class="${"contenido-box svelte-t9m9xn"}">${validate_component(Contenido, "Contenido").$$render(
    $$result,
    {
      div: "div1",
      titulo: "Gestión de servicion en el sistema.",
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
      titulo: "Acceso a sistemas y datos seguros.",
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
      titulo: "Seguridad en equipos informaticos.",
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
      titulo: "Gestión de incidentes de seguridad en redes.",
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
      titulo: " Auditoria de seguridad informática.",
      horasanuales: " 95 horas anuales",
      horassemanales: " 3 horas semanales"
    },
    {},
    {}
  )}</div></div></div>
                <hr class="${"svelte-t9m9xn"}">
            <div class="${"container svelte-t9m9xn"}"><div class="${"card svelte-t9m9xn"}" id="${"acceso-curso"}"><h1 class="${"svelte-t9m9xn"}">Acceso al Curso</h1>
                    <div class="${"acceso-box svelte-t9m9xn"}">${validate_component(Accesotable, "Accesotable").$$render(
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
            <hr class="${"svelte-t9m9xn"}">
            <div class="${"container svelte-t9m9xn"}"><div class="${"card svelte-t9m9xn"}" id="${"consultar-plazas"}"><h1 class="${"svelte-t9m9xn"}">Consultar Plazas</h1>
                <p class="${"read-more svelte-t9m9xn"}"><a href="${"/index.php/al-dia/922-aula-ateca-disponible-ya"}" class="${"btn btn-primary svelte-t9m9xn"}">Leer más...
                    </a></p></div></div></div>
</main>`;
});
export {
  Page as default
};
