let perguntas = [
{
	titulo: 'É possível votar em dois candidatos a presidência?',
	alternativas: ['Sim','Não','Talvez','Somente no municipio'],
	correta: 1
},
{
	titulo: 'Como descobrir se uma notícia é fake news?',
	alternativas: ['Passar adiante','Excluir','Postar no twitter','Buscar os sites de checagem'],
	correta: 3
},
{
	titulo: 'As urnas são inauditaveis?',
	alternativas: ['Sim, são como um cofre fechado','Somente o exercito pode olhar','Não, a urna passa por diversas auditorias','Sim, vivemos em uma ditadura.'],
	correta: 2
}
]

let app = {
start: function(){

	this.Atualpos = 0;
	this.Totalpontos = 0;

	let alts = document.querySelectorAll('.alternativa');
	alts.forEach((element,index)=>{
		element.addEventListener('click', ()=>{
			this.checaResposta(index);
		})
	})
	this.atualizaPontos();
	app.mostraquestao(perguntas[this.Atualpos]);
},

mostraquestao: function(q){
	this.qatual = q;
	// mostrando o titulo
	let titleDiv = document.getElementById('titulo');
	titleDiv.textContent = q.titulo;
	// mostrando as alternativas
	let alts = document.querySelectorAll('.alternativa');
	alts.forEach(function(element,index){
		element.textContent = q.alternativas[index];
	})

},

Proximaperg: function(){
	this.Atualpos++;
	if(this.Atualpos == perguntas.length){
		this.Atualpos = 0;
	}
},

checaResposta: function(user){
	if(this.qatual.correta == user){
		console.log("Correta")
		this.Totalpontos++;
		this.mostraresposta(true);
	}
	else{
		console.log("Errada")
		this.mostraresposta(false);
	}
	this.atualizaPontos();
	this.Proximaperg();
	this.mostraquestao(perguntas[this.Atualpos]);
},

atualizaPontos: function(){
    let scoreDiv = document.getElementById('pontos');
    scoreDiv.textContent = `Sua pontuacao: ${this.Totalpontos}`;
},

mostraresposta: function (correto) {
    let resultDiv = document.getElementById('result');
    let result = '';
    // formate a mensagem a ser exibida
    if (correto) {
      result = 'Resposta Correta!';
    }
    else {
      // obtenha a questão atual
      let pergunta = perguntas[this.Atualpos];
      // obtenha o índice da resposta correta da questão atual
      let cindice = pergunta.correta;
      // obtenha o texto da resposta correta da questão atual
      let ctexto = pergunta.alternativas[cindice];
      result = `Incorreto! Resposta Correta: ${ctexto}`;
    }
    resultDiv.textContent = result;
  }


}

app.start();


