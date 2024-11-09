import { useState } from "react";
import { FaGhost } from "react-icons/fa"; // Para o ícone de fantasma

const FloatingGhostButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle para abrir ou fechar a caixa de dúvidas frequentes
  const toggleFAQ = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      {/* Botão flutuante */}
      <button
        onClick={toggleFAQ}
        className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
      >
        <FaGhost size={30} />
      </button>

      {/* Caixa de dúvidas frequentes */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mt-4 w-80 animate-slide-in">
          <h3 className="text-lg font-semibold text-amber-600 mb-2">Dúvidas Frequentes</h3>
          <ul className="space-y-2">
            <li>
              <strong>Como comprar ingressos?</strong>
              <p className="text-gray-700 text-sm">
                Você pode comprar ingressos pelo nosso site ou na bilheteria do estádio.
              </p>
            </li>
            <li>
              <strong>Qual o horário de funcionamento da loja fisica?</strong>
              <p className="text-gray-700 text-sm">
                Nossa loja funciona de segunda a sexta, das 9h às 18h.
              </p>
            </li>
            <li>
              <strong>Como posso ser um sócio torcedor?</strong>
              <p className="text-gray-700 text-sm">
                Para se tornar sócio, acesse a página de Sócio Torcedor e siga as instruções.
              </p>
            </li>
            <li>
              <strong>Quem foi Germano Krüger?</strong>
              <p className="text-gray-700 text-sm">
                Germano Krüger foi um empresário e grande incentivador do futebol em Ponta Grossa, no Paraná. Ele era um...
              </p>
              <p className="text-amber-600 text-sm">• Saiba mais</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FloatingGhostButton;
