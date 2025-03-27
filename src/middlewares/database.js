import fs from 'node:fs/promises';

const dataBasePath = new URL('../../db.json', import.meta.url);
console.log(dataBasePath);
export class DataBase {
  #database = {}

  constructor() {
    fs.readFile(dataBasePath, 'utf-8').then(data => {
      this.#database = JSON.parse(data);
    })
    .catch(() => {
      this.#persist();
    })
  }
  // Escreve em arquivos as informações.
  #persist() {
    fs.writeFile('db.json', JSON.stringify(this.#database)); // Escreve um arquivo na root por padrão.
  }

  select(table) {

    const data = this.#database[table] ?? [];

    return data;

  }
  insert(table, data) {
    // Verifica se existe um Array dentro do objeto.
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)

    // Caso não tenha ele insere o elemento dentro da tabela.
    } else {
      this.#database[table] = [data];
    }

    this.#persist(); // Após toda inserção de dados é chamado.

    return data;
  }
}