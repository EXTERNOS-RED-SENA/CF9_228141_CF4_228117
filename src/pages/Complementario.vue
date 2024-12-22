<template>
  <div class="curso-main-container complementario">
    <BannerInterno
      icono="far fa-folder-open"
      titulo="Material complementario"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th colspan="3" scope="col">Tema</th>
              <th colspan="5" scope="col">Referencia APA del material</th>
              <th colspan="2" scope="col">Tipo</th>
              <th colspan="2" scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in computedData"
              :key="'complementario-' + index"
            >
              <td
                class="text-start"
                colspan="3"
                scope="row"
                v-html="item.tema"
              ></td>
              <td
                class="text-start"
                colspan="5"
                scope="row"
                v-html="item.referencia"
              ></td>
              <td colspan="2" v-html="item.tipo"></td>
              <td colspan="2">
                <div class="complementario__enlaces">
                  <a
                    v-for="(link, linkIndex) of item.link"
                    :key="linkIndex"
                    class="complementario__btn"
                    :href="link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i
                  ></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: 'Introducción al <i>BIG DATA</i>',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023c, noviembre 21). La historia de la <i>Big Data</i>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=Qe2JH-TpfiQ',
        },
        {
          tema: '3. Lenguajes de Programación para analítica de datos',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2022, abril 25). Procesamiento y análisis de datos: introducción.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=1IEb56Z0l0o',
        },
        {
          tema: '3. Lenguajes de Programación para analítica de datos',
          referencia: 'Paradinas, I. (2021, March 9). Curso R base.',
          tipo: 'Portal web',
          link: 'https://bookdown.org/paradinas_iosu/Prueba/',
        },
        {
          tema: '4. Analítica de datos',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023a, marzo 24). Fundamentos de la analítica de datos – Introducción.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=wBvDHCTbW8A',
        },
        {
          tema: '4. Analítica de datos',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023b, septiembre 5). Limpieza y transformación de datos con Python.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=jL4cm_0X68Y',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
