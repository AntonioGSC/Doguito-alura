const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`).then((res) => {
    return res.json();
  });
};

const criaCliente = (nome, email) => {
  return fetch(`http://localhost:3000/profile`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      nome,
      email,
    }),
  }).then((res) => {
    return res.body;
  });
};

const deletaCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'DELETE',
  });
};

export const clienteService = {
  listaClientes,
  criaCliente,
  deletaCliente,
};

// const promise = new Promise((resolve, reject) => {
//   const http = new XMLHttpRequest();

//   http.open('GET', 'http://localhost:3000/profile');

//   http.onload = () => {
//     if (http.status >= 400) {
//       reject(JSON.parse(http.response));
//     } else {
//       resolve(JSON.parse(http.response));
//     }
//   };

//   http.send();
// });
// return promise;
