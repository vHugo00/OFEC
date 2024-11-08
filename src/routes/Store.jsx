import { Product } from "../components/Products/Product";

export default function Store() {
  return (
    <main className="w-full px-4 pb-12 pt-24 md:col-start-2 md:px-6 lg:px-8 lg:pt-8">
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Product
          purchaseLink="https://www.operarioferroviario.com.br/"
          image="../src/assets/images/M13PYF01A5.avif"
          product="Camisa Operário Ferroviário I 2024 Karilu - Masculina"
          price="R$ 189,90"
          coins="250"
        />
        <Product
          purchaseLink="https://www.operarioferroviario.com.br/"
          image="../src/assets/images/M13PYF01A5.avif"
          product="Camisa Operário Ferroviário I 2024 Karilu - Masculina"
          price="R$ 189,90"
          coins="250"
        />
        <Product
          purchaseLink="https://www.operarioferroviario.com.br/"
          image="../src/assets/images/M13PYF01A5.avif"
          product="Camisa Operário Ferroviário I 2024 Karilu - Masculina"
          price="R$ 189,90"
          coins="250"
        />
        <Product
          purchaseLink="https://www.operarioferroviario.com.br/"
          image="../src/assets/images/M13PYF01A5.avif"
          product="Camisa Operário Ferroviário I 2024 Karilu - Masculina"
          price="R$ 189,90"
          coins="250"
        />
      </section>
    </main>
  )
}