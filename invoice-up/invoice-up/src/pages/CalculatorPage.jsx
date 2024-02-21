import { Hero } from "../components/layout/hero/Hero";
import image from "../assets/calculator.png";
import { DiagonalSparator } from "../components/atoms/DiagonalSeparator";
import { Heading } from "../components/molecules/Heading";

export const CalculatorPage = () => {
  return (
    <div>
      <Hero
        title="Calculadora de los Autónomos"
        subtitle="Calcula tu IVA, IRPF y beneficio neto en segundos."
        image={image}
        action="Calcular ahora"
      />
      <DiagonalSparator />
      <Heading
        title="Toma el control de tus finanzas como autónomo."
        subtitle="Si eres autónomo y quieres tener las cuetas claras, ahora puedes
        aprovechar las ventajas de nuestra calculadora para autónomos. Con ella
        podrás saber facilmente cuánto vas a ganar y cuanto tendrás que pagar o
        exigir de IVA e IRPF."
      />
    </div>
  );
};
