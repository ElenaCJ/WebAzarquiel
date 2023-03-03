import { c as create_ssr_component, d as add_attribute, e as escape, f as null_to_empty } from "./index.js";
const competencias_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: `main.svelte-5yd32j.svelte-5yd32j{--opacidad-negro:0.35;background-image:linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url(../src/images/paginas/keyboard.jpg);background-attachment:fixed;background-size:cover;background-position:center;width:100%}h1.svelte-5yd32j.svelte-5yd32j{text-align:center;padding:28px;color:#343434;font-weight:400}.container.svelte-5yd32j.svelte-5yd32j{padding:0px 60px}.card.svelte-5yd32j.svelte-5yd32j{background-color:transparent;border:none;padding:2% 0%;margin-bottom:4%;scroll-snap-align:center}.card.svelte-5yd32j p.svelte-5yd32j{text-align:center;font-size:22px}.fondo.svelte-5yd32j.svelte-5yd32j{background-color:rgb(255, 255, 255)}.competencias-box.svelte-5yd32j.svelte-5yd32j{display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%;padding-bottom:3%}.img.svelte-5yd32j.svelte-5yd32j{width:50%;border:8px solid #0038FF;border-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 0H8v4H4v4H0v8h4v4h4v4h8v-4h4v-4h4V8h-4V4h-4V0zm0 4v4h4v8h-4v4H8v-4H4V8h4V4h8z' fill='%23005D9D'/%3E%3C/svg%3E") 8 stretch;transition:0.2s}.img.svelte-5yd32j img.svelte-5yd32j{width:100%;height:auto}.img.svelte-5yd32j.svelte-5yd32j:hover{border-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 0H8v4H4v4H0v8h4v4h4v4h8v-4h4v-4h4V8h-4V4h-4V0zm0 4v4h4v8h-4v4H8v-4H4V8h4V4h8z' fill='%23009BDD'/%3E%3C/svg%3E") 8 stretch}.p.svelte-5yd32j.svelte-5yd32j{width:80%}.p.svelte-5yd32j p.svelte-5yd32j{font-size:23px;padding:2.7% 1% 0 7%;color:#005B9B;text-align:center}@media screen and (max-width: 1150px){.card.svelte-5yd32j.svelte-5yd32j{background-color:transparent;border:none;padding:2% 0%;margin-bottom:4%;scroll-snap-align:center}.card.svelte-5yd32j p.svelte-5yd32j{text-align:center;font-size:18px;margin-bottom:3rem}.competencias-box.svelte-5yd32j.svelte-5yd32j{display:flex;justify-content:space-around;flex-direction:column;flex-wrap:wrap}.competencias-box.svelte-5yd32j .img.svelte-5yd32j{width:65%;border:8px solid #0038FF;border-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 0H8v4H4v4H0v8h4v4h4v4h8v-4h4v-4h4V8h-4V4h-4V0zm0 4v4h4v8h-4v4H8v-4H4V8h4V4h8z' fill='%23005D9D'/%3E%3C/svg%3E") 8 stretch;transition:0.2s}.competencias-box.svelte-5yd32j .img img.svelte-5yd32j{width:100%;height:auto}.competencias-box.svelte-5yd32j .p.svelte-5yd32j{width:100%}.competencias-box.svelte-5yd32j .p p.svelte-5yd32j{font-size:20px}}@media screen and (max-width: 400px){.competencias-box.svelte-5yd32j .p p.svelte-5yd32j{font-size:14px}}`,
  map: null
};
const Competencias = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src, competenciastext } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.competenciastext === void 0 && $$bindings.competenciastext && competenciastext !== void 0)
    $$bindings.competenciastext(competenciastext);
  $$result.css.add(css$4);
  return `<main class="${"svelte-5yd32j"}"><div class="${"fondo svelte-5yd32j"}"><div class="${"container svelte-5yd32j"}"><div class="${"card svelte-5yd32j"}" id="${"competencias-generales"}"><h1 class="${"svelte-5yd32j"}">COMPETENCIAS GENERALES</h1>
                    <div class="${"competencias-box svelte-5yd32j"}"><div class="${"img svelte-5yd32j"}"><img${add_attribute("src", src, 0)} alt="${""}" class="${"svelte-5yd32j"}"></div>
                    <div class="${"p svelte-5yd32j"}"><p class="${"svelte-5yd32j"}">${escape(competenciastext)}</p></div></div></div></div></div>
</main>`;
});
const contenido_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: `main.svelte-w4x2pm.svelte-w4x2pm{margin:0% 1%}#contenido.svelte-w4x2pm.svelte-w4x2pm{display:grid;grid-template-columns:1fr;grid-template-rows:repeat(3);width:30vh;position:relative;margin:1rem 2%;color:#005D9D;border:8px solid #0038FF;text-align:center;overflow:hidden;line-height:150%;transition:height 0.5s;height:10.5rem;border-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 0H8v4H4v4H0v8h4v4h4v4h8v-4h4v-4h4V8h-4V4h-4V0zm0 4v4h4v8h-4v4H8v-4H4V8h4V4h8z' fill='%23005D9D'/%3E%3C/svg%3E") 8 stretch}#contenido.svelte-w4x2pm h4.svelte-w4x2pm{padding:23px;font-size:18px}#contenido.svelte-w4x2pm .titulo.svelte-w4x2pm{height:6.375rem}#contenido.svelte-w4x2pm .arrow.svelte-w4x2pm{height:0.2rem}#contenido.svelte-w4x2pm .hideable.svelte-w4x2pm{display:none;height:6.35rem}#contenido.svelte-w4x2pm.svelte-w4x2pm:hover{height:20.125rem;color:#49ABD3;border-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 0H8v4H4v4H0v8h4v4h4v4h8v-4h4v-4h4V8h-4V4h-4V0zm0 4v4h4v8h-4v4H8v-4H4V8h4V4h8z' fill='%2349ABD3'/%3E%3C/svg%3E") 8 stretch}#contenido.svelte-w4x2pm:hover .hideable.svelte-w4x2pm{display:block;height:4.5rem}@media screen and (max-width: 1150px){#contenido.svelte-w4x2pm.svelte-w4x2pm{width:70vh}}`,
  map: null
};
const Contenido = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { div, titulo, horasanuales, horassemanales } = $$props;
  if ($$props.div === void 0 && $$bindings.div && div !== void 0)
    $$bindings.div(div);
  if ($$props.titulo === void 0 && $$bindings.titulo && titulo !== void 0)
    $$bindings.titulo(titulo);
  if ($$props.horasanuales === void 0 && $$bindings.horasanuales && horasanuales !== void 0)
    $$bindings.horasanuales(horasanuales);
  if ($$props.horassemanales === void 0 && $$bindings.horassemanales && horassemanales !== void 0)
    $$bindings.horassemanales(horassemanales);
  $$result.css.add(css$3);
  return `<main class="${"svelte-w4x2pm"}"><div class="${escape(null_to_empty(div), true) + " svelte-w4x2pm"}" id="${"contenido"}"><div class="${"titulo svelte-w4x2pm"}"><h4 class="${"svelte-w4x2pm"}">${escape(titulo)}</h4></div>
        <div class="${"arrow svelte-w4x2pm"}">▼</div>
        <div class="${"hideable svelte-w4x2pm"}"><h4 class="${"svelte-w4x2pm"}"><i class="${"fa-solid fa-clock"}"></i>${escape(horasanuales)}<br>
            <i class="${"fa-regular fa-clock"}"></i>${escape(horassemanales)}</h4></div></div>
</main>`;
});
const salidas_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#salida.svelte-1nhd7tj.svelte-1nhd7tj{max-width:200px;margin:auto;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(2, 0.8fr);color:white;text-align:center;padding-top:2%}#salida.svelte-1nhd7tj .carrera.svelte-1nhd7tj{height:75px;text-align:center}#salida.svelte-1nhd7tj .icon.svelte-1nhd7tj{padding:4% 4%;font-size:48px}.div1.svelte-1nhd7tj.svelte-1nhd7tj{animation:svelte-1nhd7tj-Slide_Up 4s ease}.div2.svelte-1nhd7tj.svelte-1nhd7tj{animation:svelte-1nhd7tj-Slide_Up 4s ease}.div3.svelte-1nhd7tj.svelte-1nhd7tj{animation:svelte-1nhd7tj-Slide_Up 4s ease}.div4.svelte-1nhd7tj.svelte-1nhd7tj{animation:svelte-1nhd7tj-Slide_Up 4s ease}.div5.svelte-1nhd7tj.svelte-1nhd7tj{animation:svelte-1nhd7tj-Slide_Up 4s ease}@keyframes svelte-1nhd7tj-Slide_Up{0%{transform:translateY(150px)}100%{transform:translateY(0px)}}",
  map: null
};
const Salidas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { div, carrera, icon } = $$props;
  if ($$props.div === void 0 && $$bindings.div && div !== void 0)
    $$bindings.div(div);
  if ($$props.carrera === void 0 && $$bindings.carrera && carrera !== void 0)
    $$bindings.carrera(carrera);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  $$result.css.add(css$2);
  return `<main><div class="${escape(null_to_empty(div), true) + " svelte-1nhd7tj"}" id="${"salida"}"><div class="${"carrera svelte-1nhd7tj"}"><h5>${escape(carrera)}</h5></div>
        <div class="${"icon svelte-1nhd7tj"}"><i class="${escape(null_to_empty(icon), true) + " svelte-1nhd7tj"}"></i></div></div>
</main>`;
});
const menuAside_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'main.svelte-1n1zcf6.svelte-1n1zcf6{position:sticky;z-index:5;width:100%;top:calc(42% - 97.5px)}aside.svelte-1n1zcf6.svelte-1n1zcf6{position:sticky;padding:0% 2% 1.5% 0%;z-index:5;width:14%;left:100%;transform:translateX(2rem);transition:0.5s}aside.svelte-1n1zcf6 .lista.svelte-1n1zcf6{text-align:right;opacity:1;transform:perspective(600px) rotateY(-65deg);transition:0.5s}aside.svelte-1n1zcf6 .lista.svelte-1n1zcf6:hover{transform:perspective(600px) rotateY(0deg);opacity:1;background-color:white}aside.svelte-1n1zcf6.svelte-1n1zcf6:hover{transform:translateX(0rem)}ul.svelte-1n1zcf6.svelte-1n1zcf6{padding:0% 7% 15% 0%;position:absolute;flex-direction:column;align-items:start;list-style-type:none}ul.svelte-1n1zcf6 a.svelte-1n1zcf6{position:relative;display:block;padding:15px 0;font-family:sans-serif;color:#009BDD;opacity:0.6;text-decoration:none;text-transform:uppercase;transition:0.5s}ul.svelte-1n1zcf6 a.svelte-1n1zcf6::after{position:absolute;content:"";top:85%;right:0;width:100%;height:3px;background:#3498db;transform:scaleX(0);transform-origin:right;transition:transform 0.5s;opacity:1}ul.svelte-1n1zcf6 a.svelte-1n1zcf6:hover{color:#009CDC;opacity:1}ul.svelte-1n1zcf6 a.svelte-1n1zcf6:hover::after{transform:scaleX(1);transform-origin:left;opacity:1}',
  map: null
};
const MenuAside = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  document.querySelectorAll("#temario .lista a").forEach((elemento) => {
    elemento.addEventListener("click", () => {
      document.querySelector("#temario .activo").classList.remove("activo");
      elemento.parentElement.classList.add("activo");
    });
  });
  $$result.css.add(css$1);
  return `<main class="${"svelte-1n1zcf6"}"><aside class="${"svelte-1n1zcf6"}"><div class="${"contenedor-temario"}" id="${"temario"}"><ul class="${"lista svelte-1n1zcf6"}"><li><a href="${"#competencias-generales"}" class="${"svelte-1n1zcf6"}">competencias generales</a></li>
                <li><a href="${"#salidas-profesionales"}" class="${"svelte-1n1zcf6"}">salidas profesionales</a></li>
                <li><a href="${"#contenido-curso"}" class="${"svelte-1n1zcf6"}">contenido del curso</a></li>
                <li><a href="${"#acceso-curso"}" class="${"svelte-1n1zcf6"}">acceso al curso</a></li>
                <li><a href="${"#consultar-plazas"}" class="${"svelte-1n1zcf6"}">consultar plazas</a></li></ul></div></aside>
</main>`;
});
const accesotable_svelte_svelte_type_style_lang = "";
const css = {
  code: "th.svelte-vgsxzh{font-size:18px;color:#005B9B;transition:0.2s}th.svelte-vgsxzh:hover{color:#49ABD3}table.svelte-vgsxzh{width:100%}",
  map: null
};
const Accesotable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { titulacion1, titulacion2, titulacion3, titulacion4, subtitulacion1, subtitulacion2, subtitulacion3, subtitulacion4 } = $$props;
  if ($$props.titulacion1 === void 0 && $$bindings.titulacion1 && titulacion1 !== void 0)
    $$bindings.titulacion1(titulacion1);
  if ($$props.titulacion2 === void 0 && $$bindings.titulacion2 && titulacion2 !== void 0)
    $$bindings.titulacion2(titulacion2);
  if ($$props.titulacion3 === void 0 && $$bindings.titulacion3 && titulacion3 !== void 0)
    $$bindings.titulacion3(titulacion3);
  if ($$props.titulacion4 === void 0 && $$bindings.titulacion4 && titulacion4 !== void 0)
    $$bindings.titulacion4(titulacion4);
  if ($$props.subtitulacion1 === void 0 && $$bindings.subtitulacion1 && subtitulacion1 !== void 0)
    $$bindings.subtitulacion1(subtitulacion1);
  if ($$props.subtitulacion2 === void 0 && $$bindings.subtitulacion2 && subtitulacion2 !== void 0)
    $$bindings.subtitulacion2(subtitulacion2);
  if ($$props.subtitulacion3 === void 0 && $$bindings.subtitulacion3 && subtitulacion3 !== void 0)
    $$bindings.subtitulacion3(subtitulacion3);
  if ($$props.subtitulacion4 === void 0 && $$bindings.subtitulacion4 && subtitulacion4 !== void 0)
    $$bindings.subtitulacion4(subtitulacion4);
  $$result.css.add(css);
  return `<main><div id="${"table"}"><table class="${"table svelte-vgsxzh"}" style="${"margin: 2vh;"}"><tbody><tr><th scope="${"row"}" class="${"svelte-vgsxzh"}"><span style="${"color:#343434"}">${escape(titulacion1)} </span>${escape(subtitulacion1)}</th></tr>
            <tr><th scope="${"row"}" class="${"svelte-vgsxzh"}"><span style="${"color:#343434"}">${escape(titulacion2)} </span>${escape(subtitulacion2)}</th></tr>
            <tr><th scope="${"row"}" class="${"svelte-vgsxzh"}"><span style="${"color:#343434"}">${escape(titulacion3)} </span>${escape(subtitulacion3)}</th></tr>
            <tr><th scope="${"row"}" class="${"svelte-vgsxzh"}"><span style="${"color:#343434"}">${escape(titulacion4)} </span>${escape(subtitulacion4)}</th></tr></tbody></table></div>
</main>`;
});
export {
  Accesotable as A,
  Competencias as C,
  MenuAside as M,
  Salidas as S,
  Contenido as a
};
