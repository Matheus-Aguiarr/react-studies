import Height from "./components/height";
import { useState } from "react";
import "./App.css";

function App() {
  const [fatherHeight, setFatherHeight] = useState("");
  const [motherHeight, setMotherHeight] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  return (
    <div className="font-poppins flex flex-col items-center w-[500px] mt-20 bg-gray-400 rounded-lg m-auto p-8">
      <h1 className="text-3xl font-bold">Calculador de altura</h1>
      <p className="text-2xl">Altura do Pai</p>
      <Height
        value={fatherHeight}
        onChange={(e) => setFatherHeight(e.target.value)}
        required
      />
      <p className="text-2xl">Altura da mãe </p>
      <Height
        value={motherHeight}
        onChange={(e) => setMotherHeight(e.target.value)}
        required
      />
      <p className="text-2xl"> Gênero do Bebê</p>
      <div className="flex flex-row gap-4">
        <button
          className="bg-pink-200 rounded-lg h-8 p-6 flex items-center justify-center cursor-pointer mb-5"
          onClick={() => {
            const resultGirl =
              (Number(fatherHeight) + Number(motherHeight)) / 2 - 6.5;
            if (motherHeight === "" || fatherHeight === "") {
              setResultMessage("Por favor, preencha os campos de altura");
            } else if (resultGirl < 54.6) {
              setResultMessage(
                `Parabéns, com incríveis ${resultGirl.toFixed(
                  1
                )}cm de altura, sua filha ultrapassa o record de Chandra Bahadur Dangi, e se torna a mulher mais baixa do mundo!`
              );
            } else {
              setResultMessage(
                `A sua filha terá uma altura estimada de ${resultGirl.toFixed(
                  1
                )}cm de altura`
              );
            }
          }}
        >
          Feminino
        </button>
        <button
          className="bg-blue-200 rounded-lg h-8 p-6 flex items-center justify-center cursor-pointer mb-5"
          onClick={() => {
            const resultBoy =
              (Number(fatherHeight) + Number(motherHeight)) / 2 + 6.5;
            if (motherHeight === "" || fatherHeight === "") {
              setResultMessage("Por favor, preencha os campos de altura");
            } else if (resultBoy < 54.6) {
              setResultMessage(
                `Parabéns, com incríveis ${resultBoy.toFixed(
                  1
                )}cm de altura, seu filho ultrapassa o record de Chandra Bahadur Dangi, e se torna o homem mais baixo do mundo!`
              );
            } else {
              setResultMessage(
                `O seu filho terá uma altura estimada de ${resultBoy.toFixed(
                  1
                )}cm de altura`
              );
            }
          }}
        >
          Masculino
        </button>
      </div>
      <div>{resultMessage && <p>{resultMessage}</p>}</div>
    </div>
  );
}

export default App;
