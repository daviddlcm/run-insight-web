import React from "react";

function Privacidad() {
  return (
    <div className="bg-white text-[#333] font-sans leading-relaxed p-5 min-h-screen">
      <header className="text-center bg-[#004a7c] text-white py-4">
        <h1 className="text-3xl font-bold">Aviso de Privacidad</h1>
      </header>

      <main className="max-w-3xl mx-auto my-8 bg-white p-6 rounded-lg shadow-md">
        <section className="mb-8">
          <h2 className="text-2xl text-[#004a7c] font-bold mb-2">¿Quiénes somos?</h2>
          <p>
            RunInsight, con domicilio en AV Orquídeas entre Pomarrosa y Sauce,
            Colonia Potinaspak, Tuxtla Gutiérrez, Chiapas, 29018, es el responsable
            del uso y protección de sus datos personales, y al respecto le informamos
            lo siguiente:
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-[#004a7c] font-bold mb-2">
            ¿Para qué fines utilizaremos sus datos personales?
          </h2>
          <p>
            Los datos personales que recabamos de usted los utilizaremos para las
            siguientes finalidades que son necesarias para el servicio que solicita:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Identificar al usuario para permitir el acceso seguro a la aplicación y sus
              funcionalidades, incluyendo la autenticación de dos pasos para su seguridad.
            </li>
            <li>
              Personalizar la experiencia dentro de la aplicación, ofreciendo
              recomendaciones de eventos y servicios comunitarios según su ubicación.
            </li>
            <li>
              Editar o eliminar su perfil según las solicitudes del usuario.
            </li>
            <li>
              Notificarle sobre actualizaciones importantes, eventos y reportes en su
              área, entre otros.
            </li>
          </ul>
          <p>
            De manera adicional, utilizaremos su información personal para las
            siguientes finalidades que no son necesarias para el servicio solicitado,
            pero que nos permiten brindarle una mejor atención:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Ofrecerle eventos especiales como ferias, talleres y actividades recreativas
              comunitarias en su colonia o comunidad.
            </li>
            <li>
              Realizar análisis y estadísticas de uso que nos ayuden a mejorar nuestros
              servicios.
            </li>
          </ul>
          <p>
            En caso de que no desee que sus datos personales sean tratados para estos
            fines adicionales, puede comunicárnoslo enviando un correo electrónico a{" "}
            <a href="mailto:Runlnsight@gmail.com" className="text-[#004a7c] underline">
              Runlnsight@gmail.com
            </a>.
          </p>
          <p>
            Usted puede solicitar la eliminación de sus datos personales en cualquier
            momento mediante un correo a{" "}
            <a href="mailto:Runlnsight@gmail.com" className="text-[#004a7c] underline">
              Runlnsight@gmail.com
            </a>, indicando su solicitud de eliminación de cuenta y datos personales.
          </p>
          <p>
            La negativa para el uso de sus datos personales para estas finalidades no
            será un motivo para negarle los servicios y productos que solicita o contrata
            con nosotros.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-[#004a7c] font-bold mb-2">
            ¿Dónde puedo consultar el aviso de privacidad integral?
          </h2>
          <p>
            Para conocer mayor información sobre los términos y condiciones bajo los
            cuales serán tratados sus datos personales, incluyendo los terceros con
            quienes compartimos su información y la forma en que podrá ejercer sus
            derechos ARCO (Acceso, Rectificación, Cancelación y Oposición), puede
            consultar el aviso de privacidad integral en:
          </p>
          <p>
            <a
              href="http://Runlnsight.integrador.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#004a7c] underline"
            >
              http://Runlnsight.integrador.xyz/
            </a>
          </p>
        </section>
      </main>

      <footer className="text-center bg-[#004a7c] text-white py-4">
        <p>© 2025 RunInsight. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Privacidad;
