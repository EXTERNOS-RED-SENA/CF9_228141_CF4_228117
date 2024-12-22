<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>1</span></div>
        <h1>Introducción al <i>Big Data</i></h1>
      </div>
      <p>
        En este capítulo inicial, se introduce el concepto fundamental del
        <i>Big Data</i> y su papel transformador en la sociedad contemporánea.
        Se exploran las características distintivas que definen al
        <i>Big Data</i>, conocidas como las «5 V», y se examina cómo este
        fenómeno está revolucionando la forma en que organizaciones y personas
        toman decisiones en diversos sectores.
      </p>
      <Separador> </Separador>
      <div id="t_1_1" class="titulo-segundo color-acento-contenido">
        <h2>1.1 Definición y características del <i>Big Data</i></h2>
      </div>
      <div class="row bg3 align-items-center mb-5">
        <div class="col-lg-12 col-12 px-lg-5 px-4">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-12">
              <div class="row justify-content-center mb-4">
                <div class="col-lg-8 my-lg-0 my-3">
                  <p>
                    El término <i>Big Data</i> se refiere a conjuntos de datos
                    extremadamente grandes y complejos que superan la capacidad
                    de las herramientas de procesamiento de datos tradicionales.
                    Estos conjuntos de datos se caracterizan por lo que se
                    conocen como las «5 V»:
                  </p>
                  <ul class="lista-ul fa-ul">
                    <li>
                      <i class="fas fa-check v1"></i
                      ><span
                        ><b>Volumen:</b> cantidades masivas de datos, que van
                        desde terabytes hasta petabytes y más.</span
                      >
                    </li>
                    <hr />
                    <li>
                      <i class="fas fa-check v1"></i
                      ><span
                        ><b>Velocidad:</b> la rapidez con la que se generan y
                        procesan los datos.</span
                      >
                    </li>
                    <hr />
                    <li>
                      <i class="fas fa-check v1"></i
                      ><span
                        ><b>Variedad:</b> diversos tipos de datos estructurados,
                        semiestructurados y no estructurados.</span
                      >
                    </li>
                    <hr />
                    <li>
                      <i class="fas fa-check v1"></i
                      ><span
                        ><b>Veracidad:</b> la confiabilidad y precisión de los
                        datos.</span
                      >
                    </li>
                    <hr />
                    <li>
                      <i class="fas fa-check v1"></i
                      ><span
                        ><b>Valor:</b> la capacidad de convertir los datos en
                        información útil para la toma de decisiones.</span
                      >
                    </li>
                    <hr />
                  </ul>
                </div>
                <div class="col-lg-4 my-lg-0 my-3">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/temas/4.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                class="bloque-texto-g bloque-texto-g--inverso color-secundario p-3 p-sm-4 p-md-5"
              >
                <div
                  class="bloque-texto-g__img"
                  :style="{
                    'background-image': `url(${require('@/assets/curso/temas/6.png')})`,
                  }"
                ></div>
                <div class="bloque-texto-g__texto p-4">
                  <p class="mb-0">
                    La siguiente tabla ilustra las diferencias clave entre el
                    análisis de datos tradicional y el <i>Big Data</i>,
                    destacando la evolución en la capacidad de procesamiento y
                    gestión de la información. Mientras que el análisis
                    tradicional se enfoca en volúmenes menores de datos
                    estructurados y procesados por lotes, el <i>Big Data</i> se
                    caracteriza por su capacidad para manejar cantidades masivas
                    de datos de diferentes tipos (estructurados,
                    semiestructurados y no estructurados) en tiempo real. Esta
                    evolución ha impulsado el desarrollo de nuevas tecnologías
                    como Hadoop, Spark y bases de datos NoSQL, que permiten el
                    análisis a gran escala y la extracción de información
                    valiosa para la toma de decisiones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="titulo-sexto color-acento-botones">
            <h5>Tabla 1.</h5>
            <span
              >Principales estructuras de datos, casos de uso y
              limitaciones.</span
            >
          </div>
          <div class="tabla-a color-acento-botones mb-2">
            <table>
              <caption>
                Fuente: OIT, 2024.
              </caption>
              <thead>
                <tr>
                  <th>Aspecto</th>
                  <th>Análisis tradicional</th>
                  <th class="fst-italic">Big Data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Volumen de datos</td>
                  <td><em>Gigabytes</em></td>
                  <td><i>Terabytes</i> a <i>Petabytes</i></td>
                </tr>
                <tr>
                  <td>Velocidad de procesamiento</td>
                  <td>Por lotes (<i>batch</i>)</td>
                  <td>En tiempo real</td>
                </tr>
                <tr>
                  <td>Tipos de datos</td>
                  <td>Principalmente estructurados</td>
                  <td>Estructurados, semiestructurados y no estructurados</td>
                </tr>
                <tr>
                  <td>Escalabilidad</td>
                  <td>Vertical (mejor <i>hardware</i>)</td>
                  <td>Horizontal (más nodos)</td>
                </tr>
                <tr>
                  <td>Tecnología principal</td>
                  <td>Bases de datos relacionales</td>
                  <td>Hadoop, Spark, NoSQL</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_1_2" class="titulo-segundo color-acento-contenido">
        <h2>1.2 Importancia en el mundo actual</h2>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-5 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/7.png" alt="" />
        </div>
        <div class="col-lg-7 my-lg-0 my-3">
          <p>
            El <i>Big Data</i> ha revolucionado la forma en que las
            organizaciones toman decisiones y operan en diversos sectores. En el
            ámbito de los negocios, permite una mejor comprensión del
            comportamiento del cliente, la optimización de operaciones y el
            desarrollo de nuevos productos. En el sector salud, facilita la
            medicina personalizada, la investigación de enfermedades y la mejora
            de los sistemas de atención médica. A nivel gubernamental, el
            <i>Big Data</i> ayuda en la planificación urbana, la seguridad
            pública y la prestación de servicios eficientes. Finalmente, en el
            campo científico, impulsa descubrimientos en áreas como la genómica,
            la climatología y la física de partículas.
          </p>
        </div>
      </div>
      <div class="row bg3 align-items-center">
        <div class="col-lg-12 col-12 px-lg-5 px-4">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-12">
              <Separador> </Separador>
              <div id="t_1_3" class="titulo-segundo color-acento-contenido">
                <h2>1.3 Procesos asociados al <i>Big Data</i></h2>
              </div>
              <p>
                El manejo del <i>Big Data</i> implica varios procesos clave para
                poder extraer información valiosa de grandes volúmenes de datos.
              </p>
              <div class="row justify-content-center mb-5">
                <div class="col-lg-10">
                  <div class="titulo-sexto color-acento-botones">
                    <h5>Figura 1.</h5>
                    <span>Ecosistema del <i>Big Data</i></span>
                  </div>
                  <div class="bgfig p-5 brad mb-2">
                    <img
                      class="img-a img-t"
                      src="@/assets/curso/temas/8.svg"
                      alt="La Figura 1 se denomina «Ecosistema del Big Data» y presenta un diagrama donde se observan en secuencia los cinco procesos clave del Big Data: recolección, almacenamiento, procesamiento, análisis y visualización."
                    />
                  </div>
                  <figcaption>Fuente: OIT, 2024.</figcaption>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-4 my-3">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/temas/9.png"
                    alt=""
                  />
                </div>
                <div class="col-lg-8 my-3">
                  <CarouselCard class="mb-2" columnas="col-lg-12">
                    <div class="bg4 brad1 p-4 h-100">
                      <img
                        class="img-t mb-2"
                        src="@/assets/curso/temas/10.svg"
                        alt=""
                      />
                      <p class="mb-0">
                        En primer lugar, la recolección se encarga de capturar
                        datos de diversas fuentes, como sensores, redes
                        sociales, transacciones online, etc. Estos datos pueden
                        ser estructurados (como tablas de bases de datos) o no
                        estructurados (como texto, imágenes y videos).
                      </p>
                    </div>
                    <div class="bg5 brad1 p-4 h-100">
                      <img
                        class="img-t mb-2"
                        src="@/assets/curso/temas/10.svg"
                        alt=""
                      />
                      <p class="mb-0">
                        Una vez recopilados, los datos deben ser almacenados de
                        forma eficiente. Para ello, se utilizan sistemas
                        distribuidos y bases de datos NoSQL, que permiten
                        manejar grandes volúmenes de información de manera
                        escalable y flexible.
                      </p>
                    </div>
                    <div class="bg4 brad1 p-4 h-100">
                      <img
                        class="img-t mb-2"
                        src="@/assets/curso/temas/10.svg"
                        alt=""
                      />
                      <p class="mb-0">
                        El siguiente paso es el procesamiento de los datos, que
                        implica la aplicación de técnicas de procesamiento
                        paralelo y distribuido para transformarlos en un formato
                        adecuado para el análisis. Esto puede incluir la
                        limpieza de datos, la transformación de formatos y la
                        agregación de información.
                      </p>
                    </div>
                    <div class="bg5 brad1 p-4 h-100">
                      <img
                        class="img-t mb-2"
                        src="@/assets/curso/temas/10.svg"
                        alt=""
                      />
                      <p class="mb-0">
                        Posteriormente, se realiza el análisis de los datos,
                        empleando técnicas avanzadas como el aprendizaje
                        automático y la inteligencia artificial para identificar
                        patrones, tendencias y anomalías. Este análisis permite
                        obtener <i>insights</i> representativos para la toma de
                        decisiones.
                      </p>
                    </div>
                    <div class="bg4 brad1 p-4 h-100">
                      <img
                        class="img-t mb-2"
                        src="@/assets/curso/temas/10.svg"
                        alt=""
                      />
                      <p class="mb-0">
                        Finalmente, los resultados del análisis se presentan
                        mediante visualizaciones gráficas que facilitan la
                        comprensión de la información. Estas visualizaciones
                        pueden incluir gráficos, mapas, dashboards, etc., que
                        permiten comunicar los hallazgos de forma clara y
                        concisa.
                      </p>
                    </div>
                    <div class="bg5 brad1 p-4 h-100">
                      <img
                        class="img-t mb-2"
                        src="@/assets/curso/temas/10.svg"
                        alt=""
                      />
                      <p class="mb-0">
                        Conviene recordar que el <i>Big Data</i> ha transformado
                        la forma en que se maneja y analiza la información en la
                        actualidad, generando nuevas oportunidades y desafíos en
                        múltiples campos de la actividad humana a medida que se
                        avanza en la era digital. La capacidad de aprovechar el
                        <i>Big Data</i> de manera efectiva se ha convertido en
                        una habilidad clave para profesionales y organizaciones,
                        permitiéndoles extraer <i>insights</i> valiosos y útiles
                        de grandes cantidades de datos desestructurados y
                        complejos. Esta habilidad es esencial para tomar
                        decisiones informadas y estratégicas en diversas
                        industrias, como la salud, la educación, las finanzas y
                        el marketing.
                      </p>
                    </div>
                    <div class="bg4 brad1 p-4 h-100">
                      <img
                        class="img-t mb-2"
                        src="@/assets/curso/temas/10.svg"
                        alt=""
                      />
                      <p class="mb-0">
                        No obstante, lo anterior, también se plantean desafíos,
                        como la necesidad de contar con expertos/as en análisis
                        de datos y la preocupación por la privacidad y la
                        seguridad de los datos. Por lo tanto, es fundamental que
                        los profesionales y las organizaciones inviertan en el
                        desarrollo de habilidades y tecnologías para aprovechar
                        el potencial del <i>Big Data</i> y enfrentar los
                        desafíos que plantea. Para aquellos/as que inician en el
                        estudio de los temas relacionados con el
                        <i>Big Data</i>, se recomienda seguir aprendiendo sobre
                        matemáticas, estadística y programación, ya que estas
                        habilidades son fundamentales para el análisis de datos.
                        Además, es importante estar al tanto de las últimas
                        tendencias y herramientas en el campo del
                        <i>Big Data</i>, y tener una mentalidad analítica y
                        curiosa para poder encontrar nuevas posibilidades y
                        miradas sobre los datos.
                      </p>
                    </div>
                  </CarouselCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
