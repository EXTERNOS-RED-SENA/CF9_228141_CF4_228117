<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>6</span></div>
        <h1>Herramientas informáticas para analítica de datos</h1>
      </div>
      <div
        class="bloque-texto-g bloque-texto-g--inverso color-primario p-3 p-sm-4 p-md-5"
      >
        <div
          class="bloque-texto-g__img"
          :style="{
            'background-image': `url(${require('@/assets/curso/temas/69.png')})`,
          }"
        ></div>
        <div class="bloque-texto-g__texto p-4">
          <p class="mb-0">
            En la era del <i>Big Data</i>, contar con las herramientas adecuadas
            es tan importante como tener acceso a los datos mismos. Las
            herramientas informáticas para analítica de datos son el puente
            entre los datos brutos y los <i>insights</i> accionables que
            impulsan la toma de decisiones. En este capítulo, se presenta una
            variedad de herramientas esenciales, desde <i>software</i> de
            análisis estadístico hasta plataformas de visualización de datos.
          </p>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_6_1" class="titulo-segundo color-acento-contenido">
        <h2>6.1 Instalación y configuración</h2>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-lg-0 my-3">
          <p>
            Antes de abordar las capacidades de las herramientas, es necesario
            entender el proceso de instalación y configuración. La mayoría de
            las herramientas de analítica de datos modernas están diseñadas para
            ser relativamente fáciles de instalar, pero la configuración
            adecuada puede marcar la diferencia entre una experiencia frustrante
            y un flujo de trabajo eficiente.
          </p>
          <p>
            Para herramientas como R y Python, el proceso generalmente implica
            descargar el <i>software</i> base y luego instalar un entorno de
            desarrollo integrado (IDE) como RStudio o PyCharm. Estas IDE
            proporcionan una interfaz amigable y funcionalidades adicionales que
            facilitan el trabajo con datos.
          </p>
          <div class="row justify-content-center align-items-center mb-4">
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/70.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                En el caso de herramientas más especializadas, como Tableau o
                Power BI, el proceso de instalación suele ser más directo, pero
                la configuración puede implicar pasos adicionales como la
                conexión a fuentes de datos o la configuración de permisos de
                usuario.
              </p>
            </div>
          </div>
          <div class="bg9 brad p-3 mb-4">
            <p class="mb-0">
              Es importante destacar que muchas herramientas modernas ofrecen
              opciones basadas en la nube, lo que puede simplificar
              significativamente el proceso de instalación y configuración.
              Plataformas como Google Colab para Python o Azure Notebooks
              eliminan la necesidad de instalación local, permitiendo a los
              analistas comenzar a trabajar casi instantáneamente.
            </p>
          </div>
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/71.png" alt="" />
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_6_2" class="titulo-segundo color-acento-contenido">
        <h2>6.2 Clasificación y conversión de datos</h2>
      </div>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-auto">
          <img class="img-a img-t" src="@/assets/curso/temas/72.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4">
          <p class="mb-0">
            Una vez que las herramientas están instaladas y configuradas, el
            siguiente paso es preparar los datos para el análisis. Esto implica
            clasificar los datos en tipos apropiados y, a menudo, convertirlos
            de un formato a otro. La clasificación de datos es fundamental para
            el análisis correcto. Las herramientas de analítica de datos
            generalmente reconocen varios tipos de datos, como ya se mencionó
            previamente, p. ej. numéricos (enteros, flotantes), categóricos
            (nominales, ordinales), fechas y horas, texto, booleanos, etc.
          </p>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-lg-0 my-3">
          <div class="bg13 brad p-3">
            <p>
              La conversión de datos puede ser necesaria por varias razones,
              como compatibilidad con diferentes herramientas o requisitos
              específicos de análisis. P. ej. Se podría necesitar convertir
              fechas de un formato <i>string</i> a un formato de fecha real, o
              convertir variables categóricas en variables dummy para análisis
              de regresión.
            </p>
            <p>
              Herramientas como pandas en Python y dplyr en R ofrecen funciones
              poderosas para estas tareas. Por ejemplo, en pandas:
            </p>
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-auto">
                <img
                  class="img-a img-t"
                  src="@/assets/curso/temas/73.png"
                  alt=""
                />
              </div>
              <div class="col pt-lg-0 pt-md-4">
                <img
                  class="img-a img-t"
                  src="@/assets/curso/temas/74.svg"
                  alt="La imagen muestra los pasos de preprocesamiento de datos en Python usando la librería pandas."
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-a img-t" src="@/assets/curso/temas/75.png" alt="" />
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_6_3" class="titulo-segundo color-acento-contenido">
        <h2>6.3 Transformación y ordenamiento</h2>
      </div>
      <p class="mb-4">
        La transformación de datos es un paso requerido en el proceso de
        análisis. Implica modificar los datos para hacerlos más adecuados para
        el análisis previsto. Esto puede incluir:
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-7 my-lg-0 my-3">
          <div class="bg6 p-3 brad j1 h-100">
            <ul class="mb-0 lista-ul fa-ul">
              <li>
                <i class="fas fa-check v1"></i
                ><span>Manejo de valores faltantes</span>
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span
                  >Normalización o estandarización de variables numéricas</span
                >
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span
                  >Creación de nuevas variables basadas en las existentes</span
                >
              </li>
              <li class="mb-0">
                <i class="fas fa-check v1"></i
                ><span class="mb-0">Agregación de datos</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-5 my-lg-0 my-3 j1">
          <img class="img-a img-t" src="@/assets/curso/temas/76.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-a img-t" src="@/assets/curso/temas/77.png" alt="" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <p>
            El ordenamiento de datos, por otro lado, es importante para la
            exploración inicial de datos y para ciertos tipos de análisis que
            dependen del orden de las observaciones. Tanto R como Python ofrecen
            potentes capacidades para estas tareas. Por ejemplo, en R usando
            dplyr:
          </p>
          <div class="bg13 brad p-3">
            <div class="row justify-content-center align-items-center">
              <div class="col">
                <img
                  class="img-a img-t"
                  src="@/assets/curso/temas/78.svg"
                  alt=""
                />
              </div>
              <div class="col-lg-auto d-none d-lg-block">
                <img
                  class="img-a img-t"
                  src="@/assets/curso/temas/79.svg"
                  alt="El código en la imagen demuestra los pasos de preprocesamiento de datos en R."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_6_4" class="titulo-segundo color-acento-contenido">
        <h2>6.4 Importación y exportación de datos</h2>
      </div>
      <div
        class="row justify-content-center align-items-center bg6 br-d p-4 brad mb-5"
      >
        <div class="col-lg-auto">
          <img class="img-a img-t" src="@/assets/curso/temas/80.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4">
          <p class="mb-0">
            La capacidad de importar datos de diversas fuentes y exportarlos en
            diferentes formatos es esencial en cualquier flujo de trabajo de
            análisis de datos. Las herramientas modernas de analítica de datos
            ofrecen una amplia gama de opciones para estas tareas. La siguiente
            tabla presenta algunos de los formatos de importación y exportación
            de datos más comunes en el análisis de datos. Estos formatos
            permiten a los analistas trabajar con insumos de diversas fuentes y
            utilizar diferentes herramientas para su procesamiento y análisis.
            La elección del formato adecuado depende de factores como el tipo de
            datos, el tamaño del conjunto de datos y las herramientas que se
            utilizarán.
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="titulo-sexto color-acento-botones">
            <h5>Tabla 8.</h5>
            <span>Formatos comunes de importación y exportación de datos</span>
          </div>
          <div class="tabla-a color-acento-botones">
            <table>
              <caption>
                Fuente: OIT, 2024.
              </caption>
              <thead>
                <tr>
                  <th>Formato</th>
                  <th>Descripción</th>
                  <th>Herramientas de soporte</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CSV</td>
                  <td>Valores separados por comas, formato texto plano</td>
                  <td>R, Python, Excel, Tableau</td>
                </tr>
                <tr>
                  <td>JSON</td>
                  <td>
                    JavaScript Object Notation, formato de intercambio de datos
                    ligero
                  </td>
                  <td>R, Python, MongoDB</td>
                </tr>
                <tr>
                  <td>Excel (.xlsx)</td>
                  <td>Formato de hoja de cálculo de Microsoft</td>
                  <td>R, Python, Tableau, Power BI</td>
                </tr>
                <tr>
                  <td>SQL</td>
                  <td>Consultas a bases de datos relacionales</td>
                  <td>R, Python, Tableau, Power BI</td>
                </tr>
                <tr>
                  <td>API Web</td>
                  <td>Interfaces de programación de aplicaciones</td>
                  <td>R, Python</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_6_5" class="titulo-segundo color-acento-contenido">
        <h2>6.5 Uso de expresiones regulares</h2>
      </div>
      <p>
        Las expresiones regulares, o regex, son una herramienta poderosa para el
        procesamiento de texto y la búsqueda de patrones. Son especialmente
        útiles cuando se trabaja con datos no estructurados o semiestructurados.
        En el contexto de la analítica de datos, las expresiones regulares se
        utilizan comúnmente para:
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-8 my-lg-0 my-3">
          <div class="bg6 p-3 brad j1 mb-4">
            <ul class="mb-0 lista-ul fa-ul">
              <li>
                <i class="fas fa-check v1"></i
                ><span>Limpieza de datos textuales.</span>
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span
                  >Extracción de información específica de cadenas de
                  texto.</span
                >
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span
                  >Validación de formatos (por ejemplo, direcciones de correo
                  electrónico, números de teléfono).</span
                >
              </li>
              <p class="mb-0">
                Tanto R como Python tienen soporte integrado para expresiones
                regulares. Por ejemplo, en Python:
              </p>
            </ul>
          </div>
          <div class="bg2 p-3 brad j1">
            <img class="img-a img-t" src="@/assets/curso/temas/81.svg" alt="" />
          </div>
        </div>
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-a img-t" src="@/assets/curso/temas/82.png" alt="" />
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_6_6" class="titulo-segundo color-acento-contenido">
        <h2>6.6 Manejo de funciones avanzadas</h2>
      </div>
      <p>
        Las herramientas de analítica de datos modernas ofrecen una amplia gama
        de funciones avanzadas que permiten a los analistas realizar operaciones
        complejas con relativa facilidad. Estas funciones pueden abarcar desde
        operaciones estadísticas avanzadas hasta algoritmos de aprendizaje
        automático. Por ejemplo, scikit-learn en Python ofrece una amplia gama
        de algoritmos de machine learning:
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-6 my-lg-0 my-3">
          <div class="bg13 p-3 brad j1 h-100">
            <img class="img-a img-t" src="@/assets/curso/temas/83.svg" alt="" />
          </div>
        </div>
        <div class="col-lg-6 my-lg-0 my-3">
          <div class="bgi p-3 brad j1 h-100">
            <div class="row justify-content-center align-items-center">
              <div class="col">
                <img
                  class="img-a img-t"
                  src="@/assets/curso/temas/84.svg"
                  alt="La imagen muestra los pasos de preprocesamiento. Cargar módulos de sklearn para selección de modelo, división del conjunto de datos de entrenamiento y prueba, y métricas de evaluación. Dividir los datos en conjuntos de entrenamiento y prueba. Crear y entrenar un modelo RandomForestClassifier. Hacer predicciones con el modelo entrenado y evaluar la precisión."
                />
              </div>
              <div class="col-lg-auto d-none d-lg-block">
                <img
                  class="img-a img-t"
                  src="@/assets/curso/temas/85.png"
                  alt="La imagen muestra los pasos de preprocesamiento. Cargar módulos de sklearn para selección de modelo, división del conjunto de datos de entrenamiento y prueba, y métricas de evaluación. Dividir los datos en conjuntos de entrenamiento y prueba. Crear y entrenar un modelo RandomForestClassifier. Hacer predicciones con el modelo entrenado y evaluar la precisión."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_6_7" class="titulo-segundo color-acento-contenido">
        <h2>6.7 Limpieza basada en similitudes</h2>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-3 my-lg-0 my-3 j1">
          <img class="img-a img-t" src="@/assets/curso/temas/86.png" alt="" />
        </div>
        <div class="col-lg-9 my-lg-0 my-3">
          <p>
            La limpieza de datos basada en similitudes es una técnica avanzada
            que se utiliza para identificar y corregir inconsistencias en los
            datos, especialmente en campos de texto. Esta técnica es
            particularmente útil para manejar errores de entrada de datos,
            diferentes formas de escribir el mismo nombre, o para consolidar
            categorías similares. Herramientas como OpenRefine o la biblioteca
            fuzzywuzzy en Python son excelentes para este tipo de tareas. Por
            ejemplo, usando fuzzywuzzy:
          </p>
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-8">
              <div class="bg13 brad p-3 j1 h-100">
                <img
                  class="img-a img-t"
                  src="@/assets/curso/temas/88.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="col-lg-4 d-none d-lg-block">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/87.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row bg3 align-items-center">
        <div class="px-lg-5 px-4">
          <Separador> </Separador>
          <div id="t_6_8" class="titulo-segundo color-acento-contenido">
            <h2>
              6.8 Licencias: <i>software</i> comercial vs. <i>software</i> libre
            </h2>
          </div>
          <div
            class="bloque-texto-g bloque-texto-g--inverso color-primario p-3 p-sm-4 p-md-5 mb-5"
          >
            <div
              class="bloque-texto-g__img"
              :style="{
                'background-image': `url(${require('@/assets/curso/temas/69.png')})`,
              }"
            ></div>
            <div class="bloque-texto-g__texto p-4">
              <p class="mb-0">
                La elección entre <i>software</i> comercial y
                <i>software</i> libre es una consideración importante en la
                selección de herramientas de analítica de datos. Cada opción
                tiene sus propias ventajas y desventajas. El
                <i>software</i> comercial, como SAS o SPSS, a menudo ofrece
                interfaces más pulidas, soporte técnico dedicado y puede ser más
                fácil de integrar en entornos empresariales existentes. Sin
                embargo, puede ser costoso y menos flexible para la
                personalización. Por otro lado, el <i>software</i> libre, como R
                o Python, ofrece gran flexibilidad, una comunidad activa de
                desarrolladores y usuarios, y la capacidad de personalizar el
                <i>software</i> según las necesidades específicas. Sin embargo,
                puede requerir más habilidades técnicas para su configuración y
                uso efectivo.
              </p>
            </div>
          </div>
          <p>
            La elección entre <i>software</i> comercial y libre dependerá de
            factores como el presupuesto disponible, las habilidades técnicas
            del equipo, los requisitos específicos del proyecto y las políticas
            de la organización.
          </p>
          <div class="row justify-content-center mb-5">
            <div class="col-lg-10">
              <div class="titulo-sexto color-acento-botones">
                <h5>Figura 4.</h5>
                <span
                  >Comparación entre <i>software</i> comercial y
                  <i>software</i> libre para analítica de datos</span
                >
              </div>
              <div class="bgfig p-5 brad mb-2">
                <img
                  class="img-a img-t"
                  src="@/assets/curso/temas/89.svg"
                  alt="La Figura 4 se denomina «Comparación entre software comercial y libre para analítica de datos», allí se resaltan características propias y compartidas por cada tipo de software."
                />
              </div>
              <figcaption>Fuente: OIT, 2024.</figcaption>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row justify-content-center align-items-center bg6 br-d p-4 brad"
      >
        <div class="col-lg-auto">
          <img class="img-a img-t" src="@/assets/curso/temas/90.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4">
          <p class="mb-0">
            En conclusión, las herramientas informáticas para analítica de datos
            son diversas y poderosas, cada una con sus propias fortalezas y
            casos de uso óptimos. La clave para el éxito en la analítica de
            datos no es solo dominar una herramienta específica, sino entender
            los principios subyacentes y ser capaz de elegir y aplicar la
            herramienta adecuada para cada tarea. A medida que el campo de la
            analítica de datos continúa evolucionando, también lo harán estas
            herramientas, ofreciendo nuevas capacidades y oportunidades para
            extraer <i>insights</i> valiosos de los datos.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema6',
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
