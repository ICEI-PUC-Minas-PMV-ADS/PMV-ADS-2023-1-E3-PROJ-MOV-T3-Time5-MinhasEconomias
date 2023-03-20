# Especificações do Projeto

## Personas

|Diego Lopes| ![image](/docs/img/personas/personas1.png) |
|-----------------------|-|
|Idade:|35|
|Ocupação:| Influencer digital |
|Aplicativos:| WhatsApp, Facebook, Instagram, LinkedIn, Aplicativos de bancos, Spotify    |
|Motivações | Economizar dinheiro para realizar novas viagens no futuro. Ter uma visão clara das finanças para poder desfrutar melhor as viagens sem se preocupar com gastos excessivos.   |
|Frustrações | Gastar mais do que o esperado durante as viagens e ter que adiar novos planos de viagem. Não conseguir aproveitar bem as viagens por estar sempre preocupado com os gastos. |
|Hobbies | Gosta de ler, Ouvir música |

|Melissa Soares| ![image](/docs/img/personas/personas2.png) |
|-----------------------|-|
|Idade:|56|
|Ocupação:| Publicitária em uma agência em período integral |
|Aplicativos:| WhatsApp, Facebook, Instagram |
|Motivações | Organizar os gastos com as despesas domésticas, como compras no supermercado, contas de água, luz e gás. Economizar para realizar pequenas reformas ou comprar algum item para a casa.   |
|Frustrações | Não conseguir economizar dinheiro suficiente para realizar projetos pessoais. Conflitos com o parceiro ou outros membros da família sobre decisões financeiras. |
|Hobbies | Gosta de cuidar de suas plantas, Faz natação |

|Lucas Simão| <img src="/docs/img/personas/personas3.png" width="200"> |
|-----------------------|-|
|Idade:|15|
|Ocupação:| Estudante do ensino médio |
|Aplicativos:| WhatsApp, Facebook, Instagram, LinkedIn, Aplicativos de bancos, Spotify    |
|Motivações | Controlar seus gastos com alimentação, transporte e materiais escolares. Aprender a gerenciar melhor seu dinheiro para não depender tanto dos pais.  |
|Frustrações | Dificuldade em lembrar todos os gastos realizados. Sensação de que seus pais não confiam em sua capacidade de administrar dinheiro. |
|Hobbies | Andar de skate , Assistir TV  |

|Elisa Andrade| <img src="/docs/img/personas/personas4.png" width="200"> |
|-----------------------|-|
|Idade:|75|
|Ocupação:| Dona de casa, aposentada. Criou seus 2 filhos e agora curte seus netos e seu jardim |
|Aplicativos:| WhatsApp |
|Motivações | Poder gerenciar seus gastos e economizar dinheiro para ajudar sua família e netos financeiramente e panorama geral das suas finanças e evitar endividamentos. |
|Frustrações | Receio de compartilhar informações pessoais e financeiras. |
|Hobbies | Gosta de ler, Jogar Xadrez |

|Sergio Souza | <img src="/docs/img/personas/personas5.png" width="200"> |
|-----------------------|-|
|Idade:|55|
|Ocupação:| Analista de compras em uma startup que assessora vendas de roupa em atacado |
|Aplicativos:| WhatsApp, Facebook |
|Motivações |  Controlar os gastos com investimentos no negócio. Ter uma visão clara das receitas e despesas para poder tomar decisões mais assertivas.   |
|Frustrações | Dificuldade em conciliar a gestão financeira do negócio com a vida pessoal. Tomar decisões financeiras equivocadas que afetam o desempenho do negócio. |
|Hobbies | Academia, Jogar tênis |

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`         |PARA ... `MOTIVO/VALOR`                               |
|--------------------|--------------------------------------------|------------------------------------------------------|
|Diego Lopes         |Gerenciar meus gastos durante as viagens, incluindo transporte, hospedagem, alimentação e passeios turísticos. |muitas vezes acabo gastando mais do que o planejado, o que me impede de realizar meus sonhos de viagem. |
|Melissa Soares      |Organizar os gastos da casa, incluindo contas de água, compras no supermercado, luz e gás. |Muitas vezes perco o controle dos gastos e acabo gastando mais do que o necessário. |
|Lucas Simão         |Organizar meus gastos com alimentação, transporte e livros. |Dificuldade em lembrar de todos os meus gastos e muitas vezes acabo gastando mais do que o planejado. |
|Elisa Andrade       |Organizar meus gastos e assim poder pagar minhas dívidas em dia e evitar novos endividamentos. |Panorama geral das minhas finanças e evitar novos problemas financeiros. |
|Sergio Souza        |Gerenciar minhas receitas e despesas e assim poder tomar decisões mais assertivas sobre minhas finanças pessoais. |Muitas vezes perco o controle dos gastos e acabo gastando mais do que o necessário, para ter um panorama geral das minhas finanças e evitar novos problemas financeiros. |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

O modelo de proposta do sistema idealiza como pontos principais em seu escopo, a implementação de funcionalidades para cadastramento categorizado de despesas mensais, cálculo baseado em ganhos x despesas e registro de saldos remanescentes que viabiliza a construção de reservas financeiras. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo

![BPMN](https://user-images.githubusercontent.com/101661631/226425230-0a69eef2-ce93-44f1-85fc-3bb3c649a731.png)


## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Os requisitos funcionais de um sistema descrevem o que ele deve fazer, correspondem a uma funcionalidade que deve estar presente na plataforma. Já os requisitos não funcionais de um sistema descrevem como ele deve fazer, correspondem a uma característica técnica, seja de usabilidade, desempenho, confiabilidade, segurança ou outro.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve permitir o acesso às funcionalidades apenas para pessoas que possuam usuário e senha.  | Alta |
|RF-002| O sistema deve permitir que um usuário se cadastre. | Alta | 
|RF-003| O sistema deve permitir que um usuário recupere sua senha   | Alta |
|RF-004| O sistema deve permitir que um usuário cadastrado atualize seus dados.   | Média |
|RF-005| O sistema deve cadastrar, atualizar, excluir e buscar grupos de despesa.   | Alta |
|RF-006| O sistema deve cadastrar, atualizar, excluir e buscar grupos de receita.   | Alta |
|RF-007| Deve ser capaz de exibir as receitas e despesas mensais do usuário.   | Alta |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Não é permitido existir usuários duplicados no sistema.| Alta | 
|RNF-002| Toda operação de consulta no sistema não deve ultrapassar 5 segundos. |  Média | 
|RNF-003| Toda operação de inserção no sistema não deve ultrapassar 5 segundos. |  Média | 
|RNF-004| A senha deve conter no mínimo 6 e no máximo 10 caracteres incluindo, letra maiúscula, minúscula e número.  |  Alta | 
|RNF-005| O sistema deverá manter o funcionamento de 96% do tempo em 24hrs por dia, dos 7 dias da semana. |  Média | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrições                                             |
|--|-------------------------------------------------------|
|01| O sistema deverá ser construído utilizando o React Native.    |
|02| O sistema não poderá ser desenvolvido em um módulo de backend.|
|03| A primeira etapa do projeto referente a concepção e proposta de solução deverá ser entregue até o dia 05/03/2023. |
|04| A segunda etapa do projeto referente ao projeto da solução deverá ser entregue até o dia 02/04/2023.       |
|05| A terceira etapa do projeto referente a 1ª fase do desenvolvimento da solução deverá ser entregue até o dia 07/05/2023.        |
|06| A quarta etapa do projeto referente a 2ª fase do desenvolvimento da solução deverá ser entregue até o dia 04/06/2023.     |
|07| A quinta etapa do projeto referente aos relatórios das avaliações e entrega da solução deverá ser entregue até o dia 23/06/2023. 

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

![Diagrama de caso de uso - Minhas Economias](https://user-images.githubusercontent.com/101661631/222971537-2b056c05-99b3-474e-b316-5cf2842bb0fd.png)

# Matriz de Rastreabilidade

Uma matriz de rastreabilidade nada mais é do que uma forma de visualização do relacionamento entre os requisitos. Por meio dela, são listados os requisitos nas linhas e nas colunas da matriz, depois se aplica um X nas células correspondentes, caracterizando os relacionamentos entre os requisitos. Dessa forma, podemos utilizar para efeitos de ilustração, um sistema com sete requisitos. 

Davis (1993) classifica as informações de rastreabilidade, inicialmente, em quatro tipos: 

* Rastreabilidade backward-from: é a ligação entre os requisitos e as suas origens com outros documentos ou pessoas. 

* Rastreabilidade forward-from: a ligação entre os requisitos, o projeto e os componentes da implementação. 

* Rastreabilidade backward-to: a ligação entre o projeto, os componentes de implementação e os requisitos. 

* Rastreabilidade forward-to: a ligação de outros documentos com os requisitos relevantes

![image](https://user-images.githubusercontent.com/100963513/221742427-3c3f2d49-6d97-476e-b499-e12a93b03ab6.png)

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

O gráfico de Gantt é uma ferramenta de gerenciamento de projetos que exibe visualmente as atividades do projeto ao longo do tempo, ele ajuda os gerentes de projeto a visualizar o cronograma do projeto, identificar possíveis problemas e ajustar o plano do projeto, se necessário. Ele também permite que as equipes trabalhem de forma mais eficiente, fornecendo uma visão geral do progresso do projeto e das tarefas pendentes. 

 Trazendo para nosso contexto de aplicativo móvel de controle financeiro, o gráfico de Gantt é uma representação gráfica das atividades envolvidas no desenvolvimento do aplicativo, mostrando as datas de início e término previstas para cada atividade. 

Para esse fim, construímos o gráfico de Gantt conforme disposto na figura 3. Ele contém uma lista de tarefas ou atividades na vertical e um eixo horizontal que representa o tempo. As barras horizontais representam a duração de cada atividade e a posição das barras no eixo do tempo indica quando cada atividade deve começar e terminar.

![Imagem2](https://user-images.githubusercontent.com/100963513/222823446-4bc42cdf-93c7-4517-80ca-d3b8b9a6c8c7.png)



## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Equipe_OK](https://user-images.githubusercontent.com/101661631/222968369-1da7026f-0dc4-478d-aa2a-13dfcf3fc454.png)



## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
