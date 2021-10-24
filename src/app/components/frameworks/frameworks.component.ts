import { Component, OnInit } from '@angular/core';
import { Framework } from '../../models/Framework'

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.css']
})
export class FrameworksComponent implements OnInit {

  constructor() { }

  public frworks:Framework[] = [
    {
      nombre: 'React',
      puesto: 1,
      descripcion: 'React core es solo una biblioteca sin comentarios que implementa la capa de vista para la interfaz de usuario. En el desarrollo de aplicaciones, se utiliza con otras bibliotecas de React Ecosystem para el desarrollo de aplicaciones de un extremo a otro.Tiene el lema “Aprenda una vez, escriba en cualquier lugar”, ya que los ingenieros de software pueden usar React para desarrollar aplicaciones para cualquier tipo de interfaz de usuario, por ejemplo, web, móvil, escritorio o incluso para Smart TV. Entre todos los marcos web del lado del cliente, React ofrece la mejor representación del lado del servidor con un excelente soporte de SEO. Facebook está desarrollando activamente React y poniendo su peso detrás de él. Como resultado, las funciones de React se prueban con 2.700 millones de usuarios de Facebook. Está endurecido por la batalla y permanecerá en la industria mientras Facebook esté allí. Es uno de los frameworks de desarrollo más disruptivos e innovadores. Ha popularizado el enlace de datos unidireccional, la programación declarativa y el estado inmutable. Ahora está trabajando para ofrecer una mejor compatibilidad con la concurrencia, un rendimiento mejorado y un código más limpio.',
      link: 'https://es.reactjs.org/'
    },
    {
      nombre: 'Vue.js',
      puesto: 2,
      descripcion: 'Evan You, un ex ingeniero de Google, desarrolló Vue.js como un marco web basado en JavaScript MVVM (Model-View-View-Model) del lado del cliente en 2014. Combinó con éxito las partes buenas de AngularJS (View Layer) y el buenas partes de React (Virtual DOM). Con el tiempo, Vue.js se convirtió en uno de los marcos web más populares impulsados ​​por la comunidad. En muchos sentidos, tomó el camino intermedio entre React y Angular y ofreció una alternativa agradable tanto a Angular como a React.',
      link: 'https://vuejs.org/'
    },
    {
      nombre: 'Angular',
      puesto: 3,
      descripcion: 'Después del fracaso de AngularJS (Angular 1+), Google lanzó Angular como un marco web MVW (Model-View-Whatever) de extremo a extremo, del lado del cliente, en 2016. Angular es un marco web más tradicional que ofrece dos vías Enlace de datos, Convención sobre configuración, Cheques sucios. También usó TypeScript como lenguaje de programación nativo y jugó un papel clave en la popularización de TypeScript. Angular es notablemente estable y no ha introducido cambios críticos en los últimos 5 años. Angular también se centra en la estabilidad y la solidez sobre la innovación y en un marco perfecto para el desarrollo de aplicaciones empresariales.',
      link: 'https://angular.io/'
    },
    {
      nombre: 'Spring',
      puesto: 4,
      descripcion: 'A principios de este siglo, las empresas utilizaron el marco Java Enterprise para el desarrollo de aplicaciones web. Había muchas limitaciones en J2EE: era engorroso, necesitaba una configuración pesada y el tiempo de configuración inicial para crear una aplicación simple “Hello World” requería un esfuerzo enorme. Para superar estas deficiencias, Rod Johnson creó el marco Spring como una inversión de control, marco web del lado del servidor en 2002. Desde entonces, Spring ha crecido con el tiempo y ahora es el marco web principal en el desarrollo de aplicaciones basadas en Java. La mejor parte de Spring es evolucionar con el panorama cambiante y desempeñar un papel muy importante en hacer que Java sea relevante en la era de la computación en la nube.',
      link: 'https://spring.io/'
    },
    {
      nombre: 'Django',
      puesto: 5,
      descripcion: 'En 2005, dos jóvenes ingenieros Adrian Holovaty y Simon Willison crearon un marco web del lado del servidor basado en Python que sigue el patrón arquitectónico de MTV. En la última década, la popularidad de Python aumentó a pasos agigantados, lo que afectó directamente la alta adopción de Django. Además de eso, Django ofrece muchas características agradables y actualmente es uno de los principales frameworks web del lado del servidor.',
      link: 'https://www.djangoproject.com/'
    },
    {
      nombre: 'Ruby On Rails',
      puesto: 6,
      descripcion: 'A principios de la década de 2000, el panorama del desarrollo de aplicaciones web era muy diferente al actual. J2EE basado en Java era el framework de facto para el desarrollo web en ese entonces. Era bastante pesado y necesitaba mucha plomería. Escribir una aplicación simple de hola mundo requirió un esfuerzo significativo. David Heinemeier Hansson creó Ruby on Rails como un framework de desarrollo web del lado del servidor que admitía el patrón MVC y el lenguaje de programación Ruby. Introdujo muchas ideas y conceptos novedosos: Convención sobre configuración (CoC), No se repita (DRY), Patrón de registro activo. También introdujo el desarrollo rápido de aplicaciones a través de la creación y migración de bases de datos, el andamiaje de vistas.',
      link: 'https://rubyonrails.org/'
    },
    {
      nombre: 'ASP.NET Core',
      puesto: 7,
      descripcion: 'En los últimos años, Microsoft está modernizando su Tech Stack con un diseño innovador, moderno y futurista que satisfaría las necesidades de desarrollo de software moderno. Microsoft reelabora su uno de los Flagship Software Development Tech Stack ASP.NET, que tuvo un gran éxito en el desarrollo de aplicaciones web en el ámbito de Microsoft. En 2016, Microsoft lanzó el sucesor de ASP.NET como ASP.NET Core, que es de código abierto y una reelaboración completa de su predecesor. Es un framework web modular que puede ejecutarse en múltiples plataformas y funciona a la perfección con los frameworks de desarrollo modernos del lado del cliente de JavaScript.',
      link: 'https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-5.0'
    },
    {
      nombre: 'Flask',
      puesto: 8,
      descripcion: 'Armin Ronacher creó Flask como un marco Micro Web minimalista basado en Python en 2010. Flask se llama Micro-framework ya que no está controlado y no necesita ninguna herramienta o biblioteca en particular. Es comparable a Express.js y no ofrece soporte listo para usar para ORM, validación de formularios o valores. Sin embargo, Flask es altamente modular y admite extensiones conectables. Flask también goza de gran popularidad con la creciente popularidad de Python.',
      link: 'https://flask.palletsprojects.com/en/2.0.x/'
    },
    {
      nombre: 'Express.js',
      puesto: 9,
      descripcion: 'TJ Holowaychuk creó Express.js como un marco web MVC (Model-View-Controller) del lado del servidor basado en el tiempo de ejecución de JavaScript Node.js. Lanzó la primera versión estable en 2010. Express.js estaba fuertemente influenciado por el minimalista Web Framework Sinatra y ofrecía una funcionalidad minimalista similar. Los desarrolladores usan Express.js para desarrollar backend basado en REST, o aplicaciones web completas renderizadas del lado del servidor junto con la capa de vista conectable.',
      link: 'https://expressjs.com/es/'
    },
    {
      nombre: 'Laravel',
      puesto: 10,
      descripcion: 'PHP es un lenguaje de programación especialmente diseñado para el desarrollo web. Taylor Otwell creó Laravel en 2011 como un framework web del lado del servidor basado en PHP que sigue el patrón arquitectónico MVC. También sigue la filosofía “Ruby on Rails” y proporciona CoC y muchas funcionalidades listas para usar esenciales para el desarrollo web empresarial.',
      link: 'https://laravel.com/'
    }
  ];

  ngOnInit(): void {
  }
}
