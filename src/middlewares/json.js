export async function json(req, res) {
  const buffers = [];
  for await (const chunk of req ) {

    buffers.push(chunk)

  }
  // Ler o body e caso não tenha conteudo retorne nulo.
  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null;
  }

  res.setHeader('Content-type', 'application/json');
}