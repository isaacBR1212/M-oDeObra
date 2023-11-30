document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formBusca');
    const resultadosSection = document.getElementById('resultados');

    const dadosProfissionais = [
        {"nome":"Lucas Oliveira","telefone":"(16) 91234-5678","endereco":"Rua das Engenharias,123","especialidade":"Engenheiro Civil","experiencia":"Mais de 10 anos de experiência em projetos residenciais e comerciais. Especializado em estruturas de concreto.","formacao":"Bacharel em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Amanda Silva","telefone":"(16) 92345-6789","endereco":"Avenida da Inovação,456","especialidade":"Engenheira Elétrica","experiencia":"Especialista em sistemas elétricos de potência. Trabalhou em projetos de infraestrutura elétrica para grandes empresas.","formacao":"Mestre em Engenharia Elétrica pela Universidade Fictícia"},
        {"nome":"Rafael Santos","telefone":"(16) 93456-7890","endereco":"Praça da Tecnologia,789","especialidade":"Engenheiro de Software","experiencia":"Desenvolvedor experiente em projetos de software. Especializado em arquitetura de sistemas distribuídos.","formacao":"Doutor em Ciência da Computação pela Universidade Fictícia"},
        {"nome":"Carla Lima","telefone":"(16) 94567-8901","endereco":"Alameda da Invenção,101","especialidade":"Engenheira Mecânica","experiencia":"Projetista de máquinas e equipamentos. Trabalhou em empresas automotivas e de manufatura.","formacao":"Bacharel em Engenharia Mecânica pela Universidade Fictícia"},
        {"nome":"Fernanda Oliveira","telefone":"(16) 95678-2345","endereco":"Rua das Invenções,789","especialidade":"Engenheiro Civil","experiencia":"Especialista em projetos estruturais. Trabalha com análise e dimensionamento de estruturas de concreto e aço.","formacao":"Bacharel em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Gustavo Martins","telefone":"(16) 96789-3456","endereco":"Avenida da Tecnologia,012","especialidade":"Engenheiro Civil","experiencia":"Coordenador de obras. Experiência em gerenciamento de projetos de construção civil.","formacao":"Mestre em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Juliana Almeida","telefone":"(16) 97890-4567","endereco":"Praça da Inovação,345","especialidade":"Engenheiro Civil","experiencia":"Especialista em projetos de saneamento básico. Atuou em obras de infraestrutura urbana.","formacao":"Doutora em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Roberto Santos","telefone":"(16) 98901-5678","endereco":"Alameda da Tecnologia,678","especialidade":"Engenheiro Civil","experiencia":"Engenheiro consultor em geotecnia. Projetos de fundações e estabilidade de taludes.","formacao":"Bacharel em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Larissa Oliveira","telefone":"(16) 90012-3456","endereco":"Rua da Inovação,123","especialidade":"Engenheiro Civil","experiencia":"Engenheira de orçamentos. Especializada em análise de custos e planejamento financeiro de obras.","formacao":"Bacharel em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Pedro Rocha","telefone":"(16) 91123-4567","endereco":"Avenida das Tecnologias,456","especialidade":"Engenheiro Civil","experiencia":"Gerente de obras residenciais. Coordenou projetos habitacionais de grande porte.","formacao":"Mestre em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Carlos Silva","telefone":"(16) 98888-8888","endereco":"Rua das Obras,456","especialidade":"Engenheiro Civil","experiencia":"Especialista em projetos de construção civil. Trabalhou em diversos empreendimentos residenciais e comerciais.","formacao":"Bacharel em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"João Silva","telefone":"(16) 98765-4321","endereco":"Avenida das Obras,456","especialidade":"Engenheiro Civil","experiencia":"Atua há 8 anos em projetos de construção civil. Especializado em obras residenciais e comerciais.","formacao":"Bacharel em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Maria Oliveira","telefone":"(16) 87654-3210","endereco":"Rua das Construções,789","especialidade":"Engenheiro Civil","experiencia":"Especialista em gerenciamento de obras. Participou de grandes projetos de infraestrutura.","formacao":"Mestre em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Carlos Santos","telefone":"(16) 76543-2109","endereco":"Praça da Arquitetura,123","especialidade":"Engenheiro Civil","experiencia":"Mais de 12 anos de experiência em projetos de edificações. Focado em sustentabilidade e eficiência energética.","formacao":"Doutor em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Fernanda Costa","telefone":"(16) 65432-1098","endereco":"Alameda das Estruturas,567","especialidade":"Engenheiro Civil","experiencia":"Trabalhou em projetos de pontes e viadutos. Especializada em estruturas de concreto armado.","formacao":"Bacharel em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Fernanda Oliveira","telefone":"(16) 97777-7777","endereco":"Avenida das Estruturas,789","especialidade":"Engenheiro Civil","experiencia":"Mais de 8 anos de experiência em gerenciamento de obras. Especializada em estruturas metálicas.","formacao":"Mestre em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"José Santos","telefone":"(16) 96666-6666","endereco":"Praça da Construção,123","especialidade":"Engenheiro Civil","experiencia":"Coordenador de projetos residenciais e industriais. Participou de empreendimentos premiados.","formacao":"Doutor em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Lucas Oliveira","telefone":"(16) 91234-5678","endereco":"Rua das Estruturas,456","especialidade":"Engenheiro Civil","experiencia":"Mais de 10 anos de experiência em projetos residenciais e comerciais. Especializado em estruturas de concreto.","formacao":"Bacharel em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Amanda Silva","telefone":"(16) 92345-6789","endereco":"Avenida da Inovação,789","especialidade":"Engenheira Elétrica","experiencia":"Especialista em sistemas elétricos de potência. Trabalhou em projetos de infraestrutura elétrica para grandes empresas.","formacao":"Mestre em Engenharia Elétrica pela Universidade Fictícia"},
        {"nome":"Rafael Santos","telefone":"(16) 93456-7890","endereco":"Praça da Tecnologia,012","especialidade":"Engenheiro de Software","experiencia":"Desenvolvedor experiente em projetos de software. Especializado em arquitetura de sistemas distribuídos.","formacao":"Doutor em Ciência da Computação pela Universidade Fictícia"},
        {"nome":"Carla Lima","telefone":"(16) 94567-8901","endereco":"Alameda da Invenção,101","especialidade":"Engenheira Mecânica","experiencia":"Projetista de máquinas e equipamentos. Trabalhou em empresas automotivas e de manufatura.","formacao":"Bacharel em Engenharia Mecânica pela Universidade Fictícia"},
        {"nome":"Fernanda Oliveira","telefone":"(16) 95678-2345","endereco":"Rua das Invenções,345","especialidade":"Engenheiro Civil","experiencia":"Especialista em projetos estruturais. Trabalha com análise e dimensionamento de estruturas de concreto e aço.","formacao":"Bacharel em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Gustavo Martins","telefone":"(16) 96789-3456","endereco":"Avenida da Tecnologia,678","especialidade":"Engenheiro Civil","experiencia":"Coordenador de obras. Experiência em gerenciamento de projetos de construção civil.","formacao":"Mestre em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Juliana Almeida","telefone":"(16) 97890-4567","endereco":"Praça da Inovação,901","especialidade":"Engenheiro Civil","experiencia":"Especialista em projetos de saneamento básico. Atuou em obras de infraestrutura urbana.","formacao":"Doutora em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Roberto Santos","telefone":"(16) 98901-5678","endereco":"Alameda da Tecnologia,234","especialidade":"Engenheiro Civil","experiencia":"Engenheiro consultor em geotecnia. Projetos de fundações e estabilidade de taludes.","formacao":"Bacharel em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Larissa Oliveira","telefone":"(16) 90012-3456","endereco":"Rua da Inovação,567","especialidade":"Engenheiro Civil","experiencia":"Engenheira de orçamentos. Especializada em análise de custos e planejamento financeiro de obras.","formacao":"Bacharel em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Pedro Rocha","telefone":"(16) 91123-4567","endereco":"Avenida das Tecnologias,890","especialidade":"Engenheiro Civil","experiencia":"Gerente de obras residenciais. Coordenou projetos habitacionais de grande porte.","formacao":"Mestre em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Carlos Silva","telefone":"(16) 98888-8888","endereco":"Rua das Obras,109","especialidade":"Engenheiro Civil","experiencia":"Especialista em projetos de construção civil. Trabalhou em diversos empreendimentos residenciais e comerciais.","formacao":"Bacharel em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"João Silva","telefone":"(16) 98765-4321","endereco":"Avenida das Obras,234","especialidade":"Engenheiro Civil","experiencia":"Atua há 8 anos em projetos de construção civil. Especializado em obras residenciais e comerciais.","formacao":"Bacharel em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Maria Oliveira","telefone":"(16) 87654-3210","endereco":"Rua das Construções,567","especialidade":"Engenheiro Civil","experiencia":"Especialista em gerenciamento de obras. Participou de grandes projetos de infraestrutura.","formacao":"Mestre em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Carlos Santos","telefone":"(16) 76543-2109","endereco":"Praça da Arquitetura,890","especialidade":"Engenheiro Civil","experiencia":"Mais de 12 anos de experiência em projetos de edificações. Focado em sustentabilidade e eficiência energética.","formacao":"Doutor em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Fernanda Costa","telefone":"(16) 65432-1098","endereco":"Alameda das Estruturas,109","especialidade":"Engenheiro Civil","experiencia":"Trabalhou em projetos de pontes e viadutos. Especializada em estruturas de concreto armado.","formacao":"Bacharel em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"Fernanda Oliveira","telefone":"(16) 97777-7777","endereco":"Avenida das Estruturas,234","especialidade":"Engenheiro Civil","experiencia":"Mais de 8 anos de experiência em gerenciamento de obras. Especializada em estruturas metálicas.","formacao":"Mestre em Engenharia Civil pela Universidade Fictícia"},
        {"nome":"José Santos","telefone":"(16) 96666-6666","endereco":"Praça da Construção,567","especialidade":"Engenheiro Civil","experiencia":"Coordenador de projetos residenciais e industriais. Participou de empreendimentos premiados.","formacao":"Doutor em Engenharia Civil pela Universidade Fictícia"}
        ];

    // Inicializa a propriedade 'avaliacoes' para cada profissional
    dadosProfissionais.forEach(profissional => {
        profissional.avaliacoes = obterAvaliacoesSalvas(profissional.nome) || [];
        profissional.avaliacaoMedia = calcularMediaAvaliacoes(profissional.avaliacoes);
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const categoriaSelecionada = document.getElementById('categoria').value;
        buscarProfissionais(categoriaSelecionada);
    });

    function buscarProfissionais(categoria) {
        const profissionaisDaCategoria = dadosProfissionais.filter(profissional =>
            profissional.especialidade.toLowerCase() === categoria.toLowerCase()
        );

        exibirResultados(profissionaisDaCategoria);
    }

    function atribuirAvaliacao(nomeProfissional, avaliacao) {
        const profissional = dadosProfissionais.find(p => p.nome === nomeProfissional);

        if (!profissional.avaliacoes) {
            profissional.avaliacoes = [];
        }

        profissional.avaliacoes.push(parseInt(avaliacao));
        profissional.avaliacaoMedia = calcularMediaAvaliacoes(profissional.avaliacoes);

        // Salvar avaliações no localStorage
        salvarAvaliacoes(profissional.nome, profissional.avaliacoes);

        exibirResultados(dadosProfissionais.filter(p => p.especialidade.toLowerCase() === categoria.toLowerCase()));
    }

    function calcularMediaAvaliacoes(avaliacoes) {
        if (!avaliacoes || avaliacoes.length === 0) {
            return 0;
        }

        const somaAvaliacoes = avaliacoes.reduce((total, avaliacao) => total + avaliacao, 0);
        return somaAvaliacoes / avaliacoes.length;
    }

    function obterAvaliacoesSalvas(nomeProfissional) {
        const avaliacoesArmazenadas = JSON.parse(localStorage.getItem('avaliacoes')) || {};
        return avaliacoesArmazenadas[nomeProfissional];
    }

    function salvarAvaliacoes(nomeProfissional, avaliacoes) {
        const avaliacoesArmazenadas = JSON.parse(localStorage.getItem('avaliacoes')) || {};
        avaliacoesArmazenadas[nomeProfissional] = avaliacoes;
        localStorage.setItem('avaliacoes', JSON.stringify(avaliacoesArmazenadas));
    }

    function exibirResultados(resultados) {
        resultadosSection.innerHTML = '<h2>Resultados da Busca</h2>';
        document.getElementById('resultados').classList.remove('hide');

        if (resultados.length === 0) {
            resultadosSection.innerHTML += '<p>Nenhum profissional encontrado para esta categoria.</p>';
        } else {
            resultados.forEach(profissional => {
                resultadosSection.innerHTML += `
                    <div class="avaliacao-container">
                        <h3>${profissional.nome}</h3>
                        <p><span>Telefone:</span> <span id="tele">${profissional.telefone}</span></p>
                        <p><span>Endereço:</span> ${profissional.endereco}</p>
                        <p><span>Experiência:</span> ${profissional.experiencia}</p>
                        <p><span>Formação:</span> ${profissional.formacao}</p>
                        <label for="avaliacao-${profissional.nome}">Avaliação:</label>
                        <select id="avaliacao-${profissional.nome}" name="avaliacao" onchange="atribuirAvaliacao('${profissional.nome}', this.value)">
                            <option value="1">1 estrela</option>
                            <option value="2">2 estrelas</option>
                            <option value="3">3 estrelas</option>
                            <option value="4">4 estrelas</option>
                            <option value="5">5 estrelas</option>
                        </select>
                        <p>Avaliação Média: ${profissional.avaliacaoMedia.toFixed(1)} estrela(s)
                        <button type="submit" id="botaoFORM" >Clique para realizar o Orçamento com o Com o profissional</button>
                    </div>
                `;
            });
        }
    }


  
});