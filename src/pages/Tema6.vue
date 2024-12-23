<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Herramientas informáticas para analítica de datos 
  
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/69.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En la era del #[i Big Data], contar con las herramientas adecuadas es tan importante como tener acceso a los datos mismos. Las herramientas informáticas para analítica de datos son el puente entre los datos brutos y los #[i insights] accionables que impulsan la toma de decisiones. En este capítulo, se presenta una variedad de herramientas esenciales, desde #[i software] de análisis estadístico hasta plataformas de visualización de datos. 
      
      Separador 
      #t_6_1.titulo-segundo.color-acento-contenido
        h2 6.1	Instalación y configuración
      .row.justify-content-center.mb-4
        .col-lg-8.my-lg-0.my-3
          p Antes de abordar las capacidades de las herramientas, es necesario entender el proceso de instalación y configuración. La mayoría de las herramientas de analítica de datos modernas están diseñadas para ser relativamente fáciles de instalar, pero la configuración adecuada puede marcar la diferencia entre una experiencia frustrante y un flujo de trabajo eficiente.
  
          p Para herramientas como R y Python, el proceso generalmente implica descargar el #[i software] base y luego instalar un entorno de desarrollo integrado (IDE) como RStudio o PyCharm. Estas IDE proporcionan una interfaz amigable y funcionalidades adicionales que facilitan el trabajo con datos.
  
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/70.png' alt='')
            .col.pt-lg-0.pt-md-4
              p.mb-0 En el caso de herramientas más especializadas, como Tableau o Power BI, el proceso de instalación suele ser más directo, pero la configuración puede implicar pasos adicionales como la conexión a fuentes de datos o la configuración de permisos de usuario. 
  
          .bg9.brad.p-3.mb-4
            p.mb-0 Es importante destacar que muchas herramientas modernas ofrecen opciones basadas en la nube, lo que puede simplificar significativamente el proceso de instalación y configuración. Plataformas como Google Colab  para Python o Azure Notebooks eliminan la necesidad de instalación local, permitiendo a los analistas comenzar a trabajar casi instantáneamente.
  
        .col-lg-4.my-lg-0.my-3
          img.img-a.img-t(src='@/assets/curso/temas/71.png' alt='') 
  
      Separador 
      #t_6_2.titulo-segundo.color-acento-contenido
        h2 6.2	Clasificación y conversión de datos
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-auto
          img.img-a.img-t(src='@/assets/curso/temas/72.png' alt='')
        .col.pt-lg-0.pt-md-4
          p.mb-0 Una vez que las herramientas están instaladas y configuradas, el siguiente paso es preparar los datos para el análisis. Esto implica clasificar los datos en tipos apropiados y, a menudo, convertirlos de un formato a otro. La clasificación de datos es fundamental para el análisis correcto. Las herramientas de analítica de datos generalmente reconocen varios tipos de datos, como ya se mencionó previamente, p. ej. numéricos (enteros, flotantes), categóricos (nominales, ordinales), fechas y horas, texto, booleanos, etc.
  
      .row.justify-content-center.mb-4
        .col-lg-8.my-lg-0.my-3
          .bg13.brad.p-3
            p La conversión de datos puede ser necesaria por varias razones, como compatibilidad con diferentes herramientas o requisitos específicos de análisis. P. ej.  Se podría necesitar convertir fechas de un formato #[i string] a un formato de fecha real, o convertir variables categóricas en variables dummy para análisis de regresión.
  
            p Herramientas como pandas en Python y dplyr en R ofrecen funciones poderosas para estas tareas. Por ejemplo, en pandas:
  
  
            .row.justify-content-center.align-items-center
              .col-lg-auto
                img.img-a.img-t(src='@/assets/curso/temas/73.png' alt='')
              .col.pt-lg-0.pt-md-4
                .p-4.tarjeta.bg-transparent.color-secundario--borde.mb-3
                  pre
                    code
                      |import pandas as pd
                      |# Cargar datos
                      |df = pd.read_csv('datos.csv')
                      |# Convertir columna a tipo datetime
                      |df['fecha'] = pd.to_datetime(df['fecha'])
                      |# Convertir variable categórica a dummy
                      |df = pd.get_dummies(df, columns=['categoria'])

        .col-lg-4.my-lg-0.my-3.j1
          img.img-a.img-t(src='@/assets/curso/temas/75.png' alt='')      
  
  
      Separador 
      #t_6_3.titulo-segundo.color-acento-contenido
        h2 6.3	Transformación y ordenamiento 
  
      p.mb-4 La transformación de datos es un paso requerido en el proceso de análisis. Implica modificar los datos para hacerlos más adecuados para el análisis previsto. Esto puede incluir:
  
      .row.justify-content-center.mb-5
        .col-lg-7.my-lg-0.my-3
          .bg6.p-3.brad.j1.h-100
            ul.mb-0.lista-ul.fa-ul
              li
                i.fas.fa-check.v1
                span Manejo de valores faltantes.
              li
                i.fas.fa-check.v1
                span Normalización o estandarización de variables numéricas.
              li
                i.fas.fa-check.v1
                span Creación de nuevas variables basadas en las existentes.
              li.mb-0
                i.fas.fa-check.v1
                span.mb-0 Agregación de datos.
  
  
        .col-lg-5.my-lg-0.my-3.j1
          img.img-a.img-t(src='@/assets/curso/temas/76.png' alt='')                  
  
      .row.justify-content-center.mb-4
        .col-lg-4.my-lg-0.my-3.j1
          img.img-a.img-t(src='@/assets/curso/temas/77.png' alt='')  
        .col-lg-8.my-lg-0.my-3
          p El ordenamiento de datos, por otro lado, es importante para la exploración inicial de datos y para ciertos tipos de análisis que dependen del orden de las observaciones. Tanto R como Python ofrecen potentes capacidades para estas tareas. Por ejemplo, en R usando dplyr:      
          .bg13.brad.p-3
            .row.justify-content-center.align-items-center
              .col
                img.img-a.img-t(src='@/assets/curso/temas/78.svg' alt='')
              .col-lg-auto.d-none.d-lg-block
                .p-4.tarjeta.bg-transparent.color-secundario--borde.mb-3
                  pre
                    code
                      |library(dplyr)
                      |datos <- datos %>%
                      | mutate(nueva_var = var1 / var2) %>%  # Crear nueva variable
                      | filter(!is.na(var3)) %>%  # Eliminar filas con NA en var3
                      | arrange(desc(nueva_var))  # Ordenar por nueva_var en orden descendente

  
      Separador 
      #t_6_4.titulo-segundo.color-acento-contenido
        h2 6.4	Importación y exportación de datos  
  
      .row.justify-content-center.align-items-center.bg6.br-d.p-4.brad.mb-5
        .col-lg-auto
          img.img-a.img-t(src='@/assets/curso/temas/80.png' alt='')
        .col.pt-lg-0.pt-md-4
          p.mb-0 La capacidad de importar datos de diversas fuentes y exportarlos en diferentes formatos es esencial en cualquier flujo de trabajo de análisis de datos. Las herramientas modernas de analítica de datos ofrecen una amplia gama de opciones para estas tareas. La siguiente tabla presenta algunos de los formatos de importación y exportación de datos más comunes en el análisis de datos. Estos formatos permiten a los analistas trabajar con insumos de diversas fuentes y utilizar diferentes herramientas para su procesamiento y análisis. La elección del formato adecuado depende de factores como el tipo de datos, el tamaño del conjunto de datos y las herramientas que se utilizarán.
  
      .row.justify-content-center
        .col-lg-10
          .titulo-sexto.color-acento-botones
            h5 Tabla 8. 
            span Formatos comunes de importación y exportación de datos
  
          .tabla-a.color-acento-botones
            table
              caption Fuente: OIT, 2024.
              thead
                tr
                  th Formato
                  th Descripción
                  th Herramientas de soporte
  
              tbody
                tr
                  td CSV 
                  td Valores separados por comas, formato texto plano
                  td R, Python, Excel, Tableau
  
                tr
                  td JSON
                  td JavaScript Object Notation, formato de intercambio de datos ligero
                  td R, Python, MongoDB
  
                tr
                  td Excel (.xlsx)
                  td Formato de hoja de cálculo de Microsoft
                  td R, Python, Tableau, Power BI
  
                tr
                  td SQL
                  td Consultas a bases de datos relacionales
                  td R, Python, Tableau, Power BI
  
                tr
                  td API Web
                  td Interfaces de programación de aplicaciones
                  td R, Python
  
      Separador 
      #t_6_5.titulo-segundo.color-acento-contenido
        h2 6.5	Uso de expresiones regulares
  
      p Las expresiones regulares, o #[em regex], son una herramienta poderosa para el procesamiento de texto y la búsqueda de patrones. Son especialmente útiles cuando se trabaja con datos no estructurados o semiestructurados. En el contexto de la analítica de datos, las expresiones regulares se utilizan comúnmente para:
  
      .row.justify-content-center     
        .col-lg-8.my-lg-0.my-3
          .bg6.p-3.brad.j1.mb-4
            ul.mb-0.lista-ul.fa-ul
              li
                i.fas.fa-check.v1
                span Limpieza de datos textuales.
              li
                i.fas.fa-check.v1
                span Extracción de información específica de cadenas de texto.
              li
                i.fas.fa-check.v1
                span Validación de formatos (por ejemplo, direcciones de correo electrónico, números de teléfono).
              p.mb-0 Tanto R como Python tienen soporte integrado para expresiones regulares. Por ejemplo, en Python:
          .p-3(style="background-color: #10314b ")
            .p-4.tarjeta.bg-white.color-secundario--borde.mb-3
              pre
                code 
                  |import re
                  |
                  |texto = "El correo de Juan es juan@example.com y su teléfono es 123-456-7890"
                  |email = re.search(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', texto)
                  |telefono = re.search(r'\d{3}-\d{3}-\d{4}', texto)
                  |
                  |print(email.group())  # Imprime: juan@example.com
                  |print(telefono.group())  # Imprime: 123-456-7890

        .col-lg-4.my-lg-0.my-3.j1
          img.img-a.img-t(src='@/assets/curso/temas/82.png' alt='')              
  
      Separador 
      #t_6_6.titulo-segundo.color-acento-contenido
        h2 6.6	Manejo de funciones avanzadas
  
      p Las herramientas de analítica de datos modernas ofrecen una amplia gama de funciones avanzadas que permiten a los analistas realizar operaciones complejas con relativa facilidad. Estas funciones pueden abarcar desde operaciones estadísticas avanzadas hasta algoritmos de aprendizaje automático. Por ejemplo, scikit-learn en Python ofrece una amplia gama de algoritmos de machine learning:
  
      .row.justify-content-center     
        .col-lg-6.my-lg-0.my-3
          .p-4.h-100(style="background-color: #f3f0ea")
            .p-4.tarjeta.bg-transparent.color-secundario--borde.mb-3
              pre
                code from sklearn.model_selection import train_test_split
                  |from sklearn.ensemble import RandomForestClassifier
                  |from sklearn.metrics import accuracy_score
                  |
                  |# Dividir los datos en conjuntos de entrenamiento y prueba
                  |X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

        .col-lg-6.my-lg-0.my-3
          .bgi.p-3.brad.j1.h-100 
            .row.justify-content-center.align-items-center
              .col
                .p-4.tarjeta.bg-transparent.color-secundario--borde.mb-3
                  pre
                    code
                      |# Crear y entrenar el modelo
                      |modelo = RandomForestClassifier()
                      |modelo.fit(X_train, y_train)
                      |
                      |# Hacer predicciones y evaluar el modelo
                      |predicciones = modelo.predict(X_test)
                      |precision = accuracy_score(y_test, predicciones)
                      |print(f"Precisión del modelo: {precision}")

              .col-lg-auto.d-none.d-lg-block
                img.img-a.img-t(src='@/assets/curso/temas/85.png' alt='La imagen muestra los pasos de preprocesamiento. Cargar módulos de sklearn para selección de modelo, división del conjunto de datos de entrenamiento y prueba, y métricas de evaluación. Dividir los datos en conjuntos de entrenamiento y prueba. Crear y entrenar un modelo RandomForestClassifier. Hacer predicciones con el modelo entrenado y evaluar la precisión.')  
  
      Separador 
      #t_6_7.titulo-segundo.color-acento-contenido
        h2 6.7	Limpieza basada en similitudes
      .row.justify-content-center.mb-4
        .col-lg-3.my-lg-0.my-3.j1
          img.img-a.img-t(src='@/assets/curso/temas/86.png' alt='')  
        .col-lg-9.my-lg-0.my-3
          p La limpieza de datos basada en similitudes es una técnica avanzada que se utiliza para identificar y corregir inconsistencias en los datos, especialmente en campos de texto. Esta técnica es particularmente útil para manejar errores de entrada de datos, diferentes formas de escribir el mismo nombre, o para consolidar categorías similares. Herramientas como OpenRefine o la biblioteca fuzzywuzzy en Python son excelentes para este tipo de tareas. Por ejemplo, usando fuzzywuzzy:   
          
          .row.justify-content-center.align-items-center
            .col-lg-8
              .p-4(style="background-color: #f3f0ea")
                .p-4.tarjeta.bg-transparent.color-secundario--borde.mb-3
                  pre
                    code
                      from fuzzywuzzy import process
                        br
                        |nombres = ["John Smith", "Jane Doe", "John Smth", "Jane Do"]
                        |
                        |# Encontrar coincidencias cercanas para "John Smith"
                        |coincidencias = process.extract("John Smith", nombres, limit=2)
                        |print(coincidencias)  # [('John Smith', 100), ('John Smth', 95)]

            .col-lg-4.d-none.d-lg-block
              img.img-a.img-t(src='@/assets/curso/temas/87.png' alt='')                       
  
      .row.bg3.align-items-center
        .px-lg-5.px-4
          Separador 
          #t_6_8.titulo-segundo.color-acento-contenido
            h2 6.8	Licencias: #[i software] comercial vs. #[i software] libre
          .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/69.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 La elección entre #[i software] comercial y #[i software] libre es una consideración importante en la selección de herramientas de analítica de datos. Cada opción tiene sus propias ventajas y desventajas. El #[i software] comercial, como SAS o SPSS, a menudo ofrece interfaces más pulidas, soporte técnico dedicado y puede ser más fácil de integrar en entornos empresariales existentes. Sin embargo, puede ser costoso y menos flexible para la personalización. Por otro lado, el #[i software] libre, como R o Python, ofrece gran flexibilidad, una comunidad activa de desarrolladores y usuarios, y la capacidad de personalizar el #[i software] según las necesidades específicas. Sin embargo, puede requerir más habilidades técnicas para su configuración y uso efectivo. 
  
          p La elección entre #[i software] comercial y libre dependerá de factores como el presupuesto disponible, las habilidades técnicas del equipo, los requisitos específicos del proyecto y las políticas de la organización. 
  
          .row.justify-content-center.mb-5 
            .col-lg-10
              .titulo-sexto.color-acento-botones
                h5 Figura 4.
                span Comparación entre #[i software] comercial y #[i software] libre para analítica de datos
              
              .bgfig.p-5.brad.mb-2
                img.img-a.img-t(src='@/assets/curso/temas/89.svg' alt='La Figura 4 se denomina «Comparación entre software comercial y libre para analítica de datos», allí se resaltan características propias y compartidas por cada tipo de software.') 
              figcaption Fuente: OIT, 2024.  
  
      .row.justify-content-center.align-items-center.bg6.br-d.p-4.brad
        .col-lg-auto
          img.img-a.img-t(src='@/assets/curso/temas/90.png' alt='')
        .col.pt-lg-0.pt-md-4
          p.mb-0 En conclusión, las herramientas informáticas para analítica de datos son diversas y poderosas, cada una con sus propias fortalezas y casos de uso óptimos. La clave para el éxito en la analítica de datos no es solo dominar una herramienta específica, sino entender los principios subyacentes y ser capaz de elegir y aplicar la herramienta adecuada para cada tarea. A medida que el campo de la analítica de datos continúa evolucionando, también lo harán estas herramientas, ofreciendo nuevas capacidades y oportunidades para extraer #[i insights] valiosos de los datos.                                  
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
