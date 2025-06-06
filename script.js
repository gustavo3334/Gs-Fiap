 const perguntas = [
      { pergunta: 'O que é uma enchente?', correta: 0, opcoes: ['Acúmulo de água', 'Deslizamento', 'Tempestade'] },
      { pergunta: 'Uma causa comum das enchentes é:', correta: 1, opcoes: ['Seca', 'Lixo nas ruas', 'Ventos fortes'] },
      { pergunta: 'As enchentes afetam:', correta: 2, opcoes: ['Somente animais', 'Apenas cidades pequenas', 'Toda a população'] },
      { pergunta: 'Uma solução para enchentes é:', correta: 0, opcoes: ['Drenagem urbana', 'Corte de árvores', 'Mais asfalto'] },
      { pergunta: 'O lixo nas ruas causa:', correta: 1, opcoes: ['Seca', 'Entupimento de bueiros', 'Vulcões'] },
      { pergunta: 'A impermeabilização do solo:', correta: 2, opcoes: ['Ajuda o solo', 'Não tem efeito', 'Aumenta a chance de enchentes'] },
      { pergunta: 'As enchentes podem causar:', correta: 1, opcoes: ['Seca', 'Doenças e prejuízos', 'Ganho econômico'] },
      { pergunta: 'Construir em áreas de risco:', correta: 0, opcoes: ['É perigoso', 'Evita enchentes', 'É sempre seguro'] },
      { pergunta: 'Campanhas educativas ajudam:', correta: 1, opcoes: ['Aumentar enchentes', 'A conscientizar a população', 'Nada'] },
      { pergunta: 'Enchentes são:', correta: 2, opcoes: ['Naturais', 'Sempre causadas por humanos', 'Preveníveis com ação'] },
    ];

    perguntas.forEach((q, i) => {
      const div = document.createElement('div');
      div.innerHTML = `<p>${q.pergunta}</p>` + q.opcoes.map((op, j) => `
        <label><input type="radio" name="q${i}" value="${j}"> ${op}</label><br>`).join('');
      document.getElementById('perguntas').appendChild(div);
    });

    function mostrarResultado() {
      let score = 0;
      perguntas.forEach((q, i) => {
        const resposta = document.querySelector(`input[name='q${i}']:checked`);
        if (resposta && parseInt(resposta.value) === q.correta) score++;
      });
      document.getElementById('resultado').innerText = `Você acertou ${score} de 10 perguntas.`;
    }

    function validarFormulario() {
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      if (!nome || !email) {
        alert('Preencha todos os campos obrigatórios.');
        return false;
      }
      alert('Formulário enviado com sucesso!');
      return true;
    }

    function toggleMenu() {
      const menu = document.getElementById('menu');
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    }

    let slideIndex = 0;
    const slides = document.getElementsByClassName('slide');
    function showSlides() {
      for (let i = 0; i < slides.length; i++) slides[i].style.display = 'none';
      slideIndex++;
      if (slideIndex > slides.length) slideIndex = 1;
      slides[slideIndex - 1].style.display = 'block';
      setTimeout(showSlides, 3000);
    }
    showSlides();

    function mudarFundo(cor) {
      document.body.style.backgroundColor = cor;
    }