import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/index.js";
const cardInicio_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.svelte-1ppi6yr{text-decoration:none;color:#fff}main.svelte-1ppi6yr{background-color:#fff;text-align:center;-webkit-font-smoothing:antialiased;font-family:Open Sans, sans-serif;line-height:1.5rem;margin-bottom:4%}.box.svelte-1ppi6yr{height:22rem;padding:3.5rem;margin:3%;width:90%;box-shadow:0 2px 3px 0px rgba(0, 0, 0, 0.25);border-radius:5px;transition:0.2s all;background:#009CDE}#ciber.svelte-1ppi6yr{background-image:url(../images/fondo-ciber_noact.jpg);background-repeat:no-repeat}#videoj.svelte-1ppi6yr{background-image:url(../images/fondo-videojuegos_no.jpg);background-repeat:no-repeat}.box.svelte-1ppi6yr:hover{height:24rem;padding:3.5em}#ciber.svelte-1ppi6yr:hover{background-image:url(../images/fondo-ciber.jpg);backgroung-size:cover;background-position:center;background-repeat:no-repeat}#videoj.svelte-1ppi6yr:hover{background-image:url(../images/fondo-videjuegos.jpg);backgroung-size:cover;background-position:center;background-repeat:no-repeat}h3.svelte-1ppi6yr{font-weight:650;text-decoration:underline;letter-spacing:2px}.fa-graduation-cap.svelte-1ppi6yr{font-size:2.4rem;margin:1.2rem}@media screen and (max-width: 1300px){#ciber.svelte-1ppi6yr{backgroung-size:12vh 40vh;background-image:url(../images/fondo-ciber_noact.jpg);background-repeat:no-repeat}#videoj.svelte-1ppi6yr{backgroung-size:12vh 40vh;background-image:url(../images/fondo-videojuegos_no.jpg);background-repeat:no-repeat}#ciber.svelte-1ppi6yr:hover{background-image:url(../images/fondo-ciber.jpg);backgroung-size:12vh 40vh;background-position:center;background-repeat:no-repeat}#videoj.svelte-1ppi6yr:hover{background-image:url(../images/fondo-videjuegos.jpg);backgroung-size:cover;background-position:center;background-repeat:no-repeat}}",
  map: null
};
const CardInicio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text, titulo, href, id } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.titulo === void 0 && $$bindings.titulo && titulo !== void 0)
    $$bindings.titulo(titulo);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$1);
  return `<main class="${"svelte-1ppi6yr"}"><a${add_attribute("href", href, 0)} class="${"svelte-1ppi6yr"}"><div class="${"box svelte-1ppi6yr"}"${add_attribute("id", id, 0)}><h3 class="${"svelte-1ppi6yr"}">${escape(titulo)}</h3>
                <i class="${"fa fa-graduation-cap svelte-1ppi6yr"}"></i>
                <section>${escape(text)}</section></div></a>
</main>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".titulo.svelte-1kgk3f7 h1.svelte-1kgk3f7{color:#009CDC;font-weight:800;text-decoration:underline;margin:2.5rem;margin-top:3rem;margin-bottom:1.2rem}main.svelte-1kgk3f7.svelte-1kgk3f7{background-color:#fff;text-align:center;-webkit-font-smoothing:antialiased;font-family:Open Sans, sans-serif;line-height:1.5rem;margin-bottom:4%}.box-wrap.svelte-1kgk3f7.svelte-1kgk3f7{color:#fff;display:flex;align-items:center;justify-content:center;margin:0 8%}.box-wrap.svelte-1kgk3f7.svelte-1kgk3f7:hover{opacity:0.6;transform:scale(0.98);box-shadow:none}.box-wrap.svelte-1kgk3f7.svelte-1kgk3f7:hover{transform:scale(1);opacity:1;transition:all 0.5s ease-out}@media screen and (max-width: 1300px){.box-wrap.svelte-1kgk3f7.svelte-1kgk3f7{color:#fff;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;margin:0 8%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-1kgk3f7"}"><section class="${"titulo svelte-1kgk3f7"}"><h1 class="${"svelte-1kgk3f7"}">Nuestras Novedades en Cursos de Especialización:
        </h1></section>
    <div class="${"box-wrap svelte-1kgk3f7"}">${validate_component(CardInicio, "CardInicio").$$render(
    $$result,
    {
      href: "/ciberseguridad",
      id: "ciber",
      titulo: "CIBERSEGURIDAD",
      text: "Este programa pretende formar en temas como la ciberinteligencia, el malware o  el hacking ético.\n            Comprendiendo a su vez los fundamentos de la ciberseguridad y el cibercrimen, permitirá a su vez analizar software y así, construir una arquitectura \n            implementada ante incidentes y potenciales peligros."
    },
    {},
    {}
  )}
        ${validate_component(CardInicio, "CardInicio").$$render(
    $$result,
    {
      href: "/videojuegos",
      id: "videoj",
      titulo: "VIDEOJUEGOS",
      text: "En esta formación aprenderás a diseñar y desarrollar videojuegos para diferentes dispositivos y plataformas, asegurando la experiencia del\n            usuario mediante herramientas de última generación que actuaran en todas las\n            fases del desarrollo, así como aplicaciones interactivas de realidad virtual y aumentada."
    },
    {},
    {}
  )}</div>
</main>`;
});
export {
  Page as default
};
