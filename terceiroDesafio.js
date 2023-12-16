class Heroi{
      constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
      }


      atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'realizou um ataque';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi('Carlos', 30, 'guerreiro');
const heroi2 = new Heroi('Vinicius', 1000, 'mago');
const heroi3 = new Heroi('Bizinotto', 32, 'monge');
const heroi4 = new Heroi('Prates', 25, 'ninja');

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();