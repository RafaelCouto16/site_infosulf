const partners = [
	//0
	{
		title: "APPTA",
		image: "appta.svg",
		text: " O APPTA é um sistema completo e fácil de usar. Porque nenhum lojista precisa de complicação",
		knowMore: "appta.html"
	},
	//1
	{
		title: "Conciliadora",
		image: "conciliadora.svg",
		text: "A Conciliadora confere automaticamente todas as suas transações de cartão em segundos,	desde a venda até o pagamento em depósito bancário. Um sistema completo de conciliação de		cartão e conciliação bancária.",
		knowMore: "conciliadora.html"
	},
	//2
	{
		title: "Eleve",
		image: "eleve.svg",
		text: "Com Eleve você controla tudo, vende mais e faz a sua empresa gerar cada vez mais dinheiro",
		knowMore: "eleve.html"
	},
	//3
	{
		title: "Eleve Saúde",
		image: "Eleve Saúde",
		text: "Eleve Saúde - O melhor software médico para a gestão de consultórios e clínicas.	Especialmente desenvolvido para gestão de clínicas e consultórios médicos, permite que o médico tenha acesso ao prontuário eletrônico, consultas e agenda de cada médico de qualquer lugar, por qualquer meio, possibilitando prescrição digital de medicamentos de forma simples e inteligente",
		knowMore: "eleveSaude.html"
	},
	//4
	{
		title: "Hiper",
		image: "hiper.svg",
		text: "Sistema de gestão e vendas para sua loja física e online em um só lugar.",
		knowMore: "hiper.html"
	},
	//5
	{
		title: "Instsys",
		image: "intsys.svg",
		text: "A Intsys é um sistema que oferece informações claras atendendo às normas da legislação tributária atualizada. Por meio de demonstrativos gerenciais, relatórios de controles e geração de arquivos para o Fisco, plano de contas configurável, conciliação de contas, portações: Sped Contábil, Manad, Sinco entre outros. Permite contabilização por centro de custos, rateios de formas variadas, possibilita trabalhar com vários	planos de contas ou com um único para todas as empresas.",
		knowMore: "intsys.html"
	},
	//6
	{
		title: "Leigado",
		image: "leigado.svg",
		text: "Com o sistema Leigado você cadastra seus animais e controla histórico e genealogia, reprodutores e dosagens de sêmem, separe os animais em lotes, inclua medicamentos e vacinas no calendário da fazenda, controle diversas propriedades, controle ainda peso,	altura e escore corporal. Obtenha todas essas informações de forma prática, em qualquer	lugar ou meio. Além de outras funcionalidades não menos importantes que as já citadas.",
		knowMore: "leigado.html"
	},
	//7
	{
		title: "MoutorSW",
		image: "motorsw.svg",
		text: "Desenvolvido e testado por quem entende de oficina. Fácil de usar, 100% online. Facilite seu dia.",
		knowMore: "motorSW.html"
	},
	//8
	{
		title: "AgroMoura",
		image: "moura.svg",
		text: "As vantagens que o AgroMoura proporciona aos seus usuários são muitas.	Além de facilitar as tarefas administrativas e organizar o financeiro, o ERP oferece recursos exclusivos, como a personalização de telas e documentos	diretamente na palma da sua mão.",
		knowMore: "mouraAgro.html"
	},
	//9
	{
		title: "CardápioMoura",
		image: "moura.svg",
		text: "O ERP CardápioMoura dinamiza a gestão do seu restaurante. Assim, os clientes ganham mais atenção e você aumenta sua lucratividade. As vantagens que o CardápioMoura proporciona aos seus clientes são muitas, entre elas: Mapa de Mesas e Sistema de Comandas.",
		knowMore: "mouraCardapio.html"
	},
	//10
	{
		title: "FarMoura",
		image: "moura.svg",
		text: "Para ampliar a capacidade de atendimento de farmácias e drogarias, o software FarMoura faz atualizações automáticas, gera relatórios para a Anvisa  com um clique e oferece uma série de outros recursos, que simplificam a área administrativa. A gestão dos negócios fica mais ágil, e você pronto para atender  um volume maior de clientes.",
		knowMore: "mouraFar.html"
	},
	//11
	{
		title: "FranquiasMoura",
		image: "moura.svg",
		text: "É um software de integração entre gestão corporativa e rede de franquias, sendo desenvolvido para atender o mercado de franchising. Buscando sempre novas formas	de auxiliar o franqueador nas áreas corporativas, executamos desde a expansão da marca,	através da captação de leads até o gerenciamento das unidades franqueadas, tudo isso em	tempo real.",
		knowMore: "mouraFraquias.html"
	},
	//12
	{
		title: "MagazineMoura",
		image: "moura.svg",
		text: "As vantagens que o MagazineMoura proporciona aos seus usuários são muitas. Além de facilitar as tarefas administrativas e organizar o financeiro, o ERP oferece recursos exclusivos, como a personalização de telas e documentos  diretamente da palma da sua mão.",
		knowMore: "mouraMagazine.html"
	},
	//13
	{
		title: "O.S.Moura",
		image: "moura.svg",
		text: "O software O.S.Moura automatiza a administração da empresa, unindo os pontos essenciais do negócio com os inúmeros recursos exclusivos, assim manter tudo sob controle fica muito mais fácil.",
		knowMore: "mouraOS.html"
	},
	//14
	{
		title: "PostoMoura",
		image: "moura.svg",
		text: "As vantagens que o AgroMoura proporciona aos seus usuários são muitas.	Além de facilitar as tarefas administrativas e organizar o financeiro, o ERP oferece recursos exclusivos, como a personalização de telas e documentos	diretamente na palma da sua mão.",
		knowMore: "mouraPostos.html"
	},
	//15
	{
		title: "RFIDMoura",
		image: "moura.svg",
		text: "A integração com a tecnologia do RFID, que identifica os produtos por radiofrequência, beneficiará em diversos processos como a contagem do estoque.",
		knowMore: "mouraRFID.html"
	},
	//16
	{
		title: "SisMoura",
		image: "moura.svg",
		text: "As vantagens que o SisMoura proporciona aos seus usuários são muitas. Além de facilitar as tarefas administrativas e organizar o financeiro, o ERP oferece recursos exclusivos, como personalização de telas e documentos diretamente na palma da sua mão.",
		knowMore: "mouraSis.html"
	},
	//17
	{
		title: "PetMoura",
		image: "moura.svg",
		text: "Desenvolvido especialmente para pet shops, clínicas veterinárias e centros de estética, o PetMoura dinamiza a gestão do seu negócio e o atendimento ao cliente. Assim, os bichinhos ganham mais atenção e você aumenta sua capacidade de atendimento.",
		knowMore: "mouraPet.html"
	},
	//18
	{
		title: "FACILITE Varejo",
		image: "tdp.svg",
		text: "Possui todos os módulo Gerenciais e Operacionais para a melhor Gestão do seu Varejo. Funcionalidades específicas são oferecidas nas versões para cada segmento Comercial.",
		knowMore: "tdpVarejo.html"
	},
	//19
	{
		title: "FACILITE Food",
		image: "tdp.svg",
		text: "Desenvolvido para atender a ramos específicos do comércio que utilizam-se do lançamento dos itens durante a consumação, como Bares, Lanchonetes, Restaurantes, Padarias e Pizzarias.",
		knowMore: "tdpFood.html"
	},
	//20
	{
		title: "FACILITE Ordem de Serviços",
		image: "tdp.svg",
		text: "Atende a geração, emissão e controle de Ordens de Serviço interna, para Empresas como Lojas de Informatica, Celular, Maquinas e Equipamentos e Oficina Mecânica.",
		knowMore: "tdpServicos.html"
	},
	//21
	{
		title: "TopCell",
		image: "topcell.svg",
		text: "O TopCell é um sistema totalmente integrado e modular que oferece ao gestor informações rápidas e precisas a fim de auxiliá-lo em suas tomadas de decisão. Voltado para o varejo em geral, foi desenvolvido para as necessidades mais específicas do seguimento de vestuário, calçados e acessórios.",
		knowMore: "topCell.html"
	},
	//22
	{
		title: "TopCell",
		image: "topcell.svg",
		text: "Desenvolvido a partir das necessidades reais de uma auto peças, o sistema oferece todos os controles	habituais de contas a receber e a pagar, fluxo de caixa, DRE e etc e além disso possui um avançado acompanhamento de entregas (delivery) onde o gestor poderá acompanhar o histórico de cada cliente inclusive das devoluções, seus motivos e custo das mesmas. Tenha o controle de sua auto peças em suas mãos.",
		knowMore: "topcell.html"
	},
	//23
	{
		title: "Obra Prima",
		image: "obraPrima.svg",
		text: "O Obra Prima é uma ferramenta de gestão fácil de usar e rápida de implantar! Comece a usar já, cadastrando suas obras e projetos! Conheça todas as vantagens que o Obra Prima pode trazer para a sua empresa.",
		knowMore: "obraPrima.html"
	},
	//24
	{
		title: "SGBR",
		image: "sgbr.svg",
		text: "Um sistema completo e interativo que automatiza suas tarefas e integra diferentes áreas do seu negócio. O SG Master é a ferramenta ideal para ajudar a sua empresa crescer de forma correta, cumprindo toda a legislação vigente. Atende micro, pequenos e médios estabelecimentos comerciais de forma assertiva, suprindo suas principais necessidades, automatizando as rotinas diárias e apoiando na gestão do negócio.",
		knowMore: "sgbr.html"
	},
]
