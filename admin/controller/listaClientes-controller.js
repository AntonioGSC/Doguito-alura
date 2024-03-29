import { clienteService } from '../service/client-service.js';

const criaNovaLinha = (nome, email, id) => {
  const linhaNovoCliente = document.createElement('tr');
  const conteudo = `
          <td class="td" data-td>${nome}</td>
          <td>${email}</td>
          <td>
              <ul class="tabela__botoes-controle">
                  <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                  <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
              </ul>
          </td>`;
  linhaNovoCliente.innerHTML = conteudo;
  linhaNovoCliente.dataset.id = id;
  return linhaNovoCliente;
};

const tabela = document.querySelector('[data-tabela]');

tabela.addEventListener('click', async (event) => {
  const botaoDeletar =
    event.target.className === 'botao-simples botao-simples--excluir';
  if (botaoDeletar) {
    try {
      const linhaCliente = event.target.closest('[data-id]');
      const id = linhaCliente.dataset.id;
      await clienteService.deletaCliente(id);
      linhaCliente.remove();
    } catch (err) {
      window.location.href = '../telas/erro.html';
      console.log(err);
    }
  }
});

const render = async () => {
  try {
    const clienteServiceData = await clienteService.listaClientes();
    clienteServiceData.forEach((cliente) => {
      tabela.appendChild(
        criaNovaLinha(cliente.nome, cliente.email, cliente.id)
      );
    });
  } catch (err) {
    window.location.href = '../telas/erro.html';
    console.log(err);
  }
};

render();
