import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { useCurrentYear } from "@/hooks/useCurrentYear";

const CookiesPolicy = () => {
  const lastUpdatedDate = "22/06/2025"; // Fecha base
  // Este hook podría ser más complejo para obtener la fecha de un sistema o git.
  // Por ahora, lo dejamos así para el ejemplo.
  const [currentDate, setCurrentDate] = React.useState(lastUpdatedDate);

  React.useEffect(() => {
    // Simulamos una actualización dinámica
    const today = new Date();
    const formattedDate = `${today.getDate().toString().padStart(2, "0")}/${(
      today.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${today.getFullYear()}`;
    setCurrentDate(formattedDate);
    document.title = "Política de Cookies - Easywood";
  }, []);

  const cookieData = [
    {
      category: "Cookies Esenciales (Necesarias)",
      provider: "Easywood (propias)",
      purpose:
        "Estas cookies son indispensables para el funcionamiento básico del sitio web. No se pueden desactivar. Incluyen la gestión del consentimiento de cookies y el mantenimiento de la sesión.",
      cookies: [
        {
          name: "cookie-consent",
          duration: "1 año",
          description:
            "Almacena la decisión del usuario sobre el consentimiento de cookies (aceptado, rechazado o configurado).",
        },
        {
          name: "cookie-preferences",
          duration: "1 año",
          description:
            "Guarda las preferencias detalladas del usuario (analytics, marketing) si decide configurar sus opciones.",
        },
      ],
    },
    {
      category: "Cookies de Rendimiento y Análisis",
      provider: "Google Analytics (terceros)",
      purpose:
        "Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web. Recopilan información de forma anónima para generar informes estadísticos sobre el tráfico del sitio.",
      cookies: [
        {
          name: "_ga",
          duration: "2 años",
          description: "Se usa para distinguir a los usuarios.",
        },
        {
          name: "_gid",
          duration: "24 horas",
          description: "Se usa para distinguir a los usuarios.",
        },
        {
          name: "_gat",
          duration: "1 minuto",
          description: "Se usa para limitar el porcentaje de solicitudes.",
        },
      ],
    },
    {
      category: "Cookies de Marketing y Publicidad",
      provider: "Google Ads, Meta (Facebook/Instagram) (terceros)",
      purpose:
        "Se utilizan para rastrear a los visitantes en las páginas web. La intención es mostrar anuncios relevantes y atractivos para el usuario individual, y por lo tanto, más valiosos para los editores y terceros anunciantes.",
      cookies: [
        {
          name: "_gcl_au",
          duration: "3 meses",
          description:
            "Utilizada por Google AdSense para experimentar con la eficiencia publicitaria.",
        },
        {
          name: "IDE",
          duration: "1 año",
          description:
            "Utilizada por Google DoubleClick para registrar y reportar las acciones del usuario en el sitio web.",
        },
        {
          name: "_fbp",
          duration: "3 meses",
          description:
            "Utilizada por Facebook para entregar una serie de productos publicitarios.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-dvh">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-4 animate-fade-in">
            Política de Cookies
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Última actualización: <span id="last-updated">{currentDate}</span>
          </p>

          <div className="prose prose-lg max-w-none animate-slide-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              0. Información General
            </h2>
            <p className="text-muted-foreground mb-6">
              En cumplimiento con la Ley 34/2002 de Servicios de la Sociedad de
              la Información y el Comercio Electrónico (LSSI-CE) y el Reglamento
              General de Protección de Datos (RGPD), se facilita la siguiente
              información sobre el uso de cookies en este sitio web:
            </p>

            <p className="text-sm text-gray-500 mt-4 mb-6">
              <strong>Desarrollo web:</strong> Este sitio web ha sido
              desarrollado por{" "}
              <a
                href="https://www.404studios.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors duration-300 underline"
                aria-label="Visitar 404studios.digital - Desarrolladores web (se abre en ventana nueva)"
              >
                404studios.digital
              </a>
              , especialistas en desarrollo web para empresas del sector
              construcción.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              1. Responsable del Tratamiento y Protección de Datos
            </h2>
            <p className="text-muted-foreground mb-6">
              <strong>Denominación social:</strong> Easywood
              <br />
              <strong>CIF/NIF:</strong> B44627735
              <br />
              <strong>Número DUNS:</strong> 4716...
              <br />
              <strong>Actividad Informa:</strong> Servicios relativos a la
              propiedad inmobiliaria y a la propiedad industrial
              <br />
              <strong>CNAE 2009:</strong> 6831 - Agentes de la propiedad
              inmobiliaria
              <br />
              <strong>SIC:</strong> 6531 - Agencias inmobiliarias,
              administradores de fincas
              <br />
              <strong>Objeto Social:</strong> Promoción inmobiliaria
              <br />
              <strong>Registro Mercantil:</strong> Registro Mercantil de Madrid
              - 2 actos en BORME publicados
              <br />
              <strong>Actualización Ficha Empresa:</strong> 02/07/2025
              <br />
              <strong>Última Consulta Empresa:</strong> 29/04/2025
              <br />
              <strong>Total de Consultas:</strong> 35
              <br />
              <strong>Actividad:</strong> Reformas integrales y diseño de
              interiores
              <br />
              <strong>Domicilio:</strong> Madrid, España
              <br />
              <strong>Email:</strong> info@easywood.es
              <br />
              <br />
              El responsable del tratamiento de los datos personales recabados a
              través de las cookies es Easywood. Sus datos serán tratados
              conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica
              3/2018 (LOPDGDD). Puede ejercer sus derechos de acceso,
              rectificación, supresión, oposición, limitación y portabilidad
              enviando una solicitud a la dirección indicada, acompañando un
              documento para su identificación.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              2. ¿Qué son las cookies?
            </h2>
            <p className="text-muted-foreground mb-6">
              Las cookies son pequeños archivos de texto que los sitios web que
              visita guardan en su dispositivo. Son ampliamente utilizadas para
              que los sitios web funcionen, o funcionen de manera más eficiente,
              así como para proporcionar información a los propietarios del
              sitio.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              3. Tipos de Cookies que Utilizamos
            </h2>
            <p className="text-muted-foreground mb-6">
              A continuación, se detallan las cookies utilizadas en este sitio
              web, clasificadas por su finalidad y proveedor.
            </p>

            <div className="space-y-6">
              {cookieData.map((categoryData) => (
                <div
                  key={categoryData.category}
                  className="p-4 border rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {categoryData.category}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Proveedor:</strong> {categoryData.provider}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {categoryData.purpose}
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Cookie
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Duración
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Descripción
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {categoryData.cookies.map((cookie) => (
                          <tr key={cookie.name}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {cookie.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {cookie.duration}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              {cookie.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              Gestión de Cookies
            </h2>
            <p className="text-muted-foreground mb-6">
              Usted tiene el control total sobre las cookies. A través de
              nuestro banner de consentimiento, puede aceptar, rechazar o
              configurar sus preferencias en cualquier momento. Si desea cambiar
              su configuración después de haberla aceptado, puede hacerlo
              borrando las cookies de su navegador. La próxima vez que visite
              nuestro sitio, se le volverá a preguntar.
            </p>
            <p className="text-muted-foreground mb-6">
              Además, la mayoría de los navegadores web permiten cierto control
              de la mayoría de las cookies a través de la configuración del
              navegador. Para obtener más información sobre las cookies,
              incluido cómo ver qué cookies se han establecido, visite{" "}
              <a
                href="https://www.aboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.aboutcookies.org
              </a>{" "}
              o{" "}
              <a
                href="https://www.allaboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.allaboutcookies.org
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              Contacto
            </h2>
            <p className="text-muted-foreground mb-6">
              Si tiene alguna pregunta sobre nuestra política de cookies, puede
              contactarnos en:{" "}
              <a href="mailto:info@easywood.es">info@easywood.es</a>
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              Protección de Datos Personales
            </h2>
            <p className="text-muted-foreground mb-6">
              Le informamos que sus datos personales están incluidos en un
              tratamiento, cuyo responsable es Easywood. Los datos se recopilan
              con la finalidad de gestionar comercial y administrativamente la
              relación que, en su caso, nos une y de informarle sobre productos,
              servicios o eventos de nuestra empresa que pudieran ser de su
              interés, ya sea por medios tradicionales o electrónicos. La
              legitimidad del tratamiento de sus datos se basa en la ejecución
              de un contrato o en su consentimiento previo. Los destinatarios de
              los datos serán únicamente otras empresas del mismo grupo, en su
              caso, u otros terceros sobre los que recaiga algún tipo de
              obligación legal para su cesión. Los datos se conservarán durante
              el periodo en que exista una relación contractual y/o comercial
              establecida, o mientras no nos solicite su eliminación. Usted
              podrá ejercitar los derechos de acceso, rectificación, supresión,
              oposición, limitación del tratamiento y portabilidad de sus datos,
              remitiendo una solicitud por escrito a la dirección anteriormente
              indicada, acompañando un documento para su identificación.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              Uso de Google Analytics y Firebase
            </h2>
            <p className="text-muted-foreground mb-6">
              Utilizamos Google Analytics y otros servicios de analítica
              proporcionados por Firebase (Google LLC) para analizar el uso de
              la web y mejorar nuestros servicios. Google puede transferir datos
              fuera del Espacio Económico Europeo, aplicando las garantías
              legales adecuadas, como las cláusulas contractuales tipo aprobadas
              por la Comisión Europea. Además, hemos activado la anonimización
              de IP para minimizar el impacto sobre su privacidad. Puede
              consultar la política de privacidad de Google aquí:{" "}
              <a
                href="https://policies.google.com/privacy?hl=es"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy?hl=es
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
