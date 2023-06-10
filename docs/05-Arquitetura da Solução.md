# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O Diagrama de Classes, conforme apresentado na Figura 8, representa as classes a serem implementadas no sistema, com o objetivo de ilustrar os objetos, bem como seus respectivos atributos e métodos. 

![Imagem4](https://user-images.githubusercontent.com/100963513/228103250-3bf103fd-a1e6-4b3c-874b-653d46a539e1.png)


## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

![Imagem do Modelo Entidade Relacionamento](/docs/img/MER.png)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
![Imagem do Esquema Relacional](/docs/img/esquema_relacional.png)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

![Imagem2](https://user-images.githubusercontent.com/100963513/228103415-5e90098f-966d-46ce-9bcd-4c2fcb49264f.png)


## Tecnologias Utilizadas

![Imagem5](https://user-images.githubusercontent.com/100963513/228103722-70342536-6e15-4e9a-9d6a-48f00b148c1c.png)


## Hospedagem

![Imagem6](https://user-images.githubusercontent.com/100963513/228103870-05d1475d-ce36-4c56-ac40-e0a342318841.png)


## Qualidade de Software

A qualidade de um aplicativo móvel de controle financeiro depende de vários fatores, incluindo funcionalidade, usabilidade, desempenho, segurança e manutenibilidade. Aqui estão algumas considerações importantes para avaliar a qualidade do software de um aplicativo móvel de controle financeiro: 

- Funcionalidade: O aplicativo deve fornecer todas as funcionalidades necessárias para gerenciar as finanças do usuário, como a capacidade de monitorar gastos, gerenciar orçamentos, visualizar relatórios e realizar transações financeiras.  

- Usabilidade: O aplicativo deve ser fácil de usar e intuitivo, com uma interface clara e organizada que permita aos usuários navegar facilmente pelas diferentes funcionalidades. O aplicativo também deve ser acessível e ter boa usabilidade para usuários com deficiências visuais ou motoras. 

- Desempenho: O aplicativo deve ser rápido e responsivo, com tempos de carregamento curtos e operações suaves. Ele deve ser capaz de lidar com grandes quantidades de dados de forma eficiente e sem travar. 

- Segurança: O aplicativo deve proteger as informações financeiras do usuário, incluindo senhas e outras informações sensíveis.  

- Manutenibilidade: O aplicativo deve ser fácil de manter e atualizar, com um código bem estruturado e documentado que permita a correção de bugs e a implementação de novas funcionalidades. Ele também deve ser capaz de se integrar com ferramentas de monitoramento e análise para ajudar a identificar problemas e melhorias. 

A qualidade do software de um aplicativo móvel de controle financeiro pode ser avaliada por meio de testes de usabilidade, testes de segurança e testes de desempenho. Além disso, é importante ouvir feedback dos usuários e responder rapidamente a quaisquer problemas ou sugestões de melhoria. 
|Característica de Qualidade| Subcaracterísticas |Justificativa      |
|--------------------|------------------------------------|----------------------------------------|
| ● Adequação Funcional  |         Adequação   <BR>  <BR>     Acurácia  <BR>  <BR>  Conformidade  | Prover um conjunto apropriado de funções para tarefas e objetivos do usuário especificados.<BR> <BR> Prover, com o grau de precisão necessário, resultados ou efeitos corretos ou conforme acordados.<BR><BR> O software deve estar de acordo com normas, convenções ou regulamentações previstas em leis e prescrições similares relacionadas à funcionalidade.
|    ●  Eficiência de Desempenho          |   Comportamento em relação aos recursos           |  Capacidade do produto de software de usar tipos e quantidades apropriados de recursos, quando o software executa suas funções sob condições estabelecidas.
|● Usabilidade                            |    Inteligibilidade    <BR>  <BR> Apreensibilidade    <BR>  <BR> Operacionalidade     |  Capacidade do produto de software de possibilitar ao usuário compreender se o software é apropriado e como ele pode ser usado para tarefas e condições de uso específicas. <BR>  <BR> Capacidade do produto de software de possibilitar ao usuário aprender sua aplicação. <BR>  <BR> Capacidade do produto de software de possibilitar ao usuário operá-lo e controlá-lo.
| ● Manutenibilidade   |   Modularidade   <BR>   <BR> Modificabilidade    <BR>  <BR> Testabilidade    |   A modularização (ou componentização) é o mecanismo que permite que um sistema de software seja dividido em partes que interagem entre si. <BR> <BR> Capacidade do produto de software de permitir que uma modificação especificada seja implementada. <BR>  <BR> Capacidade do produto de software de permitir que o software, quando modificado, seja validado.
| ● Segurança   |  Confidencialidade             |Capacidade do produto de software de proteger informações e dados, de forma que pessoas ou sistemas não autorizados não possam lê-los nem modificá-los e que não seja negado o acesso às pessoas ou sistemas autorizados.

|Subcaracterísticas| Métrica |Escala      |Peso      |
|--------------------|------------------------------------|----------------------------------------|----------------------------------------|
|Adequação | O sistema propõe-se a fazer o que é apropriado? |1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende       |ALTO      |
|Acurácia| O sistema gera resultados corretos conforme acordado?|1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende    |ALTO        |
|Conformidade| O sistema está de acordo com normas e convenções previstas em leis e descrições similares?|1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende     |ALTO        |
|Comportamento em relação aos recursos| Quanto recurso o sistema utiliza? |1) Muito <BR>2) Suficiente<BR> 3) Pouco       |ALTO        |
|Interoperabilidade| O sistema é capaz de interagir com os sistemas especificados? |1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende      |ALTO        |
|Inteligibilidade| É fácil entender como utilizar o software ? |1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende      |ALTO        |
|Apreensibilidade| É fácil aprender a usar? |1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende      |ALTO        |
|Operacionalidade| É fácil de operar e controlar a operação? |1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende    |ALTO        |
|Modularidade| As partes (módulos) do sistema estão interagindo entre si ? |1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende     |ALTO        |
|Modificabilidade| Qual a complexidade de implementar modificações ? |1) Alta <br>2) Média <br>3) Baixa      |ALTO        |
|Testabilidade| Qual a complexidade de se validar o software ?  |1) Alta <br>2) Média <br>3) Baixa       |ALTO        |
|Coexistência| O sistema de software pode coexistir com outros produtos de software independentes ? |1) Sim <BR>2) Não       |ALTO        |
|Tolerância a falhas | Ocorrendo falhas, o sistema está parametrizado para reagir ? |1) Sim <BR>2) Não       |ALTO        |
|Confidencialidade | O sistema evita acesso não autorizado, acidental ou deliberado a programas de dados? |1) Sim <BR>2) Não       |ALTO        |

