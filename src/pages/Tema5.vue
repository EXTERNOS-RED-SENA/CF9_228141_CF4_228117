<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>5</span></div>
        <h1>Bases de Datos y SQL</h1>
      </div>
      <div
        class="row justify-content-center align-items-center bg4 br-d p-4 brad mb-4"
      >
        <div class="col-lg-auto">
          <img class="img-a img-t" src="@/assets/curso/temas/28.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4">
          <p class="mb-0">
            Las bases de datos son el fundamento de cualquier sistema de gestión
            de datos. En este capítulo, se examinan los diferentes tipos de
            bases de datos, desde sistemas relacionales tradicionales hasta
            soluciones NoSQL modernas, y se explora cómo estas tecnologías se
            adaptan para manejar los desafíos únicos del <i>Big Data</i>.
          </p>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_5_1" class="titulo-segundo color-acento-contenido">
        <h2>5.1 Tipos de bases de datos</h2>
      </div>
      <p>
        Las bases de datos son sistemas organizados para almacenar, gestionar y
        recuperar información de manera eficiente. En el contexto del
        <i>Big Data</i>, entender los diferentes tipos de bases de datos es
        fundamental para seleccionar la solución más adecuada para cada caso de
        uso específico. Los principales tipos de bases de datos se presentan en
        la siguiente tabla:
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="titulo-sexto color-acento-botones">
            <h5>Tabla 6.</h5>
            <span>Clasificación de bases de datos</span>
          </div>
          <div class="tabla-a color-acento-botones">
            <table>
              <caption>
                Fuente: OIT, 2024.
              </caption>
              <thead>
                <tr>
                  <th colspan="2">Descripción y características</th>
                  <th>Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Las <b>bases de datos relacionales</b> han sido el estándar
                    en el almacenamiento de datos estructurados durante décadas.
                    Se basan en el modelo relacional, que organiza los datos en
                    tablas con filas y columnas, estableciendo relaciones entre
                    ellas.
                  </td>
                  <td>
                    Utilizan SQL (<i>Structured Query Language</i>) para
                    consultas y manipulación de datos.
                  </td>
                  <td>MySQL, PostgreSQL, Oracle, Microsoft SQL Server.</td>
                </tr>
                <tr>
                  <td rowspan="4">
                    Las <b>bases de datos NoSQL</b> (Not Only SQL) surgieron
                    como respuesta a las limitaciones de las bases de datos
                    relacionales en el manejo de grandes volúmenes de datos no
                    estructurados o semiestructurados, típicos en aplicaciones
                    web y móviles modernas. <br /><br /><span
                      >Se caracterizan por:</span
                    ><br /><br />
                    <ul class="mb-0 lista-ul fa-ul">
                      <li>
                        <i class="fas fa-check v1"></i
                        ><span>Alta escalabilidad horizontal.</span>
                      </li>
                      <li>
                        <i class="fas fa-check v1"></i
                        ><span>Flexibilidad en el esquema de datos.</span>
                      </li>
                      <li>
                        <i class="fas fa-check v1"></i
                        ><span
                          >Rendimiento optimizado para operaciones de
                          lectura/escritura a gran escala.</span
                        >
                      </li>
                    </ul>
                  </td>
                  <td>
                    <b>Bases de datos de documentos:</b> Almacenan datos en
                    documentos similares a JSON.
                  </td>
                  <td>MongoDB, CouchDB.</td>
                </tr>
                <tr>
                  <td>
                    <b>Bases de datos de clave-valor:</b> Almacenan datos como
                    pares de clave-valor, ofreciendo alta velocidad y
                    escalabilidad.
                  </td>
                  <td>Redis, Amazon DynamoDB.</td>
                </tr>
                <tr>
                  <td>
                    <b>Bases de datos de columnas:</b> Optimizadas para
                    consultas en grandes conjuntos de datos, almacenan datos por
                    columnas en lugar de por filas.
                  </td>
                  <td>Cassandra, HBase.</td>
                </tr>
                <tr>
                  <td>
                    <b>Bases de datos de grafos:</b> Diseñadas para datos
                    interconectados, utilizan nodos y aristas para representar y
                    almacenar datos.
                  </td>
                  <td>Neo4j, Amazon Neptune</td>
                </tr>
                <tr>
                  <td>
                    Las <b>bases de datos NewSQL</b> son un intento de combinar
                    las ventajas de las bases de datos relacionales (ACID, SQL)
                    con la escalabilidad de las bases de datos NoSQL.
                  </td>
                  <td>
                    Soporte para transacciones ACID.<br /><span
                      >Escalabilidad horizontal similar a NoSQL. </span
                    ><br /><span
                      >Uso de SQL como lenguaje principal de consulta.</span
                    >
                  </td>
                  <td>Google Spanner, CockroachDB, NuoDB.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row bg3 align-items-center">
        <div class="px-lg-5 px-4">
          <Separador> </Separador>
          <div id="t_5_2" class="titulo-segundo color-acento-contenido">
            <h2>5.2 Sentencias SQL fundamentales</h2>
          </div>
          <div class="row justify-content-center mb-5">
            <div class="col-lg-8 my-lg-0 my-3">
              <div class="bgi p-3 brad j1 h-100">
                <p class="mb-0">
                  SQL (<i>Structured Query Language</i>) es el lenguaje estándar
                  para interactuar con bases de datos relacionales. Aunque las
                  bases de datos NoSQL no utilizan SQL directamente, muchas han
                  adoptado lenguajes de consulta similares. Comprender SQL es
                  fundamental para trabajar con datos estructurados e incluso no
                  estructurados. Las sentencias SQL se dividen en varios tipos
                  como se procura sintetizar a continuación.
                </p>
              </div>
            </div>
            <div class="col-lg-4 my-lg-0 my-3 j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/63.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="titulo-sexto color-acento-botones">
            <h5>Tabla 7.</h5>
            <span>Grupos de sentencias clave en SQL</span>
          </div>
          <div class="tabla-a color-acento-botones">
            <table>
              <caption>
                Fuente: OIT, 2024.
              </caption>
              <thead>
                <tr>
                  <th>Tipo de sentencias</th>
                  <th>Ejemplo de sentencia</th>
                  <th>de</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="3">
                    <b>Sentencias DDL (<i>Data Definition Language</i>)</b
                    ><br /><br /><span
                      >Utilizadas para definir y modificar la estructura de la
                      base de datos</span
                    >
                  </td>
                  <td>CREATE: Crea nuevas tablas, vistas, índices, etc.</td>
                  <td>
                    CREATE TABLE empleados (<br /><span
                      >id INT PRIMARY KEY,</span
                    ><br /><span>nombre VARCHAR(50),</span><br /><span
                      >salario DECIMAL(10, 2)</span
                    ><br /><span>);</span>
                  </td>
                </tr>
                <tr>
                  <td>ALTER: Modifica la estructura de objetos existentes.</td>
                  <td>
                    ALTER TABLE empleados ADD COLUMN departamento VARCHAR(50);
                  </td>
                </tr>
                <tr>
                  <td>DROP: Elimina objetos de la base de datos.</td>
                  <td>DROP TABLE empleados;</td>
                </tr>
                <tr>
                  <td rowspan="4">
                    <b>Sentencias DML (<i>Data Manipulation Language</i>)</b
                    ><br /><br /><span
                      >Utilizadas para manipular los datos dentro de las tablas.
                    </span>
                  </td>
                  <td>SELECT: Recupera datos de una o más tablas.</td>
                  <td>
                    SELECT nombre, salario FROM empleados WHERE salario > 50000;
                  </td>
                </tr>
                <tr>
                  <td>INSERT: Agrega nuevos registros a una tabla.</td>
                  <td>
                    INSERT INTO empleados (id, nombre, salario) VALUES (1, ‘Juan
                    Pérez’, 60000);
                  </td>
                </tr>
                <tr>
                  <td>UPDATE: Modifica registros existentes.</td>
                  <td>UPDATE empleados SET salario = 65000 WHERE id = 1;</td>
                </tr>
                <tr>
                  <td>DELETE: Elimina registros de una tabla.</td>
                  <td>DELETE FROM empleados WHERE id = 1;</td>
                </tr>
                <tr>
                  <td rowspan="2">
                    <b>Sentencias DCL (<i>Data Control Language</i>)</b>
                    <br /><br /><span
                      >Utilizadas para controlar el acceso a los datos.
                    </span>
                  </td>
                  <td>GRANT: Otorga permisos a usuarios</td>
                  <td>GRANT SELECT, INSERT ON empleados TO usuario1;</td>
                </tr>
                <tr>
                  <td>REVOKE: Revoca permisos a usuarios</td>
                  <td>REVOKE INSERT ON empleados FROM usuario1;</td>
                </tr>
                <tr>
                  <td>
                    <b>Sentencias TCL (<i>Transaction Control Language</i>)</b
                    ><br /><span
                      >Utilizadas para gestionar las transacciones en la base de
                      datos.
                    </span>
                  </td>
                  <td>
                    BEGIN o START TRANSACTION: Inicia una transacción.<br /><span
                      >COMMIT: Guarda los cambios de una transacción.</span
                    ><br /><span
                      >ROLLBACK: Deshace los cambios de una transacción.</span
                    >
                  </td>
                  <td>
                    BEGIN;<br /><span
                      >UPDATE cuentas SET balance = balance - 100 WHERE id =
                      1;</span
                    ><span
                      >UPDATE cuentas SET balance = balance + 100 WHERE id =
                      2;</span
                    ><br /><span>COMMIT;</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_5_3" class="titulo-segundo color-acento-contenido">
        <h2>5.3 Procesos ETL (Extracción, Transformación y Carga)</h2>
      </div>
      <div class="row bg15 align-items-center mb-5">
        <div class="px-lg-5 px-4">
          <div class="bgw brad p-5 my-5">
            <SlyderA tipo="b">
              <div class="row justify-content-center">
                <div class="col-lg-6 my-2">
                  <p>
                    La <b>primera fase</b> del proceso es la extracción, que
                    consiste en obtener datos desde diferentes fuentes, tales
                    como bases de datos relacionales, sistemas CRM o ERP,
                    archivos planos en formatos como CSV o JSON, API web, redes
                    sociales, o incluso logs de servidores. Este paso presenta
                    ciertos desafíos, como el manejo de formatos variados, la
                    interacción con sistemas heredados, y la gestión de grandes
                    volúmenes de datos, todo mientras se asegura la integridad
                    de la información extraída.
                  </p>
                </div>
                <div class="col-lg-5 my-2">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/temas/65.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-6 my-2">
                  <p>
                    Una vez que los datos han sido extraídos, comienza la
                    <b>fase de transformación</b>. Aquí, la información se
                    limpia, se valida y se convierte a un formato uniforme. Este
                    paso incluye tareas como la corrección de errores y la
                    eliminación de duplicados, la estandarización de datos para
                    asegurar coherencia (por ejemplo, unificar el formato de
                    fechas), y la validación para cumplir con las reglas del
                    negocio. Además, los datos pueden enriquecerse con
                    información adicional, y se pueden realizar agregaciones
                    para resumir grandes volúmenes de información en datos más
                    manejables.
                  </p>
                </div>
                <div class="col-lg-5 my-2">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/temas/66.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-6 my-2">
                  <p>
                    Finalmente, <b>la última etapa es la carga</b>, donde los
                    datos transformados se integran en el sistema de destino,
                    que podría ser un almacén de datos, una base de datos
                    operacional o un data mart específico para un departamento.
                    Durante este proceso, es fundamental optimizar el
                    rendimiento, garantizar la integridad de los datos, y
                    decidir entre realizar actualizaciones incrementales o
                    cargas completas. Además, se deben implementar mecanismos de
                    logging y auditoría para mantener un registro del proceso de
                    carga.
                  </p>
                </div>
                <div class="col-lg-5 my-2">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/temas/67.png"
                    alt=""
                  />
                </div>
              </div>
            </SlyderA>
          </div>
        </div>
      </div>
      <p>
        Para facilitar todo este ciclo ETL, existen diversas herramientas
        especializadas. Entre las más destacadas se encuentran Apache NiFi, una
        solución de código abierto que automatiza el flujo de datos; Talend, una
        plataforma integral para la integración de datos; y AWS Glue, un
        servicio en la nube que proporciona ETL gestionado. Otras opciones
        populares incluyen Informatica PowerCenter, una solución empresarial, y
        Pentaho Data Integration, una herramienta de código abierto ampliamente
        utilizada.
      </p>
      <Separador> </Separador>
      <div id="t_5_4" class="titulo-segundo color-acento-contenido">
        <h2>5.4 Optimización de bases de datos</h2>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-a img-t" src="@/assets/curso/temas/68.png" alt="" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <p>
            Por su parte, la optimización de bases de datos es una actividad
            requerida para asegurar el rendimiento y la eficiencia,
            especialmente cuando se trata con grandes volúmenes de datos.
            Algunas estrategias clave incluyen la creación de índices en las
            columnas más consultadas para acelerar las búsquedas, el uso de
            particionamiento para dividir tablas grandes en fragmentos más
            pequeños y manejables, y la desnormalización, que en ciertos casos
            puede duplicar datos para evitar joins complejos. Además, la
            optimización de consultas SQL y la implementación de estrategias de
            caché para acceder rápidamente a datos recurrentes son
            fundamentales. Por último, las operaciones de mantenimiento regular,
            como la recolección de estadísticas y la reconstrucción de índices,
            son esenciales para mantener la base de datos en óptimas
            condiciones.
          </p>
          <div class="bgi p-3 brad j1">
            <p class="mb-0">
              A manera de resumen, se puede indicar que la gestión de bases de
              datos y los procesos ETL son fundamentales para cualquier persona
              que trabaja con datos. A medida que los volúmenes de información
              crecen, la habilidad para seleccionar, diseñar y optimizar bases
              de datos se convierte en una competencia clave para quienes
              trabajan en el campo del <i>Big Data</i>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema5',
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
