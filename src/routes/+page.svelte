<script>

</script>

<main>
    <section class="titulo">
        <h1>
            Nuestras Novedades en Cursos de Especialización:
        </h1>
    </section>
    <div class="box-wrap">
        <a href="/ciberseguridad">
            <div class="box" id="ciber">
                <h3>CIBERSEGURIDAD</h3>
                <i class="fa fa-graduation-cap"></i>
                <section>Este programa pretende formar en temas como la ciberinteligencia, el malware o  el hacking ético.
                        Comprendiendo a su vez los fundamentos de la ciberseguridad y el cibercrimen, permitirá a su vez analizar software y así, construir una arquitectura 
                        implementada ante incidentes y potenciales peligros.
                </section>
            </div>
        </a>
        <a href="/videojuegos">
            <div class="box" id="videoj">
                <h3>VIDEOJUEGOS</h3>
                <i class="fa fa-graduation-cap"></i>
                <section>En esta formación aprenderás a diseñar y desarrollar videojuegos para diferentes dispositivos y plataformas, asegurando la experiencia del
                    usuario mediante herramientas de última generación que actuaran en todas las
                    fases del desarrollo, así como aplicaciones interactivas de realidad virtual y aumentada.</section>
            </div>
         </a>
    </div>
</main>


<style lang="sass">
    a
        text-decoration: none
        color: #fff
        

    .titulo
        h1
            color:#009CDC
            font-weight: 800
            text-decoration: underline
            margin: 2.5rem
            margin-top: 3rem
            margin-bottom: 1.2rem
    main
        background-color: #fff
        text-align: center
        -webkit-font-smoothing: antialiased
        font-family: Open Sans, sans-serif
        line-height: 1.5rem
        margin-bottom: 4%

    .box-wrap
        color: #fff
        display: flex
        align-items: center
        justify-content: center
        margin: 0 8%

    .box
        height: 22rem
        padding:3.5rem
        margin:3%
        width:90%
        box-shadow:0 2px 3px 0px rgba(0,0,0,0.25)
        border-radius:5px
        transition:.2s all
        background: #009CDE
       
    #ciber
        background-image: url(../images/fondo-ciber_noact.jpg)
        background-repeat: no-repeat
    #videoj
        background-image: url(../images/fondo-videojuegos_no.jpg)
        background-repeat: no-repeat

    .box:hover
        height: 24rem
        padding: 3.5em
   
    .box-wrap:hover .box
        filter:blur(12px)
        opacity:.6
        transform: scale(.98)
        box-shadow: none
        

    .box-wrap:hover .box:hover 
        transform: scale(1)
        filter: blur(0px)
        opacity:1
        box-shadow:0 8px 20px 0px rgba(0,0,0,0.125)
        transition: all 0.5s ease-out

    #ciber:hover
        background-image: url(../images/fondo-ciber.jpg)
        backgroung-size: cover
        background-position: center
        background-repeat: no-repeat
        

    #videoj:hover
        background-image: url(../images/fondo-videjuegos.jpg)
        backgroung-size: cover
        background-position: center
        background-repeat: no-repeat
    
    h3
        font-weight: 650
        text-decoration: underline
        letter-spacing:2px
    
.fa-graduation-cap
    font-size: 2.4rem
    margin: 1.2rem
    
    
@media screen and (max-width: 1300px)
    .box-wrap
            color: #fff
            display: flex
            align-items: center
            justify-content: center
            flex-wrap: wrap
            margin: 0 8%

    #ciber
        backgroung-size: 12vh 40vh
        background-image: url(../images/fondo-ciber_noact.jpg)
        background-repeat: no-repeat
    #videoj
        backgroung-size: 12vh 40vh
        background-image: url(../images/fondo-videojuegos_no.jpg)
        background-repeat: no-repeat
    
    #ciber:hover
        background-image: url(../images/fondo-ciber.jpg)
        backgroung-size: 12vh 40vh
        background-position: center
        background-repeat: no-repeat
        

    #videoj:hover
        background-image: url(../images/fondo-videjuegos.jpg)
        backgroung-size: cover
        background-position: center
        background-repeat: no-repeat


</style>