export default function CenteredMessage() {
  return (
    <div className="flex min-h-screen">
      {/* Menu lateral */}
      <div className="w-1/5 p-4 flex flex-col items-center">
        <h1 className="text-2xl font-bold">Interno Rotas 2.0</h1>
        <ul className="text-center">
            <li className="flex items-center justify-center h-1/3">Linha 1</li>
            <li className="flex items-center justify-center h-1/3">Linha 2</li>
            <li className="flex items-center justify-center h-1/3">Linha 3</li>
        </ul>
      </div>

      {/* Mapa */}
      <div className="w-4/5 h-screen">
        <iframe
          title="Mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15015.496548982146!2d-43.94723765!3d-19.92083015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e5d4ec1b1f%3A0x7f8b8b8b8b8b8b8b!2sBelo%20Horizonte%2C%20MG%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1611816753437!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
