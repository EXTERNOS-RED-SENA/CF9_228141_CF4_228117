<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'De Vries, A. & Meys, J. (2012). R For Dummies. John Wiley & Sons.',
      },
      {
        referencia:
          'Günther, W. A., Rezazade Mehrizi, M. H., Huysman, M. & Feldberg, F. (2017). Debating <i>Big Data</i>: A literature review on realizing value from <i>Big Data</i>. Journal of Strategic Information Systems, 26(3), 191–209. ',
        link: 'https://doi.org/10.1016/j.jsis.2017.07.003',
      },
      {
        referencia:
          'Hurwitz, J. S., Nugent, A., Halper, F. & Kaufman, M. (2013). <i>Big Data</i> For Dummies. John Wiley & Sons.',
      },
      {
        referencia:
          'Institute, O. P. (2023). Python Essentials 1: Beginner Course. Open Education and Development Group LLC.',
      },
      {
        referencia:
          'Jones, H. (2018). Analítica de Datos: Una guía esencial para principiantes en minería de datos, recolección de datos, análisis de <i>Big Data</i> para negocios y conceptos de inteligencia empresarial. Independently Published.',
      },
      {
        referencia:
          'McKinsey, W. (2023). Python para análisis de datos. Anaya Multimedia.',
      },
      {
        referencia:
          'Morales, H. a. H. (2018). Mayer-Schönberger, V. y Cukier, K. (2013). <i>Big Data</i>. La revolución de los datos masivos. Clivajes Revista De Ciencias Sociales, 9, 189. ',
        link: 'https://doi.org/10.25009/clivajes-rcs.v0i9.2536',
      },
      {
        referencia:
          'Oussous, A., Benjelloun, F. Z., Ait Lahcen, A. & Belfkih, S. (2018, October 1). <i>Big Data</i> technologies: A survey. Journal of King Saud University - Computer and Information Sciences. King Saud bin Abdulaziz University. ',
        link: 'https://doi.org/10.1016/j.jksuci.2017.06.001',
      },
      {
        referencia:
          'Shovic, J. C., & Simpson, A. (2019). Python All-in-One For Dummies. John Wiley & Sons.',
      },
      {
        referencia:
          'Wickham, H. & Grolemund, G. (2016). R for Data Science: Import, Tidy, Transform, Visualize, and Model Data. “O’Reilly Media, Inc”.',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
