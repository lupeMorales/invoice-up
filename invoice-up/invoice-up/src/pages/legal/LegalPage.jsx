import { HeroLegal } from "../../components/layout/hero/HeroLegal";
import { TextoLegalStyled } from "./TextLegalStyled";
import { Footer } from "../../components/layout/footer/Footer";
import { Page404 } from "../Page404";
import { Header } from "../../components/layout/header/Header";

export const LegalPage = ({ page }) => {
  let title, content;

  // Validación del valor de 'page'
  if (
    page === "aviso-legal" ||
    page === "politica-cookies" ||
    page === "politica-privacidad"
  ) {
    switch (page) {
      case "aviso-legal":
        title = "Aviso Legal";
        content = (
          <TextoLegalStyled>
            <h2>1.- Identificación</h2>
            <p>
              El presente aviso legal regula el uso del sitio web
              www.invoice-up.com (en adelante, LA WEB), del que es
              titularINVOICE-UP, S.L. (en adelante, PROPIETARIO DE LA WEB). El
              PROPIETARIO DE LA WEB, en cumplimiento de la Ley 34/2002, de 11 de
              julio, de servicios de la sociedad de la información y de comercio
              electrónico, le informa que: ● Su denominación social
              es:INVOICE-UP, S.L. ● Su nombre comercial es: INVOICE-UP
              INFORMÁTICA ● Su CIF es: B02813XXX ● Su domicilio social está en:
              CALLE INVOICEUP 8, SEVILLA. Para comunicarse con nosotros, ponemos
              a su disposición diferentes medios de contacto que detallamos a
              continuación: ● Teléfono: 95XXXXXXX ● Correo electrónico:
              INVOICEUP@EMAIL.COMTodas las notificaciones y comunicaciones entre
              los usuarios y el PROPIETARIO DE LA WEB se considerarán eficaces,
              a todos los efectos, cuando se realicen a través de correo postal
              o cualquier otro medio de los detallados anteriormente.
            </p>
            <h2>2.- Usuarios</h2>
            <p>
              {" "}
              El acceso y/o uso de este portal del PROPIETARIO DE LA WEB,
              creadora del sitio, atribuye la condición de USUARIO, al que
              acepta, desde dicho acceso y/o uso, las Condiciones Generales de
              Uso aquí reflejadas. Las citadas Condiciones serán de aplicación
              independientemente de las Condiciones Generales de Contratación
              que en su caso resulten de obligado cumplimiento.
            </p>

            <h2> 3.- Uso del portal</h2>
            <p>
              {" "}
              El sitio web y sus servicios, son de acceso libre y gratuito, no
              obstante, el PROPIETARIO DE LA WEB condiciona la utilización de
              algunos de los servicios ofrecidos en su web a la previa
              cumplimentación del correspondiente formulario, para convertirse
              en usuario del portal. El usuario garantiza la autenticidad y
              actualidad de todos aquellos datos que comunique al PROPIETARIO DE
              LA WEB y será el único responsable de las manifestaciones falsas o
              inexactas que realice. El usuario se compromete expresamente a
              hacer un uso adecuado de los contenidos y servicios del
              PROPIETARIO DE LA WEB y a no emplearlos para, entre otros: a)
              Difundir contenidos, delictivos, violentos, pornográficos,
              racistas, xenófobo, ofensivos, de apología del terrorismo o, en
              general, contrarios a la ley o al orden público. b) Introducir en
              la red virus informáticos, o realizar actuaciones susceptibles de
              alterar, estropear, interrumpir o generar errores o daños en los
              documentos electrónicos, datos o sistemas físicos y lógicos del
              PROPIETARIO DE LA WEB o de terceras personas; así como
              obstaculizar el acceso de otros usuarios al sitio web y a sus
              servicios mediante el consumo masivo de los recursos informáticos
              a través de los cuales el PROPIETARIO DE LA WEB presta sus
              servicios. c) Intentar acceder a las cuentas de correo electrónico
              de otros usuarios o a áreas restringidas de los sistemas
              informáticos del PROPIETARIO DE LA WEB o de terceros y, en su
              caso, extraer información. d) Vulnerar los derechos de propiedad
              intelectual o industrial, así como violar la confidencialidad de
              la información del PROPIETARIO DE LA WEB o de terceros. e)
              Suplantar la identidad de otro usuario, de las administraciones
              públicas o de un tercero. f) Reproducir, copiar, distribuir, poner
              a disposición o de cualquier otra forma comunicar públicamente,
              transformar o modificar los contenidos, a menos que se cuente con
              la autorización del titular de los correspondientes derechos, o
              ello resulte legalmente permitido. g) Recabar datos con finalidad
              publicitaria y de remitir publicidad de cualquier clase y
              comunicaciones con fines de venta u otras, de naturaleza comercial
              sin que medie su previa solicitud o consentimiento.
            </p>

            <h2> 4.- Política de privacidad </h2>
            <p>
              El PROPIETARIO DE LA WEB quiere poner en conocimiento de los
              usuarios y clientes de su página Web, la política llevada a cabo
              respecto al tratamiento y protección de los datos de carácter
              personal de aquellas personas que voluntariamente utilizan los
              formularios de contacto para contactar con el PROPIETARIO DE LA
              WEB, así como el acceso a su página propia, que impliquen la
              comunicación de sus datos personales al PROPIETARIO DE LA WEB. a)
              Identificación del responsable del tratamiento. El PROPIETARIO DE
              LA WEB, provista de CIF J9XX75338, informa al usuario y cliente de
              su página Web de la existencia de un registro de actividades
              automatizado de datos personales denominado CLIENTES, donde se
              recogen y almacenan los datos personales que el usuario y el
              cliente le comunican a fin de gestionar su solicitud. b)
              Actualización de las políticas. El PROPIETARIO DE LA WEB
              modificará, sin previo aviso, la presente política de privacidad
              siempre que sea necesario para adecuar la misma a cualquier cambio
              legislativo, reglamentario, jurisprudencial, administrativo o con
              la finalidad de adaptar dicha política a las instrucciones
              dictadas por la Agencia de Protección de Datos u objeto legítimo
              de cualquier modificación de esta política, no obstante lo
              anterior, será publicada y advertida en la página Web del
              PROPIETARIO DE LA WEB. Por todo lo anterior, el PROPIETARIO DE LA
              WEB, recomienda a los usuarios la lectura periódica de estas
              políticas con el fin de poder conocer los cambios que en las
              mismas se efectúen. c) Finalidad del Registro de actividades. El
              PROPIETARIO DE LA WEB no solicita en su página Web, datos a los
              internautas que la visiten, salvo datos meramente identificativos,
              por lo tanto, la comunicación de datos personales por el usuario
              al PROPIETARIO DE LA WEB a través de su página Web únicamente
              puede entenderse que tendrá lugar cuando éstos voluntariamente
              utilicen el servicio de formulario de contacto u otras vías de
              comunicación para ponerse en contacto con el PROPIETARIO DE LA
              WEB, dado que en estos casos el tratamiento de los datos es
              inevitable e implícito al sistema de comunicación. Para estos
              casos y los descritos en el siguiente apartado, la entidad,
              informa al cliente que el tratamiento de los datos se realiza con
              las siguientes finalidades: Llevar a cabo todas las gestiones
              relacionadas con la elaboración de presupuestos, contratación y
              prestación de servicios del PROPIETARIO DE LA WEB, a la empresa a
              la que pertenece o en su caso al interesado que lo solicite. Así
              como atender y contestar las comunicaciones recibidas y las de
              prospección comercial para mantener informado a los usuarios de
              eventuales promociones. d) Consentimiento. Se informa que, cuando
              el usuario no mantenga relaciones comerciales con el PROPIETARIO
              DE LA WEB, y realice el envío de un correo electrónico o una
              comunicación al PROPIETARIO DE LA WEB, indicando otros datos
              personales, dicho usuario estará dando su consentimiento libre,
              inequívoco, específico, informado y expreso para el tratamiento de
              sus datos personales por el PROPIETARIO DE LA WEB, con las
              finalidades establecidas anteriormente, así como atender su
              comunicación o enviar documentación. A los mismos efectos, el
              PROPIETARIO DE LA WEB informa que, si el cliente envía un correo
              electrónico o comunica al PROPIETARIO DE LA WEB sus datos
              personales en razón del cargo que ocupa en una empresa, ya sea
              como administrador, gerente, representante y/o cualquier otro
              cargo como persona de contacto en la empresa, se entenderá que tal
              comunicación conlleva la prestación de su consentimiento libre,
              inequívoco, específico, informado y expreso para el tratamiento de
              sus datos personales por el PROPIETARIO DE LA WEB, con las
              finalidades establecidas anteriormente. e) Identificación de los
              destinatarios respecto de los que el PROPIETARIO DE LA WEB tenga
              previsto la realización de cesiones o acceso a datos por cuenta de
              terceros. El PROPIETARIO DE LA WEB únicamente tiene prevista la
              realización de cesiones o comunicaciones de datos que en razón al
              Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de
              27 de abril de 2016 y la Ley Orgánica 3/2018 de 5 de diciembre de
              Protección de Datos Personales y de garantía de los derechos
              digitales (en adelante RGPD) deba realizar para atender sus
              obligaciones con las Administraciones Públicas, Organismos o
              personas directamente relacionadas con el PROPIETARIO DE LA WEB,
              en los casos que así se requiera de acuerdo con la Legislación
              vigente en cada materia y en cada momento o en los supuestos en
              que haya consentido expresamente. Igualmente el PROPIETARIO DE LA
              WEB pone en conocimiento del usuario, que cualquier otra cesión de
              datos que deba realizar, será puesta en su conocimiento cuando así
              lo prevea el RGPD, informándole de modo expreso, preciso e
              inequívoco de los destinatarios de la información, de la finalidad
              a que se destinarán los datos, y de la naturaleza de los datos
              cedidos, o en su caso, cuando el RGPD lo establezca, previamente,
              se solicitará el consentimiento inequívoco específico e informado
              al usuario. No obstante, el PROPIETARIO DE LA WEB informa al
              usuario y al cliente, que cualquier tratamiento de datos
              personales, se sujeta a la legislación vigente en España en
              materia de protección de datos, establecida por el RGPD y su
              normativa complementaria y de desarrollo. En este sentido, el
              PROPIETARIO DE LA WEB sólo es responsable y garantiza la
              confidencialidad de los datos de carácter personal que solicite al
              usuario a través de la página Web. f) Calidad de los datos. El
              PROPIETARIO DE LA WEB advierte al usuario, que salvo la existencia
              de una representación legalmente constituida, ningún usuario puede
              utilizar la identidad de otra persona y comunicar sus datos
              personales, por lo que el usuario en todo momento deberá tener en
              cuenta que, sólo puede incluir datos personales correspondientes a
              su propia identidad y que sean adecuados, pertinentes, actuales,
              exactos y verdaderos. A tales efectos, el usuario será el único
              responsable frente a cualquier daño, directo y/o indirecto que
              cause a terceros o al PROPIETARIO DE LA WEB, por el uso de datos
              personales de otra persona, o sus propios datos personales cuando
              sean falsos, erróneos, no actuales, inadecuados o impertinentes.
              Igualmente el usuario que utilice los datos personales de un
              tercero, responderá ante éste de la obligación de información
              establecida en el RGPD para cuando los datos de carácter personal
              no hayan sido recabados del propio interesado, y/o de las
              consecuencias de no haberle informado. g) Ejercicio de los
              derechos de Acceso, Rectificación, Limitación del tratamiento,
              Portabilidad, Cancelación, Oposición del tratamiento y Supresión
              de los datos. El PROPIETARIO DE LA WEB informa al usuario de la
              posibilidad de ejercitar sus derechos de acceso, rectificación,
              limitación del tratamiento, portabilidad, oposición al tratamiento
              y supresión de sus datos así como el derecho a presentar una
              reclamación ante la Autoridad de Controla mediante escrito
              dirigido al PROPIETARIO DE LA WEB en la siguiente dirección: CALLE
              INVOICEEUP SEVILLA o mediante correo dirigido a
              INFO@INVOICE-UP.ES, adjuntando en ambos casos su DNI o tarjeta de
              identidad. h) Uso de formularios para la recogida de datos
              personales. En los formularios de contacto existentes en la web,
              donde se recogen datos de carácter personal, el usuario deberá
              consentir de manera expresa y con carácter previo al envío de los
              mismos, la aceptación y conocimiento de la política de privacidad
              mediante la cumplimentación del check «he leído y acepto la
              política de privacidad», y a cuyo contenido podrá tener acceso
              mediante el enlace adjunto que le remitirá el presente aviso
              legal. Si el campo check no fuere marcado por el usuario, no se
              realizará el envío de los datos contenidos en dichos formularios.
              i) Medidas de seguridad adoptadas con relación al tratamiento de
              los datos personales. El PROPIETARIO DE LA WEB informa al usuario
              que, de conformidad con lo dispuesto en el RGPD, ha adoptado las
              medidas de índole técnica y organizativas necesarias para
              garantizar la seguridad de los datos de carácter personal y evitar
              la alteración, pérdida, tratamiento o acceso no autorizado, habida
              cuenta del estado de la tecnología, la naturaleza de los datos
              almacenados y los riesgos a que están expuestos. Igualmente el
              PROPIETARIO DE LA WEB garantiza al usuario el cumplimiento del
              deber de secreto profesional respecto de los datos personales de
              los usuarios y del deber de guardarlos. j) Más información sobre
              política de privacidad. Si quiere obtener mayor información sobre
              nuestra política de privacidad puede pinchar en el siguiente
              enlace de nuestro sitio web (hacer constar enlace a la política de
              privacidad de segunda capa que le remitimos). 5.- Propiedad
              industrial e intelectual En virtud de lo dispuesto a la
              legislación vigente reguladora de la Propiedad Intelectual, quedan
              expresamente prohibidas la reproducción, la distribución y la
              comunicación pública, incluida su modalidad de puesta a
              disposición, de la totalidad o parte de los contenidos, como
              textos, fotografías, gráficos, imágenes, iconos, tecnología,
              software, así como su diseño gráfico y códigos fuente, de esta
              página web, con fines comerciales, en cualquier soporte y por
              cualquier medio técnico, sin la autorización del PROPIETARIO DE LA
              WEB. Todos los contenidos del sitio web, constituyen una obra cuya
              propiedad pertenece al PROPIETARIO DE LA WEB, sin que puedan
              entenderse cedidos al usuario ninguno de los derechos de
              explotación sobre los mismos, más allá de lo estrictamente
              necesario para el correcto uso de la web. En definitiva, los
              usuarios que accedan a este sitio web pueden visualizar los
              contenidos y efectuar, en su caso, copias privadas autorizadas
              siempre que los elementos reproducidos no sean cedidos
              posteriormente a terceros, ni se instalen a servidores conectados
              a redes, ni sean objeto de ningún tipo de explotación comercial.
              Asimismo, todas las marcas, nombres comerciales o signos
              distintivos de cualquier clase que aparecen en el sitio web son
              propiedad del PROPIETARIO DE LA WEB, sin que pueda entenderse que
              el uso o acceso al mismo atribuya al usuario derecho alguno sobre
              los mismos. El establecimiento de un híper enlace no implica en
              ningún caso la existencia de relaciones entre el PROPIETARIO DE LA
              WEB y el propietario del sitio web en la que se establezca, ni la
              aceptación y aprobación por parte del PROPIETARIO DELA WEB de sus
              contenidos o servicios. Aquellas personas que se propongan
              establecer un híper enlace, previamente deberán solicitar
              autorización por escrito al PROPIETARIO DE LA WEB. En todo caso,
              el hiperenlace únicamente permitirá el acceso a la home-page o
              página de inicio de nuestro sitio web, asimismo deberá abstenerse
              de realizar manifestaciones o indicaciones falsas, inexactas o
              incorrectas sobre el PROPIETARIO DE LA WEB, o incluir contenidos
              ilícitos, contrarios a las buenas costumbres y al orden público.
              El PROPIETARIO DE LA WEB no se responsabiliza del uso que cada
              usuario le dé a los materiales puestos a disposición en este sitio
              web ni de las actuaciones que realice en base a los mismos.
            </p>
            <h2>5.- Exclusión de garantías y responsabilidad</h2>
            <p>
              {" "}
              El contenido del presente sitio web es de carácter general y tiene
              una finalidad meramente informativa, sin que se garantice
              plenamente el acceso a todos los contenidos, ni su exhaustividad,
              corrección, vigencia o actualidad, ni su idoneidad o utilidad para
              un objetivo específico. El PROPIETARIO DE LA WEB excluye, hasta
              donde permite el ordenamiento jurídico, cualquier responsabilidad
              por los daños y perjuicios de toda naturaleza derivados de: a) La
              imposibilidad de acceso al sitio web o la falta de veracidad,
              exactitud, exhaustividad y/o actualidad de los contenidos, así
              como la existencia de vicios y defectos de toda clase de los
              contenidos transmitidos, difundidos, almacenados, puestos a
              disposición a los que se haya accedido a través del sitio web o de
              los servicios que se ofrecen. b) La presencia de virus o de otros
              elementos en los contenidos que puedan producir alteraciones en
              los sistemas informáticos, documentos electrónicos o datos de los
              usuarios. c) El incumplimiento de las leyes, la buena fe, el orden
              público, los usos del tráfico y el presente aviso legal como
              consecuencia del uso incorrecto del sitio web. En particular, y a
              modo ejemplificativo, el PROPIETARIO DE LA WEB no se hace
              responsable de las actuaciones de terceros que vulneren derechos
              de propiedad intelectual e industrial, secretos empresariales,
              derechos al honor, a la intimidad personal, familiar y a la propia
              imagen, así como la normativa en materia de competencia desleal y
              publicidad ilícita. 7.- Modificación de las presentes condiciones
              y duración El PROPIETARIO DE LA WEB podrá modificar en cualquier
              momento las condiciones aquí determinadas, siendo debidamente
              publicadas como aquí aparecen. La vigencia de las citadas
              condiciones irá en función de su exposición y estarán vigentes
              hasta que sean modificadas por otras debidamente publicadas.
            </p>
          </TextoLegalStyled>
        );
        break;
      case "politica-cookies":
        title = "Política de Cookies";
        content = (
          <TextoLegalStyled>
            <h2>¿Qué son las cookies?</h2>
            <p>
              Una cookie es un fichero que se descarga en su ordenador al
              acceder a determinadas páginas web. Las cookies permiten a una
              página web, entre otras cosas, almacenar y recuperar información
              sobre hábitos de navegación de un usuario o de su equipo y,
              dependiendo de la información que contengan y de la forma que
              utilice su equipo, pueden utilizarse para reconocer al usuario
              anónimo. Las Cookies se asocian únicamente a un Usuario anónimo y
              su ordenador y no proporcionan referencias que permitan deducir
              datos personales del Usuario. En el caso de Usuarios registrados
              que se registren o que hayan iniciado sesión, podrán beneficiarse
              de unos servicios más personalizados y orientados a su perfil,
              gracias a la combinación de los datos almacenados en las cookies
              con los datos personales utilizados en el momento de su registro.
              Dichos Usuarios autorizan expresamente el uso de esta información
              con la finalidad indicada, sin perjuicio de su derecho a rechazar
              o deshabilitar el uso de cookies.
            </p>
            <h2>
              Tipología, finalidad y funcionamiento de las Cookies en General.
            </h2>
            <p>
              Según el plazo de tiempo que permanecen activadas en el equipo
              terminal podemos distinguir: ● Cookies de sesión: Son un tipo de
              cookies diseñadas para recabar y almacenar datos mientras el
              usuario accede a una página web. Se suelen emplear para almacenar
              información que solo interesa conservar para la prestación del
              servicio solicitado por el usuario en una sola ocasión (p.e. una
              lista de productos adquiridos). ● Cookies persistentes: Son un
              tipo de cookies en el que los datos siguen almacenados en el
              terminal y pueden ser accedidos y tratados durante un periodo
              definido por el responsable de la cookie, y que puede ir de unos
              minutos a varios años.
            </p>

            <h2>Tipos de cookies según la entidad que las gestione.</h2>
            <p>
              Según quien sea la entidad que gestione el equipo o dominio desde
              donde se envían las cookies y trate los datos que se obtengan,
              podemos distinguir: ● Cookies propias: Son aquéllas que se envían
              al equipo terminal del usuario desde un equipo o dominio
              gestionado por el propio editor y desde el que se presta el
              servicio solicitado por el usuario. ● Cookies de tercero: Son
              aquéllas que se envían al equipo terminal del usuario desde un
              equipo o dominio que no es gestionado por el editor, sino por otra
              entidad que trata los datos obtenidos través de las cookies.
            </p>

            <h2>Consentimiento y Autorización para el uso de cookies</h2>
            <p>
              Al acceder a este sitio web por primera vez, verá un espacio o
              banner donde se le informa de la utilización de las cookies y
              donde puede consultar esta política de cookies mediante un link.
              Si usted consiente la utilización de cookies, continúa navegando
              haciendo uso de la barra de desplazamiento o scroll o hace clic en
              algún link (aceptar) según proceda, se entenderá que usted ha
              consentido nuestra política de cookies y, por tanto, la aceptación
              para la instalación de las mismas en su equipo o dispositivo,
              excepto en la medida que haya modificado la configuración de su
              navegador para rechazar la utilización de las mismas.
            </p>
            <h2>
              ¿Qué tipos de cookies utiliza esta página web en particular?
            </h2>
            <p>
              Definición, Identificación y finalidad de las cookies de esta Web
              no exceptuadas por la LSSI. Serían: ● Cookies de análisis: Son
              aquéllas que bien tratadas por nosotros o por terceros, nos
              permiten cuantificar el número de usuarios y así realizar la
              medición y análisis estadístico de la utilización que hacen los
              usuarios del servicio ofertado. Para ello se analiza su navegación
              en nuestra página web con el fin de mejorar la oferta de productos
              o servicios que le ofrecemos. ● Cookies publicitarias: Son
              aquéllas que, bien tratadas por nosotros o por terceros, nos
              permiten gestionar de la forma más eficaz posible la oferta de los
              espacios publicitarios que hay en la página web, adecuando el
              contenido del anuncio al contenido del servicio solicitado o al
              uso que realice de nuestra página web. Para ello podemos analizar
              sus hábitos de navegación en Internet y podemos mostrarle
              publicidad relacionada con su perfil de navegación.
            </p>
            <h2>Cuadro de identificación de las cookies y finalidad.</h2>
            <p>
              Nombre del editor, nombre de la cookie, «tipo» y Propósito. Nota:
              Las cookies de tipo “Propias” son utilizadas sólo por el
              propietario de esta web y las cookies “De terceros” son
              utilizadas, también, por el prestador del servicio que está
              detallado en el cuadro anterior. Configuración del navegador para
              la revocación y retirada del consentimiento para el uso de las
              cookies. INVOICE-UP S.L. recuerda a sus usuarios de la web que el
              uso de cookies podrá estar sujeto a su aceptación durante la
              instalación o actualización del navegador utilizado por éstos.
              Esta aceptación podrá ser revocada mediante las opciones de
              configuración de contenidos y privacidad disponibles en el mismo.
              INVOICE-UP S.L. recomienda a sus usuarios que consulten la ayuda
              de su navegador o acceda a las páginas web de ayuda de los
              principales navegadores: ● Firefox:
              https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web
              –rastrear-prefe rencias ● Chrome:
              https://support.google.com/chrome/answ
              r/95647co=GENIE.Platform%3DDesktop&hl=e s-419 ● Explorer:
              https://support.microsoft.com/es
              es/help/17442/windows-internet-explorer delete-manage-cookies ●
              Safari: https://support.apple.com/es-es/guide/safari/sfri11471/mac
              ● Opera: https://help.opera.com/en/latest/web-preferences/ ● Otros
              navegadores: consulte la documentación del navegador que tenga
              instalado. Si el usuario deseara más información sobre cómo
              revocar el consentimiento prestado o sobre el procedimiento para
              deshabilitar las cookies, así como realizar alguna pregunta sobre
              la Política de Cookies de la web, se puede poner en contacto con
              INVOICE-UP a través de la siguiente dirección INFO@INVOICE-UP.ES
              indicando en el asunto “Política de Cookies”.
            </p>
          </TextoLegalStyled>
        );
        break;
      case "politica-privacidad":
        title = "Política de Privacidad";
        content = (
          <TextoLegalStyled>
            <p>
              La privacidad es de gran importancia para Ninja TPV y queremos
              mantener una actitud abierta y transparente al tratar sus datos
              personales. Por lo tanto, disponemos de una política que establece
              cómo se tratan y protegen sus datos personales.
            </p>
            <h2>¿Quién es el responsable del tratamiento de sus datos?</h2>
            <p>
              INVOICE-UP S.L. CIF: B02813202 Domicilio social: CALLE INVOICE-UP,
              8 SEVILLA Correo electrónico de contacto: INFO@INVOICE-UP.ES
            </p>
            <h2>¿Con qué finalidad tratamos sus datos personales?</h2>
            <p>
              En INVOICE-UP S.L. tratamos la información que nos facilitan las
              personas interesadas con el fin de realizar la gestión
              administrativa, contable y fiscal de los servicios solicitados,
              así como enviar comunicaciones comerciales sobre nuestros
              productos y servicios, para cuyo consentimiento usted haya
              prestado.
            </p>
            <h2>¿Por cuánto tiempo conservaremos sus datos?</h2>
            <p>
              Los datos se conservarán mientras se mantenga la relación
              comercial, y en su caso, durante los años necesarios para cumplir
              con las obligaciones legales que resulte de aplicación.
            </p>
            <h2>¿Cuál es la legitimación para el tratamiento de sus datos?</h2>
            <p>
              Le indicamos la base legal para el tratamiento de sus datos: ●
              Ejecución de un contrato: Prestación de los servicios solicitados
              ● Consentimiento del interesado: Envío de comunicaciones
              comerciales.
            </p>
            <h2>¿Cuáles son sus derechos cuando nos facilita sus datos?</h2>
            <p>
              Cualquier persona tiene derecho a obtener confirmación sobre si en
              INVOICE-UP S.L. estamos tratando datos personales que les
              conciernan, o no. Las personas interesadas tienen derecho a
              acceder a sus datos personales, así como a solicitar la
              rectificación de los datos inexactos o, en su caso, solicitar su
              supresión cuando, entre otros motivos, los datos ya no sea
              necesarios para los fines que fueron recogidos. En determinadas
              circunstancias, los interesados podrán solicitar la limitación del
              tratamiento de sus datos, en cuyo caso únicamente los
              conservaremos para el ejercicio o la defensa de reclamaciones. En
              determinadas circunstancias y por motivos relacionados con su
              situación particular, los interesados podrán oponerse al
              tratamiento de sus datos. En este caso, INVOICE-UP S.L. dejará de
              tratar los datos, salvo por motivos legítimos imperiosos, o el
              ejercicio o la defensa de posibles reclamaciones. Podrá ejercitar
              materialmente sus derechos de la siguiente forma: dirigiéndose a
              la dirección de correo electrónico del responsable del tratamiento
              reseñado anteriormente adjuntando copia de su DNI o documento de
              identidad. Si ha otorgado su consentimiento para alguna finalidad
              concreta, tiene derecho a retirar el consentimiento otorgado en
              cualquier momento, sin que ello afecte a la licitud del
              tratamiento basado en el consentimiento previo a su retirada. En
              caso de que sienta vulnerados sus derechos en lo concerniente a la
              protección de sus datos personales, especialmente cuando no haya
              obtenido satisfacción en el ejercicio de sus derechos, puede
              presentar una reclamación ante la Autoridad de Control en materia
              de Protección de Datos competente a través de su sitio web:
              www.aepd.es.
            </p>
          </TextoLegalStyled>
        );
        break;
      default:
        return <Page404 />;
    }
  } else {
    return <Page404 />;
  }

  return (
    <div>
      <Header></Header>
      <HeroLegal title={title} />
      {content}
      <Footer></Footer>
    </div>
  );
};
