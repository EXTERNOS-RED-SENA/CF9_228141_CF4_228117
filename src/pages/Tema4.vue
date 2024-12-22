<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>4</span></div>
        <h1>Analítica de datos</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-a img-t" src="@/assets/curso/temas/55.png" alt="" />
        </div>
        <div class="col-lg-5 my-lg-0 my-3">
          <div class="bg14 p-3 brad j1 h-100">
            <p class="mb-0">
              La analítica de datos es el arte y la ciencia de transformar datos
              en <i>insights</i> accionables. Este capítulo introduce las
              técnicas fundamentales de análisis de datos, mencionando desde
              métodos estadísticos básicos hasta técnicas avanzadas de
              <i>machine learning</i>, explorando cómo estas herramientas
              permiten descubrir patrones y tendencias en grandes conjuntos de
              datos.
            </p>
          </div>
        </div>
        <div class="col-lg-3 my-lg-0 my-3 j1">
          <img class="img-a img-t" src="@/assets/curso/temas/56.png" alt="" />
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_4_1" class="titulo-segundo color-acento-contenido">
        <h2>4.1 Introducción y conceptos básicos</h2>
      </div>
      <p>
        La analítica de datos es el proceso de examinar, limpiar, transformar y
        modelar datos con el objetivo de descubrir información útil, informar
        conclusiones y apoyar la toma de decisiones. En la era del
        <i>Big Data</i>, la analítica de datos se ha convertido en una
        disciplina estratégica para las organizaciones de todos los tamaños y
        sectores.
      </p>
      <p class="mb-5">
        La analítica de datos abarca una amplia gama de técnicas y enfoques,
        desde el análisis descriptivo simple hasta métodos predictivos y
        prescriptivos avanzados. A medida que el volumen y la complejidad de los
        datos disponibles han aumentado, también lo han hecho las herramientas y
        metodologías para analizarlos. Algunos conceptos clave en analítica de
        datos se presentan a continuación.
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-3 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/57.png" alt="" />
        </div>
        <div class="col-lg-9 my-lg-0 my-3">
          <div class="bg12 brad p-4 mb-4 h-100 j1">
            <ul class="mb-0 lista-ul fa-ul">
              <li>
                <i class="fas fa-check v1"></i
                ><span
                  ><b>Datos estructurados vs. no estructurados:</b> los datos
                  estructurados siguen un formato predefinido y se organizan
                  fácilmente en bases de datos relacionales. Los datos no
                  estructurados, como texto, imágenes o videos, no tienen una
                  estructura predefinida y requieren técnicas especiales para su
                  análisis.</span
                >
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span
                  ><b>Minería de datos:</b> el proceso de descubrir patrones y
                  relaciones en grandes conjuntos de datos utilizando métodos de
                  la intersección de la estadística, el aprendizaje automático y
                  los sistemas de bases de datos.</span
                >
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span
                  ><b>Aprendizaje automático:</b> un subconjunto de la
                  inteligencia artificial que se centra en el desarrollo de
                  algoritmos que pueden «aprender» de los datos y hacer
                  predicciones o tomar decisiones.</span
                >
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span
                  ><b>Visualización de datos:</b> la presentación gráfica de
                  información y datos que facilita la comprensión de tendencias,
                  valores atípicos y patrones en los datos.</span
                >
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span
                  ><b>Análisis predictivo:</b> el uso de datos históricos,
                  técnicas estadísticas y de aprendizaje automático para hacer
                  predicciones sobre eventos futuros o comportamientos.</span
                >
              </li>
              <li class="mb-0">
                <i class="fas fa-check v1"></i
                ><span class="mb-0"
                  ><b>Análisis en tiempo real:</b> el análisis de datos tan
                  pronto como se generan o reciben, permitiendo decisiones y
                  acciones inmediatas.</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_4_2" class="titulo-segundo color-acento-contenido">
        <h2>4.2 Técnicas de análisis de datos</h2>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-9 my-lg-0 my-3">
          <p>
            Las técnicas de análisis de datos son numerosas y variadas,
            abarcando desde métodos estadísticos tradicionales hasta algoritmos
            de aprendizaje automático avanzados. Algunas de las técnicas más
            comunes incluyen:
          </p>
          <div class="row justify-content-center">
            <div class="col-lg-7 my-lg-0 my-3">
              <div class="bg4 brad p-3 h-100 j1">
                <ul class="mb-0 lista-ul fa-ul">
                  <li>
                    <i class="fas fa-check v1"></i
                    ><span
                      ><b>Análisis de regresión:</b> se utiliza para examinar la
                      relación entre variables dependientes e independientes.
                      Los tipos comunes incluyen regresión lineal, logística y
                      polinomial.</span
                    >
                  </li>
                  <li>
                    <i class="fas fa-check v1"></i
                    ><span
                      ><b>Análisis de series temporales:</b> se centra en datos
                      que se recopilan a lo largo del tiempo, buscando
                      tendencias, estacionalidad y otros patrones
                      temporales.</span
                    >
                  </li>
                  <li>
                    <i class="fas fa-check v1"></i
                    ><span
                      ><b>Análisis de conglomerados (<em>clustering</em>):</b>
                      agrupa objetos similares en categorías o grupos, útil para
                      la segmentación de clientes o la identificación de
                      patrones de comportamiento.</span
                    >
                  </li>
                  <li>
                    <i class="fas fa-check v1"></i
                    ><span
                      ><b
                        >Análisis de texto y procesamiento del lenguaje natural
                        (NLP):</b
                      >
                      se utiliza para extraer información significativa de
                      grandes volúmenes de texto no estructurado.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-5 my-lg-0 my-3">
              <div class="bg13 brad p-3 h-100 j1">
                <ul class="mb-0 lista-ul fa-ul">
                  <li>
                    <i class="fas fa-check v1"></i
                    ><span
                      ><b>Análisis de redes sociales:</b> examina las relaciones
                      entre entidades en una red, útil para comprender la
                      difusión de información o la influencia en las redes
                      sociales.</span
                    >
                  </li>
                  <li>
                    <i class="fas fa-check v1"></i
                    ><span
                      ><b>Análisis de sentimientos:</b> una aplicación
                      específica del NLP que busca determinar la actitud o
                      emoción expresada en un texto.</span
                    >
                  </li>
                  <li>
                    <i class="fas fa-check v1"></i
                    ><span
                      ><b>Técnicas de reducción de dimensionalidad:</b> como el
                      Análisis de Componentes Principales (PCA), que se utiliza
                      para reducir la complejidad de los datos manteniendo sus
                      características esenciales.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 my-lg-0 my-3 j1">
          <img class="img-a img-t" src="@/assets/curso/temas/58.png" alt="" />
        </div>
      </div>
      <div class="row bg3 align-items-center">
        <div class="px-lg-5 px-4">
          <Separador> </Separador>
          <div id="t_4_3" class="titulo-segundo color-acento-contenido">
            <h2>4.3 Procesos en la analítica de datos</h2>
          </div>
          <p>
            El proceso de analítica de datos típicamente sigue un flujo de
            trabajo que incluye varias etapas. Aunque puede haber variaciones
            dependiendo del contexto específico, un proceso general incluye los
            pasos que se ilustran en la siguiente figura.
          </p>
          <div class="row justify-content-center mb-5">
            <div class="col-lg-10">
              <div class="titulo-sexto color-acento-botones">
                <h5>Figura 3.</h5>
                <span>Proceso general de la analítica de datos</span>
              </div>
              <div class="bgfig p-5 brad mb-2">
                <img
                  class="img-a img-t"
                  src="@/assets/curso/temas/59.svg"
                  alt="La Figura 3 se denomina «Proceso general de la analítica de datos» y presenta una secuencia que va desde la definición del problema y la recolección de datos (momentos 1 y 2), hasta la comunicación de resultados y la implementación y monitoreo (momentos 8 y 9)."
                />
              </div>
              <figcaption>Fuente: OIT, 2024.</figcaption>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-5 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/60.png" alt="" />
        </div>
        <div class="col-lg-7 my-lg-0 my-3">
          <div class="bg12 brad p-4 mb-4 h-100 j1">
            <p>
              Primero, se define con precisión el problema que se busca resolver
              mediante el análisis (1). Luego, se recopilan los datos relevantes
              de diversas fuentes, como bases de datos, APIs, encuestas o
              experimentos (2). Una vez obtenidos, los datos se someten a un
              proceso de limpieza y preprocesamiento, donde se corrigen errores,
              se eliminan duplicados y se preparan para el análisis, etapa que
              suele requerir un esfuerzo considerable (3).
            </p>
            <p class="mb-0">
              Posteriormente, se realiza una exploración y visualización de los
              datos para comprender sus características, identificar patrones y
              relaciones entre variables (4). Con esta base, se procede al
              modelado de datos, utilizando técnicas estadísticas o de
              aprendizaje automático, para construir modelos que describan o
              predigan fenómenos (5). La calidad y precisión de estos modelos se
              evalúa mediante métricas y técnicas de validación (6).
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-lg-0 my-3">
          <p>
            Finalmente, se interpretan los resultados del análisis,
            traduciéndolos en información útil para la toma de decisiones (7), y
            se comunican de forma clara y concisa a través de visualizaciones e
            informes (8). El proceso culmina con la implementación de las
            recomendaciones derivadas del análisis y el monitoreo continuo de
            los resultados para asegurar su validez y utilidad a lo largo del
            tiempo (9).
          </p>
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/62.svg"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                De forma complementaria, la siguiente tabla resume los desafíos
                comunes que se encuentran en cada etapa del proceso de analítica
                de datos. Desde la definición inicial del problema hasta la
                implementación final de las soluciones, cada fase presenta
                obstáculos específicos que deben ser abordados para asegurar el
                éxito del análisis. Comprender estos desafíos puede ayudar a los
                analistas y demás técnicos de datos a anticipar y planificar
                estrategias para superarlos de manera efectiva.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/61.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="titulo-sexto color-acento-botones">
            <h5>Tabla 5.</h5>
            <span
              >Desafíos comunes en las etapas del proceso de analítica de
              datos</span
            >
          </div>
          <div class="tabla-a color-acento-botones text-center">
            <table>
              <caption>
                Fuente: OIT, 2024.
              </caption>
              <thead>
                <tr>
                  <th>Etapa</th>
                  <th>Desafíos comunes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Definición del problema</td>
                  <td>
                    Falta de claridad en los objetivos, preguntas mal formuladas
                  </td>
                </tr>
                <tr>
                  <td>Recolección de datos</td>
                  <td>Acceso limitado a datos, datos incompletos o sesgados</td>
                </tr>
                <tr>
                  <td>Limpieza de datos</td>
                  <td>
                    Datos inconsistentes, valores atípicos, formatos
                    incompatibles
                  </td>
                </tr>
                <tr>
                  <td>Exploración de datos</td>
                  <td>
                    Conjuntos de datos muy grandes, relaciones complejas entre
                    variables
                  </td>
                </tr>
                <tr>
                  <td>Modelado</td>
                  <td>
                    Selección del modelo apropiado,
                    <i>overfitting, underfitting.</i>
                  </td>
                </tr>
                <tr>
                  <td>Evaluación</td>
                  <td>
                    Elección de métricas apropiadas, validación en datos del
                    mundo real
                  </td>
                </tr>
                <tr>
                  <td>Interpretación</td>
                  <td>Correlación vs. causalidad, sesgo de confirmación</td>
                </tr>
                <tr>
                  <td>Comunicación</td>
                  <td>Explicar resultados técnicos a audiencias no técnicas</td>
                </tr>
                <tr>
                  <td>Implementación</td>
                  <td>
                    Resistencia al cambio, integración con sistemas existentes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema4',
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
