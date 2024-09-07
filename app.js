function pesquisar() {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Verifica se o campo de pesquisa está vazio
  if (campoPesquisa === "") {
      section.innerHTML = "<p>Nada foi encontrado</p>";
      return;
  }

  // Converte o valor do campo de pesquisa para minúsculas para comparação case-insensitive
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";

  // Itera sobre cada dado da pesquisa
  for (let dado of dados) {
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
      let tags = dado.tags.toLowerCase();

      // Verifica se o título, descrição ou tags incluem o termo pesquisado
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          // Constrói o HTML para cada item da pesquisa
          resultados += `
          <div class="item-resultado">
              <h2>
                  <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">Mais informações</a>
          </div>
          `;
      }
  }

  // Se nenhum resultado foi encontrado, exibe uma mensagem de "Nada foi encontrado"
  if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>";
  }

  // Atribui o HTML gerado (ou a mensagem) para a seção de resultados
  section.innerHTML = resultados;
}
