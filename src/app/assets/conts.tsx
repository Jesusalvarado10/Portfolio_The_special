import photo_web from "../img/photo_web.png";
import photo_web2 from "../img/photo_web2.png";
import photo_web_anime from "../img/web_anime.png";
import photo_bingo from "../img/Bingo.png";
import photo_pgadmin from "../img/pgadmin.png";
import photo_python from "../img/python.png";
import photo_hash from "../img/hash.png";
import photo_graph from "../img/graph.png";
import photo_wefund from "../img/wefund.png";



export const data=[
    {id:"1",
    url:"https://github.com/Jesusalvarado10/Graph",
    name:"Graph",
    description_short:"Un programa Java en Neatbeans que simula una red social, utilizando un grafo no dirigido implementado con listas enlazadas. Permite agregar, eliminar y buscar amigos sin usar una base de datos real, en su lugar utiliza un archivo de texto para simular el almacenamiento de datos.",
    descrition_long:"Este programa Java, desarrollado en la interfaz de Neatbeans, implementa un sistema de red social utilizando la estructura de datos de un grafo no dirigido basado en listas enlazadas. En lugar de utilizar bibliotecas preexistentes, se ha diseñado desde cero, centrándose en la manipulación de listas con nodos. El programa permite a los usuarios agregar y eliminar amigos, así como buscar amigos en función de las relaciones existentes en la red. No depende de una base de datos externa; en su lugar, utiliza un archivo de texto con un formato específico para simular el almacenamiento de datos. Este archivo se carga al inicio del programa para construir dinámicamente el grafo, reflejando las conexiones entre los usuarios. El programa también incluye documentación detallada y un archivo adicional en el repositorio que describe la estructura del archivo de texto que se debe utilizar",
    img:photo_graph,
    link: null
}
,{  id:"2",
    url:"https://github.com/Jesusalvarado10/HotelTSB-HASH",
    name:"Hash-Table" ,
    description_short:"Un proyecto Java en Neatbeans que simula un sistema de registro, check-in, check-out y reservas para un hotel. Utiliza estructuras de datos personalizadas como tablas hash con colisión de listas y búsqueda binaria en listas para optimizar las consultas. Además, puede leer archivos de Excel para la entrada de datos y no depende de bibliotecas externas para la implementación de las estructuras de datos.",
    descrition_long:"Este proyecto Java, desarrollado en Neatbeans, simula un sistema de registro, check-in, check-out y reservas para un hotel. Se han utilizado varias estructuras de datos personalizadas, como tablas hash con manejo de colisiones mediante listas enlazadas y búsqueda binaria en listas. Se ha enfocado en la optimización de consultas, minimizando el uso de ciclos y maximizando el rendimiento a través de una lógica eficiente. Además, el programa cuenta con la capacidad de leer archivos de Excel para facilitar la entrada de datos. No se han utilizado bibliotecas externas para la implementación de las estructuras de datos. Todo el código ha sido desarrollado internamente, garantizando un control total sobre el rendimiento y la funcionalidad del sistema.",
    img:photo_hash,
    link: null
}
,{  id:"3",
    url:"https://github.com/Jesusalvarado10/Cdshop",
    name:"Cdshop",
    description_short:"Un programa en Python que simula una tienda de discos, permitiendo agregar, eliminar, buscar y obtener estadísticas sobre los discos disponibles. Utiliza un archivo de texto como base de datos, admite la creación de usuarios y cuenta con un área de administración para la gestión de discos. La interfaz se realiza en la consola para una experiencia simple y directa.",
    descrition_long:"Este programa en Python recrea una tienda de discos, ofreciendo funciones para agregar, eliminar, buscar y obtener estadísticas sobre diferentes discos. Utiliza conceptos básicos de programación y simula una base de datos mediante un archivo de texto donde se almacenan los datos de los discos. Además, permite la creación de usuarios que pueden comprar discos disponibles en la tienda. Incluye un área de administración para la gestión de discos, donde el administrador puede crear y eliminar discos según sea necesario. La interfaz se realiza a través de la consola, proporcionando una experiencia de usuario intuitiva y fácil de usar.",
    img:photo_python,
    link: null
}
,{  id:"4",
    url:"https://github.com/Jesusalvarado10/InventorySQL",
    name:"InventorySQL",
    description_short:"Este proyecto implica la creación de una base de datos relacional en PostgreSQL, partiendo de un modelo entidad-relación. Se realiza la normalización adecuada y se diseñan las estructuras de tablas en PostgreSQL según las especificaciones del modelo relacional. Además, se implementan desencadenadores (triggers) para automatizar acciones en la base de datos. El objetivo es garantizar la coherencia y la funcionalidad óptima de la base de datos, cumpliendo con los requisitos del enunciado inicial.",
    descrition_long:"Este proyecto implica la creación de una base de datos relacional en PostgreSQL, partiendo de un enunciado que describe un modelo entidad-relación. Se realiza la debida transformación del modelo entidad-relación al modelo relacional, incluyendo la normalización adecuada para garantizar la integridad y eficiencia de la base de datos. Se diseñan las estructuras de tablas en PostgreSQL de acuerdo con las especificaciones del modelo relacional obtenido. Además, se implementan desencadenadores (triggers) según las necesidades del enunciado y las especificaciones adicionales requeridas. Estos desencadenadores se utilizan para automatizar ciertas acciones en la base de datos, como la validación de datos, la ejecución de acciones dependientes de ciertos eventos, etc. El proyecto garantiza la coherencia y la funcionalidad óptima de la base de datos relacional en PostgreSQL, cumpliendo con los requisitos establecidos en el enunciado inicial.",
    img:photo_pgadmin,
    link: null

}
,{  id:"5",
    url:"https://github.com/CristianF4zio/ProyectoFinaL/tree/jesus",
    name:"Web University Final",
    description_short:"Una página web creada en React y TypeScript con Tailwind CSS y Firebase, diseñada para agrupaciones universitarias. Ofrece funciones como inicio de sesión, registro de usuarios, unión a grupos, búsqueda de agrupaciones y administración de grupos y temas. Se utilizó la metodología Open UP para su desarrollo. Puedes encontrar el proyecto aquí: (espacio para el enlace).",
    descrition_long:"Este proyecto consiste en una página web desarrollada en React y TypeScript, utilizando Tailwind CSS para el diseño y Firebase para la autenticación y el almacenamiento de datos. Está diseñada para ser utilizada por agrupaciones de una universidad, ofreciendo funciones como inicio de sesión, registro de usuarios y la posibilidad de unirse a grupos existentes. Los usuarios pueden buscar agrupaciones, modificar sus datos personales y explorar los grupos disponibles. Además, cuenta con un área de administración donde los administradores pueden agregar, eliminar y modificar grupos y temas. La metodología Open UP se utilizó en el proceso de desarrollo para garantizar una planificación y ejecución efectivas del proyecto. El enlace al proyecto se encuentra disponible aquí: (espacio para el enlace).",
    img:photo_web2,
    link:"https://proyectofinalsdi.web.app/inicio"

}
,{  id:"6",
    url:"https://github.com/aemr-LL7/Microproyecto-SI-2",
    name:"Web University Microproject",
    description_short:"Una página web desarrollada en React y TypeScript, alojada en Firebase, que permite a los usuarios iniciar sesión, registrarse y unirse a grupos específicos. La plataforma se centra en la simplicidad y la funcionalidad básica para ofrecer una experiencia de usuario intuitiva y sin complicaciones.",
    descrition_long:"Este proyecto es una página web desarrollada en React y TypeScript, con Firebase como base de datos y servicio de alojamiento. La página ofrece una experiencia sencilla centrada en la visualización y unión a grupos específicos. Los usuarios pueden iniciar sesión o registrarse para acceder a la funcionalidad completa. Una vez autenticados, tienen la capacidad de explorar los grupos disponibles y unirse a aquellos que les interesen. La integración con Firebase permite un almacenamiento seguro de datos de usuarios y grupos, así como la implementación de funciones de autenticación robustas. La simplicidad de diseño y la facilidad de uso son los principales enfoques de esta página web.",
    img:photo_web,
    link:"https://microproyecto-26dd2.web.app/home"

},
{   id:"7",
    url:"https://github.com/Jesusalvarado10/ProyectoBaseDeDatos" ,
    name:"Web Anime Recomendation",
    description_short:"Una página web desarrollada en React y TypeScript que muestra una lista de animes desde una API. Los usuarios pueden iniciar sesión para dar like a los animes y recibir recomendaciones personalizadas. La información del usuario se almacena en Firebase, mientras que las recomendaciones se generan utilizando un grafo en Neo4j, aplicando conocimientos en bases de datos políglotas para integrar múltiples tecnologías de almacenamiento de datos.",
    descrition_long:"Este proyecto es una página web desarrollada en React y TypeScript que utiliza datos de una API de animes para mostrar una lista de animes en la página principal. Los usuarios pueden iniciar sesión para dar like a los animes que les gusten y recibir recomendaciones personalizadas. La información del usuario se almacena en Firebase, proporcionando una base de datos escalable y segura para la gestión de cuentas. Las recomendaciones de anime se generan utilizando un grafo en Neo4j, aprovechando los conocimientos en bases de datos políglotas para integrar múltiples tecnologías de almacenamiento de datos. Esta combinación de Firebase para la gestión de usuarios y Neo4j para la generación de recomendaciones permite una experiencia de usuario personalizada y enriquecida.",
    img:photo_web_anime,
    link:"https://proyecto-base-de-datos.vercel.app/home"

},
{   id:"8",
    url:"https://github.com/Jesusalvarado10/ProyectoSistemas" ,
    name:"Bingo",
    description_short:"Un programa en Java Script que simula un juego de bingo, permitiendo a los usuarios comprar cartones, generar números aleatorios y verificar si tienen una combinación ganadora. Utiliza conceptos de programación orientada a objetos y ofrece una interfaz gráfica simple para una experiencia de usuario intuitiva.",
    descrition_long:"Este proyecto consiste en un programa en Java que simula un juego de bingo, permitiendo a los usuarios comprar cartones, generar números aleatorios y verificar si tienen una combinación ganadora. Se han aplicado conceptos de programación orientada a objetos para la creación de clases y métodos que gestionan el juego de bingo de manera eficiente y estructurada. La interfaz gráfica proporciona una experiencia de usuario intuitiva y sencilla, permitiendo a los jugadores interactuar con el juego de forma cómoda y divertida. El programa se ejecuta en la consola y ofrece una funcionalidad completa para disfrutar de una partida de bingo virtual.",
    img:photo_bingo,
    link:"https://jesusalvarado10.github.io/ProyectoSistemas/"
},
{   id:"9",
    url:"https://github.com/Jesusalvarado10/Project_We_Fund" ,
    name:"Web WeFund",
    description_short:"Una página web desarrollada en React y TypeScript que simula una plataforma de crowdfunding para proyectos creativos. Los usuarios pueden registrarse, crear proyectos, donar a proyectos existentes y recibir actualizaciones sobre el progreso de los proyectos. La página también incluye un área de administración para la gestión de proyectos y usuarios.",
    descrition_long:"Esta plataforma de crowdfunding está construida con una arquitectura MVC, utilizando React y TypeScript para el frontend y Node.js con Express para el backend. Firebase se emplea como base de datos, mientras que un bot de Telegram está configurado para administrar los pagos realizados a través de PagoMóvil. Cada pago se registra y se refleja en el perfil de cada fundación, ofreciendo un seguimiento detallado y transparente del financiamiento de los proyectos.",
    img:photo_wefund ,
    link:"https://project-we-fund.vercel.app"
    }
]