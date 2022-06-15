<template>
  <div class="info bgGrey d-flex">
    <div class="col-10 p-3">
      <img
        src="../assets/tester.png"
        alt="AutMe logo"
        height="100px"
        class="mb-4"
      />

      <div class="row">
        <section class="col-3 pb-5">
          <button
            v-on:click="setSelected('autism')"
            :class="{
              btn: true,
              fontAsap: true,
              'my-2': true,
              selectedBtn: selected == 'autism',
            }"
          >
            O que é o autismo?
          </button>
          <button
            v-on:click="setSelected('symptoms')"
            :class="{
              btn: true,
              fontAsap: true,
              'my-2': true,
              selectedBtn: selected == 'symptoms',
            }"
          >
            Sintomas
          </button>
          <button
            v-on:click="setSelected('cause')"
            :class="{
              btn: true,
              fontAsap: true,
              'my-2': true,
              selectedBtn: selected == 'cause',
            }"
          >
            O que causa o autismo?
          </button>
          <button
            v-on:click="setSelected('treatment')"
            :class="{
              btn: true,
              fontAsap: true,
              'my-2': true,
              selectedBtn: selected == 'treatment',
            }"
          >
            Como é feito o tratamento?
          </button>
          <button
            v-on:click="setSelected('levels')"
            :class="{
              btn: true,
              fontAsap: true,
              'my-2': true,
              selectedBtn: selected == 'levels',
            }"
          >
            Níveis de autismo
          </button>
        </section>

        <article class="col-8 mx-4">
          <div v-if="selected == 'autism'">
            <h2 class="fontAsap colorBlue">O que é o autismo?</h2>
            <p class="fontBarlow">
              O autismo, cientificamente conhecido como Transtorno do Espectro
              Autista, é um transtorno no desenvolvimento neurológico da criança
              que gera alterações na comunicação, dificuldade ou ausência de
              interação social e mudanças no comportamento, sendo geralmente
              identificado entre os 12 e 24 meses de idade.
            </p>
          </div>
          <div v-if="selected == 'symptoms'">
            <h2 class="fontAsap colorBlue">Sintomas</h2>
            <ul class="fontBarlow">
              <li>
                Dificuldade na interação social, mantendo pouco contato visual,
                expressão facial ou gestos, ter dificuldade em fazer amigos, e
                em expressar ideias e emoções;
              </li>
              <li>
                Prejuizo na comunicação, como ter dificuldade em iniciar ou
                manter uma conversa, compreender o ponto de vista de outras
                pessoas, entender figuras de linguagem, humor ou sarcasmo,
                manter um tom de voz monótona (parecendo um robô), ou deixarde
                responder ou demorar a responder quando chamado:
              </li>
              <li>
                Alterações comportamentais, como não saber brincar de faz de
                conta, ficar aborrecido com pequenas mudanças nos hábitos ou ter
                muito interesse por algo muito especifico, como a asa de um
                avião ou números;
              </li>
              <li>
                Comportamentos repetitivos, como ficar muito tempo sentado
                balançando o corpo para frente e para trás e repetir várias
                vezes algumas palavras ou frases.
              </li>
            </ul>
          </div>
          <div v-if="selected == 'cause'">
            <h2 class="fontAsap colorBlue">O que causa o autismo?</h2>
            <p class="fontBarlow">
              As causas do autismo ainda não são totalmente conhecidas, no
              entanto, estudos mais atuais sugerem que os fatores genéticos,
              hereditários e ambientais são os principais relacionados com o
              desenvolvimento do transtorno. Algumas das possíveis causas do
              autismo incluem:
            </p>
            <ul class="fontBarlow">
              <li>
                Causa hereditária: pessoas com irmãos com a síndrome apresentam
                um maior risco de desenvolver autismo;
              </li>
              <li>
                Doenças genéticas: ter algumas doenças genéticas, como síndrome
                de Down, síndrome do X frágil, síndrome de Rett e esclerose
                tuberosa, podem aumentar as chances de desenvolver autismo;
              </li>
              <li>
                Fatores ambientais: como gravidez de alto risco, pais com idade
                avançada, parto induzido, consumo de bebidas alcoólicas, tabaco,
                medicamentos ou outras drogas durante a gestação, ou baixo peso
                ao nascer.
              </li>
            </ul>
          </div>
          <div v-if="selected == 'treatment'">
            <h2 class="fontAsap colorBlue">Como é feito o tratamento?</h2>
            <p class="fontBarlow">
              Apesar do autismo não ter cura, o tratamento, quando realizado
              corretamente, pode ajudar a melhorar a qualidade de vida, a
              capacidade de comunicação e a autonomia da pessoa.
            </p>
            <p class="fontBarlow">
              O tratamento do autismo deve ser feito somente com acompanhamento
              de um médico e varia de acordo com as necessidades individuais,
              podendo incluir:
            </p>
            <ul class="fontBarlow">
              <li>
                Uso de medicamentos e suplementos, como risperidona,
                aripiprazol, melatonina, probióticos e ômega 3;
              </li>
              <li>
                Sessões de fonoaudiologia, para melhorar a fala e a comunicação;
              </li>
              <li>
                Terapia comportamental, para facilitar as atividades diárias;
              </li>
              <li>Terapia de grupo, para melhorar a socialização.</li>
            </ul>
          </div>
          <div v-if="selected == 'levels'">
            <h2 class="fontAsap colorBlue">Níveis de autismo</h2>
            <ul class="fontBarlow">
              <li>
                Alta funcionalidade: podem não impedir de estudar, trabalhar e
                se relacionar;
              </li>
              <li>
                Média funcionalidade: necessita de algum auxílio para
                desempenhar funções quotidianas;
              </li>
              <li>
                Baixa funcionalidade: dificuldades graves e costuma precisar de
                apoio especializado ao longo da vida. Curiosidade: Os primeiros
                sinais do Transtorno do Espectro Autista são visíveis em bebês,
                entre 1 e 2 anos de vida, embora possam ser detetados antes ou
                depois disso.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
    <div class="col-1 my-3">
      <img src="../assets/Ativo_4.svg" alt="boneco 1" height="300px" />
      <img
        src="../assets/Ativo_3.svg"
        alt="boneco 2"
        height="300px"
        class="my-5"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoAutism",
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    setSelected(text) {
      this.selected = text;
    },
  },
};
</script>

<style scoped>
.info {
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}

section {
  border-right: 1px solid var(--black);
}

section button {
  font-size: 28px;
  text-align: start;
}

section .selectedBtn {
  background: var(--blue);
  color: var(--white);
}

article h2 {
  font-size: 32px;
  margin-bottom: 2rem;
}

article p,
li {
  font-size: 24px;
}

article ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li::before {
  content: "➜";
  padding-right: 8px;
  color: var(--darkBlue);
}

#boy {
  position: absolute;
  top: 10px;
  right: -70px;
  transform: rotate(-24.08deg);
}
</style>
