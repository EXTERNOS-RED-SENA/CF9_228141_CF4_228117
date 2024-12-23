(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32b39796"],{"0b3c":function(a,e,s){"use strict";s.r(e);var t=function(){var a=this,e=a._self._c;return e("div",{staticClass:"curso-main-container pb-3"},[e("BannerInterno"),e("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[a._m(0),a._m(1),e("Separador"),a._m(2),a._m(3),a._m(4),e("div",{staticClass:"row bg3 align-items-center"},[e("div",{staticClass:"px-lg-5 px-4"},[e("Separador"),a._m(5),a._m(6)],1)]),a._m(7),e("Separador"),a._m(8),e("div",{staticClass:"row bg15 align-items-center mb-5"},[e("div",{staticClass:"px-lg-5 px-4"},[e("div",{staticClass:"bgw brad p-5 my-5"},[e("CarouselRED",{attrs:{tipo:"b"}},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6 my-2"},[e("p",[a._v("La "),e("b",[a._v("primera fase")]),a._v(" del proceso es la extracción, que consiste en obtener datos desde diferentes fuentes, tales como bases de datos relacionales, sistemas CRM o ERP, archivos planos en formatos como CSV o JSON, API web, redes sociales, o incluso "),e("em",[a._v("logs")]),a._v(" de servidores. Este paso presenta ciertos desafíos, como el manejo de formatos variados, la interacción con sistemas heredados, y la gestión de grandes volúmenes de datos, todo mientras se asegura la integridad de la información extraída.")])]),e("div",{staticClass:"col-lg-5 my-2"},[e("img",{staticClass:"img-a img-t",attrs:{src:s("252d"),alt:""}})])]),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6 my-2"},[e("p",[a._v("Una vez que los datos han sido extraídos, comienza la "),e("b",[a._v("fase de transformación")]),a._v(". Aquí, la información se limpia, se valida y se convierte a un formato uniforme. Este paso incluye tareas como la corrección de errores y la eliminación de duplicados, la estandarización de datos para asegurar coherencia (por ejemplo, unificar el formato de fechas), y la validación para cumplir con las reglas del negocio. Además, los datos pueden enriquecerse con información adicional, y se pueden realizar agregaciones para resumir grandes volúmenes de información en datos más manejables.")])]),e("div",{staticClass:"col-lg-5 my-2"},[e("img",{staticClass:"img-a img-t",attrs:{src:s("4529"),alt:""}})])]),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6 my-2"},[e("p",[a._v("Finalmente, "),e("b",[a._v("la última etapa es la carga")]),a._v(", donde los datos transformados se integran en el sistema de destino, que podría ser un almacén de datos, una base de datos operacional o un data mart específico para un departamento. Durante este proceso, es fundamental optimizar el rendimiento, garantizar la integridad de los datos, y decidir entre realizar actualizaciones incrementales o cargas completas. Además, se deben implementar mecanismos de logging y auditoría para mantener un registro del proceso de carga. ")])]),e("div",{staticClass:"col-lg-5 my-2"},[e("img",{staticClass:"img-a img-t",attrs:{src:s("7bbb"),alt:""}})])])])],1)])]),e("p",[a._v("Para facilitar todo este ciclo ETL, existen diversas herramientas especializadas. Entre las más destacadas se encuentran Apache NiFi, una solución de código abierto que automatiza el flujo de datos; Talend, una plataforma integral para la integración de datos; y AWS Glue, un servicio en la nube que proporciona ETL gestionado. Otras opciones populares incluyen Informatica PowerCenter, una solución empresarial, y Pentaho Data Integration, una herramienta de código abierto ampliamente utilizada. ")]),e("Separador"),a._m(9),a._m(10)],1)],1)},n=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"titulo-principal color-acento-contenido"},[e("div",{staticClass:"titulo-principal__numero"},[e("span",[a._v("5")])]),e("h1",[a._v("Bases de Datos y SQL ")])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"row justify-content-center align-items-center bg4 br-d p-4 brad mb-4"},[e("div",{staticClass:"col-lg-auto"},[e("img",{staticClass:"img-a img-t",attrs:{src:s("3f47"),alt:""}})]),e("div",{staticClass:"col pt-lg-0 pt-md-4"},[e("p",{staticClass:"mb-0"},[a._v("Las bases de datos son el fundamento de cualquier sistema de gestión de datos. En este capítulo, se examinan los diferentes tipos de bases de datos, desde sistemas relacionales tradicionales hasta soluciones NoSQL modernas, y se explora cómo estas tecnologías se adaptan para manejar los desafíos únicos del "),e("i",[a._v("Big Data")]),a._v(".")])])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_5_1"}},[e("h2",[a._v("5.1 Tipos de bases de datos")])])},function(){var a=this,e=a._self._c;return e("p",[a._v("Las bases de datos son sistemas organizados para almacenar, gestionar y recuperar información de manera eficiente. En el contexto del "),e("i",[a._v("Big Data")]),a._v(", entender los diferentes tipos de bases de datos es fundamental para seleccionar la solución más adecuada para cada caso de uso específico. Los principales tipos de bases de datos se presentan en la siguiente tabla: ")])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"titulo-sexto color-acento-botones"},[e("h5",[a._v("Tabla 6. ")]),e("span",[a._v("Clasificación de bases de datos")])]),e("div",{staticClass:"tabla-a color-acento-botones"},[e("table",[e("caption",[a._v("Fuente: OIT, 2024.")]),e("thead",[e("tr",[e("th",{attrs:{colspan:"2"}},[a._v("Descripción y características")]),e("th",[a._v("Ejemplo")])])]),e("tbody",[e("tr",[e("td",[a._v("Las "),e("b",[a._v("bases de datos relacionales")]),a._v(" han sido el estándar en el almacenamiento de datos estructurados durante décadas. Se basan en el modelo relacional, que organiza los datos en tablas con filas y columnas, estableciendo relaciones entre ellas. ")]),e("td",[a._v("Utilizan SQL ("),e("i",[a._v("Structured Query Language")]),a._v(") para consultas y manipulación de datos.")]),e("td",[a._v("MySQL, PostgreSQL, Oracle, Microsoft SQL Server.")])]),e("tr",[e("td",{attrs:{rowspan:"4"}},[a._v("Las "),e("b",[a._v("bases de datos NoSQL")]),a._v(" (Not Only SQL) surgieron como respuesta a las limitaciones de las bases de datos relacionales en el manejo de grandes volúmenes de datos no estructurados o semiestructurados, típicos en aplicaciones web y móviles modernas. "),e("br"),e("br"),e("span",[a._v("Se caracterizan por:")]),e("br"),e("br"),e("ul",{staticClass:"mb-0 lista-ul fa-ul"},[e("li",[e("i",{staticClass:"fas fa-check v1"}),e("span",[a._v("Alta escalabilidad horizontal.")])]),e("li",[e("i",{staticClass:"fas fa-check v1"}),e("span",[a._v("Flexibilidad en el esquema de datos.")])]),e("li",[e("i",{staticClass:"fas fa-check v1"}),e("span",[a._v("Rendimiento optimizado para operaciones de lectura/escritura a gran escala.")])])])]),e("td",[e("b",[a._v("Bases de datos de documentos:")]),a._v(" Almacenan datos en documentos similares a JSON.")]),e("td",[a._v("MongoDB, CouchDB.")])]),e("tr",[e("td",[e("b",[a._v("Bases de datos de clave-valor:")]),a._v(" Almacenan datos como pares de clave-valor, ofreciendo alta velocidad y escalabilidad.")]),e("td",[a._v("Redis, Amazon DynamoDB.")])]),e("tr",[e("td",[e("b",[a._v("Bases de datos de columnas:")]),a._v(" Optimizadas para consultas en grandes conjuntos de datos, almacenan datos por columnas en lugar de por filas.")]),e("td",[a._v("Cassandra, HBase.")])]),e("tr",[e("td",[e("b",[a._v("Bases de datos de grafos:")]),a._v(" Diseñadas para datos interconectados, utilizan nodos y aristas para representar y almacenar datos.")]),e("td",[a._v("Neo4j, Amazon Neptune")])]),e("tr",[e("td",[a._v("Las "),e("b",[a._v("bases de datos NewSQL")]),a._v(" son un intento de combinar las ventajas de las bases de datos relacionales (ACID, SQL) con la escalabilidad de las bases de datos NoSQL.")]),e("td",[a._v("Soporte para transacciones ACID."),e("br"),e("span",[a._v("Escalabilidad horizontal similar a NoSQL. ")]),e("br"),e("span",[a._v("Uso de SQL como lenguaje principal de consulta.")])]),e("td",[a._v("Google Spanner, CockroachDB, NuoDB. ")])])])])])])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_5_2"}},[e("h2",[a._v("5.2 Sentencias SQL fundamentales")])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"row justify-content-center mb-5"},[e("div",{staticClass:"col-lg-8 my-lg-0 my-3"},[e("div",{staticClass:"bgi p-3 brad j1 h-100"},[e("p",{staticClass:"mb-0"},[a._v("SQL ("),e("i",[a._v("Structured Query Language")]),a._v(") es el lenguaje estándar para interactuar con bases de datos relacionales. Aunque las bases de datos NoSQL no utilizan SQL directamente, muchas han adoptado lenguajes de consulta similares. Comprender SQL es fundamental para trabajar con datos estructurados e incluso no estructurados. Las sentencias SQL se dividen en varios tipos, como se procura sintetizar a continuación. ")])])]),e("div",{staticClass:"col-lg-4 my-lg-0 my-3 j1"},[e("img",{staticClass:"img-a img-t",attrs:{src:s("a295"),alt:""}})])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"titulo-sexto color-acento-botones"},[e("h5",[a._v("Tabla 7. ")]),e("span",[a._v("Grupos de sentencias clave en SQL")])]),e("div",{staticClass:"tabla-a color-acento-botones"},[e("table",[e("caption",[a._v("Fuente: OIT, 2024.")]),e("thead",[e("tr",[e("th",[a._v("Tipo de sentencias")]),e("th",[a._v("Ejemplo de sentencia")]),e("th",[a._v("Ejemplo de código fuente")])])]),e("tbody",[e("tr",[e("td",{attrs:{rowspan:"3"}},[e("b",[a._v("Sentencias DDL ("),e("i",[a._v("Data Definition Language")]),a._v(")")]),e("br"),e("br"),e("span",[a._v("Utilizadas para definir y modificar la estructura de la base de datos")])]),e("td",[a._v("CREATE: Crea nuevas tablas, vistas, índices, etc.")]),e("td",[a._v("CREATE TABLE empleados ("),e("br"),e("span",[a._v("id INT PRIMARY KEY,")]),e("br"),e("span",[a._v("nombre VARCHAR(50),")]),e("br"),e("span",[a._v("salario DECIMAL(10, 2)")]),e("br"),e("span",[a._v(");")])])]),e("tr",[e("td",[a._v("ALTER: Modifica la estructura de objetos existentes.")]),e("td",[a._v("ALTER TABLE empleados ADD COLUMN departamento VARCHAR(50);")])]),e("tr",[e("td",[a._v("DROP: Elimina objetos de la base de datos.")]),e("td",[a._v("DROP TABLE empleados;")])]),e("tr",[e("td",{attrs:{rowspan:"4"}},[e("b",[a._v("Sentencias DML ("),e("i",[a._v("Data Manipulation Language")]),a._v(")")]),e("br"),e("br"),e("span",[a._v("Utilizadas para manipular los datos dentro de las tablas. ")])]),e("td",[a._v("SELECT: Recupera datos de una o más tablas.")]),e("td",[a._v("SELECT nombre, salario FROM empleados WHERE salario > 50000;")])]),e("tr",[e("td",[a._v("INSERT: Agrega nuevos registros a una tabla.")]),e("td",[a._v("INSERT INTO empleados (id, nombre, salario) VALUES (1, ‘Juan Pérez’, 60000);")])]),e("tr",[e("td",[a._v("UPDATE: Modifica registros existentes.")]),e("td",[a._v("UPDATE empleados SET salario = 65000 WHERE id = 1;")])]),e("tr",[e("td",[a._v("DELETE: Elimina registros de una tabla.")]),e("td",[a._v("DELETE FROM empleados WHERE id = 1;")])]),e("tr",[e("td",{attrs:{rowspan:"2"}},[e("b",[a._v("Sentencias DCL ("),e("i",[a._v("Data Control Language")]),a._v(")")]),a._v(" "),e("br"),e("br"),e("span",[a._v("Utilizadas para controlar el acceso a los datos. ")])]),e("td",[a._v("GRANT: Otorga permisos a usuarios")]),e("td",[a._v("GRANT SELECT, INSERT ON empleados TO usuario1;")])]),e("tr",[e("td",[a._v("REVOKE: Revoca permisos a usuarios")]),e("td",[a._v("REVOKE INSERT ON empleados FROM usuario1;")])]),e("tr",[e("td",[e("b",[a._v("Sentencias TCL ("),e("i",[a._v("Transaction Control Language")]),a._v(")")]),e("br"),e("span",[a._v("Utilizadas para gestionar las transacciones en la base de datos. ")])]),e("td",[a._v("BEGIN o START TRANSACTION: Inicia una transacción."),e("br"),e("span",[a._v("COMMIT: Guarda los cambios de una transacción.")]),e("br"),e("span",[a._v("ROLLBACK: Deshace los cambios de una transacción.")])]),e("td",[a._v("BEGIN;"),e("br"),e("span",[a._v("UPDATE cuentas SET balance = balance - 100 WHERE id = 1;")]),e("span",[a._v("UPDATE cuentas SET balance = balance + 100 WHERE id = 2;")]),e("br"),e("span",[a._v("COMMIT;")])])])])])])])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_5_3"}},[e("h2",[a._v("5.3 Procesos ETL (Extracción, Transformación y Carga) ")])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_5_4"}},[e("h2",[a._v("5.4 Optimización de bases de datos")])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-4 my-lg-0 my-3 j1"},[e("img",{staticClass:"img-a img-t",attrs:{src:s("f45e"),alt:""}})]),e("div",{staticClass:"col-lg-8 my-lg-0 my-3"},[e("p",[a._v("Por su parte, la optimización de bases de datos es una actividad requerida para asegurar el rendimiento y la eficiencia, especialmente cuando se trata con grandes volúmenes de datos. Algunas estrategias clave incluyen la creación de índices en las columnas más consultadas para acelerar las búsquedas, el uso de particionamiento para dividir tablas grandes en fragmentos más pequeños y manejables, y la desnormalización, que en ciertos casos puede duplicar datos para evitar joins complejos. Además, la optimización de consultas SQL y la implementación de estrategias de caché para acceder rápidamente a datos recurrentes son fundamentales. Por último, las operaciones de mantenimiento regular, como la recolección de estadísticas y la reconstrucción de índices, son esenciales para mantener la base de datos en óptimas condiciones.")]),e("div",{staticClass:"bgi p-3 brad j1"},[e("p",{staticClass:"mb-0"},[a._v("A manera de resumen, se puede indicar que la gestión de bases de datos y los procesos ETL son fundamentales para cualquier persona que trabaja con datos. A medida que los volúmenes de información crecen, la habilidad para seleccionar, diseñar y optimizar bases de datos se convierte en una competencia clave para quienes trabajan en el campo del "),e("i",[a._v("Big Data")]),a._v(".")])])])])}],i={name:"Tema5",data:()=>({}),mounted(){this.$nextTick(()=>{this.$aosRefresh()})},updated(){this.$aosRefresh()}},o=i,r=s("2877"),d=Object(r["a"])(o,t,n,!1,null,null,null);e["default"]=d.exports},"252d":function(a,e,s){a.exports=s.p+"img/65.f07d6ec8.png"},"3f47":function(a,e,s){a.exports=s.p+"img/28.fb0d0e6a.png"},4529:function(a,e,s){a.exports=s.p+"img/66.27fb7cac.png"},"7bbb":function(a,e,s){a.exports=s.p+"img/67.cd401a5e.png"},a295:function(a,e,s){a.exports=s.p+"img/63.88b06947.png"},f45e:function(a,e,s){a.exports=s.p+"img/68.68d23f0e.png"}}]);
//# sourceMappingURL=chunk-32b39796.eaa8bc2c.js.map