export type carditens = {
  card1: { title: string; description: string; badge: string; type: string };
  card2: { title: string; description: string; badge: string; type: string };
  card3: { title: string; description: string; badge: string; type: string };
};

export interface Props {
  cardItens: carditens;
}

export default function threeCards({
  cardItens = {
    card1: {
      title: "Investimentos",
      description: "Faça do seu dinheiro o seu aliado",
      badge: "NEW",
      type: "Produtos",
    },
    card2: {
      title: "Aportes",
      description: "A importância dos aportes mensais",
      badge: "NEW",
      type: "Produtos",
    },
    card3: {
      title: "CDB",
      description: "Quanto mais rentabilidade melhor o custo",
      badge: "NEW",
      type: "Produtos",
    },
  },
}: Props) {
  return (
    <div class="flex flex-col items-center justify-around md:flex-row m-20">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="/undraw.svg"
            alt="Shoes"
            height="100px"
            width="100px"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            {cardItens.card1.title}
            <div class="badge bg-green-500">{cardItens.card1.badge}</div>
          </h2>
          <p>{cardItens.card1.description}</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">{cardItens.card1.type}</div>
          </div>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="/graph.svg"
            alt="Shoes"
            height="290px"
            width="100px"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            {cardItens.card2.title}
            <div class="badge bg-green-400">{cardItens.card2.badge}</div>
          </h2>
          <p>{cardItens.card2.description}</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">{cardItens.card2.type}</div>
          </div>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="/drawer.svg"
            alt="Shoes"
            height="100px"
            width="100px"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            {cardItens.card3.title}
            <div class="badge bg-green-500">{cardItens.card3.badge}</div>
          </h2>
          <p>{cardItens.card3.description}</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">{cardItens.card3.type}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
