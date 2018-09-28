Claro Brasil Challenge - Front-end Angular
===================

[![N|Solid](https://jobs.i-hunter.com/claro/views/logo.php)](https://www.claro.com.br/)

O objetivo deste desafio é avaliar a competência técnica dos candidatos a desenvolvedor front-end angular na **Claro Brasil**. Será solicitado o desenvolvimento de um Webapp que te ajuda a contratar um dos produtos da Claro Brasil.

## Anotacões Kelvin Arnold

Neste Projeto utilizei o Vue e Angular, separados em projetos distintos:

	- vue-project
	- angular-project

Cada projeto têm seu propio README.md com as instruções necessárias para executá-los.


## Passo a passo

1. Efetuar fork privado

2. Adicionar o usuário ecommerce-clarobrasil ao projeto, com permissão de leitura.

3. O prazo para desenvolvimento é informado por email de instrução do teste, contados a partir do recebimento do mesmo.

4. Após a conclusão, enviar email contendo o link do seu projeto privado para moacir.pavoni@claro.com.br.


## Instruções gerais

0. Implementar um layout responsivo, mobile-first e em grid.

	0.1. Utilizar Angular 4+.

	0.2. Utilizar fonte Roboto (google fonts).

## Exercícios

1. Implementar lista de produtos, com base no arquivo produtos.json.

	1.1. Tomar precaução de exibir apenas os produtos que o json permitir.

	1.2. Apresentar as seguintes informações:

		- Nome

		- Descrição

		- lista de canais (logo)

		- Preço

		- Preço De (quando aplicável, maior que o preço vigente)

		- Adesão

		- Taxa de instalação

		- id do elemento: tipo + id

	1.3. Formatar os valores com a seguinte mascara: R$ 00,00;

	1.4. Se guiar pelas screenshots para desktop e mobile para a construção do HTML.

2. Implementar grade de canais, com base no arquivo grade-canais.json.

	2.1. o horário vai das 17 até 0h.

	2.2. Se guiar pelas screenshots para desktop e mobile para a construção do HTML.

	2.3. Observações

		- pode haver horário vazio na grade, um programa vai das 17h até as 18h, o próximo começa apenas as 19h.

		- um programa pode começar ou terminar fora do range das 17h às 0h. Nesse caso, apresentar parcialmente. (apresentar marcação de inicio anterior)
