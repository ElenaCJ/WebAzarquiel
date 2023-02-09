<script>

    document.querySelectorAll('#temario .lista a').forEach((elemento) => {
	elemento.addEventListener('click', () => {
		document.querySelector('#temario .activo').classList.remove('activo');
		elemento.parentElement.classList.add('activo');
	});
});

</script>

<main>

<!--MENU NAVEGADOR-->
    <aside>
        <div class="contenedor-temario" id="temario">
            <ul class="lista">
                <li><a href="#competencias-generales">competencias generales</a></li>
                <li><a href="#salidas-profesionales">salidas profesionales</a></li>
                <li><a href="#contenido-curso">contenido del curso</a></li>
                <li><a href="#acceso-curso">acceso al curso</a></li>
                <li><a href="#consultar-plazas">consultar plazas</a></li>
            </ul>
        </div>
    </aside>


<!--APARTADOS-->
<div class="encabezado">
    <h1>CURSO ESPECIALIZADO EN CIBERSEGURIDAD <br>
        <i class="fa fa-graduation-cap"></i>
    </h1>
</div>

<div class="fondo">
    <div class="container">
        <div class="card" id="competencias-generales">
                <h1>COMPETENCIAS GENERALES</h1>
                <div class="competencias-box">
                   <div class="img"> <img src="src/images/paginas/ciberseguridad.jpg" alt=""></div>
                   <div class="p"> <p>La figura del especialista en Ciberseguridad se ha convertido en imprescindible en una sociedad en la que la presencia de delitos digitales es cada vez más común.
                    <br> Si estás pensando en dedicarte a la protección de la seguridad en la red, necesitarás una gran especialización y conocimientos avanzados en derecho e informática.</p>
                    </div>
                </div>
            </div>
    </div>
</div>
<div class="card" id="salidas-profesionales">
        <h1 style="color: white" >SALIDAS PROFESIONALES</h1>
        <div class="salidas-box">
                    <div class="div1" id="salida"> 
                     <div class="carrera"> <h5> Arquitecto de seguridad.</h5></div>
                       <div class="icon"> <i class="fa-solid fa-folder-tree"></i> </div>
                    </div>
                    <div class="div2" id="salida"> 
                        <div class="carrera"><h5> Hacker ético.</h5></div>
                        <div class="icon"><i class="fa-brands fa-redhat"></i></div>
                    </div>
                    <div class="div3" id="salida"> 
                        <div class="carrera"><h5>Chief Information Security Officer <br> (CISO) </h5> </div>
                        <div class="icon"><i class="fa-solid fa-user-shield"></i></div>
                    </div>
                    <div class="div4" id="salida"> 
                        <div class="carrera"><h5> Especialista en incidencias.</h5> </div>
                        <div class="icon"><i class="fa-solid fa-helmet-safety"></i> </div>
                    </div>
                    <div class="div5" id="salida"> 
                        <div class="carrera"><h5> Analista de seguridad. </h5> </div>
                        <div class="icon"><i class="fa-solid fa-magnifying-glass-chart"></i></div>
                    </div>
                </div>
            </div>
<div class="fondo">
    <div class="container">
            <div class="card" id="contenido-curso">
                <h1>CONTENIDO DEL CURSO</h1>
                <p>Estas son las asignaturas que cursarás a lo largo del año escolar (7 meses) que dura nuestro curso.<br>
                    El recuento computado de horas suponen un total de <b>600</b> horas. Es decir, 19 horas semanales de curso.</p>
                <div class="contenido-box">
                    <div class="div1" id="contenido">
                        <div class="titulo"> <h4> Gestión de servicion en el sistema.</h4></div>
                        <div class="arrow">▼</div>
                        <div class="hideable"><h4><i class="fa-solid fa-clock"></i> 95 horas / anuales <br>
                            <i class="fa-regular fa-clock"></i> 3 horas / semanales</h4>
                        </div>
                    </div>
                    <div class="div2" id="contenido"> 
                        <div> <h4> Acceso a sistemas y datos seguros.</h4></div>
                        <div class="arrow">▼</div>
                        <div class="hideable"><h4><i class="fa-solid fa-clock"></i> 125 horas / anuales <br>
                            <i class="fa-regular fa-clock"></i> 4 horas / semanales</h4>
                        </div>
                    </div>
                    <div class="div3" id="contenido">
                        <div class="titulo"> <h4> Seguridad en equipos informaticos.</h4></div>
                        <div class="arrow">▼</div>
                        <div class="hideable"><h4><i class="fa-solid fa-clock"></i> 125 horas / anuales <br>
                            <i class="fa-regular fa-clock"></i> 4 horas / semanales</h4>
                        </div>
                    </div>
                    <div class="div4" id="contenido"> 
                        <div class="titulo"> <h4> Gestión de incidentes de seguridad informática.</h4></div>
                        <div class="arrow">▼</div>
                        <div class="hideable"><h4><i class="fa-solid fa-clock"></i> 125 horas / anuales <br>
                            <i class="fa-regular fa-clock"></i> 4 horas / semanales</h4>
                        </div>
                    </div>
                    <div class="div5" id="contenido"> 
                        <div class="titulo"> <h4> Auditoria de seguridad informática.</h4></div>
                        <div class="arrow">▼</div>
                        <div class="hideable"><h4><i class="fa-solid fa-clock"></i> 95 horas / anuales <br> 
                            <i class="fa-regular fa-clock"></i> 3 horas / semanales</h4>
                        </div>
                    </div>
                </div>
            </div>
            </div>
                <hr>
            <div class="container">
                <div class="card" id="acceso-curso">
                    <h1>Acceso al Curso</h1>
                    <div class="acceso-box">
                        <div id="table">
                        <table class="table" style="margin: 2vh;">
                            <tbody>
                            <tr>
                                <th scope="row"> <span style="color:#343434"> Técnico Superior en Administración de Sistemas Informáticos en Red </span>establecido por
                                    el Real Decreto 1629/2009, de 30 de octubre, por el que se establece el título de
                                    Técnico Superior en Administración de Sistemas Informáticos en Red y se fijan sus
                                    enseñanzas mínimas.</th>
                                
                            </tr>
                            <tr>
                                <th scope="row"><span style="color:#343434">Técnico Superior en Desarrollo de Aplicaciones Multiplataforma </span>establecido por el
                                    Real Decreto 450/2010, de 16 de abril, por el que se establece el título de Técnico
                                    Superior en Desarrollo de Aplicaciones Multiplataforma y se fijan sus enseñanzas
                                    mínimas. </th>
                                
                            </tr>
                            <tr>
                                <th scope="row" > <span style="color:#343434">Técnico Superior en Desarrollo de Aplicaciones Web</span> establecido por el Real Decreto
                                    686/2010, de 20 de mayo, por el que se establece el título de Técnico Superior en
                                    Desarrollo de Aplicaciones Web y se fijan sus enseñanzas mínimas.</th>
                            </tr>
                            <tr>
                                <th scope="row"> <span style="color:#343434">Técnico Superior en Animaciones 3D, Juegos y Entornos Interactivos </span> establecido por el
                                    Real Decreto 1583/2011, de 4 de noviembre, por el que se establece el título de
                                    Técnico Superior en Animaciones 3D, Juegos y Entornos Interactivos y se fijan sus
                                    enseñanzas mínimas.</th>
                            </tr>
                            
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="container">
            <div class="card" id="consultar-plazas">
                <h1>Consultar Plazas</h1>
                <p class="read-more">
                    <a href="/index.php/al-dia/922-aula-ateca-disponible-ya" class="btn btn-primary">
                    Leer más...
                    </a>
                </p>
            </div>
    </div>
</div>
</main>

<style lang="sass">


main
    --opacidad-negro: 0.35
    background-image: linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url(../src/images/paginas/keyboard.jpg)
    background-attachment: fixed
    background-size: cover
    background-position: center
    width:100%

.container
    padding: 0px 60px
    
.fondo
    background-color: rgb(255,255,255)

.encabezado
    color: white
    padding: 2% 0%
    h1
        font-size: 40px
        color: white
        font-weight: 500
        i
            padding-top: 2.3%
            font-size: 48px
            padding-bottom:33px
        
aside
    position: sticky
    padding: 0% 2% 1.5% 0%
    top: calc(40% - (195px / 2))
    z-index: 5
    width: 14%
    left: 100%
    transform: translateX(2rem)
    transition: .5s
    .lista
        text-align: right
        opacity: 1
        transform: perspective(600px) rotateY(-65deg)
        transition: .5s 
        
    .lista:hover
        transform: perspective(600px) rotateY(0deg)
        opacity: 1
        background-color: white 

aside:hover
    transform: translateX(0rem)
    


ul 
    padding: 0% 7% 15% 0%
    position: absolute
    flex-direction: column
    align-items: start
    list-style-type: none

    a 
      position: relative
      display: block
      padding: 15px 0
      font-family: sans-serif
      color: #009BDD
      opacity:0.6
      text-decoration: none
      text-transform: uppercase
      transition: 0.5s
      

      &::after 
        position: absolute
        content: ""
        top: 85%
        right: 0
        width: 100%
        height: 3px
        background: #3498db
        transform: scaleX(0)
        transform-origin: right
        transition: transform 0.5s
        opacity: 1
      

      &:hover 
        color: #009CDC
        opacity: 1
      

      &:hover::after 
        transform: scaleX(1)
        transform-origin: left
        opacity: 1


h1
    text-align: center
    padding: 28px
    color: #343434
    font-weight: 400

hr
    height: 12px
    border: 0
    box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5)

.card
    background-color: transparent
    border: none
    padding: 2% 0%
    margin-bottom: 4% 
    scroll-snap-align: center
    
    p
        text-align: center
        font-size:22px


.competencias-box
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    width: 100%
    padding-bottom: 3%
    
    .img
        width: 50%
        border: 8px solid #0038FF
        border-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 0H8v4H4v4H0v8h4v4h4v4h8v-4h4v-4h4V8h-4V4h-4V0zm0 4v4h4v8h-4v4H8v-4H4V8h4V4h8z' fill='%23005D9D'/%3E%3C/svg%3E") 8 stretch
        transition: .2s
        img
            width:100%
            height: auto
    .img:hover
        border-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 0H8v4H4v4H0v8h4v4h4v4h8v-4h4v-4h4V8h-4V4h-4V0zm0 4v4h4v8h-4v4H8v-4H4V8h4V4h8z' fill='%23009BDD'/%3E%3C/svg%3E") 8 stretch
    .p 
        width: 80%
        p
            padding: 2.7% 1% 0 7%
            color: #005B9B
            text-align: center
    

.salidas-box
    width:100%
    padding: 0% 10%
    display: flex
    justify-content: space-around
    align-items: center
    background-color:(255,255,255,.5)
    #salida
        max-width: 200px
        margin: auto
        display: grid
        grid-template-columns: 1fr
        grid-template-rows: repeat(2, 0.8fr)
        color: white
        text-align: center
        padding-top: 2%
        .icon
            padding: 4% 4%
            font-size: 48px
    .div1
        animation: Slide_Up 8s ease
    .div2
        animation: Slide_Up 8s ease
    .div3
        animation: Slide_Up 8s ease
    .div4
        animation: Slide_Up 8s ease
    .div5
        animation: Slide_Up 8s ease
        

#contenido-curso
    p
        color: #595959
        font-size: 20px

.contenido-box
    width:100%
    display: flex
    justify-content: space-around

    #contenido
        display: grid
        grid-template-columns: 1fr
        grid-template-rows: repeat(3)
        width: 100%
        position: relative
        margin: 1rem 2%
        color: #005D9D
        border: 8px solid #0038FF
        text-align: center
        overflow: hidden
        transition: height .5s
        height: 10.5rem
        border-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 0H8v4H4v4H0v8h4v4h4v4h8v-4h4v-4h4V8h-4V4h-4V0zm0 4v4h4v8h-4v4H8v-4H4V8h4V4h8z' fill='%23005D9D'/%3E%3C/svg%3E") 8 stretch
        h4
            font-size: 18px
        p
            color: #005D9D
        .titulo
            height:6.375rem
        .arrow
            height:0.2rem
        .hideable
            display: none
            height:6.35rem

    #contenido:hover
        height: 20.125rem
        color: #49ABD3
        border-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 0H8v4H4v4H0v8h4v4h4v4h8v-4h4v-4h4V8h-4V4h-4V0zm0 4v4h4v8h-4v4H8v-4H4V8h4V4h8z' fill='%2349ABD3'/%3E%3C/svg%3E") 8 stretch
        p
            color: #49ABD3
        .hideable
            display: block
            height:4.5rem
        

    
    h4
        padding: 23px
        background-opacity: 0.5
    h5
        padding: 8px
    p
        font-size: 20px
        padding-bottom: 4px
        color: #49ABD3
     


.acceso-box 
    margin: 1rem 5rem 0 0
    display: flex
    align-items: center
    width: 100%
    padding-bottom: 3%  
  
    th
        font-size:18px
        color: #005B9B
        transition: .2s

    th:hover
        color: #49ABD3
    table
        width: 100%



.btn-primary
    background-color: #22b8f0
    border-color: #22b8f0
    width:40%
    margin: 4vh

@keyframes Slide_Up
    0% 
        transform: translateY(150px)
    
    100% 
        transform: translateY(0px)
    
@media screen and (max-width: 1300px)
    .salidas-box
        width:100%
        padding: 0% 4%
        display: flex
        justify-content: space-around
        align-items: center
        background-color:(255,255,255,.5)

    .competencias-box
        p
            margin-top: 2rem
            font-size: 18px

    #contenido-curso
        p
            color: #595959
            font-size: 17px
    .contenido-box
        display: flex
        justify-content: space-around
        flex-direction: row
        width: 100%
        #contenido
            margin: 1rem 1%
            h4
                font-size: 16px

    .acceso-box     
        th
            font-size:16px
        
@media screen and (max-width: 1150px)
    .card
        background-color: transparent
        border: none
        padding: 2% 0%
        margin-bottom: 4% 
        scroll-snap-align: center
        
        p
            text-align: center
            font-size:18px
            margin-bottom: 3rem
    .competencias-box
        display: flex
        justify-content: space-around
        flex-direction: column
        flex-wrap: wrap
        .img
            width: 65%
            border: 8px solid #0038FF
            border-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 0H8v4H4v4H0v8h4v4h4v4h8v-4h4v-4h4V8h-4V4h-4V0zm0 4v4h4v8h-4v4H8v-4H4V8h4V4h8z' fill='%23005D9D'/%3E%3C/svg%3E") 8 stretch
            transition: .2s
            img
                width:100%
                height: auto

        .p
            width: 100%
            p
                font-size: 20px

    .salidas-box
        width:100%
        padding: 0% 10%
        display: flex
        justify-content: space-around
        align-items: center
        flex-wrap: wrap
        background-color:(255,255,255,.5)

    .contenido-box
        display: flex
        justify-content: space-around
        flex-direction: row
        flex-wrap: wrap
        width: 100%
        #contenido
            h4
                font-size: 16px

    .acceso-box     
        th
            font-size:16px
            
@media screen and (max-width: 400px)
    .competencias-box
        .p
            p
                font-size: 14px

    #contenido-curso
        p
          font-size: 14px 
        
    .acceso-box     
        th
            font-size:14px


</style>