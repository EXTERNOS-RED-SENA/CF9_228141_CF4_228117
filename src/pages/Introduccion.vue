<template>
  <div class="curso-main-container introduccion">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero">
          <span><i class="fas fa-info"></i></span>
        </div>
        <h1>Introducción</h1>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-9 my-lg-0 my-3">
          <div class="brad p-3 mb-4">
            <p>
              En la era digital, los datos se han convertido en el nuevo oro.
              Cada día, se generan y se consumen cantidades asombrosas de
              información, desde las interacciones en redes sociales hasta las
              transacciones financieras y los registros médicos. Este diluvio de
              datos ha dado lugar al fenómeno conocido como Big Data, un campo
              que promete revolucionar la forma en que se entienden y se toman
              decisiones en prácticamente todos los aspectos de la vida.
            </p>
            <p>
              Pero ¿qué es exactamente el Big Data y por qué es tan importante?
              Este componente formativo le acercará al fascinante mundo del Big
              Data, explorando cómo las organizaciones y los individuos pueden
              aprovechar esta avalancha de información para obtener
              <i>insights</i> valiosos, mejorar la eficiencia y resolver
              problemas complejos. Desde predicciones meteorológicas más
              precisas hasta tratamientos médicos personalizados, el Big Data
              está transformando industrias enteras y abriendo nuevas
              posibilidades.
            </p>
            <div
              class="row justify-content-center align-items-center bg1 p-4 brad"
            >
              <div class="col-lg-auto">
                <img
                  class="img-a img-t"
                  src="@/assets/curso/temas/1.png"
                  alt=""
                />
              </div>
              <div class="col pt-lg-0 pt-md-4">
                <p class="mb-0">
                  A lo largo de estas páginas, será guiado a través de los
                  conceptos fundamentales, las técnicas y las herramientas
                  esenciales del Big Data. Utilizando ejemplos y códigos, se
                  descubrirá cómo los datos masivos están dando forma al futuro
                  y cómo se puede ser parte de esta revolución tecnológica.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/2.png" alt="" />
        </div>
      </div>
      <h5 class="mb-5">
        ¡Se invita a apreciar el siguiente video de apertura al presente
        componente!
      </h5>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12">
          <figure>
            <div class="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/X85RU6SvWgo?si=tPixrnhRZgzDbco2"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
