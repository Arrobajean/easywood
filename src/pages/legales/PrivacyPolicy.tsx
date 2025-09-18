import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  const [currentDate, setCurrentDate] = React.useState("22/06/2025");

  React.useEffect(() => {
    const today = new Date();
    const formattedDate = `${today.getDate().toString().padStart(2, "0")}/${(
      today.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${today.getFullYear()}`;
    setCurrentDate(formattedDate);
    document.title = "Política de Privacidad - Easywood";
  }, []);

  return (
    <div className="min-h-dvh">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-4 animate-fade-in">
            Política de Privacidad
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Última actualización:{" "}
            <span id="last-updated-privacy">{currentDate}</span>
          </p>

          <div className="prose prose-lg max-w-none animate-slide-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              0. Información General
            </h2>
            <p className="text-muted-foreground mb-6">
              En cumplimiento con lo dispuesto en el Reglamento General de
              Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección
              de Datos Personales y garantía de los derechos digitales
              (LOPDGDD), se facilita la siguiente información sobre el
              tratamiento de datos personales:
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
              1. Responsable del Tratamiento
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
              El responsable del tratamiento de sus datos personales es
              Easywood. Sus datos serán tratados conforme al Reglamento (UE)
              2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              2. Finalidad del Tratamiento
            </h2>
            <p className="text-muted-foreground mb-6">
              Sus datos se recopilan con la finalidad de gestionar comercial y
              administrativamente la relación que, en su caso, nos une y de
              informarle sobre productos, servicios o eventos de nuestra empresa
              que pudieran ser de su interés, ya sea por medios tradicionales o
              electrónicos.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              3. Base Legal
            </h2>
            <p className="text-muted-foreground mb-6">
              La legitimidad del tratamiento de sus datos se basa en la
              ejecución de un contrato o en su consentimiento previo.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              4. Destinatarios
            </h2>
            <p className="text-muted-foreground mb-6">
              Los destinatarios de los datos serán únicamente otras empresas del
              mismo grupo, en su caso, u otros terceros sobre los que recaiga
              algún tipo de obligación legal para su cesión.
              <br />
              Asimismo, utilizamos servicios de analítica web proporcionados por
              Google Analytics y Firebase (Google LLC), que pueden transferir
              datos fuera del Espacio Económico Europeo bajo las garantías
              legales adecuadas, como las cláusulas contractuales tipo. Hemos
              activado la anonimización de IP para proteger su privacidad. Más
              información en la política de privacidad de Google:{" "}
              <a
                href="https://policies.google.com/privacy?hl=es"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy?hl=es
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              5. Conservación de Datos
            </h2>
            <p className="text-muted-foreground mb-6">
              Los datos se conservarán durante el periodo en que exista una
              relación contractual y/o comercial establecida, o mientras no nos
              solicite su eliminación.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              6. Derechos del Usuario
            </h2>
            <p className="text-muted-foreground mb-6">
              Usted podrá ejercitar los derechos de acceso, rectificación,
              supresión, oposición, limitación del tratamiento y portabilidad de
              sus datos, remitiendo una solicitud por escrito a la dirección
              anteriormente indicada, acompañando un documento para su
              identificación.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
