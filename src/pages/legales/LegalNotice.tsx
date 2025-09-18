import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const LegalNotice = () => {
  const [currentDate, setCurrentDate] = React.useState("22/06/2025");

  React.useEffect(() => {
    const today = new Date();
    const formattedDate = `${today.getDate().toString().padStart(2, "0")}/${(
      today.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${today.getFullYear()}`;
    setCurrentDate(formattedDate);
    document.title = "Aviso Legal - Easywood";
  }, []);

  return (
    <div className="min-h-dvh">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-4 animate-fade-in">
            Aviso Legal
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Última actualización:{" "}
            <span id="last-updated-legal">{currentDate}</span>
          </p>

          <div className="prose prose-lg max-w-none animate-slide-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              0. Información General
            </h2>
            <p className="text-muted-foreground mb-6">
              En cumplimiento con el deber de información dispuesto en la Ley
              34/2002 de Servicios de la Sociedad de la Información y el
              Comercio Electrónico (LSSI-CE), se facilitan a continuación los
              siguientes datos de información general de este sitio web:
            </p>

            <p className="text-sm text-gray-500 mt-4 mb-6">
              <strong>Desarrollo web:</strong> Este sitio web ha sido
              desarrollado por{" "}
              <a
                href="https://www.404studios.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors duration-300 underline font-medium"
                aria-label="Visitar 404studios.digital - Desarrolladores web (se abre en ventana nueva)"
              >
                404studios.digital
              </a>
              , especialistas en desarrollo web para empresas del sector
              construcción.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              1. Datos del Titular
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
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              2. Objeto
            </h2>
            <p className="text-muted-foreground mb-6">
              El presente aviso legal regula el uso del sitio web
              www.easywood.es, del que es titular Easywood. La navegación por
              este sitio web atribuye la condición de usuario del mismo y
              implica la aceptación plena y sin reservas de todas y cada una de
              las disposiciones incluidas en este Aviso Legal.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              3. Condiciones de Uso
            </h2>
            <p className="text-muted-foreground mb-6">
              El usuario se compromete a hacer un uso adecuado de los contenidos
              y servicios que Easywood ofrece a través de su sitio web y con
              carácter enunciativo pero no limitativo, a no emplearlos para:
            </p>
            <ul className="text-muted-foreground mb-6 list-disc ml-6">
              <li className="mb-2">
                Incurrir en actividades ilícitas, ilegales o contrarias a la
                buena fe y al orden público.
              </li>
              <li className="mb-2">
                Difundir contenidos o propaganda de carácter racista, xenófobo,
                pornográfico-ilegal, de apología del terrorismo o atentatorio
                contra los derechos humanos.
              </li>
              <li className="mb-2">
                Provocar daños en los sistemas físicos y lógicos de Easywood, de
                sus proveedores o de terceras personas.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              4. Responsabilidad
            </h2>
            <p className="text-muted-foreground mb-6">
              Easywood no se hace responsable de la información y contenidos
              almacenados, a título enunciativo pero no limitativo, en foros,
              chats, generadores de blogs, comentarios, redes sociales o
              cualquier otro medio que permita a terceros publicar contenidos de
              forma independiente en la página web del prestador.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              5. Propiedad Intelectual
            </h2>
            <p className="text-muted-foreground mb-6">
              Easywood es titular de todos los derechos de propiedad intelectual
              e industrial de su página web, así como de los elementos
              contenidos en la misma. Quedan expresamente prohibidas la
              reproducción, la distribución y la comunicación pública, incluida
              su modalidad de puesta a disposición, de la totalidad o parte de
              los contenidos de esta página web, con fines comerciales, en
              cualquier soporte y por cualquier medio técnico, sin la
              autorización de Easywood.
            </p>
            <p className="text-sm text-gray-500 mt-4 mb-6">
              <strong>Créditos técnicos:</strong> La implementación técnica y
              desarrollo web de este sitio ha sido realizada por{" "}
              <a
                href="https://www.404studios.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors duration-300 underline font-medium"
                aria-label="Visitar 404studios.digital - Desarrolladores web (se abre en ventana nueva)"
              >
                404studios.digital
              </a>
              , expertos en soluciones digitales para empresas del sector
              construcción.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              6. Protección de Datos Personales
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
