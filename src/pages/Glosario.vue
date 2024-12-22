<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Algoritmo',
          significado:
            'Secuencia de pasos lógicos y bien definidos para resolver un problema o realizar una tarea.',
        },
        {
          termino: 'Analítica de Datos',
          significado:
            'Proceso de examinar, limpiar, transformar y modelar datos para descubrir información útil y apoyar la toma de decisiones.',
        },
        {
          termino: 'API (<i>Application Programming Interface</i>)',
          significado:
            'Conjunto de reglas y protocolos que permiten que diferentes aplicaciones se comuniquen entre sí.',
        },
        {
          termino: '<i>Big Data</i>',
          significado:
            'Conjuntos de datos extremadamente grandes y complejos que superan la capacidad de las herramientas de procesamiento tradicionales.',
        },
        {
          termino: 'Datos estructurados',
          significado:
            'Datos que siguen un formato predefinido y se organizan fácilmente en bases de datos relacionales.',
        },
        {
          termino: 'Datos no estructurados',
          significado:
            'Datos que no siguen un formato predefinido, como texto libre, imágenes o videos.',
        },
        {
          termino: 'ETL (<i>Extract, Transform, Load</i>)',
          significado:
            'Proceso de extracción, transformación y carga de datos desde múltiples fuentes a un almacén de datos.',
        },
        {
          termino: 'Hadoop',
          significado:
            '<em>Framework</em> de <em>software</em> de código abierto para almacenar y procesar grandes conjuntos de datos en <i>clusters</i> de computadoras.',
        },
        {
          termino: '<i>Insights</i>',
          significado:
            'Descubrimientos o comprensiones significativas extraídas del análisis de grandes volúmenes de datos. Estos hallazgos revelan patrones, tendencias o relaciones ocultas que permiten a las organizaciones tomar decisiones informadas y estratégicas para mejorar sus operaciones, productos o servicios.',
        },
        {
          termino: '<i>Machine learning</i>',
          significado:
            'Rama de la inteligencia artificial que se centra en el desarrollo de algoritmos que pueden «aprender» de los datos y hacer predicciones.',
        },
        {
          termino: 'NoSQL',
          significado:
            'Sistemas de gestión de bases de datos que proporcionan un mecanismo para almacenar y recuperar datos modelados de formas diferentes a las tablas relacionales.',
        },
        {
          termino: 'Python',
          significado:
            'Lenguaje de programación de alto nivel, interpretado y de propósito general, ampliamente utilizado en análisis de datos y <i>machine learning</i>.',
        },
        {
          termino: 'R',
          significado:
            'Lenguaje de programación y entorno de software libre para computación estadística y gráficos.',
        },
        {
          termino: 'SQL (<i>Structured Query Language</i>)',
          significado:
            'Lenguaje estándar para gestionar y consultar bases de datos relacionales.',
        },
        {
          termino: 'Visualización de datos',
          significado:
            'Representación gráfica de información y datos para facilitar la comprensión y el análisis.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
