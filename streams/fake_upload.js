import { Readable } from 'node:stream';

class OneToHundredStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 5) {
        this.push(null);
      } else {
  
        const buff = Buffer.from(String(i));
        this.push(buff);
  
      }
    }, 1000)
  }
}
// Metodos utilizados POST ou PUT - Envio de dados.
fetch('http://localhost:3130', {
  method: 'POST',
  body: new OneToHundredStream(),
  duplex: 'half'
}).then(response => {
  return response.text()
}).then(data => {
  console.log(data);
})