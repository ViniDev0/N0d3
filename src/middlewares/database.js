

export class DataBase {
  database = {}
  select(table) {
    const data = this.database[table] ?? [];

    return data;
  }
  insert(table, data) {
    // Verifica se existe um Array dentro do objeto.
    if (Array.isArray(this.database[table])) {
      this.database[table].push(data)

    // Caso não tenha ele insere o elemento dentro da tabela.
    } else {
      this.database[table] = [data];
    }

    return data;
  }
}