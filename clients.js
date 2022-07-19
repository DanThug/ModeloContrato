const clients = [
    {
        name: "DIAVERUM ASSISTENCIA MEDICA E NEFROLOGICA LTDA",
        cnpj: "59.650.366/0003-10",
        zipcode: "49055-210",
        address: "AV DES MAYNARD",
        number: "174",
        district: "CIRURGIA",
        city: "Aracaju",
        state: "SE"
    },
    {
        name: "ACS BRASIL CIRURGICA LTDA",
        cnpj: "11.599.226/0001-77",
        zipcode: "05041-001",
        address: "R FAUSTOLO",
        number: "1.187",
        district: "LAPA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "INEDI INSTITUTO DE NEFROLOGIA E DIALISE LTDA",
        cnpj: "00.235.344/0001-80",
        zipcode: "06763-015",
        address: "AV JOSE DINI",
        number: "180",
        district: "CHACARA AGRINDUS",
        city: "Taboão da Serra",
        state: "SP"
    },
    {
        name: "ASSOCIACAO BENEFICENTE JARDIM DAS NUVENS",
        cnpj: "07.358.517/0007-91",
        zipcode: "04428-030",
        address: "RUA ANTONIO PEDROSO DE OLIVEIRA",
        number: "134",
        district: "AMERICANOPOLIS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ASSOCIACAO BENEFICENTE JARDIM DAS NUVENS",
        cnpj: "07.358.517/0006-00",
        zipcode: "04460-040",
        address: "RUA QUINTA DE SANTA LUZIA",
        number: "73, ANEXO 97",
        district: "VILA BABY",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CIM - COMPANHIA DE IDEIAS E MARCAS LTDA",
        cnpj: "09.243.364/0003-39",
        zipcode: "89245-000",
        address: "RODOVIA BR 101",
        number: "21800, KM 59 GALPAOB1",
        district: "CORVETA",
        city: "Araquari",
        state: "      "
    },
    {
        name: "ADRIANA SHEILA GERVASIO OLIVEIRA",
        cnpj: "34.599.000/0001-71",
        zipcode: "07402-125",
        address: "RUA BORBA GATO",
        number: "28, BOX 1",
        district: "VILA LIMA",
        city: "Arujá ",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO TUIUTI TRADE CENTER",
        cnpj: " 67.132.217/0001-26",
        zipcode: "08210-040",
        address: "R TUIUTI",
        number: "1983",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "START BENEFICIAMENTO PARA TERCEIROS LTDA",
        cnpj: "41.018.253/0001-70",
        zipcode: "06696-060",
        address: "AVENIDA PORTUGAL",
        number: "520, GALPAO02 - SALAO 16",
        district: "ITAQUI",
        city: "Itapevi",
        state: "SP"
    },
    {
        name: "VISCOLOR TEXTIL COMERCIO DE TECIDOS LTDA",
        cnpj: "28.133.968/0002-96",
        zipcode: "03025-000",
        address: "RUA ALM BARROSO",
        number: "253",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PIXOXO PET SHOP E SAUDE ANIMAL LTDA",
        cnpj: "29.113.384/0001-30",
        zipcode: "07051-000",
        address: "AV EMILIO RIBAS",
        number: "1931",
        district: "JARDIM TRANQUILIDADE",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "VISCOLOR TEXTIL COMERCIO DE TECIDOS LTDA",
        cnpj: "28.133.968/0001-05",
        zipcode: "03013-040",
        address: "R SAMPSON",
        number: "341",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SEMPRE CANI COMERCIO E SERVICOS LTDA",
        cnpj: "45.188.966/0001-32",
        zipcode: "04653-170",
        address: "R RUBEM DE SOUZA",
        number: "611",
        district: "VILA INGLESA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TRIMETRA RIO COMERCIO E SERVICOS EIRELI",
        cnpj: "31.966.177/0002-51",
        zipcode: "20521-050",
        address: "R CARLOS DE VASCONCELOS",
        number: "145",
        district: "TIJUCA",
        city: "Rio de Janeiro",
        state: "RJ"
    },
    {
        name: "FAV SERVICOS DE MANUSEIO LTDA",
        cnpj: "30.020.519/0001-00",
        zipcode: "06696-060",
        address: "AVENIDA PORTUGAL,",
        number: "520, GALPAO2  SALA 20",
        district: "ITAQUI",
        city: "Itapevi",
        state: "SP"
    },
    {
        name: "THIAGO ANDRE DE SOUZA DIAS AUDIO E VIDEO",
        cnpj: "10.842.658/0001-02",
        zipcode: "07020-010",
        address: "AV DOUTOR EMILIO RIBAS",
        number: "805, TERREO",
        district: "JARDIM TIJUCO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "M.M. DE FRANCA DOS SANTOS",
        cnpj: "10.351.277/0001-12",
        zipcode: "09973-100",
        address: "R GUABIROBA",
        number: "18, CASA 2",
        district: "ELDORADO",
        city: "Diadema",
        state: "SP"
    },
    {
        name: "CANTINA DO ZELAO LTDA",
        cnpj: "61.085.528/0001-03",
        zipcode: "09725-220",
        address: "R JURUBATUBA",
        number: "926",
        district: "CENTRO",
        city: "São Bernardo do Campo",
        state: "SP"
    },
    {
        name: "PAPELARIA E LIVRARIA INTEGRA LTDA",
        cnpj: "44.443.467/0001-81",
        zipcode: "06423-150",
        address: "EST DOUTOR YOJIRO TAKAOKA",
        number: "3900",
        district: "ALDEIA DA SERRA",
        city: "Barueri ",
        state: "SP"
    },
    {
        name: "VM DISTRIBUIDORA DE PECAS INDUSTRIAIS LTDA",
        cnpj: "44.038.631/0001-75",
        zipcode: "02714-050",
        address: "R ENG JOSE PASTORE",
        number: "235",
        district: "JARDIM DAS GRACAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "NICOPLAS COMERCIO DE PLASTICOS EIRELI",
        cnpj: "24.102.177/0001-67",
        zipcode: "07210-250",
        address: "EST VELHA GUARULHOS-SAO MIGUEL",
        number: "12",
        district: "JARDIM ARAPONGAS",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "OMNI WAY ADMINISTRACAO,TRANSPORTES E LOGISTICA LTDA",
        cnpj: "01.784.408/0001-64",
        zipcode: "69074-695",
        address: "AV PRESIDENTE KENNEDY",
        number: "885",
        district: "MORRO DA LIBERDADE",
        city: "Manaus ",
        state: "      "
    },
    {
        name: "EKAN SOLUCOES E SISTEMAS INTEGRADOS LTDA",
        cnpj: "23.993.897/0001-05",
        zipcode: "04276-000",
        address: "RUA SALVADOR SIMOES, SALA 901 902 908 A 910",
        number: "801",
        district: "VILA DOM PEDRO I",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "EVIDENCIA LOGISTICA TRANSPORTE LTDA",
        cnpj: "07.632.502/0002-65",
        zipcode: "07175-332",
        address: "VLA URGA",
        number: "950",
        district: "VILA NOVA BONSUCESSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "11CARE SERVICOS DE SAUDE LTDA**",
        cnpj: "27.971.331/0001-25",
        zipcode: "04276-000",
        address: "R SALVADOR SIMOES",
        number: "801",
        district: "VILA DOM PEDRO I",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SERINGUEIRA BAR E CHOPPERIA EIRELI",
        cnpj: "42.081.531/0001-04",
        zipcode: "04821-000",
        address: "AV PRESIDENTE JOAO GOULART",
        number: "960",
        district: "JARDIM MALIA II",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LUMINOSOS ACRINEL INDUSTRIA E COMERCIO LTDA",
        cnpj: "62.763.925/0001-41",
        zipcode: "03515-000",
        address: "R JOSE MASCARENHAS",
        number: "363",
        district: "VILA MATILDE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "METROPOLITAN CONSULTORIA PREVIDENCIARIA EIRELI",
        cnpj: "37.834.182/0001-06",
        zipcode: "03066-065",
        address: "RUA HENRIQUE SERTORIO",
        number: "564  SALA 506 E 507",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LT PINHEIROS BAR E RESTAURANTE UNIPESSOAL LTDA",
        cnpj: "43.427.006/0001-52",
        zipcode: "05415-020",
        address: "R DR VIRGILIO DE CARVALHO PINTO",
        number: "98",
        district: "PINHEIROS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "J S CAVALCANTE ROUPAS",
        cnpj: "34.644.448/0001-60",
        zipcode: "08010-300",
        address: "R RACHID ATIHE",
        number: "65",
        district: "SAO MIGUEL PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ASSOCIACAO BENEFICENTE JARDIM DAS NUVENS",
        cnpj: "07.358.517/0005-20",
        zipcode: "03810-150",
        address: "R JOSE LOPES RODRIGUES",
        number: "513",
        district: "JARDIM MATARAZZO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CISE - CENTRO INTEGRADO DE SERVICOS DE ESCRITORIO LTDA",
        cnpj: "09.069.367/0001-36",
        zipcode: "06710-700",
        address: "R ADIB AUADA",
        number: "35, CONJ 309 SALA 2",
        district: "JARDIM LAMBRETA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ACQUA TEXTIL LTDA",
        cnpj: "34.665.835/0004-25",
        zipcode: "03025-020",
        address: "R MAJ MARCELINO",
        number: "99, PAVMTOTERREO",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SR COMERCIO DE ALIMENTOS LTDA",
        cnpj: "42.182.674/0001-02",
        zipcode: "05428-001",
        address: "R FERREIRA DE ARAUJO",
        number: "433",
        district: "PINHEIROS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "M.A.S RESTAURANTE E LANCHONETE LTDA",
        cnpj: "23.800.727/0001-59",
        zipcode: "08596-000",
        address: "ESTM DO MANDI",
        number: "1205",
        district: "JARDIM ADRIANE",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "FLAGGEN BAR E RESTAURANTE EIRELI",
        cnpj: "12.506.462/0001-64",
        zipcode: "09726-251",
        address: "AV KENNEDY",
        number: "298",
        district: "VILA MARLY",
        city: "São Bernardo do Campo",
        state: "SP"
    },
    {
        name: "ASSOCIACAO BENEFICENTE JARDIM DAS NUVENS",
        cnpj: "07.358.517/0004-49",
        zipcode: "04403-110",
        address: "AV GASPAR DE BRITO",
        number: "19",
        district: "VILA MARARI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PAPITOS SPORTS BAR LTDA",
        cnpj: "40.073.992/0001-00",
        zipcode: "04571-010",
        address: "AV ENG LUIZ CARLOS BERRINI",
        number: "1339",
        district: "CIDADE MONCOES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ACQUA TEXTIL LTDA",
        cnpj: "34.665.835/0003-44",
        zipcode: "03025-000",
        address: "R ALM BARROSO",
        number: "251",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AGATA TEXTIL COMERCIO DE TECIDOS LTDA",
        cnpj: "35.020.889/0001-53",
        zipcode: "03025-000",
        address: "R ALMIRANTE BARROSO",
        number: "251 terreo",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PAUL LABEL ROTULOS e ETIQUETAS ADESIVAS - EIRELI",
        cnpj: "03.812.436/0001-73",
        zipcode: "08050-290",
        address: "R CARVALHO DO BRASIL",
        number: "296",
        district: "JARDIM DAS CAMELIAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MARIA FERREIRA DE LACERDA",
        cnpj: "39.346.163/0001-66",
        zipcode: "05133-000",
        address: "R JOAQUIM OLIVEIRA FREITAS",
        number: "206",
        district: "VILA MANGALOT",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MC MAIS CONTABILIDADE S/S",
        cnpj: "03.712.968/0001-39",
        zipcode: "02464-100",
        address: "AV IMIRIM",
        number: "904",
        district: "IMIRIM",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "R4 INDUSTRIA E COMERCIO DE EQUIPAMENTOS DE SEGURANCA EIRELI",
        cnpj: "18.009.981/0001-01",
        zipcode: "08584-420",
        address: "R CANA VERDE",
        number: "110",
        district: "JARDIM SILVESTRE",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "CONSORCIO URQ EA CACHOEIRA ESPRAIADA",
        cnpj: "39.664.620/0001-60",
        zipcode: "01452-910",
        address: "AV BRIG FARIA LIMA",
        number: "1931,ANDAR 4 SALA 1",
        district: "JARDIM PAULISTANO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONSORCIO URQ EA PIRAJUSSARA",
        cnpj: "39.322.562/0001-97",
        zipcode: "01452-910",
        address: "AV BRIG FARIA LIMA",
        number: "1931,ANDAR 4 SALA 1",
        district: "JARDIM PAULISTANO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VENERAVEL E ARQ ORDEM 3 DE N S DO MONTE DO CARMO",
        cnpj: "33.644.378/0001-87",
        zipcode: "20230-010",
        address: "R RIACHUELO",
        number: "43",
        district: "LAPA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "EMPORIO TEXTIL LTDA",
        cnpj: "32.165.596/0001-76",
        zipcode: "03025-020",
        address: "R MAJ MARCELINO",
        number: "99",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO TUIUTI TRADE CENTER",
        cnpj: "67.132.217/0001-26",
        zipcode: "08210-040",
        address: "R TUIUTI",
        number: "1983",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "DAMA LESTE SUPERMERCADO LTDA",
        cnpj: "42.337.480/0001-20",
        zipcode: "03803-020",
        address: "R DR JOAQUIM AUGUSTO DE CAMARGO",
        number: "516",
        district: "PARQUE BOTURUSSU",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AMAZONAS FRANCE COMERCIO DE VEICULOS E PECAS LTDA",
        cnpj: "31.135.931/0003-92",
        zipcode: "03102-004",
        address: "AV ALCANTARA MACHADO",
        number: "2162",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FRIGOCAR INDUSTRIA E COMERCIO DE CARROCERIAS E CAMARAS FRIGORIFICAS LTDA.",
        cnpj: "11.704.388/0001-28",
        zipcode: "13295-000",
        address: "R ALEXANDRINA MATHIAS DE OLIVEIRA",
        number: "88",
        district: "SAO ROQUE DA CHAVE",
        city: "Itupeva ",
        state: "SP"
    },
    {
        name: "GRUPO X TRANSPORTES LTDA",
        cnpj: "41.541.486/0001-52",
        zipcode: "02550-060",
        address: "R SERGIO FERREIRA",
        number: "27",
        district: "LIMAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ADG TRANSPORTES LTDA",
        cnpj: "07.577.937/0001-73",
        zipcode: "07231-000",
        address: "AV NOVA CUMBICA",
        number: "1170",
        district: "VILA NOVA CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "C. R. N. DE FIGUEIREDO CONGELADOS",
        cnpj: "05.373.228/0001-40",
        zipcode: "08599-350",
        address: "R RIO ARAGUAIA",
        number: "87",
        district: "VILA NELY",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "PAO DE QUEIJO CASEIRO MINEIRAO LTDA",
        cnpj: "07.133.342/0001-29",
        zipcode: "08599-680",
        address: "R GAMA, GALPAO2",
        number: "54",
        district: "UNA",
        city: "Itaquaquecetuba ",
        state: "SP"
    },
    {
        name: "ASSOCIACAO BENEFICENTE JARDIM DAS NUVENS",
        cnpj: "07.358.517/0003-68",
        zipcode: "04455-180",
        address: "R SARG OLICIO ALVES",
        number: "97",
        district: "VILA CAMPO GRANDE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BURGER DA RUA LANCHES LTDA",
        cnpj: "34.662.655/0001-47",
        zipcode: "04087-010",
        address: "R CADINEUS",
        number: "19",
        district: "INDIANOPOLIS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "DeP OUTSOURCING E DESIGNER LTDA",
        cnpj: "27.757.130/0001-20",
        zipcode: " 06708-220 ",
        address: "R NEMITALA",
        number: " 123 ",
        district: " PARQUE SAO GEORGE ",
        city: " Cotia ",
        state: " SP "
    },
    {
        name: "LMP ESCOLA DE EDUCACAO INFANTIL, ENSINO FUNDAMENTAL E ENSINO MEDIO LTDA",
        cnpj: "35.805.545/0001-50",
        zipcode: "06423-150",
        address: "EST DOUTOR YOJIRO TAKAOKA",
        number: "3900",
        district: "ALDEIA DA SERRA",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO STELA MARIS",
        cnpj: "67.354.035/0001-08",
        zipcode: "01225-001",
        address: "RUA FREDERICO ABRANCHES",
        number: "389",
        district: "SANTA CECILIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "DR. BHOREST INDUSTRIA E COMERCIO DE MASSAS LTDA",
        cnpj: "34.299.718/0001-42",
        zipcode: "12948-100",
        address: "Rua Anísio Vieira da Silva",
        number: "500",
        district: "Rosário",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO ST. JOHN",
        cnpj: "07.940.436/0001-00",
        zipcode: "05006-000",
        address: "Rua Itapicuru",
        number: "699",
        district: "Perdizes",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SPONSOR GESTAO EMPRESARIAL, SERVICOS E TECNOLOGIA LTDA",
        cnpj: "09.469.405/0001-48",
        zipcode: "06708-220",
        address: "Rua Nemitala",
        number: "123",
        district: "Parque São George",
        city: "Cotia",
        state: "sp"
    },
    {
        name: "CONSORCIO PERFORMANCE GUARULHOS",
        cnpj: "32.928.917/0001-47",
        zipcode: "01452-001",
        address: "Avenida Brigadeiro Faria Lima",
        number: "1931",
        district: "Jardim Paulistano",
        city: "São Paulo",
        state: "sp"
    },
    {
        name: "PERFIX INDUSTRIA E COMERCIO DE RETENTORES EIRELI",
        cnpj: "31.043.046/0001-11",
        zipcode: "02987-030",
        address: "Rua Antônio de Nápoli",
        number: "451",
        district: "Parada",
        city: "São Paulo ",
        state: "sp"
    },
    {
        name: "REAL MIX COMERCIO DE UTILIDADES EIRELI",
        cnpj: "22.575.230/0001-11",
        zipcode: "05640-001",
        address: "Avenida Doutor Guilherme Dumont Villares",
        number: "864",
        district: "Jardim Londrina",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FARABELLO´S ALIMENTACAO LTDA",
        cnpj: "27.209.596/0001-90",
        zipcode: "08598-000",
        address: "Estrada Municipal do Mandi, loja10 piso L2",
        number: "S/N",
        district: "Mandi",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "Razão social",
        cnpj: "CNPJ",
        zipcode: "CEP",
        address: "Logradouro",
        number: "Número",
        district: "Bairro",
        city: "Cidade",
        state: "Estado"
    },
    {
        name: "Razão social",
        cnpj: "CNPJ",
        zipcode: "CEP",
        address: "Logradouro",
        number: "Número",
        district: "Bairro",
        city: "Cidade",
        state: "Estado"
    },
    {
        name: "CONDOMINIO RESIDENCIAL MOEMA",
        cnpj: "06.698.982/0001-13",
        zipcode: "04514-040",
        address: "R ARAGUARI",
        number: "322",
        district: "MOEMA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "1000 PROJETOS DIAGRAMACAO, E COMUNICACAO VISUAL LTDA - EPP",
        cnpj: "09.317.084/0001-66",
        zipcode: "01239-001",
        address: "R ITAMBE",
        number: "341",
        district: "HIGIENOPOLIS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "15 TABELIAO DE NOTAS DA CAPITAL",
        cnpj: "45.564.911/0001-80",
        zipcode: "04548-005",
        address: "R DOUTOR CARDOSO DE MELO",
        number: "1855",
        district: "VILA OLIMPIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "DOIS POR UM COMUNICACAO E PRODUCOES LTDA",
        cnpj: "23.066.069/0001-13",
        zipcode: "04711-130",
        address: "AV DOUTOR CHUCRI ZAIDAN",
        number: "1550",
        district: "VILA SAO FRANCISCO (ZONA SUL)",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "3 SIL - SOLUCOES INTEGRADAS EM LOGISTICA DE FROTAS AUTOMOTIVAS LTDA.",
        cnpj: "07.409.720/0001-54",
        zipcode: "06455-000",
        address: "AL ARAGUAIA",
        number: "270",
        district: "ALPHAVILLE INDUSTRIAL",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "4UIT SERVICOS DE INFORMATICA LTDA",
        cnpj: "09.632.190/0001-34",
        zipcode: "05451-020",
        address: "R CAMINHA DE AMORIM",
        number: "261",
        district: "VILA MADALENA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "A & C CONSTRUCOES E SERVICOS EIRELI",
        cnpj: "04.693.484/0001-52",
        zipcode: "59616-000",
        address: "AV DA INTEGRACAO",
        number: "100",
        district: "SANTA DELMIRA",
        city: "Mossoró",
        state: "RN"
    },
    {
        name: "ABM A&B - INCORPORADORA IMOBILIARIA JUAZEIRO DO NORTE SPE LTDA*",
        cnpj: "21.820.001/0001-52",
        zipcode: "60150-190",
        address: "R MARCOS MACEDO",
        number: "1333",
        district: "ALDEOTA",
        city: "Fortaleza",
        state: "CE"
    },
    {
        name: "EDILENE MARTA FELICIANO - SERRALHERIA",
        cnpj: "04.784.250/0001-10",
        zipcode: "01125-001",
        address: "R DA GRACA",
        number: "951",
        district: "BOM RETIRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "A S NASCIMENTO AMBIENTAL SERVICOS URBANOS EIRELI",
        cnpj: "10.723.250/0001-03",
        zipcode: "18683-732",
        address: "R ALFREDO CHIARI",
        number: "378",
        district: "JARDIM EUROPA",
        city: "Lençóis Paulista",
        state: "SP"
    },
    {
        name: "A & C COMERCIAL LTDA - EPP",
        cnpj: "14.590.421/0001-24",
        zipcode: "08553-620",
        address: "R GRADAUS",
        number: "25",
        district: "JARDIM SANTA HELENA",
        city: "Poá",
        state: "SP"
    },
    {
        name: "A.R.S. BRASIL INDUSTRIA E COMERCIO, DISTRIBUICAO DE ROUPAS E BRINDES LTDA - EPP",
        cnpj: "24.795.369/0001-04",
        zipcode: "08210-430",
        address: "R GREGORIO RAMALHO",
        number: "12",
        district: "ITAQUERA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ASSOCIACAO DOS ADVOGADOS DE SAO PAULO",
        cnpj: "62.500.855/0001-39",
        zipcode: "01012-001",
        address: "R ALVARES PENTEADO",
        number: "151",
        district: "CENTRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ABRAL GRAFICA & EDITORA LTDA - ME",
        cnpj: "51.003.317/0001-12",
        zipcode: "08010-420",
        address: "R INHABATA",
        number: "77",
        district: "SAO MIGUEL PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "A & B - ASSISTENCIA TECNICA EM EQUIPAMENTOS LTDA - ME",
        cnpj: "09.163.792/0001-90",
        zipcode: "07025-000",
        address: "AV GUARULHOS",
        number: "1282",
        district: "VILA AUGUSTA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "BODY HEALTH ACADEMIA LTDA - ME",
        cnpj: "26.295.208/0001-79",
        zipcode: "07411-220",
        address: "Rua Santo Antonio do Catigeró",
        number: "475/479 SALOES 3 e 4",
        district: "Jordanópolis",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "ACADEMIA ESPACO FISICO LTDA - ME",
        cnpj: "02.135.985/0001-98",
        zipcode: "05888-010",
        address: "R ANTONIO FORLENZA",
        number: "339",
        district: "PQ FERNANDA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "RODRIGO CARVALHAES CARDOZO - ME",
        cnpj: "09.515.950/0001-23",
        zipcode: "07400-000",
        address: "EST DO LIMOEIRO 381",
        number: "",
        district: "JD LIMOEIRO",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "PAULO HENRIQUE MIGUEL - ME",
        cnpj: "09.121.175/0001-21",
        zipcode: "08745-140",
        address: "AV SARAIVA 159",
        number: "",
        district: "BRAS CUBAS",
        city: "Mogi das Cruzes",
        state: "SP"
    },
    {
        name: "ACADEMIA SOL FITNESS LTDA - ME",
        cnpj: "10.804.008/0001-64",
        zipcode: "05778-280",
        address: "R PADRE JOAQUIM CORREIA DE ALMEIDA",
        number: "241",
        district: "PARQUE ARARIBA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ASSOCIACAO DA CASA DOS DEFICIENTES DE ERMELINO MATARAZZO",
        cnpj: "61.058.475/0003-95",
        zipcode: "03810-150",
        address: "R JOSE LOPES RODRIGUES",
        number: "510",
        district: "JARDIM BELEM",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ASSOCIACAO DA CASA DOS DEFICIENTES DE ERMELINO MATARAZZO",
        cnpj: "61.058.475/0002-04",
        zipcode: "08010-290",
        address: "R JOSE OTONI",
        number: "256",
        district: "SAO MIGUEL PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ASSOCIACAO COMERCIAL E EMPRESARIAL DE GUARULHOS*",
        cnpj: "44.264.331/0001-04",
        zipcode: "07197-010",
        address: "AV JOAO BERNARDO MEDEIROS",
        number: "278",
        district: "JARDIM BOM CLIMA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "ASSOCIAÇAO DA CASA DOS DEFICIENTES DE ERM MATARAZZO",
        cnpj: "61.058.475/0003-95",
        zipcode: "03810-150",
        address: "Rua José Lopes Rodrigues",
        number: "510",
        district: "Jardim Matarazzo",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ACETECH INDUSTRIA E COMERCIO DE EMBALAGENS E ADESIVOS EIRELI",
        cnpj: "67.184.853/0001-00",
        zipcode: "12926-677",
        address: "R DA TECNOLOGIA",
        number: "400",
        district: "DO UBERABA",
        city: "Bragança Paulista",
        state: "SP"
    },
    {
        name: "ACMS SERVICOS DE LOGISTICA E CARGA E DESCARGA EIRELI",
        cnpj: "59.650.440/0001-37",
        zipcode: "07180-010",
        address: "AVENIDA JOAO VELOSO DA SILVA",
        number: "387",
        district: "CIDADE JARDIM CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "ACORDE CORRETORA DE SEGUROS LTDA - ME",
        cnpj: "04.805.087/0001-25",
        zipcode: "03658-010",
        address: "R ITINGUCU",
        number: "1219",
        district: "VILA RE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ACOS PREMIUM PRODUTOS SIDERURGICOS LTDA",
        cnpj: "01.273.365/0001-52",
        zipcode: "07034-090",
        address: "Rua José Marques Prata",
        number: "450",
        district: "Várzea do Palácio",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "DATA KING DISTRIBUIDORA DE ARTIGOS PLASTICOS LTDA",
        cnpj: "21.847.917/0001-82",
        zipcode: "07024-020",
        address: "R CARLOS LEAL EVANS 215 GP 02",
        number: "",
        district: "JD SANTA FRANCISCA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "ACP EQUIPAMENTOS INDUSTRIAIS LTDA - EPP",
        cnpj: "00.411.438/0001-62",
        zipcode: "09990-270",
        address: "R BOROROS",
        number: "273",
        district: "VILA CONCEICAO",
        city: "Diadema",
        state: "SP"
    },
    {
        name: "ACP MERCANTIL INDUSTRIAL LTDA *",
        cnpj: "03.235.174/0001-21",
        zipcode: "07024-020",
        address: "R CARLOS LEAL EVANS",
        number: "215",
        district: "JARDIM SANTA FRANCISCA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "INSTITUTO DE VALORIZACAO DA SAUDE ´´ACQUA SPORT´´ LTDA",
        cnpj: "45.988.193/0001-79",
        zipcode: "07095-150",
        address: "R JAIMINHO",
        number: "75",
        district: "VILA PROGRESSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "INSTITUTO DE VALORIZACAO DA SAUDE ´´ACQUA SPORT´´ LTDA",
        cnpj: "45.988.193/0001-79",
        zipcode: "07095-150",
        address: "R JAIMINHO",
        number: "75",
        district: "VILA PROGRESSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "ACRILON INDUSTRIA E COMERCIO ACRILICOS LTDA - ME",
        cnpj: "00.614.400/0001-97",
        zipcode: "08010-390",
        address: "R GUARACAPA",
        number: "260",
        district: "SAO MIGUEL PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ACTIVA COMERCIO DE EQUIPAMENTOS INDUSTRIAIS LTDA - ME",
        cnpj: "08.685.244/0001-67",
        zipcode: "03810-010",
        address: "R PADRE SERAFIM LEITE",
        number: "200",
        district: "JARDIM BELEM",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AD COMERCIO DE PLASTICOS E PAPEIS - EIRELI - EPP",
        cnpj: "76.653.989/0001-02",
        zipcode: "07176-140",
        address: "R SANTA MARIA",
        number: "411",
        district: "VILA NOVA BONSUCESSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "ADMALL GESTAO COMERCIAL LTDA",
        cnpj: "15.247.962/0001-17",
        zipcode: "04571-000",
        address: "AVENIDA ENGENHEIRO LUIZ CARLOS BERRINI",
        number: "1178",
        district: "BROOKLIN",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO ITAPUAN",
        cnpj: "54.203.351/0001-29",
        zipcode: "04006-003",
        address: "Rua Doutor Tomás Carvalhal",
        number: "808",
        district: "Paraíso",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ADORNO & CARVALHO COMERCIO DE ESPUMAS LTDA.",
        cnpj: "02.899.014/0001-14",
        zipcode: "03371-000",
        address: "AV MONTE MAGNO",
        number: "547",
        district: "CHACARA MAFALDA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MW CENTRO DE FORMAÇAO DE CONDUTORES B S/S LTDA",
        cnpj: "02.188.073/0001-84",
        zipcode: "05532-040",
        address: "R BENJAMIN MANSUR 327",
        number: "",
        district: "BUTANTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "ADVANCED INFORMATICA LTDA",
        cnpj: "58.456.534/0001-07",
        zipcode: "02037-001",
        address: "R DR OLAVO EGIDIO",
        number: "921",
        district: "SANTANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AEC CENTRO DE CONTATOS S/A",
        cnpj: "02.455.233/0026-62",
        zipcode: "04036-100",
        address: "R DOMINGOS DE MORAIS",
        number: "2742",
        district: "VILA MARIANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AEC CENTRO DE CONTATOS S/A",
        cnpj: "02.455.233/0007-08",
        zipcode: "31210-150",
        address: "R BONFIM",
        number: "280",
        district: "BONFIM",
        city: "Belo Horizonte",
        state: "MG"
    },
    {
        name: "AEC CENTRO DE CONTATOS S/A",
        cnpj: "02.455.233/0029-05",
        zipcode: "20211-178",
        address: "R DOM MARCOS BARBOSA",
        number: "2",
        district: "CIDADE NOVA",
        city: "Rio de Janeiro",
        state: "RJ"
    },
    {
        name: "AESP ODONTO ASSISTENCIA EM SAO PAULO DE ODONTOLOGIA S/S LTDA",
        cnpj: "03.694.367/0001-40",
        zipcode: "06454-050",
        address: "AL GRAJAU",
        number: "60",
        district: "ALPHAVILLE CENTRO INDUSTRIAL E EMPRESARIAL/AL",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "A F MARQUES HIDRAULICA E ELETRICA LTDA - EPP",
        cnpj: "74.285.792/0001-24",
        zipcode: "08597-620",
        address: "Rua Flor de Lis",
        number: "1127",
        district: "Quinta da Boa Vista (Residencial)",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "ANTONIO FRANCISCO NETO TRANSPORTES",
        cnpj: "10.454.850/0001-13",
        zipcode: "01325-001",
        address: "R CONSELHEIRO RAMALHO",
        number: "499",
        district: "BELA VISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "A. F. RIBEIRO CONFECCOES E SERVICOS - ME",
        cnpj: "03.488.405/0001-09",
        zipcode: "03807-060",
        address: "R OSCAR MARIANO DA SILVA",
        number: "217",
        district: "VILA ROBERTINA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AGAFER COM SUCATAS DE FERRO PLAST PAPEL E PAPELAO",
        cnpj: "54.627.427/0001-43",
        zipcode: "03605-050",
        address: "Rua Mário de Castro",
        number: "99",
        district: "Penha de França",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LINKA PRODUCOES LTDA. - EPP",
        cnpj: "09.152.332/0001-66",
        zipcode: "04039-030",
        address: "R PEDRO DE TOLEDO",
        number: "80",
        district: "VILA CLEMENTINO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AGENOR GALLO",
        cnpj: "27.539.385/804-",
        zipcode: "03808-170",
        address: "R VICTORIA SIMIONATO 69",
        number: "",
        district: "VL PARANAGUA",
        city: "SP",
        state: "SP"
    },
    {
        name: "AGRO INDUSTRIAS DO VALE DO SAO FRANCISCO SA AGROVALE",
        cnpj: "13.642.699/0001-35",
        zipcode: "48905-350",
        address: "FAZ MASSAYO",
        number: "S N",
        district: "JUAZEIRO",
        city: "Juazeiro",
        state: "BA"
    },
    {
        name: "AGUIA FER INDUSTRIA E COMERCIO DE FERRO E ACO LTDA.",
        cnpj: "55.585.756/0001-31",
        zipcode: "03807-300",
        address: "R FELIPE JOSE DE FIGUEIREDO",
        number: "494",
        district: "VILA PARANAGUA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "F. AGUIAR TRANSPORTES LTDA",
        cnpj: "07.805.269/0002-75",
        zipcode: "07222-020",
        address: "R CECILIA ROIZEN",
        number: "913",
        district: "CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "AIR LIQUIDE BRASIL LTDA",
        cnpj: "00.331.788/0003-80",
        zipcode: "08686-000",
        address: "AV JORGE BEI MALUF",
        number: "2125",
        district: "VL THEODORO",
        city: "Suzano",
        state: "SP"
    },
    {
        name: "AIR-SEL AR CONDICIONADO LTDA",
        cnpj: "00.093.791/0001-41",
        zipcode: "04136-020",
        address: "R PORANGABA",
        number: "333",
        district: "BOSQUE DA SAUDE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ALACER INDUSTRIA ELETRONICA LTDA",
        cnpj: "04.192.554/0001-99",
        zipcode: "04383-080",
        address: "R BATISTA DE MELO",
        number: "113",
        district: "JARDIM JABAQUARA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ALCANFERR FERRAMENTAS DE CORTE LTDA",
        cnpj: "00.487.095/0001-10",
        zipcode: "02733-000",
        address: "R ESTEVAO FURQUIM",
        number: "461",
        district: "VILA SAO VICENTE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ALFA SEVEN EMBALAGENS INDUSTRIA E COMERCIO LTDA",
        cnpj: "14.078.994/0001-73",
        zipcode: "37640-000",
        address: "R JOAO EGIDIO",
        number: "96",
        district: "JARDIM MONTENEGRO",
        city: "Extrema",
        state: "MG"
    },
    {
        name: "JOAO VITOR ARGOLO MEIRELES 05129607554",
        cnpj: "24.071.434/0001-40",
        zipcode: "",
        address: "",
        number: "",
        district: "",
        city: "",
        state: ""
    },
    {
        name: "L C DO NASCIMENTO ENGENHARIA EIRELI",
        cnpj: "28.087.944/0001-67",
        zipcode: "22720-010",
        address: "ESTRADA DO RIO GRANDE",
        number: "1621",
        district: "TAQUARA",
        city: "Rio de Janeiro",
        state: "RJ"
    },
    {
        name: "ALIANCA TECNOINFO LTDA",
        cnpj: "11.845.592/0001-69",
        zipcode: "07085-035",
        address: "R MARIA DIAS HOG",
        number: "141",
        district: "PARQUE CONTINENTAL II",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "ALL BRAS SHOPPING CENTER LTDA.",
        cnpj: "12.667.672/0001-34",
        zipcode: "03009-010",
        address: "R RODRIGUES DOS SANTOS",
        number: "91",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ASSOCIAÇAO DOS EMPREENDEDORES E CESSIONARIOS DO SHOPPING ALL BRAS",
        cnpj: "19.394.735/0001-75",
        zipcode: "03009-010",
        address: "Rua Rodrigues dos Santos",
        number: "91",
        district: "Brás",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ALL SERVICE INSTALACOES E SERVICOS LTDA",
        cnpj: "14.237.012/0001-49",
        zipcode: "07030-230",
        address: "R ANTONIO LIESSI",
        number: "96",
        district: "PARQUE GONCALVES JUNIOR",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "ALPHA EMPRESARIAL RECURSOS HUMANOS LTDA",
        cnpj: "10.265.145/0001-78",
        zipcode: "02119-000",
        address: "R MARGARINOS TORRES",
        number: "746",
        district: "VILA MARIA BAIXA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "GRADEMAXX INDUSTRIA E COMERCIO DE GRADES EIRELI - EPP",
        cnpj: "18.092.508/0001-22",
        zipcode: "07210-250",
        address: "EST VELHA GUARULHOS SÃO MIGUEL 1111",
        number: "",
        district: "CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "ALUCOTEX INTERMEDIACAO NO COMERCIO DE REVESTIMENTOS E ACESSORIOS EIRELI - EPP",
        cnpj: "07.669.538/0001-32",
        zipcode: "12210-131",
        address: "AV DOUTOR JOAO GUILHERMINO",
        number: "261",
        district: "CENTRO",
        city: "São José dos Campos",
        state: "SP"
    },
    {
        name: "CDA COMERCIO INDUSTRIA DE METAIS LTDA",
        cnpj: "07.288.647/0004-52",
        zipcode: "09210-580",
        address: "AV DOS ESTADOS",
        number: "3913",
        district: "SANTA TEREZINHA",
        city: "Santo André",
        state: "SP"
    },
    {
        name: "ALUMILESTE INDUSTRIA E COMERCIO EIRELI",
        cnpj: "55.653.349/0002-03",
        zipcode: "13234-649",
        address: "Estrada da Bragantina",
        number: "7",
        district: "Pau Arcado",
        city: "Campo Limpo Paulista",
        state: "SP"
    },
    {
        name: "MARIA DALVA FERNANDES DO NASCIMENTO-CONFECCOES",
        cnpj: "11.246.625/0001-54",
        zipcode: "03609-080",
        address: "R CERQUILHO",
        number: "255",
        district: "VILA SAO GERALDO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MARIA DALVA FERNANDES DO NASCIMENTO-CONFECCOES",
        cnpj: "11.246.625/0001-54",
        zipcode: "03609-080",
        address: "R CERQUILHO",
        number: "255",
        district: "VILA SAO GERALDO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ALVALOG TRANSPORTES E LOGISTICA EIRELI - EPP",
        cnpj: "10.824.619/0001-74",
        zipcode: "07231-370",
        address: "Rua Doutor Vital Brasil",
        number: "92",
        district: "Vila Nova Cumbica",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "ALVES DE CUNHA RESTAURANTE LTDA - ME",
        cnpj: "03.955.579/0001-34",
        zipcode: "01333-020",
        address: "R CARLOS SAMPAIO",
        number: "48",
        district: "BELA VISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AMAX ELETRINFORMATICA LTDA",
        cnpj: "11.096.884/0001-46",
        zipcode: "03669-030",
        address: "R MARCIANO CAPELLA",
        number: "33",
        district: "VILA RE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AMAZON VEICULOS E PECAS LTDA",
        cnpj: "09.448.344/0004-85",
        zipcode: "05016-090",
        address: "Avenida Sumaré",
        number: "611",
        district: "Perdizes",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AMAZON VEICULOS E PECAS LTDA",
        cnpj: "09.448.344/0002-13",
        zipcode: "03155-000",
        address: "Avenida Professor Luiz Ignácio Anhaia Mello",
        number: "1511",
        district: "Vila Prudente",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AMAZON VEICULOS E PECAS LTDA",
        cnpj: "09.448.344/0001-32",
        zipcode: "03102-001",
        address: "AV ALCANTARA MACHADO",
        number: "638",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AMAZONAS LESTE LTDA",
        cnpj: "68.400.449/0018-29",
        zipcode: "03295-000",
        address: "Avenida Professor Luiz Ignácio Anhaia Mello",
        number: "5657",
        district: "Vila Graciosa",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AMAZONAS FRANCE COM DE VEICULOS E PECAS LTDA*",
        cnpj: "31.135.931/0001-20",
        zipcode: "02012-010",
        address: "AVENIDA SANTOS DUMONT",
        number: "N.2260",
        district: "SANTANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AMAZONAS LESTE LTDA*",
        cnpj: "68.400.449/0020-43",
        zipcode: "02012-010",
        address: "AVENIDA SANTOS DUMONT",
        number: "2260",
        district: "SANTANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AMAZONAS MARMORES E GRANITOS LTDA - EPP",
        cnpj: "00.006.299/0001-91",
        zipcode: "05527-120",
        address: "R DR EZEQUIEL P R JUNIOR",
        number: "31",
        district: "JD CELESTE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AMAZONAS PEDRAS LTDA - EPP",
        cnpj: "61.313.789/0001-25",
        zipcode: "05512-100",
        address: "AV PROF FRANCISCO MORATO",
        number: "1074",
        district: "CAXINGUI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AMAZONAS PRIME VEICULOS E PECAS LTDA*",
        cnpj: "23.820.026/0002-62",
        zipcode: "02511-000",
        address: "AVENIDA BRAZ LEME",
        number: "1790",
        district: "CASA VERDE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AMBER GRAFICA E EDITORA LTDA - EPP",
        cnpj: "01.579.616/0001-21",
        zipcode: "03317-080",
        address: "R PEDRO BELLEGARDE",
        number: "321",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "RIO SÃO FRANCISCO ASSESSORIA COMERCIAL E FINANCEIRA LTDA",
        cnpj: "05.442.338/0002-06",
        zipcode: "01313-000",
        address: "R 15 DE NOVEMBRO 228 5 ANDAR",
        number: "",
        district: "CENTRO",
        city: "SP",
        state: "SP"
    },
    {
        name: "AMENEG - ASSISTENCIA MEDICA E NEFROLOGICA DE GUARULHOS LTDA*",
        cnpj: "59.650.366/0001-59",
        zipcode: "07095-140",
        address: "R MARRET",
        number: "425",
        district: "VILA PROGRESSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "J A C SILVA",
        cnpj: "21.132.032/0001-10",
        zipcode: "07180-000",
        address: "AV MONTEIRO LOBATO 4550 GP 25",
        number: "",
        district: "JD CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "AMF INDUSTRIA DE FILTROS - EIRELI - EPP",
        cnpj: "65.993.339/0001-81",
        zipcode: "07222-010",
        address: "AV PATOS",
        number: "570",
        district: "CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "AMMA-LIMP IND E COM DE PRODUTOS DE LIMPEZA LTDA - ME",
        cnpj: "68.290.840/0001-70",
        zipcode: "08041-230",
        address: "R IBA-GUACU",
        number: "14",
        district: "S MIGUEL PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CHEZ ANA DOCERIA LTDA*",
        cnpj: "08.822.402/0001-83",
        zipcode: "04531-000",
        address: "R PEDROSO ALVARENGA",
        number: "512",
        district: "ITAIM BIBI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MARLENE GRANIG",
        cnpj: "01.326.208/0001-68",
        zipcode: "07180-010",
        address: "AV JOAO VELOSO DA SILVA",
        number: "387",
        district: "CIDADE JARDIM CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO TAORMINA",
        cnpj: "03.111.185/0000-8",
        zipcode: "04116-240",
        address: "R GALOFRE 35",
        number: "",
        district: "CHACARA KLABIM",
        city: "SP",
        state: "SP"
    },
    {
        name: "COMPARTILHAR APP LTDA",
        cnpj: "15.390.611/0001-60",
        zipcode: "07012-020",
        address: "R DOUTOR RAMOS DE AZEVEDO",
        number: "159",
        district: "CENTRO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "ANAMAR COMERCIO E TRANSPORTES LTDA",
        cnpj: "56.697.287/0001-05",
        zipcode: "09450-000",
        address: "AV JEAN LIEUTAUD",
        number: "433",
        district: "JARDIM SANTA TEREZA",
        city: "Rio Grande da Serra",
        state: "SP"
    },
    {
        name: "ANARIE BRASIL LTDA. - EPP",
        cnpj: "66.564.980/0001-63",
        zipcode: "02316-000",
        address: "R IMBIRAS",
        number: "117",
        district: "VILA MAZZEI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ASSOCIACAO NACIONAL DOS DISTRIBUIDORES DE AUTOPECAS- AN",
        cnpj: "43.215.813/0001-01",
        zipcode: "01311-919",
        address: "AV PAULISTA",
        number: "1009",
        district: "CERQUEIRA CESAR",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "A. A. DOS SANTOS ANDRADE ARMARINHOS - ME",
        cnpj: "01.961.455/0001-36",
        zipcode: "08111-230",
        address: "R COLONIA DASSUNCAO",
        number: "644",
        district: "JD DAS OLIVEIRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ANEDRO INDUSTRIA METALURGICA LTDA",
        cnpj: "60.037.280/0001-34",
        zipcode: "03518-020",
        address: "R SERVULO DE CASTRO",
        number: "40",
        district: "VILA MATILDE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ANGLO AMERICAN MINERIO DE FERRO BRASIL S/A",
        cnpj: "02.359.572/0003-59",
        zipcode: "35860-000",
        address: "FAZ JARDIM",
        number: "S/N",
        district: "SAO SEBASTIAO DO BOM SUCESSO",
        city: "Conceição do Mato Dentro",
        state: "MG"
    },
    {
        name: "JORGE ANSARAH & FILHOS LTDA",
        cnpj: "01.245.594/0001-63",
        zipcode: "01021-000",
        address: "R 25 DE MARÇO 533",
        number: "",
        district: "SE",
        city: "SP",
        state: "SP"
    },
    {
        name: "JORGE ANSARAH & CIA LTDA",
        cnpj: "61.419.610/0001-19",
        zipcode: "01021-000",
        address: "R 25 DE MARÇO 537",
        number: "",
        district: "SE",
        city: "SP",
        state: "SP"
    },
    {
        name: "ASSOCIACAO DE PAIS E AMIGOS DOS EXCEPCIONAIS DE ITAQUAQUECETUBA",
        cnpj: "01.252.605/0001-32",
        zipcode: "08572-790",
        address: "R DISTRITO FEDERAL",
        number: "205",
        district: "VILA SAO JUDAS TADEU",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "DIEGO NASCIMENTO 35351612828",
        cnpj: "29.567.445/0001-30",
        zipcode: "02985-000",
        address: "RUA TUFIK MEREB",
        number: "556",
        district: "JARDIM PIRITUBA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AQCEZ SOLUCOES INTEGRADAS LTDA",
        cnpj: "17.616.245/0001-40",
        zipcode: "05538-000",
        address: "R DOUTOR ULPIANO DA COSTA MANSO",
        number: "85",
        district: "JARDIM PERI PERI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AQUARIO DE UBATUBA BAR, VESTUARIO E ACESSORIOS LTDA",
        cnpj: "23.908.156/0001-70",
        zipcode: "11680-000",
        address: "R GUARANI",
        number: "859",
        district: "ITAGUA",
        city: "Ubatuba",
        state: "SP"
    },
    {
        name: "AR MANUTENCAO E MONTAGEM DE AR CONDICIONADO EIRELI",
        cnpj: "07.710.099/0001-64",
        zipcode: "05443-000",
        address: "R NATINGUI",
        number: "662",
        district: "VILA BEATRIZ",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "A.R.PRESTACAO DE SERVICOS PARA INDUSTRIA LTDA.",
        cnpj: "11.041.557/0001-97",
        zipcode: "03805-070",
        address: "R JOAO ANTONIO ANDRADE",
        number: "92",
        district: "PARQUE BOTURUSSU",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AUREA ALIMENTACAO E SERVICOS EIRELI*",
        cnpj: "02.526.623/0001-28",
        zipcode: "01105-000",
        address: "Rua João Teodoro",
        number: "413",
        district: "Brás",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AR SISTEMAS TERMICOS LTDA",
        cnpj: "07.721.595/0001-13",
        zipcode: "05443-000",
        address: "R NATINGUI",
        number: "668",
        district: "VILA BEATRIZ",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ARCHI FIRE PROTECTION SYSTEMS LTDA",
        cnpj: "29.786.034/0001-35",
        zipcode: "09726-430",
        address: "R FLAVIO FONGARO",
        number: "34",
        district: "JARDIM DO MAR",
        city: "São Bernardo do Campo",
        state: "SP"
    },
    {
        name: "ARCO-IRIS SINALIZACAO VIARIA LTDA",
        cnpj: "74.434.911/0001-63",
        zipcode: "02730-060",
        address: "R BARNABE COUTINHO",
        number: "271",
        district: "FREGUESIA DO O",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ARCUS CONSTRUTORA E INCORPORADORA EIRELI",
        cnpj: "30.928.817/0001-95",
        zipcode: "09370-360",
        address: "AV QUEIROZ PEDROSO",
        number: "399",
        district: "JARDIM PEDROSO",
        city: "Mauá",
        state: "SP"
    },
    {
        name: "ABBAS & FERREIRA SOCIEDADE DE ADVOGADOS",
        cnpj: "21.399.390/0001-94",
        zipcode: "01311-100",
        address: "AV PAULISTA",
        number: "807",
        district: "BELA VISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SERGIO LUIS YONOGUTY ME",
        cnpj: "11.861.285/0001-71",
        zipcode: "04048-001",
        address: "R DAS ROSAS 565",
        number: "",
        district: "MIRANDOPOLIS",
        city: "SP",
        state: "SP"
    },
    {
        name: "ARGONAUTA COMERCIO E SERVICOS OCEANOGRAFICOS LTDA",
        cnpj: "00.643.743/0001-80",
        zipcode: "11680-000",
        address: "AV NOVE DE JULHO",
        number: "680",
        district: "CENTRO",
        city: "Ubatuba",
        state: "SP"
    },
    {
        name: "ARGOTEC INTELIGENCIA EMPRESARIAL S.A.",
        cnpj: "12.580.915/0001-00",
        zipcode: "01311-000",
        address: "AV PAULISTA",
        number: "171",
        district: "BELA VISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ARICAN EQUIPAMENTOS DE PROTECAO E MANUTENCAO INDUSTRIAL LTDA.",
        cnpj: "72.804.057/0002-35",
        zipcode: "07220-000",
        address: "AV SANTOS DUMONT",
        number: "1483",
        district: "CIDADE INDUSTRIAL SATELITE DE SAO PAULO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "ARILUB DISTRIBUIDOR DE OLEOS LUBRIFICANTES E ADITIVOS LTDA",
        cnpj: "41.389.388/0001-41",
        zipcode: "60025-062",
        address: "R BARAO DO RIO BRANCO",
        number: "2266",
        district: "CENTRO",
        city: "Fortaleza",
        state: "CE"
    },
    {
        name: "ARK DUTOS E ESTRUTURAS METALICAS - EIRELI - ME",
        cnpj: "19.438.656/0001-19",
        zipcode: "06213-080",
        address: "R ARNALDO DE OLIVEIRA BARRETO",
        number: "560",
        district: "PRESIDENTE ALTINO",
        city: "Osasco",
        state: "SP"
    },
    {
        name: "ARMAZEM 1001 COMERCIO DE CESTAS BASICAS E DE NATAL LTDA.",
        cnpj: "22.956.357/0001-80",
        zipcode: "06703-600",
        address: "AV VASCO MASSAFELI",
        number: "1000",
        district: "JARDIM MARIA TEREZA",
        city: "Cotia",
        state: "SP"
    },
    {
        name: "DISTRIBUIDORA RIO COTIA EIRELI",
        cnpj: "06.300.320/0001-43",
        zipcode: "03064-000",
        address: "AV CELSO GARCIA",
        number: "3884",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ARPRON REFRIGERACAO E AR CONDICIONADO EIRELI",
        cnpj: "11.734.802/0001-41",
        zipcode: "08568-700",
        address: "R CAPITAO PEDRO ESPERIDIAO HOFFER",
        number: "525",
        district: "JD. NOVA POA",
        city: "Poá",
        state: "SP"
    },
    {
        name: "CONDOMINIO RESIDENCIAL ARSENAL LIFE",
        cnpj: "10.834.779/0001-02",
        zipcode: "24755-000",
        address: "R QUINZE DE NOVEMBRO",
        number: "S/N",
        district: "TRIBOBO",
        city: "São Gonçalo",
        state: "RJ"
    },
    {
        name: "ARTSANA BRASIL LTDA",
        cnpj: "02.340.424/0001-20",
        zipcode: "13069-096",
        address: "AV COMENDADOR ALADINO SELMI",
        number: "4630",
        district: "VILA SAN MARTIN",
        city: "Campinas",
        state: "SP"
    },
    {
        name: "ARTCONPRE INDUSTRIA DE ARTEFATOS DE CIMENTO LTDA - ME",
        cnpj: "07.729.193/0001-65",
        zipcode: "08579-000",
        address: "EST DO BONSUCESSO",
        number: "2070",
        district: "RIO ABAIXO",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "CAMISETAS BRASIL INDUSTRIA E COMERCIO LTDA",
        cnpj: "18.202.285/0001-09",
        zipcode: "08559-030",
        address: "R MARTINI",
        number: "410",
        district: "VILA JAU",
        city: "Poá",
        state: "SP"
    },
    {
        name: "ARTECH - COMPRA VENDA E INSTALACAO DE SOLUCOES EM SEGURANCA ELETRONICA LTDA - ME",
        cnpj: "13.437.547/0001-09",
        zipcode: "22745-271",
        address: "R ARAGUAIA",
        number: "1055",
        district: "FREGUESIA (JACAREPAGUA)",
        city: "Rio de Janeiro",
        state: "RJ"
    },
    {
        name: "EXPOART DISPLAYS IND DE ARTEFATOS PLASTICOS ARAME LTDA",
        cnpj: "10.276.096/0001-79",
        zipcode: "03276-110",
        address: "R PINTO DA LUZ 239",
        number: "",
        district: "VL IVONE",
        city: "SP",
        state: "SP"
    },
    {
        name: "ARTIS TECIDOS LTDA.",
        cnpj: "13.989.927/0001-48",
        zipcode: "03025-000",
        address: "R ALMIRANTE BARROSO",
        number: "278",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ARTSANA BRASIL LTDA - SJRPRETO",
        cnpj: "02.340.424/0023-36",
        zipcode: "15093-270",
        address: "Avenida Presidente Juscelino Kubitschek de Oliveira",
        number: "5000",
        district: "Residencial Eco Village I",
        city: "São José do Rio Preto",
        state: "SP"
    },
    {
        name: "ARTSANA BRASIL LTDA",
        cnpj: "02.340.424/0004-73",
        zipcode: "13024-001",
        address: "AV CORONEL SILVA TELLES",
        number: "170",
        district: "CAMBUI",
        city: "Campinas",
        state: "SP"
    },
    {
        name: "ARTSANA BRASIL LTDA",
        cnpj: "02.340.424/0001-20",
        zipcode: "04578-000",
        address: "Avenida das Nações Unidas",
        number: "10989",
        district: "Brooklin Paulista",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ARUJA EMPREENDIMENTOS LTDA",
        cnpj: "46.006.664/0001-69",
        zipcode: "01227-200",
        address: "AV ANGELICA",
        number: "2163",
        district: "CONSOLACAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ASSOCIACAO BENEFICENTE DE SAUDE DR. ARTHUR ALBERTO NARDY",
        cnpj: "05.951.279/0001-02",
        zipcode: "08940-000",
        address: "R SHIGEO MORI",
        number: "133",
        district: "CENTRO",
        city: "Biritiba-Mirim",
        state: "SP"
    },
    {
        name: "BARCELONA COMERCIO VAREJISTA E ATACADISTA S/A",
        cnpj: "07.170.943/0066-57",
        zipcode: "09111-340",
        address: "Rua Giovanni Battista Pirelli",
        number: "1221",
        district: "Vila Homero Thon",
        city: "Santo André",
        state: "SP"
    },
    {
        name: "BARCELONA COM VAREJISTA E ATACADISTA S/A",
        cnpj: "07.170.943/0081-96",
        zipcode: "08577-000",
        address: "Estrada São Paulo-Mogi",
        number: "3810",
        district: "Vila Monte Belo",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "BARCELONA COMERCIO VAREJISTA E ATACADISTA S/A",
        cnpj: "07.170.943/0021-55",
        zipcode: "02260-000",
        address: "Avenida Luís Stamatis",
        number: "35",
        district: "Vila Constança",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BARCELONA COMERCIO VAREJISTA E ATACADISTA S/A",
        cnpj: "07.170.943/0001-01",
        zipcode: "03445-050",
        address: "Rua Manilha",
        number: "42",
        district: "Vila Carrão",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BARCELONA COMERCIO VAREJISTA E ATACADISTA S/A",
        cnpj: "07.170.943/0072-03",
        zipcode: "08674-015",
        address: "Rua Prudente de Moraes",
        number: "1751",
        district: "Centro",
        city: "Suzano",
        state: "SP"
    },
    {
        name: "ASSESATHRA ASSESSORIA EM MEDICINA OCUPACIONAL S/C LTDA - ME",
        cnpj: "01.611.263/0001-08",
        zipcode: "03141-080",
        address: "R INHANGAPI",
        number: "55",
        district: "VILA ZELINA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CRB SP MANUTENCAO PREDIAL LTDA.",
        cnpj: "24.198.979/0001-12",
        zipcode: "05061-150",
        address: "R CERRO CORA",
        number: "779",
        district: "VILA ROMANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CRECHE MADRE TERESA DE CALCUTA",
        cnpj: "96.523.063/0001-00",
        zipcode: "03512-030",
        address: "R CORONEL DONATO 209",
        number: "",
        district: "VL MATILDE",
        city: "SP",
        state: "SP"
    },
    {
        name: "ASSOCIACAO DOS MORADORES DO JARDIM AUREA",
        cnpj: "00.585.268/0001-32",
        zipcode: "08451-090",
        address: "R MARTINS CORREIA DE SA",
        number: "134",
        district: "GUAIANASES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MOVIMENTO DO EDUCAR E APRENDER PARA O FUTURO",
        cnpj: "21.065.641/0001-02",
        zipcode: "04470-010",
        address: "R INDEPENDENCIA 145",
        number: "",
        district: "JD APURA",
        city: "",
        state: ""
    },
    {
        name: "ASSOCIACAO SANTA ZITA",
        cnpj: "01.112.868/0001-46",
        zipcode: "08250-590",
        address: "R BRUNO ZABALA",
        number: "106",
        district: "CJ. JOSE BONIFACIO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ASSOCIACAO UNIAO E PROGRESSO DO PARQUE ARARIBA E ADJACENCIAS",
        cnpj: "50.105.899/0001-85",
        zipcode: "05778-240",
        address: "R LEOPOLDINO JOSE CAMARGO",
        number: "551",
        district: "PARQUE ARARIBA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ASSOCIACAO DOS PROPRIETARIOS DE LOTES E MORADORES DO LOTEAMENTO CATAGUA WAY",
        cnpj: "14.500.116/0001-02",
        zipcode: "12090-700",
        address: "ROD OSWALDO CRUZ",
        number: "KM 3",
        district: "JARDIM JULIETA",
        city: "Taubaté",
        state: "SP"
    },
    {
        name: "ASSOCIAÇAO DOS FUNCIONARIOS DA POLICIA CIVIL DO ESTADO DE SP*",
        cnpj: "62.655.386/0001-27",
        zipcode: "01502-001",
        address: "Avenida da Liberdade",
        number: "788",
        district: "Liberdade",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ASSOCIACAO VEDUTA JUNDIAI",
        cnpj: "08.413.554/0001-22",
        zipcode: "13214-470",
        address: "ROD JOAO CERESER",
        number: "KM65,5",
        district: "JUNDIAI MIRIM",
        city: "Jundiaí",
        state: "SP"
    },
    {
        name: "ATIVA DISTRIBUICAO E LOGISTICA LTDA",
        cnpj: "01.125.797/0007-01",
        zipcode: "02190-050",
        address: "R SALVADOR RODRIGUES PRADO",
        number: "200",
        district: "PARQUE NOVO MUNDO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ATIVAS CONTACT CENTER E CORRETORA DE SEGUROS LTDA - EPP",
        cnpj: "21.219.089/0001-51",
        zipcode: "03544-110",
        address: "R PARAISOPOLIS",
        number: "363",
        district: "CIDADE PATRIARCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ATLANTICA INDUSTRIA E COMERCIO DE BORRACHA LTDA - EPP",
        cnpj: "08.625.155/0001-25",
        zipcode: "08650-245",
        address: "EST DO VIADUTO",
        number: "3795",
        district: "FAZENDA AYA",
        city: "Suzano",
        state: "SP"
    },
    {
        name: "ATUANTI SERVICOS DE TECNOLOGIA LTDA.",
        cnpj: "14.801.259/0001-46",
        zipcode: "02034-010",
        address: "R ALFREDO GUEDES",
        number: "72",
        district: "SANTANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AUGUSTO CESAR SOUZA MOREIRA E BARBOSA",
        cnpj: "08.596.352/0001-63",
        zipcode: "",
        address: "",
        number: "",
        district: "",
        city: "",
        state: ""
    },
    {
        name: "AURACOR INDUSTRIA E COMERCIO LTDA - EPP",
        cnpj: "07.874.097/0001-00",
        zipcode: "08537-400",
        address: "R ERNESTINA",
        number: "265",
        district: "VILA SAO JOAO",
        city: "Ferraz de Vasconcelos",
        state: "SP"
    },
    {
        name: "F EUDES V DE ARAUJO ME",
        cnpj: "08.902.237/0001-70",
        zipcode: "58870-000",
        address: "R JOSEFA OLINDINA DA CONCEIÇAO 04",
        number: "",
        district: "ALICE SUASSUNA",
        city: "Riacho dos Cavalos",
        state: "PB"
    },
    {
        name: "CARROSSEL VIAGENS E TURISMO LTDA",
        cnpj: "05.241.051/0001-00",
        zipcode: "01307-000",
        address: "R FREI CANECA 558 SALA 105 1 ANDAR",
        number: "",
        district: "CONSOLAÇAO",
        city: "SP",
        state: "SP"
    },
    {
        name: "AUTENTICA EDITORA LTDA",
        cnpj: "07.593.572/0001-70",
        zipcode: "31140-520",
        address: "R CARLOS TURNER",
        number: "420",
        district: "SILVEIRA",
        city: "Belo Horizonte",
        state: "MG"
    },
    {
        name: "AUTO ELETRICO E MECANICA KATSUMATA MOTORS LTDA - ME",
        cnpj: "07.043.254/0001-36",
        zipcode: "06780-190",
        address: "R RIBEIRAO PRETO",
        number: "10",
        district: "ARRAIAL PAULISTA",
        city: "Taboão da Serra",
        state: "SP"
    },
    {
        name: "AUTO MOTO ESCOLA NOVA MARABA LTDA - ME",
        cnpj: "05.779.866/0001-66",
        zipcode: "06813-000",
        address: "R CERQUEIRA CESAR",
        number: "827",
        district: "JARDIM SANTA TEREZA",
        city: "Embu das Artes",
        state: "SP"
    },
    {
        name: "AUTO POSTO FOIOS ONE LTDA",
        cnpj: "09.071.449/0001-15",
        zipcode: "06764-420",
        address: "R MARIA KARACHAKI FERRAZ",
        number: "75",
        district: "JD. TRES IRMAOS",
        city: "Taboão da Serra",
        state: "SP"
    },
    {
        name: "AUTO POSTO GENERAL CUNHA LTDA.",
        cnpj: "10.659.553/0001-04",
        zipcode: "05565-000",
        address: "AV GENERAL ASDRUBAL DA CUNHA",
        number: "44",
        district: "JD ARPOADOR",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AUTO POSTO ITAQUERAO LTDA - ME",
        cnpj: "10.481.591/0001-10",
        zipcode: "08280-005",
        address: "AV LIDER",
        number: "2000",
        district: "CIDADE LIDER",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AUTO POSTO LORENS EIRELI - EPP",
        cnpj: "11.184.826/0001-74",
        zipcode: "08051-000",
        address: "AV DO IMPERADOR",
        number: "5742",
        district: "LIMOEIRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AUTO POSTO PROFESSOR MARTINS LTDA.",
        cnpj: "10.652.435/0001-74",
        zipcode: "04660-007",
        address: "Avenida Interlagos",
        number: "3918",
        district: "Jardim Marajoara",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AUTO POSTO SUPER PRESIDENTE LTDA",
        cnpj: "13.919.404/0001-25",
        zipcode: "02190-030",
        address: "R SOLDADO JOSE LEITE DA SILVA",
        number: "333",
        district: "PARQUE NOVO MUINDO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AUTO POSTO TOPAZIO LTDA",
        cnpj: "64.942.071/0001-96",
        zipcode: "06715-125",
        address: "EST DA ALDEIRA",
        number: "439",
        district: "GRANJA VIANA",
        city: "Cotia",
        state: "SP"
    },
    {
        name: "AUTO POSTO VIA BRESSER LTDA - EPP",
        cnpj: "04.347.903/0001-02",
        zipcode: "03047-000",
        address: "R VINTE E UM DE ABRIL",
        number: "900",
        district: "BELENZINHO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AUTO POSTO VIA JAGUARE LTDA",
        cnpj: "11.258.145/0001-03",
        zipcode: "05346-000",
        address: "AV JAGUARE",
        number: "1112",
        district: "JAGUARE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AVALIBENS ENGENHARIA E AVALIACAO PATRIMONIAL LTDA.",
        cnpj: "03.500.384/0001-08",
        zipcode: "01318-000",
        address: "AV BRIGADEIRO LUIS ANTONIO",
        number: "290",
        district: "BELA VISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AVANT ADMINISTRACAO HOTELEIRA LTDA",
        cnpj: "15.758.473/0001-20",
        zipcode: "03009-000",
        address: "R JOAO TEODORO",
        number: "1200",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "RAMDECAR AUTO CENTER LTDA",
        cnpj: "10.440.581/0001-36",
        zipcode: "04781-030",
        address: "RUA FRANCISCO MENDES 125",
        number: "",
        district: "SOCORRO",
        city: "SP",
        state: "SP"
    },
    {
        name: "AVERAGE TECNOLOGIA LTDA",
        cnpj: "56.098.742/0001-56",
        zipcode: "01049-000",
        address: "R FORMOSA",
        number: "75",
        district: "CENTRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AXIA SOLUCOES LOGISTICAS LTDA.",
        cnpj: "19.486.731/0001-17",
        zipcode: "06612-250",
        address: "ESTV DE ITU",
        number: "1200",
        district: "JARDIM ALVORADA",
        city: "Jandira",
        state: "SP"
    },
    {
        name: "LICEU DE ARTES E OFICIO DE SÃO PAULO",
        cnpj: "60.761.889/0001-51",
        zipcode: "01103-201",
        address: "R DA CANTAREIRA 1351",
        number: "",
        district: "LUZ",
        city: "SP",
        state: "SP"
    },
    {
        name: "AXIWIL ESQUADRIAS METALICAS LTDA - EPP",
        cnpj: "43.788.330/0001-04",
        zipcode: "03371-000",
        address: "AV MONTEMAGNO",
        number: "2742",
        district: "VILA FORMOSA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PROTEGEQUIPA EQUIPAMENTOS DE SEGURANCA INDUSTRIAL LTDA - ME",
        cnpj: "09.126.513/0001-18",
        zipcode: "03880-100",
        address: "R CHAPADA",
        number: "129",
        district: "ERM MATARAZZO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VANESSA CRISTINE GALLO",
        cnpj: "11.488.521/0001-56",
        zipcode: "03808-170",
        address: "R VICTORIA SIMIONATO",
        number: "69",
        district: "VILA PARANAGUA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "B.M. CHEMICAL INDUSTRIA E COMERCIO LTDA",
        cnpj: "04.895.564/0001-90",
        zipcode: "07223-270",
        address: "R GUARANI D ' OESTE",
        number: "103",
        district: "CIDADE INDUSTRIAL",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "B.N. COMERCIO E PRESTACAO DE SERVICOS ELETRONICOS LTDA - ME",
        cnpj: "69.214.922/0001-06",
        zipcode: "08215-510",
        address: "R RIO IMBURANA",
        number: "18",
        district: "ITAQUERA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TRIUNFO INDUSTRIA DE BALANCAS ELETRONICAS LTDA",
        cnpj: "02.790.966/0001-03",
        zipcode: "03081-020",
        address: "RUA MARIA ELEONORA",
        number: "120",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BALAS E CARAMELOS ACUMEL LTDA*",
        cnpj: "62.300.066/0001-54",
        zipcode: "03478-040",
        address: "R ALTO BELO",
        number: "480",
        district: "VL ANTONIETA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BANCO CITIBANK S A",
        cnpj: "33.479.023/0001-80",
        zipcode: "01311-920",
        address: "AV PAULISTA",
        number: "1111",
        district: "BELA VISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO BANDEIRA TOWER",
        cnpj: "01.903.791/0001-22",
        zipcode: "04532-001",
        address: "R BANDEIRA PAULISTA",
        number: "530",
        district: "ITAIM BIBI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BAR E LANCHES ESTEVAO LTDA - EPP",
        cnpj: "44.118.891/0001-50",
        zipcode: "08210-040",
        address: "R DA VERIDIANA",
        number: "384",
        district: "HIGIENOPOLIS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BARRIPLUS COMERCIO DE EMBALAGENS LTDA - ME",
        cnpj: "21.155.697/0001-40",
        zipcode: "03827-001",
        address: "AV DOUTOR ASSIS RIBEIRO",
        number: "9771",
        district: "VILA JACUI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BARROSO FONTELLES SOCIEDADE DE ADVOGADOS",
        cnpj: "19.632.232/0001-90",
        zipcode: "04530-030",
        address: "R TENENTE NEGRAO",
        number: "90",
        district: "ITAIM",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BASA COMERCIO E ASSISTENCIA TECNICA LTDA - ME",
        cnpj: "67.577.536/0001-45",
        zipcode: "08150-090",
        address: "R JOSE ELEUTERIO DOS SANTOS",
        number: "135",
        district: "PARQUE SANTA RITA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BASICO WAY COMERCIO E CONFECCOES LTDA",
        cnpj: "13.612.272/0001-94",
        zipcode: "08330-470",
        address: "R SAGITARIO",
        number: "179",
        district: "CIDADE SATELITE SANTA BARBARA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BAUMINAS QUIMICA N/NE LTDA",
        cnpj: "23.647.365/0001-08",
        zipcode: "08655-000",
        address: "ROD INDIO TIBIRICA",
        number: "4.033",
        district: "VILA SOL NASCENTE",
        city: "Suzano",
        state: "SP"
    },
    {
        name: "B & B - ENGENHARIA E CONSTRUCOES LTDA.",
        cnpj: "03.643.992/0001-63",
        zipcode: "02220-000",
        address: "R ITAMONTE",
        number: "33",
        district: "VL. MEDEIROS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BBM ADMINISTRACAO DE BENS E PARTICIPACOES LTDA.",
        cnpj: "12.312.789/0001-03",
        zipcode: "03031-030",
        address: "R ALEXANDRINO PEDROSO",
        number: "264",
        district: "PARI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BCR TELEATENDIMENTO LTDA",
        cnpj: "18.522.439/0001-40",
        zipcode: "01318-000",
        address: "AV BRIGADEIRO LUIS ANTONIO",
        number: "580",
        district: "BELA VISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BEDALM PHARMA DO BRASIL LTDA.",
        cnpj: "26.318.479/0001-00",
        zipcode: "06715-815",
        address: "R TARUMA",
        number: "245",
        district: "JARDIM CLAUDIO",
        city: "Cotia",
        state: "SP"
    },
    {
        name: "ENXOVAIS NAVE LTDA",
        cnpj: "09.434.203/0001-60",
        zipcode: "05073-000",
        address: "R 12 DE OUTUBRO 342",
        number: "",
        district: "LAPA",
        city: "SP",
        state: "SP"
    },
    {
        name: "CARVALHO & YAMAKAWA CERVEJARIA LTDA - EPP*",
        cnpj: "17.220.826/0001-69",
        zipcode: "01415-005",
        address: "R BELA CINTRA",
        number: "1579",
        district: "CONSOLACAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BELLA MEL - COMERCIO DE ROUPAS LTDA - ME",
        cnpj: "11.516.355/0001-54",
        zipcode: "03009-010",
        address: "R RODRIGUES DOS SANTOS",
        number: "400",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BELLOTON COMERCIAL EIRELI EPP*",
        cnpj: "20.494.800/0001-13",
        zipcode: "18147-000",
        address: "RODOVIA GREGORIO SPINA",
        number: "1750",
        district: "DA RONDA",
        city: "Araçariguama",
        state: "SP"
    },
    {
        name: "BEM PROMOTORA DE VENDAS E SERVICOS S.A.",
        cnpj: "10.397.031/0022-06",
        zipcode: "01008-000",
        address: "R LIBERO BADARO",
        number: "300",
        district: "CENTRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BEMIS DO BRASIL INDUSTRIA E COMERCIO DE EMBALAGENS LTDA.",
        cnpj: "60.394.723/0001-44",
        zipcode: "04571-011",
        address: "AV ENGENHEIRO LUIZ CARLOS BERRINI",
        number: "1681",
        district: "CIDADE MONCOES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BEMIS DO BRASIL INDUSTRIA E COMERCIO DE EMBALAGENS LTDA.",
        cnpj: "60.394.723/0028-64",
        zipcode: "09371-520",
        address: "AV JOAO RAMALHO",
        number: "964",
        district: "VILA NOEMIA",
        city: "Mauá",
        state: "SP"
    },
    {
        name: "BENIMAX INDUSTRIA E COMERCIO LTDA - EPP",
        cnpj: "60.830.825/0001-65",
        zipcode: "03057-010",
        address: "R BELEM",
        number: "52",
        district: "BELENZINHO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "I.B. CAFE LTDA",
        cnpj: "04.914.102/0002-54",
        zipcode: "01408-000",
        address: "AL CASA BRANCA",
        number: "720",
        district: "JARDIM PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BEM PROMOTORA DE VENDAS E SERVIÇOS S/A",
        cnpj: "10.397.010/1200-7",
        zipcode: "01451-010",
        address: "R IGUATEMI 354 CJ 42",
        number: "",
        district: "ITAIM BIBI",
        city: "SP",
        state: "SP"
    },
    {
        name: "BETTAMIO VIVONE E PACE ADVOGADOS ASSOCIADOS",
        cnpj: "03.106.422/0001-34",
        zipcode: "05409-011",
        address: "R RUA OSCAR FREIRE",
        number: "2250",
        district: "JARDIM PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MERCADINHO BRAGA JUNIOR LTDA",
        cnpj: "05.351.869/0001-02",
        zipcode: "02987-100",
        address: "R FERNANDO MENDES DE ALMEIDA 266",
        number: "",
        district: "PQ TAIPAS",
        city: "SP",
        state: "SP"
    },
    {
        name: "MINI MERCADO BRAGA SOUZA LTDA EPP",
        cnpj: "06.941.449/0001-30",
        zipcode: "02859-080",
        address: "R MONTE ALEGRE DO SUL 841",
        number: "",
        district: "JD BRASILIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "BFIT CLEMENTINO LTDA",
        cnpj: "09.218.690/0001-24",
        zipcode: "04025-014",
        address: "R LEANDRO DUPRE",
        number: "1029",
        district: "VILA CLEMENTINO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BIAZZINI PIZZARIA LTDA - ME",
        cnpj: "68.204.403/0001-96",
        zipcode: "02512-000",
        address: "R BERNARDINO FANGANIELLO",
        number: "608",
        district: "CASA VERDE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BIG FESTA COMERCIO DE ARTIGOS PARA FESTAS E EMBALAGENS EIRELI - ME",
        cnpj: "20.067.455/0001-31",
        zipcode: "08080-570",
        address: "AV OLIVEIRA FREIRE",
        number: "1522",
        district: "PARQUE PAULISTANO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BIM - COMERCIO DE COSMETICOS LTDA.",
        cnpj: "08.891.216/0001-04",
        zipcode: "05094-000",
        address: "R CAIAPOS",
        number: "131",
        district: "VILA ANASTACIO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "NORBERTO MARQUES SPAOLONZI SUZANO ME",
        cnpj: "04.542.824/0001-44",
        zipcode: "08676-000",
        address: "AV ANTONIO MARQUES FIGUEIRA 950",
        number: "",
        district: "VL FIGUEIRA",
        city: "Suzano",
        state: "SP"
    },
    {
        name: "BIQUINIS PRAIA AZUL LTDA - ME",
        cnpj: "04.647.185/0001-81",
        zipcode: "03978-770",
        address: "R TULIPA DA AFRICA",
        number: "461",
        district: "ALTOS DE V PRUDENTE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BJP/5 CORRETORA DE SEGUROS LTDA",
        cnpj: "22.236.047/0001-91",
        zipcode: "04534-010",
        address: "R JOAQUIM FLORIANO",
        number: "243",
        district: "ITAIM BIBI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BLEND EMPREENDIMENTOS IMOBILIARIOS LTDA.",
        cnpj: "09.432.414/0001-64",
        zipcode: "04508-030",
        address: "R JOAO LOURENCO",
        number: "432",
        district: "VILA NOVA CONCEICAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BMD TEXTEIS LTDA",
        cnpj: "03.156.784/0001-30",
        zipcode: "42810-240",
        address: "R DOS PLASTICOS",
        number: "871",
        district: "COPEC",
        city: "Camaçari",
        state: "BA"
    },
    {
        name: "REFERRAL MARKETING EVENTOS E PRODUTOS LTDA",
        cnpj: "18.634.132/0001-30",
        zipcode: "01309-903",
        address: "R LUIS COELHO",
        number: "340",
        district: "CONSOLACAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BOAZ SEGURO AUTO LTDA",
        cnpj: "31.680.890/0001-53",
        zipcode: "04571-000",
        address: "AVENIDA ENG LUIZ CARLOS BERRINI",
        number: "1140",
        district: "CIDADE MONCOES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SERGIO CARLOS ROCHA CARRIJO",
        cnpj: "30.033.032/0001-54",
        zipcode: "05047-001",
        address: "R CORIOLANO",
        number: "1181",
        district: "VILA ROMANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MUNICIPIO DE BOM JESUS DOS PERDOES",
        cnpj: "52.359.692/0001-62",
        zipcode: "12955-000",
        address: "R DOM DUARTE LEOPOLDO",
        number: "83",
        district: "CENTRO",
        city: "Bom Jesus dos Perdões",
        state: "SP"
    },
    {
        name: "BOOKPARTNERS BRASIL EDITORA E DISTRIBUIDORA DE LIVROS LTDA",
        cnpj: "15.424.720/0002-32",
        zipcode: "05014-001",
        address: "R MONTE ALEGRE",
        number: "969",
        district: "PERDIZES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BOOKPARTNERS BRASIL EDITORA E DISTRIBUIDORA DE LIVROS LTDA",
        cnpj: "15.424.720/0001-51",
        zipcode: "06612-800",
        address: "R VITOR ANGELO FORTUNATO",
        number: "439",
        district: "JD ALVORADA",
        city: "Jandira",
        state: "SP"
    },
    {
        name: "BOOKPARTNERS BRASIL EDITORA E DISTRIBUIDORA DE LIVROS LTDA",
        cnpj: "15.424.720/0020-14",
        zipcode: "05512-300",
        address: "AV PROFESSOR FRANCISCO MORATO",
        number: "2718",
        district: "BUTANTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BOOKPARTNERS BRASIL EDITORA E DISTRIBUIDORA DE LIVROS LTDA",
        cnpj: "15.424.720/0005-85",
        zipcode: "04747-030",
        address: "R BORBA GATO",
        number: "59",
        district: "SANTO AMARO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BOREAS COMERCIO DE PECAS E SERVICOS AUTOMOTIVOS LTDA - EPP",
        cnpj: "16.890.271/0001-08",
        zipcode: "03821-060",
        address: "R SENADOR ELOI DE SOUZA",
        number: "150",
        district: "VILA SILVIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LEANDRO SANTOS BATISTA BORRACHARIA",
        cnpj: "07.370.082/0001-05",
        zipcode: "08560-010",
        address: "AV BRASIL",
        number: "1270",
        district: "CALMON VIANA",
        city: "Poá",
        state: "SP"
    },
    {
        name: "BOSQUE DI FIORI GARDEN PLANTAS E ACESSORIOS LTDA",
        cnpj: "22.829.172/0001-05",
        zipcode: "13252-272",
        address: "LOTEAMENTO RESIDENCIAL BOSQUE DOS PIRES",
        number: "153",
        district: "BAIRRO DOS PIRES",
        city: "Itatiba",
        state: "SP"
    },
    {
        name: "PAULISTA SAUDE S/A",
        cnpj: "04.677.722/0001-36",
        zipcode: "01311-100",
        address: "AV PAULISTA",
        number: "777",
        district: "CERQUEIRA CESAR",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MAURICIO MATHIAS OLIVEIRA - EPP",
        cnpj: "14.294.958/0001-47",
        zipcode: "08674-003",
        address: "R GENERAL FRANCISCO GLICERIO",
        number: "1407",
        district: "CENTRO",
        city: "Suzano",
        state: "SP"
    },
    {
        name: "JORDELINO CLARET BOTTA - ME",
        cnpj: "57.435.448/0001-55",
        zipcode: "13500-410",
        address: "R DOIS A 286",
        number: "",
        district: "APARECIDA",
        city: "Rio Claro",
        state: "SP"
    },
    {
        name: "CONJUNTO RESIDENCIAL BOULEVARD DE FRANCE",
        cnpj: "04.848.621/0001-80",
        zipcode: "03202-000",
        address: "R BAIA GRANDE",
        number: "744",
        district: "VILA PRUDENTE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BOUN CAFE LTDA.",
        cnpj: "13.102.342/0001-64",
        zipcode: "04571-050",
        address: "R SURUBIM",
        number: "577",
        district: "CIDADE MONCOES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BOXNET SERVICOS DE INFORMACOES LTDA.",
        cnpj: "05.403.405/0001-94",
        zipcode: "04202-010",
        address: "R LEAIS PAULISTANOS",
        number: "369",
        district: "IPIRANGA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BR GUARULHOS DESCONTAMINACAO, PECAS E SERVICOS LTDA - EPP",
        cnpj: "13.867.439/0001-68",
        zipcode: "07232-078",
        address: "R ICO",
        number: "275",
        district: "CIDADE INDUSTRIAL SATELITE DE SAO PAULO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "BRADESCO LEASING S.A. - ARRENDAMENTO MERCANTIL",
        cnpj: "47.509.120/0001-82",
        zipcode: "06029-900",
        address: "NUC CIDADE DE DEUS",
        number: "S/N",
        district: "VILA YARA",
        city: "Osasco",
        state: "SP"
    },
    {
        name: "BRAGA FILHO SUPERMERCADOS EIRELI",
        cnpj: "15.413.310/0001-05",
        zipcode: "02849-110",
        address: "Rua João Pinto de Oliveira",
        number: "414",
        district: "Jardim Guarani",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MINI MERCADO BRAGA NETO LTDA",
        cnpj: "08.491.620/0001-82",
        zipcode: "02124-000",
        address: "AV DAS CEREJEIRAS 555",
        number: "",
        district: "JD JAPAO",
        city: "SP",
        state: "SP"
    },
    {
        name: "BRALYX MAQUINAS INDUSTRIA E COMERCIO LTDA",
        cnpj: "74.226.242/0001-34",
        zipcode: "04297-000",
        address: "AV PADRE ARLINDO VIEIRA",
        number: "939",
        district: "VILA VERMELHA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BRAS WAN TAR COMERCIO, IMPORTACAO E EXPORTACAO LTDA - EPP",
        cnpj: "06.138.810/0001-95",
        zipcode: "03478-040",
        address: "R ALTO BELO",
        number: "394",
        district: "VILA ANTONIETA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "HEITOR A. S. SILVA - COMERCIO DE LATICINIOS*",
        cnpj: "23.633.154/0001-16",
        zipcode: "03046-010",
        address: "RUA DOUTOR ALMEIDA LIMA",
        number: "95",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "JOAO VILEGAS FILHO ME",
        cnpj: "15.674.654/0001-78",
        zipcode: "03305-000",
        address: "R BONSUCESSO 1249",
        number: "",
        district: "TATUAPE",
        city: "SP",
        state: "SP"
    },
    {
        name: "BRASDIDATICA COMERCIAL DISTRIBUIDORA DE PRODUTOS PEDAGOGICOS LTDA. - ME",
        cnpj: "10.487.651/0001-01",
        zipcode: "03304-000",
        address: "R SAO BERNARDO",
        number: "659",
        district: "CIDADE DO CEU",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BRASILIA MAQUINAS E FERRAMENTAS LTDA",
        cnpj: "61.354.841/0005-15",
        zipcode: "03356-000",
        address: "AV DOUTOR EDUARDO COTCHING",
        number: "264",
        district: "VILA FORMOSA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BRASILIA MAQUINAS E FERRAMENTAS LTDA",
        cnpj: "61.354.841/0009-49",
        zipcode: "03107-050",
        address: "R PRESIDENTE BATISTA PEREIRA",
        number: "88",
        district: "MOOCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BRASILIA MAQUINAS E FERRAMENTAS LTDA",
        cnpj: "61.354.841/0001-91",
        zipcode: "03053-000",
        address: "R BRESSER",
        number: "568",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO BRASILIA SMALL TOWN FLAT SERVICE",
        cnpj: "01.869.037/0001-13",
        zipcode: "02037-000",
        address: "R DR. OLAVO EGIDIO",
        number: "420",
        district: "SANTANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BRAU BERRINI RESTAURANTE EIRELI - EPP",
        cnpj: "26.314.114/0001-08",
        zipcode: "04571-010",
        address: "AV ENGENHEIRO LUIZ CARLOS BERRINI",
        number: "1339",
        district: "CIDADE MONCOES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BRAU ITAIM RESTAURANTE EIRELI - EPP",
        cnpj: "17.898.734/0001-32",
        zipcode: "04534-002",
        address: "R JOAQUIM FLORIANO",
        number: "466",
        district: "JARDIM PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BRAUJIN ALIMENTOS EIRELI",
        cnpj: "21.510.713/0001-75",
        zipcode: "04570-001",
        address: "AV NOVA INDEPENDENCIA",
        number: "755",
        district: "BROOKLIN PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BRENNER EQUIPAMENTOS EIRELI - ME",
        cnpj: "24.507.544/0001-02",
        zipcode: "07151-051",
        address: "R LAGOA DE DENTRO",
        number: "176",
        district: "JARDIM SAO JOAO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CENTRO DE RECREACAO BRINCANDO E APRENDENDO LTDA",
        cnpj: "54.059.878/0001-21",
        zipcode: "01528-060",
        address: "LRG NOSSA SENHORA DA CONCEICAO",
        number: "75",
        district: "ACLIMACAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BRINCANDO E CRIANDO ESCOLA DE EDUCACAO E RECREACAO INFANTIL LTDA - ME",
        cnpj: "66.063.264/0001-00",
        zipcode: "02517-110",
        address: "R EMBAIXADOR JOAO CARLOS MUNIZ",
        number: "68",
        district: "CASA VERDE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CARDOSO INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        cnpj: "57.464.109/0001-05",
        zipcode: "08260-040",
        address: "AV MATASHIRO YAMAGUIHI",
        number: "278",
        district: "VL CARMOZINA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "DAMIC IND E COM LTDA ME",
        cnpj: "03.515.721/0001-22",
        zipcode: "04556-030",
        address: "R SÃO FRANCISCO XAVIER 69",
        number: "",
        district: "JD STA CRUZ",
        city: "SP",
        state: "SP"
    },
    {
        name: "BRSCAN PROCESSAMENTO DE DADOS E TECNOLOGIA LTDA",
        cnpj: "06.198.573/0001-58",
        zipcode: "70302-911",
        address: "ST SCS QUADRA 02 BLOCO C",
        number: "109",
        district: "ASA SUL",
        city: "Brasília",
        state: "DF"
    },
    {
        name: "BRSCAN PROCESSAMENTO DE DADOS E TECNOLOGIA LTDA*",
        cnpj: "06.198.573/0004-09",
        zipcode: "04576-020",
        address: "RUA GEORGE OHM",
        number: "230",
        district: "CIDADE MONCOES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "EDINILDO RODRIGUES DA SILVA",
        cnpj: "09.451.800/0001-01",
        zipcode: "03729-000",
        address: "R PASTORIL DE ITAPETINGA",
        number: "589",
        district: "JARDIM DANFER",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BRUNINHO CHUMBINHO CALCA ENXUTA LTDA",
        cnpj: "67.086.157/0001-52",
        zipcode: "03578-030",
        address: "R DOMENICO BERNABEI",
        number: "270",
        district: "JARDIM ITAPEMA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BSTI TECNOLOGIA DA INFORMACAO LTDA",
        cnpj: "26.262.059/0001-41",
        zipcode: "30720-450",
        address: "R ITORORO",
        number: "757",
        district: "PADRE EUSTAQUIO",
        city: "Belo Horizonte",
        state: "MG"
    },
    {
        name: "S & S PROMOCOES E EVENTOS LTDA",
        cnpj: "09.058.507/0001-70",
        zipcode: "02044-050",
        address: "R CONDESSA SICILIANO",
        number: "572",
        district: "JARDIM SAO PAULO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BUFFET LA FELICITA LTDA ME",
        cnpj: "01.586.920/0002-87",
        zipcode: "08260-005",
        address: "AV JACU PESSEGO",
        number: "5500",
        district: "ITAQUERA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BUQUE ABC ARTE E DECORACAO LTDA - ME",
        cnpj: "02.592.414/0001-82",
        zipcode: "09190-130",
        address: "R IBIRA",
        number: "83",
        district: "JARDIM PARAISO",
        city: "Santo André",
        state: "SP"
    },
    {
        name: "ADISER COMERCIO DE ALIMENTOS LTDA",
        cnpj: "11.377.588/0001-13",
        zipcode: "06473-073",
        address: "AV SAGITARIO",
        number: "138",
        district: "ALPHAVILLE CONDE I",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO BUSINESS CENTER",
        cnpj: "02.424.511/0001-66",
        zipcode: "04547-005",
        address: "R GOMES DE CARVALHO",
        number: "1306",
        district: "JD PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CLEBER PEREIRA SERVICOS DE LIMPEZA - ME",
        cnpj: "13.590.812/0001-86",
        zipcode: "08061-010",
        address: "R DA TROPICALIA",
        number: "610",
        district: "JD PEDRO JOSE NUNES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ORGANIZACAO NACIONAL DE DEFESA E APOIO DA CRIANCA E ADOLESCENTE DO IDOSO E DO MEIO AMBIENTE",
        cnpj: "08.849.334/0002-27",
        zipcode: "03726-080",
        address: "R CICERO PAULO",
        number: "95",
        district: "ENGENHEIRO GOULART",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "C. MARTOS CREPES - ME",
        cnpj: "07.613.951/0001-85",
        zipcode: "07190-100",
        address: "Rodovia Hélio Smidt",
        number: "SN",
        district: "Aeroporto",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CAIXA DE ASSISTENCIA DOS ADVOGADOS DE SAO PAULO",
        cnpj: "44.692.168/0053-01",
        zipcode: "03605-000",
        address: "R RODOVALHO JUNIOR",
        number: "234",
        district: "PENHA DE FRACA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CAIXA DE ASSISTENCIA DOS ADVOGADOS DE SAO PAULO",
        cnpj: "44.692.168/0083-27",
        zipcode: "03087-000",
        address: "R SAO JORGE",
        number: "132",
        district: "PARQUE SAO JORGE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CADETE INDUSTRIA E COMERCIO DE ELETROELETRONICOS LTDA",
        cnpj: "62.169.404/0001-60",
        zipcode: "06321-620",
        address: "EST DO GUATAMBU",
        number: "345",
        district: "VL MARCONDES",
        city: "Carapicuíba",
        state: "SP"
    },
    {
        name: "CICERO ALVES DOS SANTOS REFORMAS",
        cnpj: "10.980.734/0001-38",
        zipcode: "03422-000",
        address: "AV GUILHERME GIORGI",
        number: "676",
        district: "VILA CARRAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CAF CONSTRUCOES E ESQUADRIAS METALICAS EIRELI - ME",
        cnpj: "12.621.719/0001-29",
        zipcode: "08151-200",
        address: "R ORMINDA PINTO",
        number: "72",
        district: "JD CONCEICAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LINO ATIVIDADES ADMINISTRATIVAS LTDA*",
        cnpj: "10.818.654/0001-80",
        zipcode: "04734-003",
        address: "AV ADOLFO PINHEIRO",
        number: "2054",
        district: "SANTO AMARO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CAIO EDUARDO MARTINS RAIZ 22561361837",
        cnpj: "29.093.198/0001-87",
        zipcode: "14460-000",
        address: "AVENIDA ALEXANDRE VILLELA DE ANDRADE",
        number: "2882",
        district: "JARDIM MOGIANA",
        city: "Cristais Paulista",
        state: "SP"
    },
    {
        name: "CAIXA SEGURADORA ESPECIALIZADA EM SAUDE S/A",
        cnpj: "13.223.975/0001-20",
        zipcode: "06460-000",
        address: "AV TAMBORE",
        number: "267",
        district: "TAMBORE",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "CAJ - TRANSPORTE, COMERCIO E TERRAPLENAGEM LTDA.",
        cnpj: "01.069.460/0001-39",
        zipcode: "03821-020",
        address: "R COLONIA LEOPOLDINA",
        number: "90",
        district: "VILA SILVIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "IND E COM DE CALCADOS MAGRAO LTDA",
        cnpj: "43.666.007/0001-50",
        zipcode: "03555-070",
        address: "R MAJE 46",
        number: "",
        district: "CID PATRIARCA",
        city: "SP",
        state: "SP"
    },
    {
        name: "CAMARA MUNICIPAL DE BARRA MANSA",
        cnpj: "29.052.875/0001-19",
        zipcode: "27310-080",
        address: "PC DA BANDEIRA",
        number: "S N",
        district: "CENTRO",
        city: "Barra Mansa",
        state: "RJ"
    },
    {
        name: "CAMARA MUNICIPAL DE SANTO ANDRE",
        cnpj: "43.307.008/0001-08",
        zipcode: "09015-080",
        address: "PC IV CENTENARIO",
        number: "S N",
        district: "CENTRO",
        city: "Santo André",
        state: "SP"
    },
    {
        name: "CAMERA PRESS LETTERA EDITORA LTDA",
        cnpj: "61.207.296/0001-00",
        zipcode: "01306-000",
        address: "R AVANHANDAVA",
        number: "746",
        district: "BELA VISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CAMARGO SOLUÇOES LOGISTICA EIRELI",
        cnpj: "15.777.457/0001-47",
        zipcode: "07140-110",
        address: "R PRINCIPE MIKASA 177",
        number: "",
        district: "JD ALMEIDA PRADO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CAMESA INDUSTRIA TEXTIL LTDA",
        cnpj: "43.672.716/0004-90",
        zipcode: "88316-000",
        address: "ROD ANTONIO HEIL",
        number: "1001",
        district: "ITAIPAVA",
        city: "Itajaí",
        state: "SC"
    },
    {
        name: "DAVIMA CONFECÇOES LTDA",
        cnpj: "11.231.023/0001-23",
        zipcode: "07182-320",
        address: "R URBANO DOS SANTOS 401",
        number: "",
        district: "JD DASTANHA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CAMESA INDUSTRIA TEXTIL LTDA",
        cnpj: "43.672.716/0003-00",
        zipcode: "07182-320",
        address: "R URBANO SANTOS",
        number: "469",
        district: "JARDIM CASTANHA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CAMPELO NATACAO LTDA - ME",
        cnpj: "53.826.228/0001-00",
        zipcode: "08070-001",
        address: "AV SAO MIGUEL",
        number: "7747",
        district: "PQ CRUZEIRO DO SUL",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "INSTITUTO FEDERAL DE EDUCACAO,CIENCIA E TECNOLOGIA DE RONDONIA",
        cnpj: "10.817.343/0006-01",
        zipcode: "76801-000",
        address: "AV CALAMA",
        number: "S/N",
        district: "FLODOALDO PONTES PINTO",
        city: "Porto Velho",
        state: "RO"
    },
    {
        name: "CANAA LAVANDERIA INDUSTRIAL LTDA",
        cnpj: "01.255.303/0001-18",
        zipcode: "37640-000",
        address: "AN NICOLAU CESARINO",
        number: "519",
        district: "DA PONTE ALTA",
        city: "Extrema",
        state: "MG"
    },
    {
        name: "CANDIDO MARTINS SOCIEDADE DE ADVOGADOS",
        cnpj: "12.709.105/0001-01",
        zipcode: "04538-133",
        address: "AV BRIGADEIRO FARIA LIMA",
        number: "3311",
        district: "ITAIM BIBI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MATILDE FERREIRA DE SOUZA MODAS ME",
        cnpj: "07.386.551/0001-84",
        zipcode: "08110-380",
        address: "R FRANCISCO DE AS PEIXOTO 80",
        number: "",
        district: "ITAIM PTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "DANIELE ALINE SILVA RESTAURANTE ME",
        cnpj: "12.422.526/0001-49",
        zipcode: "08440-590",
        address: "R ANGICO DE MINAS",
        number: "27",
        district: "LAGEADO",
        city: "",
        state: ""
    },
    {
        name: "CAPITAL BALANCAS E ASSISTENCIA TECNICA LTDA - ME",
        cnpj: "01.185.869/0001-10",
        zipcode: "08375-000",
        address: "AV RAGUEB CHOFFI",
        number: "590",
        district: "JARDIM 03 MARIAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CAPITAL MACHINE LTDA - EPP",
        cnpj: "02.905.324/0001-02",
        zipcode: "02313-000",
        address: "R MANUEL GAYA",
        number: "72",
        district: "VILA MAZZEI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CAPITANI CONSULTORIA EM RECURSOS HUMANOS LTDA",
        cnpj: "12.618.938/0001-59",
        zipcode: "04304-010",
        address: "AV FAGUNDES FILHO",
        number: "141",
        district: "VILA MONTE ALEGRE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CAPITANI IT SOLUTIONS E INFORMATICA LTDA",
        cnpj: "01.466.035/0001-83",
        zipcode: "04304-010",
        address: "AV FAGUNDES FILHO",
        number: "141",
        district: "VILA MONTE ALEGRE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CAPRICORNIU'S LANCHONETE LTDA - ME",
        cnpj: "60.390.937/0001-42",
        zipcode: "04742-001",
        address: "R PADRE JOSE DE ANCHIETA",
        number: "953",
        district: "SANTO AMARO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CAPTA TEC SERVICOS ADMINISTRATIVOS LTDA - EPP",
        cnpj: "09.465.820/0001-23",
        zipcode: "05122-010",
        address: "R PROFESSOR JOSE MARIA CALAZANS NOGUEIRA",
        number: "239",
        district: "PARQUE SAO DOMINGOS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CARBALLO HOTEIS - EIRELI*",
        cnpj: "19.340.880/0001-73",
        zipcode: "12460-000",
        address: "AV PEDRO PAULO",
        number: "1600",
        district: "DESCANSOPOLIS",
        city: "Campos do Jordão",
        state: "SP"
    },
    {
        name: "CAMBERLEM SP LOCADORA LTDA - EPP",
        cnpj: "06.932.845/0001-00",
        zipcode: "37150-000",
        address: "R LI DELFIM MOREIRA",
        number: "149",
        district: "CENTRO",
        city: "Carmo do Rio Claro",
        state: "MG"
    },
    {
        name: "BLOQUEADORES CARCELL COMERCIAL LTDA",
        cnpj: "11.091.645/0001-01",
        zipcode: "03695-010",
        address: "AV CALIM EID",
        number: "100",
        district: "VILA RE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CARDOS INDUSTRIA DE RECICLAGEM DE METAIS LTDA - EPP",
        cnpj: "07.577.672/0001-03",
        zipcode: "07222-020",
        address: "Rua Cecília Roizen",
        number: "1020",
        district: "Cidade Industrial Satélite de São Paulo",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CARGLASS AUTOMOTIVA LTDA.",
        cnpj: "68.062.827/0001-63",
        zipcode: "06455-000",
        address: "AL ARAGUAIA",
        number: "2104",
        district: "ALPHAVILLE INDUSTRIAL",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "APM DA EE MEXICO",
        cnpj: "48.884.175/0001-35",
        zipcode: "04403-360",
        address: "Rua Leonel da Gama Beles",
        number: "82",
        district: "Vila Joaniza",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CARNEIRO PIRES - SAUDE DO TRABALHO LIMITADA - EPP",
        cnpj: "01.513.166/0001-74",
        zipcode: "03081-010",
        address: "R MARGARIDA DE LIMA",
        number: "104",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "2. TABELIONATO DE PROTESTO DE TITULOS*",
        cnpj: "59.954.578/0001-20",
        zipcode: "01014-000",
        address: "Rua Boa Vista",
        number: "314",
        district: "Centro",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TABELIAO DE NOTAS E DE PROTESTO DE LETRAS E TITULOS DA COM.DE ITAQUA",
        cnpj: "50.216.126/0001-76",
        zipcode: "08573-020",
        address: "R UBERLANDIA 240",
        number: "",
        district: "VL VIRGINIA",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "CASA DE ISABEL CENTRO DE APOIO A MULHER A CRIANCA E O ADOLESCENTE VITIMAS DE VIOLENCIA DOMESTICA E SITUACAO DE RISCO",
        cnpj: "04.488.578/0001-90",
        zipcode: "08120-420",
        address: "R VALENTE DE NOVAIS",
        number: "189",
        district: "ITAIM PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CASA DEL VECCHIO LTDA.",
        cnpj: "02.869.197/0001-25",
        zipcode: "01209-001",
        address: "R AURORA",
        number: "187",
        district: "SANTA EFIGENIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ARMANDO RIBEIRO DE OLIVEIRA - ME",
        cnpj: "13.232.005/0001-91",
        zipcode: "08390-390",
        address: "R CONDE DE ERICEIRA",
        number: "32",
        district: "JARDIM SANTO ANDRE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CASA DE REPOUSO RESIDENCIAL MORADA FELIZ LTDA - ME",
        cnpj: "13.244.739/0001-90",
        zipcode: "03810-110",
        address: "Rua Abel Tavares",
        number: "2074",
        district: "Jardim Belém",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ASSOCIACAO ALIANCA DE MISERICORDIA*",
        cnpj: "04.186.468/0003-35",
        zipcode: "03009-100",
        address: "R MONSENHOR DE ANDRADE",
        number: "746",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "NOVA CASIMIRO MONTAGENS E MANUTENCAO INDUSTRIAL LTDA - ME",
        cnpj: "08.603.348/0001-85",
        zipcode: "09782-350",
        address: "R DALTON TREVISAN 16",
        number: "",
        district: "JD TIRADENTES",
        city: "SBCAMPO",
        state: "SP"
    },
    {
        name: "ROBERTO APARECIDO DOS SANTOS ADEGA ME",
        cnpj: "10.845.845/0001-31",
        zipcode: "07271-390",
        address: "ESTRADA VELHA GUARULHOS SÃO MIGUEL 4955",
        number: "",
        district: "JD ARAPONGAS",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "PIEDADE TEREZA DOS SANTOS - ME",
        cnpj: "12.104.775/0001-96",
        zipcode: "07215-030",
        address: "AV RECIFE 52 CS 2",
        number: "",
        district: "JD STO AFONSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CASTILHO EMPREENDIMENTOS IMOBILIARIOS & CONSULTORIA EMPRESARIAL EIRELI",
        cnpj: "05.438.728/0002-02",
        zipcode: "",
        address: "",
        number: "",
        district: "",
        city: "",
        state: ""
    },
    {
        name: "COMERCIAL DE MATERIAIS PARA CONSTRUCAO CASTOR LTDA",
        cnpj: "48.508.402/0001-28",
        zipcode: "08090-000",
        address: "AV DR JOSE ARTUR NOVA",
        number: "1666",
        district: "SAO MIGUEL PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MORGAN MATERIAIS PARA CONSTRUCAO LTDA",
        cnpj: "02.130.014/0001-55",
        zipcode: "07252-000",
        address: "EST PRESIDENTE JUSCELINO KUBITSCHEK DE OLIVEIRA",
        number: "3923",
        district: "JARDIM CARVALHO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CASTORIL MATERIAIS DE CONSTRUCOES LTDA",
        cnpj: "46.890.281/0001-04",
        zipcode: "08090-000",
        address: "Avenida Doutor José Artur Nova",
        number: "1887",
        district: "Parque Paulistano",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "COMERCIAL DE MATERIAIS PARA CONSTRUCAO CASTOR LTDA",
        cnpj: "48.508.402/0005-51",
        zipcode: "08090-000",
        address: "AV DOUTOR JOSE ARTUR NOVA",
        number: "1887",
        district: "PARQUE PAULISTANO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "COMERCIAL DE MATERIAIS PARA CONSTRUCAO CASTOR LTDA",
        cnpj: "48.508.402/0003-90",
        zipcode: "07175-000",
        address: "AV ARMANDO BEI",
        number: "170",
        district: "VILA NOVA BONSUCESSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CASTORAN MATERIAIS PARA CONSTRUCAO LTDA. - EPP",
        cnpj: "07.652.899/0001-76",
        zipcode: "08694-000",
        address: "Avenida Francisco Marengo",
        number: "2447",
        district: "Jardim Revista",
        city: "Suzano",
        state: "SP"
    },
    {
        name: "COMERCIAL DE MATERIAIS PARA CONSTRUCAO CASTOR LTDA",
        cnpj: "48.508.402/0002-09",
        zipcode: "08341-420",
        address: "AV RAGUEB CHOHFI",
        number: "3797",
        district: "PARQUE BOA ESPERANCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CATUMBI TELAS METALICAS LTDA - EPP",
        cnpj: "61.150.777/0001-27",
        zipcode: "03021-000",
        address: "R CATUMBI",
        number: "861",
        district: "BELENZINHO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CENTRO CULTURAL BRASIL ESTADOS UNIDOS DE SOROCABA",
        cnpj: "71.861.306/0001-80",
        zipcode: "18010-010",
        address: "AV MOREIRA CESAR",
        number: "124",
        district: "CENTRO",
        city: "Sorocaba",
        state: "SP"
    },
    {
        name: "CCM MOTORS VEICULOS AUTOMOTORES LTDA",
        cnpj: "28.560.664/0001-24",
        zipcode: "09690-100",
        address: "Rua M M D C",
        number: "1345",
        district: "Paulicéia",
        city: "São Bernardo do Campo",
        state: "SP"
    },
    {
        name: "ORGANIZACAO NACIONAL DE DEFESA E APOIO DA CRIANCA E ADOLESCENTE DO IDOSO E DO MEIO AMBIENTE",
        cnpj: "08.849.334/0005-70",
        zipcode: "03524-030",
        address: "AV. MENDONCA DRUMOND",
        number: "898",
        district: "JARDIM MARINGA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ASSOCIACAO DOS MORADORES SITIO PAIOLZINHO",
        cnpj: "06.001.559/0003-84",
        zipcode: "05879-470",
        address: "R DAS PEROBEIRAS",
        number: "738",
        district: "CHACARA SANTA MARIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ASSOCIACAO DA CASA DOS DEFICIENTES DE ERMELINO MATARAZZO",
        cnpj: "61.058.475/0004-76",
        zipcode: "03690-000",
        address: "R BROOK TAYLOR",
        number: "386",
        district: "JARDIM COIMBRA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "INSTITUTO NOSSA SENHORA DA ANUNCIACAO",
        cnpj: "02.969.279/0001-41",
        zipcode: "05093-040",
        address: "R CONSELHEIRO OLEGARIO",
        number: "54",
        district: "VILA ANASTACIO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ASSOCIACAO SANTA ZITA",
        cnpj: "01.112.868/0001-46",
        zipcode: "08250-590",
        address: "R BRUNO ZABALA",
        number: "106",
        district: "CJ. JOSE BONIFACIO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CEMARCO COMERCIAL LTDA - ME",
        cnpj: "62.590.591/0001-51",
        zipcode: "02512-000",
        address: "R BERNARDINO FANGANIELLO",
        number: "624",
        district: "CASA VERDE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CENA MONTAGENS DE ESQUADRIAS LTDA",
        cnpj: "00.882.915/0001-78",
        zipcode: "08030-230",
        address: "R ANA GROU",
        number: "296",
        district: "VILA CURUCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CENTAURO INDUSTRIA E COMERCIO LTDA",
        cnpj: "62.801.576/0001-05",
        zipcode: "07175-000",
        address: "AV ARMANDO BEI",
        number: "1358",
        district: "BONSUCESSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CENTRO CAMPESTRE DA CANTAREIRA LTDA - ME",
        cnpj: "00.026.943/0001-93",
        zipcode: "02366-216",
        address: "R JULIAO FAGUNDES",
        number: "652",
        district: "TREMEMBE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "UNIVERSIDADE DE SAO PAULO",
        cnpj: "63.025.530/0084-31",
        zipcode: "05508-110",
        address: "PRACA PROFESSOR RUBIAO MEIRA",
        number: "61",
        district: "BUTANTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "COMISSAO NACIONAL DE ENERGIA NUCLEAR",
        cnpj: "00.402.552/0014-40",
        zipcode: "50740-540",
        address: "AV PROFESSOR LUIZ FREIRE",
        number: "200",
        district: "CIDADE UNIVERSITARIA",
        city: "Recife",
        state: "PE"
    },
    {
        name: "INSTITUTO RENOVO",
        cnpj: "57.353.054/0002-39",
        zipcode: "05347-010",
        address: "AV KENKITI SIMOMOTO",
        number: "564",
        district: "JAGUARE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TIC EMBELEZAMENTO DE ANIMAIS DOMESTICOS EIRELI ME",
        cnpj: "00.681.967/0001-86",
        zipcode: "08550-000",
        address: "AV NOVE DE JULHO 400 FDS",
        number: "",
        district: "CENTRO",
        city: "Poá",
        state: "SP"
    },
    {
        name: "CARLOS CHAGAS COMERCIAL LTDA - ME",
        cnpj: "13.233.913/0001-08",
        zipcode: "08500-405",
        address: "AV QUINZE DE NOVEMBRO",
        number: "384",
        district: "CENTRO",
        city: "Ferraz de Vasconcelos",
        state: "SP"
    },
    {
        name: "CEPACON ISOLANTES ELETRICOS - EIRELI",
        cnpj: "28.932.412/0001-89",
        zipcode: "08596-290",
        address: "R DA CONSOLACAO",
        number: "13",
        district: "PARQUE NOVO HORIZONTE",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "CEREJA SERVICOS DE MIDIA DIGITAL LTDA",
        cnpj: "10.189.293/0001-50",
        zipcode: "01139-003",
        address: "AV MARQUES DE SAO VICENTE",
        number: "1011",
        district: "VARZEA DA BARRA FUNDA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CERTO SERVICOS DE ELETRONICOS EIRELI",
        cnpj: "09.248.858/0001-44",
        zipcode: "06543-320",
        address: "AV HONORIO ALVARES PENTEADO (POLO EMPRESARIAL)",
        number: "97",
        district: "TAMBORE",
        city: "Santana de Parnaíba",
        state: "SP"
    },
    {
        name: "CERTUS CENTRO DE ENSINO REGULAR - EIRELI",
        cnpj: "13.033.643/0001-83",
        zipcode: "04821-010",
        address: "AV PRESIDENTE JOAO GOULART",
        number: "961",
        district: "JARDIM MALIA II",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CERVEJARIA DER BRAUMEISTER HIGIENOPOLIS LTDA.",
        cnpj: "03.054.328/0001-89",
        zipcode: "01238-000",
        address: "AV HIGIENOPOLIS",
        number: "638",
        district: "HIGIENOPOLIS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CERVEJARIA DER BRAUMEISTER LTDA",
        cnpj: "00.771.085/0001-01",
        zipcode: "04578-000",
        address: "AV DAS NACOES UNIDAS",
        number: "13947",
        district: "VILA GERTRUDES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CERVEJARIA BRAUGARTEN TAMBORE EIRELI",
        cnpj: "13.219.771/0001-16",
        zipcode: "06460-030",
        address: "AVENIDA PIRACEMA",
        number: "669",
        district: "SITIO TAMBORE",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "JIG'S BRAUGARTEN MORUMBI ALIMENTOS LTDA. - EPP",
        cnpj: "49.049.356/0001-09",
        zipcode: "04707-000",
        address: "AV ROQUE PETRONI JUNIOR 1089 LJ 78",
        number: "",
        district: "SANTO AMARO",
        city: "SP",
        state: "SP"
    },
    {
        name: "ORAMA ADMINISTRACAO DE BENS LTDA.",
        cnpj: "16.595.003/0001-55",
        zipcode: "01455-010",
        address: "R TUCUMA 712",
        number: "",
        district: "JD EUROPA",
        city: "",
        state: ""
    },
    {
        name: "CERVIFLAN INDUSTRIAL E COMERCIAL LIMITADA",
        cnpj: "48.510.937/0001-33",
        zipcode: "07170-353",
        address: "R INDUBEL",
        number: "357",
        district: "JARDIM CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CENTRO DE ENSINO SUPERIOR DO EXTREMO SUL DA BAHIA LTDA",
        cnpj: "02.611.487/0001-74",
        zipcode: "45836-000",
        address: "ROD BR 101, KM 808",
        number: "1130",
        district: "SANTO ANTONIO DO MONTE",
        city: "Itamaraju",
        state: "BA"
    },
    {
        name: "ABC COMERCIO DE CESTAS BASICAS - EIRELI - EPP",
        cnpj: "22.078.600/0001-05",
        zipcode: "08070-080",
        address: "R SERRA DO ITAQUERI",
        number: "600",
        district: "PARQUE CRUZEIRO DO SUL",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CETESB COMPANHIA AMBIENTAL DO ESTADO DE SAO PAULO",
        cnpj: "43.776.491/0036-08",
        zipcode: "13206-714",
        address: "R JOAO FERRARA",
        number: "555",
        district: "PITANGUEIRAS",
        city: "Jundiaí",
        state: "SP"
    },
    {
        name: "CETESB COMPANHIA AMBIENTAL DO ESTADO DE SAO PAULO",
        cnpj: "43.776.491/0001-70",
        zipcode: "05459-010",
        address: "AV PROF FREDERICO HERMA JR",
        number: "345",
        district: "ALTO DE PINHEIROS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CETESB COMPANHIA AMBIENTAL DO ESTADO DE SAO PAULO",
        cnpj: "43.776.491/0070-00",
        zipcode: "18304-700",
        address: "R DENISE",
        number: "131",
        district: "TERRAS DE IMBIRUCU",
        city: "Capão Bonito",
        state: "SP"
    },
    {
        name: "C.F.C. A PINHEIRENSE LTDA - ME",
        cnpj: "09.323.571/0001-31",
        zipcode: "05512-200",
        address: "AV PROFESSOR FRANCISCO MORATO",
        number: "1.876",
        district: "BUTANTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AUTO MOTO ESCOLA NOVA PINHEIRENSE LTDA - ME",
        cnpj: "62.631.874/0001-02",
        zipcode: "05513-400",
        address: "AV FRANCISCO MORATO",
        number: "3.339",
        district: "BUTANTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FORTICON CONSTRUÇOES E EMPREENDIMENTOS LTDA",
        cnpj: "17.244.355/0001-29",
        zipcode: "00000-000",
        address: "R DR FADLO HAIDAR 115",
        number: "",
        district: "ITAIM BIBI",
        city: "SP",
        state: "SP"
    },
    {
        name: "CHAGAS E ITAMI DISTRIBUIDORA COMERCIAL LTDA - EPP",
        cnpj: "19.074.219/0001-63",
        zipcode: "08550-010",
        address: "R MARECHAL FLORIANO PEIXOTO",
        number: "545",
        district: "CENTRO",
        city: "Poá",
        state: "SP"
    },
    {
        name: "CHAMPION LOGISTICA PROMOCIONAL LTDA - EPP",
        cnpj: "10.241.635/0001-34",
        zipcode: "08240-210",
        address: "R SAO JOAO DO CARIRI",
        number: "305",
        district: "JARDIM NORMA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CHAVES COMERCIO E LICITACOES EIRELI - EPP",
        cnpj: "11.333.352/0001-85",
        zipcode: "04377-190",
        address: "R BOCOROCA",
        number: "93",
        district: "VILA MIRA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CHEVE DISTRIBUIDORA DE AUTO PECAS E ACESSORIOS LTDA",
        cnpj: "61.349.890/0001-36",
        zipcode: "08070-002",
        address: "AV SAO MIGUEL",
        number: "6515",
        district: "ERMELINO MATARAZZO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CHIANG PRODUTOS ALIMENTICIOS LTDA",
        cnpj: "58.425.513/0001-24",
        zipcode: "08620-000",
        address: "R CHIANG",
        number: "127",
        district: "VILA IPELANDIA",
        city: "Suzano",
        state: "SP"
    },
    {
        name: "ARTSANA BRASIL LTDA",
        cnpj: "02.340.424/0005-54",
        zipcode: "04028-003",
        address: "AV IBIRAPUERA",
        number: "3103",
        district: "IBIRAPUERA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ARTSANA BRASIL LTDA",
        cnpj: "02.340.424/0008-05",
        zipcode: "03342-000",
        address: "AV REGENTE FEIJO",
        number: "1739",
        district: "JARDIM ANALIA FRANCO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ARTSANA BRASIL LTDA",
        cnpj: "02.340.424/0017-98",
        zipcode: "81200-100",
        address: "R PROFESSOR PEDRO VIRIATO PARIGOT DE SOUZA",
        number: "600",
        district: "MOSSUNGUE",
        city: "Curitiba",
        state: "PR"
    },
    {
        name: "ARTSANA BRASIL LTDA",
        cnpj: "02.340.424/0018-79",
        zipcode: "90810-080",
        address: "AV DIARIO DE NOTICIAS",
        number: "300",
        district: "BAIRRO CRISTAL",
        city: "Porto Alegre",
        state: "RS"
    },
    {
        name: "ARTSANA BRASIL LTDA",
        cnpj: "02.340.424/0011-00",
        zipcode: "30180-915",
        address: "AV OLEGARIO MACIEL",
        number: "1600",
        district: "BAIRRO DE LOURDES",
        city: "Belo Horizonte",
        state: "MG"
    },
    {
        name: "ARTSANA BRASIL LTDA",
        cnpj: "02.340.424/0015-26",
        zipcode: "74810-907",
        address: "AV JAMEL CECILIO",
        number: "3300",
        district: "JARDIM GOIAS",
        city: "Goiânia",
        state: "GO"
    },
    {
        name: "ARTSANA BRASIL LTDA",
        cnpj: "02.340.424/0007-16",
        zipcode: "01238-000",
        address: "AV HIGIENPOLIS,",
        number: "618",
        district: "HIGIENOPOLIS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ARTSANA BRASIL LTDA",
        cnpj: "02.340.424/0006-35",
        zipcode: "04707-900",
        address: "AV ROQUE PETRONI JUNIOR 1089",
        number: "1089",
        district: "JARDIM DAS ACACIAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ARTSANA BRASIL LTDA",
        cnpj: "02.340.424/0022-55",
        zipcode: "14026-900",
        address: "AV CORONEL FERNANDO FERREIRA LEITE",
        number: "1540",
        district: "JARDIM CALIFORNIA",
        city: "Ribeirão Preto",
        state: "SP"
    },
    {
        name: "ARTSANA BRASIL LTDA",
        cnpj: "02.340.424/0026-89",
        zipcode: "18132-900",
        address: "ROD CASTELO BRANCO",
        number: "S/N",
        district: "DONA CATARINA",
        city: "São Roque",
        state: "SP"
    },
    {
        name: "ARTSANA BRASIL LTDA",
        cnpj: "02.340.424/0024-17",
        zipcode: "18110-650",
        address: "Avenida Gisele Constantino",
        number: "1850",
        district: "Parque Bela Vista",
        city: "Votorantim",
        state: "SP"
    },
    {
        name: "ARTSANA BRASIL LTDA",
        cnpj: "02.340.424/0014-45",
        zipcode: "05477-000",
        address: "AV NACOES UNIDAS",
        number: "4777",
        district: "ALTO DE PINHEIROS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CARLA ALLIO CONFECCOES E COMERCIO DE MALHAS EIRELI - ME",
        cnpj: "00.924.457/0001-92",
        zipcode: "07500-000",
        address: "R PADRE LEONIDAS DA SILVA",
        number: "665",
        district: "CRUZEIRO",
        city: "Santa Isabel",
        state: "SP"
    },
    {
        name: "RAMOS ANTUNES & SOIDA LTDA",
        cnpj: "00.292.728/0001-34",
        zipcode: "07114-000",
        address: "AV DR RENATO DE ANDRADE MAIA 158",
        number: "",
        district: "PQ RENATO MAIA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "BAR CHURRASCARIA E PIZZARIA CARNAO LTDA - EPP",
        cnpj: "50.199.066/0001-20",
        zipcode: "02185-000",
        address: "PC NOVO MUNDO",
        number: "183",
        district: "PARQUE NOVO MUNDO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CIAFIRE COMERCIO E INSTALACOES HIDRAULICAS LTDA",
        cnpj: "17.011.048/0001-06",
        zipcode: "09726-430",
        address: "R FLAVIO FONGARO",
        number: "34",
        district: "JARDIM DO MAR",
        city: "São Bernardo do Campo",
        state: "SP"
    },
    {
        name: "CIGANINHA WE INDUSTRIA E COMERCIO DE CALCADOS LTDA - EPP",
        cnpj: "69.213.379/0001-14",
        zipcode: "03680-010",
        address: "R ARICA-MIRIM",
        number: "825",
        district: "BURGO PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CIM - COMPANHIA DE IDEIAS E MARCAS LTDA.",
        cnpj: "09.243.364/0002-58",
        zipcode: "01026-000",
        address: "AV SENADOR QUEIROS",
        number: "274",
        district: "CENTRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "GR INOX IND E COM LTDA",
        cnpj: "10.447.923/0001-40",
        zipcode: "07700-000",
        address: "AV DAVID KASIEZXY 560",
        number: "",
        district: "VL ROSINA",
        city: "Caieiras",
        state: "SP"
    },
    {
        name: "CIMAPI INDUSTRIA E COMERCIO LTDA.",
        cnpj: "66.908.781/0001-25",
        zipcode: "07700-000",
        address: "AV PAULICEIA",
        number: "1350",
        district: "LARANJEIRAS",
        city: "Caieiras",
        state: "SP"
    },
    {
        name: "RC FORMAS IND E COM LTDA",
        cnpj: "04.702.054/0001-50",
        zipcode: "07700-000",
        address: "AV DAVID KASIEZXY 560 GALPAO 3",
        number: "",
        district: "VL ROSINA",
        city: "Caieiras",
        state: "SP"
    },
    {
        name: "IND E COM CINCO B LTDA",
        cnpj: "04.429.258/0001-69",
        zipcode: "03807-290",
        address: "R MARTINHO DE SOUZA 66",
        number: "",
        district: "ERM MATARAZZO",
        city: "SP",
        state: "SP"
    },
    {
        name: "J A CASSIANO DE FREITAS",
        cnpj: "74.405.291/0001-34",
        zipcode: "01004-000",
        address: "R BARAO DE PARANAPIACABA",
        number: "61",
        district: "SE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CLASS ILUMINACAO LTDA - ME",
        cnpj: "13.291.339/0001-36",
        zipcode: "02534-010",
        address: "R DOUTOR IGNACIO PROENCA DE GOUVEIA",
        number: "468",
        district: "PARQUE PERUCHE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CLIART CLICHES SC LTDA",
        cnpj: "54.933.411/0001-69",
        zipcode: "03312-050",
        address: "R PROFESSOR PEDREIRA DE FREITAS",
        number: "1124",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CLINICA DE REPOUSO SERENIDADE LTDA",
        cnpj: "09.604.956/0001-77",
        zipcode: "02334-070",
        address: "R ANTONIO LOURENCO",
        number: "199",
        district: "AGUA FRIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MARCONDES IGLEZIAS - SERVICOS MEDICOS LTDA",
        cnpj: "50.937.119/0001-63",
        zipcode: "09090-770",
        address: "R DAS ESMERALDAS 58",
        number: "",
        district: "JARDIM",
        city: "Santo André",
        state: "SP"
    },
    {
        name: "GENICS CLINICA REPRODUTIVA E GENOMICA LTDA",
        cnpj: "11.328.210/0001-20",
        zipcode: "04063-000",
        address: "AV INDIANOPOLIS 171 SALA 1",
        number: "",
        district: "INDIANOPOLIS",
        city: "SP",
        state: "SP"
    },
    {
        name: "CLINICA MEDICA E ODONTOLOGICA MASTER MOGI LTDA - ME",
        cnpj: "12.252.236/0001-02",
        zipcode: "08730-190",
        address: "R SALVADOR MARINS",
        number: "47",
        district: "VILA VITORIA",
        city: "Mogi das Cruzes",
        state: "SP"
    },
    {
        name: "CLINICA DR FABIO NEGRELLI S/S LTDA",
        cnpj: "04.982.175/0001-00",
        zipcode: "04613-003",
        address: "R OTAVIO TARQUINIO DE SOUZA",
        number: "1046",
        district: "CAMPO BELO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LIGIA BORGES NOVAIS BRAGA SAUDE E ESTETICA",
        cnpj: "28.122.218/0001-38",
        zipcode: "04532-001",
        address: "R BANDEIRA PAULISTA",
        number: "530",
        district: "ITAIM BIBI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CLINICA SENDYK DE ODONTOLOGIA S/S - EPP",
        cnpj: "96.480.132/0001-37",
        zipcode: "01415-002",
        address: "R BELA CINTRA",
        number: "1891",
        district: "CERQUEIRA CESAR",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CLP & S CENTRO DE VALORIZACAO DA SAUDE LTDA - EPP",
        cnpj: "21.466.551/0001-15",
        zipcode: "08582-120",
        address: "R DAS ALFAZEMAS",
        number: "139",
        district: "JARDIM ADRIANA",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "TOCCI E DINIZ PET SHOP LTDA",
        cnpj: "30.813.069/0001-03",
        zipcode: "05617-030",
        address: "RUA REG LEON KANIEFSKY",
        number: "493",
        district: "VILA PROGREDIOR",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CME ESQUADRIAS DE ALUMINIO LTDA",
        cnpj: "03.561.343/0001-13",
        zipcode: "08030-250",
        address: "R JACUPEMA",
        number: "55",
        district: "VILA CURUCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LANGUAGE SCHOOL LUNA EIRELI ME",
        cnpj: "10.898.147/0002-85",
        zipcode: "08470-210",
        address: "R ARNALDO BONAVENTURA 377",
        number: "",
        district: "CID TIRADENTES",
        city: "SP",
        state: "SP"
    },
    {
        name: "A & S ESCOLA DE IDIOMAS LTDA - ME",
        cnpj: "11.335.550/0001-88",
        zipcode: "07851-120",
        address: "AV SETE DE SETEMBRO",
        number: "322",
        district: "CENTRO",
        city: "Franco da Rocha",
        state: "SP"
    },
    {
        name: "ECI ENGLISH CULTURAL INSTITUTE S/C LTDA - ME",
        cnpj: "00.356.507/0001-82",
        zipcode: "03871-000",
        address: "AV SAO MIGUEL",
        number: "4015",
        district: "JARDIM PENHA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LANGUAGE SCHOOL LUNA LTDA",
        cnpj: "10.898.147/0001-02",
        zipcode: "08030-310",
        address: "R GUARAITA 240",
        number: "",
        district: "VL CURUÇA",
        city: "SP",
        state: "SP"
    },
    {
        name: "COMERCIAL NACIONAL DE PRODUTOS HOSPITALARES LTDA",
        cnpj: "00.142.916/0001-86",
        zipcode: "01539-010",
        address: "R GAMA CERQUEIRA",
        number: "331",
        district: "CAMBUCI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CNTT - CLINICA DE NEFROLOGIA E TRANSPLANTE RENAL DO TATUAPE LTDA*",
        cnpj: "03.968.196/0001-09",
        zipcode: "03065-000",
        address: "R FILIPE CAMARAO",
        number: "215",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "POTENCIAL SERVIÇOS EM TELEFONIA EIRELI",
        cnpj: "10.631.334/0001-17",
        zipcode: "09725-760",
        address: "R NICOLAU FILIZOLA 100",
        number: "",
        district: "JD DAS AMERICAS",
        city: "SBCAMPO",
        state: "SP"
    },
    {
        name: "SOROCABA REFRESCOS S.A.",
        cnpj: "45.913.696/0001-85",
        zipcode: "18052-775",
        address: "ROD RAPOSO TAVARES",
        number: "S/N",
        district: "PARQUE RESERVA FAZENDA IMPERIAL",
        city: "Sorocaba",
        state: "SP"
    },
    {
        name: "COFRE SEGURO TERCEIRIZACAO DE SERVICOS E MONITORAMENTO LTDA - EPP",
        cnpj: "19.395.841/0001-73",
        zipcode: "02452-001",
        address: "R MARIA CURUPAITI",
        number: "745",
        district: "VILA ESTER (ZONA NORTE)",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ASSOCIACAO CERMAC DE ENSINO",
        cnpj: "09.942.402/0001-80",
        zipcode: "02435-001",
        address: "AV DO GUACA",
        number: "764",
        district: "LAUZANE PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "COLEGIO CRIARE I LTDA - ME",
        cnpj: "04.477.034/0001-22",
        zipcode: "08061-000",
        address: "AV ANTONIO LOUZADA ANTUNES",
        number: "127",
        district: "CIDADE PEDRO J NUNES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "COLEGIO CRIARE LTDA - EPP",
        cnpj: "01.408.452/0001-70",
        zipcode: "03807-000",
        address: "AV JOAO BATISTA DE OLIVEIRA",
        number: "101",
        district: "ERMELINO MATARAZZO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "INSTITUTO EDUCACIONAL FILOMENA DE MARCO LTDA",
        cnpj: "67.601.179/0001-03",
        zipcode: "08235-660",
        address: "RUA FOLHA DE HERA",
        number: "11",
        district: "LIMOEIRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ACPAR INSTITUTO DE ENSINO E PESQUISAS LTDA",
        cnpj: "60.550.357/0001-75",
        zipcode: "06715-125",
        address: "EST MUNICIPAL DO ESPIGAO",
        number: "1413",
        district: "GRANJA VIANA",
        city: "Cotia",
        state: "SP"
    },
    {
        name: "SOCIEDADE EDUCACIONAL ARUJAENSE S/C LTDA - ME",
        cnpj: "04.225.293/0001-66",
        zipcode: "07400-000",
        address: "ESTRADA DE SANTA ISABEL S/N KM 42",
        number: "",
        district: "VL PEDROSO",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "COLEGIO PLANETA ALEGRE LTDA - ME",
        cnpj: "09.281.232/0001-30",
        zipcode: "09070-310",
        address: "AV TIETE",
        number: "2323",
        district: "CAMPESTRE",
        city: "Santo André",
        state: "SP"
    },
    {
        name: "PH ESCOLA DE EDUCAÇAO INFANTIL E FUNDAMENTAL S/S LTDA",
        cnpj: "04.417.982/0001-72",
        zipcode: "05797-260",
        address: "R FELIX DE CARVALHO 155 LOTE 159 QD F",
        number: "",
        district: "JD IPE",
        city: "SP",
        state: "SP"
    },
    {
        name: "COMAR AR-CONDICIONADO LTDA",
        cnpj: "03.645.286/0001-50",
        zipcode: "11013-470",
        address: "R PAULO GONCALVES",
        number: "8",
        district: "VILA MATIAS",
        city: "Santos",
        state: "SP"
    },
    {
        name: "COMCABO COMERCIO E IMPORTACAO LTDA",
        cnpj: "61.774.048/0001-41",
        zipcode: "03004-001",
        address: "R DO GASOMETRO",
        number: "27",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "HIDROLESTE MATERIAIS PARA CONSTRUÇAO LTDA ME",
        cnpj: "02.410.382/0001-57",
        zipcode: "08576-000",
        address: "AV VER JOAO FERNANDES DA SILVA 90",
        number: "",
        district: "VL VIRGINIA",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "COMERCIAL HIDROLEF LTDA - ME",
        cnpj: "59.874.792/0001-76",
        zipcode: "08573-520",
        address: "AV BRASIL",
        number: "330",
        district: "JARDIM GONCALVES",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "COMERCIAL DE BEBIDAS MADA BASSI LTDA",
        cnpj: "01.489.296/0001-19",
        zipcode: "03803-020",
        address: "R DR JOAQUIM AUGUSTO DE CAMARGO",
        number: "522",
        district: "PARQUE BOTURUSSU",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "COMERCIAL VAREJISTA THBF LTDA - EPP",
        cnpj: "10.808.920/0001-94",
        zipcode: "03590-060",
        address: "AV PADRE ESTANISLAU DE CAMPOS",
        number: "475",
        district: "CONJ. HAB. PE. M. DA NOBREGA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "COMERCIAL TRIUNFO EQUIPAMENTOS PARA BARES E HOTELARIA EIRELI",
        cnpj: "11.568.770/0001-51",
        zipcode: "01027-000",
        address: "R PAULA SOUSA",
        number: "396",
        district: "CENTRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "COMERCIO DE ALIMENTOS HB POTENCIA - EIRELI",
        cnpj: "21.832.673/0001-88",
        zipcode: "05019-010",
        address: "Avenida Professor Alfonso Bovero",
        number: "1430",
        district: "Perdizes",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "COMERCIAL JARDIM BRASILIA LTDA - EPP",
        cnpj: "47.910.716/0001-90",
        zipcode: "03585-050",
        address: "PC VALDEMAR BASSI",
        number: "13",
        district: "JD BRASILIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "COMERCIAL S ETELVINA LTDA - EPP",
        cnpj: "53.934.683/0001-10",
        zipcode: "08471-000",
        address: "AV DOS METALURGICOS",
        number: "1111",
        district: "GUAIANAZES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "COMPASSO SERVICOS EM CONSTRUCAO CIVIL LTDA",
        cnpj: "11.517.772/0001-11",
        zipcode: "04545-041",
        address: "R SANTA JUSTINA",
        number: "352",
        district: "VILA OLIMPIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "REPRODUCOES E ARTES COMPULASER LTDA*",
        cnpj: "03.037.453/0001-80",
        zipcode: "02543-010",
        address: "AV LASAR SEGALL",
        number: "138",
        district: "IMIRIM",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "COMUNICACAO VISUAL COMPULASER EIRELI*",
        cnpj: "06.220.035/0001-12",
        zipcode: "02472-000",
        address: "R JOAO ROQUE",
        number: "144",
        district: "IMIRIM",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "COMUNICAÇAO VISUAL LOPES LTDA",
        cnpj: "17.511.533/0001-30",
        zipcode: "08081-430",
        address: "R AVELINO MATOS MACHADO 31",
        number: "",
        district: "PQ PAULISTANO",
        city: "SP",
        state: "SP"
    },
    {
        name: "CAGT SERVICOS ADMINISTRATIVOS E LOGISTICOS LTDA.",
        cnpj: "03.031.773/0001-23",
        zipcode: "05119-000",
        address: "R DINAH SILVEIRA DE QUEIROZ",
        number: "681",
        district: "CITY AMERICA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO RESIDENCIAL ALTOS DO BUTANTA",
        cnpj: "06.539.975/0001-79",
        zipcode: "05359-001",
        address: "AV NOSSA SRA DA ASSUNÇAO 647",
        number: "",
        district: "BUTANTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO RESIDENCIAL ALTOS DE SANTANA",
        cnpj: "58.492.489/0001-46",
        zipcode: "02479-001",
        address: "Rua Franklin do Amaral",
        number: "1051",
        district: "Vila Nova Cachoeirinha",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO CONJUNTO RESIDENCIAL ANA PAULA",
        cnpj: "58.489.311/0001-46",
        zipcode: "07080-020",
        address: "AV ITALO BRASILEIRO PIVA",
        number: "59",
        district: "PICANCO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO ATHENAS",
        cnpj: "54.958.517/0001-17",
        zipcode: "04634-901",
        address: "R ATICA",
        number: "209",
        district: "JARDIM BRASIL",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMNIO EDIFICIO BERTOLUCCI",
        cnpj: "03.978.333/0001-88",
        zipcode: "04534-004",
        address: "RUA JOAQUIM FLORIANO",
        number: "1052",
        district: "ITAIM BIBI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO CHATEAU PLACE VENDOME",
        cnpj: "54.224.985/0001-68",
        zipcode: "01414-001",
        address: "R HADDOCK LOBO 313",
        number: "",
        district: "CERQ CESAR",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO CONTEMPORANEO HOME E SERVICE",
        cnpj: "64.048.473/0001-41",
        zipcode: "04510-030",
        address: "R BRAS CARDOSO",
        number: "654",
        district: "VILA NOVA CONCEICAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO ASTURIAS",
        cnpj: "01.227.480/0001-90",
        zipcode: "07051-030",
        address: "R D MARGARIDA GALVAO",
        number: "203",
        district: "GOPOUVA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO BARAO DE SAO CARLOS",
        cnpj: "54.321.682/0001-63",
        zipcode: "04006-052",
        address: "R AFONSO DE FREITAS",
        number: "565",
        district: "PARAISO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO CASCAIS",
        cnpj: "54.933.528/0001-42",
        zipcode: "02731-030",
        address: "R RIBEIRO DE MORAES 159",
        number: "",
        district: "FREGUESIA DO O",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO CINDERELA",
        cnpj: "56.318.454/0001-60",
        zipcode: "01240-001",
        address: "Rua Maranhão",
        number: "183",
        district: "Higienópolis",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO ELIAS CURY",
        cnpj: "60.267.846/0001-14",
        zipcode: "03170-050",
        address: "R SAPUCAIA",
        number: "934",
        district: "MOOCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO FIORELA",
        cnpj: "54.003.538/0001-89",
        zipcode: "04614-000",
        address: "Rua Morais de Barros",
        number: "822",
        district: "Campo Belo",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO GENEVE",
        cnpj: "57.066.961/0001-16",
        zipcode: "04515-000",
        address: "AV SABIA",
        number: "89",
        district: "INDIANOPOLIS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO GRAMANET",
        cnpj: "54.323.936/0001-82",
        zipcode: "04561-000",
        address: "R GUARARAPES 300",
        number: "",
        district: "BROOKLIN",
        city: "",
        state: ""
    },
    {
        name: "CONDOMINIO EDIFICIO JARDIM DAS FLORES",
        cnpj: "54.205.489/0001-67",
        zipcode: "04180-020",
        address: "Rua Padre Jerônimo Vermin",
        number: "224",
        district: "Jardim Maria Estela",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO MARIA FLAVIA",
        cnpj: "54.485.990/0001-24",
        zipcode: "01501-040",
        address: "PC CARLOS GOMES",
        number: "67",
        district: "CENTRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "EDIFICIO MOEMA TOP LIFE",
        cnpj: "71.529.648/0001-06",
        zipcode: "04514-100",
        address: "R TUIM",
        number: "101",
        district: "INDIANOPOLIS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO MONTREAL",
        cnpj: "97.479.216/0001-13",
        zipcode: "03637-000",
        address: "R PADRE JOAO 763",
        number: "",
        district: "PENHA",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO OCTAVIO MORAES DANTAS",
        cnpj: "54.534.714/0001-09",
        zipcode: "01333-011",
        address: "R CINCINATO BRAGA 59",
        number: "",
        district: "PARAISO",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO NIMBUS",
        cnpj: "67.003.046/0001-35",
        zipcode: "05630-070",
        address: "R ELIZABETH B BALDINATO",
        number: "18",
        district: "MORUMBI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIF PAOLO UCCELO",
        cnpj: "54.221.346/0001-49",
        zipcode: "01403-003",
        address: "Alameda Joaquim Eugênio de Lima",
        number: "1601",
        district: "Jardim Paulista",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO PAULISTA CLASSIC FLAT",
        cnpj: "07.226.518/0001-97",
        zipcode: "01415-000",
        address: "R BELA CINTRA 672",
        number: "",
        district: "CONSOLAÇAO",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO NAHIM RACHID",
        cnpj: "52.371.945/0001-13",
        zipcode: "07010-000",
        address: "Praça Presidente Getúlio Vargas",
        number: "296",
        district: "Centro",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO RAPHA",
        cnpj: "04.198.969/0001-70",
        zipcode: "01301-100",
        address: "R DA CONSOLACAO",
        number: "1681",
        district: "CERQUEIRA CEZAR",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO SAO THOME",
        cnpj: "54.199.047/0001-55",
        zipcode: "01404-001",
        address: "ALAMEDA CAMPINAS 781",
        number: "",
        district: "JD PAULISTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO VIVENDAS DA SERRA",
        cnpj: "01.298.270/0001-93",
        zipcode: "07073-010",
        address: "R SAO MANOEL",
        number: "161",
        district: "VL ROSALIA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO BRISTOL",
        cnpj: "04.543.257/0001-40",
        zipcode: "04608-002",
        address: "R CONDE DE PORTO ALEGRE",
        number: "1142",
        district: "CAMPO BELO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO MARQUES DE TOLEDO",
        cnpj: "53.999.546/0001-64",
        zipcode: "04702-900",
        address: "AVENIDA STO AMARO",
        number: "5328",
        district: "SANTO AMARO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO FLORENCA-EDIFICIO RESIDENCIAL",
        cnpj: "11.816.561/0001-80",
        zipcode: "07091-000",
        address: "R NOSSA SENHORA MAE DOS HOMENS",
        number: "942",
        district: "VILA PROGRESSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "EDIFICIO ILHAS DO CARIBE",
        cnpj: "02.278.916/0001-33",
        zipcode: "02336-080",
        address: "R CASA FORTE 237",
        number: "",
        district: "AGUA FRIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO JANUARIO RICCI",
        cnpj: "02.212.646/0001-68",
        zipcode: "01529-000",
        address: "R PIRES DA MOTA",
        number: "30",
        district: "ACLIMACAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO JARDIM DI FRANCO",
        cnpj: "01.237.928/0001-57",
        zipcode: "03335-040",
        address: "R DA MEACAO",
        number: "210",
        district: "CHACARA PARAISO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO JUSCELINO KUBITSCHEK",
        cnpj: "62.452.362/0001-70",
        zipcode: "04530-030",
        address: "R TEN NEGRAO",
        number: "140",
        district: "CHACARA ITAIM",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO MANSAO VITOR HUGO",
        cnpj: "54.224.811/0001-03",
        zipcode: "01240-010",
        address: "Rua Rio de Janeiro",
        number: "67",
        district: "Higienópolis",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO MARIANA ANTIBAS",
        cnpj: "55.232.417/0001-71",
        zipcode: "03170-050",
        address: "Rua Sapucaia",
        number: "954",
        district: "Alto da Mooca",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO DO EDIFICIO MORADA DO JACARANDA",
        cnpj: "97.465.892/0001-38",
        zipcode: "04302-000",
        address: "R APOTRIBU 150",
        number: "",
        district: "SAUDE",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO FARNESE",
        cnpj: "55.614.606/0001-09",
        zipcode: "04512-051",
        address: "R ESCOBAR ORTIZ 444",
        number: "",
        district: "VL NOVA CONCEIÇAO",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO PARK VILLAGE",
        cnpj: "09.038.645/0001-98",
        zipcode: "04513-030",
        address: "R MONTE APRAZIVEL",
        number: "149",
        district: "VILA NOVA CONCEICAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO PLACE VENDOME PIGALLE",
        cnpj: "67.188.862/0001-60",
        zipcode: "04077-020",
        address: "AV MOEMA 177",
        number: "",
        district: "MOEMA",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO PARQUE EUROPA",
        cnpj: "61.590.592/0001-33",
        zipcode: "03448-010",
        address: "R DR CRISTIANO AUTENCELDE SILVA 360",
        number: "",
        district: "VL CARRAO",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO PRAÇA DOS PASSAROS",
        cnpj: "54.225.321/0001-13",
        zipcode: "04164-001",
        address: "R ROMAO PUIGGARI 861",
        number: "",
        district: "VL DAS MERCES",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONJUNTO RESIDENCIAL EDIFICIOS RENOIR E MONET",
        cnpj: "55.439.582/0001-07",
        zipcode: "03186-010",
        address: "R CAPO LARGO 190",
        number: "",
        district: "MOOCA",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO SANTA CATARINA",
        cnpj: "09.558.051/0001-08",
        zipcode: "01311-000",
        address: "AV PAULISTA",
        number: "283",
        district: "BELA VISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO SPORTS GARDEN LESTE",
        cnpj: "12.226.489/0001-01",
        zipcode: "03451-040",
        address: "R DESEMBARGADOR ANDRADE PINTO",
        number: "110",
        district: "PARQUE MARIA LUIZA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO TAPAJOS",
        cnpj: "00.154.437/0001-80",
        zipcode: "04153-001",
        address: "R FRANCISCO TAPAJOS",
        number: "539",
        district: "JABAQUARA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO TORRE BLANCA",
        cnpj: "58.396.144/0001-99",
        zipcode: "03312-052",
        address: "R PROF PEDREIRA DE FREITAS 151",
        number: "",
        district: "TATUAPE",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO VENTURA GUARULHOS",
        cnpj: "20.640.586/0001-66",
        zipcode: "07020-321",
        address: "RUA UTAMA",
        number: "130",
        district: "VILA PAULISTA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CONDOMINIO VILLAGGIO DI VERONA",
        cnpj: "01.288.462/0001-19",
        zipcode: "03063-000",
        address: "AV CELSO GARCIA 5885",
        number: "",
        district: "TATUAPE",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO VILLAGIO FLAMINGO I",
        cnpj: "09.278.165/0001-02",
        zipcode: "05634-020",
        address: "R OSIRIS MAGALHAES DE ALMEIDA 180",
        number: "",
        district: "JD MONTE KEMEL",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO VILLAGIO SAM REMO",
        cnpj: "03.096.474/0001-77",
        zipcode: "05058-000",
        address: "R PONTA PORA 203",
        number: "",
        district: "LAPA",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO AMAZONIA EMPRESARIAL ALPHAVILLE",
        cnpj: "28.032.578/0001-49",
        zipcode: "06454-040",
        address: "AL MAMORE",
        number: "687",
        district: "ALPHAVILLE INDUSTRIAL",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "RESIDENCIAL AMERICA",
        cnpj: "03.679.790/0001-71",
        zipcode: "08230-030",
        address: "R CAROLINA DA FONSECA",
        number: "407",
        district: "ITAQUERA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO RESIDENCIAL ARAUCARIAS I-A",
        cnpj: "00.397.536/0001-92",
        zipcode: "08223-365",
        address: "R SUBRAGI",
        number: "125",
        district: "CIDADE A E CARVALHO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO CALIFORNIA NOVAMERICA COLLECTION",
        cnpj: "18.293.297/0001-96",
        zipcode: "04754-010",
        address: "AV MARIO LOPES LEAO",
        number: "1350",
        district: "SANTO AMARO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO DA CHACARA SANTA ELENA",
        cnpj: "55.215.263/0001-00",
        zipcode: "04740-000",
        address: "RUA JOAQUIM JOSE ESTEVES",
        number: "60",
        district: "STO AMARO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO COTE SAUVAGE",
        cnpj: "02.316.483/0001-63",
        zipcode: "04618-030",
        address: "R EDSON",
        number: "177",
        district: "CAMPO BELO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO FELICIO JORGE",
        cnpj: "67.147.280/0001-36",
        zipcode: "01026-000",
        address: "AV SEN QUEIROS",
        number: "536",
        district: "SANTA EFIGENIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "EDIFICIO PARATY",
        cnpj: "07.965.489/0001-85",
        zipcode: "07060-162",
        address: "R RICARDO BIONDI",
        number: "89",
        district: "VILA FANNY",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO PERSONALE CAMPO BELO",
        cnpj: "08.560.614/0001-30",
        zipcode: "04602-004",
        address: "R BARAO DO TRIUNFO",
        number: "801",
        district: "CAMPO BELO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO PLAZA I",
        cnpj: "08.319.333/0001-90",
        zipcode: "04576-080",
        address: "R JAMES JOULE",
        number: "92",
        district: "CIDADE MONCOES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO RESIDENCE III",
        cnpj: "54.061.031/0001-81",
        zipcode: "01224-020",
        address: "R AURELIANO COUTINHO",
        number: "338",
        district: "HIGIENOPOLIS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO SAO LUIZ",
        cnpj: "54.640.990/0001-51",
        zipcode: "04543-900",
        address: "AV PRES JUSCELINO KUBITSCH",
        number: "1830",
        district: "ITAIM BIBI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO TAORMINA",
        cnpj: "03.111.185/0001-08",
        zipcode: "04116-240",
        address: "R GALOFRE",
        number: "35",
        district: "CHAC KLABIM",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO TERRACO ANALIA FRANCO",
        cnpj: "11.579.754/0001-64",
        zipcode: "03414-010",
        address: "R SAO CONSTANCIO",
        number: "72",
        district: "VILA MAFRA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO FL CORPORATE",
        cnpj: "18.883.092/0001-60",
        zipcode: "04538-132",
        address: "AVENIDA BRIGADEIRO FARIA LIMA",
        number: "4300",
        district: "ITAIM BIBI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO LE JARDIN ACLIMACAO",
        cnpj: "17.514.995/0001-01",
        zipcode: "01530-010",
        address: "R ALMEIDA TORRES",
        number: "212",
        district: "ACLIMACAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO MARAVILLE NATURE",
        cnpj: "22.226.794/0001-49",
        zipcode: "13206-650",
        address: "R UNIAO",
        number: "454",
        district: "PARQUE UNIAO",
        city: "Jundiaí",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO MARIA CECILIA LARA CAMPOS",
        cnpj: "07.172.979/0001-24",
        zipcode: "04543-000",
        address: "AV PRESIDENTE JUSCELINO KUBITSCHEK",
        number: "1400",
        district: "CHACARA ITAIM",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO RESIDENCIAL ALTOS DO ITAIM",
        cnpj: "10.676.024/0001-19",
        zipcode: "08140-060",
        address: "R ANTONIO JOAO DE MEDEIROS",
        number: "465",
        district: "SAO PAULO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO SPAZIO ATTUALE",
        cnpj: "05.471.061/0001-50",
        zipcode: "03116-000",
        address: "R DO ORATORIO",
        number: "136",
        district: "MOOCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO THE ONE",
        cnpj: "16.935.872/0001-81",
        zipcode: "04544-051",
        address: "R MINISTRO JESUINO CARDOSO",
        number: "454",
        district: "VILA OLIMPIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO URUPEMA E URUBICI",
        cnpj: "54.205.471/0001-65",
        zipcode: "04531-010",
        address: "R PEDROSO ALVARENGA",
        number: "313",
        district: "ITAIM BIBI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO VARANDA NOVAMERICA",
        cnpj: "17.817.639/0001-67",
        zipcode: "04757-020",
        address: "R DR MARIO VILAS BOAS RODRIGUES",
        number: "175",
        district: "JARDIM DOM BOSCO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO VITORIA",
        cnpj: "54.794.904/0001-65",
        zipcode: "07114-190",
        address: "Rua Elis Regina",
        number: "154",
        district: "Parque Renato Maia",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CONDUENT DO BRASIL SERVICOS DE CALL CENTER LTDA.",
        cnpj: "16.668.736/0001-72",
        zipcode: "04795-100",
        address: "AV DAS NACOES UNIDAS",
        number: "17.891",
        district: "SANTO AMARO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "M. A. PICANCO EIRELI",
        cnpj: "17.432.364/0001-43",
        zipcode: "69036-790",
        address: "R RAIMUNDO NONATO DE CASTRO",
        number: "592",
        district: "SANTO AGOSTINHO",
        city: "Manaus",
        state: "AM"
    },
    {
        name: "CONEXAO CRIANÇA LTDA EPP",
        cnpj: "09.446.413/0001-79",
        zipcode: "03412-030",
        address: "R CACAQUERA 235",
        number: "",
        district: "TATUAPE",
        city: "",
        state: ""
    },
    {
        name: "CONFECCOES SERENISSIMA LTDA - ME",
        cnpj: "04.759.373/0001-00",
        zipcode: "03676-000",
        address: "R GENERAL FERREIRA AZEVEDO",
        number: "287",
        district: "JARDIM TRES MARIAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MARIA INES FELIX DA SILVA CONFECCOES",
        cnpj: "11.204.154/0001-11",
        zipcode: "07244-250",
        address: "R MARAJUARA",
        number: "189",
        district: "PQ. JUREMA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "ROSANGELA DE FATIMA FERNANDES - ME",
        cnpj: "07.583.193/0001-08",
        zipcode: "08161-440",
        address: "R FRANCISCA MAIRINQUE GUERRA 137A",
        number: "",
        district: "JD PIE",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONFECÇOES O PRODIGO IND E COM LTDA",
        cnpj: "64.572.589/0001-85",
        zipcode: "08180-000",
        address: "R PROFESSOR ALIPIO DE BARROS 603",
        number: "",
        district: "JD MAIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONFECCOES REMAILI LTDA - EPP",
        cnpj: "38.930.996/0001-07",
        zipcode: "03445-010",
        address: "PC DUERE",
        number: "42",
        district: "VILA CARRAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONFECCOES DE ROUPAS ROEMI EIRELI",
        cnpj: "48.709.307/0001-92",
        zipcode: "02330-001",
        address: "AV NOVA CANTAREIRA",
        number: "698",
        district: "TUCURUVI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONFECCOES TRIPE LTDA",
        cnpj: "62.952.551/0001-02",
        zipcode: "03016-010",
        address: "R MARIA JOAQUINA",
        number: "376",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "NOVA SANTA FE CONFECÇOES DE ROUPAS LTDA",
        cnpj: "09.518.799/0001-87",
        zipcode: "03013-011",
        address: "R MENDES JUNIOR 391",
        number: "",
        district: "BRAS",
        city: "",
        state: ""
    },
    {
        name: "CONSENSO ASSESSORIA FISCAL E CONTABIL SOCIEDADE SIMPLES PURA - EPP",
        cnpj: "65.886.806/0001-74",
        zipcode: "03604-010",
        address: "R PADRE BENEDITO DE CAMARGO",
        number: "949",
        district: "PENHA DE FRANCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONSITEC ENGENHARIA E TECNOLOGIA LTDA",
        cnpj: "02.243.019/0001-94",
        zipcode: "03874-200",
        address: "R ARTHUR FRIEDENREICH 43/57",
        number: "",
        district: "VL RIO BRANCO",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONSORCIO BETIM",
        cnpj: "27.329.775/0001-61",
        zipcode: "32671-150",
        address: "AV JUIZ MARCO TULIO ISAAC",
        number: "3400",
        district: "BETIM INDUSTRIAL",
        city: "Betim",
        state: "MG"
    },
    {
        name: "CONSORCIO BACIAS PARAIBA E CANTAREIRA",
        cnpj: "23.400.882/0001-88",
        zipcode: "02064-120",
        address: "R DEPUTADO VICENTE PENIDO",
        number: "255",
        district: "VILA GUILHERME",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONSORCIO FBF CODIGO",
        cnpj: "29.285.333/0001-96",
        zipcode: "03337-070",
        address: "R NAGIB IZAR",
        number: "457",
        district: "JARDIM ANALIA FRANCO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONSORCIO INFRA ESTRUTURA DO SAMBA",
        cnpj: "12.871.394/0001-32",
        zipcode: "00000-000",
        address: "AV DR ABRAHAO RIBEIRO 497",
        number: "",
        district: "BARRA FUNDA",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONSORCIO SUMARE",
        cnpj: "15.524.459/0001-61",
        zipcode: "01452-910",
        address: "AV BRIGADEIRO FARIA LIMA",
        number: "1931",
        district: "JARDIM PAULISTANO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONSORCIO TGS - MANUTENCAO LINHAS 11 E 12",
        cnpj: "32.146.841/0001-06",
        zipcode: "08550-130",
        address: "Rua Herculano Duarte Ribas",
        number: "720",
        district: "Conjunto Alvorada",
        city: "Poá",
        state: "SP"
    },
    {
        name: "CONSORCIO TGS MANUTENCAO LINHAS 08 E 09",
        cnpj: "32.239.092/0001-53",
        zipcode: "01204-003",
        address: "R GUAIANASES",
        number: "1041",
        district: "CAMPOS ELISEOS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONSORCIO TRI",
        cnpj: "30.634.553/0001-67",
        zipcode: "05424-010",
        address: "R PAIS LEME",
        number: "524",
        district: "PINHEIROS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONSORCIO UNC CONSOLACAO*",
        cnpj: "31.082.302/0001-80",
        zipcode: "01452-001",
        address: "AVENIDA BRIG FARIA LIMA",
        number: "1931",
        district: "JARDIM PAULISTANO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONSTRUTORA MONTEIRO MOURA LTDA - ME",
        cnpj: "17.973.781/0001-01",
        zipcode: "08505-000",
        address: "R NOVE DE JULHO",
        number: "1358",
        district: "JARDIM NOVE DE JULHO",
        city: "Ferraz de Vasconcelos",
        state: "SP"
    },
    {
        name: "CONSTER CONSTRUCOES E TERRAPLANAGEM LTDA",
        cnpj: "46.271.383/0001-33",
        zipcode: "05118-000",
        address: "R ARTUR ORLANDO",
        number: "89",
        district: "VILA JAGUARA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ACOCONSTRUA COMERCIO DE FERRAGENS E MATERIAL DE CONSTRUCAO LTDA - ME",
        cnpj: "01.128.951/0001-03",
        zipcode: "03870-000",
        address: "AV SAO MIGUEL",
        number: "3870",
        district: "VILA RIO BRANCO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONSTRUALPHA CONSTRUCOES LTDA",
        cnpj: "05.126.036/0001-30",
        zipcode: "06453-003",
        address: "R CALCADA DAS VIOLETAS 314",
        number: "",
        district: "ALPHAVILLE",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "CONSTRU JÁ COM EMPRENTEIRA E CONSTRUCAO CIVIL LTDA",
        cnpj: "14.306.000/0001-04",
        zipcode: "06419-200",
        address: "R TUCURUVI 78",
        number: "",
        district: "CHAC MARCO",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "A3 HOLDING LTDA",
        cnpj: "13.226.694/0001-21",
        zipcode: "08565-600",
        address: "R JOAO PEKNY",
        number: "1225",
        district: "JARDIM ITAMARATI",
        city: "Poá",
        state: "SP"
    },
    {
        name: "CONSTRUTORA PASSARELLI LTDA",
        cnpj: "60.625.829/0001-01",
        zipcode: "05424-904",
        address: "R PAES LEME",
        number: "524",
        district: "PINHEIROS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONSULT ASSESSORIA E ORGANIZAÇAO DE DOCUMENTOS LTDA ME",
        cnpj: "07.134.503/0001-07",
        zipcode: "03660-010",
        address: "R MADALENA JULIA 40 CJ 2",
        number: "",
        district: "VL RE",
        city: "",
        state: ""
    },
    {
        name: "CONTER CONSTRUCOES E COMERCIO SA",
        cnpj: "60.829.215/0001-41",
        zipcode: "05118-020",
        address: "R ALTAMIRA DO PARANA",
        number: "34",
        district: "VILA JAGUARA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONTIL IND E COM LTDA",
        cnpj: "63.041.479/0002-05",
        zipcode: "13252-810",
        address: "RODOVIA ALKINDAR MONTEIRO JUNQUEIRA (ITATIBA/BRAGANCA) : RO",
        number: "",
        district: "SITIO DA MOENDA",
        city: "Itatiba",
        state: "SP"
    },
    {
        name: "CONTINENTAL MIX COM DE ARMARINHOS LTDA",
        cnpj: "11.120.120/0001-49",
        zipcode: "06753-001",
        address: "AV FRANCISCO ETTORE PEDRO MARI 1655",
        number: "",
        district: "JD FREI GALVAO",
        city: "Taboão da Serra",
        state: "SP"
    },
    {
        name: "CONTROL MOTORS GESTAO E COM DE VEIC AUTOMOTORES LT",
        cnpj: "18.632.218/0001-24",
        zipcode: "09690-000",
        address: "R MMDC 1345",
        number: "",
        district: "PAULICEIA",
        city: "SBCAMPO",
        state: "SP"
    },
    {
        name: "CONTROLID IND COM DE HARDWARE E SERVIÇOS DE TECNOLOGIA LTDA",
        cnpj: "08.238.299/0003-90",
        zipcode: "37640-000",
        address: "R JOSEPHA GOMES DE SOUZA",
        number: "298",
        district: "DIS IND PIRES II",
        city: "Extrema",
        state: "MG"
    },
    {
        name: "CONVERTE IND METALURGICA LTDA",
        cnpj: "02.935.406/0001-91",
        zipcode: "03054-040",
        address: "R CEL ANTONIO MARCELO 243",
        number: "",
        district: "BRAS",
        city: "SP",
        state: "SP"
    },
    {
        name: "CM SOUTH AMERICA REPRESENTACOES LTDA",
        cnpj: "07.446.285/0001-38",
        zipcode: "04005-000",
        address: "R ABILIO SOARES",
        number: "233",
        district: "PARAISO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CM BRAZIL TECHNOLOGY IMPORTAÇAO E EXPORTAÇAO LTDA",
        cnpj: "27.886.700/0001-81",
        zipcode: "01327-010",
        address: "Praça Amadeu Amaral",
        number: "27",
        district: "Bela Vista",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "COLINAS ASSISTENCIA FUNERAL A FAMILIA EIRELI - ME",
        cnpj: "18.777.446/0001-92",
        zipcode: "07793-595",
        address: "R DESCALVADO (JD SANTANA)",
        number: "46",
        district: "PARAISO (POLVILHO)",
        city: "Cajamar",
        state: "SP"
    },
    {
        name: "COPENER FLORESTAL LTDA",
        cnpj: "15.692.999/0001-54",
        zipcode: "48030-300",
        address: "R DR. JOSE TIAGO CORREIA",
        number: "S/N",
        district: "ALAGOINHAS",
        city: "Alagoinhas",
        state: "BA"
    },
    {
        name: "COQUEIRO + SANTANA CONSTRUCOES E INSTALACAO ELETRICA EIRELI",
        cnpj: "24.156.054/0001-09",
        zipcode: "08072-245",
        address: "RUA RIO TINGUA",
        number: "74",
        district: "UNIAO DE VILA NOVA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CORFIT ACADEMIA LTDA- ME",
        cnpj: "20.404.522/0001-66",
        zipcode: "06850-100",
        address: "AV XV DE NOVEMBRO 89 LJ 4002",
        number: "",
        district: "CENTRO",
        city: "Itapecerica da Serra",
        state: "SP"
    },
    {
        name: "CORR PLASTIK INDUSTRIAL LTDA",
        cnpj: "67.731.091/0001-06",
        zipcode: "13315-000",
        address: "ESTRADA FAZENDA CACHOEIRA",
        number: "571",
        district: "JACARE",
        city: "Cabreúva",
        state: "SP"
    },
    {
        name: "CALIFORNIA PRESTADORA DE SERVICOS LTDA - EPP",
        cnpj: "02.224.074/0001-37",
        zipcode: "03402-000",
        address: "AV CONSELHEIRO CARRAO",
        number: "840",
        district: "CHACARA CALIFORNIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "COSTA CRUZEIRO AGENCIA MARITIMA E TURISMO LTDA",
        cnpj: "61.450.292/0001-59",
        zipcode: "01310-000",
        address: "AV PAULISTA 460 10 ANDAR",
        number: "",
        district: "JD PAULISTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "COZIFLAN CONEXOES DO BRASIL LTDA",
        cnpj: "20.769.013/0001-37",
        zipcode: "07210-140",
        address: "R LAGOA DA CANOA 333 GALPAO 1",
        number: "",
        district: "JD ARAPONGAS",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CQM CONSTRUTORA LTDA",
        cnpj: "03.070.795/0001-00",
        zipcode: "03609-090",
        address: "R NORBERTO ESTEVES 163",
        number: "",
        district: "PENHA",
        city: "SP",
        state: "SP"
    },
    {
        name: "CRAMA CRAVACAO DE JOIAS LTDA",
        cnpj: "04.626.059/0001-40",
        zipcode: "04524-001",
        address: "AL DOS ARAPANES 881 CJ 72",
        number: "",
        district: "MOEMA",
        city: "SP",
        state: "SP"
    },
    {
        name: "CREAÇOES LEBIEN LTDA",
        cnpj: "01.203.806/0001-40",
        zipcode: "01122-020",
        address: "R PROF CESARE LOMBROSO 106",
        number: "",
        district: "BOM RETIRO",
        city: "SP",
        state: "SP"
    },
    {
        name: "CRECHE COMUNITARIA DA MAE POBRE",
        cnpj: "63.898.993/0001-80",
        zipcode: "08544-400",
        address: "R JORNALISTA SEBASTIAO DE SOUZA LEMOS 200",
        number: "",
        district: "JD PEROLA",
        city: "Ferraz de Vasconcelos",
        state: "SP"
    },
    {
        name: "ASSOCIACAO SAO VICENTE DE PAULO",
        cnpj: "33.570.052/0018-09",
        zipcode: "02407-000",
        address: "R JERONIMA DIAS",
        number: "123",
        district: "SANTANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CARITAS DIOCESANA DE CAMPO LIMPO - CDCL",
        cnpj: "64.033.061/0064-11",
        zipcode: "06814-190",
        address: "Rua Bolívia",
        number: "114",
        district: "Jardim dos Moraes",
        city: "Embu das Artes",
        state: "SP"
    },
    {
        name: "CREN - CENTRO DE RECUPERACAO E EDUCACAO NUTRICIONAL",
        cnpj: "71.732.960/0001-94",
        zipcode: "04049-010",
        address: "R DAS AZALEAS",
        number: "244",
        district: "SAUDE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CHERRYPLUS CRIACOES ARTISTICAS LTDA - ME",
        cnpj: "10.158.709/0001-73",
        zipcode: "01406-000",
        address: "AV NOVE DE JULHO",
        number: "3.228",
        district: "JARDIM PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONSELHO REGINAL DE SERVIÇO SOCIAL",
        cnpj: "43.762.376/0001-46",
        zipcode: "01203-002",
        address: "R CONSELHEIRO NEBIAS 1022",
        number: "",
        district: "CAMPOS ELISEOS",
        city: "SP",
        state: "SP"
    },
    {
        name: "CRF ADMINISTRAÇAO DE BENS IMOVEIS LTDA",
        cnpj: "10.535.451/0001-87",
        zipcode: "04142-090",
        address: "AV BOSQUE DA SAUDE 207",
        number: "",
        district: "SAUDE",
        city: "SP",
        state: "SP"
    },
    {
        name: "CRIOGENESIS BIOTECNOLOGIA LTDA.",
        cnpj: "07.796.165/0001-60",
        zipcode: "04560-020",
        address: "R LUISIANIA",
        number: "147",
        district: "BROOKLIN NOVO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CROWN EMBALAGENS METALICAS DA AMAZONIA S/A",
        cnpj: "33.174.335/0012-38",
        zipcode: "64012-775",
        address: "ROD TER-150 (POVOADO SANTA HELENA)",
        number: "KM 16",
        district: "SANTA MARIA DA CODIPE",
        city: "Teresina",
        state: "PI"
    },
    {
        name: "CROWN EMBALAGENS METALICAS DA AMAZONIA S/A",
        cnpj: "33.174.335/0003-47",
        zipcode: "13318-000",
        address: "ROD DOM GABRIEL PAULINO BUENO COUTO",
        number: "S/N",
        district: "JACARE",
        city: "Cabreúva",
        state: "SP"
    },
    {
        name: "CROWN EMBALAGENS METALICAS DA AMAZONIA S/A",
        cnpj: "33.174.335/0001-85",
        zipcode: "69075-130",
        address: "R JUTAI",
        number: "405",
        district: "DISTRITO INDUSTRIAL",
        city: "Manaus",
        state: "AM"
    },
    {
        name: "COMERCIO DE MAQUINAS E ELEVADORES CRR LTDA - ME",
        cnpj: "79.239.836/0001-01",
        zipcode: "02249-010",
        address: "R ELVIRA",
        number: "105",
        district: "VILA GUSTAVO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CSE CONSULT SOLUÇOES EMPRESARIAIS & CONTABILIDADE",
        cnpj: "13.802.943/0001-80",
        zipcode: "07091-030",
        address: "R BEBEDOURO 16 SOBRELOJA",
        number: "",
        district: "JD BEBEDOURO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "C.S.E. - MECANICA E INSTRUMENTACAO S.A.",
        cnpj: "78.559.440/0001-70",
        zipcode: "83320-310",
        address: "R LIBERIA",
        number: "464",
        district: "ESPLANADA",
        city: "Pinhais",
        state: "PR"
    },
    {
        name: "CTM - CENTRO TECNOLOGICO DE METROLOGIA, COMERCIO DE INSTRUMENTOS E SERVICOS LTDA",
        cnpj: "68.976.844/0001-06",
        zipcode: "02864-000",
        address: "R LUIZ JOSE J.FREIRE",
        number: "375",
        district: "VILA PENTEADO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CENTRO GESTOR E OPERACIONAL DO SISTEMA DE PROTECAO DA AMAZONIA",
        cnpj: "07.129.796/0002-07",
        zipcode: "78903-711",
        address: "AVENIDA LAURO SODRE",
        number: "6500",
        district: "AEROPORTO",
        city: "Porto Velho",
        state: "RO"
    },
    {
        name: "FUND PE ANCHIETA CENTRO PAULISTA RADIO E TV EDUCATIVAS",
        cnpj: "61.914.891/0001-86",
        zipcode: "05036-900",
        address: "R CENNO SBRIGHI",
        number: "378",
        district: "AGUA BRANCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CURRICULUM TECNOLOGIA LTDA",
        cnpj: "03.690.015/0001-14",
        zipcode: "00000-000",
        address: "R DO ROCIO 313",
        number: "",
        district: "VL OLIMPIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "KENNA - EDUCACAO E CULTURA LTDA.",
        cnpj: "06.311.414/0003-80",
        zipcode: "02017-000",
        address: "RUA ALFREDO PUJOL",
        number: "112",
        district: "SANTANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TAURANGA ARTIGOS ESPORTIVOS EIRELI",
        cnpj: "21.557.421/0001-98",
        zipcode: "02410-010",
        address: "R JOAO DE LAET",
        number: "432",
        district: "VILA AURORA (ZONA NORTE)",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TATIANE FARIAS DOS SANTOS CONFECCOES",
        cnpj: "31.500.908/0001-98",
        zipcode: "08142-360",
        address: "RUA CONJUNTO DA PAZ",
        number: "244",
        district: "JARDIM MIRIAM",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "L&J REDES DE TELECOMUNICAÇOES E NFORMATICA LTDA ME",
        cnpj: "12.193.909/0002-73",
        zipcode: "07262-160",
        address: "ESTRADA DO ITAIM 2351",
        number: "",
        district: "JD IZILDINHA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "D NISSA UNIFORMES - EIRELI",
        cnpj: "27.857.519/0001-47",
        zipcode: "08680-000",
        address: "AV MAJOR PINHEIRO FROES",
        number: "1897",
        district: "VILA MARIA DE MAGGI",
        city: "Suzano",
        state: "SP"
    },
    {
        name: "EDMILSON FERREIRA DIAS DA SILVA",
        cnpj: "05.905.964/0001-00",
        zipcode: "06757-220",
        address: "R ANTONIO FRANCISCO DE AZEVEDO FILHO",
        number: "133",
        district: "CIDADE INTERCAP",
        city: "Taboão da Serra",
        state: "SP"
    },
    {
        name: "D. FILIPA - LOCAÇÃO DE MATERIAIS PARA FESTAS E EVENTOS LTDA",
        cnpj: "09.487.912/0001-04",
        zipcode: "05434-000",
        address: "R WISARD",
        number: "540",
        district: "VL MADALENA",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONSELHO REGIONAL DE ENGENHARIA E AGRONOMIA DE MATO GROSSO",
        cnpj: "03.471.158/0001-38",
        zipcode: "78008-000",
        address: "AV HIST RUBENS DE MENDONCA",
        number: "491",
        district: "ARAES",
        city: "Cuiabá",
        state: "MT"
    },
    {
        name: "EMPRESA BRASILEIRA DE BEBIDAS E ALIMENTOS S/A",
        cnpj: "07.604.556/0006-40",
        zipcode: "62800-000",
        address: "ROD BR 304 - KM 55,2",
        number: "S/N",
        district: "ALTO DA CHEIA",
        city: "Aracati",
        state: "CE"
    },
    {
        name: "FRANCISCA DAS NEVES SILVA PEREIRA TINTAS - ME",
        cnpj: "05.013.467/0001-90",
        zipcode: "07223-370",
        address: "R URVANA 48",
        number: "",
        district: "CID IND SATELITE",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "R RAMARI COM E REPRESENTAÇOES LTDA",
        cnpj: "00.643.376/0001-14",
        zipcode: "02279-010",
        address: "R CIRENE DE OLIVEIRA LAET 885 ANEXO 887",
        number: "",
        district: "VL NILO",
        city: "SP",
        state: "SP"
    },
    {
        name: "DANY COMERCIAL DE ALIMENTOS LTDA",
        cnpj: "03.374.306/0001-04",
        zipcode: "01312-010",
        address: "PRAÇA 14 BIS 26",
        number: "",
        district: "BELA VISTA",
        city: "",
        state: ""
    },
    {
        name: "DARYUS CENTRO EDUCACIONAL E PROCESSAMENTO DE DADOS LTDA",
        cnpj: "02.453.000/0001-72",
        zipcode: "01311-918",
        address: "AV PAULISTA",
        number: "967",
        district: "BELA VISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BRTOKEN INDUSTRIA E COMERCIO DE PRODUTOS ELETRONICOS LTDA.",
        cnpj: "08.417.547/0001-07",
        zipcode: "37540-000",
        address: "AV SAPUCAI",
        number: "549",
        district: "BOA VISTA",
        city: "Santa Rita do Sapucaí",
        state: "MG"
    },
    {
        name: "DE FIASCHI FERRAMENTAS E SERVIÇOS LTDA",
        cnpj: "11.646.556/0001-76",
        zipcode: "04387-000",
        address: "AV RODRIGUES MONTEMOR 18",
        number: "",
        district: "VL DOMITILA",
        city: "SP",
        state: "SP"
    },
    {
        name: "DEALER TECH COM IMP EXP E REPRESENTAÇOES LTDA",
        cnpj: "02.008.671/0001-24",
        zipcode: "02018-001",
        address: "R AMARAL GAMA 333 CJ 84",
        number: "",
        district: "SANTANA",
        city: "SP",
        state: "SP"
    },
    {
        name: "DECORPLAC MOLDAGEM PLASTICA LTDA",
        cnpj: "45.865.599/0001-64",
        zipcode: "03620-000",
        address: "AV SÃO MIGUEL 416",
        number: "",
        district: "PENHA",
        city: "SP",
        state: "SP"
    },
    {
        name: "MANOEL DE ALMEIDA DEDA",
        cnpj: "66.030.289/0002-80",
        zipcode: "03737-030",
        address: "R MANUEL MENDES RIBEIRO",
        number: "300",
        district: "VILA BUENOS AIRES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "DELBRAS SERVIÇOS TECNICOS ESPECIALIZADOS LTDA",
        cnpj: "00.813.955/0001-68",
        zipcode: "07013-020",
        address: "R DR WASHINGTON LUIZ 602",
        number: "",
        district: "JD STA FRANCISCA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "DELFINOS MONTAGENS E INSTALAÇOES ELETRICAS E HIDRAULICAS LTDA",
        cnpj: "11.269.163/0001-90",
        zipcode: "06815-300",
        address: "Rua São Caetano",
        number: "483",
        district: "Jardim Valo Verde",
        city: "Embu das Artes",
        state: "SP"
    },
    {
        name: "DELLA CASTRO SERRALHERIA LTDA",
        cnpj: "10.430.410/0001-26",
        zipcode: "09961-080",
        address: "R ALMEIDA JUNIOR 228",
        number: "",
        district: "JD CASA GRANDE",
        city: "Diadema",
        state: "SP"
    },
    {
        name: "COMERCIO DE MATERIAIS PARA CONSTRUCAO NOBREGA LTDA - ME",
        cnpj: "65.610.826/0001-18",
        zipcode: "08543-350",
        address: "R MANOEL DE ABREU",
        number: "308",
        district: "VL SANTA MARGARIDA",
        city: "Ferraz de Vasconcelos",
        state: "SP"
    },
    {
        name: "DETERQUIM - INDUSTRIA QUIMICA EIRELI",
        cnpj: "21.583.541/0001-60",
        zipcode: "08586-420",
        address: "R MICA",
        number: "175",
        district: "JARDIM NASCENTE",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "JOAQUIM DOMINGOS DE OLIVEIRA - EPP",
        cnpj: "65.390.494/0001-03",
        zipcode: "08554-140",
        address: "R VITOR BARBOSA GUISAR 350",
        number: "",
        district: "CENTRO",
        city: "Poá",
        state: "SP"
    },
    {
        name: "DOUGLAS FERRETTI - ME",
        cnpj: "03.621.749/8000-10",
        zipcode: "08030-120",
        address: "R CAPAO ALTO 245",
        number: "",
        district: "VL CURUÇA",
        city: "SP",
        state: "SP"
    },
    {
        name: "DG2 ENGENHARIA E CONSTRUÇOES LTDA",
        cnpj: "02.046.631/0001-77",
        zipcode: "04274-000",
        address: "R FREI DURAO 301",
        number: "",
        district: "IPIRANGA",
        city: "SP",
        state: "SP"
    },
    {
        name: "DHANIEL NATUMI - ME",
        cnpj: "10.723.001/0001-18",
        zipcode: "08210-790",
        address: "R SABBADO D ANGELO",
        number: "718",
        district: "ITAQUERA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "DIADEMA COM DE METAIS LTDA",
        cnpj: "08.481.104/0001-77",
        zipcode: "09950-360",
        address: "R PEDRO PAULO CELESTINO 137",
        number: "",
        district: "PIRAPORINHA",
        city: "Diadema",
        state: "SP"
    },
    {
        name: "DIAMANTE COMERCIO DE MADEIRAS LTDA",
        cnpj: "12.256.513/0001-47",
        zipcode: "02165-000",
        address: "AV BANDEIRANTES DO SUL",
        number: "851",
        district: "VILA MARIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "DICARMEC INDUSTRIA E COMERCIO LTDA",
        cnpj: "00.694.446/0001-63",
        zipcode: "03806-015",
        address: "R SIMAO BUENO DA SILVA",
        number: "60",
        district: "VILA PARANAGUA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "DIGIPIX GRAFICA DIGITAL S.A.",
        cnpj: "06.972.254/0002-39",
        zipcode: "89203-212",
        address: "R OTTOKAR DOERFFEL",
        number: "1112",
        district: "ATIRADORES",
        city: "Joinville",
        state: "SC"
    },
    {
        name: "D E FERREIRA CIRURGICOS ME",
        cnpj: "23.344.691/0001-46",
        zipcode: "03563-020",
        address: "R JOSE BENEDITO DA ROSA 104",
        number: "",
        district: "VL NHOCUNE",
        city: "SP",
        state: "SP"
    },
    {
        name: "DALVINA VERISSIMO DA SILVA - CONFECCOES",
        cnpj: "10.394.605/0001-68",
        zipcode: "06093-003",
        address: "R ANTONIO AGU",
        number: "693",
        district: "CENTRO",
        city: "Osasco",
        state: "SP"
    },
    {
        name: "M.C. POLETTI RODRIGUES TRANSPORTES EIRELI",
        cnpj: "10.884.076/0001-80",
        zipcode: "07244-110",
        address: "R IBIRAPUERA",
        number: "211",
        district: "PARQUE JUREMA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "DINIZ FRANCHISING ADMINISTRACAO LTDA",
        cnpj: "08.806.180/0001-05",
        zipcode: "02341-000",
        address: "AV NOVA CANTAREIRA",
        number: "2491",
        district: "TUCURUVI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "DIOGOLAB INDUSTRIA E COMERCIO DE ARTIGOS PARA LABORATORIOS EIRELI",
        cnpj: "05.435.021/0001-53",
        zipcode: "08554-510",
        address: "AL MAGRINI",
        number: "60",
        district: "VILA AUREA",
        city: "Poá",
        state: "SP"
    },
    {
        name: "MULTINOX EQUIPAMENTOS P/RESTAURANTES LTDA FLORENCIO ABREU",
        cnpj: "60.048.717/0005-69",
        zipcode: "01027-000",
        address: "R FLORENCIO DE ABREU 687",
        number: "",
        district: "STA IFIGENIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "MULTINOX EQUIPAMENTOS /RESTAURANTES LTDA PAULA SOUZA 147",
        cnpj: "60.048.717/0006-40",
        zipcode: "01027-001",
        address: "R PAULA SOUZA 147/155",
        number: "",
        district: "STA IFIGENIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "MULTINOX EQUPAMENTOS P/RESTAURANTES LTDA PAULA SOUZA 201",
        cnpj: "60.048.717/0004-88",
        zipcode: "01027-001",
        address: "RUA PAULA SOUZA 201",
        number: "",
        district: "STA IFIGENIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "MULTINOX EQUIPAMENTOS PARA RESTAURANTES LTDA PAULA SOUZA 113",
        cnpj: "60.048.717/0008-01",
        zipcode: "01027-001",
        address: "R PAULA SOUZA 113/115",
        number: "",
        district: "STA IFIGENIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "PATRICIA ALVES DO VALE BOBINAS- ME",
        cnpj: "08.865.002/0001-55",
        zipcode: "03820-000",
        address: "R OLHO D´AGUA DO BORGES 600",
        number: "",
        district: "VL SILVIA",
        city: "",
        state: ""
    },
    {
        name: "DIRETEC INDUSTRIA E COMERCIO DE AUTOPECAS LTDA",
        cnpj: "96.660.212/0001-74",
        zipcode: "05182-000",
        address: "R MAURO DE ARAUJO RIBEIRO",
        number: "132",
        district: "CIDADE D'ABRIL",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "DISNEP CONFECÇOES EIRELI",
        cnpj: "74.564.535/0001-21",
        zipcode: "03013-011",
        address: "R MENDES JUNIOR 673",
        number: "",
        district: "BRAS",
        city: "",
        state: ""
    },
    {
        name: "DITOY IND E COM LTDA",
        cnpj: "03.385.780/0001-23",
        zipcode: "02111-001",
        address: "R SEVERA 911",
        number: "",
        district: "VL MARIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "DIVIER EMPRESA NACIONAL DE TRANSPORTES LTDA",
        cnpj: "67.289.421/0001-55",
        zipcode: "07172-140",
        address: "R QUATRO 50",
        number: "",
        district: "PQ IND FERREIRA FERNANDES",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "DJ GESTAO DE NEGOCIOS LTDA",
        cnpj: "09.033.014/0001-86",
        zipcode: "04548-004",
        address: "AV DR CARDOSO DE MELLO 1340 CJ 32",
        number: "",
        district: "VL OLIMPIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "D. LAMP COMERCIO DE AUTO PECAS LTDA.",
        cnpj: "09.138.191/0001-27",
        zipcode: "03054-010",
        address: "RUA LOPES COUTINHO",
        number: "292",
        district: "BELENZINHO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "DOCE VIDA CALÇADOS EIRELI - ME",
        cnpj: "27.720.603/0001-14",
        zipcode: "03449-030",
        address: "R JOSE DE ASSIS 176",
        number: "",
        district: "VL CARRAO",
        city: "SP",
        state: "SP"
    },
    {
        name: "DOCERIA YARA LTDA ME",
        cnpj: "96.295.761/0001-97",
        zipcode: "04535-002",
        address: "RUA JOAO CACHOEIRA 708",
        number: "",
        district: "ITAIM BIBI",
        city: "SP",
        state: "SP"
    },
    {
        name: "DOCSYSTEM CORPORATION TECNOLOGIA DA INFORMACAO LTDA",
        cnpj: "08.062.971/0001-78",
        zipcode: "04583-110",
        address: "AV DOUTOR CHUCRI ZAIDAN",
        number: "1550",
        district: "VILA CORDEIRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "DOFER ENGENHARIA E CONSTRUCOES LTDA",
        cnpj: "65.893.174/0001-76",
        zipcode: "11320-001",
        address: "AV PRESIDENTE WILSON",
        number: "1147",
        district: "GONZAGUINHA",
        city: "São Vicente",
        state: "SP"
    },
    {
        name: "EDIFICIO DOM MICHEL",
        cnpj: "03.953.108/0001-97",
        zipcode: "07082-050",
        address: "R ANDRE LUIZ,ESQ.C/R. ANT. CARDOSO",
        number: "301",
        district: "JD. TEREZOPOLIS",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "RODRIGO ROBERTO GOMES DA SILVA",
        cnpj: "28.288.230/0001-17",
        zipcode: "04074-020",
        address: "AV MOREIRA GUIMARAES",
        number: "1022",
        district: "INDIANOPOLIS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "DOUGTEAM COM DE BEBIDAS E EVENTOS LTDA ME",
        cnpj: "03.289.420/0001-28",
        zipcode: "02080-010",
        address: "R PIATA 168",
        number: "",
        district: "VL IZOLINA MAZZEI",
        city: "SP",
        state: "SP"
    },
    {
        name: "DR.REDDY´S FARMACEUTICA DO BRASIL LTDA",
        cnpj: "03.978.166/0001-75",
        zipcode: "05802-140",
        address: "AV GUIDO CALOI",
        number: "1985",
        district: "JARDIM SAO LUIS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FARMA LESTE PRIMOS LTDA",
        cnpj: "13.348.568/0001-40",
        zipcode: "08616-050",
        address: "R JECA TATU 846 LOJA 3 E 4",
        number: "",
        district: "JD CACIQUE",
        city: "Suzano",
        state: "SP"
    },
    {
        name: "ACADEMIA DULOKO LTDA",
        cnpj: "28.438.914/0001-58",
        zipcode: "11740-000",
        address: "RUA OLIMPIA",
        number: "1112",
        district: "BALNEARIO LARAJEIRAS",
        city: "Itanhaém",
        state: "SP"
    },
    {
        name: "D A TRANSPORTE E LOGISTICA LTDA",
        cnpj: "08.568.145/0002-86",
        zipcode: "02064-110",
        address: "TRAV MANOEL PRETO 21 PARTE 2",
        number: "",
        district: "VL GUILHERME",
        city: "SP",
        state: "SP"
    },
    {
        name: "DACAMPINAS TRANSPORTE E LOGISTICA LTDA",
        cnpj: "05.571.387/0002-29",
        zipcode: "81730-050",
        address: "R DAS CARMELITAS 4617 PARTE 1",
        number: "",
        district: "BOQUEIRAO",
        city: "Curitiba",
        state: "PR"
    },
    {
        name: "DVA EXPRESS LTDA",
        cnpj: "59.820.647/0003-74",
        zipcode: "02064-110",
        address: "TRAV MANOEL PRETO 21",
        number: "",
        district: "VL GUILHERME",
        city: "SP",
        state: "SP"
    },
    {
        name: "DYNAMIC AIR LTDA",
        cnpj: "03.129.650/0001-20",
        zipcode: "12960-000",
        address: "AV MATHIAS LOPES",
        number: "5821",
        district: "MASCATE",
        city: "Nazaré Paulista",
        state: "SP"
    },
    {
        name: "D´ ARAUJO EMPREENDIMENTOS E PARTICIPACOES LTDA",
        cnpj: "21.477.061/0001-14",
        zipcode: "02045-040",
        address: "R AMOROSO COSTA",
        number: "321",
        district: "JARDIM SAO PAULO(ZONA NORTE)",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "E G DA SILVA PAPELARIA ME",
        cnpj: "24.581.391/0001-43",
        zipcode: "03712-005",
        address: "AV CANGAIBA 3448",
        number: "",
        district: "CANGAIBA",
        city: "SP",
        state: "SP"
    },
    {
        name: "E-XYON TECNOLOGIA E INFORMACAO LTDA",
        cnpj: "04.275.800/0003-38",
        zipcode: "01310-000",
        address: "AV PAULISTA",
        number: "726",
        district: "BELA VISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "E.V.A. TECNICA BORRACHAS E COMPONENTES LTDA",
        cnpj: "00.632.587/0001-51",
        zipcode: "03001-000",
        address: "AV RANGEL PESTANA",
        number: "1729",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "EASY POKE RESTAURANTE LTDA",
        cnpj: "33.683.971/0001-32",
        zipcode: "04707-000",
        address: "Avenida Roque Petroni Júnior",
        number: "475",
        district: "Jardim das Acácias",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PREMIUM SERVIÇOS AUTOMOTIVOS EIRELI",
        cnpj: "10.494.133/0001-15",
        zipcode: "05038-190",
        address: "AV JOSE MARIA DE FARIA 396 SALA 1",
        number: "",
        district: "LAPA",
        city: "",
        state: ""
    },
    {
        name: "EBB EMPRESA BRASILEIRA DE BANCOS AUTOMOTIVOS LTDA",
        cnpj: "14.007.016/0001-30",
        zipcode: "03811-060",
        address: "R ANTONIO BONICE 433",
        number: "",
        district: "ERM MATARAZZO",
        city: "SP",
        state: "SP"
    },
    {
        name: "EBM DISTRIBUIÇAO E LOGISTICA LTDA",
        cnpj: "11.705.549/0006-02",
        zipcode: "08141-550",
        address: "AV BANDEIRA DOS CATAGUAZES 203",
        number: "",
        district: "JD CAMARGO NOVO",
        city: "SP",
        state: "SP"
    },
    {
        name: "EBM DISTRIBUIÇAO E LOGISTICA LTDA",
        cnpj: "11.705.549/0001-06",
        zipcode: "04781-040",
        address: "R JOAO PEDRO 172",
        number: "",
        district: "CAPELA DO SOCORRO",
        city: "SP",
        state: "SP"
    },
    {
        name: "EBONITA BAR RESTAURANTE E LANCHONETE LTDA",
        cnpj: "05.445.006/0001-96",
        zipcode: "04521-000",
        address: "R CUNHA GAGO 27",
        number: "",
        district: "PINHEIROS",
        city: "",
        state: ""
    },
    {
        name: "ESCRITORIO CONTABIL BELEM ACESSORIA S/S LTDA",
        cnpj: "50.866.110/0001-09",
        zipcode: "03176-001",
        address: "R TOBIAS BARRETO 1366/1368",
        number: "",
        district: "BELEM",
        city: "SP",
        state: "SP"
    },
    {
        name: "ECO QUIMICA IND HIGIENISTA LTDA",
        cnpj: "72.688.484/0001-14",
        zipcode: "08538-200",
        address: "R JOAO CANZI 687",
        number: "",
        district: "JOANA DARC",
        city: "Ferraz de Vasconcelos",
        state: "SP"
    },
    {
        name: "ECOINJET IND E COM DE MATERIAIS ELETRICOS, HIDRAULICOS E FERRAMENTAS LTDA",
        cnpj: "11.360.190/0001-74",
        zipcode: "03657-050",
        address: "R OTI 200",
        number: "",
        district: "VL RE",
        city: "SP",
        state: "SP"
    },
    {
        name: "FAVILLA SERVICOS AUTOMOTIVOS LTDA",
        cnpj: "07.892.230/0001-51",
        zipcode: "04379-022",
        address: "R EMILIO DE SOUSA DOCCA",
        number: "265",
        district: "VILA SANTA CATARINA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "EDAMATSU SILVA E SANTOS ELETRONICA LTDA",
        cnpj: "06.178.037/0001-90",
        zipcode: "04801-000",
        address: "AV SENADOR TEOTONIO VILELA 490",
        number: "",
        district: "CID DUTRA",
        city: "SP",
        state: "SP"
    },
    {
        name: "EDIFICIO CASABLANCA",
        cnpj: "08.426.658/0001-71",
        zipcode: "03355-020",
        address: "R BIMBARRA 75",
        number: "",
        district: "ANALIA FRANCO",
        city: "SP",
        state: "SP"
    },
    {
        name: "EDIFICIO SANDRA MARIA",
        cnpj: "68.311.687/0001-10",
        zipcode: "05019-000",
        address: "R DIANA 231",
        number: "",
        district: "PERDIZES",
        city: "SP",
        state: "SP"
    },
    {
        name: "HERSIL ADMINISTRACAO E EMPREENDIMENTOS PREDIAIS LTDA",
        cnpj: "12.985.985/0001-30",
        zipcode: "05601-000",
        address: "AV LINEU DE PAULA MACHADO",
        number: "356",
        district: "CIDADE JARDIM",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO FUNCHAL",
        cnpj: "03.893.027/0001-49",
        zipcode: "04551-060",
        address: "R FUNCHAL",
        number: "411",
        district: "VILA OLIMPIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO GUARAPARI",
        cnpj: "67.639.351/0001-18",
        zipcode: "03337-040",
        address: "R MAESTRO TOM JOBIM",
        number: "85",
        district: "JARDIM ANALIA FRANCO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "EDIFICIO JURUBATUBA EMPRESARIAL",
        cnpj: "26.569.050/0001-88",
        zipcode: "09725-630",
        address: "R JURUBATUBA",
        number: "1350",
        district: "CENTRO",
        city: "São Bernardo do Campo",
        state: "SP"
    },
    {
        name: "EDIFICIO MEDITERRANEO",
        cnpj: "06.079.089/0001-00",
        zipcode: "03343-000",
        address: "R PANTOJO",
        number: "865",
        district: "VILA REGENTE FEIJO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "EDIFICIO MOBILE 310",
        cnpj: "19.785.061/0001-30",
        zipcode: "05615-190",
        address: "RUA DOS TRES IRMAOS",
        number: "310",
        district: "VILA PROGREDIOR",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "EDIFICIO NEW CENTURY",
        cnpj: "05.737.391/0001-45",
        zipcode: "04542-000",
        address: "R LEOPOLDO COUTO DE MAGALHAES JUNIOR",
        number: "758",
        district: "ITAIM BIBI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO PARQUE CULTURAL PAULISTA",
        cnpj: "38.889.986/0001-75",
        zipcode: "01311-902",
        address: "AV PAULISTA",
        number: "37",
        district: "VILA MARIANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO SAN MARINO",
        cnpj: "10.573.383/0001-40",
        zipcode: "03186-010",
        address: "R CAMPO LARGO",
        number: "216",
        district: "MOOCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO VICENTE MATHEUS",
        cnpj: "60.737.061/0001-68",
        zipcode: "03063-000",
        address: "AV CELSO GARCIA",
        number: "5011",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIOS METROPOLITAN E PLATINUM OFFICES",
        cnpj: "07.735.773/0001-65",
        zipcode: "01448-000",
        address: "R AMAURI",
        number: "255",
        district: "SAO PAULO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONJUNTO RIVIERA",
        cnpj: "58.479.270/0001-07",
        zipcode: "07020-010",
        address: "AV EMILIO RIBAS",
        number: "871",
        district: "JD TIJUCO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "EDMAT ENGENHARIA E INSTALAÇOES LTDA",
        cnpj: "58.918.442/0001-00",
        zipcode: "09280-550",
        address: "R ORATORIO 761",
        number: "",
        district: "BANGU",
        city: "Santo André",
        state: "SP"
    },
    {
        name: "EDMEA LUDOVICI FIGUEIREDO",
        cnpj: "25.159.384/855-",
        zipcode: "05615-000",
        address: "R JOSE JANNARELI 199 CJ 61",
        number: "",
        district: "VL PROGREDIOR",
        city: "SP",
        state: "SP"
    },
    {
        name: "EDNA PERFUMARIA E COSMETICOS EIRELI ME",
        cnpj: "55.564.868/0001-06",
        zipcode: "08225-10",
        address: "R PADRE VIEGAS DE MENEZES 480",
        number: "",
        district: "ITAQUERA",
        city: "SP",
        state: "SP"
    },
    {
        name: "EDUCARE ENSINO E PESQUISA S/C LTDA",
        cnpj: "04.025.738/0001-64",
        zipcode: "04531-120",
        address: "TV LUCIA ALBERTINA SOARES QUADROS",
        number: "9",
        district: "ITAIM BIBI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "EL ZOGBI COM DE BOLSAS E REPRESENTAÇAO LTDA",
        cnpj: "53.563.631/0001-85",
        zipcode: "03664-010",
        address: "R SANTO HENRIQUE 436",
        number: "",
        district: "VL RE",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONFECÇOES ELABEL LTDA EPP",
        cnpj: "06.123.741/0001-46",
        zipcode: "03013-001",
        address: "R CASIMIRO DE ABREU 391",
        number: "",
        district: "BRAS",
        city: "SP",
        state: "SP"
    },
    {
        name: "ELCIVAN CAMPOS DE ANDRADE ME",
        cnpj: "05.184.666/4000-17",
        zipcode: "08190-420",
        address: "R ABACATUAJA 22",
        number: "",
        district: "VL ITAIM",
        city: "SP",
        state: "SP"
    },
    {
        name: "HOSPITAL DE OLHOS ELCLIN LTDA",
        cnpj: "13.009.667/0001-05",
        zipcode: "45653-410",
        address: "PC CORONEL PESSOA",
        number: "17",
        district: "CENTRO",
        city: "Ilhéus",
        state: "BA"
    },
    {
        name: "ELEITA IMOVEIS LTDA",
        cnpj: "21.841.060/0001-07",
        zipcode: "06341-170",
        address: "EST ONDA VERDE",
        number: "1056",
        district: "PARQUE SANTA TERESA",
        city: "Carapicuíba",
        state: "SP"
    },
    {
        name: "ELETRICA J SANTOS LTDA*",
        cnpj: "51.598.472/0001-29",
        zipcode: "03453-000",
        address: "AV RIO DAS PEDRAS",
        number: "85",
        district: "VILA CARRAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ELETROTECNICA JD LTDA ME",
        cnpj: "68.075.316/0001-86",
        zipcode: "03810-120",
        address: "R FLOR DE CARNAVAL 49",
        number: "",
        district: "ERM MATARAZZO",
        city: "SP",
        state: "SP"
    },
    {
        name: "LUCAS AUGUSTO DE MARCHI OLIVEIRA",
        cnpj: "31.504.522/0001-54",
        zipcode: "08537-210",
        address: "R BORBA GATO",
        number: "111",
        district: "JARDIM ROSANA",
        city: "Ferraz de Vasconcelos",
        state: "SP"
    },
    {
        name: "ELETRIDAL COM E SERV LTDA",
        cnpj: "14.770.109/0001-12",
        zipcode: "05567-180",
        address: "R OSVALDO LIBARNO DE OLIVEIRA 376",
        number: "",
        district: "JD SÃO JORGE",
        city: "SP",
        state: "SP"
    },
    {
        name: "ELETRO TECNICA PAULISTA INDUSTRIAL LTDA",
        cnpj: "61.533.980/0001-82",
        zipcode: "09951-110",
        address: "AV ALBERTO JAFET 277",
        number: "",
        district: "JD ITARARE",
        city: "Diadema",
        state: "SP"
    },
    {
        name: "ELETROERO INDUSTRIAL LTDA",
        cnpj: "00.371.069/0001-21",
        zipcode: "04755-010",
        address: "RUA AMERICA CENTRAL 70",
        number: "",
        district: "SANTO AMARO",
        city: "SP",
        state: "SP"
    },
    {
        name: "H M TUBOS E ELETRODUTOS EIRELI",
        cnpj: "04.532.769/0001-01",
        zipcode: "03453-000",
        address: "AV RIO DAS PEDRAS 3250",
        number: "",
        district: "JD ARICANDUVA",
        city: "SP",
        state: "SP"
    },
    {
        name: "OIWA ABC ELEVADORES EIRELI EPP",
        cnpj: "17.808.667/0001-18",
        zipcode: "04583-110",
        address: "AV DR CRUCHI ZAIDAN 1550 CJ 3106",
        number: "",
        district: "SANTO AMARO",
        city: "SP",
        state: "SP"
    },
    {
        name: "ELIENE MORAIS CINTRA",
        cnpj: "05.315.865/0001-60",
        zipcode: "08110-260",
        address: "R MONTE CAMBERELA",
        number: "479",
        district: "ITAIM PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ELINOX CENTRAL DE ACO INOXIDAVEL LTDA",
        cnpj: "04.330.905/0001-80",
        zipcode: "09370-850",
        address: "R RUZZI",
        number: "701",
        district: "SERTAOZINHO",
        city: "Mauá",
        state: "SP"
    },
    {
        name: "ELISMOL IND METALURGICA LTDA",
        cnpj: "61.853.693/0001-50",
        zipcode: "09941-760",
        address: "R MINAS GERAIS 112",
        number: "",
        district: "VL ORIENTAL",
        city: "Diadema",
        state: "SP"
    },
    {
        name: "ELITEK COMPONENTES ELETRICOS EIRELI",
        cnpj: "25.343.545/0001-21",
        zipcode: "03707-050",
        address: "R COPARA",
        number: "195",
        district: "VILA SANTO HENRIQUE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ELSEVER ORGANIZACAO E EVENTOS SOCIEDADE LIMITADA",
        cnpj: "05.647.270/0001-02",
        zipcode: "01311-200",
        address: "AV PAULISTA",
        number: "1483",
        district: "BELA VISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "E&M TRANSPORTES E SERVIÇOS LTDA",
        cnpj: "04.003.999/0002-64",
        zipcode: "06950-000",
        address: "AV 31 DE MARÇO 350",
        number: "",
        district: "CENTRO",
        city: "Juquitiba",
        state: "SP"
    },
    {
        name: "INDUSTRIA DE EMBALAGENS MARTAM LTDA",
        cnpj: "01.575.286/0001-04",
        zipcode: "08530-220",
        address: "R BENEDITO SILVINO LEITE 250",
        number: "",
        district: "VL ANDEYARA",
        city: "Ferraz de Vasconcelos",
        state: "SP"
    },
    {
        name: "EMCCAMP INCORPORACAO SP01 SPE LTDA.",
        cnpj: "28.768.747/0001-03",
        zipcode: "07142-000",
        address: "EST DO ELENCO",
        number: "4045",
        district: "JARDIM SAO DOMINGOS",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "EMCCAMP RESIDENCIAL S/A",
        cnpj: "19.403.252/0006-02",
        zipcode: "04028-001",
        address: "AV IBIRAPUERA 2120",
        number: "",
        district: "INDIANOPOLIS",
        city: "SP",
        state: "SP"
    },
    {
        name: "EVANDRO DIONIZIO SERVICOS DE CONTABILIDADE*",
        cnpj: "27.720.108/0001-05",
        zipcode: "06712-410",
        address: "Rua Coimbra",
        number: "361",
        district: "Jardim Colibri",
        city: "Cotia",
        state: "SP"
    },
    {
        name: "EMPORIO AROMAS DE MINAS LTDA",
        cnpj: "25.076.414/0001-25",
        zipcode: "04079-000",
        address: "AV JUREMA",
        number: "79",
        district: "INDIANOPOLIS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ENERGI SERVIÇOS DE ALIMENTAÇAO LTDA ME",
        cnpj: "09.120.615/0001-26",
        zipcode: "06768-200",
        address: "ROD REGIS BITTENCOURT KM 271,5 LOJA 88",
        number: "",
        district: "CID INTERCAP",
        city: "Taboão da Serra",
        state: "SP"
    },
    {
        name: "MARY ESTELA KAERIYAMA",
        cnpj: "14.233.702/0001-20",
        zipcode: "11900-000",
        address: "AV CLARA GIANOTTI DE SOUZA 304",
        number: "",
        district: "CENTRO",
        city: "Registro",
        state: "SP"
    },
    {
        name: "EMPORIO MEGA 100 COMERCIO DE ALIMENTOS S.A.*",
        cnpj: "22.914.613/0001-77",
        zipcode: "06707-050",
        address: "EST DOS ESTUDANTES",
        number: "241",
        district: "GRANJA VIANA II",
        city: "Cotia",
        state: "SP"
    },
    {
        name: "EMPORIO MEGA 100 COMERCIO DE ALIMENTOS S.A.",
        cnpj: "22.914.613/0002-58",
        zipcode: "06707-050",
        address: "EST DOS ESTUDANTES",
        number: "212",
        district: "GRANJA VIANA II",
        city: "Cotia",
        state: "SP"
    },
    {
        name: "EMPORIO MEGA 100 COMERCIO DE ALIMENTOS S.A.",
        cnpj: "22.914.613/0004-10",
        zipcode: "06712-410",
        address: "R COIMBRA",
        number: "361",
        district: "JARDIM COLIBRI",
        city: "Cotia",
        state: "SP"
    },
    {
        name: "EMPREENDIMENTO COMERCIAL VITORIA SPE LTDA",
        cnpj: "16.876.477/0001-75",
        zipcode: "78118-070",
        address: "AV GONCALO BOTELHO DE CAMPOS",
        number: "2001",
        district: "CRISTO REI",
        city: "Várzea Grande",
        state: "MT"
    },
    {
        name: "EMPRENTEIRA DE MAO DE OBRA COELHO LTDA",
        cnpj: "12.407.101/0001-60",
        zipcode: "06754-200",
        address: "AV JOVINA DE CARVALHO DAU 220 SALA 4",
        number: "",
        district: "PQ SANTOS DUMONT",
        city: "Taboão da Serra",
        state: "SP"
    },
    {
        name: "EMUNAH COM DE COSMETICOS LTDA",
        cnpj: "08.682.240/0001-25",
        zipcode: "01227-000",
        address: "AV ANGELICA 321 - 22 ANDAR SALA 221",
        number: "",
        district: "SANTA CECILIA",
        city: "",
        state: ""
    },
    {
        name: "EMCCAMP RESIDENCIAL S.A.",
        cnpj: "19.403.252/0004-32",
        zipcode: "22640-100",
        address: "AV DAS AMERICAS",
        number: "500",
        district: "BARRA DA TIJUCA",
        city: "Rio de Janeiro",
        state: "RJ"
    },
    {
        name: "ENGEFORM ENGENHARIA LTDA.",
        cnpj: "48.246.920/0001-10",
        zipcode: "01452-910",
        address: "AV BRIGADEIRO F.LIMA",
        number: "1931",
        district: "JD PAULISTANO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONSORCIO ER-SAUDE*",
        cnpj: "20.256.512/0001-20",
        zipcode: "01452-910",
        address: "AV BRIGADEIRO FARIA LIMA",
        number: "1931",
        district: "JARDIM PAULISTANO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ENGEFORM CONSTRUÇOES E COMERCIO LTDA - ITABORAI",
        cnpj: "48.246.920/0006-25",
        zipcode: "28540-000",
        address: "R NACIB SIMAO 2481 GALPAO A C D E PATIO",
        number: "",
        district: "RETIRO POETICO",
        city: "Cordeiro",
        state: "RJ"
    },
    {
        name: "ENGEVIDEO COM E ASSISTENCIA TECNICA LTDA",
        cnpj: "74.434.663/0001-50",
        zipcode: "04605-001",
        address: "R CONSTANTINO DE SOUSA 640",
        number: "",
        district: "CAMPO BELO",
        city: "SP",
        state: "SP"
    },
    {
        name: "ENVELOPACK INDUSTRIA DE EMBALAGENS ESPECIAIS LTDA",
        cnpj: "10.574.479/0001-23",
        zipcode: "04367-000",
        address: "R CARLO CARRA 756",
        number: "",
        district: "VL SANTA CATARINA",
        city: "SP",
        state: "SP"
    },
    {
        name: "EQUALITY AUTOMAÇAO E TECNOLOGIA LTDA",
        cnpj: "20.790.479/0001-14",
        zipcode: "04263-000",
        address: "AV NAZARE 685 SALA 03",
        number: "",
        district: "IPIRANGA",
        city: "SP",
        state: "SP"
    },
    {
        name: "ERIMPRESS ETIQUETAS LTDA",
        cnpj: "63.957.823/0001-20",
        zipcode: "08290-640",
        address: "R BOLEEIRO",
        number: "15",
        district: "ITAQUERA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "NUCLEO DE EDUCACAO INFANTIL ABA LTDA*",
        cnpj: "09.394.389/0001-71",
        zipcode: "09771-210",
        address: "AV WALLACE SIMONSEN",
        number: "857",
        district: "NOVA PETROPOLIS",
        city: "São Bernardo do Campo",
        state: "SP"
    },
    {
        name: "ESCOLA ABELHA RAINHA INFANTIL LTDA",
        cnpj: "15.145.868/0001-57",
        zipcode: "07063-130",
        address: "R CAPITAO RABELO 93",
        number: "",
        district: "VL MILTON",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "ESCOLA DE EDUCACAO INFANTIL HENRY WALLON LTDA",
        cnpj: "04.773.691/0001-17",
        zipcode: "04127-000",
        address: "R PADRE MACHADO",
        number: "130",
        district: "BOSQUE DA SAUDE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CENTRO DE RECREACAO INFANTIL SORRISO LTDA - ME*",
        cnpj: "59.840.884/0001-35",
        zipcode: "03181-120",
        address: "R RODRIGUES SANCHES",
        number: "18",
        district: "MOOCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ESCOLA TECNICA VITAL LTDA",
        cnpj: "11.972.586/0001-72",
        zipcode: "06717-160",
        address: "R BENEDITO LEMOS LEITE",
        number: "152",
        district: "VILA MONTE SERRAT",
        city: "Cotia",
        state: "SP"
    },
    {
        name: "FABRICA DE ESCOVAS TATUAPE LTDA",
        cnpj: "61.610.242/0001-91",
        zipcode: "03066-060",
        address: "R HENRIQUE SERTORIO",
        number: "218",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "HOTEL MARCO INTERNACIONAL S.A.",
        cnpj: "03.221.095/0005-95",
        zipcode: "01414-020",
        address: "R VITORIO FASANO",
        number: "85",
        district: "CERQUEIRA CESAR",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ESPACO DO BLINDADO SERVICOS AUTOMOTIVOS LTDA",
        cnpj: "07.330.230/0001-68",
        zipcode: "05038-190",
        address: "AVENIDA JOSE MARIA DE FARIA",
        number: "396",
        district: "LAPA DE BAIXO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ESPACO SANTA TERRA RESTAURANTE LTDA",
        cnpj: "07.177.057/0001-00",
        zipcode: "05005-000",
        address: "R TURIASSU",
        number: "326",
        district: "PERDIZES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VANESSA CAMARGO DA ROCHA 07331553917",
        cnpj: "24.136.684/0001-11",
        zipcode: "81810-532",
        address: "R ISMAIR EUFRASIO DE SIQUEIRA",
        number: "33",
        district: "XAXIM",
        city: "Curitiba",
        state: "PR"
    },
    {
        name: "ESPARTA MONITORAMENTO,SISTEMAS E OPERACOES DE SEGURANCA LTDA.",
        cnpj: "23.037.515/0001-61",
        zipcode: "02013-004",
        address: "R DOUTOR CESAR",
        number: "1368",
        district: "SANTANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ESPETOBOM COM DE ALIMENTOS LTDA",
        cnpj: "03.852.638/0001-49",
        zipcode: "03315-000",
        address: "R PADRE ESTEVAO PERNET 37",
        number: "",
        district: "TATUAPE",
        city: "SP",
        state: "SP"
    },
    {
        name: "ESPIROFLEX VEDAÇAO INDUSTRIAL LTDA",
        cnpj: "02.851.016/0001-33",
        zipcode: "07231-000",
        address: "AV NOVA CUMBICA 1285",
        number: "",
        district: "JD NOVA CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "ESQUADREX ESQUADRIAS E ESTRUTURAS METALICAS LTDA - ME",
        cnpj: "11.956.334/0002-30",
        zipcode: "07432-685",
        address: "R HIRAYOSHI AMANO 885 ANTIGA RUA CINCO",
        number: "",
        district: "SITIO FERNANDES",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "ESSENCIAL ALUMINIO VIDROS E IMPORTAÇAO LTDA",
        cnpj: "14.627.147/0001-10",
        zipcode: "03050-050",
        address: "R BRIGADEIRO MACHADO 240",
        number: "",
        district: "BRAS",
        city: "",
        state: ""
    },
    {
        name: "ESSENCIAL ODONTOLOGIA LTDA",
        cnpj: "13.812.374/0001-53",
        zipcode: "08030-000",
        address: "AV COCA 800",
        number: "",
        district: "VL CURUÇA",
        city: "SP",
        state: "SP"
    },
    {
        name: "ESTACAO FRADIQUE RESTAURANTE LTDA",
        cnpj: "08.493.737/0001-03",
        zipcode: "05422-011",
        address: "R DOS PINHEIROS 877",
        number: "",
        district: "PINHEIROS",
        city: "SP",
        state: "SP"
    },
    {
        name: "MODELO EMPREENDIMENTOS E PARTICIPAÇOES LTDA",
        cnpj: "21.150.119/0001-10",
        zipcode: "01227-000",
        address: "AV ANGELICA 310",
        number: "",
        district: "HIGIENOPOLIS",
        city: "SP",
        state: "SP"
    },
    {
        name: "ESTUDIO SETE GINASTICA LTDA ME",
        cnpj: "19.056.124/0001-17",
        zipcode: "04115-000",
        address: "R PEDRO POMPONAZZI 57",
        number: "",
        district: "VL MARIANA",
        city: "",
        state: ""
    },
    {
        name: "EUROMOBILE INTERIORES S/A.",
        cnpj: "47.410.238/0008-25",
        zipcode: "05404-001",
        address: "R PAULO GONTIJO DE CARVALHO",
        number: "488",
        district: "PINHEIROS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "EVERTON ALVES DOS SANTOS PASTELARIA",
        cnpj: "12.612.062/0002-14",
        zipcode: "08673-150",
        address: "R TIRADENTES",
        number: "125",
        district: "CONJUNTO RESIDENCIAL IRAI",
        city: "Suzano",
        state: "SP"
    },
    {
        name: "A. S. FERREIRA SERVICOS TECNICOS",
        cnpj: "15.629.407/0001-50",
        zipcode: "03813-130",
        address: "RUA DENDEZEIRO",
        number: "28",
        district: "JARDIM MATARAZZO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "EXACTTUS CONSULTORIA AUTARIAL LTDA",
        cnpj: "08.401.147/0001-03",
        zipcode: "04120-050",
        address: "R DR TIRSO MARTINS 100 CJ 320",
        number: "",
        district: "VL MARIANA",
        city: "SP",
        state: "SP"
    },
    {
        name: "EXATO TRANSPORTES URGENTES COMERCIO E ARMAZENS GERAIS L",
        cnpj: "00.953.655/0001-84",
        zipcode: "07190-010",
        address: "RUA GUILHERME LINO DOS SANTOS",
        number: "1153",
        district: "JARDIM FLOR DO CAMPO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "EXIMIO MOVEIS E DECORAÇOES LTDA",
        cnpj: "54.828.959/0001-49",
        zipcode: "03818-110",
        address: "R CACHOEIRA DOS INDIOS 211",
        number: "",
        district: "VL CISPER",
        city: "",
        state: ""
    },
    {
        name: "WAGNER RODRIGO BIANCHI - ME",
        cnpj: "13.152.072/0001-04",
        zipcode: "08683-310",
        address: "R BENEDITO GONCALVES PEREIRA",
        number: "101",
        district: "PARQUE MARIA HELENA",
        city: "Suzano",
        state: "SP"
    },
    {
        name: "FL - SERVICOS, GESTAO E ADMINISTRACAO LTDA",
        cnpj: "11.152.705/0001-40",
        zipcode: "04546-004",
        address: "R CASA DO ATOR",
        number: "1117",
        district: "VILA OLIMPIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FAAL CONSERVAÇAO PATRIMONIAL POA LTDA",
        cnpj: "15.776.019/0001-00",
        zipcode: "08555-260",
        address: "R IPANGUAÇU 395",
        number: "",
        district: "JD TEREZA PALMA",
        city: "Poá",
        state: "SP"
    },
    {
        name: "SUELI QUIRINO DA SILVA CONFECCAO*",
        cnpj: "09.525.287/0001-48",
        zipcode: "03404-000",
        address: "R GUARACIABA",
        number: "209",
        district: "CHACARA CALIFORNIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FABIOCLE COM DE PNEUS LTDA",
        cnpj: "59.683.060/0001-07",
        zipcode: "00000-000",
        address: "AV DR ASSIS RIBEIRO 4022",
        number: "",
        district: "ENG GOULART",
        city: "SP",
        state: "SP"
    },
    {
        name: "INDUSTRIA DE MATERIAL BELICO DO BRASIL IMBEL",
        cnpj: "00.444.232/0007-24",
        zipcode: "37501-345",
        address: "AV CORONEL AVENTINO RIBEIRO",
        number: "1099",
        district: "IMBEL",
        city: "Itajubá",
        state: "MG"
    },
    {
        name: "FABRICA DE MOVEIS MORUMBI LTDA",
        cnpj: "59.108.167/0001-13",
        zipcode: "09751-520",
        address: "R DOS AMERICANOS 417",
        number: "",
        district: "VL BAETA NEVES",
        city: "SBCAMPO",
        state: "SP"
    },
    {
        name: "WORKING SERVIÇOS EIRELI",
        cnpj: "27.637.746/0001-67",
        zipcode: "07500-000",
        address: "AV PRESIDENTE VARGAS",
        number: "584",
        district: "JD CRUZEIRO",
        city: "Santa Isabel",
        state: "SP"
    },
    {
        name: "FACILITY MUDANCAS + TRANSPORTES LTDA",
        cnpj: "10.220.662/0001-20",
        zipcode: "02118-000",
        address: "RUA DOM LUIS FELIPE DE ORLEANS",
        number: "477",
        district: "VILA MARIA BAIXA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FACULDADE DE DIREITO DE FRANCA",
        cnpj: "54.157.748/0001-21",
        zipcode: "14401-135",
        address: "AV MAJOR NICACIO",
        number: "2377",
        district: "SAO JOSE",
        city: "Franca",
        state: "SP"
    },
    {
        name: "UNICA EDUCACIONAL LTDA",
        cnpj: "03.939.757/0003-03",
        zipcode: "35164-779",
        address: "RUA SALERMO",
        number: "299",
        district: "BETHANIA",
        city: "Ipatinga",
        state: "MG"
    },
    {
        name: "FAGNER DE CARVALHO GONCALVES",
        cnpj: "10.495.429/0001-50",
        zipcode: "36880-078",
        address: "R DESEMBARGADOR CANEDO",
        number: "363",
        district: "CENTRO",
        city: "Muriaé",
        state: "MG"
    },
    {
        name: "FAIXA SINALIZACAO VIARIA LTDA",
        cnpj: "74.315.607/0001-05",
        zipcode: "07222-170",
        address: "R PREFEITO OLIVIER RAMOS NOGUEIRA",
        number: "266",
        district: "CID INDL SATELITE",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "FAMA ELETRICA & ILUMINACAO LTDA - ME",
        cnpj: "59.784.579/0001-73",
        zipcode: "02762-050",
        address: "R IMARUI 152",
        number: "",
        district: "JD CACHOEIRA",
        city: "SP",
        state: "SP"
    },
    {
        name: "FABRICA DE ARTEFATOS METALURGICOS ITA LTDA",
        cnpj: "59.293.662/0001-40",
        zipcode: "09560-500",
        address: "AL SAO CAETANO",
        number: "2790",
        district: "STA MARIA",
        city: "São Caetano do Sul",
        state: "SP"
    },
    {
        name: "FANTIM IND E COM LTDA",
        cnpj: "38.911.822/0001-05",
        zipcode: "08538-600",
        address: "R ANTONIO LOURENÇO DOS SANTOS 205",
        number: "",
        district: "JD TRIANGULO",
        city: "Ferraz de Vasconcelos",
        state: "SP"
    },
    {
        name: "FAQ PAINEIS E QUADROS ELETRICOS EIRELI",
        cnpj: "13.229.502/0001-30",
        zipcode: "03707-050",
        address: "R COPARA",
        number: "425",
        district: "PENHA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FASHION LOGISTICA LTDA",
        cnpj: "09.318.927/0001-49",
        zipcode: "06460-000",
        address: "AV TAMBORE",
        number: "448",
        district: "TAMBORE",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "CILNET COMUNICACAO E INFORMATICA LTDA",
        cnpj: "04.127.856/0001-83",
        zipcode: "18520-000",
        address: "R TIETE",
        number: "400",
        district: "N. S. DE LOURDES",
        city: "Cerquilho",
        state: "SP"
    },
    {
        name: "VLADIMIRO ALVARES DE MELO",
        cnpj: "08.452.767/0001-63",
        zipcode: "18120-000",
        address: "SIT DA MALAGUETE",
        number: "259",
        district: "MATO DENTRO",
        city: "Mairinque",
        state: "SP"
    },
    {
        name: "FBF CONSTRUÇOES E SERVIÇOS EIRELLI - EPP",
        cnpj: "02.542.939/0001-03",
        zipcode: "03337-070",
        address: "R NAGIB IZAR 457 2 ANDAR",
        number: "",
        district: "JD ANALIA FRANCO",
        city: "",
        state: ""
    },
    {
        name: "FCF CONSTRUÇOES LTDA",
        cnpj: "59.413.062/0001-78",
        zipcode: "09920-550",
        address: "R ANTONIO JOAO DE MORAES 149",
        number: "",
        district: "CENTRO",
        city: "Diadema",
        state: "SP"
    },
    {
        name: "FEED FOOD RESTAURANTE LTDA",
        cnpj: "15.003.208/0001-31",
        zipcode: "05404-011",
        address: "R ARTUR DE AZEVEDO 517",
        number: "",
        district: "PINHEIROS",
        city: "SP",
        state: "SP"
    },
    {
        name: "BRASIL AROMATICOS PRODUTOS NATURAIS LTDA",
        cnpj: "05.378.994/0001-06",
        zipcode: "08240-173",
        address: "R B.B. VARELA",
        number: "168",
        district: "VILA TAQUARI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FELIX CONFECÇOES E COMERCIO LTDA",
        cnpj: "04.774.738/0001-67",
        zipcode: "08460-530",
        address: "R FURTADO DE MORAIS 35",
        number: "",
        district: "JD SÃO PAULO",
        city: "SP",
        state: "SP"
    },
    {
        name: "FEMAB IND E COM DE ESQUADRIAS DE ALUMINIO LTDA",
        cnpj: "00.148.812/0001-89",
        zipcode: "08080-410",
        address: "R ARROIO CHUI 197",
        number: "",
        district: "SÃO MIGUEL PTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "FEDERAÇAO NACIONAL DE EDUCAÇAO E INTEGRAÇAO DOS SURDOS",
        cnpj: "29.262.052/0003-80",
        zipcode: "04343-090",
        address: "R MONSENHOR BASILIO PEREIRA 115",
        number: "",
        district: "JABAQUARA",
        city: "SP",
        state: "SP"
    },
    {
        name: "FENICCE EMBALAGENS EIRELI",
        cnpj: "01.068.083/0001-13",
        zipcode: "08586-150",
        address: "AV INDUSTRIAL",
        number: "1255",
        district: "PARQUE SAO PEDRO",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "T A DA S OLIVEIRA SEGURANÇA PATRIMONIAL ME",
        cnpj: "19.961.463/0001-48",
        zipcode: "03716-000",
        address: "R DOMINGOS BELMONTE 70",
        number: "",
        district: "JD PIRATININGA",
        city: "SP",
        state: "SP"
    },
    {
        name: "FEP MODAS LTDA",
        cnpj: "04.575.034/0001-65",
        zipcode: "03013-001",
        address: "R CASIMIRO DE ABREU 448",
        number: "",
        district: "BRAS",
        city: "SP",
        state: "SP"
    },
    {
        name: "MAMO CONFECÇOES LTDA",
        cnpj: "11.268.411/0003-40",
        zipcode: "07097-420",
        address: "AV BARTOLOMEU DE CARLOS 230 LJ 2068",
        number: "",
        district: "JD FLOR DA MONTANHA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "FERAMETAIS COM DE METAIS LTDA",
        cnpj: "13.560.393/0001-30",
        zipcode: "07411-425",
        address: "AL DAS ORQUIDEAS 175 OU 117",
        number: "",
        district: "CID NOVA ARUJA",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "FERLU COSTURAS EIRELI ME",
        cnpj: "21.034.213/0010-04",
        zipcode: "07161-740",
        address: "R IBITIBA 454",
        number: "",
        district: "JD MARIA CLARA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "FERNANDA DABBUR ARQUITETURA E INTERIORES LTDA",
        cnpj: "03.406.498/0001-85",
        zipcode: "04516-001",
        address: "AV ROUXINOL",
        number: "1041",
        district: "INDIANOPOLIS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "POSTO DE SERVIÇOS JARDIM INDAIA LTDA",
        cnpj: "09.106.077/0001-15",
        zipcode: "02067-060",
        address: "R CASSIO DE ALMEIDA 203",
        number: "",
        district: "VL GUILHERME",
        city: "SP",
        state: "SP"
    },
    {
        name: "ANTONIO COSTA FERRAMENTARIA EIRELI",
        cnpj: "07.723.645/0001-00",
        zipcode: "13212-790",
        address: "Avenida Doutor Wady Badra",
        number: "347",
        district: "Jardim das Tulipas",
        city: "Jundiaí",
        state: "SP"
    },
    {
        name: "FERRO E AÇO J.C. GUARU LTDA *",
        cnpj: "03.031.487/0001-68",
        zipcode: "07252-000",
        address: "EST PRESIDENTE JUSCELINO KUBITSCHEK DE OLIVEIRA",
        number: "3757",
        district: "JARDIM ALBERTINA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "FERTIZINCO IND COM MICRONUTRIENTES LTDA",
        cnpj: "03.029.934/0001-44",
        zipcode: "07411-750",
        address: "AV OSAKA 315",
        number: "",
        district: "CENTRO INDL ARUJA",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "F F K TOOLS FERRAMENTARIA LTDA",
        cnpj: "01.393.371/0001-43",
        zipcode: "07600-000",
        address: "R FERNANDO FONSECA KVINT 36",
        number: "",
        district: "TERRA PRETA",
        city: "Mairiporã",
        state: "SP"
    },
    {
        name: "FUNDACAO INSTITUTO DE ADMINISTRAÇAO",
        cnpj: "44.315.919/0001-40",
        zipcode: "05425-070",
        address: "AV NAÇOES UNIDAS 7221",
        number: "",
        district: "BUTANTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "AMAZONAS LESTE LTDA*",
        cnpj: "68.400.449/0019-00",
        zipcode: "02537-117",
        address: "AV ENGENHEIRO CAETANO ALVARES",
        number: "3698",
        district: "IMIRIM",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AMAZONAS PRIME VEICULOS E PECAS LTDA",
        cnpj: "23.820.026/0001-81",
        zipcode: "02537-117",
        address: "AV ENGENHEIRO CAETANO ALVARES",
        number: "3750",
        district: "IMIRIM",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AMAZONAS LESTE LTDA*",
        cnpj: "68.400.449/0010-71",
        zipcode: "04262-200",
        address: "AV NAZARE",
        number: "1070",
        district: "IPIRANGA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AMAZONAS LESTE LTDA*",
        cnpj: "68.400.449/0002-61",
        zipcode: "02065-000",
        address: "R JOAQUINA RAMALHO",
        number: "8",
        district: "VILA GUILHERME",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AMAZONAS LESTE LTDA*",
        cnpj: "68.400.449/0014-03",
        zipcode: "03102-004",
        address: "AV ALCANTARA MACHADO",
        number: "2132",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "W/A PARTICIPACOES LTDA*",
        cnpj: "07.148.960/0001-42",
        zipcode: "07111-340",
        address: "R TAPAJOS",
        number: "100",
        district: "JARDIM BARBOSA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "AMAZONAS LESTE LTDA*",
        cnpj: "68.400.449/0016-67",
        zipcode: "03064-000",
        address: "AV CELSO GARCIA",
        number: "4886",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AMAZONAS LESTE LTDA",
        cnpj: "68.400.449/0008-57",
        zipcode: "04661-000",
        address: "AV INTERLAGOS 665",
        number: "",
        district: "INTERLAGOS",
        city: "",
        state: ""
    },
    {
        name: "AMAZONAS LESTE LTDA*",
        cnpj: "68.400.449/0003-42",
        zipcode: "05005-000",
        address: "R TURIASSU",
        number: "926",
        district: "PERDIZES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AMAZONAS LESTE LTDA*",
        cnpj: "68.400.449/0013-14",
        zipcode: "02938-000",
        address: "AV RAIMUNDO PEREIRA DE MAGALHAES",
        number: "5867",
        district: "PIRITUBA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AMAZONAS LESTE LTDA*",
        cnpj: "68.400.449/0001-80",
        zipcode: "05016-090",
        address: "AV SUMARE",
        number: "574",
        district: "PERDIZES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FIBRASIL INDUSTRIA E COMERCIO DE CARROCERIAS LTDA*",
        cnpj: "54.585.138/0001-29",
        zipcode: "07232-050",
        address: "R CONCRETEX",
        number: "526",
        district: "CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "LILIAN MOSSULY DE SOUZA",
        cnpj: "09.360.786/0001-22",
        zipcode: "08060-400",
        address: "AV DOS GURIS",
        number: "208",
        district: "VILA JACUI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FILBRAX - INDUSTRIA E COMERCIO DE FILTROS LTDA",
        cnpj: "05.115.574/0001-29",
        zipcode: "09372-030",
        address: "R GIRASSOL",
        number: "301",
        district: "LOTEAMENTO INDUSTRIAL CORAL",
        city: "Mauá",
        state: "SP"
    },
    {
        name: "HOTEL MARCO INTERNACIONAL S.A.",
        cnpj: "03.221.095/0004-04",
        zipcode: "05676-120",
        address: "AV MAGALHAES DE CASTRO",
        number: "12000",
        district: "CIDADE JARDIM",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FINANCIAL CONTABIL S/S LTDA",
        cnpj: "61.714.705/0001-65",
        zipcode: "03127-070",
        address: "R ILANSA 42",
        number: "",
        district: "VL PRUDENTE",
        city: "",
        state: ""
    },
    {
        name: "PETRA CAPITAL GESTAO DE INVESTIMENTOS LTDA",
        cnpj: "09.204.714/0001-96",
        zipcode: "01310-923",
        address: "AV PAULISTA 1842 TORRE NORTE CJ 17",
        number: "",
        district: "BELA VISTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "FIOFORT METALURGICA E ESTAMPARIA LTDA",
        cnpj: "02.992.046/0001-60",
        zipcode: "07222-030",
        address: "R ITAJUBA",
        number: "632",
        district: "CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "FIORATTI INDUSTRIA METALURGICA EIRELI",
        cnpj: "38.841.144/0001-43",
        zipcode: "03880-050",
        address: "R ITAMARATI DE MINAS",
        number: "121",
        district: "VILA PONTE RASA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FIORENTINA LAVANDERIA LTDA",
        cnpj: "13.309.457/0001-24",
        zipcode: "08022-130",
        address: "R ELIAS MONTEIRO CARDOSO 37",
        number: "",
        district: "VL CURUÇA VELHA",
        city: "SP",
        state: "SP"
    },
    {
        name: "TRANSPORTADORA FIOROT LTDA",
        cnpj: "00.252.984/0003-60",
        zipcode: "07224-110",
        address: "R BELMIRO BRAGA",
        number: "115",
        district: "CID SATELITE",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "FISACORP TECHNOLOGY SOLUTIONS COM SERV IMPORT E EXPORTAÇAO LTDA",
        cnpj: "12.606.914/0001-80",
        zipcode: "04066-021",
        address: "AV PROF CIRO DE BARROS RESENDE 505",
        number: "",
        district: "PLANALTO PAULISTA",
        city: "",
        state: ""
    },
    {
        name: "FISCARELLI & PRADO SOCIEDADE DE ADVOGADOS",
        cnpj: "18.335.974/0001-91",
        zipcode: "01223-000",
        address: "R MARQUES DE ITU",
        number: "58",
        district: "VILA BUARQUE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LA PALOMA TRANSPORTES LTDA",
        cnpj: "05.879.924/0002-04",
        zipcode: "07222-020",
        address: "R CECILIA ROIZEN 913 BOX 2",
        number: "",
        district: "CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "FLEX MOGI",
        cnpj: "22.728.648/0001-11",
        zipcode: "08773-380",
        address: "AV FRANCISCO RODRIGUES FILHO",
        number: "2002",
        district: "VILA MOGILAR",
        city: "Mogi das Cruzes",
        state: "SP"
    },
    {
        name: "HIROMI YOKOWAMA E OUTRA",
        cnpj: "08.072.947/0001-10",
        zipcode: "07401-680",
        address: "ESTRADA ZENCURO TAMADA S/N",
        number: "",
        district: "VL PILAR",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "PANIFICADORA FLOR DE SANTANA LTDA",
        cnpj: "60.562.360/0001-09",
        zipcode: "08230-020",
        address: "R FRANCISCO RODRIGUES SECLER 362",
        number: "",
        district: "ITAQUERA",
        city: "",
        state: ""
    },
    {
        name: "FLORA DEL MAR EMPREENDIMENTOS E CONSTRUCOES SPE LTDA",
        cnpj: "21.597.714/0001-07",
        zipcode: "11250-000",
        address: "AV MANOEL DA NOBREGA 116",
        number: "",
        district: "JD LIDO",
        city: "Bertioga",
        state: "SP"
    },
    {
        name: "FLUDMAC IND COM LTDA",
        cnpj: "02.136.672/0001-54",
        zipcode: "06765-290",
        address: "R OURINHOS 88",
        number: "",
        district: "JD DAS OLIVEIRAS",
        city: "Taboão da Serra",
        state: "SP"
    },
    {
        name: "FRANCO E MARTINES MOVEIS E EQUIPAMENTOS PARA ESCRITORIO LTDA",
        cnpj: "00.398.244/0001-74",
        zipcode: "02122-010",
        address: "R ARARITAGUABA",
        number: "357",
        district: "VL MARIA ALTA",
        city: "",
        state: ""
    },
    {
        name: "FOCUS LOCACAO DE EQUIPAMENTOS E CONSULTORIA LABORAL LTDA - ME",
        cnpj: "08.329.364/0001-21",
        zipcode: "07400-000",
        address: "R SILMAR MONTONIO 215",
        number: "",
        district: "CENTRO",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "FOCUSLOG LOGISTICA SERVICOS E TRANSPORTES LTDA",
        cnpj: "04.824.534/0002-74",
        zipcode: "03618-160",
        address: "R DUARTE GARCIA",
        number: "137",
        district: "3 SUBDISTRITO PENHA DE FRANCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "STUDIO VEICULOS E PECAS LTDA",
        cnpj: "17.324.331/0004-22",
        zipcode: "03155-000",
        address: "AVENIDA INTERLAGOS",
        number: "665",
        district: "JARDIM UMUARAMA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO DO EDIFICIO FOREST HILLS",
        cnpj: "01.657.225/0001-88",
        zipcode: "05709-010",
        address: "R DR JOSE ANDRADE FIGUEIRA 374",
        number: "",
        district: "MORUMBI",
        city: "SP",
        state: "SP"
    },
    {
        name: "FORJINTEL COM DE EQUIP E INSTAL DE REDES DE TELEC",
        cnpj: "11.110.148/0001-03",
        zipcode: "06210-030",
        address: "R JOSE LOPES LAZARO 129",
        number: "",
        district: "PRESIDENTE ALTINO",
        city: "Osasco",
        state: "SP"
    },
    {
        name: "METALURGICA FORMIGARI LTDA",
        cnpj: "52.922.085/0001-69",
        zipcode: "09370-901",
        address: "AV PAPA JOAO XXIII 3417",
        number: "",
        district: "SERTAOZINHO",
        city: "Mauá",
        state: "SP"
    },
    {
        name: "FORREST BRASIL TECNOLOGIA LTDA",
        cnpj: "18.035.750/0002-45",
        zipcode: "86400-000",
        address: "AVENIDA MARCIANO DE BARROS",
        number: "700",
        district: "ESTACAO",
        city: "Jacarezinho",
        state: "PR"
    },
    {
        name: "FORSAITT COMERCIAL TECNICA LTDA",
        cnpj: "54.047.360/0001-78",
        zipcode: "03313-000",
        address: "R FRANCISCO MARENGO",
        number: "438",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FORTAL VIDROS TEMPERADOS EIRELI",
        cnpj: "13.004.883/0001-50",
        zipcode: "07232-060",
        address: "R GIANCARLO VESTRI",
        number: "201",
        district: "CIDADE INDUSTRIAL SATELITE",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "FORTLUX COMERCIO E DISTRIBUIDORA DE ARTIGOS PARA ILUMINACAO LTDA",
        cnpj: "14.142.032/0001-36",
        zipcode: "09270-080",
        address: "R PATAGONIA",
        number: "183",
        district: "PARQUE CAPUAVA",
        city: "Santo André",
        state: "SP"
    },
    {
        name: "FRANAVES ALIMENTOS EIRELI ME",
        cnpj: "24.133.371/0001-00",
        zipcode: "03889-000",
        address: "AV AGUIA DE HAIA 4230",
        number: "",
        district: "JARDIM SORAIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "FRANGO FRITES INDAIATUBA EIRELI ME",
        cnpj: "24.005.285/0001-11",
        zipcode: "13334-040",
        address: "AV DR JACOMO NAZARIO 957",
        number: "",
        district: "CID NOVA I",
        city: "Indaiatuba",
        state: "SP"
    },
    {
        name: "C E Y CAFETERIA LTDA",
        cnpj: "11.605.934/0001-73",
        zipcode: "03527-900",
        address: "AV ARICANDUVA",
        number: "5555",
        district: "VILA MATILDE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "WK COMERCIO DE DOCES E SALGADOS LTDA - EPP*",
        cnpj: "10.954.155/0001-10",
        zipcode: "01121-000",
        address: "R PRATES",
        number: "599",
        district: "BOM RETIRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FREZADORA TECNICA BANDEIRANTE LTDA EPP",
        cnpj: "62.598.487/0001-03",
        zipcode: "03588-010",
        address: "R SAARA 95",
        number: "",
        district: "CID LIDER",
        city: "SP",
        state: "SP"
    },
    {
        name: "FRIERE VENDAS E SERVICOS CORPORATIVOS EIRELI",
        cnpj: "03.923.796/0001-42",
        zipcode: "61635-100",
        address: "R 1-H (CJ TABAPUA)",
        number: "59",
        district: "TABAPUA",
        city: "Caucaia",
        state: "CE"
    },
    {
        name: "FRIGORIFICO JACUY LTDA",
        cnpj: "16.739.409/0001-64",
        zipcode: "08070-500",
        address: "R JOAO JOSE RODRIGUES",
        number: "122",
        district: "SAO MIGUEL PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FRIGORIFICO ALIANÇA LTDA",
        cnpj: "96.332.812/0001-03",
        zipcode: "07250-130",
        address: "R LANDRI SALES 1310",
        number: "",
        district: "CID ARACILIA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "J. J. THEDIN TRANSPORTES - ME",
        cnpj: "05.868.169/0002-62",
        zipcode: "02060-100",
        address: "R CARMINE GAETA 92",
        number: "",
        district: "VL GUILHERME",
        city: "SP",
        state: "SP"
    },
    {
        name: "FRIUNA ALIMENTOS LTDA",
        cnpj: "06.095.896/0001-16",
        zipcode: "13405-459",
        address: "AV CRISTOVAO COLOMBO",
        number: "1351",
        district: "ALGODOAL",
        city: "Piracicaba",
        state: "SP"
    },
    {
        name: "FRUTAROM DO BRASIL IND E COM LTDA",
        cnpj: "44.007.789/0002-69",
        zipcode: "18540-000",
        address: "AV DAS MONÇOES 85",
        number: "",
        district: "ITAQUI",
        city: "Porto Feliz",
        state: "SP"
    },
    {
        name: "FRUTAROM DO BRASIL IND E COM LTDA - MATRIZ",
        cnpj: "44.007.789/0001-88",
        zipcode: "02187-040",
        address: "R SUBTENENTE FRANCISCO HIERRO 202",
        number: "",
        district: "PQ NOVO MUNDO",
        city: "SP",
        state: "SP"
    },
    {
        name: "RAFAELLA VANESSA CUNHA SALDANHA COMERCIO E SERVICOS*",
        cnpj: "29.826.598/0001-54",
        zipcode: "05307-190",
        address: "AVENIDA ENGENHEIRO ROBERTO ZUCCOLO",
        number: "284",
        district: "JARDIM HUMAITA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "EDITORA FTD S A",
        cnpj: "61.186.490/0001-57",
        zipcode: "01326-010",
        address: "R RUI BARBOSA",
        number: "156",
        district: "BELA VISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FUJIFILM HUNT DO BRASIL - PRODUCAO DE QUIMICOS LTDA",
        cnpj: "03.882.548/0001-09",
        zipcode: "07411-670",
        address: "AV NEW JERSEY 1030 BLOCO A",
        number: "",
        district: "CENTRO INDL ARUJA",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "FUJI JAPAN VEICULOS E PECAS LTDA",
        cnpj: "11.412.987/0002-59",
        zipcode: "05038-010",
        address: "PC JACOMO ZANELA",
        number: "187",
        district: "AGUA BRANCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FUJI JAPAN VEICULOS E PECAS LTDA MATRIZ*",
        cnpj: "11.412.987/0001-78",
        zipcode: "02065-000",
        address: "AV JOAQUINA RAMALHO",
        number: "62",
        district: "VILA GUILHERME",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FUJI JAPAN VEICULOS E PECAS LTDA FILIAL LINS",
        cnpj: "11.412.987/0004-10",
        zipcode: "01538-001",
        address: "AV LINS DE VASCONCELOS",
        number: "1418",
        district: "CAMBUCI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FUJI JAPAN VEICULOS E PECAS LTDA",
        cnpj: "11.412.987/0002-59",
        zipcode: "05038-010",
        address: "PC JACOMO ZANELA",
        number: "187",
        district: "AGUA BRANCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FUJI JAPAN VEICULOS E PECAS LTDA",
        cnpj: "11.412.987/0006-82",
        zipcode: "05016-090",
        address: "AVENIDA SUMARE",
        number: "241",
        district: "PERDIZES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FUJII NATACAO LTDA.",
        cnpj: "67.129.957/0001-03",
        zipcode: "08115-000",
        address: "AVENIDA MAL TITO",
        number: "3762",
        district: "SAO MIGUEL PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FUJITSU GENERAL DO BRASIL LTDA*",
        cnpj: "43.244.771/0001-37",
        zipcode: "01327-905",
        address: "RUA TREZE DE MAIO",
        number: "1633",
        district: "BELA VISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FUNDACAO",
        cnpj: "49.325.434/0001-50",
        zipcode: "01222-020",
        address: "R DR VILA NOVA 268 - 2 ANDAR",
        number: "",
        district: "VL BUARQUE",
        city: "SP",
        state: "SP"
    },
    {
        name: "FUNDACAO DE AMPARO A PESQUISA DO ESTADO DE SAO PAULO",
        cnpj: "43.828.151/0002-26",
        zipcode: "05468-901",
        address: "R PIO XI 1500",
        number: "1500",
        district: "ALTO DE PINHEIROS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FUNDAÇAO EDUCACIONAL DE CARATINGA - FUNEC*",
        cnpj: "19.325.547/0001-95",
        zipcode: "35300-037",
        address: "AV MOACYR DE MATTOS",
        number: "49",
        district: "CENTRO",
        city: "Caratinga",
        state: "MG"
    },
    {
        name: "FUNDACAO PARQUE TECNOLOGICO ITAIPU - BRASIL",
        cnpj: "07.769.688/0001-18",
        zipcode: "85867-900",
        address: "AV TANCREDO NEVES 6731",
        number: "6731",
        district: "JARDIM ITAIPU",
        city: "Foz do Iguaçu",
        state: "PR"
    },
    {
        name: "FUNDAÇAO NOSSA SENHORA AUXILIADORA DO IPIRANGA BUENO DE AZEVEDO",
        cnpj: "60.737.590/0008-38",
        zipcode: "04266-040",
        address: "R CLOVIS BUENO DE AZEVEDO 145",
        number: "",
        district: "IPIRANGA",
        city: "",
        state: ""
    },
    {
        name: "FUNDAÇAO NOSSA SENHORA AUXILIADORA DO IPIRANGA - 23",
        cnpj: "60.737.590/0003-23",
        zipcode: "04266-030",
        address: "R DOM LUIS LASANHA",
        number: "300",
        district: "IPIRANGA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FUNDAÇAO NOSSA SENHORA AUXILIADORA DO IPIRANGA - 95",
        cnpj: "60.737.590/0005-95",
        zipcode: "04266-030",
        address: "R DOM LUIS LASANHA",
        number: "301",
        district: "IPIRANGA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FUNDAÇAO NOSSA SENHORA AUXILIADORA DO IPIRANGA - 04",
        cnpj: "60.737.590/0004-04",
        zipcode: "04266-030",
        address: "R DOM LUIS LASANHA 220",
        number: "",
        district: "IPIRANGA",
        city: "",
        state: ""
    },
    {
        name: "FUNDAÇAO NOSSA SENHORA AUXILIADORA DO IPIRANGA - 76",
        cnpj: "60.737.590/0006-76",
        zipcode: "04267-010",
        address: "R CORREIA SALGADO 34",
        number: "",
        district: "IPIRANGA",
        city: "",
        state: ""
    },
    {
        name: "FUNDAÇAO NOSSA SENHORA AUXILIADORA DO IPIRANGA - 42",
        cnpj: "60.737.590/0002-42",
        zipcode: "04266-030",
        address: "R DOM LUIS LASANHA 303",
        number: "",
        district: "IPIRANGA",
        city: "",
        state: ""
    },
    {
        name: "FUNDAÇAO NOSSA SENHORA AUXILIADORA DO IPIRANGA UNIDADE VI",
        cnpj: "60.737.590/0007-57",
        zipcode: "04266-030",
        address: "R DOM LUIS LASANHA 255/267",
        number: "",
        district: "IPIRANGA",
        city: "",
        state: ""
    },
    {
        name: "FUNDACAO NOSSA SENHORA AUXILIADORA DO IPIRANGA",
        cnpj: "60.737.590/0001-61",
        zipcode: "04268-020",
        address: "R ARCIPRESTE ANDRADE",
        number: "503",
        district: "IPIRANGA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SUPERMERCADO G PIRES PLUS LTDA",
        cnpj: "02.500.861/0001-64",
        zipcode: "04813-340",
        address: "R NOVA IRLANDA",
        number: "153",
        district: "SANTO AMARO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "G TAN EPP",
        cnpj: "20.804.387/0001-46",
        zipcode: "01021-100",
        address: "R VINTE E CINCO DE MARÇO 976 LOJA 09 PISO SUPERIOR",
        number: "",
        district: "CENTRO",
        city: "SP",
        state: "SP"
    },
    {
        name: "AG DA SILVA PORTOES - ME",
        cnpj: "20.167.745/0001-57",
        zipcode: "05736-100",
        address: "R CHINIGUA",
        number: "6",
        district: "JARDIM INGA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "G.B. COMERCIO E DISTRIBUIÇAO LTDA ME",
        cnpj: "12.593.746/0001-35",
        zipcode: "70634-200",
        address: "S.T SOFN QUADRA 02 BLOCO A LOJA 08 - ASA NORTE",
        number: "",
        district: "ZONA INDUSTRIAL",
        city: "Brasília",
        state: "DF"
    },
    {
        name: "G4S INTERATIVA SERVICE LTDA.",
        cnpj: "02.812.740/0001-58",
        zipcode: "09521-360",
        address: "R SANTA ROSA",
        number: "191",
        district: "SANTA PAULA",
        city: "São Caetano do Sul",
        state: "SP"
    },
    {
        name: "G4S INTERATIVA SERVICE LTDA*",
        cnpj: "02.812.740/0003-10",
        zipcode: "01326-010",
        address: "R RUI BARBOSA",
        number: "70",
        district: "BELA VISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VANGUARDA SEGURANÇA E VIGILANCIA LTDA",
        cnpj: "47.190.129/0001-73",
        zipcode: "00000-000",
        address: "AV SENADOR TEOTONIO VILELA 261",
        number: "",
        district: "INTERLAGOS",
        city: "SP",
        state: "SP"
    },
    {
        name: "VANGUARDA SEGURANÇA E VIGILANCIA LTDA",
        cnpj: "47.190.129/0001-73",
        zipcode: "",
        address: "AV DEPUTADO EMILIO CARLOS",
        number: "3100",
        district: "LIMÃO",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO GAIVOTA FLAT",
        cnpj: "64.719.776/0001-49",
        zipcode: "11250-000",
        address: "lago da pousada",
        number: "51",
        district: "liviera",
        city: "Bertioga",
        state: "SP"
    },
    {
        name: "GAJANG CONFECÇOES LTDA",
        cnpj: "02.184.597/0001-05",
        zipcode: "03303-203",
        address: "R CARNOT 68",
        number: "",
        district: "CANINDE",
        city: "SP",
        state: "SP"
    },
    {
        name: "GALERIA DE COMUNICAÇOES LTDA",
        cnpj: "05.632.025/0001-21",
        zipcode: "05051-030",
        address: "Rua Fábia",
        number: "902",
        district: "Vila Romana",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "GAPIZA COM DE MANGUEIRAS E CONEXOES LTDA",
        cnpj: "08.371.324/0001-48",
        zipcode: "03556-000",
        address: "AV ENG SOARES DE CAMARGO 667",
        number: "",
        district: "CID PATRIARCA",
        city: "SP",
        state: "SP"
    },
    {
        name: "GARAGE 4 WD COM E SERVIÇOS AUTOMOTIVOS LTDA",
        cnpj: "13.347.235/0001-04",
        zipcode: "04707-000",
        address: "AV ROQUE PETRONI JUNIOR 170",
        number: "",
        district: "JD DAS ACACIAS",
        city: "SP",
        state: "SP"
    },
    {
        name: "GAVETEIRO COMERCIO, IMPORTACAO E EXPORTACAO LTDA",
        cnpj: "16.631.233/0001-22",
        zipcode: "01139-003",
        address: "Avenida Marquês de São Vicente",
        number: "1619",
        district: "Várzea da Barra Funda",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "GBS2 SERVIÇOS DE LIMPEZA E PINTURA LTDA",
        cnpj: "10.673.219/0001-05",
        zipcode: "00000-000",
        address: "R ANDREA PERES 34",
        number: "",
        district: "BROOKLIN NOVO",
        city: "SP",
        state: "SP"
    },
    {
        name: "GDK DRYSOLUTIONS INDUSTRIA E COMERCIO DE MATERIAIS DE CONSTRUCAO A SECO - EIRELI",
        cnpj: "08.646.716/0001-72",
        zipcode: "03618-060",
        address: "R DUARTE GARCIA 167 GP 5",
        number: "",
        district: "PQ STO EDUARDO",
        city: "SP",
        state: "SP"
    },
    {
        name: "ODMEYER SUPER MERCEARIA LTDA",
        cnpj: "62.099.775/0001-13",
        zipcode: "01033-000",
        address: "AV CASPER LIBERO",
        number: "144",
        district: "CENTRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SUPERMERCADO GONCALVES PIRES LTDA- MATRIZ",
        cnpj: "47.417.027/0001-48",
        zipcode: "04428-010",
        address: "AV YERVANT KISSAJIKIAN",
        number: "3837",
        district: "VL MISSIONARIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SUPERMERCADO GONÇALVES PIRES LTDA",
        cnpj: "47.417.027/0003-00",
        zipcode: "04428-000",
        address: "AV YERVANT KISSAJIKIAN 1666",
        number: "",
        district: "AMERICANOPOLIS",
        city: "SP",
        state: "SP"
    },
    {
        name: "SUPERMERCADO G PIRES PLUS LTDA",
        cnpj: "02.500.861/0001-64",
        zipcode: "04813-340",
        address: "RUA NOVA IRLANDA",
        number: "153",
        district: "SANTO AMARO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SUPERMERCADO GONÇALVES PIRES LTDA 3092",
        cnpj: "47.417.027/0004-90",
        zipcode: "04428-000",
        address: "AV YERVANT KISSAJIKIAN 3092",
        number: "",
        district: "AMERICANOPOLIS",
        city: "SP",
        state: "SP"
    },
    {
        name: "GEDABES INDUSTRIA MECANICA LTDA",
        cnpj: "56.465.602/0001-79",
        zipcode: "08150-000",
        address: "AV TEODORO BERNARDO DO NASCIMENTO 1619",
        number: "",
        district: "JD ROBRU",
        city: "SP",
        state: "SP"
    },
    {
        name: "GELATERIA VENETA LTDA",
        cnpj: "16.669.003/0001-52",
        zipcode: "95670-000",
        address: "AV BORGES DE MEDEIROS",
        number: "2727",
        district: "CENTRO",
        city: "Gramado",
        state: "RS"
    },
    {
        name: "GELITA DO BRASIL LTDA.",
        cnpj: "12.199.337/0001-59",
        zipcode: "06715-125",
        address: "R PHILLIP LEINER",
        number: "200",
        district: "RIO COTIA",
        city: "Cotia",
        state: "SP"
    },
    {
        name: "LUCIANNA STELLA GELO",
        cnpj: "08.328.757/0001-10",
        zipcode: "03621-030",
        address: "R TOUTINEGRA",
        number: "47",
        district: "VILA MARIETA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "GEO ACQUA PRODUTOS PARA MONITORAMENTO AMBIENTAL LTDA.",
        cnpj: "07.618.797/0002-15",
        zipcode: "04535-110",
        address: "R DOUTOR SODRE",
        number: "72",
        district: "VILA NOVA CONCEICAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "GESTAO IDEAL PRESTACAO DE SERVICOS LTDA - ME",
        cnpj: "13.098.230/0001-87",
        zipcode: "00000-000",
        address: "AV BRASIL 1230",
        number: "",
        district: "CALMON VIANA",
        city: "Poá",
        state: "SP"
    },
    {
        name: "V A M INDUSTRIA E COMERCIO DE ARTIGOS VESTUARIO LTDA - ME",
        cnpj: "11.898.176/0001-29",
        zipcode: "",
        address: "R JULIO RIBEIRO 75",
        number: "",
        district: "",
        city: "",
        state: "SP"
    },
    {
        name: "GETNINJAS ATIVIDADES DE INTERNET LTDA.",
        cnpj: "14.127.813/0001-51",
        zipcode: "05402-300",
        address: "AV REBOUCAS",
        number: "2472",
        district: "PINHEIROS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "GOMES FREIRE COMERCIO DE PRODUTOS ALIMENTICIOS LTDA*",
        cnpj: "15.747.696/0001-91",
        zipcode: "05525-050",
        address: "RUA COMENDADOR FELICIO LANZARA",
        number: "44",
        district: "JARDIM JUSSARA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "GF GESSO EIRELI",
        cnpj: "31.097.323/0001-79",
        zipcode: "08371-435",
        address: "AVENIDA RAGUEB CHOHFI",
        number: "5915",
        district: "SAO PAULO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FAGNER RIBEIRO DE MOURA EMPREITEIRO",
        cnpj: "12.926.544/0001-68",
        zipcode: "08120-040",
        address: "R RIBEIRO ESCOBAR",
        number: "169",
        district: "ITAIM PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "GFG COSMETICOS LTDA",
        cnpj: "55.572.044/0001-88",
        zipcode: "08538-100",
        address: "R PREFEITO TAKUME KOIKE",
        number: "213",
        district: "NUCLEO ITAIM",
        city: "Ferraz de Vasconcelos",
        state: "SP"
    },
    {
        name: "GFLEET INSPECOES EIRELI",
        cnpj: "01.858.807/0001-22",
        zipcode: "02404-040",
        address: "PC DOUTOR ANTONIO MERCADO",
        number: "42",
        district: "SANTANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "GILBARCO VEEDER-ROOT SOLUCOES INDUSTRIA E COMERCIO LTDA",
        cnpj: "04.893.402/0001-13",
        zipcode: "06460-110",
        address: "AL CAIAPOS",
        number: "173",
        district: "TAMBORE",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "GIMATEC INSTALAÇOES E MANUTENÇOES LTDA",
        cnpj: "17.188.845/0001-55",
        zipcode: "03929-100",
        address: "R SENADOR NILO COELHO 976",
        number: "",
        district: "JD SAPOPEMBA",
        city: "SP",
        state: "SP"
    },
    {
        name: "GIMATEX COMERCIO DE TECIDOS LTDA",
        cnpj: "06.149.440/0001-91",
        zipcode: "03025-000",
        address: "R ALMIRANTE BARROSO",
        number: "252",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "GIMEL TECNOLOGIA E COMERCIO DE INFORMATICA LTDA",
        cnpj: "05.870.028/0001-01",
        zipcode: "02034-010",
        address: "R ALFREDO GUEDES",
        number: "72",
        district: "SANTANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "GINA DUARTE DE ARAUJO CARAPICUIBA",
        cnpj: "02.120.010/0001-96",
        zipcode: "06390-070",
        address: "EST DO ADERNO",
        number: "53",
        district: "VL MENK",
        city: "Carapicuíba",
        state: "SP"
    },
    {
        name: "GIRAPLAST IND E COM DE EMBALAGENS LTDA",
        cnpj: "66.758.426/0001-17",
        zipcode: "08230-540",
        address: "R DR AIOSE 160",
        number: "",
        district: "VL VERDE",
        city: "SP",
        state: "SP"
    },
    {
        name: "GIROCARTAS PRESTADORA DE SERVIÇOS LTDA",
        cnpj: "68.155.092/0001-12",
        zipcode: "04905-021",
        address: "ESTR DO M BOI MIRIM 1431",
        number: "",
        district: "FIGUEIRA GRANDE",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONFECCOES GISTEL - EIRELI - EPP",
        cnpj: "61.519.138/0001-96",
        zipcode: "01122-021",
        address: "R PROFESSOR CESARE LOMBROSO",
        number: "308",
        district: "BOM RETIRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "GIULIETA JARDINAGEM E SERVICOS DE LIMPEZA EIRELI",
        cnpj: "26.043.567/0001-39",
        zipcode: "04164-220",
        address: "R UBAITABA",
        number: "233",
        district: "VILA MORAES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "GLOBAL HYDRAULICS LTDA",
        cnpj: "05.393.742/0001-48",
        zipcode: "03162-020",
        address: "R DO HIPODROMO 1445",
        number: "",
        district: "MOOCA",
        city: "SP",
        state: "SP"
    },
    {
        name: "GLOBOGEO ENGENHARIA E GEOTECNIA EIRELI",
        cnpj: "04.944.287/0001-69",
        zipcode: "04317-240",
        address: "R OURICANA 64",
        number: "",
        district: "JABAQUARA",
        city: "SP",
        state: "SP"
    },
    {
        name: "GMM ANCHOR SYSTEMS INDUSTRIA E COMERCIO - EIRELI",
        cnpj: "22.667.706/0001-44",
        zipcode: "07043-000",
        address: "R ENDRES",
        number: "676",
        district: "VILA DAS BANDEIRAS",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "GMM ENGENHARIA E CONSTRUCAO LTDA.",
        cnpj: "66.610.973/0001-50",
        zipcode: "07043-000",
        address: "R ENDRES",
        number: "676",
        district: "VILA DAS BANDEIRAS",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "GOCIL SEGURANCA ELETRONICA LTDA",
        cnpj: "03.979.056/0001-28",
        zipcode: "04570-001",
        address: "AV NOVA INDEPENDENCIA",
        number: "1087",
        district: "BROOKLIN PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MUNICIPIO DE GOIANIA",
        cnpj: "01.612.092/0001-23",
        zipcode: "74805-010",
        address: "AV DO CERRADO",
        number: "999",
        district: "PARQUE LOZANDES",
        city: "Goiânia",
        state: "GO"
    },
    {
        name: "GOLD MOL IND E COM DE MOLAS LTDA EPP",
        cnpj: "02.954.487/0001-77",
        zipcode: "08260-030",
        address: "R AGRIMENSOR SUGAYA 482",
        number: "",
        district: "COLONIA",
        city: "",
        state: ""
    },
    {
        name: "PAO DE OURO DE GUARULHOS LTDA",
        cnpj: "05.541.786/0001-78",
        zipcode: "07241-570",
        address: "R ICARA",
        number: "101",
        district: "VILA ISABEL",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "PAO DE OURO DE FERRAZ LTDA",
        cnpj: "13.027.477/0001-02",
        zipcode: "08540-000",
        address: "AV PRESIDENTE TANCREDO DE ALMEIDA NEVES",
        number: "4506",
        district: "JD NOSSA SENHORA DO CAMINHO",
        city: "Ferraz de Vasconcelos",
        state: "SP"
    },
    {
        name: "GOLF MULTISERVIÇOS LTDA",
        cnpj: "05.673.550/0001-95",
        zipcode: "03317-040",
        address: "R DIAMANTE PRETO 108 - ENTREGA R DR EDUARDO PEREIRA DE ALMEI",
        number: "",
        district: "CHAC CALIFORNIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "G.L DA SILVA MARCOLINO ENGENHARIA*",
        cnpj: "23.047.748/0001-45",
        zipcode: "09910-140",
        address: "AVENIDA NOSSA SENHORA DAS VITORIAS (JD CONCEICAO)",
        number: "257",
        district: "CENTRO",
        city: "Diadema",
        state: "SP"
    },
    {
        name: "INDUSTRIA GRAFICA GAZETA DE SAO PAULO EIRELI",
        cnpj: "03.069.083/0001-63",
        zipcode: "02190-030",
        address: "R SOLDADO JOSE LEITE DA SILVA",
        number: "256",
        district: "PARQUE NOVO MUNDO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "GRAINN SERVICE LTDA",
        cnpj: "04.987.064/0001-89",
        zipcode: "08580-000",
        address: "ESTRADA DO CORREDOR 6088",
        number: "",
        district: "CORREDOR",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "STRUTURA SERVIÇOS EM PISOS INDUSTRIAIS LTDA ME",
        cnpj: "13.795.206/0001-05",
        zipcode: "02368-000",
        address: "AV CORONEL SEZEFREDO FAGUNDES 14115",
        number: "",
        district: "JD TREMEMBE",
        city: "",
        state: ""
    },
    {
        name: "GRANATA COM DE CONFECÇOES LTDA",
        cnpj: "52.974.011/0001-76",
        zipcode: "01523-000",
        address: "R CLIMACO BARBOSA 85",
        number: "",
        district: "CAMBUCI",
        city: "SP",
        state: "SP"
    },
    {
        name: "GRANEI METALURGICA DE AUTO PEÇAS LTDA",
        cnpj: "60.448.206/0003-72",
        zipcode: "07140-237",
        address: "R SENADOR SEVERO GOMES 198",
        number: "",
        district: "TABOAO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "GRANEI METALURGICA DE AUTO PEÇAS LTDA - FILIAL",
        cnpj: "60.448.206/0002-91",
        zipcode: "07140-020",
        address: "R ENGENHEIRO ALBERT LEIMER 1167",
        number: "",
        district: "JD SÃO GERALDO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "GRARRO INDUSTRIA MECANICA LTDA",
        cnpj: "66.185.794/0001-13",
        zipcode: "03805-010",
        address: "R CERRO DE MATEUS SIMOES",
        number: "300",
        district: "PARQUE BOTURUSSU",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "GZ COMUNICACAO E DESIGN LTDA",
        cnpj: "14.568.014/0001-10",
        zipcode: "04718-001",
        address: "R CAPITAO OTAVIO MACHADO",
        number: "635",
        district: "CHACARA SANTO ANTONIO (ZONA SUL)",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "G A ANDRADE DE CARVALHO",
        cnpj: "32.475.426/0001-98",
        zipcode: "77426-062",
        address: "AV CONTORNO ESQUINA COM RUA 11",
        number: "1346",
        district: "RESIDENCIAL PARK DOS BURITIS",
        city: "Gurupi",
        state: "TO"
    },
    {
        name: "GREMIO RECREATIVO IOCHPE MAXION FABRIVA",
        cnpj: "65.058.760/0001-03",
        zipcode: "12720-690",
        address: "R DR OTHON BARCELLOS",
        number: "83-C",
        district: "",
        city: "Cruzeiro",
        state: "SP"
    },
    {
        name: "GRID RENT A CAR , FUNILARIA, PINTURA E COM DE PEÇAS EIRELI",
        cnpj: "07.720.784/0001-71",
        zipcode: "07024-160",
        address: "R CANTAREIRA 62 SALA 1",
        number: "",
        district: "VL AGUSTA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "GROUP TRANS TRANSPORTES EIRELI",
        cnpj: "28.441.388/0002-66",
        zipcode: "25085-008",
        address: "Rodovia Washington Luiz",
        number: "2569",
        district: "Parque Duque",
        city: "Duque de Caxias",
        state: "RJ"
    },
    {
        name: "GROUP TRANS TRANSPORTES EIRELI",
        cnpj: "28.441.388/0001-85",
        zipcode: "03303-000",
        address: "R PDE ADELINO",
        number: "2074",
        district: "QUARTA PARADA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "GROUTH ENGENHARIA LTDA",
        cnpj: "40.903.866/0001-27",
        zipcode: "51111-030",
        address: "R JOSE ADERVAL CHAVES",
        number: "78",
        district: "BOA VIAGEM",
        city: "Recife",
        state: "PE"
    },
    {
        name: "STRIT SOLUÇOES TECNOLOGICAS RITCHELLY LTDA",
        cnpj: "12.370.304/0001-20",
        zipcode: "04833-001",
        address: "AV SENADOR TEOTONIO VILELA 4777",
        number: "",
        district: "INTERLAGOS",
        city: "",
        state: ""
    },
    {
        name: "GRP SERVICOS TERCEIRIZADOS LTDA.",
        cnpj: "08.268.456/0001-49",
        zipcode: "05711-001",
        address: "R DOUTOR LUIZ MIGLIANO",
        number: "1986",
        district: "JARDIM CABORE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "B V DE LIMA EPP",
        cnpj: "17.921.051/0001-59",
        zipcode: "01304-001",
        address: "R AUGUSTA 1508",
        number: "",
        district: "CONSOLAÇAO",
        city: "SP",
        state: "SP"
    },
    {
        name: "IMOBILIARIA GRUPO CHIARATI LTDA ME",
        cnpj: "05.907.745/0001-52",
        zipcode: "02950-000",
        address: "R MIGUEL DE CASTRO, 109",
        number: "",
        district: "PIRITUBA",
        city: "",
        state: ""
    },
    {
        name: "TREZE SEGURANÇA ELETRONICA LTDA",
        cnpj: "03.619.975/0001-90",
        zipcode: "06803-047",
        address: "R JULIO KUPERMAN 234",
        number: "",
        district: "CENTRO",
        city: "Embu das Artes",
        state: "SP"
    },
    {
        name: "PILAR EMPREENDIMENTOS E SERVIÇOS DE LIMPEZA LTDA",
        cnpj: "05.469.140/0001-27",
        zipcode: "06803-047",
        address: "R JULIO KUPERMAN 234",
        number: "",
        district: "CENTRO",
        city: "Embu das Artes",
        state: "SP"
    },
    {
        name: "EPS EMPRESA PAULSITA DE SERVIÇOS S/A",
        cnpj: "61.244.034/0001-16",
        zipcode: "06803-047",
        address: "R JULIO KUPERMAN 234",
        number: "",
        district: "CENTRO",
        city: "Embu das Artes",
        state: "SP"
    },
    {
        name: "GTP TREZE LISTAS SEGURANCA E VIGILANCIA LTDA",
        cnpj: "62.874.094/0001-85",
        zipcode: "06803-000",
        address: "AV ELIAS YASBEK 788",
        number: "",
        district: "GRAMADO",
        city: "Embu das Artes",
        state: "SP"
    },
    {
        name: "TREZE SEGURANÇA ELETRONICA LTDA - EPP",
        cnpj: "03.619.975/0001-90",
        zipcode: "06803-047",
        address: "Rua Julio Kuperman, 234 SALA A",
        number: "",
        district: "CENTRO",
        city: "Embu das Artes",
        state: "SP"
    },
    {
        name: "PAULISTA FLY SERVIÇOS AUXILIARES EM AEROPORTOS LTDA",
        cnpj: "60.227.204/0001-91",
        zipcode: "06803-000",
        address: "AV ELIAS YASBEK 772",
        number: "",
        district: "GRAMADO",
        city: "Embu das Artes",
        state: "SP"
    },
    {
        name: "EDIFICIO PALAZZO FARNESE",
        cnpj: "55.614.606/0001-09",
        zipcode: "04512-051",
        address: "R ESCOBAR ORTIZ 444",
        number: "",
        district: "VL NOVA OCNCEIÇAO",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO MURANO",
        cnpj: "11.236.789/0001-09",
        zipcode: "04006-052",
        address: "R AFONSO DE FREITAS",
        number: "669",
        district: "PARAISO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "HYO ZA MOON CHOO",
        cnpj: "11.926.982/0001-63",
        zipcode: "03033-020",
        address: "AV CRUZEIRO DO SUL 1100 LOJA 2222",
        number: "",
        district: "CANINDE",
        city: "SP",
        state: "SP"
    },
    {
        name: "ORNATUS ACESSORIOS FEMININOS EIRELI",
        cnpj: "64.645.641/0001-86",
        zipcode: "04029-903",
        address: "AV IBIRAPUERA 3103 LJ 123",
        number: "",
        district: "INDIANOPOLIS",
        city: "SP",
        state: "SP"
    },
    {
        name: "PAULITALIA BARAO DE MAUA COM DE VEICULOS LTDA MAUA",
        cnpj: "05.585.991/0001-35",
        zipcode: "09370-800",
        address: "AV PAPA JOAO XXIII 555",
        number: "",
        district: "VL NOEMI",
        city: "Mauá",
        state: "SP"
    },
    {
        name: "PAULITALIA BARAO DE MAUA COM DE VEICULOS LTDA",
        cnpj: "05.585.991/0005-69",
        zipcode: "03295-000",
        address: "AV PROF LUIZ IGNACIO DE ANHAIA MELLO 5657",
        number: "",
        district: "VL GRACIOSA",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO CHAMPS ELYSEES BUSINESS RESIDENCE",
        cnpj: "66.658.659/0001-48",
        zipcode: "01206-001",
        address: "AV RIO BRANCO 1658",
        number: "",
        district: "CAMPOS ELISEOS",
        city: "SP",
        state: "SP"
    },
    {
        name: "PARTNERS SERVICE COMERCIO E SERVIÇOS EIRELI",
        cnpj: "15.054.758/0001-80",
        zipcode: "06785-300",
        address: "AV IBIRAMA 205",
        number: "",
        district: "PQ INDL DACI",
        city: "Taboão da Serra",
        state: "SP"
    },
    {
        name: "SOUZA LIMA SEGURANÇA PATRIMONIAL LTDA",
        cnpj: "64.911.290/0001-08",
        zipcode: "03502-030",
        address: "R PROF MIGUEL RUSSIANO 67",
        number: "",
        district: "VL ARICANDUVA",
        city: "SP",
        state: "SP"
    },
    {
        name: "J DE TOFFOLI K ZELLAR 0001 SERV DE CONSERVAÇAO ME",
        cnpj: "09.362.174/0001-79",
        zipcode: "00000-000",
        address: "R ABILIO SOARES 452",
        number: "",
        district: "PARAISO",
        city: "SP",
        state: "SP"
    },
    {
        name: "GRW MOLDES E PECAS LTDA - ME",
        cnpj: "08.189.727/0001-70",
        zipcode: "09220-340",
        address: "Rua Bárbara Heliodora",
        number: "264",
        district: "Utinga",
        city: "Santo André",
        state: "SP"
    },
    {
        name: "E.M.S NOVA QUIMICA - BARUERI - GTP TREZE LISTAS SEGURANÇA E VIGILANCIA LTDA",
        cnpj: "62.874.094/0001-85",
        zipcode: "06460-120",
        address: "AV CECI 820",
        number: "",
        district: "TAMBORE",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "E.M.S HORTOLANDIA - GTP TREZE LISTAS SEGURANÇA E VIGILANCIA LTDA",
        cnpj: "62.874.094/0001-85",
        zipcode: "13186-901",
        address: "RODOVIA JORNALISTA FRANCISCO AGUIRRE PROENÇA KM 08 S/N",
        number: "",
        district: "CHACARA ASSAY",
        city: "Hortolândia",
        state: "SP"
    },
    {
        name: "E.M.S. GERMED JAGUARIUNA - GTP TREZE LISTAS SEGURANÇA E VIGILANCIA LTDA",
        cnpj: "62.874.094/0001-85",
        zipcode: "13820-000",
        address: "ESTRADA MUNICIPAL JAGUARIUNA 254",
        number: "",
        district: "TANQUINHO VELHO",
        city: "Jaguariúna",
        state: "SP"
    },
    {
        name: "E.M.S. SBCAMPO - GTP TREZE LISTAS SEGURANÇA E VIGILANCIA LTDA",
        cnpj: "62.874.094/0001-85",
        zipcode: "09720-470",
        address: "R COMENDADOR CARLO MAIO GORDANO 450",
        number: "",
        district: "VL STA RITA DE CASSIA",
        city: "SBCAMPO",
        state: "SP"
    },
    {
        name: "GTP TREZE LISTAS SEGURANÇA E VIGILANCIA LTDA AMERICO BRASILIENSE",
        cnpj: "62.874.094/0001-85",
        zipcode: "14820-000",
        address: "ALAMEDA ALDO LUPO 1200",
        number: "",
        district: "JD BELA VISTA",
        city: "Américo Brasiliense",
        state: "SP"
    },
    {
        name: "GUAIRA MATERIAIS PARA CONSTRUÇAO LTDA",
        cnpj: "04.934.836/0001-14",
        zipcode: "03806-000",
        address: "AV PARANAGUA 406",
        number: "",
        district: "ERM MATARAZZO",
        city: "SP",
        state: "SP"
    },
    {
        name: "MUNICIPIO DE GUARANI DAS MISSOES",
        cnpj: "87.613.030/0001-51",
        zipcode: "97950-000",
        address: "R BOA VISTA",
        number: "SN",
        district: "CENTRO",
        city: "Guarani das Missões",
        state: "RS"
    },
    {
        name: "GUARUFLAN FLANGES EM GERAL LTDA",
        cnpj: "04.415.342/0001-23",
        zipcode: "07241-410",
        address: "R UTINGA 403",
        number: "",
        district: "JD OLIVEIRA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "GUARUMIG COMERCIO E SERVICOS DE MAQUINAS DE SOLDA - EIRELI",
        cnpj: "06.156.428/0001-04",
        zipcode: "07021-040",
        address: "AVENIDA TOMAZ EDSON",
        number: "287",
        district: "VILA PEDRO MOREIRA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "GUILHERME DA SILVA GUTIERRES",
        cnpj: "24.314.689/0001-97",
        zipcode: "03757-020",
        address: "AV SANTO ANTONIO DO RIACHO",
        number: "245",
        district: "JARDIM PENHA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "GUMAPLASTIC ARTEFATOS DE BORRACHA E PLASTICOS LTDA",
        cnpj: "43.578.079/0001-45",
        zipcode: "05128-000",
        address: "RUA WILLIS ROBERTO BANKS",
        number: "419",
        district: "PRQ MARIA DOMITILA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "H MOTORS, COMERCIAL, IMPORTADORA DE PECAS E SERVICOS EM VEICULOS LTDA EM RECUPERACAO JUDICIAL",
        cnpj: "09.566.698/0001-81",
        zipcode: "06709-015",
        address: "ROD RAPOSO TAVARES",
        number: "S/N",
        district: "CARAPICUIBA",
        city: "Cotia",
        state: "SP"
    },
    {
        name: "H. SURGICAL EIRELI",
        cnpj: "18.195.431/0001-16",
        zipcode: "08420-610",
        address: "R MADRE MARIE BERNARDINE",
        number: "76",
        district: "JARDIM SAO PEDRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "H. GESSO ARTES LTDA EPP",
        cnpj: "01.897.216/0001-64",
        zipcode: "05879-430",
        address: "R FIDENZA 65",
        number: "",
        district: "CHACARA STA MARIA",
        city: "",
        state: ""
    },
    {
        name: "GREMIO RECREATIVO, SOCIAL E CULTURAL HOLD´EM",
        cnpj: "08.074.626/0001-54",
        zipcode: "05413-010",
        address: "R HENRIQUE SHAUMMAN 170",
        number: "",
        district: "PINHEIROS",
        city: "",
        state: ""
    },
    {
        name: "H2G COMERCIO DE EQUIPAMENTOS DE INFORMATICA LTDA.",
        cnpj: "07.423.922/0001-50",
        zipcode: "03009-030",
        address: "R ELIZA WHITAKER",
        number: "314",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "HAYASHI SUSHI RESTAURANTE JAPONES LTDA",
        cnpj: "09.656.491/0001-06",
        zipcode: "05119-000",
        address: "AV DO ANASTACIO 613",
        number: "",
        district: "PQ SÃO DOMINGOS",
        city: "SP",
        state: "SP"
    },
    {
        name: "HAMMER LIMITADA",
        cnpj: "49.036.429/0001-28",
        zipcode: "07094-000",
        address: "AV TIMOTEO PENTEADO",
        number: "1593",
        district: "PICANCO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "HARLO DO BRASIL INDUSTRIA E COMERCIO LTDA",
        cnpj: "61.533.626/0001-58",
        zipcode: "07224-060",
        address: "RUA JOAO CASIMIRO COSTA",
        number: "51",
        district: "CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "HD SHOPPING LTDA",
        cnpj: "10.257.225/0001-81",
        zipcode: "03009-020",
        address: "R HENRIQUE DIAS 83",
        number: "",
        district: "BRAS",
        city: "SP",
        state: "SP"
    },
    {
        name: "HDL DA AMAZONIA INDUSTRIA ELETRONICA LTDA",
        cnpj: "04.034.304/0006-35",
        zipcode: "13301-245",
        address: "AV ANTONIO GAZZOLA",
        number: "1001",
        district: "JARDIM CORAZZA",
        city: "Itu",
        state: "SP"
    },
    {
        name: "HELIBASE SERV COM E MANUTENÇAO AERONAUTICA LTDA",
        cnpj: "07.418.547/0001-50",
        zipcode: "00000-000",
        address: "R DR MAURO LINDEMBERG MONTEIRO 979",
        number: "",
        district: "SANTA FE",
        city: "Osasco",
        state: "SP"
    },
    {
        name: "HENRY EQUIP. ELETRONICOS E SISTEMAS LTDA",
        cnpj: "01.245.055/0001-24",
        zipcode: "83322-010",
        address: "RUA RIO PIQUIRI",
        number: "400",
        district: "JD WEISSOPOLIS",
        city: "Pinhais",
        state: "PR"
    },
    {
        name: "COLINAS FLORES - EIRELI - ME",
        cnpj: "03.507.827/0001-84",
        zipcode: "05264-030",
        address: "R RAFAEL ARMENISE",
        number: "61",
        district: "ANHANGUERA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "HERBI - ENGENHARIA LTDA.",
        cnpj: "59.238.030/0001-83",
        zipcode: "03651-060",
        address: "R TAPARI",
        number: "159",
        district: "VILA ESPERANCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "HF&F SERVICOS LTDA*",
        cnpj: "25.288.490/0001-02",
        zipcode: "06716-140",
        address: "R MANAUS",
        number: "30",
        district: "JARDIM DOS IPES",
        city: "Cotia",
        state: "SP"
    },
    {
        name: "HIDROMASTER SONDAGENS E POCOS ARTESIANOS LTDA*",
        cnpj: "67.949.206/0001-33",
        zipcode: "08042-570",
        address: "R CAUVI",
        number: "16",
        district: "SAO MIGUEL PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CASA DE CARNES HIPER BOI PERDIZES EIRELI - ME",
        cnpj: "09.020.676/0001-11",
        zipcode: "01254-000",
        address: "R PROFESSOR AFONSO BOVERO",
        number: "481",
        district: "PERDIZES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CASA DE CARNES HIPER BOI PERDIZES EIRELI - ME",
        cnpj: "09.020.676/0002-00",
        zipcode: "02017-011",
        address: "Rua Alfredo Pujol",
        number: "889",
        district: "Santana",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "HIROTA E FERREIRA MONTAGENS E DESMONTAGENS INDUSTRIAIS LTDA",
        cnpj: "67.386.110/0001-04",
        zipcode: "08030-110",
        address: "R PALANQUE 24",
        number: "",
        district: "VL CURUÇA",
        city: "SP",
        state: "SP"
    },
    {
        name: "HJK REVESTIMENTOS LTDA",
        cnpj: "20.836.739/0001-45",
        zipcode: "05886-610",
        address: "R AVIADORA ANESIA PINHEIRO MACHADO 172 APTO 210 BL A",
        number: "",
        district: "VALO VELHO",
        city: "SP",
        state: "SP"
    },
    {
        name: "AMANDA FERREIRA DIAS - ME",
        cnpj: "14.521.928/0001-26",
        zipcode: "01104-010",
        address: "R JOAO JACINTO",
        number: "96",
        district: "LUZ",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "HOSPITAL MILITAR DE AREA DE SAO PAULO",
        cnpj: "09.591.608/0001-02",
        zipcode: "01551-000",
        address: "R OUVIDOR PORTUGAL",
        number: "230",
        district: "VILA MONUMENTO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "HOLIDAY ACADEMIA DE GINASTICA LTDA ME",
        cnpj: "60.898.699/0001-80",
        zipcode: "04001-005",
        address: "R MANOEL DA NOBREGA 1502",
        number: "",
        district: "PQ IBIRAPUERA",
        city: "SP",
        state: "SP"
    },
    {
        name: "HOLLYTEC METAIS INDUSTRIA E COMERCIO DE MATERIAIS ELETRICOS LTDA",
        cnpj: "15.584.095/0001-05",
        zipcode: "07072-070",
        address: "R RIO GRANDE",
        number: "674",
        district: "VILA ROSALIA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "HORA SOL COM E ASSISTENCIA DE RELOGIOS LTDA",
        cnpj: "50.399.542/0001-57",
        zipcode: "14810-244",
        address: "AV JORGE HADDAD",
        number: "552",
        district: "VL XAVIER",
        city: "Araraquara",
        state: "SP"
    },
    {
        name: "HORTI FARTURA ALIMENTOS PROCESSADOS LTDA",
        cnpj: "09.592.020/0001-73",
        zipcode: "06845-190",
        address: "R PEDRO STELMASSUK 56",
        number: "",
        district: "JD OLIMPIA",
        city: "Embu das Artes",
        state: "SP"
    },
    {
        name: "HORTIFACIL LTDA*",
        cnpj: "26.203.839/0001-10",
        zipcode: "01405-003",
        address: "R PAMPLONA",
        number: "1375",
        district: "JARDIM PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "HORTIFRUTI KOTE LTDA",
        cnpj: "62.701.685/0001-50",
        zipcode: "04742-001",
        address: "R PADRE JOSE DE ANCHIETA 953",
        number: "",
        district: "SANTO AMARO",
        city: "SP",
        state: "SP"
    },
    {
        name: "ASSOCIACAO PORTUGUESA BENEFICENTE VASCO DA GAMA",
        cnpj: "62.650.957/0001-30",
        zipcode: "03062-000",
        address: "R HERVAL",
        number: "663",
        district: "BELENZINHO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "INSTITUICAO PAULISTA ADVENTISTA DE EDUC E ASS SOCIAL",
        cnpj: "43.586.122/0009-71",
        zipcode: "01525-010",
        address: "R ROCHA POMBO",
        number: "49",
        district: "LIBERDADE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "HOSPITAL E MATERNIDADE DR CHRISTOVAO DA GAMA S A",
        cnpj: "57.482.903/0001-73",
        zipcode: "09030-010",
        address: "AV DOUTOR ERASMO",
        number: "18",
        district: "VL ASSUNCAO",
        city: "Santo André",
        state: "SP"
    },
    {
        name: "SECRETARIA DE ESTADO DA SAUDE",
        cnpj: "46.374.500/0010-85",
        zipcode: "03173-010",
        address: "R SIQUEIRA BUENO",
        number: "1757",
        district: "BELENZINHO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FUNDACAO HOSPITAL SANTA LYDIA",
        cnpj: "13.370.183/0001-89",
        zipcode: "14085-070",
        address: "Rua Tamandaré",
        number: "434",
        district: "Campos Elíseos",
        city: "Ribeirão Preto",
        state: "SP"
    },
    {
        name: "HOSPITAL VETERINARIO DE SANTA INES LTDA",
        cnpj: "04.164.202/0001-20",
        zipcode: "02415-001",
        address: "AV SANTA INES",
        number: "1357",
        district: "JARDIM SANTA INES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "HR USINAGEM DE TUBOS EIRELI ME",
        cnpj: "26.385.093/0001-03",
        zipcode: "07250-120",
        address: "R REDENÇAO",
        number: "47",
        district: "CID ARACILIA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "HUDSON SANTOS LIMA - ME",
        cnpj: "12.418.401/0001-45",
        zipcode: "00000-000",
        address: "RUA BATISTA DA MATA 46",
        number: "",
        district: "SANTANA",
        city: "SP",
        state: "SP"
    },
    {
        name: "HUKY COM E SERVIÇOS GRAFISCOS GERAIS E DE BRINDES IMP EXP LTDA",
        cnpj: "71.908.966/0001-70",
        zipcode: "05158-000",
        address: "R MIGUEL P LANDIM 50",
        number: "",
        district: "JD JARAGUA",
        city: "SP",
        state: "SP"
    },
    {
        name: "NEW MALL EMPREENDIMENTOS LTDA",
        cnpj: "13.593.021/0001-00",
        zipcode: "03009-000",
        address: "R JOAO TEODORO 1200 MEZANINO G1",
        number: "",
        district: "BRAS",
        city: "SP",
        state: "SP"
    },
    {
        name: "HYDROMASTER COMERCIO DE BOMBAS LTDA",
        cnpj: "23.568.533/0001-70",
        zipcode: "03551-000",
        address: "AV CACHOEIRA PAULISTA",
        number: "273",
        district: "CIDADE PATRIARCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "HYDROSAN TECNOLOGIA E SANEAMENTO LTDA",
        cnpj: "06.159.870/0001-94",
        zipcode: "00000-000",
        address: "AV MANOEL AUGUSTO DE ALVARENGA 257",
        number: "",
        district: "VL MARARI",
        city: "SP",
        state: "SP"
    },
    {
        name: "HYPNOBOX CONSULTORIA E LICENCIAMENTO DE SISTEMAS ONLINE LTDA",
        cnpj: "05.459.432/0001-89",
        zipcode: "05407-003",
        address: "RUA CARDEAL ARCOVERDE",
        number: "2365",
        district: "PINHEIROS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "INSTITUTO BRASILEIRO DE QUALIFICACAO E CERTIFICACAO",
        cnpj: "68.309.988/0001-09",
        zipcode: "04506-001",
        address: "AV SANTO AMARO",
        number: "1386",
        district: "ITAIM BIBI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "INSTITUTO BRASILEIRO DE QUALIFICACAO E CERTIFICACAO",
        cnpj: "68.309.988/0001-09",
        zipcode: "04506-001",
        address: "AV SANTO AMARO",
        number: "1386",
        district: "ITAIM BIBI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "IBMT INDUSTRIA BELAN DE MANGUEIRAS TECNICAS LTDA*",
        cnpj: "18.923.982/0001-59",
        zipcode: "07172-440",
        address: "Avenida João Bassi",
        number: "264",
        district: "Jardim Presidente Dutra",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "INSTITUTO BRASILEIRO DE PROFISSIONAIS DE ESTETICA",
        cnpj: "02.918.487/0001-11",
        zipcode: "03320-000",
        address: "R EMILIO MALLET",
        number: "376",
        district: "VILA GOMES CARDIM",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "IBTF IND BRASILEIRA DE TUBOS FLEXIVEIS LTDA encerrada",
        cnpj: "48.221.139/0003-53",
        zipcode: "07172-470",
        address: "R QUATRO",
        number: "264",
        district: "JD PRES DUTRA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "IBTF INDUSTRIA BRASILEIRA DE TUBOS FLEXIVEIS LTDA*",
        cnpj: "48.221.139/0001-91",
        zipcode: "07172-140",
        address: "R JEREMOABO",
        number: "391",
        district: "JARDIM PRESIDENTE DUTRA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "INSTITUTO EDUCACIONAL SEMINARIO PAULOPOLITANO",
        cnpj: "63.031.934/0001-00",
        zipcode: "04119-060",
        address: "R AFONSO CELSO",
        number: "671",
        district: "VILA MARIANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "IGPECOBRAPH IND METALURGICA LTDA",
        cnpj: "60.397.445/0001-89",
        zipcode: "09941-670",
        address: "R VICENTE CECCARELLI 133",
        number: "",
        district: "CENTRO",
        city: "Diadema",
        state: "SP"
    },
    {
        name: "IGUATEMI COBERTURAS LTDA",
        cnpj: "07.757.932/0001-22",
        zipcode: "03565-030",
        address: "R PEDRO MENDES 105A",
        number: "",
        district: "ARTUR ALVIM",
        city: "",
        state: ""
    },
    {
        name: "INTERACTIVE LOGISTICS TRANSPORTE INTERNACIONAL DE CARGAS LTDA",
        cnpj: "09.244.842/0001-63",
        zipcode: "03062-000",
        address: "R HERVAL 591",
        number: "",
        district: "BELENZINHO",
        city: "",
        state: ""
    },
    {
        name: "CONDOMINIO EDIFICIO ILHA DE CORSEGA",
        cnpj: "01.112.862/0001-79",
        zipcode: "03639-000",
        address: "R FRANCISCO COIMBRA",
        number: "72",
        district: "JARDIM CONCORDIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "W F DE BRITO JUNIOR REABILITACAO DE CREDITO*",
        cnpj: "21.724.478/0001-34",
        zipcode: "08070-002",
        address: "Avenida São Miguel",
        number: "6485",
        district: "Vila Norma",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "GRANDE IMPACTO INFORMATICA LTDA",
        cnpj: "08.824.651/0001-08",
        zipcode: "02042-001",
        address: "AV LEONCIO DE MAGALHAES",
        number: "1004",
        district: "JARDIM SAO PAULO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ROGERIO RODRIGUES BATISTA SERRALHERIA - EPP",
        cnpj: "10.978.966/0001-51",
        zipcode: "08579-040",
        address: "R EPITACIO PESSOA",
        number: "399",
        district: "JD ITAPUA",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "LACERDA RODRIGUES COMERCIO E SERVICOS LTDA",
        cnpj: "19.268.632/0001-69",
        zipcode: "76804-128",
        address: "R PAULO LEAL",
        number: "958",
        district: "NOSSA SENHORA DAS GRACAS",
        city: "Porto Velho",
        state: "RO"
    },
    {
        name: "IMPERIO DO TRIGO PAES E DOCES LTDA - ME",
        cnpj: "09.063.287/0001-73",
        zipcode: "08230-011",
        address: "RUA FRANCISCO ALARICO BERGAMO, 1.382",
        number: "",
        district: "SÃO MIGUEL PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "IMPRIMAX IND DE AUTO ADESIVOS LTDA",
        cnpj: "54.816.392/0001-90",
        zipcode: "04257-110",
        address: "R KARAN SIMAO RACY 49",
        number: "",
        district: "PQ FONGARO",
        city: "SP",
        state: "SP"
    },
    {
        name: "INDUSTRIAS THIELE IND E COM DE MAQUINAS POLIDORAS LTDA",
        cnpj: "03.075.916/0001-07",
        zipcode: "09571-470",
        address: "R LOURDES 275",
        number: "",
        district: "NOVA GERTY",
        city: "SCASUL",
        state: "SP"
    },
    {
        name: "INSTITUTO NORDESTE CIDADANIA",
        cnpj: "01.437.408/0001-98",
        zipcode: "60714-502",
        address: "AV DOUTOR SILAS MUNGUBA",
        number: "3500",
        district: "ITAPERI",
        city: "Fortaleza",
        state: "CE"
    },
    {
        name: "INFINITY UNIFORMES EIRELI",
        cnpj: "31.616.914/0001-05",
        zipcode: "03502-050",
        address: "RUA JULIO COLACO",
        number: "371",
        district: "CHACARA CALIFORNIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "EMPRESA BRASILEIRA DE INFRAESTRUTURA AEROPORTUARIA - INFRAERO",
        cnpj: "00.352.294/0001-10",
        zipcode: "71608-050",
        address: "AER SETOR DE CONCESSIONARIAS E LOCADORAS",
        number: "LOTE 5",
        district: "SETOR DE HABITACOES INDIVIDUAIS SUL",
        city: "Brasília",
        state: "DF"
    },
    {
        name: "INSTITUTO ALANA",
        cnpj: "05.263.071/0001-09",
        zipcode: "05416-000",
        address: "R FRADIQUE COUTINHO",
        number: "50",
        district: "PINHEIROS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "INSTITUTO AMIGOS DA BEATA CATARINA E JUDITE CITTADINI",
        cnpj: "08.046.525/0001-70",
        zipcode: "09171-670",
        address: "R CAMINHO DOS VIANAS 1790B",
        number: "",
        district: "VL JOAO RAMALHO",
        city: "Santo André",
        state: "SP"
    },
    {
        name: "C & P ESCOLA DE IDIOMAS LTDA - ME",
        cnpj: "09.356.902/0001-30",
        zipcode: "07700-610",
        address: "AV LOURIDES DELL PORTO (JD STO ANTONIO)",
        number: "12",
        district: "REGIAO CENTRAL",
        city: "Caieiras",
        state: "SP"
    },
    {
        name: "FUNDACAO FACULDADE DE MEDICINA",
        cnpj: "56.577.059/0001-00",
        zipcode: "05401-000",
        address: "AV REBOUCAS",
        number: "381",
        district: "JARDIM PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "UNIVERSIDADE DE SAO PAULO",
        cnpj: "63.025.530/0004-57",
        zipcode: "05508-090",
        address: "R DO MATAO",
        number: "321",
        district: "BUTANTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "INSTITUTO FEDERAL DE EDUCACAO, CIENCIA E TECNOLOGIA DO PARANA",
        cnpj: "10.652.179/0001-15",
        zipcode: "82530-230",
        address: "AV VICTOR FERREIRA DO AMARAL",
        number: "306",
        district: "TARUMA",
        city: "Curitiba",
        state: "PR"
    },
    {
        name: "INSTITUTO FEDERAL DE EDUCACAO, CIENCIA E TECNOLOGIA DE MINAS GERAIS",
        cnpj: "10.626.896/0008-49",
        zipcode: "32677-564",
        address: "R ITAMARATI",
        number: "140",
        district: "SAO CAETANO",
        city: "Betim",
        state: "MG"
    },
    {
        name: "INSTITUTO SUEL ABUJAMRA",
        cnpj: "05.095.474/0001-88",
        zipcode: "01525-001",
        address: "R TAMANDARE",
        number: "693",
        district: "LIBERDADE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "INTEGRATELE SERVICOS INTEGRADOS DE TELECOMUNICACOES LTDA",
        cnpj: "22.924.839/0001-59",
        zipcode: "03318-000",
        address: "RUA SERRA DE BRAGANCA",
        number: "1492",
        district: "VILA GOMES CARDIM",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "INTERACAO CONSULTORIA E ASSESSORIA EMPRESARIAL LTDA",
        cnpj: "01.565.879/0001-81",
        zipcode: "18206-420",
        address: "BERNADINO DE CAMPOS",
        number: "652",
        district: "CENTRO",
        city: "Itapetininga",
        state: "SP"
    },
    {
        name: "INTERATIVA-DEDETIZACAO, HIGIENIZACAO E CONSERVACAO LTDA",
        cnpj: "05.058.935/0002-23",
        zipcode: "03071-050",
        address: "R ICARAI",
        number: "82",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "INTERMAX LIMPEZA E JARDINAGEM EIRELLI - EPP",
        cnpj: "29.154.039/0001-45",
        zipcode: "03074-000",
        address: "AV COND ELISABETH DE RUBIANO 500 MARGINAL TIETE",
        number: "",
        district: "BRAS",
        city: "",
        state: ""
    },
    {
        name: "EMPRESA BRASILEIRA DE LOGISTICA EM MOBILIDADE E GESTAO LTDA*.",
        cnpj: "11.113.342/0001-34",
        zipcode: "04070-030",
        address: "AL DOS UBIATANS",
        number: "399",
        district: "PLANALTO PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "EMPRESA BRASILEIRA DE LOGISTICA EM MOBILIDADE E GESTAO LTDA. - FILIAL",
        cnpj: "11.113.342/0005-68",
        zipcode: "07430-350",
        address: "AV TOWER AUTOMOTIVE (L AZEDA) 300 GLEBA A GP 12,13,14 CID DU",
        number: "",
        district: "PEROVA",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "INDUSTRIA TEXTIL INTEX LTDA",
        cnpj: "60.894.516/0001-59",
        zipcode: "07428-275",
        address: "R ARUTEC 220",
        number: "",
        district: "PEROVA",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "INTS -INSTITUTO NACIONAL DE AMPARO A PESQUISA, TECNOLOGIA E INOVACAO NA GESTAO PUBLICA",
        cnpj: "11.344.038/0002-89",
        zipcode: "08675-190",
        address: "R PARANA",
        number: "217",
        district: "JARDIM PAULISTA",
        city: "Suzano",
        state: "SP"
    },
    {
        name: "JVS COM DE ACESSORIOS, CAMISETAS E SAIAS DE ROCK LTDA",
        cnpj: "08.179.697/0001-11",
        zipcode: "00000-000",
        address: "AV SÃO JOAO 439 LOJA 266",
        number: "",
        district: "CENTRO",
        city: "SP",
        state: "SP"
    },
    {
        name: "INVESTPREV SEGURADORA S/A",
        cnpj: "42.366.302/0001-28",
        zipcode: "00000-000",
        address: "AV BANDEIRA PAULISTA 275 9 ANDAR",
        number: "",
        district: "ITAIM BIBI",
        city: "SP",
        state: "SP"
    },
    {
        name: "IRIS MIRANDA DE MEDEIROS - PAISAGISMO",
        cnpj: "15.160.423/0001-46",
        zipcode: "03308-070",
        address: "PC SANTA TEREZINHA",
        number: "25",
        district: "VILA AZEVEDO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "POTENZA ADMINISTRADORA DE BENS PROPRIOS LTDA",
        cnpj: "73.106.122/0001-30",
        zipcode: "01251-000",
        address: "R CARDOSO DE ALMEIDA",
        number: "67",
        district: "PERDIZES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ISOTEC ENGENHARIA LTDA",
        cnpj: "96.494.042/0001-03",
        zipcode: "07500-000",
        address: "RODOVIA ALBINO RODRIGUES NEVES - VEREADOR",
        number: "KM 53,5",
        district: "CAFUNDO GLEBA",
        city: "Santa Isabel",
        state: "SP"
    },
    {
        name: "IT BROKER SERVICOS OPERACIONAIS LTDA",
        cnpj: "18.901.359/0001-03",
        zipcode: "04711-030",
        address: "R ENXOVIA",
        number: "472",
        district: "VILA SAO FRANCISCO (ZONA SUL)",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ITABOM COMERCIO DE FERRAGENS LTDA - ME",
        cnpj: "11.444.698/0001-50",
        zipcode: "08230-023",
        address: "AV PIRES DO RIO 4742",
        number: "",
        district: "ITAQUERA",
        city: "SP",
        state: "SP"
    },
    {
        name: "ITAGUA AGUAS MINERAIS IND E COM LTDA",
        cnpj: "45.500.824/0001-69",
        zipcode: "08574-020",
        address: "AV ITALO ADAMI 1551",
        number: "",
        district: "MORRO BRANCO",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "GOIASMINAS INDUSTRIA DE LATICINIOS LTDA",
        cnpj: "01.257.995/0003-03",
        zipcode: "04544-051",
        address: "R MINISTRO JESUINO CARDOSO",
        number: "454",
        district: "VILA NOVA CONCEICAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "INSTITUICAO EDUCACIONAL PROFESSOR PASQUALE CASCINO",
        cnpj: "43.371.723/0001-00",
        zipcode: "04724-003",
        address: "AV JOAO DIAS",
        number: "2046",
        district: "SANTO AMARO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ITEQ LESTE LTDA",
        cnpj: "24.180.451/0001-16",
        zipcode: "08295-400",
        address: "R SAO GONCALO DO PIAUI",
        number: "65",
        district: "ITAQUERA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ITIBAN PAES E DOCES LTDA*",
        cnpj: "07.438.611/0001-65",
        zipcode: "03806-010",
        address: "AV PARANAGUA",
        number: "721",
        district: "VILA PARANAGUA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ITORORO VEICULOS E PEÇAS LTDA - FILIAL",
        cnpj: "61.488.904/0020-65",
        zipcode: "02012-110",
        address: "R AVIAÇAO 50",
        number: "",
        district: "SANTANA",
        city: "SP",
        state: "SP"
    },
    {
        name: "ITORORO VEICULOS E PEÇAS LTDA - MATRIZ",
        cnpj: "61.488.904/0001-00",
        zipcode: "04266-060",
        address: "R MOREIRA DE GODOI 215",
        number: "",
        district: "IPIRANGA",
        city: "SP",
        state: "SP"
    },
    {
        name: "MUNICIPIO DE ITUIUTABA",
        cnpj: "18.457.218/0001-35",
        zipcode: "38301-115",
        address: "PC CONEGO ANGELO",
        number: "S/N",
        district: "CENTRO",
        city: "Ituiutaba",
        state: "MG"
    },
    {
        name: "IURY GUARU TRANSPORTES LTDA",
        cnpj: "04.156.577/0001-48",
        zipcode: "07174-000",
        address: "AV PAPA JOAO PAULO I",
        number: "6211",
        district: "BONSUCESSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "IVANILDO GOMES",
        cnpj: "02.278.971/0001-23",
        zipcode: "08371-380",
        address: "R CLOTILDE GIANOLI 20",
        number: "",
        district: "JD MARILU",
        city: "SP",
        state: "SP"
    },
    {
        name: "IZILDA MOREIRA DO CARMO SILVA ME",
        cnpj: "00.011.852/0001-84",
        zipcode: "05879-390",
        address: "R FEITIÇO DA VILA 20",
        number: "",
        district: "VALO VELHO",
        city: "SP",
        state: "SP"
    },
    {
        name: "J & F RECUPERADORA DE VEICULOS LTDA",
        cnpj: "19.299.332/0001-47",
        zipcode: "08060-380",
        address: "R AMERICO SUGAI",
        number: "417",
        district: "VILA JACUI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "J C PLASTIC COM DE PLASTICOS LTDA",
        cnpj: "04.050.906/0001-71",
        zipcode: "07175-100",
        address: "R JUAN ALONSO SANCHEZ 920",
        number: "",
        district: "JD CAMPESTRE",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "J FLEX INDUSTRIA E COMERCIO LTDA",
        cnpj: "71.636.179/0001-16",
        zipcode: "08473-370",
        address: "EST VOVO CAROLINA",
        number: "2000",
        district: "CHACARA VOVO LUIZA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "J S S RIO LOGISTICAS E TRANSPORTES LTDA",
        cnpj: "12.286.827/0001-92",
        zipcode: "26540-211",
        address: "R DULCE 1635",
        number: "",
        district: "CENTRO",
        city: "Nilópolis",
        state: "RJ"
    },
    {
        name: "JA CASSIANO FREITAS ME",
        cnpj: "74.405.291/0001-34",
        zipcode: "01004-000",
        address: "R BARAO DE PARANAPIACABA 25 1 andar",
        number: "",
        district: "SE",
        city: "SP",
        state: "SP"
    },
    {
        name: "JABORGRAF ARTEFATOS DE COURO LTDA ME",
        cnpj: "66.626.318/0001-90",
        zipcode: "02614-000",
        address: "R PEDRO OSORIO FILHO 636",
        number: "",
        district: "VL NV CACHOEIRINHA",
        city: "SP",
        state: "SP"
    },
    {
        name: "JAC PRESTADORA DE SERVIÇOS LTDA EPP",
        cnpj: "44.338.549/0001-66",
        zipcode: "07400-000",
        address: "AV PL DO BRASIL S/N ALT DO N 8000",
        number: "",
        district: "JAGUARI",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "AMERICA BRASIL INDUSTRIA E COMERCIO EIRELI*",
        cnpj: "03.740.528/0001-95",
        zipcode: "02278-050",
        address: "R ADALGISA",
        number: "159",
        district: "VILA NILO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "JACUZZI DO BRASIL INDUSTRIA E COMERCIO LTDA",
        cnpj: "59.105.007/0001-10",
        zipcode: "13308-900",
        address: "ROD WALDOMIRO CORREA DE CAMARGO",
        number: "SN",
        district: "MELISSA",
        city: "Itu",
        state: "SP"
    },
    {
        name: "J.A.D EMPREITEIRA DE OBRAS LTDA",
        cnpj: "11.637.052/0001-90",
        zipcode: "00000-000",
        address: "AV INTERLAGOS 2938",
        number: "",
        district: "INTERLAGOS",
        city: "SP",
        state: "SP"
    },
    {
        name: "JAGUARE MARMORES COMERCIAL, IMPORTACAO E EXPORTACAO LTDA.",
        cnpj: "07.256.676/0001-90",
        zipcode: "05321-010",
        address: "AV ENGENHEIRO BILLINGS",
        number: "37",
        district: "JAGUARE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "JAMAR IND E COM LTDA",
        cnpj: "01.981.097/0001-23",
        zipcode: "08597-550",
        address: "R PAPOULA 485",
        number: "",
        district: "QUINTA DA BOA VISTA",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "JAV INTERMEDIAÇAO DE NEGOCIOS LTDA",
        cnpj: "07.453.097/0001-37",
        zipcode: "01048-000",
        address: "R CEL XAVIER DE TOLEDO",
        number: "316",
        district: "REPUBLICA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BISS SERVICOS E NEGOCIOS LTDA - ME",
        cnpj: "04.315.614/0001-13",
        zipcode: "01048-100",
        address: "R CORONEL XAVIER DE TOLEDO",
        number: "105",
        district: "REPUBLICA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "JDC COMERCIO DE PECAS E ACESSORIOS PARA INFORMATICA EIRELI",
        cnpj: "08.231.758/0001-42",
        zipcode: "02991-230",
        address: "RUA AGUAS DA ESPERANCA",
        number: "71",
        district: "JARDIM ALVINA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PATRICIA PEREIRA MARTINS AUTO PEÇAS - ME",
        cnpj: "13.019.447/0001-54",
        zipcode: "02940-005",
        address: "AV RAIMUNDO PEREIRA DE MAGALHAES 6295 A",
        number: "",
        district: "PIRITUBA",
        city: "SP",
        state: "SP"
    },
    {
        name: "JETEL SERVICOS EM TECNOLOGIA DIGITAL E TELECOMUNICACOES LTDA.",
        cnpj: "15.436.651/0001-04",
        zipcode: "11730-000",
        address: "R BERLIM",
        number: "100",
        district: "JARDIM ITAPOAM",
        city: "Mongaguá",
        state: "SP"
    },
    {
        name: "J F EMPREENDIMENTOS IMOBILIARIOS LTDA",
        cnpj: "53.376.893/0001-30",
        zipcode: "00000-000",
        address: "AV 9 DE JULHO 5966 11 ANDAR CJ 112",
        number: "",
        district: "JD PAULISTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "JF2 COMERCIO DE PRODUTOS AUTOMOTIVOS LTDA",
        cnpj: "07.781.505/0001-80",
        zipcode: "09380-150",
        address: "R JURACI FERNANDES 164",
        number: "",
        district: "CAPUAVA",
        city: "Mauá",
        state: "SP"
    },
    {
        name: "JG INDUSTRIA METALURGICA LTDA",
        cnpj: "96.350.681/0001-97",
        zipcode: "03109-000",
        address: "AV HENRY FORD 858",
        number: "",
        district: "MOOCA",
        city: "SP",
        state: "SP"
    },
    {
        name: "JIGS IBIRAPUERA RESTAURANTE EIRELI",
        cnpj: "16.937.129/0001-60",
        zipcode: "04029-200",
        address: "AV IBIRAPUERA 3103 LJ 58/59",
        number: "",
        district: "INDIANOPOLIS",
        city: "",
        state: ""
    },
    {
        name: "J.I.G.S. PAULISTA RESTAURANTE EIRELI",
        cnpj: "16.916.896/0001-93",
        zipcode: "01327-001",
        address: "RUA TREZE DE MAIO",
        number: "1947",
        district: "BELA VISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "JIGS BRAUGARTEN MORUMBI ALIMENTOS LTDA",
        cnpj: "49.049.356/0001-09",
        zipcode: "04707-000",
        address: "AV ROQUE PETRONI JUNIOR 1089 LOJA 78",
        number: "",
        district: "SANTO AMARO",
        city: "",
        state: ""
    },
    {
        name: "JOAO FERREIRA DE LACERDA MARMORE*",
        cnpj: "69.239.515/0001-45",
        zipcode: "03806-000",
        address: "AV PARANAGUA",
        number: "668",
        district: "ERMELINO MATARAZZO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "JJ SEGURANÇA E VIGILANCIA PATRIMONIAL LTDA",
        cnpj: "18.406.382/0001-13",
        zipcode: "04727-020",
        address: "R CAPITAO JOAO DE GODOY 92",
        number: "",
        district: "VL CRUZEIRO",
        city: "SP",
        state: "SP"
    },
    {
        name: "JJ PRESTACAO DE SERVICOS DE TERCEIRIZACAO LTDA - EPP",
        cnpj: "18.537.193/0001-80",
        zipcode: "04727-020",
        address: "R CAPITAO JOAO DE GODOY 92",
        number: "",
        district: "VL CRUZEIRO",
        city: "SP",
        state: "SP"
    },
    {
        name: "J A SERVIÇOS DE PORTARIA E LIMPEZA LTDA",
        cnpj: "20.665.319/0001-43",
        zipcode: "03871-100",
        address: "AV SÃO MIGUEL 4805 SALA 06/07/08",
        number: "",
        district: "PQ BOTURUSSU",
        city: "SP",
        state: "SP"
    },
    {
        name: "JLA ALIMENTACAO LTDA",
        cnpj: "09.448.082/0001-06",
        zipcode: "09060-050",
        address: "R XINGU",
        number: "535",
        district: "VILA VALPARAISO",
        city: "Santo André",
        state: "SP"
    },
    {
        name: "JMS CONFECCIONES EIRELI",
        cnpj: "22.872.108/0001-07",
        zipcode: "72145-426",
        address: "Q QNM 34 CONJUNTO F2 LOTE 33 LOJA",
        number: "1",
        district: "TAGUATINGA NORTE (TAGUATINGA)",
        city: "Brasília",
        state: "DF"
    },
    {
        name: "JOMAR IND E COM DE BOTOES LTDA - ME",
        cnpj: "07.178.508/0001-23",
        zipcode: "03711-009",
        address: "AV CANGAIBA 3929",
        number: "",
        district: "CANGAIBA",
        city: "SP",
        state: "SP"
    },
    {
        name: "JOMARO ASSESSORIA CONTABIL",
        cnpj: "04.454.728/0001-44",
        zipcode: "01222-000",
        address: "RUA MAJOR SERTORIO",
        number: "332",
        district: "VILA BUARQUE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "JORGE LULA E SILVA GUIMARAES",
        cnpj: "04.200.440/865-",
        zipcode: "03726-100",
        address: "R AUGUSTO CORREA LEITE 33",
        number: "",
        district: "PENHA",
        city: "SP",
        state: "SP"
    },
    {
        name: "J S COMERCIO DE BRINDES LTDA",
        cnpj: "07.170.820/0001-70",
        zipcode: "03444-000",
        address: "T TAMAINDE 673",
        number: "",
        district: "VL NOVA MACHESTER",
        city: "SP",
        state: "SP"
    },
    {
        name: "JS COMERCIO DE MARMORES E GRANITOS LTDA",
        cnpj: "07.438.109/0001-54",
        zipcode: "03821-255",
        address: "RUA DOUTOR ASSIS RIBEIRO",
        number: "7828",
        district: "ERMELINO MATARAZZO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "JULIA MELO DE ALMEIDA ME",
        cnpj: "66.533.795/0001-01",
        zipcode: "08122-150",
        address: "R ALTO LONGA 87",
        number: "",
        district: "JD DAS OLIVEIRAS",
        city: "SP",
        state: "SP"
    },
    {
        name: "TAYU IND E COM DE METAIS EIRELI",
        cnpj: "07.320.699/0001-16",
        zipcode: "04524-001",
        address: "AL DOS ARAPANES 901",
        number: "",
        district: "INDIANOPOLIS",
        city: "SP",
        state: "SP"
    },
    {
        name: "JUMAE ARTEFATOS DE CIMENTO LTDA",
        cnpj: "57.106.726/0001-20",
        zipcode: "13260-000",
        address: "R JOAQUIM SERAFIM 1221",
        number: "",
        district: "SÃO BENEDITO",
        city: "Morungaba",
        state: "SP"
    },
    {
        name: "JUNCA SERVICOS LTDA",
        cnpj: "47.466.131/0001-22",
        zipcode: "04534-010",
        address: "R JOAQUIM FLORIANO",
        number: "243",
        district: "ITAIM BIBI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "JUNIOR EMPREITEIRA DE MAO DE OBRA EIRELI",
        cnpj: "18.747.595/0001-09",
        zipcode: "08072-155",
        address: "R RIO CONGONHAS 21",
        number: "",
        district: "UNIAO DE VILA NOVA",
        city: "SP",
        state: "SP"
    },
    {
        name: "INDUSTRIA E COMERCIO DE JUNTAS LGT SERVFLEX LTDA",
        cnpj: "62.714.472/0001-63",
        zipcode: "03639-010",
        address: "R JOSE MARIA 145",
        number: "",
        district: "PENHA",
        city: "SP",
        state: "SP"
    },
    {
        name: "JUPARANA COMERCIAL AGRICOLA LTDA",
        cnpj: "02.219.378/0001-06",
        zipcode: "68627-451",
        address: "ROD PA 256",
        number: "S/N",
        district: "NOVA CONQUISTA",
        city: "Paragominas",
        state: "PA"
    },
    {
        name: "JURAL SERVICOS ADMINISTRATIVOS LTDA",
        cnpj: "10.193.640/0001-19",
        zipcode: "05510-050",
        address: "R CAMARGO",
        number: "20",
        district: "BUTANTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "J V S INDUSTRIA MECANICA LTDA",
        cnpj: "54.773.502/0001-84",
        zipcode: "07043-010",
        address: "R BRASILEIRA 359",
        number: "",
        district: "VL AUGUSTA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "JVT CONSTRUTORA E INCORPORADORA LTDA",
        cnpj: "03.598.316/0001-15",
        zipcode: "00000-000",
        address: "R CORONEL CABRITA 131",
        number: "",
        district: "JD DA GLORIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "KADIC INDUSTRIA E COMERCIO LTDA",
        cnpj: "13.337.805/0001-77",
        zipcode: "03028-040",
        address: "R SIQUEIRA AFONSO 216",
        number: "",
        district: "PARI",
        city: "SP",
        state: "SP"
    },
    {
        name: "KAINOS SOLUCOES EM ATENDIMENTO LTDA",
        cnpj: "17.861.245/0001-06",
        zipcode: "01013-000",
        address: "R QUINZE DE NOVEMBRO",
        number: "228",
        district: "CENTRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "KAIZEN - SERVICOS AUTOMOTIVOS - LTDA",
        cnpj: "10.671.682/0001-18",
        zipcode: "03890-000",
        address: "EST DE MOGI DAS CRUZES",
        number: "1596",
        district: "VL SAO FRANCISCO",
        city: "",
        state: ""
    },
    {
        name: "KAIZEN COMUNICAÇAO VISUAL LTDA",
        cnpj: "12.631.987/0001-21",
        zipcode: "08320-375",
        address: "AV MIGUEL MOTOKI OGUSHI 94",
        number: "",
        district: "PQ SÃO RAFAEL",
        city: "",
        state: ""
    },
    {
        name: "KAIZEN ALIMENTOS IMPORTAÇAO E EXPORTAÇAO EIRELI",
        cnpj: "23.486.260/0001-14",
        zipcode: "03602-030",
        address: "R RUI GOMES DE ALMEIDA",
        number: "163",
        district: "PENHA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "KALLAS ENGENHARIA LTDA",
        cnpj: "52.537.834/0001-34",
        zipcode: "09191-190",
        address: "RUA PADRE LEO COMISSARI 101",
        number: "",
        district: "FERRAZOPOLIS",
        city: "SBCAMPO",
        state: "SP"
    },
    {
        name: "PILLI FOODS ALIMENTOS LTDA",
        cnpj: "11.098.946/0001-59",
        zipcode: "05402-600",
        address: "AV REBOUÇAS 3970",
        number: "",
        district: "PINHEIROS",
        city: "SP",
        state: "SP"
    },
    {
        name: "COLLISION CAR - CENTRO AUTOMOTIVO LTDA - ME",
        cnpj: "01.922.091/0001-85",
        zipcode: "06190-160",
        address: "R HILDEBRANDO DE LIMA",
        number: "477",
        district: "VILA QUITAUNA",
        city: "Osasco",
        state: "SP"
    },
    {
        name: "KARTODROMO INTERNACIONAL SÃO PAULO LTDA",
        cnpj: "22.477.394/0001-06",
        zipcode: "03077-000",
        address: "R ULISSES CRUZ",
        number: "275",
        district: "TATUAPE",
        city: "",
        state: ""
    },
    {
        name: "KAAS PROMOÇÃO DE FEIRAS E EVENTOS LTDA",
        cnpj: "05.495.041/0001-10",
        zipcode: "07054-040",
        address: "AV FAUSTINO RAMALHO 781",
        number: "",
        district: "VL GALVAO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "KAUAHARA MAT PARA CONSTRUÇAO LTDA",
        cnpj: "71.686.471/0001-43",
        zipcode: "05822-020",
        address: "AV CANDIDO JOSE XAVIER 315",
        number: "",
        district: "PQ STO ANTONIO",
        city: "SP",
        state: "SP"
    },
    {
        name: "KAVO DO BRASIL INDUSTRIA E COMERCIO LTDA",
        cnpj: "84.683.556/0001-10",
        zipcode: "89221-040",
        address: "R CHAPECO",
        number: "86",
        district: "SAGUACU",
        city: "Joinville",
        state: "SC"
    },
    {
        name: "KHAMEL REPRESENTACOES IMPORT EXPORT LT",
        cnpj: "49.337.108/0003-25",
        zipcode: "03480-000",
        address: "R DR EDGAR MAGALHAES NORONHA 541",
        number: "",
        district: "VL NOVA YORK",
        city: "SP",
        state: "SP"
    },
    {
        name: "BDS DISTRIBUIDORA EIRELI - EPP",
        cnpj: "14.755.500/0001-48",
        zipcode: "03817-090",
        address: "R NORBERTO JOSE DE SOUZA",
        number: "40",
        district: "PARQUE CISPER",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SORVETERIA KIDELICIA DE SABOR LTDA",
        cnpj: "73.113.334/0001-45",
        zipcode: "03817-020",
        address: "R ANISIO DE ABREU 676",
        number: "",
        district: "VL CISPER",
        city: "SP",
        state: "SP"
    },
    {
        name: "KI PE IND E COM DE ARTEFATOS PLASTICOS LTDA",
        cnpj: "59.737.981/0001-05",
        zipcode: "03682-080",
        address: "R REPUBLICA DE SAN MARINO 50",
        number: "",
        district: "VL UNIAO",
        city: "SP",
        state: "SP"
    },
    {
        name: "KILIMPLAST TRANSFORMACAO E COMERCIO DE PLASTICOS LTDA",
        cnpj: "05.626.284/0001-40",
        zipcode: "07182-320",
        address: "R URBANO SANTOS",
        number: "438",
        district: "CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "ROSELY AMABILE *",
        cnpj: "23.621.005/0001-37",
        zipcode: "07182-310",
        address: "RUA PEDRA LAVADA",
        number: "381",
        district: "JARDIM CASTANHA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "SLOTTER INDUSTRIA METALURGICA LTDA",
        cnpj: "51.184.661/0001-55",
        zipcode: "08210-040",
        address: "R CHAPADA",
        number: "254",
        district: "JD METROPOLITANO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "KLIMAS AR CONDICIONADO LTDA",
        cnpj: "38.779.195/0001-92",
        zipcode: "02965-000",
        address: "R ANTONIO GOMES DE OLIVEIRA 506 A",
        number: "",
        district: "VL IORIO",
        city: "",
        state: ""
    },
    {
        name: "KOJI SUSHI RESTAURANTE LTDA - EPP",
        cnpj: "12.500.888/0001-00",
        zipcode: "04042-002",
        address: "AV DOUTOR ALTINO ARANTES",
        number: "302",
        district: "VL CLEMENTINO",
        city: "SP",
        state: "SP"
    },
    {
        name: "KOSHER EXPRESS COM DE CARNES LTDA - EPP FILIAL",
        cnpj: "01.666.996/0003-01",
        zipcode: "09407-100",
        address: "R PEDRO RIPOLI 379",
        number: "",
        district: "JD ITAPEVA",
        city: "Ribeirão Pires",
        state: "SP"
    },
    {
        name: "KOSHER EXPRESS COMERCIO DE CARNES LTDA",
        cnpj: "01.666.996/0001-31",
        zipcode: "01231-010",
        address: "R GABRIEL DOS SANTOS",
        number: "280",
        district: "SANTA CECILIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "KOTA KOTA AUTO PEÇAS LTDA",
        cnpj: "04.848.144/0001-53",
        zipcode: "07244-000",
        address: "AV JUREMA 465",
        number: "",
        district: "PQ JUREMA",
        city: "SP",
        state: "SP"
    },
    {
        name: "KRIAT IMPORTACAO E EXPORTACAO DE ARTIGOS PARA PRESENTES LTDA",
        cnpj: "12.844.165/0003-90",
        zipcode: "01026-001",
        address: "AV SENADOR QUEIROS",
        number: "667",
        district: "CENTRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "KRIAT IMPORTACAO E EXPORTACAO DE ARTIGOS PARA PRESENTES LTDA",
        cnpj: "12.844.165/0001-29",
        zipcode: "08597-620",
        address: "R FLOR DE LIS",
        number: "950",
        district: "QUINTA DA BOA VISTA (RESIDENCIAL)",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "KROM ACADEMIA DE MUSCULACAO LTDA - ME",
        cnpj: "07.341.284/0001-29",
        zipcode: "08020-220",
        address: "R HELIO VESSONI",
        number: "306",
        district: "SAO MIGUEL PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LA NOTRE COUSINE LTDA",
        cnpj: "21.675.847/0001-46",
        zipcode: "06454-010",
        address: "ALAMEDA MADEIRA 328 LJ 1,2,7",
        number: "",
        district: "ALPHAVILLE",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "KROSS ENGENHARIA LTDA",
        cnpj: "10.505.422/0001-72",
        zipcode: "05435-010",
        address: "R SENADOR CESAR LACERDA VERGUEIRO 440",
        number: "",
        district: "SUMAREZINHO",
        city: "SP",
        state: "SP"
    },
    {
        name: "KSG INDUSTRIA E COMERCIO EM AUTOMACAO LTDA",
        cnpj: "07.660.765/0001-05",
        zipcode: "03588-010",
        address: "R SAARA",
        number: "95",
        district: "CIDADE LIDER",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "KWOT EMPRENDIMENTOS IMOBILIARIOS E PARTICIPAÇOES LTDA",
        cnpj: "01.064.333/0001-09",
        zipcode: "03031-000",
        address: "R TIERS 184",
        number: "",
        district: "PARI",
        city: "SP",
        state: "SP"
    },
    {
        name: "L. FLEX INDUSTRIA E COMERCIO LTDA",
        cnpj: "15.582.496/0001-26",
        zipcode: "08473-370",
        address: "ESTRADA VOVO CAROLINA",
        number: "1996",
        district: "GUAIANAZES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "L.G. CAMPOS INDUSTRIA DE CHAPEIRAS LTDA",
        cnpj: "02.244.154/0001-54",
        zipcode: "03827-000",
        address: "AV DR. ASSIS RIBEIRO",
        number: "8.244",
        district: "ERMELINO MATARAZZO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "L/SP 102 SERVICOS DE LIMPEZA LTDA",
        cnpj: "09.637.227/0001-17",
        zipcode: "05372-040",
        address: "R JOSE FILIPE DA SILVA",
        number: "475",
        district: "JARDIM ESTER",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MARISABEL WOODMAN CERRO",
        cnpj: "19.366.547/0001-33",
        zipcode: "00000-000",
        address: "ALAMEDA CAMPINAS 1357",
        number: "",
        district: "JD PAULISTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "RESTAURANTE LA PERUANA LTDA",
        cnpj: "22.162.819/0001-98",
        zipcode: "01404-003",
        address: "AL CAMPINAS 1333",
        number: "",
        district: "JD PAULISTA",
        city: "",
        state: ""
    },
    {
        name: "RESTAURANTE LA PERUANA LTDA",
        cnpj: "22.162.819/0001-98",
        zipcode: "01404-003",
        address: "ALAMEDA CAMPINAS 1357",
        number: "",
        district: "JD PAULISTA",
        city: "",
        state: ""
    },
    {
        name: "INSTITUTO LAB SYSTEM DE PESQUISAS E ENSAIOS LTDA",
        cnpj: "04.921.401/0001-35",
        zipcode: "07221-070",
        address: "AV GUINLE",
        number: "52 /66",
        district: "CIDADE INDUSTRIAL SATELITE DE SAO PAULO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "LACERDA & LACERDA DESIGN E DECORAÇOES LTDA ME",
        cnpj: "04.997.387/0001-53",
        zipcode: "07260-210",
        address: "R JOAO DE FARIA 825",
        number: "",
        district: "PQ SÃO MIGUEL",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "LAGUNA AUTO POSTO LTDA",
        cnpj: "00.880.516/0001-78",
        zipcode: "08111-000",
        address: "R JOSE P GOMES 681",
        number: "",
        district: "JD OLIVEIRA",
        city: "",
        state: ""
    },
    {
        name: "LATICINIOS SÃO CARLOS LTDA",
        cnpj: "43.804.194/0001-90",
        zipcode: "04277-020",
        address: "R VISCONDE DE PIRAJA 781",
        number: "",
        district: "VL DOM PEDRO I",
        city: "SP",
        state: "SP"
    },
    {
        name: "CAMILA CRISTINA GUEDES DOS SANTOS 41871140846",
        cnpj: "27.882.283/0001-07",
        zipcode: "05321-010",
        address: "AV ENGENHEIRO BILLINGS",
        number: "1653",
        district: "JAGUARE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "JONATAS ALBERTO PEREIRA MOREIRA 377986645845",
        cnpj: "20.443.841/0001-80",
        zipcode: "05453-010",
        address: "R AECRI 426",
        number: "",
        district: "VL MADALENA",
        city: "SP",
        state: "SP"
    },
    {
        name: "MAYARA BENEFICIAMENTO LTDA",
        cnpj: "03.063.236/0001-65",
        zipcode: "00000-000",
        address: "RUA GUSTAVO BRESSER 32",
        number: "",
        district: "MOOCA",
        city: "SP",
        state: "SP"
    },
    {
        name: "LB OFICINA E COMERCIO DE ACESSORIOS LTDA",
        cnpj: "05.275.378/0001-11",
        zipcode: "03809-130",
        address: "R FRANCISCO ANTONIO MIRANDA",
        number: "678",
        district: "JARDIM BELEM",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LBS LOCAL S.A.",
        cnpj: "03.980.538/0001-06",
        zipcode: "04551-010",
        address: "R FIDENCIO RAMOS",
        number: "302",
        district: "VILA OLIMPIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LEALFER IND E COM DE AÇO LTDA",
        cnpj: "62.539.994/0001-76",
        zipcode: "07175-090",
        address: "AV PASCHOAL THOMEU 1608",
        number: "",
        district: "BONSUCESSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "LEAO FERRO E AÇO LTDA",
        cnpj: "05.079.860/0001-86",
        zipcode: "06130-130",
        address: "AV VISCONDE DE NOVA GRANADA 2377",
        number: "",
        district: "JD CIPAVA",
        city: "Osasco",
        state: "SP"
    },
    {
        name: "PAULO ROGERO ELIAS LEAO",
        cnpj: "10.173.307/0001-48",
        zipcode: "02861-170",
        address: "R MONSENHOR LANDIM 26",
        number: "",
        district: "VL RICA",
        city: "SP",
        state: "SP"
    },
    {
        name: "LED TEL SERVICOS DE INSTALAÇAO E MANUTENÇAO LTDA",
        cnpj: "14.196.439/0001-46",
        zipcode: "08070-002",
        address: "AV SÃO MIGUEL 6110",
        number: "",
        district: "VL NORMA",
        city: "SP",
        state: "SP"
    },
    {
        name: "LEFS COMERCIO IMPORTACAO E EXPORTACAO DE AUTOPECAS LTDA",
        cnpj: "15.148.297/0001-04",
        zipcode: "03186-040",
        address: "R OURINHOS",
        number: "353",
        district: "VILA BERTIOGA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LEROY MERLIN COMPANHIA BRASILEIRA DE BRICOLAGEM",
        cnpj: "01.438.784/0009-54",
        zipcode: "01142-200",
        address: "AV PRESIDENTE CASTELO BRANCO 6061 MARGINAL TIETE",
        number: "",
        district: "LAPA",
        city: "SP",
        state: "SP"
    },
    {
        name: "LETS POKE RESTAURANTE LTDA - ME",
        cnpj: "27.855.019/0001-76",
        zipcode: "04542-000",
        address: "R LEOPOLDO COUTO DE MAGALHAES JUNIOR",
        number: "482",
        district: "ITAIM BIBI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LETS POKE VILA OLIMPIA RESTAURANTE LTDA",
        cnpj: "29.765.487/0001-85",
        zipcode: "04551-090",
        address: "AL RAJA GABAGLIA",
        number: "166",
        district: "VILA OLIMPIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LETS POKE ANTONIO CARLOS RESTAURANTE LTDA*",
        cnpj: "32.533.439/0001-76",
        zipcode: "01309-011",
        address: "R ANTONIO CARLOS",
        number: "419",
        district: "CONSOLACAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LEVESA LESTE VEICULOS LTDA",
        cnpj: "44.090.199/0001-61",
        zipcode: "08070-000",
        address: "AV SÃO MIGUEL 9515",
        number: "",
        district: "SÃO MIGUEL PTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "LEVYREITOR INDUSTRIA E COMERCIO LTDA",
        cnpj: "01.679.008/0001-99",
        zipcode: "07210-008",
        address: "RUA JOAQUIM TEOFILO DO ESPIRITO SANTO",
        number: "175",
        district: "CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "ORGANIZAÇAO CONTABIL LIBERTY S/S LTDA",
        cnpj: "61.999.587/0001-89",
        zipcode: "01513-010",
        address: "R MITUTO MIZUMOTO 56",
        number: "",
        district: "LIBERDADE",
        city: "SP",
        state: "SP"
    },
    {
        name: "JZM INSTALAÇOES PREDIAIS EIRELI - ME",
        cnpj: "18.939.917/0001-11",
        zipcode: "01103-201",
        address: "R DA CANTAREIRA 1351",
        number: "",
        district: "CENTRO",
        city: "SP",
        state: "SP"
    },
    {
        name: "C F SILVA MONTAGEM DE STANDS",
        cnpj: "23.718.666/0001-85",
        zipcode: "38401-710",
        address: "AV NOSSA SENHORA DO CARMO",
        number: "491",
        district: "SANTA ROSA",
        city: "Uberlândia",
        state: "MG"
    },
    {
        name: "LIFEPLAS IND E COM DE PLASTICOS LTDA",
        cnpj: "45.084.571/0001-90",
        zipcode: "03163-050",
        address: "PRAÇA BARAO DO TIETE 138/172",
        number: "",
        district: "BELENZINHO",
        city: "SP",
        state: "SP"
    },
    {
        name: "LIFER PRODUTOS ELETROMETALURGICOS LTDA",
        cnpj: "05.051.697/0001-43",
        zipcode: "07141-000",
        address: "AV MARTINS JUNIOR",
        number: "88",
        district: "JARDIM BELA VISTA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "NIQUELACAO E CROMEACAO LIMA E NASCIMENTO EIRELI*",
        cnpj: "20.920.150/0001-20",
        zipcode: "03276-010",
        address: "R BUCUITUBA",
        number: "1330",
        district: "VILA MARGARIDA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "L/SP 102 SERVIÇOS DE LIMPEZA LTDA EPP",
        cnpj: "09.637.227/0001-17",
        zipcode: "05372-040",
        address: "R JOSE FILIPE DA SILVA",
        number: "475 SALA 3",
        district: "JD ESTHER/BUTANTA",
        city: "",
        state: ""
    },
    {
        name: "CLOVIS FERNANDES NASCIMENTO",
        cnpj: "11.929.035/0001-26",
        zipcode: "02252-150",
        address: "R DOMINGOS CARDOSO",
        number: "15",
        district: "VILA NIVI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LINDOMOVEIS DECORAÇOES IND E COM LTDA - ME",
        cnpj: "45.681.822/0001-13",
        zipcode: "07240-060",
        address: "R SANTA VITORIA 111",
        number: "",
        district: "CID IND SATELITE",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "LINERCON CONSTRUCAO E INCORPORACAO LTDA",
        cnpj: "66.513.441/0001-03",
        zipcode: "02035-022",
        address: "R DOUTOR ZUQUIM",
        number: "1902",
        district: "SANTANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "INDUSTRIA E COMERCIO DE LINHAS RESISTENTE LTDA",
        cnpj: "55.407.761/0001-54",
        zipcode: "07435-180",
        address: "EST KAMINOYA",
        number: "200",
        district: "CAPUTERA",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "LINK ENGENHARIA INDUSTRIA E COMERCIO LTDA",
        cnpj: "00.976.179/0001-17",
        zipcode: "58058-650",
        address: "R MARIA LEOPOLDINA DO EGITO",
        number: "S/N",
        district: "DIST. INDUSTRIAL DE MANGABEIRA",
        city: "João Pessoa",
        state: "PB"
    },
    {
        name: "LINOTRAC ASSISTENCIA TECNICA AUTORIZADA E REPRESENTACAO EIRELI",
        cnpj: "21.615.509/0001-19",
        zipcode: "07222-000",
        address: "AV JUSTINO DE MAIO",
        number: "848",
        district: "CIDADE INDUSTRIAL SATELITE DE SAO PAULO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CHIKARA CONFECCOES EIRELI - ME",
        cnpj: "18.848.149/0001-90",
        zipcode: "03313-000",
        address: "R FRANCISCO MARENGO",
        number: "733",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LISA BIJUTERIA LTDA - EPP",
        cnpj: "18.928.295/0001-26",
        zipcode: "01023-050",
        address: "RUA COMENDADOR ABDO SCHAHIN 218 - 7 ANDAR",
        number: "",
        district: "CENTRO",
        city: "",
        state: ""
    },
    {
        name: "LITORAL SUL TRANSPORTES URBANOS LTDA",
        cnpj: "00.584.911/0001-03",
        zipcode: "11740-000",
        address: "AV ALESSANDRO RANGEL DE LIMA",
        number: "1280",
        district: "CHACARA CIBRATEL",
        city: "Itanhaém",
        state: "SP"
    },
    {
        name: "LT SAO CAETANO BAR E RESTAURANTE LTDA",
        cnpj: "15.732.215/0001-74",
        zipcode: "09531-190",
        address: "AL TERRACOTA",
        number: "545",
        district: "CERAMICA",
        city: "São Caetano do Sul",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO ROBERTO E RODRIGO",
        cnpj: "01.161.848/0001-65",
        zipcode: "04360-000",
        address: "AV DR LINO DE MORAES LEME",
        number: "266",
        district: "AEROPORTO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LM SERVICOS DE LAVANDERIA LTDA",
        cnpj: "22.297.273/0001-82",
        zipcode: "07140-020",
        address: "R ENGENHEIRO ALBERT LEIMER",
        number: "415",
        district: "JARDIM SAO GERALDO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "LOG-ST8 INDUSTRIAL DE LAMINADO LTDA",
        cnpj: "32.207.133/0001-20",
        zipcode: "05065-001",
        address: "R DO CURTUME",
        number: "738",
        district: "LAPA DE BAIXO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LOGIC ADAPT TECNOLOGIA LTDA",
        cnpj: "97.530.571/0001-70",
        zipcode: "01227-200",
        address: "AVENIDA ANGELICA",
        number: "2447",
        district: "CONSOLACAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ADELSON ALVES DA SILVA - ME",
        cnpj: "08.652.327/0001-50",
        zipcode: "07142-047",
        address: "R LIMOEIRO DO NORTE",
        number: "125",
        district: "JARDIM SAO DOMINGOS",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "OSASCO ARTE ENXOVAIS EIRELI",
        cnpj: "17.071.927/0001-15",
        zipcode: "06013-003",
        address: "R ANTONIO AGU",
        number: "633",
        district: "CENTRO",
        city: "Osasco",
        state: "SP"
    },
    {
        name: "WHELIGTON BELAS DA CRUZ - ME",
        cnpj: "02.235.876/0001-42",
        zipcode: "08010-010",
        address: "R ARLINDO COLACO",
        number: "286",
        district: "SAO MIGUEL PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LOLIPET IMPORTACAO EXPORTACAO E COMERCIO ON LINE DE PRODUTOS PARA PET LTDA",
        cnpj: "14.813.419/0001-77",
        zipcode: "04612-090",
        address: "R ACRUAS",
        number: "44",
        district: "VILA CONGONHAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LOOK MONITORAMENTO DE INFORMAÇAO LTDA",
        cnpj: "58.404.310/0001-51",
        zipcode: "04611-050",
        address: "R VISCONDE DE CASTRO 167",
        number: "",
        district: "CAMPO BELO",
        city: "SP",
        state: "SP"
    },
    {
        name: "LORENZETTI IND E COM DE BIJOUTERIAS LTDA",
        cnpj: "09.124.194/0001-01",
        zipcode: "03611-060",
        address: "R CRISTIANO OSORIO 196",
        number: "",
        district: "PENHA",
        city: "SP",
        state: "SP"
    },
    {
        name: "LOTUS SECURITIZADORA DE ATIVOS EMPRESARIAIS S.A",
        cnpj: "15.077.619/0001-71",
        zipcode: "01228-200",
        address: "AVENIDA ANGELICA",
        number: "1996",
        district: "CONSOLACAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "L/SP 47 SERVIÇOS DE LIMPEZA LTDA EPP",
        cnpj: "03.322.356/0001-30",
        zipcode: "03685-120",
        address: "R BATALHA DAS CANOAS 54",
        number: "",
        district: "JD SÃO NICOLAU",
        city: "",
        state: ""
    },
    {
        name: "LUBJA IND E COM DE LUBRIFICANTES LTDA",
        cnpj: "13.028.919/0001-35",
        zipcode: "07175-130",
        address: "R CORDEIROS 1027",
        number: "",
        district: "VL NOVA BONSUCESSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "LUCHE TECNOLOGIA EM INSTALACOES ELETRICAS EIRELI",
        cnpj: "05.857.240/0001-20",
        zipcode: "04742-001",
        address: "R PADRE JOSE DE ANCHIETA",
        number: "795",
        district: "SANTO AMARO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LUCKSPUMA INDUSTRIA E COMERCIO LIMITADA",
        cnpj: "57.953.382/0001-95",
        zipcode: "08536-440",
        address: "EST DO BANDEIRANTES",
        number: "1000",
        district: "JARDIM SANTA ROSA",
        city: "Ferraz de Vasconcelos",
        state: "SP"
    },
    {
        name: "DEUTSCHE LUFTHANSA AG",
        cnpj: "33.461.740/0022-09",
        zipcode: "07190-972",
        address: "R JAMIL JOAO ZARIF S/N AEROPORTO GUARULHOS",
        number: "",
        district: "JD CAPRI",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "SWISS INTERNATIONAL AIR LINES AG",
        cnpj: "05.508.556/0002-98",
        zipcode: "07190-100",
        address: "ROD. HELIO SMIDT S/NO TERMINAL 3 / MEZANION CHECK-IN SALA 3T",
        number: "",
        district: "AEROPORTO GUARULHOS",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "LUGUEZ IND COM ESPUMAS TECNICASLTDA",
        cnpj: "56.495.146/0001-00",
        zipcode: "07140-020",
        address: "R ENG ALBERT LEIMER 921",
        number: "",
        district: "PQ INDUSTRIAL",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "LUMINA MATERIAIS PLASTICOS EIRELI*",
        cnpj: "23.474.411/0001-14",
        zipcode: "03819-110",
        address: "RUA ERVAL SECO",
        number: "338",
        district: "PARQUE CISPER",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LUPA CLIPPING LTDA - EPP",
        cnpj: "01.379.084/0001-89",
        zipcode: "04702-002",
        address: "AV SANTO AMARO 6358 ANEXO 662",
        number: "",
        district: "CHAC STO ANTONIO",
        city: "",
        state: ""
    },
    {
        name: "LUSAN COMERCIO E PARTICIPACOES LTDA",
        cnpj: "65.013.443/0002-43",
        zipcode: "06460-030",
        address: "AV PIRACEMA",
        number: "669",
        district: "TAMBORE",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "LUT FLON LAMINAÇAO DE METAIS LTDA",
        cnpj: "00.199.982/0001-92",
        zipcode: "08539-200",
        address: "R DAS INDUSTRIAS 410",
        number: "",
        district: "NUCLEO ITAIM",
        city: "Ferraz de Vasconcelos",
        state: "SP"
    },
    {
        name: "LWM ESTACIONAMENTO EIRELI",
        cnpj: "19.979.461/0001-86",
        zipcode: "04576-020",
        address: "R GEORGE OHM",
        number: "206",
        district: "BROOKLIN",
        city: "",
        state: ""
    },
    {
        name: "INSTITUTO LYGIA JARDIM*",
        cnpj: "49.929.524/0001-50",
        zipcode: "05004-000",
        address: "R DOUTOR CANDIDO ESPINHEIRA",
        number: "79",
        district: "PACAEMBU",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LYNEPLAST INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        cnpj: "71.617.385/0001-89",
        zipcode: "07210-130",
        address: "R JUNQUEIRO",
        number: "334",
        district: "JARDIM ARAPONGAS",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "M-IND8 INDUSTRIAL LTDA",
        cnpj: "32.203.196/0001-08",
        zipcode: "05065-001",
        address: "R DO CURTUME",
        number: "738",
        district: "LAPA DE BAIXO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "M S FOLHEADOS GALVANICOS LTDA - EPP",
        cnpj: "21.948.162/0001-26",
        zipcode: "01103-010",
        address: "R DJALMA DUTRA",
        number: "235",
        district: "LUZ",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "M.G.A. DO BRASIL INDUSTRIA E COMERCIO DE MATERIAL DE VEDACAO LTDA",
        cnpj: "44.377.430/0001-00",
        zipcode: "02957-000",
        address: "R ANDRE PEREIRA TEMUDO",
        number: "240",
        district: "VL MIRANTE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MACARI FUNILARIA E PINTURA LTDA",
        cnpj: "65.817.488/0001-90",
        zipcode: "02313-010",
        address: "R DAS FRUTAS 77",
        number: "",
        district: "VL MAZZEI",
        city: "SP",
        state: "SP"
    },
    {
        name: "MACHROTERM FUNDICAO DE FERRO E ACO EIRELI",
        cnpj: "03.991.223/0001-56",
        zipcode: "07400-000",
        address: "AV TORONTO",
        number: "117",
        district: "CENTRO IND. DE ARUJA",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "GLOBAL TRAVEL ADVISORS AGENCIA DE VIAGENS E TURISMO - EIRELI",
        cnpj: "14.378.093/0001-05",
        zipcode: "04103-001",
        address: "R DO PARAISO",
        number: "595",
        district: "PARAISO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MACLEINI IND E COM LTDA",
        cnpj: "45.295.912/0001-76",
        zipcode: "04129-060",
        address: "R DOM MIGUEL COSTA 114",
        number: "",
        district: "VL GUMERCINDO",
        city: "SP",
        state: "SP"
    },
    {
        name: "MACPLAST COMERCIO DE PLASTICOS E ISOLANTES LTDA",
        cnpj: "03.667.505/0001-00",
        zipcode: "05132-180",
        address: "RUA DOUTOR AZOR MONTENEGRO 197",
        number: "",
        district: "PIRITUBA",
        city: "SP",
        state: "SP"
    },
    {
        name: "MAD MAR INSTALAÇOES NAVAIS LTDA",
        cnpj: "55.672.463/0001-91",
        zipcode: "09970-160",
        address: "AV ANTONIO SYLVIO CUNHA BUENO 365/377",
        number: "",
        district: "JD UNIO",
        city: "Diadema",
        state: "SP"
    },
    {
        name: "MARIO AUGUSTO DANZIGER INDUSTRIA E COMERCIO DE ALIMENTOS",
        cnpj: "06.304.368/0001-20",
        zipcode: "06703-600",
        address: "R VASCO MASSAFELI",
        number: "1000",
        district: "DO PORTAO",
        city: "Cotia",
        state: "SP"
    },
    {
        name: "MAGNATEC COM E MANUTENÇAO DE EQUIP LTDA",
        cnpj: "00.868.374/0001-23",
        zipcode: "03728-090",
        address: "R CASCAVEL 120",
        number: "",
        district: "VL SILVIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "MAIRINK CONSULTORIA EM NEGOCIOS LTDA",
        cnpj: "27.095.723/0001-78",
        zipcode: "07113-000",
        address: "AV PAPA PIO XII",
        number: "1018",
        district: "MACEDO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "MALHARIA BUCOFF LTDA",
        cnpj: "01.606.396/0001-88",
        zipcode: "03025-040",
        address: "R SOUZA CALDAS",
        number: "393/397/td>            ",
        district: "BRAS",
        city: "SP",
        state: "SP"
    },
    {
        name: "MAMU EVENTOS E PRODUÇAO CENEGRAFICA LTDA",
        cnpj: "17.535.581/0001-69",
        zipcode: "07232-110",
        address: "RUA MANOEL VITORINO",
        number: "230",
        district: "CID INDL SATELITE",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CONJUNTO CONDOMINAL GARAVALO",
        cnpj: "67.000.208/0001-81",
        zipcode: "05616-100",
        address: "R LICIO MARCONDES DO AMARAL 420",
        number: "",
        district: "VL PROGREDIOR",
        city: "SP",
        state: "SP"
    },
    {
        name: "BASILAR MNG SERVICOS LTDA - EPP",
        cnpj: "09.546.437/0001-08",
        zipcode: "05630-130",
        address: "R PROFESSOR JOSE HORACIO MEIRELLES TEIXEIRA",
        number: "1041",
        district: "VILA SUZANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MANAIA CONFECCOES E COMERCIO DE ARTIGOS ESPORTIVOS EIRELI",
        cnpj: "09.561.928/0001-10",
        zipcode: "02410-010",
        address: "R JOAO DE LAET",
        number: "406",
        district: "VILA AURORA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MAPRE LUX REATORES LTDA",
        cnpj: "06.067.812/0001-30",
        zipcode: "07074-100",
        address: "AV PEDRO DE SOUZA LOPES 458",
        number: "",
        district: "VL GALVAO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "IND PERF DE LAMINADOS MARGARITELLI LTDA",
        cnpj: "61.154.027/0001-23",
        zipcode: "01519-000",
        address: "R DO LAVAPES",
        number: "366",
        district: "CAMBUCI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MARANI:S PUBLICIDADE LIMITADA",
        cnpj: "53.535.167/0001-13",
        zipcode: "02721-100",
        address: "AVENIDA DEP.EMILIO CARLOS",
        number: "1403",
        district: "VL STA MARIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MARCA SINALIZAÇAO E SERVIÇOS LTDA*",
        cnpj: "02.192.840/0001-29",
        zipcode: "03874-200",
        address: "R ARTHUR FRIEDENREICH 32",
        number: "",
        district: "VL RIO BRANCO",
        city: "",
        state: ""
    },
    {
        name: "MARCENARIA 2 K LTDA ME",
        cnpj: "01.200.178/0001-49",
        zipcode: "08070-280",
        address: "R LIBERO ANCORA LOPES, 105",
        number: "",
        district: "PQ CRUZEIRO DO SUL",
        city: "SP",
        state: "SP"
    },
    {
        name: "R.M COMERCIO DE MADEIRAS E ARTEFATOS EIRELI",
        cnpj: "01.754.587/0001-97",
        zipcode: "04462-000",
        address: "R MIGUL M RAMALHO",
        number: "83",
        district: "JD DA PEDREIRA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MARCOFLAN INDUSTRIA E COMERCIOLTDA",
        cnpj: "54.306.667/0001-46",
        zipcode: "04658-020",
        address: "R TOMAZ TEIXEIRA 329",
        number: "",
        district: "INTERLAGOS",
        city: "SP",
        state: "SP"
    },
    {
        name: "MARCOS GERALDO BISPO EMBALAGENS - ME",
        cnpj: "07.355.876/0001-08",
        zipcode: "08080-570",
        address: "AVENIDA OLIVEIRA FREIRE , 1.482 B",
        number: "",
        district: "PQ. PAULISTANO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MARCOS RONDAN GIMENES FREIRE - ME",
        cnpj: "07.079.524/0001-69",
        zipcode: "08330-310",
        address: "R CORONEL PACHECO DO COUTO 115",
        number: "115",
        district: "JD ESTER",
        city: "",
        state: ""
    },
    {
        name: "MARGARETE PARISE",
        cnpj: "01.147.203/806-",
        zipcode: "04562-001",
        address: "R INDIANA 929",
        number: "",
        district: "BROOKLIN",
        city: "SP",
        state: "SP"
    },
    {
        name: "MARIO CARLOS LAZARINI - EPP",
        cnpj: "07.213.510/0001-96",
        zipcode: "08290-210",
        address: "R SANTO ANTONIO DE ITABERAVA",
        number: "308",
        district: "JARDIM MORGANTE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MARIS ADINE SOUSA DE OLIVEIRA CONFECÇOES LTDA",
        cnpj: "12.419.653/0001-99",
        zipcode: "07153-450",
        address: "R ILARIO PIRES DE FREITAS 44",
        number: "",
        district: "JD FORTALEZA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "MARLOK CALÇADOS E CONFECÇOES LTDA",
        cnpj: "55.920.292/0013-06",
        zipcode: "01219-011",
        address: "LARGO DO AROUCHE 337 - 3 ANDAR",
        number: "",
        district: "CENTRO",
        city: "SP",
        state: "SP"
    },
    {
        name: "MARMORARIA LAR PEDRAS LTDA ME",
        cnpj: "18.711.707/0001-71",
        zipcode: "09180-001",
        address: "AV CARIJO 2231",
        number: "",
        district: "JD PROGRESSO",
        city: "Santo André",
        state: "SP"
    },
    {
        name: "MARMORARIA PEDRAS MATRIX LTDA",
        cnpj: "19.910.685/0001-31",
        zipcode: "04308-001",
        address: "AV ENGENHEIRO ARMANDO DE ARRUDA PEREIRA",
        number: "2912",
        district: "JABAQUARA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MARMORES E GRANITOS OCEANO LTDA",
        cnpj: "11.087.196/0001-10",
        zipcode: "07260-220",
        address: "R JOAQUIM MOREIRA 407",
        number: "",
        district: "PQ SÃO MIGUEL",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "MAROMATEL SYSTEM CONSULTORIA EM NEGOCIOS EIRELI*",
        cnpj: "05.165.382/0001-27",
        zipcode: "03321-001",
        address: "Rua Euclides Pacheco",
        number: "1342",
        district: "Vila Gomes Cardim",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MASSIS TEC LTDA - ME",
        cnpj: "48.502.603/0001-18",
        zipcode: "03806-010",
        address: "AV PARANAGUA",
        number: "759",
        district: "VILA PARANAGUA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MASTERX SERVICOS GERAIS LTDA",
        cnpj: "23.304.917/0001-85",
        zipcode: "06700-639",
        address: "R ANTONIO ROSA",
        number: "112",
        district: "PARQUE SANTA RITA DE CASSIA",
        city: "Cotia",
        state: "SP"
    },
    {
        name: "NEIVAL LIMA COIMBRA",
        cnpj: "04.704.966/0001-60",
        zipcode: "02242-000",
        address: "AV GENERAL ATALIBA LEONEL",
        number: "3509",
        district: "PARADA INGLESA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "M.B.F. METALURGICA BRASILEIRA DE FIXADORES LTDA",
        cnpj: "19.172.610/0001-09",
        zipcode: "07243-580",
        address: "R PROFESSOR JOAO CAVALHEIRO SALEM",
        number: "475",
        district: "BONSUCESSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "MBM SERVIÇOS DE DIGITALIZAÇAO LTDA ME",
        cnpj: "06.115.510/0016-2",
        zipcode: "01202-000",
        address: "AL BARAO DE LIMEIRA 490",
        number: "",
        district: "CAMPOS ELISEOS",
        city: "SP",
        state: "SP"
    },
    {
        name: "MANOEL BENTO DA SILVA FERRAMENTARIA EPP",
        cnpj: "00.534.034/0001-66",
        zipcode: "03658-011",
        address: "R JULIO SAYAGO 68",
        number: "",
        district: "VL RE",
        city: "SP",
        state: "SP"
    },
    {
        name: "M C ACESSORIOS AUTOMOTIVOS LTDA",
        cnpj: "11.857.759/0001-01",
        zipcode: "03172-010",
        address: "R SIQUEIRA BUENO 1988 B",
        number: "",
        district: "MOOCA",
        city: "SP",
        state: "SP"
    },
    {
        name: "MECANICA ROCHA CAR LTDA",
        cnpj: "67.096.487/0001-29",
        zipcode: "06023-060",
        address: "R MANOEL SARAIVA 24",
        number: "",
        district: "VL CAMPESI",
        city: "Osasco",
        state: "SP"
    },
    {
        name: "MEDCEL EDITORA E EVENTOS S.A.",
        cnpj: "07.164.688/0001-94",
        zipcode: "01310-921",
        address: "AV PAULISTA 1776",
        number: "1776",
        district: "BELA VISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MEDPACE DO BRASIL PESQUISA CLINICA LTDA.",
        cnpj: "07.437.322/0001-41",
        zipcode: "05805-000",
        address: "AV MARIA COELHO AGUIAR",
        number: "215",
        district: "JARDIM SAO LUIS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MEGA BOMBAS COM E SERV EM POÇOS ARTESIANOS E EQUIPAMENTOS LTDA",
        cnpj: "07.231.016/0001-54",
        zipcode: "12220-830",
        address: "R CAMANDUCAIA 67",
        number: "",
        district: "JD ISMENIA",
        city: "SJCAMPOS",
        state: "SP"
    },
    {
        name: "MELCOPROL INDUSTRIA E COMERCIO DE PRODUTOS NATURAIS LTDA",
        cnpj: "02.421.911/0001-18",
        zipcode: "29830-000",
        address: "R WILMAR MARCOS THOMAZINE",
        number: "25",
        district: "SAO CRISTOVAO",
        city: "Nova Venécia",
        state: "ES"
    },
    {
        name: "EDIFICIO INTERNATIONAL FLAT",
        cnpj: "05.030.188/0001-34",
        zipcode: "04028-002",
        address: "AV IBIRAPUERA 2534",
        number: "",
        district: "MOEMA",
        city: "SP",
        state: "SP"
    },
    {
        name: "ROSA CELIA FERREIRA CONFECCOES - ME",
        cnpj: "18.265.874/0001-36",
        zipcode: "08580-480",
        address: "R ONDA VERDE 149",
        number: "",
        district: "JD SÃO ARMANDO",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "ACR DA LOMBA CONVENIENCIA - ME",
        cnpj: "22.829.838/0001-25",
        zipcode: "03090-000",
        address: "AV AIRTON PRETINI",
        number: "43",
        district: "JARDIM AMERICA DA PENHA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MF ESPACO DE EMBELEZAMENTO LTDA*",
        cnpj: "23.324.044/0001-72",
        zipcode: "01534-001",
        address: "R MUNIZ DE SOUSA",
        number: "1318",
        district: "ACLIMACAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MENY ALIMENTOS LTDA",
        cnpj: "32.857.394/0001-95",
        zipcode: "02240-000",
        address: "AV DR ANTONIO MARIA LAET",
        number: "566",
        district: "PARADA INGLESA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MERCADINHO DA GENI LTDA",
        cnpj: "05.680.840/0001-66",
        zipcode: "02201-000",
        address: "AV JULIO BUONO 421",
        number: "",
        district: "VL GUSTAVO",
        city: "SP",
        state: "SP"
    },
    {
        name: "MERCADINHO D'MAE LTDA",
        cnpj: "06.095.125/0001-29",
        zipcode: "08581-210",
        address: "R SERRA DE PARECIS 275",
        number: "",
        district: "JD PAINEIRA",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "MERCADINHO ELIDANE LTDA",
        cnpj: "03.264.167/0001-58",
        zipcode: "07131-030",
        address: "R SÃO GERALDO 540 ANTIGO 705",
        number: "",
        district: "JD S CECILIA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "MERCADINHO JARDIM MACEDONIA EIRELI EPP",
        cnpj: "11.179.110/0001-89",
        zipcode: "05894-040",
        address: "R POVOA DE VARZIM 225",
        number: "",
        district: "JD MACEDONIA",
        city: "",
        state: ""
    },
    {
        name: "MERCADINHO SOUZA & FILHOS LTDA",
        cnpj: "67.466.748/0001-55",
        zipcode: "08070-230",
        address: "R DOMINGOS MENDES",
        number: "419",
        district: "PARQUE CRUZEIRO DO SUL",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MERCADINHO CARMELA LTDA",
        cnpj: "12.647.018/0001-69",
        zipcode: "07178-001",
        address: "AV CARMELA THOMEU",
        number: "674",
        district: "VL CARMELA I",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "SUPERMERCADO SUBLIME CARMELA LTDA",
        cnpj: "28.420.326/0002-78",
        zipcode: "07178-001",
        address: "AV CARMELA THOMEU",
        number: "684",
        district: "VILA CARMELA I",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "LAZARO MENEGHINI - MERCADO ELENCO",
        cnpj: "43.061.770/844-",
        zipcode: "08051-370",
        address: "R AUGUSTO ANTUNES 60",
        number: "",
        district: "LIMOEIRO",
        city: "SP",
        state: "SP"
    },
    {
        name: "MERCEARIA E ROTISSERIE GUGA LTDA",
        cnpj: "53.137.303/0001-17",
        zipcode: "07197-000",
        address: "AV MARIANA UBALDINA DO ESPIRITO SANTO 534",
        number: "",
        district: "MACEDO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "MINIMERCADO IRGA LTDA",
        cnpj: "05.506.648/0001-58",
        zipcode: "05331-011",
        address: "R BARCELONA 382",
        number: "",
        district: "JAGUARE",
        city: "",
        state: ""
    },
    {
        name: "MERCADO MAGNUS EIRELI",
        cnpj: "04.574.835/0001-06",
        zipcode: "07263-380",
        address: "R ALICE RAMALHO DE OLIVEIRA",
        number: "106",
        district: "JARDIM ALICE",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "MERCADINHO RECREIO DA MAMAE EIRELI - EPP",
        cnpj: "20.267.996/0001-03",
        zipcode: "07144-670",
        address: "R CONCEIÇAO ARAGUAIA 65",
        number: "",
        district: "RECREIO SÃO JORGE",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "V J MERCADO E PADARIA LTDA",
        cnpj: "13.371.627/0001-09",
        zipcode: "07240-040",
        address: "R IPIOBUNA 120",
        number: "",
        district: "JD CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "MERCADO S OTEB LTDA",
        cnpj: "48.613.061/0001-50",
        zipcode: "03803-000",
        address: "R FERNAO MENDES PINTO",
        number: "1303",
        district: "ERMELINO MATARAZZO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "EMPORIO AMERICA LTDA",
        cnpj: "09.146.141/0001-91",
        zipcode: "07130-140",
        address: "RUA JOAQUIM GONCALVES DA SILVA",
        number: "233",
        district: "JARDIM COCAIA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "OKF COML DE PRODUTOS ALIMENTICIOS LTDA",
        cnpj: "04.376.635/0004-91",
        zipcode: "01123-050",
        address: "R JOAQUIM MURTINHO 277",
        number: "",
        district: "BOM RETIRO",
        city: "SP",
        state: "SP"
    },
    {
        name: "TUPA SUPERMERCADO LTDA",
        cnpj: "49.782.428/0001-22",
        zipcode: "04428-000",
        address: "AVENIDA YERVANT KISSAJIKIAN",
        number: "1666",
        district: "VILA JOANIZA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MERITO EQUIPAMENTOS CONTRA INCENDIO LTDA - ME",
        cnpj: "10.799.887/0001-83",
        zipcode: "03758-010",
        address: "R BOLIVAR RIBEIRO BOAVENTURA 403",
        number: "",
        district: "JD PENHA",
        city: "",
        state: ""
    },
    {
        name: "MESURE CONFECÇOES LTDA",
        cnpj: "03.136.584/0001-15",
        zipcode: "04716-020",
        address: "R BENTO BARBOSA 400",
        number: "",
        district: "CHAC SANTO ANTONIO",
        city: "SP",
        state: "SP"
    },
    {
        name: "METAFLEX COM ATACADISTA DE FERRAGENS EIRELI - ME",
        cnpj: "20.585.721/0001-18",
        zipcode: "07151-051",
        address: "R LAGOA DE DENTRO 176",
        number: "",
        district: "JD SÃO JOAO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "ANDERSON LUIS DOS SANTOS BORGES",
        cnpj: "28.760.778/0001-18",
        zipcode: "15820-000",
        address: "R CESAR CASSOLI",
        number: "718",
        district: "CENTRO",
        city: "Pirangi",
        state: "SP"
    },
    {
        name: "METAL PRIMER INDUSTRIA E COMERCIO DE PAINEIS LTDA",
        cnpj: "67.912.089/0001-33",
        zipcode: "06795-000",
        address: "R IDA ROMUSSI GASPARINETTI",
        number: "340",
        district: "PARQUE LAGUNA",
        city: "Taboão da Serra",
        state: "SP"
    },
    {
        name: "METALART DO BRASIL LTDA",
        cnpj: "62.959.085/0001-97",
        zipcode: "03540-200",
        address: "AV ANTONIO ESTEVAO DE CARVALHO 220",
        number: "",
        district: "CID PATRIARCA",
        city: "SP",
        state: "SP"
    },
    {
        name: "METALFRIO SOLUTIONS S/A - FILIAL MS",
        cnpj: "04.821.041/0003-61",
        zipcode: "79613-004",
        address: "AV YOUSSEF AHMAD EL JOROUCHE S/N",
        number: "",
        district: "DIST INDL II",
        city: "",
        state: ""
    },
    {
        name: "METALFRIO SOLUTIONS S/A FILIAL MOOCA",
        cnpj: "04.821.041/0005-23",
        zipcode: "03107-000",
        address: "AV PRESIDENTE WILSON 274 GALPAO I",
        number: "",
        district: "MOOCA",
        city: "",
        state: ""
    },
    {
        name: "METALFRIO SOLUTIONS S/A MATRIZ",
        cnpj: "04.821.041/0001-08",
        zipcode: "04186-020",
        address: "AV ABRAHAO GONÇALVES BRAGA 412",
        number: "",
        district: "VL LIVIERO",
        city: "",
        state: ""
    },
    {
        name: "B. F. RENDELLI - ME",
        cnpj: "16.798.042/0001-50",
        zipcode: "37640-000",
        address: "ROD FERNAO DIAS",
        number: "SN",
        district: "PIRES",
        city: "Extrema",
        state: "MG"
    },
    {
        name: "METALURGICA BJB SOCIEDADE LTDA",
        cnpj: "01.968.309/0001-32",
        zipcode: "07400-000",
        address: "AV DOS EXPEDICIONARIOS 2346",
        number: "",
        district: "CENTRO",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "METALURGICA SCAI LTDA",
        cnpj: "61.531.299/0001-03",
        zipcode: "07215-230",
        address: "Rua Manuel de Jesus Fernandes",
        number: "230",
        district: "Jardim Santo Afonso",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "PANIFICADORA MEXICANA LTDA",
        cnpj: "61.519.591/0001-00",
        zipcode: "08110-240",
        address: "R DR DURVAL VILALVA",
        number: "2",
        district: "ITAIM PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "M.F. MORAES INDUSTRIA E COMERCIO DE CARIMBOS LTDA",
        cnpj: "02.001.322/0001-80",
        zipcode: "09280-550",
        address: "R ORATORIO",
        number: "1.085",
        district: "BAIRRO BANGU",
        city: "Santo André",
        state: "SP"
    },
    {
        name: "MARIA FARINHA FILMES E PRODUCOES LTDA",
        cnpj: "12.396.390/0002-20",
        zipcode: "05416-000",
        address: "R FRADIQUE COUTINHO",
        number: "50",
        district: "VILA MADALENA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MGK REVESTIMENTOS LTDA",
        cnpj: "11.685.702/0001-72",
        zipcode: "00000-000",
        address: "AV TRANSVERSAL SUL 200",
        number: "",
        district: "JD UMUARAMA",
        city: "Osasco",
        state: "SP"
    },
    {
        name: "M.G.S. INDUSTRIA E COMERCIO DE ARTIGOS DO VESTUARIO LTDA.",
        cnpj: "58.580.903/0001-79",
        zipcode: "01131-000",
        address: "R DOS ITALIANOS",
        number: "957",
        district: "BOM RETIRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MIDAS ASSESSORIA EM RECURSOS HUMANOS LTDA - ME",
        cnpj: "24.012.443/0001-60",
        zipcode: "07180-010",
        address: "AV JOAO VELOSO DA SILVA 1117 - SALA 2",
        number: "",
        district: "CD JARDIM CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "MIKRO-STAMP ESTAMPARIA COMERCIO E INDUSTRIA LTDA",
        cnpj: "57.462.285/0001-08",
        zipcode: "13051-030",
        address: "R JOVELINO APARECIDO MIGUEL",
        number: "160",
        district: "JARDIM DO LAGO II",
        city: "Campinas",
        state: "SP"
    },
    {
        name: "GFR COM DE ARTIGOS INFANTIS LTDA",
        cnpj: "07.138.307/0001-00",
        zipcode: "07182-320",
        address: "R URBANO SANTOS 412",
        number: "",
        district: "CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "MINAS STONES MINERACAO LTDA",
        cnpj: "09.095.817/0002-46",
        zipcode: "46600-000",
        address: "PRACA DELY ROCHA",
        number: "45",
        district: "SUSSUARANA",
        city: "Tanhaçu",
        state: "BA"
    },
    {
        name: "MINASILICIO GMA MINERADORA LTDA - ME",
        cnpj: "03.421.019/0001-05",
        zipcode: "35767-000",
        address: "ROD MG 238 KM 4 S/N",
        number: "",
        district: "ZONA RURAL",
        city: "Jequitibá",
        state: "MG"
    },
    {
        name: "MINERACAO HEFESTO LTDA. - EPP",
        cnpj: "18.657.830/0002-32",
        zipcode: "04866-180",
        address: "AV SADAMU INOUE",
        number: "5489",
        district: "Jardim Almeida",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MIRA OTM TRANSPORTES LTDA",
        cnpj: "58.506.155/0001-84",
        zipcode: "02056-070",
        address: "R SÃO QUIRINO 1090",
        number: "",
        district: "VL GUILHERME",
        city: "SP",
        state: "SP"
    },
    {
        name: "MMOMESSO INDUSTRIA E COMERCIO LTDA",
        cnpj: "08.231.691/0001-46",
        zipcode: "02177-000",
        address: "AV TENENTE AMARO FELICISSIMO DA SILVEIRA",
        number: "1384",
        district: "PARQUE NOVO MUNDO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MISSAO EVANGELICA CAIUA",
        cnpj: "03.747.268/0001-80",
        zipcode: "79812-050",
        address: "POSTO INDIGENA",
        number: "",
        district: "CHACARAS CAIUAS",
        city: "Dourados",
        state: "MS"
    },
    {
        name: "SP GRILL LANCHONETE E RESTAURANTE LTDA",
        cnpj: "01.347.553/0001-88",
        zipcode: "04795-000",
        address: "AV DAS NACOES UNIDAS",
        number: "22540",
        district: "SANTO AMARO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MIURA CORRETORA DE SEGUROS LTDA*",
        cnpj: "49.923.246/0001-24",
        zipcode: "04144-020",
        address: "R FIACAO DA SAUDE",
        number: "145",
        district: "SAUDE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FERNANDO NUNES DE LIMA 43158058820",
        cnpj: "29.753.573/0001-78",
        zipcode: "08151-300",
        address: "R AMPARO DA SERRA",
        number: "324",
        district: "PARQUE DOM JOAO NERI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ML GESTÃO E SERVIÇOS LTDA - EPP",
        cnpj: "11.239.339/0001-61",
        zipcode: "01107-010",
        address: "R LUIS PACHECO 260",
        number: "",
        district: "LUZ",
        city: "SP",
        state: "SP"
    },
    {
        name: "M M PIZZA BAR EIRELI",
        cnpj: "01.036.337/0001-11",
        zipcode: "03310-000",
        address: "R ITAPURA",
        number: "787",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MMZ PROJETOS ESPECIAIS LTDA",
        cnpj: "16.964.992/0001-07",
        zipcode: "06321-620",
        address: "EST DO GUATAMBU 422",
        number: "",
        district: "VL MARCONDES",
        city: "Carapicuíba",
        state: "SP"
    },
    {
        name: "MB6 COMERCIO DE ALIMENTOS LTDA - EPP",
        cnpj: "26.145.618/0001-33",
        zipcode: "01139-003",
        address: "AV MARQUES DE SAO VICENTE",
        number: "1619",
        district: "VARZEA DA BARRA FUNDA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MODELIT INDUSTRIA E COMERCIO DE PLASTICOS LTDA",
        cnpj: "57.957.474/0001-43",
        zipcode: "09370-800",
        address: "AV PAPA JOAO XXIII",
        number: "4625",
        district: "SERTAOZINHO",
        city: "Mauá",
        state: "SP"
    },
    {
        name: "MODUS SERVIÇOS TEMPORARIOS E EMPRESARIAIS LTDA",
        cnpj: "00.363.026/0001-02",
        zipcode: "07180-210",
        address: "R ABAIARA 203",
        number: "",
        district: "CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO MOEMA COMFORT RESIDENCE",
        cnpj: "04.401.392/0001-51",
        zipcode: "04514-032",
        address: "R PINTASSILGO",
        number: "477",
        district: "MOEMA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MOGI PEÇAS LTDA EPP",
        cnpj: "44.299.428/0001-52",
        zipcode: "08770-210",
        address: "R PRESIDENTE CAMPOS SALLES 365",
        number: "",
        district: "VL INDUSTRIAL",
        city: "Mogi das Cruzes",
        state: "SP"
    },
    {
        name: "IND E COM DE MOLAS SRC LTDA",
        cnpj: "54.755.699/0001-29",
        zipcode: "07231-370",
        address: "R DR VITAL BRASIL 144",
        number: "",
        district: "JD NOVA CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "MOMPLASTY MONTAGENS INDUSTRIAIS LTDA - EPP",
        cnpj: "00.854.925/0001-08",
        zipcode: "07250-071",
        address: "RUA PADRE MARCOS 593",
        number: "",
        district: "CID ARACILIA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "MARCOS ROBERTO FERNANDES",
        cnpj: "73.179.764/0001-60",
        zipcode: "03813-140",
        address: "R CACIMBA",
        number: "44",
        district: "JARDIM MATARAZZO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MONTAGENS DE ESTRUTURAS METALICAS FERRO LTDA",
        cnpj: "07.553.582/0001-82",
        zipcode: "99150-000",
        address: "RUA JORGE MATHEUS RIGO",
        number: "1055",
        district: "INDUSTRIAL",
        city: "Marau",
        state: "RS"
    },
    {
        name: "MONTANA'S CAR PEÇAS E SERVIÇOS MULTIMARCAS LTDA - ME",
        cnpj: "13.563.653/0002-01",
        zipcode: "08140-000",
        address: "R TIBURCIO DE SOUZA 2005",
        number: "",
        district: "ITAIM PTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "MONTE AZUL EMPREENDIMENTOS E PARTICIPAÇOES LTDA",
        cnpj: "14.165.498/0001-57",
        zipcode: "03016-001",
        address: "R ORIENTE 137 2 ANDAR",
        number: "",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MONTENEGRO QUIMICA LTDA.",
        cnpj: "64.116.726/0001-77",
        zipcode: "12970-000",
        address: "R LILIANA CINELLI BARROS",
        number: "265",
        district: "CACHOEIRA ABAIXO",
        city: "Piracaia",
        state: "SP"
    },
    {
        name: "MORAES & PITA CORRETORA DE SEGUROS LTDA",
        cnpj: "14.314.625/0001-32",
        zipcode: "03121-020",
        address: "R CAME 244 CJ 31",
        number: "",
        district: "MOOCA",
        city: "SP",
        state: "SP"
    },
    {
        name: "MS RECUPERAÇAO DE CREDITOS LTDA",
        cnpj: "07.045.936/0001-88",
        zipcode: "01029-001",
        address: "LARGO SÃO BENTO 64 6 ANDAR",
        number: "",
        district: "CENTRO",
        city: "SP",
        state: "SP"
    },
    {
        name: "MORAIS ADVOGADOS ASSOCIADOS",
        cnpj: "01.288.619/0001-06",
        zipcode: "01046-010",
        address: "AV IPIRANGA",
        number: "318",
        district: "REPUBLICA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BIJOUTERIAS EQUUS EIRELI - EPP",
        cnpj: "53.395.554/0001-00",
        zipcode: "02089-900",
        address: "TR CASALBUONO",
        number: "120",
        district: "VILA GUILHERME",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MORANA FRANQUIA DE ACESSORIOS LTDA.",
        cnpj: "05.029.857/0001-58",
        zipcode: "06460-000",
        address: "AV TAMBORE",
        number: "448",
        district: "TAMBORE",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "MOROCO PARTICIPACOES E COMERCIO S.A.",
        cnpj: "66.635.780/0001-54",
        zipcode: "01454-011",
        address: "R PROFESSOR ARTHUR RAMOS",
        number: "241",
        district: "JD EUROPA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ELIS APARECIDA DA SILVA LEMOS",
        cnpj: "33.475.733/0001-31",
        zipcode: "09941-202",
        address: "AV FABIO EDUARDO RAMOS ESQUIVEL",
        number: "2900",
        district: "CANHEMA",
        city: "Diadema",
        state: "SP"
    },
    {
        name: "MOTORS K COM DE PEÇAS E SEERVIÇOS ESPECIALIZADOS LTDA",
        cnpj: "12.096.370/0001-53",
        zipcode: "08574-120",
        address: "R ASSAI 140",
        number: "",
        district: "JD ARACARE",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "COIMBRA MOVEIS E DECORACOES LTDA - EPP",
        cnpj: "67.043.125/0007-65",
        zipcode: "08588-645",
        address: "R JESUINO ANTONIO DE SIQUEIRA",
        number: "87",
        district: "CUIABA",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "MPD ENGENHARIA LTDA.",
        cnpj: "50.765.288/0001-63",
        zipcode: "05076-000",
        address: "R AFONSO SARDINHA",
        number: "95",
        district: "LAPA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MPD ENGENHARIA LTDA",
        cnpj: "50.765.288/0001-63",
        zipcode: "05076-000",
        address: "R AFONSO SARDINHA",
        number: "95",
        district: "LAPA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MR PLATING COMERCIO DE PRODUTOS QUIMICOS LTDA - EPP",
        cnpj: "06.100.346/0001-48",
        zipcode: "07223-200",
        address: "R MACEDONIA 135",
        number: "",
        district: "CID IND SATELITE",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "MR TRAINING ATIVIDADE FISICA EIRELI",
        cnpj: "30.404.093/0001-80",
        zipcode: "07115-000",
        address: "AV SALGADO FILHO",
        number: "2992",
        district: "CENTRO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "MRV ENGENHARIA E PARTICIPAÇOES S/A",
        cnpj: "08.343.492/0008-04",
        zipcode: "05001-000",
        address: "AV FRANCISCO MATARAZZO 1500 CJ 111 E 112 BLOCO 1 - 11 PAVIME",
        number: "",
        district: "AGUA BRANCA",
        city: "SP",
        state: "SP"
    },
    {
        name: "E. L. S. CASTELON BALANCAS*",
        cnpj: "11.171.968/0001-05",
        zipcode: "02546-000",
        address: "AV ENGENHEIRO CAETANO ALVARES",
        number: "1839",
        district: "LIMAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MULTI SERVICE GESTORA DE PESSOAL LTDA*",
        cnpj: "08.257.815/0001-62",
        zipcode: "05074-050",
        address: "RUA CLEMENTE ALVARES",
        number: "444",
        district: "LAPA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TELEDATA INFORMACOES E TECNOLOGIA S/A",
        cnpj: "28.707.834/0008-27",
        zipcode: "01222-000",
        address: "R MAJOR SERTORIO",
        number: "128",
        district: "VILA BUARQUE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MULTPARTS INDUSTRIA E COMERCIO DE PRODUTOS PARA EMBALAGENS LTDA - ME",
        cnpj: "09.496.455/0001-14",
        zipcode: "07220-000",
        address: "AV SANTOS DUMONT 3133",
        number: "",
        district: "CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "MULTIFIX FIXAÇAO PARA EMBALAGENS LTDA",
        cnpj: "04.529.113/0001-30",
        zipcode: "07220-000",
        address: "AV SANTOS DUMONT 3133",
        number: "",
        district: "CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "MULTIPEÇAS COM DE AUTO PEÇAS LTDA",
        cnpj: "57.888.240/0001-91",
        zipcode: "04715-003",
        address: "R AMERICO BRASILIENSE 1517",
        number: "",
        district: "CHAC STO ANTONIO",
        city: "SP",
        state: "SP"
    },
    {
        name: "A. J. SERVICOS E COMERCIO EIRELI",
        cnpj: "10.207.066/0001-00",
        zipcode: "69919-799",
        address: "R N5",
        number: "360",
        district: "CONJUNTO TUCUMA",
        city: "Rio Branco",
        state: "AC"
    },
    {
        name: "ELETRODATA PROJETOS ESPECIAIS LTDA",
        cnpj: "02.068.236/0001-95",
        zipcode: "02464-000",
        address: "AV IMIRIM 710",
        number: "",
        district: "IMIRIM",
        city: "SP",
        state: "SP"
    },
    {
        name: "MUNDO TECH COM E SERVIÇOS LTDA - ME",
        cnpj: "24.596.084/0001-36",
        zipcode: "08110-410",
        address: "R SEVERINO BATISTA DE MENEZES 10",
        number: "",
        district: "JD AIMORE",
        city: "SP",
        state: "SP"
    },
    {
        name: "GFG COSMETICOS LTDA",
        cnpj: "55.572.044/0002-69",
        zipcode: "",
        address: "",
        number: "",
        district: "",
        city: "Ferraz de Vasconcelos",
        state: "SP"
    },
    {
        name: "MUSEU APART HOTEL ADMINISTRAÇAO DE BENS LTDA",
        cnpj: "10.571.050/0001-82",
        zipcode: "01228-000",
        address: "AV ANGELICA 310",
        number: "",
        district: "HIGIENOPOLIS",
        city: "",
        state: ""
    },
    {
        name: "MARIA EDUARDA VIVIANI EGUCHI ME -FERRAZ",
        cnpj: "16.456.026/0001-89",
        zipcode: "08543-270",
        address: "RUA DAS HORTENCIAS 324",
        number: "",
        district: "VL MARGARIDA",
        city: "Ferraz de Vasconcelos",
        state: "SP"
    },
    {
        name: "MARIA EDUARDA VIVIANI EGUCHI ME - GUAIANAZES",
        cnpj: "16.456.026/0001-89",
        zipcode: "08151-000",
        address: "ESTRADA DOM JOAO NERY 3823",
        number: "",
        district: "GUAIANAZES",
        city: "SP",
        state: "SP"
    },
    {
        name: "MARIA EDUARDA VIVIANI EGUCHI ME",
        cnpj: "16.456.026/0001-89",
        zipcode: "05187-010",
        address: "AV ALEIXOS JAFET 501 - RESIDENCIAL LARANJEIRAS",
        number: "",
        district: "JARAGUA",
        city: "SP",
        state: "SP"
    },
    {
        name: "N DISNEL COMERCIAL LTDA",
        cnpj: "71.527.105/0001-41",
        zipcode: "05318-000",
        address: "R BAUMANN 1223",
        number: "",
        district: "VL LEOPOLDINA",
        city: "SP",
        state: "SP"
    },
    {
        name: "N PIMENTA & FILHOS TRANSPORTES LTDA",
        cnpj: "31.527.351/0002-60",
        zipcode: "07231-370",
        address: "R DR VITAL BRASIL 92",
        number: "",
        district: "VL NOVA CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "N TUBOS COM DE TUBOS E AÇOS LTDA",
        cnpj: "03.645.190/0001-92",
        zipcode: "07182-120",
        address: "R MANOEL ALONSO ALMENDRA 147",
        number: "",
        district: "CJ RES PAES DE BARROS",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "NACHI BRASIL LTDA.",
        cnpj: "43.345.719/0002-58",
        zipcode: "01404-000",
        address: "AVENIDA PAULISTA",
        number: "453",
        district: "BELA VISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "NACIONAL EXPRESSO LTDA",
        cnpj: "18.260.422/0002-42",
        zipcode: "01144-080",
        address: "R GUSTAV WILLY BORGHOFF 830",
        number: "",
        district: "BARRA FUNDA",
        city: "SP",
        state: "SP"
    },
    {
        name: "NAF ENGENHARIA LTDA",
        cnpj: "62.589.361/0001-72",
        zipcode: "04120-070",
        address: "R DR LOPES DE ALMEIDA 176",
        number: "",
        district: "VL MARIANA",
        city: "SP",
        state: "SP"
    },
    {
        name: "MARU NAKAMURA PRODUTOS ALIMENTICIOS LTDA - ME",
        cnpj: "01.655.867/0001-48",
        zipcode: "03873-100",
        address: "R DOS BOLIVIANOS 370",
        number: "",
        district: "ERM MATARAZZO",
        city: "SP",
        state: "SP"
    },
    {
        name: "KIMURA INDUSTRIA E COMERCIO DE CONCRETO LTDA*",
        cnpj: "31.276.902/0001-89",
        zipcode: "08735-285",
        address: "AV KATSUJI KITAGUCHI",
        number: "391",
        district: "VILA SAO FRANCISCO",
        city: "Mogi das Cruzes",
        state: "SP"
    },
    {
        name: "NARE TEMAKI SUSHI RESTAURANTE LTDA",
        cnpj: "20.874.462/0001-45",
        zipcode: "03808-130",
        address: "R MIGUEL RACHID 170",
        number: "",
        district: "VL PARANAGUA",
        city: "SP",
        state: "SP"
    },
    {
        name: "NATALIA COELHO SILVA METALURGICA - ME",
        cnpj: "17.949.752/0001-04",
        zipcode: "03756-060",
        address: "R BALSA NOVA 30",
        number: "",
        district: "JD GONZAGA",
        city: "SP",
        state: "SP"
    },
    {
        name: "NATIVA PAES E DOCES LTDA",
        cnpj: "03.310.279/0001-06",
        zipcode: "05316-900",
        address: "AV DR GASTA\\O VIDIGAL 1946 LOJA 9 E 10",
        number: "",
        district: "CEAGESP",
        city: "SP",
        state: "SP"
    },
    {
        name: "NATURA COSMETICOS S/A CD SÃO PAULO CENTRO 5800",
        cnpj: "71.673.990/0039-40",
        zipcode: "05106-000",
        address: "AV ALEXANDRE COLARES 2288 PR 01",
        number: "",
        district: "VL JAGUARA",
        city: "SP",
        state: "SP"
    },
    {
        name: "NATURA BIOSPHERA COM DE COSMETICOS E SERVIÇOS LTDA",
        cnpj: "15.537.286/0001-16",
        zipcode: "05106-000",
        address: "AV ALEXANDRE COLARES 1188",
        number: "",
        district: "VL JARAGUA",
        city: "SP",
        state: "SP"
    },
    {
        name: "NATURA LOGISTICA E SERVIÇOS LTDA",
        cnpj: "56.680.176/0001-96",
        zipcode: "07790-190",
        address: "VIA DE ACESSO KM 30,5 PR B",
        number: "",
        district: "EMPRESARIAL ITAIM",
        city: "Cajamar",
        state: "SP"
    },
    {
        name: "NATURAL CENTER 3 COM DE ALIMENTOS LTDA",
        cnpj: "08.941.194/0001-31",
        zipcode: "01310-200",
        address: "AV PAULISTA 2064 LJ 17",
        number: "",
        district: "BELA VISTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "NATURAL - PAULISTA COMERCIO DE ALIMENTOS LTDA.",
        cnpj: "11.133.068/0001-65",
        zipcode: "01327-001",
        address: "RUA TREZE DE MAIO",
        number: "1947",
        district: "PARAISO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "NATURAL TOP CENTER COM DE ALIMENTOS LTDA",
        cnpj: "10.827.622/0001-41",
        zipcode: "01310-913",
        address: "AV PAULISTA 854 LJ 75 2 ANDAR",
        number: "",
        district: "BELA VISTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "MARINA YAYOI URAKAMI KAWAKAMI*",
        cnpj: "08.105.271/0001-13",
        zipcode: "08753-310",
        address: "AVENIDA RICIERI BERTAEOLI JUNIOR",
        number: "70",
        district: "PARQUE DAS VARINHAS",
        city: "Mogi das Cruzes",
        state: "SP"
    },
    {
        name: "NAYUMI EIRELI ME*",
        cnpj: "25.451.912/0001-00",
        zipcode: "08753-310",
        address: "AV RICIERI BERTAIOLLI JUNIOR",
        number: "70",
        district: "PQ DAS VARINHAS",
        city: "Mogi das Cruzes",
        state: "SP"
    },
    {
        name: "NB VISTORIAS AUTOMOTIVAS LTDA ME",
        cnpj: "25.027.461/0001-89",
        zipcode: "06298-002",
        address: "AV DOS REMEDIOS 421",
        number: "",
        district: "REMEDIOS",
        city: "Osasco",
        state: "SP"
    },
    {
        name: "NEOBAND SOLUCOES GRAFICAS EIRELI",
        cnpj: "68.425.628/0001-72",
        zipcode: "09850-300",
        address: "AV HUMBERTO ALENCAR CASTELO BRANCO",
        number: "559",
        district: "ASSUNCAO",
        city: "São Bernardo do Campo",
        state: "SP"
    },
    {
        name: "NEOLOG OCNSULTORIA E SISTEMAS S/A",
        cnpj: "05.254.381/0001-59",
        zipcode: "04571-011",
        address: "AV ENG LUIZ CARLOS BERRINI 1681 8 ANDAR",
        number: "",
        district: "BROOKLIN",
        city: "",
        state: ""
    },
    {
        name: "NEPHRON ASSISTENCIA NEFROLOGICA LTDA",
        cnpj: "57.810.459/0001-78",
        zipcode: "05024-030",
        address: "R VENANCIO AIRES",
        number: "52",
        district: "PERDIZES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "NETZ ENGENHARIA AUTOMOTIVA LTDA",
        cnpj: "01.537.402/0001-92",
        zipcode: "09521-310",
        address: "AV GOIAS",
        number: "359",
        district: "SANTO ANTONIO",
        city: "São Caetano do Sul",
        state: "SP"
    },
    {
        name: "NEW AGE CONSTRUTORA E INCORPORADORA EIRELI",
        cnpj: "19.364.790/0001-12",
        zipcode: "06473-000",
        address: "AV ANDROMEDA",
        number: "885",
        district: "ALPHAVILLE EMPRESARIAL",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "CONSTRUTORA E EMPREITEIRA NEW DANDI LTDA",
        cnpj: "04.255.539/0001-42",
        zipcode: "03814-000",
        address: "Rua Sampei Sato",
        number: "326",
        district: "Jardim Matarazzo",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ASSOCIACAO DOS EMPREENDEDORES E CESSIONARIOS DO SHOPPING NEW MALL CENTER",
        cnpj: "17.430.228/0001-14",
        zipcode: "03009-000",
        address: "R JOAO TEODORO",
        number: "1200",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "IZAIRA PEREIRA DOS SANTOS BENETTI ME",
        cnpj: "14.242.607/0001-92",
        zipcode: "03122-050",
        address: "R DOM JOAQUIM DE MELO 317",
        number: "",
        district: "PQ DA MOOCA",
        city: "SP",
        state: "SP"
    },
    {
        name: "NEW STEEL S/A.",
        cnpj: "09.442.144/0001-72",
        zipcode: "22775-057",
        address: "AV JOAO CABRAL DE MELLO NETO",
        number: "850",
        district: "BARRA DA TIJUCA",
        city: "Rio de Janeiro",
        state: "RJ"
    },
    {
        name: "NOVA VILA OLIMPIA ACADEMIA DE GINASTICA LTDA",
        cnpj: "13.010.259/0001-65",
        zipcode: "04553-010",
        address: "AV DOS BANDEIRANTES 1515",
        number: "",
        district: "ITAIM BIBI",
        city: "",
        state: ""
    },
    {
        name: "NEWMOLD IND E COM DE MOLDES LTDA",
        cnpj: "02.244.062/0001-74",
        zipcode: "09981-370",
        address: "R TIBIRIÇA 434",
        number: "",
        district: "CENTRO",
        city: "Diadema",
        state: "SP"
    },
    {
        name: "NEWPOWER SISTEMAS DE ENERGIA S.A.",
        cnpj: "03.171.752/0001-03",
        zipcode: "07220-000",
        address: "AV SANTOS DUMONT",
        number: "3164",
        district: "CIDADE INDUSTRIAL SATELITE DE SAO PAULO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "NEWTEC MAQUINAS E FILTROS LTDA",
        cnpj: "06.206.618/0001-99",
        zipcode: "07222-140",
        address: "R SAO MATHEUS DO MARANHAO",
        number: "128",
        district: "CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CONFECÇOES DE ROUPAS NEW LANOVIA EIRELI EPP",
        cnpj: "11.184.056/0001-60",
        zipcode: "01120-000",
        address: "R JOSE PAULINO 712",
        number: "",
        district: "BOM RETIRO",
        city: "SP",
        state: "SP"
    },
    {
        name: "NEXT APOIO A NEGOCIOS - EIRELI*",
        cnpj: "23.604.494/0001-19",
        zipcode: "03312-000",
        address: "R MONTE SERRAT",
        number: "235",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "NEXT PROMOTORA DE VENDAS EIRELI ME",
        cnpj: "11.778.915/0001-49",
        zipcode: "03112-000",
        address: "R MONTE SERRAT 235",
        number: "",
        district: "TATUAPE",
        city: "",
        state: ""
    },
    {
        name: "GILBERTO XAVIER DOS SANTOS",
        cnpj: "05.931.086/0001-90",
        zipcode: "08070-530",
        address: "R JACINTO JOSE FAGUNDES",
        number: "15",
        district: "SAO MIGUEL PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "NIAGARA EMBALAGENS INDUSTRIA E COMERCIO LTDA",
        cnpj: "44.115.541/0001-30",
        zipcode: "01109-010",
        address: "R PEDRO VICENTE",
        number: "430",
        district: "LUZ",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LUCIANA DE OLIVEIRA NICOLAU GUARULHOS - ME",
        cnpj: "05.402.289/0001-99",
        zipcode: "07221-070",
        address: "AV GUINLE",
        number: "1620",
        district: "CID IND SATELITE",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "NICROTHERM METALURGICA LTDA",
        cnpj: "09.086.066/0001-10",
        zipcode: "07177-150",
        address: "R SERVIDAO 280",
        number: "",
        district: "BONSUCESSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "NIFE BATERIAS INDUSTRIAIS LTDA",
        cnpj: "61.275.137/0002-24",
        zipcode: "07411-710",
        address: "AV TAKARA BELMONT 120",
        number: "",
        district: "PORTAO",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "NILO UMEDA*",
        cnpj: "08.256.691/0001-09",
        zipcode: "08765-340",
        address: "EST MOGI BERTIOGA",
        number: "S/N",
        district: "BIRITIBA USSU",
        city: "Mogi das Cruzes",
        state: "SP"
    },
    {
        name: "NIPPON GLASS INSTALACOES E REVESTIMENTOS LTDA",
        cnpj: "19.655.252/0001-87",
        zipcode: "04462-000",
        address: "ESTRADA DO ALVARENGA",
        number: "485",
        district: "JARDIM DA PEDREIRA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "NIVO CURCINO SANTOS JUNIOR 17344928809",
        cnpj: "13.080.156/0001-71",
        zipcode: "07244-290",
        address: "R UBATUBA",
        number: "47",
        district: "PARQUE JUREMA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "NIX CONSTRUCAO E INCORPORACAO - EIRELI",
        cnpj: "11.757.504/0001-77",
        zipcode: "01433-000",
        address: "Rua Maestro Elias Lobo",
        number: "1003",
        district: "Jardim Paulista",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "NOBRE CORREIA ENGENHARIA E CONSTRUÇAO LTDA",
        cnpj: "11.517.376/0001-94",
        zipcode: "09810-250",
        address: "AV JOAO FIRMINO 900",
        number: "",
        district: "ASSUNÇAO",
        city: "",
        state: ""
    },
    {
        name: "NOVA8 TECNOLOGIA EM SOFTWARE LTDA.",
        cnpj: "25.266.078/0001-83",
        zipcode: "06454-000",
        address: "AL RIO NEGRO",
        number: "585",
        district: "ALPHAVILLE CENTRO INDUSTRIAL E EMPRESARIAL/AL",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "LUCIA APARECIDA ALVES CONFECÇOES - ME",
        cnpj: "71.693.394/0001-59",
        zipcode: "03883-030",
        address: "R DIONISIO FEIJO 110",
        number: "",
        district: "PONTE RASA",
        city: "SP",
        state: "SP"
    },
    {
        name: "C. ALMEIDA A. DE SOUZA AUTO PECAS - ME",
        cnpj: "19.823.799/0001-44",
        zipcode: "07172-040",
        address: "AV BELO CAMPO",
        number: "80",
        district: "JARDIM PRESIDENTE DUTRA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "NOVA FATIMA COM DE FERRO E AÇO LTDA",
        cnpj: "08.891.242/0003-96",
        zipcode: "07224-130",
        address: "R PANAMBI 515",
        number: "",
        district: "CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "NOVA INTERINVEST REGULARIZACAO DE LOTEAMENTOS S/C LTDA.",
        cnpj: "03.870.304/0001-06",
        zipcode: "04722-050",
        address: "R MALDONADO",
        number: "22",
        district: "JARDIM TRES MARIAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "NOVA PARI CENTER EMPREENDIMENTOS E PARTICIPACOES LTDA.",
        cnpj: "18.135.690/0001-51",
        zipcode: "03031-040",
        address: "R HANNEMANN",
        number: "335",
        district: "CANINDE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "NOVACART CARTOTECNICA LTDA*",
        cnpj: "17.106.298/0001-11",
        zipcode: "07411-710",
        address: "AV TAKARA BELMONT",
        number: "95",
        district: "CENTRO INDUSTRIAL DE ARUJA",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "NOVO LAB SERVICOS DE PESQUISAS E ENSAIOS LTDA",
        cnpj: "22.061.375/0001-02",
        zipcode: "07215-200",
        address: "R MONTE APRAZIVEL",
        number: "155",
        district: "JARDIM SANTO AFONSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "NS MAZZA ALIMENTOS LTDA",
        cnpj: "04.697.015/0001-01",
        zipcode: "06410-000",
        address: "R DA PRATA",
        number: "816",
        district: "JARDIM DOS CAMARGOS",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "NUTRIMIX W COMERCIO E ALIMENTACAO LTDA",
        cnpj: "04.465.474/0001-60",
        zipcode: "09960-150",
        address: "R JOAO PAZZINI",
        number: "71",
        district: "VILA NOGUEIRA",
        city: "Diadema",
        state: "SP"
    },
    {
        name: "NUTRI SON RESTAURANTE E LANCHONETE VEGETARIANO LTDA",
        cnpj: "44.346.807/0001-56",
        zipcode: "01050-060",
        address: "VIADUTO 9 DE JULHO 160",
        number: "",
        district: "CONSOLAÇAO",
        city: "",
        state: ""
    },
    {
        name: "EMPORIO NATURAIS BY NUTRIWORLD COM VAREJ DE ALIMENTOS EIRELI",
        cnpj: "21.668.451/0001-71",
        zipcode: "00000-00",
        address: "R JOSE OTONI 284",
        number: "",
        district: "SÃO MIGUEL PTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "DOUGLAS SERAFIM DA SILVA & CIA LTDA",
        cnpj: "09.093.738/0008-91",
        zipcode: "12215-900",
        address: "AV DEPUTADO BENEDITO MATARAZZO 9403 LOJA ESP COML N T220 PIS",
        number: "",
        district: "JD PAULISTA",
        city: "SJCAMPOS",
        state: "SP"
    },
    {
        name: "OSM OLIVEIRA SERVICOS E MONITORAMENTO - EIRELI",
        cnpj: "26.754.460/0001-07",
        zipcode: "29152-810",
        address: "R NOVA SAO VICENTE",
        number: "44",
        district: "APARECIDA",
        city: "Cariacica",
        state: "ES"
    },
    {
        name: "TEREZA SPINOLA MONIZ COSTA",
        cnpj: "00.654.570/809-",
        zipcode: "09910-440",
        address: "R VISCONDE DE OURO PRETO 179",
        number: "",
        district: "CENTRO",
        city: "Diadema",
        state: "SP"
    },
    {
        name: "ORDEM DOS ADVOGADOS DO BRASIL - SECCAO DE SAO PAULO",
        cnpj: "43.419.613/0094-70",
        zipcode: "03605-000",
        address: "R RODOVALHO JUNIOR 234",
        number: "",
        district: "PENHA",
        city: "",
        state: ""
    },
    {
        name: "ORDEM DOS ADVOGADOS DO BRASIL - SECCAO DE SAO PAULO",
        cnpj: "43.419.613/0110-24",
        zipcode: "08040-020",
        address: "R TATUIRA",
        number: "13",
        district: "VILA CAROLINA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "OASIS IND E COM DE TAPETES LTDA",
        cnpj: "72.677.693/0001-62",
        zipcode: "04717-101",
        address: "R GUARACI 242",
        number: "",
        district: "SÃO LUIS",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "OBRAPLAN CONSTRUTORA LTDA",
        cnpj: "00.195.916/0001-44",
        zipcode: "04271-001",
        address: "R OLIVEIRA MELO 1078",
        number: "",
        district: "IPIRANGA",
        city: "",
        state: ""
    },
    {
        name: "OCEAN INDUSTRIA E COMERCIO DE AUTOS PECAS LTDA*",
        cnpj: "10.773.355/0001-77",
        zipcode: "08586-170",
        address: "R DO COBRE",
        number: "40",
        district: "PQ SAO PEDRO",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "ODONTO EMPRESAS CONVENIOS DENTARIOS LTDA",
        cnpj: "40.223.893/0001-59",
        zipcode: "06460-000",
        address: "AV TAMBORE 267 ANDAR 15 TORE NORTE",
        number: "",
        district: "TAMBORE",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "CLINICA ODONTOLOGICA NATHALIA CRISTIANE SERRANO GINEZ DAVIDA LTDA",
        cnpj: "18.734.120/0001-88",
        zipcode: "01136-001",
        address: "R DO BOSQUE",
        number: "1.589",
        district: "BARRA FUNDA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "OIA GLOBAL LOGISTICA LTDA.",
        cnpj: "14.010.349/0002-08",
        zipcode: "04547-004",
        address: "R GOMES DE CARVALHO",
        number: "1069",
        district: "VILA OLIMPIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "OLIMPIA TEXTIL LTDA",
        cnpj: "04.741.006/0001-70",
        zipcode: "07034-090",
        address: "R JOSE MARQUES PRATA 832 ANTIGO 125",
        number: "",
        district: "VARZEA DO PALACIO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "LEANDRO RIENTE DIAS",
        cnpj: "24.175.404/0001-84",
        zipcode: "08676-000",
        address: "AV ANTONIO MARQUES FIGUEIRA",
        number: "695",
        district: "VILA FIGUEIRA",
        city: "Suzano",
        state: "SP"
    },
    {
        name: "OMIM DO BRASIL BRINQUEDOS LTDA",
        cnpj: "04.642.455/0001-61",
        zipcode: "07177-120",
        address: "R JOAO RANIERI 1129",
        number: "",
        district: "JD FATIMA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "OMINI FERRAMENTARIA LTDA",
        cnpj: "00.313.617/0001-67",
        zipcode: "03321-001",
        address: "R EUCLIDES PACHECO 1831",
        number: "",
        district: "TATUAPE",
        city: "SP",
        state: "SP"
    },
    {
        name: "ORGANIZACAO NACIONAL DE DEFESA E APOIO DA CRIANCA E ADOLESCENTE DO IDOSO E DO MEIO AMBIENTE",
        cnpj: "08.849.334/0001-46",
        zipcode: "03736-180",
        address: "R GALVAO DA FONTOURA",
        number: "50",
        district: "VILA BUENOS AIRES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "OODLES NETWORKS - SISTEMAS E SOLUCOES EM INFORMATICA LTDA - EPP",
        cnpj: "14.125.129/0001-30",
        zipcode: "01551-020",
        address: "R DOUTOR INACIO ARRUDA",
        number: "228",
        district: "VILA MONUMENTO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "OZEIAS DE PAULA SANTOS 21851073809",
        cnpj: "21.105.973/0001-65",
        zipcode: "18078-795",
        address: "RUA ISAC DOS SANTOS HERGESEL",
        number: "20",
        district: "JARDIM SOROCABA PARK",
        city: "Sorocaba",
        state: "SP"
    },
    {
        name: "OPTICA FASHION BI COM LTDA ME",
        cnpj: "07.680.475/0001-15",
        zipcode: "03658-011",
        address: "R ITINGUÇU 1997",
        number: "",
        district: "VL RE",
        city: "SP",
        state: "SP"
    },
    {
        name: "ORBITAL MARCENARIA S/S LTDA",
        cnpj: "05.687.136/0001-35",
        zipcode: "03804-030",
        address: "R ANTONIO TERTULIANO",
        number: "477",
        district: "ERMELINO MATARAZZO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ORDEM E PROGRESSO EMPREENDIMENTOS IMOBILIARIOS S/A",
        cnpj: "12.082.888/0001-38",
        zipcode: "01141-030",
        address: "AV ORDEM E PROGRESSO 157",
        number: "",
        district: "BARRA FUNDA",
        city: "SP",
        state: "SP"
    },
    {
        name: "ORM COMERCIO DE ALIMENTOS EIRELI",
        cnpj: "22.659.669/0001-22",
        zipcode: "13087-901",
        address: "AV GUILHERME CAMPOS 500 LOJA RA02",
        number: "",
        district: "JD STA GENEBRA",
        city: "Campinas",
        state: "SP"
    },
    {
        name: "LABORATORIO E CENTRO OTICO BASSI LTDA",
        cnpj: "01.989.398/0001-01",
        zipcode: "08010-170",
        address: "R PEDRO AVELINO 10",
        number: "",
        district: "VL DR EIRAS",
        city: "",
        state: ""
    },
    {
        name: "TRITON COMERCIO E INDUSTRIA DE OCULOS LTDA",
        cnpj: "45.526.795/0001-04",
        zipcode: "04203-052",
        address: "R BOM PASTOR",
        number: "1811",
        district: "IPIRANGA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "O K F - COMERCIAL DE PRODUTOS ALIMENTICIOS LTDA.",
        cnpj: "11.466.941/0001-31",
        zipcode: "01123-001",
        address: "R TRES RIOS",
        number: "251",
        district: "BOM RETIRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "OVERLAND CONFECCOES E COMERCIO DE ARTIGOS ESPORTIVOS LTDA - EPP",
        cnpj: "08.479.046/0001-47",
        zipcode: "02410-010",
        address: "R JOAO DE LAET 422",
        number: "",
        district: "VL AURORA",
        city: "SP",
        state: "SP"
    },
    {
        name: "OVERLAND CONFECÇOES E COM DE ARTIGOS ESPORTIVOS LTDA",
        cnpj: "08.479.046/0001-47",
        zipcode: "02410-010",
        address: "R JOAO DE LAET 422",
        number: "",
        district: "VL AURORA",
        city: "SP",
        state: "SP"
    },
    {
        name: "OXAN ATACADISTA LTDA",
        cnpj: "57.895.328/0001-30",
        zipcode: "03453-000",
        address: "AV RIO DAS PEDRAS 729",
        number: "",
        district: "JD VILA FORMOSA",
        city: "SP",
        state: "SP"
    },
    {
        name: "P S GUIMARAES SERVIÇOS",
        cnpj: "13.851.052/0001-13",
        zipcode: "04212-001",
        address: "R ALMIRANGA LOBO 617",
        number: "",
        district: "IPIRANGA",
        city: "",
        state: ""
    },
    {
        name: "PANIFICADORA PRINCESA DA LUIS GOIS LTDA",
        cnpj: "62.584.719/0001-74",
        zipcode: "04043-350",
        address: "R LUIS GOIS 1727",
        number: "",
        district: "MIRANDOPOLIS",
        city: "",
        state: ""
    },
    {
        name: "PAGANELLA PIZZARIA LTDA",
        cnpj: "71.605.216/0001-29",
        zipcode: "02916-000",
        address: "AV PAULA FERREIRA",
        number: "2.734",
        district: "VILA PEREIRA BARRETO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TRAPANI PARTICIPAÇOES LTDA",
        cnpj: "13.273.775/0001-82",
        zipcode: "03031-400",
        address: "R HANNEMANN 415",
        number: "",
        district: "CANINDE",
        city: "SP",
        state: "SP"
    },
    {
        name: "PAGUS ALIMENTOS EIRELI EPP",
        cnpj: "23.350.041/0001-03",
        zipcode: "09726-150",
        address: "AV ANTARTICO 261",
        number: "",
        district: "JD DO MAR",
        city: "",
        state: ""
    },
    {
        name: "HATTORI + MAMBELI LTDA",
        cnpj: "64.807.803/0001-35",
        zipcode: "15084-150",
        address: "RUA CAPITAO JOSE MARIA",
        number: "1145",
        district: "JARDIM URANO",
        city: "São José do Rio Preto",
        state: "SP"
    },
    {
        name: "PAMAFI IND E COM E SERVIÇOS LTDA",
        cnpj: "65.001.364/0001-31",
        zipcode: "02993-100",
        address: "R TOMAS RIBEIRO COLACO 436",
        number: "",
        district: "JD VIVIAN",
        city: "SP",
        state: "SP"
    },
    {
        name: "PAR TEC PARAFUSO TECNICO INDUSTRIA E COMERCIO LTDA",
        cnpj: "38.955.142/0001-85",
        zipcode: "07221-070",
        address: "AV GUINLE",
        number: "574",
        district: "CID IND SAT",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "MM PARAISO DAS COROAS LTDA",
        cnpj: "00.200.084/0001-07",
        zipcode: "01104-001",
        address: "R SÃO CAETANO 325",
        number: "",
        district: "LUZ",
        city: "SP",
        state: "SP"
    },
    {
        name: "PARAMAR ENGENHARIA LTDA",
        cnpj: "28.198.204/0001-06",
        zipcode: "30350-143",
        address: "AV PRUDENTE DE MORAIS",
        number: "621",
        district: "SANTO ANTONIO",
        city: "Belo Horizonte",
        state: "MG"
    },
    {
        name: "PARAMAR COM DE PARAFUSOS E PEÇAS LTDA",
        cnpj: "43.771.781/0001-20",
        zipcode: "02123-010",
        address: "R CECILIA MEIRELES 385",
        number: "",
        district: "VL MARIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "PHOENEX CARGO AGENCIAMENTO DE CARGA AEREA LTDA.",
        cnpj: "10.257.602/0001-82",
        zipcode: "07111-040",
        address: "R ITAVERAVA",
        number: "84",
        district: "CAMARGOS",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CATHARINE PEDROSA PARISE GONCALVES 23005817873",
        cnpj: "22.660.990/0001-27",
        zipcode: "04562-001",
        address: "R INDIANA",
        number: "929",
        district: "BROOKLIN PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "EMPRESA DE EDUCACAO PARQUE ECOLOGICO LTDA",
        cnpj: "11.102.213/0001-40",
        zipcode: "13330-680",
        address: "R JOAO AMSTALDEN",
        number: "953",
        district: "BELA VISTA",
        city: "Indaiatuba",
        state: "SP"
    },
    {
        name: "PASQUALE INDUSTRIA E COMERCIO LTDA",
        cnpj: "64.118.656/0001-96",
        zipcode: "08630-110",
        address: "RUA DO REGATO",
        number: "60",
        district: "DAS PALMEIRAS",
        city: "Suzano",
        state: "SP"
    },
    {
        name: "PASTELARIA TUTTY LTDA",
        cnpj: "13.021.517/0001-09",
        zipcode: "05072-010",
        address: "R CONRADO MORESCHI 165",
        number: "",
        district: "LAPA",
        city: "SP",
        state: "SP"
    },
    {
        name: "PATTHI TRANSPORTES E DISTRIBUIÇAO LTDA",
        cnpj: "71.997.274/0001-45",
        zipcode: "04671-245",
        address: "R DOM AGUIRRE 602",
        number: "",
        district: "JD TAQUARAL",
        city: "",
        state: ""
    },
    {
        name: "PAULATEC ENGENHARIA E CONSTRUCOES LTDA - EPP",
        cnpj: "57.901.001/0001-24",
        zipcode: "04576-060",
        address: "R SAMUEL MORSE",
        number: "74",
        district: "BROOKLIN NOVO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PAULISTANA CAFÉ E PIZZARIA LTDA",
        cnpj: "06.210.514/0001-58",
        zipcode: "04533-050",
        address: "R SALVADOR CARDOSO 131",
        number: "",
        district: "ITAIM BIBI",
        city: "SP",
        state: "SP"
    },
    {
        name: "PAULO KAWA KAMI*",
        cnpj: "10.920.274/0001-52",
        zipcode: "08753-310",
        address: "AV RICIERI BERTAIOLI JUNIOR",
        number: "S/N",
        district: "PAQUE VARINHAS",
        city: "Mogi das Cruzes",
        state: "SP"
    },
    {
        name: "RAMPAV LOCAÇAO DE MAQUINAS E EQUIPAMENTOS LTDA",
        cnpj: "19.119.596/0001-71",
        zipcode: "03573-010",
        address: "R COSTEIRA 102",
        number: "",
        district: "JD ARIZE",
        city: "SP",
        state: "SP"
    },
    {
        name: "PEDAL NET BIKE SHOP LTDA - ME",
        cnpj: "03.904.035/0001-43",
        zipcode: "07090-050",
        address: "AV ONZE DE AGOSTO 368",
        number: "",
        district: "JD ZAIRA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "RFD ACADEMIA DE LUTA E GINASTICA LTDA",
        cnpj: "30.391.592/0001-80",
        zipcode: "04616-005",
        address: "R PASCAL",
        number: "S/N",
        district: "CAMPO BELO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PEDREIRA SARGON LTDA",
        cnpj: "60.101.300/0001-99",
        zipcode: "07500-000",
        address: "AV AIRTON S H GALVES SN",
        number: "",
        district: "RETIRO",
        city: "Santa Isabel",
        state: "SP"
    },
    {
        name: "LEANDRO MENDES RIBEIRO DA SILVA PESCADOS EPP",
        cnpj: "05.704.450/0001-89",
        zipcode: "04753-060",
        address: "AV PADRE JOSE MARIA 10",
        number: "",
        district: "SANTO AMARO",
        city: "SP",
        state: "SP"
    },
    {
        name: "PENSE IMOVEIS E SERVIÇOS DE INTERNET S/A",
        cnpj: "21.212.092/0001-43",
        zipcode: "90160-180",
        address: "AV ERICO VERISSIMO 400 5 ANDAR SALA 501",
        number: "",
        district: "FLORESTA",
        city: "Porto Alegre",
        state: "RS"
    },
    {
        name: "ESCOLA PEQUENO APRENDIZ - IEPA EIRELI*",
        cnpj: "04.150.836/0001-23",
        zipcode: "04117-120",
        address: "R LEITE FERRAZ",
        number: "74",
        district: "VILA MARIANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PERCON ENG DE FUNDAÇOES LTDA",
        cnpj: "57.774.341/0001-31",
        zipcode: "06213-070",
        address: "R SANAZAR MADIROS",
        number: "92",
        district: "PRESIDENTE ALTINO",
        city: "Osasco",
        state: "SP"
    },
    {
        name: "PERES & DONATO SERV LTDA",
        cnpj: "05.123.406/0001-85",
        zipcode: "04053-020",
        address: "R URUTUBA 56",
        number: "",
        district: "SAUDE",
        city: "SP",
        state: "SP"
    },
    {
        name: "PERFIL BELLA",
        cnpj: "32.572.143/0001-64",
        zipcode: "",
        address: "",
        number: "",
        district: "",
        city: "",
        state: ""
    },
    {
        name: "PERFILADOS RIO DOCE LTDA",
        cnpj: "03.461.082/0001-60",
        zipcode: "29909-025",
        address: "ROD BR 101 NORTE, KM 142",
        number: "S/N",
        district: "CANIVETE",
        city: "Linhares",
        state: "ES"
    },
    {
        name: "PERIGOT COMERCIO DE ARTIGOS PARA ANIMAIS EIRELI",
        cnpj: "11.177.146/0001-23",
        zipcode: "04402-000",
        address: "AV MARARI",
        number: "250",
        district: "VILA MARARI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PP ADMINISTRAÇAO DE ESTACIONAMENTOS EIRELI - EPP",
        cnpj: "54.065.123/0001-30",
        zipcode: "02037-001",
        address: "R DR OLAVIO EGIDIO 764 8 ANDAR CJ 84",
        number: "",
        district: "SANTANA",
        city: "SP",
        state: "SP"
    },
    {
        name: "PESADOES COMERCIO DE PECAS E ACESSORIOS LTDA",
        cnpj: "17.966.092/0001-61",
        zipcode: "07220-000",
        address: "AV SANTOS DUMONT",
        number: "1667",
        district: "CIDADE INDUSTRIAL SATELITE DE SAO PAULO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "MC COMERCIO DE PRODUTOS E SERVICOS VETERINARIOS LTDA",
        cnpj: "23.915.448/0001-30",
        zipcode: "07024-170",
        address: "AVENIDA PRESIDENTE HUMBERTO DE ALENCAR CASTELO BRANCO",
        number: "2207",
        district: "VILA LEONOR",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "PET TRENDS IMP EXP E COM DE PRODUTOS PARA PET LTDA - ME",
        cnpj: "24.710.503/0001-19",
        zipcode: "04612-090",
        address: "R ACRUAS 44",
        number: "",
        district: "VL CONGONHAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PET SHOP JMJ LTDA ME",
        cnpj: "28.110.106/0001-67",
        zipcode: "08120-000",
        address: "AV BARAO DE ALAGOAS",
        number: "6",
        district: "ITAIM PTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "EDIFICIO ROQUE PETRONI 850",
        cnpj: "26.680.449/0001-31",
        zipcode: "04707-000",
        address: "AV ROQUE PETRONI JUNIOR",
        number: "850",
        district: "JARDIM DAS ACACIAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CENTRO DE ABASTECIMENTO PETRONORTE LTDA",
        cnpj: "03.575.108/0001-09",
        zipcode: "13473-291",
        address: "AV AFONSO PANSAN",
        number: "533",
        district: "JD. HELENA",
        city: "Americana",
        state: "SP"
    },
    {
        name: "PEVEDUTO PLASTICOS AFINS LTDA",
        cnpj: "04.120.642/0001-85",
        zipcode: "07043-041",
        address: "R KARY 247",
        number: "",
        district: "VL SÃO JOAO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "PHOENIX CONTACT INDUSTRIA E COMERCIO LIMITADA",
        cnpj: "68.404.912/0001-62",
        zipcode: "05038-130",
        address: "R FRANCISCO CORAZZA",
        number: "20",
        district: "PARQUE RESIDENCIAL DA LAPA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PHYTO PLANCTON PHARMA FARMACIA DE MANIPULACAO LTDA",
        cnpj: "02.584.416/0001-20",
        zipcode: "02331-000",
        address: "AVENIDA NOVA CANTAREIRA",
        number: "329",
        district: "TUCURUVI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PINTURAS TRIANGULO LTDA",
        cnpj: "60.522.257/0001-35",
        zipcode: "01155-040",
        address: "AL OLGA 415",
        number: "",
        district: "BARRA FUNDA",
        city: "SP",
        state: "SP"
    },
    {
        name: "COMERCIO DE MADEIRAS PINUSMADE EIRELI - EPP",
        cnpj: "14.626.621/0001-90",
        zipcode: "03827-000",
        address: "AV DOUTOR ASSIS RIBEIRO",
        number: "5210",
        district: "ERMELINO MATARAZZO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FERNANDES LIMA ADMINISTRAÇAO DE CONDOMINIOS E GESTAO EMPRESARIAL LTDA",
        cnpj: "05.066.569/0001-73",
        zipcode: "06708-220",
        address: "R NEMITALA 123",
        number: "",
        district: "PQ SÃO GEORGE",
        city: "Cotia",
        state: "SP"
    },
    {
        name: "PIRES LOGISTICA EIRELI",
        cnpj: "30.247.367/0001-75",
        zipcode: "03922-160",
        address: "R DOS FINANCIAIS",
        number: "129",
        district: "PARQUE DOS BANCARIOS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PIRES COM E ESTACIONAMENTO DE VEICULOS LTDA",
        cnpj: "51.947.513/0001-45",
        zipcode: "03871-100",
        address: "AV SÃO MIGUEL 4833",
        number: "",
        district: "ERM MATARAZZO",
        city: "SP",
        state: "SP"
    },
    {
        name: "PISCINE HOME RESORT",
        cnpj: "29.932.885/0001-49",
        zipcode: "06020-190",
        address: "AVENIDA FRANZ VOEGELI",
        number: "900",
        district: "CONTINENTAL",
        city: "Osasco",
        state: "SP"
    },
    {
        name: "PIXIE ARTEMODA EIRELI",
        cnpj: "03.338.320/0001-44",
        zipcode: "03121-020",
        address: "R CAME",
        number: "557",
        district: "MOOCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "KM PIZZA BAR LTDA",
        cnpj: "03.676.108/0001-97",
        zipcode: "04023-061",
        address: "RUA BOTUCATU 347",
        number: "",
        district: "VL CLEMENTINO",
        city: "SP",
        state: "SP"
    },
    {
        name: "PORTOROSE PIZZA E RESTAURANTE LTDA",
        cnpj: "04.344.809/0001-91",
        zipcode: "01411-010",
        address: "R BARAO DE CAPANEMA 348",
        number: "",
        district: "SUMARE",
        city: "SP",
        state: "SP"
    },
    {
        name: "SOCRATES PIZZA BAR LTDA",
        cnpj: "07.451.147/0001-47",
        zipcode: "04671-071",
        address: "R SOCRATES 598",
        number: "",
        district: "CHACARA FLORA",
        city: "SP",
        state: "SP"
    },
    {
        name: "CASUALE ALIMENTOS EIRELI - EPP",
        cnpj: "05.546.363/0001-40",
        zipcode: "05716-060",
        address: "R DOUTOR FONSECA BRASIL",
        number: "282",
        district: "VILA ANDRADE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "COTOXO PIZZA BAR LTDA",
        cnpj: "09.474.468/0001-92",
        zipcode: "05021-001",
        address: "R COTOXO 944",
        number: "",
        district: "POMPEIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "CESAR MOMO COMERCIO DE ALIMENTOS LTDA - EPP",
        cnpj: "52.305.026/0001-41",
        zipcode: "04022-000",
        address: "R ESTADO DE ISRAEL",
        number: "240",
        district: "VILA CLEMENTINO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "U P - PIZZA BAR EIRELI",
        cnpj: "67.727.560/0001-13",
        zipcode: "04090-011",
        address: "ALAMEDA DOS NHAMBIQUARAS",
        number: "573",
        district: "INDIANOPOLIS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MERCATTO PIZZARIA LTDA - ME",
        cnpj: "02.782.870/0001-95",
        zipcode: "05641-000",
        address: "R MARECHAL HASTINFILO MOURA 93",
        number: "",
        district: "VL SUZANA",
        city: "SP",
        state: "SP"
    },
    {
        name: "P J PEREIRA BONFIM ME",
        cnpj: "09.388.559/0001-05",
        zipcode: "08420-585",
        address: "R LUIZ MATEUS 931",
        number: "",
        district: "GUAIANAZES",
        city: "",
        state: ""
    },
    {
        name: "PJ PLASTIKA ARTESANAL E COMERCIAL EIRELI",
        cnpj: "30.095.087/0001-99",
        zipcode: "25243-150",
        address: "EST SAO LOURENCO",
        number: "920",
        district: "CHAC. RIO PETROPOLIS",
        city: "Duque de Caxias",
        state: "RJ"
    },
    {
        name: "PKF AUDITORES INDEPENDENTES",
        cnpj: "10.924.241/0001-80",
        zipcode: "04543-011",
        address: "AV PRESIDENTE JUSCELINO KUBITSCHEK",
        number: "1545",
        district: "VILA NOVA CONCEICAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "P L GOLF CLUBE",
        cnpj: "47.374.616/0001-96",
        zipcode: "07400-970",
        address: "AV PL DO BRASIL",
        number: "SN",
        district: "JAGUARI",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "PLAN MOBILE SOLUÇOES PARA MARCENARIA EIRELI ME",
        cnpj: "22.296.154/0001-05",
        zipcode: "05267-200",
        address: "AV FELIPPO STURBA 1418",
        number: "",
        district: "JD ANHANGUERA",
        city: "SP",
        state: "SP"
    },
    {
        name: "E-BEV S/A",
        cnpj: "17.778.673/0001-70",
        zipcode: "05095-010",
        address: "R ALVARENGA PEIXOTO 246",
        number: "",
        district: "VL ANASTACIO",
        city: "SP",
        state: "SP"
    },
    {
        name: "PLANETA FASHION AVIAMENTOS LTDA",
        cnpj: "18.821.888/0001-99",
        zipcode: "01126-000",
        address: "R JULIO CONCEICAO",
        number: "297",
        district: "BOM RETIRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PLANIK EMPREENDIMENTOS IMOBILIARIOS LTDA",
        cnpj: "52.038.536/0001-08",
        zipcode: "01227-200",
        address: "AV ANGELICA",
        number: "2163",
        district: "HIGIENOPOLIS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PLATINUM FUNDO DE INVESTIMENTO IMOBILIARIO",
        cnpj: "20.118.492/0001-21",
        zipcode: "04543-120",
        address: "RUA DOUTOR EDUARDO DE SOUZA ARANHA",
        number: "153",
        district: "VILA NOVA CONCEICAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PLAST NIPO COMERCIO E RECICLAGEM DE PLASTICO LTDA",
        cnpj: "04.319.855/0001-30",
        zipcode: "02286-000",
        address: "EST PROFESSOR EDMUNDO ROSSET",
        number: "1285",
        district: "SITIO BARROCADA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PLASTICO GUARU IND E COM DE PLASTICOS LTDA",
        cnpj: "02.759.655/0001-73",
        zipcode: "07170-510",
        address: "R JAGUAPITA 45",
        number: "",
        district: "PQ SÃO LUIZ",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "PLASTIN INDUSTRIA E COMERCIO DE TINTAS E VERNIZES LTDA",
        cnpj: "02.972.310/0001-01",
        zipcode: "07251-170",
        address: "R NORALDINO ALVES DE LIMA",
        number: "333",
        district: "BONSUCESSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "PLASTMASTER IND E COM DE EMBALAGENS PLASTICAS LTDA",
        cnpj: "00.628.318/0001-11",
        zipcode: "05307-170",
        address: "R GALILEU EMENDABILE 146",
        number: "",
        district: "JD HUMAITA",
        city: "SP",
        state: "SP"
    },
    {
        name: "PLATINA DISTRIBUIDORA DE ALIMENTOS LTDA",
        cnpj: "07.711.350/0001-05",
        zipcode: "07243-580",
        address: "R JOAO CAVALHEIRO SALEM 260",
        number: "",
        district: "BONSUCESSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "PLINIO BAR E CHOPPERIA LTDA - ME",
        cnpj: "47.621.446/0001-05",
        zipcode: "02512-000",
        address: "R BERNARDINO FANGANIELLO 458",
        number: "",
        district: "CASA VERDE",
        city: "SP",
        state: "SP"
    },
    {
        name: "COMERCIAL DOUGLAS DE PNEUMATICOS LTDA",
        cnpj: "60.748.530/0001-44",
        zipcode: "02031-100",
        address: "AV CRUZEIRO DO SUL",
        number: "2987",
        district: "SANTANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "POKE PARTICIPACOES S.A.",
        cnpj: "31.736.557/0001-19",
        zipcode: "04542-000",
        address: "RUA LEOPOLDO COUTO MAGALHAES JR.",
        number: "480",
        district: "ITAIM BIBI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "POLARE REFRIGERACAO PRODUTOS E SERVICOS EIRELI",
        cnpj: "21.346.172/0001-91",
        zipcode: "02278-050",
        address: "RUA ADALGISA",
        number: "163",
        district: "VILA NILO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "POLEODUTO IND E COM DE FLEXIVEIS E ELETROMECANICOS LTDA",
        cnpj: "72.797.913/0001-91",
        zipcode: "07411-350",
        address: "AV ADILIA BARBOSA NEVES 2000",
        number: "",
        district: "PORTAO",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "RECAUCHUTAGEM POLIGUARA LTDA",
        cnpj: "96.219.126/0001-20",
        zipcode: "08572-610",
        address: "R RIO DE JANEIRO 28",
        number: "",
        district: "VL MIRANDA",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "SANTO ANTONIO POLIMENTOS LTDA",
        cnpj: "58.798.067/0001-01",
        zipcode: "08557-670",
        address: "R JOAO ANTONIO CEBRIAM 268",
        number: "",
        district: "CHAC BELA VISTA",
        city: "Poá",
        state: "SP"
    },
    {
        name: "POLY PETRO LUBRIFICANTES LTDA",
        cnpj: "11.378.430/0001-68",
        zipcode: "07176-005",
        address: "RUA SERVIDAO",
        number: "348",
        district: "JD ALAMO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "POLYMAT PRODUTOS PARA POLIMENTO LTDA",
        cnpj: "68.360.569/0001-00",
        zipcode: "03921-090",
        address: "R FERNANDO NERI 28",
        number: "",
        district: "JD IVA",
        city: "",
        state: ""
    },
    {
        name: "GRUPO POLY POSITION IND E COM LTDA",
        cnpj: "68.057.595/0001-55",
        zipcode: "02443-100",
        address: "R PROF ANESIA SINCORA 250",
        number: "",
        district: "LAUZANE PTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "POOLTEC INDUSTRIA E COMERCIO DE ACESSORIOS PARA PISCINAS LTDA",
        cnpj: "14.120.981/0001-15",
        zipcode: "05846-330",
        address: "R JAGUAJIRA",
        number: "141",
        district: "VILA MARACANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO POP ART",
        cnpj: "09.349.753/0001-81",
        zipcode: "04111-000",
        address: "R DOUTOR NETO DE ARAUJO",
        number: "231",
        district: "VILA MARIANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PORTAL INDUSTRIA E COMERCIO DE VIDROS LTDA",
        cnpj: "05.982.114/0001-06",
        zipcode: "69058-600",
        address: "AV GOVERNADOR JOSE LINDOSO",
        number: "3824",
        district: "NOVO ALEIXO",
        city: "Manaus",
        state: "AM"
    },
    {
        name: "RESIDENCIAL PORTAL DA VILA AUGUSTA",
        cnpj: "05.543.034/0001-46",
        zipcode: "07044-010",
        address: "R DONA OLGA",
        number: "S/N",
        district: "VILA SAO JOAO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "ASSOCIACAO DOS EMPREENDEDORES E CESSIONARIOS DO SHOPPING PORTO BRAS",
        cnpj: "21.371.176/0001-20",
        zipcode: "03031-000",
        address: "R TIERS",
        number: "282",
        district: "PARI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AGRO COMERCIAL PORTO LTDA",
        cnpj: "10.558.126/0001-30",
        zipcode: "05307-190",
        address: "Av. Engenheiro Roberto Zuccolo",
        number: "284",
        district: "VILA LEOPOLDINA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "BBM PORTO BRAS ADMINISTRACAO DE BENS E PARTICIPACOES LTDA",
        cnpj: "20.423.126/0001-86",
        zipcode: "03031-000",
        address: "R TIERS",
        number: "282",
        district: "PARI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "POSITIVA COM DE MARMORES E GRANITOS LTDA",
        cnpj: "18.328.202/0001-22",
        zipcode: "02987-030",
        address: "R ANTONIO DE NAPOLI",
        number: "451",
        district: "TAIPAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AUTO POSTO PRACA OITO DE DEZEMBRO LTDA",
        cnpj: "45.825.551/0001-22",
        zipcode: "07140-230",
        address: "AV OTAVIO BRAGA DE MESQUITA",
        number: "3986",
        district: "TABOAO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "POSTO DE SERVIÇOS ALBATROZ LTDA",
        cnpj: "02.256.256/0001-90",
        zipcode: "02067-060",
        address: "R CASSIO DE ALMEIDA 203",
        number: "",
        district: "VL GUILHERME",
        city: "SP",
        state: "SP"
    },
    {
        name: "AUTO POSTO BOSQUE DA SAUDE LTDA - EPP",
        cnpj: "45.642.204/0001-64",
        zipcode: "04142-091",
        address: "AV BOSQUE DA SAUDE",
        number: "639",
        district: "SAUDE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AUTO POSTO CEMBIRA LTDA",
        cnpj: "43.857.382/0001-87",
        zipcode: "08030-000",
        address: "AV COCA",
        number: "69",
        district: "S MIGUEL PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "POSTO DE SERVICO PADRE ANCHIETA LTDA",
        cnpj: "05.116.574/0001-43",
        zipcode: "02067-060",
        address: "R CASSIO DE ALMEIDA 203",
        number: "",
        district: "VL GUILHERME",
        city: "SP",
        state: "SP"
    },
    {
        name: "AUTO POSTO LINCE LTDA",
        cnpj: "59.929.075/0001-02",
        zipcode: "08411-010",
        address: "R DA PASSAGEM FUNDA",
        number: "650",
        district: "GUAIANASES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AUTO POSTO LUSON EIRELI",
        cnpj: "61.476.586/0001-50",
        zipcode: "04047-001",
        address: "AV SEN CASIMIRO DA ROCHA",
        number: "582",
        district: "MIRANDOPOLIS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "NOVA LAREDO AUTO POSTO LTDA",
        cnpj: "48.469.639/0001-47",
        zipcode: "08022-000",
        address: "AV MARECHAL TITO 1688",
        number: "",
        district: "SÃO MIGUEL PTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "PETROLEO SAO LOURENCO LTDA*",
        cnpj: "00.473.804/0001-08",
        zipcode: "06890-000",
        address: "ROD REGIS BITTENCOURT KM 312,5",
        number: "312",
        district: "PAIOL D MEIO",
        city: "São Lourenço da Serra",
        state: "SP"
    },
    {
        name: "R K REVENDA DE PETROLEO LTDA",
        cnpj: "11.054.206/0001-10",
        zipcode: "29330-000",
        address: "ROD SAFRA X MARATAIZES, ES490",
        number: "KM 23",
        district: "GRAUNA",
        city: "Itapemirim",
        state: "ES"
    },
    {
        name: "AUTO POSTO SOLIMOES LTDA - EPP",
        cnpj: "62.320.239/0001-04",
        zipcode: "01135-000",
        address: "R ANHANGUERA",
        number: "762",
        district: "BARRA-FUNDA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "POUSADA CASARAO DA PRAIA LTDA",
        cnpj: "09.134.612/0001-41",
        zipcode: "11600-200",
        address: "R APIACAS",
        number: "44",
        district: "BOICUCANGA",
        city: "São Sebastião",
        state: "SP"
    },
    {
        name: "DEPARTAMENTO DE AGUAS E ENERGIA ELETRICA - DAEE",
        cnpj: "46.853.800/0039-29",
        zipcode: "03718-090",
        address: "R GUIRA ACANGATARA 70",
        number: "",
        district: "JD SR ONOFRE",
        city: "SP",
        state: "SP"
    },
    {
        name: "MUNICIPIO DE BIRITIBA MIRIM",
        cnpj: "46.523.288/0001-80",
        zipcode: "08940-000",
        address: "R GILDO SEVALLI 257",
        number: "",
        district: "CENTRO",
        city: "BIRITIBA MIRIM",
        state: "SP"
    },
    {
        name: "MUNICIPIO DE ITATIBA",
        cnpj: "50.122.571/0001-77",
        zipcode: "13253-205",
        address: "AV LUCIANO CONSOLINE",
        number: "600",
        district: "JARDIM DE LUCCA",
        city: "Itatiba",
        state: "SP"
    },
    {
        name: "MUNICIPIO DE AGUDO",
        cnpj: "87.531.976/0001-79",
        zipcode: "96540-000",
        address: "AV TIRADENTES",
        number: "1625",
        district: "CENTRO",
        city: "Agudo",
        state: "RS"
    },
    {
        name: "MIGUELAO PROVEDORA DE MATERIAIS LTDA - ME",
        cnpj: "02.852.223/0001-02",
        zipcode: "05783-171",
        address: "R CELSO CUNHA 18 B",
        number: "",
        district: "JD UMUARAMA",
        city: "SP",
        state: "SP"
    },
    {
        name: "PREMIER SHOP IMPORTAÇAO E EXPORTAÇAO LTDA",
        cnpj: "11.872.852/0001-95",
        zipcode: "00000-000",
        address: "AV MARIA COLEHO AGUIAR 215 BL E",
        number: "",
        district: "STO AMARO",
        city: "SP",
        state: "SP"
    },
    {
        name: "ENCARDENADORA PREMIERE EIRELI",
        cnpj: "22.519.935/0001-11",
        zipcode: "03404-000",
        address: "R GUARACIABA 106",
        number: "",
        district: "CHACARA CALIFORNIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "PRESERVA ENGENHARIA LTDA",
        cnpj: "08.613.217/0001-89",
        zipcode: "06705-150",
        address: "R IRIS MEMBERG",
        number: "500",
        district: "VILA JOVINA",
        city: "Cotia",
        state: "SP"
    },
    {
        name: "PRIME DISTRIBUIDORA DE LONAS DE PVC LTDA",
        cnpj: "13.613.323/0001-00",
        zipcode: "07241-270",
        address: "AV SANTA HELENA 845",
        number: "",
        district: "VL PARAISO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "PRIMEIRA HORA CONFECÇOES LTDA",
        cnpj: "50.670.173/0001-95",
        zipcode: "03017-010",
        address: "R DR CARLOS BOTELHO 81",
        number: "",
        district: "BRAS",
        city: "SP",
        state: "SP"
    },
    {
        name: "PRIMEIRO DE MAIO FUTEBOL CLUBE",
        cnpj: "57.588.196/0001-02",
        zipcode: "09040-010",
        address: "AV PORTUGAL",
        number: "79",
        district: "CENTRO",
        city: "Santo André",
        state: "SP"
    },
    {
        name: "PRIMO INDUSTRIAL TERMOPLASTICOS LTDA",
        cnpj: "62.727.680/0001-05",
        zipcode: "03619-100",
        address: "AV SÃO MIGUEL 1615",
        number: "",
        district: "PONTE RASA",
        city: "",
        state: ""
    },
    {
        name: "PRINCE ESTOJOS FINOS LTDA - EPP",
        cnpj: "44.998.680/0001-50",
        zipcode: "02257-070",
        address: "R DR GUILHERME TELLES 141",
        number: "",
        district: "VL CONSTANCIA",
        city: "",
        state: ""
    },
    {
        name: "PRO MANAGER SERVICE LTDA",
        cnpj: "27.870.465/0001-50",
        zipcode: "04773-010",
        address: "AV IPANEMA",
        number: "625",
        district: "VELEIROS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PROGRESSO SERVICOS DE APOIO ADMINISTRATIVO - EIRELI",
        cnpj: "23.098.779/0001-25",
        zipcode: "09521-140",
        address: "RUA PERNAMBUCO",
        number: "425",
        district: "CENTRO",
        city: "São Caetano do Sul",
        state: "SP"
    },
    {
        name: "S M MACON EPP",
        cnpj: "61.663.423/0001-86",
        zipcode: "03717-003",
        address: "AV ASSIS RIBEIRO 3001",
        number: "",
        district: "VL CISPER",
        city: "SP",
        state: "SP"
    },
    {
        name: "DIONYSIOS KONSTANTINOS IGLESIS",
        cnpj: "10.383.353/0001-71",
        zipcode: "03410-000",
        address: "R NOVA JERUSALEM",
        number: "559",
        district: "CHACARA SANTO ANTONIO (ZONA LESTE)",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PSV INDSUTRIA E COM DE MATERIAIS PARA SINALIZAÇAO LTDA",
        cnpj: "21.931.554/0001-82",
        zipcode: "09961-700",
        address: "R ESPIRITO SANTO 288",
        number: "",
        district: "CASA GRANDE",
        city: "Diadema",
        state: "SP"
    },
    {
        name: "TOOCA DA AFRICA CONFECCAO, IMPORTACAO E EXPORTACAO LTDA",
        cnpj: "17.918.456/0001-38",
        zipcode: "03009-010",
        address: "R RODRIGUES DOS SANTOS",
        number: "716",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PUMA SPORTS LTDA.",
        cnpj: "05.406.034/0001-02",
        zipcode: "05319-000",
        address: "AV QUEIROZ FILHO",
        number: "1700",
        district: "VILA HAMBURGUESA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "PUMA COMERCIAL DE METAIS EIRELI - EPP",
        cnpj: "54.908.116/0001-52",
        zipcode: "04224-030",
        address: "R ANTONIO FREDERICO 350",
        number: "",
        district: "VL CARIOCA",
        city: "SP",
        state: "SP"
    },
    {
        name: "GEMINI IND DE INSUMOS FARMACEUTICOS LTDA",
        cnpj: "10.690.195/0002-83",
        zipcode: "09851-720",
        address: "R FAUSTINO NEGRI 273 GALPAO 5",
        number: "",
        district: "COOPERATIVa",
        city: "SBCAMPO",
        state: "SP"
    },
    {
        name: "PURO COURO CONFECCOES LTDA*",
        cnpj: "00.596.472/0001-59",
        zipcode: "05363-070",
        address: "R JAMILE ABRAHAO KALIL",
        number: "43",
        district: "VILA POLOPOLI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "QUALITY PLASTCS IND E COM LTDA",
        cnpj: "74.564.980/0001-91",
        zipcode: "07140-230",
        address: "AV OTAVIO BRAGA DE MESQUITA 3155",
        number: "",
        district: "JD BELA VISTA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "QUALITY PINTURAS E SERVIÇOS EIRELI - ME",
        cnpj: "20.645.977/0001-73",
        zipcode: "07500-000",
        address: "R JOSE AUGUSTO DE SIQUEIRA 122 LOTE 35 COND COUNTRY CLUB",
        number: "",
        district: "LOTEAMENTO VICENTINE",
        city: "Santa Isabel",
        state: "SP"
    },
    {
        name: "Quality Fit - Academia LTDA - ME",
        cnpj: "08.248.862/0001-40",
        zipcode: "04131-000",
        address: "Rua Assungui, 81",
        number: "",
        district: "VL CLEMENTINO",
        city: "",
        state: ""
    },
    {
        name: "SANCHES & CIASI CLINICA ODONTOLOGICA S/S LTDA.",
        cnpj: "12.109.279/0001-25",
        zipcode: "03306-000",
        address: "R JARINU",
        number: "220",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO QUEENELIZABETH",
        cnpj: "64.028.210/0001-70",
        zipcode: "03334-030",
        address: "R BENTO MANUEL 75",
        number: "",
        district: "JD ANALIA FRANCO",
        city: "SP",
        state: "SP"
    },
    {
        name: "WAGNER OLIVEIRA QUEIROZ - ME",
        cnpj: "23.662.339/0001-59",
        zipcode: "07040-000",
        address: "R CONEGO VALADAO",
        number: "1529",
        district: "GOPOUVA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "WAGNER OLIVEIRA QUEIROZ - ME",
        cnpj: "23.662.339/0001-59",
        zipcode: "07040-000",
        address: "R CONEGO VALADAO",
        number: "1529",
        district: "GOPOUVA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "WAGNER OLIVEIRA QUEIROZ - ME",
        cnpj: "23.662.339/0001-59",
        zipcode: "07040-000",
        address: "R CONEGO VALADAO",
        number: "1529",
        district: "GOPOUVA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "R A BARBOSA RECONDICIONAMENTO DE MOTORES NOVA VIDA ME",
        cnpj: "26.247.388/0001-13",
        zipcode: "07175-100",
        address: "R JUAN ALONSO SANCHEZ 139",
        number: "",
        district: "JD CAMPESTRE",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CONDOMINIO RAIZES DA MATA",
        cnpj: "08.422.331/0001-21",
        zipcode: "05716-090",
        address: "R ITAPEMIRUM",
        number: "77",
        district: "VILA ANDRADE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "COMERCIO DE EQUIPAMENTOS ESPORTIVOS RAMPAZO LTDA*",
        cnpj: "12.292.904/0001-17",
        zipcode: "08081-010",
        address: "AVENIDA JOSE MARTINS LISBOA",
        number: "468",
        district: "JARDIM HELENA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "RAPIDO LUXO CAMPINAS LTDA",
        cnpj: "45.992.724/0025-74",
        zipcode: "18705-851",
        address: "AV GOVERNADOR MARIO COVAS",
        number: "331",
        district: "JARDIM PAINEIRAS",
        city: "Avaré",
        state: "SP"
    },
    {
        name: "RAPIDO LUXO CAMPINAS LTDA",
        cnpj: "45.992.724/0001-05",
        zipcode: "06020-190",
        address: "AV FRANZ VOEGELI",
        number: "720",
        district: "CONTINENTAL",
        city: "Osasco",
        state: "SP"
    },
    {
        name: "RAQUEL YOSHIDA SAWADA",
        cnpj: "08.051.238/0001-58",
        zipcode: "08900-000",
        address: "R SAWADA",
        number: "434",
        district: "LAMBARI",
        city: "Guararema",
        state: "SP"
    },
    {
        name: "RBX ALIMENTACAO E SERVICOS EIRELI",
        cnpj: "17.033.316/0001-82",
        zipcode: "03311-050",
        address: "R FRUTUOSO DA COSTA",
        number: "52",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "RC TRANSPORTES LTDA",
        cnpj: "04.409.228/0001-90",
        zipcode: "04776-002",
        address: "AV RIO BONITO",
        number: "1522",
        district: "VILA FRIBURGO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "RCE TECNOLOGIA INDUSTRIAL LTDA",
        cnpj: "03.378.779/0001-71",
        zipcode: "09911-510",
        address: "R CARAMURU 506",
        number: "",
        district: "VL CONCEIÇAO",
        city: "Diadema",
        state: "SP"
    },
    {
        name: "RCR REPRESENTAÇOES E SERVIÇOS LTDA",
        cnpj: "03.262.073/0001-40",
        zipcode: "06765-350",
        address: "R RAPHAEL DE MARCO 300",
        number: "",
        district: "PQ INDL DAS OLIVEIRAS",
        city: "Taboão da Serra",
        state: "SP"
    },
    {
        name: "CENTRO DE REABILITACAO E HIDROTERAPIA CRISTO REI LTDA - ME",
        cnpj: "02.837.486/0001-42",
        zipcode: "03081-010",
        address: "R MARGARIDA DE LIMA",
        number: "4",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "REAL LIGAS METALICAS LTDA",
        cnpj: "67.854.125/0001-50",
        zipcode: "08586-170",
        address: "RUA DO COBRE",
        number: "499",
        district: "CORREDOR",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "CONTINENTAL MIX COM DE ARMARINHOS LTDA EPP",
        cnpj: "11.120.120/0001-49",
        zipcode: "06753-001",
        address: "AV FRANCISCO ETTORE PEDRO MARI 1655",
        number: "",
        district: "JD FREI GALVAO",
        city: "Taboão da Serra",
        state: "SP"
    },
    {
        name: "J. C. DE SOUZA CASA DE REPOUSO - ME",
        cnpj: "23.887.597/0001-33",
        zipcode: "02340-002",
        address: "Avenida Nova Cantareira",
        number: "5622",
        district: "Tucuruvi",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "RECOR IND E COM DE PRODUTOS PARA IMPRESSAO LTDA",
        cnpj: "14.454.311/0001-35",
        zipcode: "07411-670",
        address: "AV NEW JERSEY 1030 GALPAO 01",
        number: "",
        district: "CENTRO INDL ARUJA",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "EPTALAM INDUSTRIA, COMERCIO, IMPORTACAO E EXPORTACAO DE TINTAS LTDA",
        cnpj: "14.454.311/0001-35",
        zipcode: "07400-000",
        address: "AV NEW JERSEY",
        number: "1030",
        district: "CENTRO INDUSTRIAL DE ARUJA",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "RECOR IND E COM DE PRODUTOS P/ IMPRESSOES LTDA",
        cnpj: "14.454.311/0001-35",
        zipcode: "07400-000",
        address: "AV NEW JERSEY 1030 GP 1",
        number: "",
        district: "CENTRO INDL ARUJA",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "RECUPERADORA DE PLASTICOS NOVA CUMBICA EIRELI",
        cnpj: "09.650.269/0001-98",
        zipcode: "07222-020",
        address: "R CECILIA ROIZEN 250Q",
        number: "",
        district: "CID IND SATELITE",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "REDE ANCORA - SP IMP EXP DIST DE SUTO PEÇAS S/A",
        cnpj: "02.596.357/0001-00",
        zipcode: "05133-005",
        address: "RUA JOAQUIM OLIVEIRA FREITAS 2188",
        number: "",
        district: "PIRITUBA",
        city: "SP",
        state: "SP"
    },
    {
        name: "REER IND E COM DE PLASTICOS LTDA",
        cnpj: "08.816.633/0001-84",
        zipcode: "07175-180",
        address: "R GUILHERME CIMIERE 470",
        number: "",
        district: "BONSUCESSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "REFERENCE MUSIC CENTER LTDA",
        cnpj: "02.907.469/0001-34",
        zipcode: "05406-000",
        address: "R TEODORO SAMPAIO 806",
        number: "",
        district: "PINHEIROS",
        city: "SP",
        state: "SP"
    },
    {
        name: "JOSEFA DE ALENCAR BATISTA ME",
        cnpj: "14.277.145/0001-49",
        zipcode: "03822-000",
        address: "R OLAVO EGIDIO DE OSUZA ARANHA 1348 B",
        number: "",
        district: "VL CISPER",
        city: "",
        state: ""
    },
    {
        name: "REGATTIERI DISTRIBUIDORA DE TINTAS LTDA",
        cnpj: "01.864.064/0001-01",
        zipcode: "02731-060",
        address: "AV MIGUEL CONEJO 1125",
        number: "",
        district: "FREGUESIA DO O",
        city: "SP",
        state: "SP"
    },
    {
        name: "GAIA ALIMENTOS LTDA",
        cnpj: "07.883.033/0002-57",
        zipcode: "03066-030",
        address: "R GONÇALVES CRESPO 78 3 ANDAR LOJA 315",
        number: "",
        district: "TATUAPE",
        city: "SP",
        state: "SP"
    },
    {
        name: "REINO DA GAROTADA DE POA",
        cnpj: "55.026.231/0001-66",
        zipcode: "08550-000",
        address: "R SÃO FRANCISCO",
        number: "168",
        district: "Centro",
        city: "Poá",
        state: "SP"
    },
    {
        name: "REMAFER INDUSTRIA E COMERCIO DE FERRO E ACO LTDA",
        cnpj: "01.001.876/0001-15",
        zipcode: "08090-330",
        address: "R CONCEICAO DE MINAS",
        number: "60",
        district: "JARDIM HELENA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "REDE NACIONAL DE APRENDIZAGEM PROMOÇAO SOCIAL E INTEGRAÇAO - RENAPSI",
        cnpj: "37.381.902/0004-78",
        zipcode: "01034-000",
        address: "R ANTONIO DE GODOI 88 - 10 ANDAR",
        number: "",
        district: "CENTRO",
        city: "SP",
        state: "SP"
    },
    {
        name: "RESICOLOR INDUSTRIA DE PRODUTOS QUIMICOS LTDA",
        cnpj: "95.800.637/0001-79",
        zipcode: "88860-000",
        address: "ROD PADRE HERVAL FONTANELLA",
        number: "580",
        district: "DISTRITO INDUSTRIAL",
        city: "Siderópolis",
        state: "SC"
    },
    {
        name: "RESICRYL INDUSTRIA E COMERCIO LTDA.",
        cnpj: "66.703.745/0001-25",
        zipcode: "18147-000",
        address: "ROD GREGORIO SPINA",
        number: "1750",
        district: "DA RONDA",
        city: "Araçariguama",
        state: "SP"
    },
    {
        name: "BALI EMPREENDIMENTO IMOBILIARIO LTDA",
        cnpj: "16.806.350/0001-80",
        zipcode: "11250-000",
        address: "R MANOEL REIS",
        number: "45",
        district: "AGAO",
        city: "Bertioga",
        state: "SP"
    },
    {
        name: "CONDOMINIO RESIDENCIAL FLORENCA",
        cnpj: "17.320.246/0001-43",
        zipcode: "03449-020",
        address: "R FELISBINA FERREIRA",
        number: "280",
        district: "VILA CARRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "EDIFICIO RESIDENCIAL LYON",
        cnpj: "18.354.603/0001-57",
        zipcode: "09551-000",
        address: "R FLORIDA 314",
        number: "",
        district: "BARCELONA",
        city: "São Caetano do Sul",
        state: "SP"
    },
    {
        name: "RESIDENCIAL RAFAEL",
        cnpj: "05.405.736/0001-63",
        zipcode: "03821-140",
        address: "R APAURA",
        number: "75",
        district: "VILA SYLVIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "RESTAURANTE 3 SSS LTDA - ME",
        cnpj: "23.371.823/0001-29",
        zipcode: "08042-290",
        address: "R MOACIR DANTAS ITAPICURU",
        number: "48",
        district: "CIDADE NOVA SAO MIGUEL",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "QUINTA D'AIRES RESTAURANTES LTDA",
        cnpj: "30.216.265/0001-92",
        zipcode: "04795-000",
        address: "AV DAS NACOES UNIDAS",
        number: "22540",
        district: "VILA ALMEIDA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "FUJITA RESTAURANTE CHOP. E PETISC. LTDA - EPP",
        cnpj: "01.208.757/0001-38",
        zipcode: "03802-000",
        address: "AV BOTURUSSU 204",
        number: "",
        district: "ERM MATARAZZO",
        city: "SP",
        state: "SP"
    },
    {
        name: "RESTAURANTE JARDIM PAULISTA LTDA",
        cnpj: "08.491.259/0001-94",
        zipcode: "01404-001",
        address: "AL CAMPINAS",
        number: "668",
        district: "CERQUEIRA CESAR",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "RESTAURANTE JARDIM PAULISTA LTDA",
        cnpj: "08.491.259/0001-94",
        zipcode: "01404-200",
        address: "ALAMENDA CAMPINAS 668",
        number: "",
        district: "CERQ CESAR",
        city: "SP",
        state: "SP"
    },
    {
        name: "RESTAURANTE LAR DOCE LAR LTDA",
        cnpj: "12.842.782/0001-95",
        zipcode: "02049-900",
        address: "AV OTTO BAUMGART",
        number: "500",
        district: "VILA GUILHERME",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "RETENTORES INHASZ IND E COM LTDA",
        cnpj: "60.847.282/0001-99",
        zipcode: "02714-050",
        address: "R ENGENHEIRO JOSE PASTORE",
        number: "235",
        district: "LIMAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "RETIFICA BARREIRO LTDA - ME",
        cnpj: "61.155.537/0001-15",
        zipcode: "02181-140",
        address: "R ARAGUA 76",
        number: "",
        district: "PQ NOVO MUNDO",
        city: "SP",
        state: "SP"
    },
    {
        name: "SHALLON COM DE PEÇAS E SERVIÇOS LTDA ME",
        cnpj: "61.240.040/0001-03",
        zipcode: "03819-180",
        address: "R NONAI 01",
        number: "",
        district: "VL CISPER",
        city: "SP",
        state: "SP"
    },
    {
        name: "BGM INDUSTRIA E COMERCIO DE ALIMENTOS - EIRELI",
        cnpj: "07.173.322/0001-81",
        zipcode: "61760-000",
        address: "R IPU",
        number: "1151",
        district: "PRECABURA",
        city: "Eusébio",
        state: "CE"
    },
    {
        name: "RI-MAX ESQUADRIAS DE ALUMINIO LTDA",
        cnpj: "13.778.129/0001-77",
        zipcode: "67670-20",
        address: "R ERNESTO ROSA DA FONSECA 380",
        number: "",
        district: "PQ PINHEIROS",
        city: "Taboão da Serra",
        state: "SP"
    },
    {
        name: "EMPRESA DE TURISMO RIO NEGRO LTDA",
        cnpj: "54.449.699/0001-09",
        zipcode: "08160-000",
        address: "EST D JOAO NERY",
        number: "990",
        district: "ITAIM PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "RISK INDUSTRIA E COMERCIO DE PRODUTOS ALIMENTICIOS EIRELI",
        cnpj: "08.977.108/0001-40",
        zipcode: "06703-600",
        address: "RUA VASCO MASSAFELI",
        number: "1000",
        district: "JARDIM MARIA TERESA",
        city: "Cotia",
        state: "SP"
    },
    {
        name: "RIVER SHOW AUTO POSTO LTDA",
        cnpj: "05.778.383/0001-47",
        zipcode: "14075-600",
        address: "AV MARECHAL COSTA E SILVA 5630",
        number: "",
        district: "VL BRASIL",
        city: "Ribeirão Preto",
        state: "SP"
    },
    {
        name: "R K DERIVADO DE PETROLEO LTDA",
        cnpj: "30.694.875/0001-00",
        zipcode: "29330-000",
        address: "ROD SAFRA X MARATAIZES ES 490",
        number: "KM 15",
        district: "GARRAFAO",
        city: "Itapemirim",
        state: "ES"
    },
    {
        name: "R LIMA & A CUKIER SOCIEDADE DE ADVOGADOS",
        cnpj: "09.546.618/0001-26",
        zipcode: "01452-002",
        address: "AV BRIGADEIRO FARIA LIMA 1306 4 ANDAR",
        number: "",
        district: "JD PAULISTANO",
        city: "",
        state: ""
    },
    {
        name: "MACHADO E GIMENES INDUSTRIA E COM DE MOVEIS LTDA",
        cnpj: "10.827.143/0001-25",
        zipcode: "17280-000",
        address: "R RIACHUELO 351 SUL",
        number: "",
        district: "CENTRO",
        city: "Pederneiras",
        state: "SP"
    },
    {
        name: "RM ZSIGA RESTAURANTE EPP",
        cnpj: "14.913.589/0001-23",
        zipcode: "01228-000",
        address: "AV ANGELICA S/N - 310",
        number: "",
        district: "HIGIENOPOLIS",
        city: "",
        state: ""
    },
    {
        name: "ROBSON DA SILVA NERES",
        cnpj: "24.999.293/0001-20",
        zipcode: "64207-005",
        address: "AV SAO SEBASTIAO (L PAR)",
        number: "4024",
        district: "FREI HIGINO",
        city: "Parnaíba",
        state: "PI"
    },
    {
        name: "RNN IND E COM DE PEÇAS LTDA",
        cnpj: "00.946.265/0001-87",
        zipcode: "07170-490",
        address: "R UIRAUNA 62",
        number: "",
        district: "PQ SÃO LUIZ",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "RODNEY DA SILVA OLIVEIRA - ME",
        cnpj: "24.922.322/0002-37",
        zipcode: "03871-000",
        address: "AV SÃO MIGUEL 5483 SALA J",
        number: "",
        district: "PQ BOTURUSSU",
        city: "",
        state: ""
    },
    {
        name: "RODOJAN TRANSPORTES LTDA",
        cnpj: "43.566.686/0001-95",
        zipcode: "01108-000",
        address: "AV DO ESTADO 250",
        number: "",
        district: "BOM RETIRO",
        city: "SP",
        state: "SP"
    },
    {
        name: "RODOPEÇAS LTDA",
        cnpj: "47.964.168/0003-42",
        zipcode: "13068-601",
        address: "R BATISTA RAFFI 853",
        number: "",
        district: "DIST NOVA APARECIDA",
        city: "Campinas",
        state: "SP"
    },
    {
        name: "RODORUMO LOGISTICA E TRANSPORTES EIRELI",
        cnpj: "03.724.034/0001-17",
        zipcode: "03362-000",
        address: "R ARAPOCA",
        number: "311",
        district: "VILA FORMOSA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VILA REAL ENGENHARIA E CONSTRUCOES LTDA",
        cnpj: "02.079.939/0001-19",
        zipcode: "02402-400",
        address: "R VOLUNTARIOS DA PATRIA",
        number: "3744",
        district: "SANTANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ROGUI ENGENHARIA E CONSTRUÇOES LTDA",
        cnpj: "00.632.245/0001-31",
        zipcode: "06233-150",
        address: "RUA ANDRE ROVAI 801",
        number: "",
        district: "BONFIM",
        city: "Osasco",
        state: "SP"
    },
    {
        name: "ROSCACORTE PARAFUSOS E FERRAMENTAS LTDA",
        cnpj: "01.185.229/0001-00",
        zipcode: "04805-310",
        address: "R MARTINOPOLIS",
        number: "248",
        district: "CIDADE DUTRA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "HELEN NICE NESPOLI DA SILVA ME",
        cnpj: "04.229.790/0001-32",
        zipcode: "03717-000",
        address: "AV ASSIS RIBEIRO 03",
        number: "",
        district: "VL STA INES",
        city: "SP",
        state: "SP"
    },
    {
        name: "ROYAL MAX INTERNACIONAL LTDA.",
        cnpj: "66.958.109/0001-44",
        zipcode: "01214-100",
        address: "AVENIDA DUQUE DE CAXIAS",
        number: "99",
        district: "SANTA IFIGENIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "RUDY CESAR SANTOS INFORMATICA - ME",
        cnpj: "15.307.014/0001-20",
        zipcode: "02260-000",
        address: "AV LUIS STAMATIS 362 - 4 ANDAR SALA 42",
        number: "",
        district: "JACANA",
        city: "",
        state: ""
    },
    {
        name: "RRW CRISTAL PAES E DOCES LTDA",
        cnpj: "12.536.003/0001-23",
        zipcode: "03810-110",
        address: "R ABEL TAVARES",
        number: "3003",
        district: "JARDIM MATARAZZO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MERCADO E AÇOUGUE RTN LTDA",
        cnpj: "04.745.390/0001-80",
        zipcode: "01104-000",
        address: "R SÃO CAETANO",
        number: "352",
        district: "LUZ",
        city: "",
        state: ""
    },
    {
        name: "RUBENS SOUSA BARBOSA - ME",
        cnpj: "21.760.730/0001-60",
        zipcode: "03817-000",
        address: "R CAICARA DO RIO DO VENTO 835",
        number: "",
        district: "PQ CISPER",
        city: "SP",
        state: "SP"
    },
    {
        name: "RUMMO SERVIÇOS TEMPORARIOS LTDA ME",
        cnpj: "03.925.191/0001-90",
        zipcode: "02074-002",
        address: "R GUARANESIA 1276",
        number: "",
        district: "VL MARIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "RUSSO SERVICOS LIVRARIA PAPELARIA DISTRIBUIDORA EIRELI",
        cnpj: "28.468.606/0001-75",
        zipcode: "05073-010",
        address: "R BR JUNDIAI",
        number: "523",
        district: "LAPA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "RUSTIC CONFECÇOES LTDA - ME",
        cnpj: "57.815.482/0001-55",
        zipcode: "03651-040",
        address: "R CECILIA 421",
        number: "",
        district: "VL ESPERANÇA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SAAEDOCO SERVICO AUTONOMO DE AGUA E ESGOTOS DE DOIS CORREGOS",
        cnpj: "02.701.029/0001-26",
        zipcode: "17300-000",
        address: "R JOAO DE OLIVEIRA SIMOES",
        number: "862",
        district: "CENTRO",
        city: "Dois Córregos",
        state: "SP"
    },
    {
        name: "SACOLAO HORT VIDA SOCORRO LTDA",
        cnpj: "28.846.433/0002-62",
        zipcode: "04858-002",
        address: "AVENIDA SENADOR TEOTONIO VILELA",
        number: "8.928",
        district: "JARDIM CASA GRANDE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SEI TABATINGUERA EMPREENDIMENTO IMOBILIARIO SPE LTDA",
        cnpj: "14.590.700/0001-98",
        zipcode: "01020-000",
        address: "R TABATINGUERA 462 - OBRA SETIN DOWNTOWN PRAÇA DA SE",
        number: "",
        district: "CENTRO",
        city: "SP",
        state: "SP"
    },
    {
        name: "CARLOS SAKAMOTO E OUTROS",
        cnpj: "08.060.418/0001-04",
        zipcode: "08772-990",
        address: "EST DO TABOAO KM 13,5",
        number: "S/N",
        district: "LAMBARI",
        city: "Mogi das Cruzes",
        state: "SP"
    },
    {
        name: "CIRURGICA SALUTAR EIRELI*",
        cnpj: "26.289.547/0001-42",
        zipcode: "02405-001",
        address: "R AUGUSTO TOLLE",
        number: "730",
        district: "SANTANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SALUTEM COMERCIO DE MOVEIS HOSPITALARES EIRELI",
        cnpj: "20.451.726/0001-58",
        zipcode: "02413-000",
        address: "AV ENG CAETANO ALVARES",
        number: "4548",
        district: "IMIRIM",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SAN-SIL COMÉRCIO DE ARMARINHOS LTDA - ME",
        cnpj: "07.082.798/0002-98",
        zipcode: "05775-200",
        address: "AV LEITAO CUNHA 2422 C",
        number: "",
        district: "PQ REGINA",
        city: "",
        state: ""
    },
    {
        name: "SANACO COMERCIO DE FERRO E ACO LTDA",
        cnpj: "08.288.517/0001-30",
        zipcode: "04225-030",
        address: "R LICIO DE MIRANDA",
        number: "490",
        district: "IPIRANGA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SANITAS MOVEIS HOSPITALARES EIRELI*",
        cnpj: "20.453.993/0001-64",
        zipcode: "02633-000",
        address: "AV PERI RONCHETTI",
        number: "561",
        district: "JARDIM PERI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SANITAS MOVEIS HOSPITALARES EIRELI",
        cnpj: "20.453.993/0002-45",
        zipcode: "02652-052",
        address: "R FORTE DE SAO CAETANO",
        number: "185",
        district: "JARDIM PERI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SAN SIL COM DE ARMARINHOS LTDA - MATRIZ",
        cnpj: "07.082.798/0001-07",
        zipcode: "05894-400",
        address: "RUA POVOA DE VARZIM 211",
        number: "",
        district: "JD MACEDONIA",
        city: "",
        state: ""
    },
    {
        name: "SAN SIL COM DE ARMARINHOS LTDA - FILIAL",
        cnpj: "07.082.798/0002-98",
        zipcode: "00000-000",
        address: "RUA PE JOAQUIM CORREIA DE ALMEIDA 270",
        number: "",
        district: "PQ ARARIBA",
        city: "",
        state: ""
    },
    {
        name: "SANTA CASA DE MISERICORDIA DE SANTO AMARO",
        cnpj: "57.038.952/0001-11",
        zipcode: "04743-030",
        address: "R ISABEL SCHIMIDT 59",
        number: "",
        district: "SANTO AMARO",
        city: "SP",
        state: "SP"
    },
    {
        name: "SANTA LUZIA MOVEIS HOSPITALARES LTDA",
        cnpj: "48.901.490/0001-23",
        zipcode: "02413-200",
        address: "AV ENGENHEIRO CAETANO ALVARES 6300",
        number: "",
        district: "IMIRIM",
        city: "SP",
        state: "SP"
    },
    {
        name: "SUPPORTE INDUSTRIA E COMERCIO DE MOVEIS DE METAL EIRELI*",
        cnpj: "23.807.552/0001-01",
        zipcode: "02998-050",
        address: "AVENIDA PROFESSOR MIGUEL FRANCHINI NETO",
        number: "400",
        district: "LOTEAMENTO CITY JARAGUA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SANTALENA EMPREITEIRA DE CONSTRUCAO CIVIL EIRELI",
        cnpj: "16.858.702/0001-40",
        zipcode: "05791-070",
        address: "RUA FRANCISCO CAMINHOA",
        number: "162",
        district: "JARDIM MITSUTANI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SANTECNO MAQUINAS EQUIPAMENTOS LTDA",
        cnpj: "04.249.146/0012-6",
        zipcode: "08574-070",
        address: "R PARANAVAI 352",
        number: "",
        district: "VL FLORINDO",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "SANTO COM E IMPORTAÇAO DE PROD ALIMENTICIOS LTDA",
        cnpj: "50.368.976/0003-51",
        zipcode: "18055-215",
        address: "AV ELIAS MALUF 1835",
        number: "",
        district: "WANEL VILLE",
        city: "Sorocaba",
        state: "SP"
    },
    {
        name: "SANUTRIN ALIMENTACAO PARA ESTUDANTES LTDA",
        cnpj: "08.980.035/0001-46",
        zipcode: "13280-000",
        address: "EST DA BOIADA",
        number: "2410",
        district: "NOVA VINHEDO",
        city: "Vinhedo",
        state: "SP"
    },
    {
        name: "SÃO JOSE IND E COM DE PLASTICOS LTDA",
        cnpj: "08.290.183/0001-39",
        zipcode: "07175-110",
        address: "R VENEZA 290",
        number: "",
        district: "JD CAMPESTRE",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "COMERCIO DE APARAS DE PLASTICOS VENEZA EIRELI - ME*",
        cnpj: "11.000.192/0001-52",
        zipcode: "07175-110",
        address: "R VENEZA",
        number: "310",
        district: "JARDIM CAMPESTRE",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "SARRUC CONFECÇOES LTDA",
        cnpj: "57.761.801/0019-7",
        zipcode: "02520-000",
        address: "AV CASA VERDE 538",
        number: "",
        district: "CASA VERDE",
        city: "SP",
        state: "SP"
    },
    {
        name: "PDG SP 2 INCORPORACOES SPE LTDA.",
        cnpj: "11.837.131/0001-44",
        zipcode: "00000-000",
        address: "R GUANDU 44",
        number: "",
        district: "VL REJENTE FEIJO",
        city: "SP",
        state: "SP"
    },
    {
        name: "SECOND SKIN ENVELOPAMENTO PREMIUM EIRELI - EPP",
        cnpj: "14.934.352/0001-29",
        zipcode: "04089-011",
        address: "AL DOS MARACATINS",
        number: "549",
        district: "INDIANOPOLIS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "INTER-MAIL EIRELI",
        cnpj: "03.096.267/0002-01",
        zipcode: "04743-020",
        address: "R PROMOTOR GABRIEL NETUZZI PEREZ",
        number: "437",
        district: "SANTO AMARO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SEDYLUX SERV ADMINISTRATIVOS LTDA",
        cnpj: "04.187.881/0001-52",
        zipcode: "01003-000",
        address: "R JOSE BONIFACIO 24 CJ 131",
        number: "",
        district: "SE",
        city: "SP",
        state: "SP"
    },
    {
        name: "SEFER COMERCIAL DE AÇO LTDA - ME",
        cnpj: "09.592.168/0001-08",
        zipcode: "04224-030",
        address: "R ANTONIO FREDERICO",
        number: "478",
        district: "IPIRANGA",
        city: "",
        state: ""
    },
    {
        name: "SELCON SISTEMAS ELETRONICOS DE CONTROLE LTDA",
        cnpj: "56.935.877/0001-29",
        zipcode: "04284-000",
        address: "R AMERICO SAMARONE 502",
        number: "",
        district: "VL MOINHO VELHO",
        city: "SP",
        state: "SP"
    },
    {
        name: "SELECT COLOR ARTES GRAFICAS LTDA",
        cnpj: "00.844.676/0001-61",
        zipcode: "03021-000",
        address: "R CATUMBI 62",
        number: "",
        district: "CATUMBI",
        city: "SP",
        state: "SP"
    },
    {
        name: "SEMAPI CONSULTORIA LTDA",
        cnpj: "63.996.060/0001-26",
        zipcode: "01419-100",
        address: "AL SANTOS 1787 CJ 91 - 9 ANDAR",
        number: "",
        district: "JD PAULISTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SERVICO NACIONAL DE APRENDIZAGEM COMERCIAL - SENAC ARRJ",
        cnpj: "03.672.347/0001-79",
        zipcode: "22230-060",
        address: "R MARQUES DE ABRANTES",
        number: "99",
        district: "FLAMENGO",
        city: "Rio de Janeiro",
        state: "RJ"
    },
    {
        name: "SERVICO NACIONAL DE APRENDIZAGEM COMERCIAL SENAC",
        cnpj: "03.709.814/0085-04",
        zipcode: "12403-610",
        address: "R SUICA",
        number: "1255",
        district: "SANTANA",
        city: "Pindamonhangaba",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 01 VL CARRAO",
        cnpj: "06.057.223/0246-07",
        zipcode: "03445-050",
        address: "R MANILHA 42 PARTE 1",
        number: "",
        district: "VL CARRAO",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 02 CASA VERDE",
        cnpj: "06.057.223/0245-18",
        zipcode: "02552-044",
        address: "AV ENGENHEIRO CAETANO ALVARES 1927 PARTE 1",
        number: "",
        district: "VL BANDEIRANTES",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 03 SÃO MIGUEL PAULISTA",
        cnpj: "06.057.223/0243-56",
        zipcode: "08010-090",
        address: "AV MARECHAL TITO 1300 PARTE 1",
        number: "",
        district: "SÃO MIGUEL PTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 04 GUARULHOS",
        cnpj: "06.057.223/0275-33",
        zipcode: "07091-000",
        address: "R NOSSA SENHORA MAE DOS HOMENS 1258 PARTE 1",
        number: "",
        district: "VL PROGRESSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 05 SANTO AMARO",
        cnpj: "06.057.223/0249-41",
        zipcode: "04795-100",
        address: "AV DAS NAÇOES UNIDAS 21883 PARTE 1",
        number: "",
        district: "VL ALMEIDA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 06 TATUAPE",
        cnpj: "06.057.223/0269-95",
        zipcode: "03086-035",
        address: "AV CONDESSA ELIZABETH DE ROBIANO 2176/2186 PARTE 1",
        number: "",
        district: "PQ SÃO JORGE",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 07 SANTOS",
        cnpj: "06.057.223/0232-01",
        zipcode: "11085-200",
        address: "AV NOSSA SENHORA DE FATIMA 50 PARTE 1",
        number: "",
        district: "SABOO",
        city: "Santos",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 08 VL SONIA",
        cnpj: "06.057.223/0242-75",
        zipcode: "05521-200",
        address: "AV PROF FRANCISCO MORATO 4367 PARTE 1",
        number: "",
        district: "VL SONIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 09 OSASCO",
        cnpj: "06.057.223/0266-42",
        zipcode: "06020-015",
        address: "AV DOS AUTONOMISTAS 1687 PARTE 1",
        number: "",
        district: "VL YARA",
        city: "Osasco",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 10 SBCAMPO",
        cnpj: "06.057.223/0271-00",
        zipcode: "09891-401",
        address: "AV PIRAPORINHA 680 PARTE 1",
        number: "",
        district: "PLANALTO",
        city: "SBCAMPO",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 11 DUTRA",
        cnpj: "06.057.223/0273-71",
        zipcode: "07013-000",
        address: "AV ANIELLO PRATICI 494 PARTE 1",
        number: "",
        district: "JD SANTA FRANCISCA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 112 TABOAO DA SERRA",
        cnpj: "06.057.223/0244-37",
        zipcode: "06768-000",
        address: "RODOVIA REGIS BITTENCOURT 3040",
        number: "",
        district: "CENTRO",
        city: "Taboão da Serra",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 12 JUNDIAI",
        cnpj: "06.057.223/0272-90",
        zipcode: "13201-005",
        address: "R QUINZE DE NOVEMBRO 430/456 PARTE 1",
        number: "",
        district: "CENTRO",
        city: "Jundiaí",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 121 SJCAMPOS",
        cnpj: "06.057.223/0298-20",
        zipcode: "12237-823",
        address: "AV DR SEBASTIAO HENRIQUE DA CUNHA PONTES 4600 QD 24 LOTE 10/",
        number: "",
        district: "PALMEIRAS DE SÃO JOSE",
        city: "São José dos Campos",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 124 JACU PESSEGO",
        cnpj: "06.057.223/0239-70",
        zipcode: "08050-099",
        address: "AV JACU PESSEGO (NOVA TRABALHADORES) 750",
        number: "",
        district: "VL JACUI",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 13 SOROCABA",
        cnpj: "06.057.223/0278-86",
        zipcode: "18023-000",
        address: "RODOVIA RAPOSO TAVARES S/N KM 99 P/M PARTE 1",
        number: "",
        district: "VL ARTURA",
        city: "Sorocaba",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 14 RIBEIRAO PRETO",
        cnpj: "06.057.223/0231-12",
        zipcode: "14095-000",
        address: "AV PRESIDENTE CASTELO BRANCO 2395 PARTE 1",
        number: "",
        district: "PQ INDUSTRIA LAGOINHA",
        city: "Ribeirão Preto",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 15 COTIA",
        cnpj: "06.057.223/0265-61",
        zipcode: "06713-000",
        address: "ESTRADA DO EMBU 162 PARTE 1",
        number: "",
        district: "JD TORINO",
        city: "Cotia",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 16 SANTO ANDRE",
        cnpj: "06.057.223/0241-94",
        zipcode: "09210-570",
        address: "R VISCONDE DE TAUNAY 216 PARTE 1",
        number: "",
        district: "CENTRO",
        city: "Santo André",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 17 SAPOPEMBA",
        cnpj: "06.057.223/0256-70",
        zipcode: "03988-000",
        address: "AV SAPOPEMBA 9250 PARTE 1",
        number: "",
        district: "JD PLANALTO",
        city: "",
        state: ""
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 18 JOAO DIAS",
        cnpj: "06.057.223/0264-60",
        zipcode: "05802-140",
        address: "AV GUIDO CALOI 25 BL 2 PARTE 1",
        number: "",
        district: "JD SÃO LUIZ",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 19 ITAQUERA",
        cnpj: "06.057.223/0252-47",
        zipcode: "03589-010",
        address: "AV SYLVIO TORRES 190 PARTE 1",
        number: "",
        district: "CJ HAB PE ANCHIETA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 20 JAÇANA",
        cnpj: "06.057.223/0259-13",
        zipcode: "02260-000",
        address: "AV LUIS STAMATIS 35 PARTE 1",
        number: "",
        district: "VL CONSTANÇA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 21 LIMEIRA",
        cnpj: "06.057.223/0293-15",
        zipcode: "13480-158",
        address: "LARGO JOSE BONIFACIO 149 PARTE 1",
        number: "",
        district: "CENTRO",
        city: "Limeira",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 22 JAGUARE",
        cnpj: "06.057.223/0261-38",
        zipcode: "05346-000",
        address: "AV JAGUARE 925 PARTE 1",
        number: "",
        district: "JAGUARE",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUILDORA S/A LOJA 24 RIO CLARO",
        cnpj: "06.057.223/0307-55",
        zipcode: "13503-183",
        address: "AV PRESIDENTE TRANCREDO DE ALMEIDA NEVES 450 PARTE 1",
        number: "",
        district: "CID CLARET",
        city: "Rio Claro",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 25 CARAGUATATUBA",
        cnpj: "06.057.223/0267-23",
        zipcode: "11660-971",
        address: "AV PRICILIANA DE CASTILHO 127 N. 840 PARTE 1",
        number: "",
        district: "CENTRO",
        city: "Caraguatatuba",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 26 ITAIM PAULISTA",
        cnpj: "06.057.223/0254-09",
        zipcode: "08115-100",
        address: "AV MARECHAL TITO 5599 PARTE 1",
        number: "",
        district: "ITAIM PAULISTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 31 JABAQUARA",
        cnpj: "06.057.223/0236-27",
        zipcode: "04346-040",
        address: "R TAQUARUCU 79/99 PARTE 1",
        number: "",
        district: "VL PQ JABAQUARA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 32 NORDESTINA",
        cnpj: "06.057.223/0251-66",
        zipcode: "08032-000",
        address: "AV NORDESTINA 3077 PARTE 1",
        number: "",
        district: "VL NOVA CURUÇA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 38 PRAIA GRANDE",
        cnpj: "06.057.223/0292-34",
        zipcode: "11705-000",
        address: "AV PRESIDENTE KENNEDY S/N PARTE 1",
        number: "",
        district: "MIRIM",
        city: "Praia Grande",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 39 AMOREIRAS",
        cnpj: "06.057.223/0316-46",
        zipcode: "13060-192",
        address: "AV RUY RODRIGUEZ 1700 BL B PARTE 1",
        number: "",
        district: "JD NOVO CPOS ELISEOS",
        city: "Campinas",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 45 BARRA FUNDA",
        cnpj: "06.057.223/0268-04",
        zipcode: "01139-002",
        address: "AV MARQUES DE SÃO VICENTE 1354 PARTE 1",
        number: "",
        district: "VARZEA DA BARRA FUNDA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 48 SÃO CAETANO DO SUL",
        cnpj: "06.057.223/0312-12",
        zipcode: "09521-320",
        address: "R SENADOR VERGUEIRO 428/498 PARTE 1",
        number: "",
        district: "CENTRO",
        city: "São Caetano do Sul",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA /A LOJA 49 AGUIA DE HAIA",
        cnpj: "06.057.223/0253-28",
        zipcode: "03694-000",
        address: "AV AGUIA DE HAIA 2636 PARTE 1",
        number: "",
        district: "PQ PAINEIRAS",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 50 ITAVUVU",
        cnpj: "06.057.223/0258-32",
        zipcode: "18076-005",
        address: "AV ITAVUVU 1766 PARTE 1",
        number: "",
        district: "JD MARIA ANTONIA PRADO",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 500 SEDE",
        cnpj: "06.057.223/0305-93",
        zipcode: "03527-000",
        address: "AV ARICANDUVA 5555 ANCORA E",
        number: "",
        district: "VL ARICANDUVA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORAS/A LOJA 53 PENHA",
        cnpj: "06.057.223/0260-57",
        zipcode: "03704-900",
        address: "AV CONDESSA ELIZABETH ROBIANO 5500 PARTE 1",
        number: "",
        district: "JD AMERICA DA PENHA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 58 RIBEIRAO PIRES",
        cnpj: "06.057.223/0287-77",
        zipcode: "09406-300",
        address: "AV FRANCISCO MONTEIRO 1941 PARTE 1",
        number: "",
        district: "SANTANA",
        city: "Ribeirão Pires",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 59 PRAIA GRANDE SHOPPING",
        cnpj: "06.057.223/0294-04",
        zipcode: "11726-000",
        address: "AV AYRTON SENNA DA SILVA 1511 PARTE 2",
        number: "",
        district: "SITIO DO CAMPO",
        city: "Praia Grande",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 60 GUAIANAZES",
        cnpj: "06.057.223/0255-90",
        zipcode: "08151-000",
        address: "ESTRADA DOM JOAO NERY 4031 PARTE 1",
        number: "",
        district: "JD BARTIRA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 61 BAURU",
        cnpj: "06.057.223/0311-31",
        zipcode: "17010-040",
        address: "R GENERAL MARCONDES SALGADO QUADRA 8-55 ESQUINA COM AV NAÇOE",
        number: "",
        district: "CENTRO",
        city: "Bauru",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 63 RIBEIRAO PRETO ROT",
        cnpj: "06.057.223/0270-29",
        zipcode: "14090-260",
        address: "AV TREZE DE MAIO 92",
        number: "",
        district: "JD PAULISTA",
        city: "Ribeirão Preto",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 64 FREGUESIA DO O",
        cnpj: "06.057.223/0238-99",
        zipcode: "02732-040",
        address: "AV SANTA MARINA 2100",
        number: "",
        district: "VL ALBERTINA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 68 SUZANO",
        cnpj: "06.057.223/0283-43",
        zipcode: "08674-015",
        address: "R PRUDENTE DE MORAIS S/N PARTE 1",
        number: "",
        district: "CENTRO",
        city: "Suzano",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 73 PRESIDENTE PRUDENTE",
        cnpj: "06.057.223/0295-87",
        zipcode: "19053-300",
        address: "AV JOAQUIM CONSTANTINO 3025 FUNDOS",
        number: "",
        district: "VL NOVA PRUDENTE",
        city: "Presidente Prudente",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 74 GIOVANI PIRELLI",
        cnpj: "06.057.223/0257-51",
        zipcode: "09111-340",
        address: "R GIOVANNI BATTISTA PIRELLI 1221",
        number: "",
        district: "VL HOMERO THON",
        city: "Santo André",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 75 ITAQUA",
        cnpj: "06.057.223/0284-24",
        zipcode: "08577-000",
        address: "ESTRADA SÃO PAULO MOGI 3810 PARTE 1",
        number: "",
        district: "VL MONTE BELO",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 81 MOGI DAS CRUZES",
        cnpj: "06.057.223/0286-96",
        zipcode: "08773-120",
        address: "R JOSE MELONI 998",
        number: "",
        district: "VL MOGILAR",
        city: "Mogi das Cruzes",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 85 TEOTONIO VILELA",
        cnpj: "06.057.223/0263-08",
        zipcode: "04858-001",
        address: "AV SENADOR TEOTONIO VILELA 8699 GL 10 PARTE 1",
        number: "",
        district: "JD CASA GRANDE",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 89 FERNAO DIAS",
        cnpj: "06.057.223/0233-84",
        zipcode: "02283-000",
        address: "RODOVIA FERNAO DIAS S/N PARTE 1 KM 86,4",
        number: "",
        district: "PQ EDU CHAVES",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 904 RAPOSO",
        cnpj: "06.057.223/0262-19",
        zipcode: "06149-000",
        address: "ROD RAPOSO TAVARES S/N KM 20",
        number: "",
        district: "RAPOSO TAVARES",
        city: "Osasco",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 908 SBCAMPO",
        cnpj: "06.057.223/0237-08",
        zipcode: "09891-001",
        address: "AV PIRAPORINHA 680 PARTE 1",
        number: "",
        district: "PLANALTO",
        city: "SBCAMPO",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 910 CD ARUJA",
        cnpj: "06.057.223/0277-03",
        zipcode: "07411-730",
        address: "AV TOQUIO 10 GLEBA B",
        number: "",
        district: "CENTRO INDL ARUJA",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 93 PIRAJUSSARA",
        cnpj: "06.057.223/0250-85",
        zipcode: "06785-300",
        address: "AV IBIRAMA 51",
        number: "",
        district: "PQ INDL DACI",
        city: "Taboão da Serra",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A LOJA 956 REFRIO OSASCO",
        cnpj: "06.057.223/0240-03",
        zipcode: "05275-000",
        address: "VIA ANHANGUERA S/N KM 26,4",
        number: "",
        district: "JD JARAGUA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENDAS DISTRIBUIDORA S/A MATRIZ",
        cnpj: "06.057.223/0001-71",
        zipcode: "25565-330",
        address: "R JOAO ANTONIO SENDAS 286 PTE",
        number: "",
        district: "JOSE BONIFACIO",
        city: "São João de Meriti",
        state: "RJ"
    },
    {
        name: "SENIOR SOLUTION S/A",
        cnpj: "04.065.791/0001-99",
        zipcode: "01414-001",
        address: "R HADDOCK LOBO 347",
        number: "",
        district: "CERQ CESAR",
        city: "SP",
        state: "SP"
    },
    {
        name: "SENIOR SOLUTION CONSULTORIA EM INFORMATICA LTDA",
        cnpj: "03.017.804/0001-91",
        zipcode: "01414-001",
        address: "R HADDOCK LOBO 347 10 ANDAR",
        number: "",
        district: "CERQ CESAR",
        city: "SP",
        state: "SP"
    },
    {
        name: "SERRALHERIA FERRO E FOGO LTDA ME",
        cnpj: "11.738.763/0001-50",
        zipcode: "05596-150",
        address: "R LOURENÇO PRADO 50",
        number: "",
        district: "BUTANTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SERVICO SOCIAL DO COMERCIO - SESC - ADMINISTRACAO REGIONAL NO ESTADO DE SAO PAULO",
        cnpj: "03.667.884/0012-83",
        zipcode: "01222-020",
        address: "R DR. VILA NOVA",
        number: "245",
        district: "VILA BUARQUE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SERVICO SOCIAL DA INDUSTRIA",
        cnpj: "03.777.341/0088-17",
        zipcode: "89163-026",
        address: "R PREFEITO WENCESLAU BORINI",
        number: "2690",
        district: "CANTA GALO",
        city: "Rio do Sul",
        state: "SC"
    },
    {
        name: "SESTINI MERCANTIL LTDA",
        cnpj: "00.501.618/0001-35",
        zipcode: "07175-090",
        address: "AV PASCHOAL THOMEU",
        number: "1141",
        district: "VILA NOVA BONSUCESSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO SOLAR DOS SETE CANDEEIROS",
        cnpj: "54.283.726/0001-08",
        zipcode: "04531-020",
        address: "Rua da Mata",
        number: "136",
        district: "Itaim Bibi",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SEI WASHINGTON LUIS EMPREENDIMENTOS IMOBILIARIOS SPE LTDA",
        cnpj: "17.845.224/0001-05",
        zipcode: "01033-010",
        address: "R WASHINGTON LUIS 196",
        number: "",
        district: "REPUBLICA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SH DISTRIBUIDORA DE COSMETICOS LTDA",
        cnpj: "17.983.329/0001-12",
        zipcode: "02533-011",
        address: "R SANTA EUDOXIA 1045",
        number: "",
        district: "PQ PERUCHE",
        city: "SP",
        state: "SP"
    },
    {
        name: "SHALON REFLEXAO MODAS EIRELI ME",
        cnpj: "18.255.345/0001-51",
        zipcode: "03806-010",
        address: "AV PARANAGUA 1449",
        number: "",
        district: "ERM MATARAZZO",
        city: "",
        state: ""
    },
    {
        name: "CONFECCOES SHANES LTDA",
        cnpj: "59.316.182/0001-57",
        zipcode: "03011-010",
        address: "R MILLER",
        number: "300",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VIA ONIX CONFECCOES DE ROUPAS LTDA",
        cnpj: "10.425.436/0001-86",
        zipcode: "03019-050",
        address: "R GONCALVES DIAS",
        number: "123",
        district: "BELENZINHO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SHIRLEY LEAL MORAES ME",
        cnpj: "05.476.756/0001-25",
        zipcode: "03758-180",
        address: "R CORONEL JOSE MENEZES 09",
        number: "",
        district: "CANGAIBA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SHOEBIZ CALÇADOS LTDA",
        cnpj: "05.765.621/0002-60",
        zipcode: "00000-000",
        address: "AV PENHA DE FRANCA 352/358",
        number: "",
        district: "PENHA",
        city: "SP",
        state: "SP"
    },
    {
        name: "TRES K COMERCIO DE CALÇADOS LTDA",
        cnpj: "06.239.811/0004-79",
        zipcode: "04751-000",
        address: "LARGO 13 DE MAIO 556",
        number: "",
        district: "SANTO AMARO",
        city: "SP",
        state: "SP"
    },
    {
        name: "MEIO PONTO COMERCIO DE CALÇADOS LTDA",
        cnpj: "13.301.969/0001-44",
        zipcode: "08010-010",
        address: "R ARLINDO COLAÇO 418",
        number: "",
        district: "SÃO MIGUEL PTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "ASSOCIACAO DOS EMPREENDEDORES E CESSIONARIOS NOVA PARI",
        cnpj: "23.697.473/0001-95",
        zipcode: "03031-040",
        address: "R HANNEMANN",
        number: "335",
        district: "CANINDE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ASSOCIACAO DOS EMPREENDEDORES E CESSIONARIOS DO SHOPPING TOTAL BRAS",
        cnpj: "18.700.925/0001-00",
        zipcode: "03009-000",
        address: "R JOAO TEODORO",
        number: "1200",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ASSOCIACAO DOS EMPREENDEDORES E CESSIONARIOS DO SHOPPING VAUTIER",
        cnpj: "12.612.705/0001-49",
        zipcode: "03031-030",
        address: "R ALEXANDRINO PEDROSO",
        number: "264",
        district: "PARI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "H.B. FERREIRA SERVIÇOS DE PORTARIA",
        cnpj: "26.498.256/0001-64",
        zipcode: "04207-002",
        address: "R LINO COUTINHO 1940",
        number: "",
        district: "IPIRANGA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SICK SOLUÇAO EM SENSORES LTDA FILIAL",
        cnpj: "00.769.222/0003-35",
        zipcode: "09861-730",
        address: "TRAV CLAUDIO ARMANDO 171 GP 53 BLOCO 51",
        number: "",
        district: "ASSUNÇAO",
        city: "SBCAMPO",
        state: "SP"
    },
    {
        name: "SICK SOLUCAO EM SENSORES LTDA.",
        cnpj: "00.769.222/0001-73",
        zipcode: "04085-000",
        address: "AV DOS IMARES",
        number: "391",
        district: "INDIANOPOLIS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SIDLAR PLANEJADOS MOVEIS E DECORAÇÕES LTDA.",
        cnpj: "04.691.623/0001-09",
        zipcode: "03584-001",
        address: "AV OSVALDO VALLE CORDEIRO, 1039",
        number: "",
        district: "JD BRASILIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SIDEWAY CONFECCOES LTDA",
        cnpj: "03.624.297/0001-54",
        zipcode: "03052-060",
        address: "R DOUTOR JOAO ALVES DE LIMA",
        number: "88",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SIDLAR PLANEJADOS - MOVEIS E DECORACOES LTDA.",
        cnpj: "04.691.623/0010-08",
        zipcode: "07600-000",
        address: "EST ESTADUAL",
        number: "5301",
        district: "BOA VISTA",
        city: "Mairiporã",
        state: "SP"
    },
    {
        name: "SIDNEI VIEIRA DO NASCIMENTO",
        cnpj: "13.412.860/0001-84",
        zipcode: "08539-200",
        address: "R DAS INDUSTRIAS",
        number: "481",
        district: "VILA LOANDA",
        city: "Ferraz de Vasconcelos",
        state: "SP"
    },
    {
        name: "SIGN WASH IND E COM DE SERVIÇOS EIRELI",
        cnpj: "67.314.248/0001-97",
        zipcode: "03582-100",
        address: "R QUINTA DA MAGNOLIA 699",
        number: "",
        district: "JD IPANEMA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SILIMED - INDUSTRIA DE IMPLANTES LTDA",
        cnpj: "29.503.802/0001-04",
        zipcode: "21240-660",
        address: "R FIGUEIREDO ROCHA",
        number: "374",
        district: "VIGARIO GERAL",
        city: "Rio de Janeiro",
        state: "RJ"
    },
    {
        name: "SIMETRIA PUBLICIDADE EIRELI *",
        cnpj: "26.973.417/0001-24",
        zipcode: "03810-110",
        address: "R ABEL TAVARES",
        number: "2359",
        district: "JARDIM BELEM",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SIMONE ZAGALLO ME",
        cnpj: "05.859.158/0001-35",
        zipcode: "04615-000",
        address: "R DR JESUINO MACIEL",
        number: "313",
        district: "CAMPO BELO",
        city: "",
        state: ""
    },
    {
        name: "EMPRESA LIMPADORA SINGALTER LTDA",
        cnpj: "61.741.179/0001-22",
        zipcode: "04568-000",
        address: "R RIBEIRO DO VALE 340",
        number: "",
        district: "CID MONÇOES",
        city: "SP",
        state: "SP"
    },
    {
        name: "SIONTI INDUSTRIA METALURGICA LIMITADA",
        cnpj: "16.640.904/0001-11",
        zipcode: "09220-340",
        address: "R BARBARA HELIODORA",
        number: "466",
        district: "UTINGA",
        city: "Santo André",
        state: "SP"
    },
    {
        name: "SKFE MOLDES MAQUINAS E FERRAMENTAIS LTDA",
        cnpj: "57.074.460/0001-81",
        zipcode: "03680-010",
        address: "R ARICA MIRIM 400",
        number: "",
        district: "BURGO PAULISTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "GERALDA NATALICIA AMORIM EPP",
        cnpj: "14.274.695/0001-04",
        zipcode: "07182-310",
        address: "R PEDRA LAVADA 411",
        number: "",
        district: "JD CASTANHA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "SKY MASTER INDUSTRIA COMERCIO IMPORTACAO E EXPORTACAO DE CONDUTORES ELETRICOS LTDA",
        cnpj: "07.886.128/0001-43",
        zipcode: "07215-230",
        address: "R MANUEL DE JESUS FERNANDES",
        number: "40",
        district: "JARDIM SANTO AFONSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "GISELE MARTINS 32244046800",
        cnpj: "31.263.971/0001-58",
        zipcode: "08670-025",
        address: "AV PAULISTA",
        number: "1451",
        district: "JARDIM MONTE CRISTO",
        city: "Suzano",
        state: "SP"
    },
    {
        name: "SMF SERVICOS DE APOIO ADMINISTRATIVO LTDA.",
        cnpj: "30.436.973/0001-39",
        zipcode: "02016-001",
        address: "R SALETE",
        number: "200",
        district: "SANTANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AC&F SERVICOS TECNICOS LTDA",
        cnpj: "04.887.307/0001-07",
        zipcode: "04282-000",
        address: "R MACAXAS",
        number: "515",
        district: "IPIRANGA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "COMERCIAL SO CABIDES LTDA - EPP",
        cnpj: "56.144.140/0001-98",
        zipcode: "02179-040",
        address: "R SARG MANUEL CHAGAS",
        number: "17",
        district: "PQ NOVO MUNDO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ADATA INDUSTRIA DE PRODUTOS DE LIMPEZA EIRELI - EPP",
        cnpj: "17.260.799/0001-58",
        zipcode: "07743-150",
        address: "R FRANCISCO MOMMENSHON",
        number: "50",
        district: "MORRO GRANDE",
        city: "Caieiras",
        state: "SP"
    },
    {
        name: "SOBEL IND E COM DE PRODUTOS DE LIMPEZA LTDA",
        cnpj: "62.674.627/0001-85",
        zipcode: "02261-000",
        address: "R PARAZINHO 260",
        number: "",
        district: "JD MODELO",
        city: "SP",
        state: "SP"
    },
    {
        name: "JMT COMERCIO DE DESCARTAVEIS LTDA",
        cnpj: "73.158.214/0001-64",
        zipcode: "02261-020",
        address: "R FREIRE BASTOS 292",
        number: "",
        district: "JAÇANA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SOBRAL & SOBRAL IND METALURGICA LTDA",
        cnpj: "07.432.995/0001-09",
        zipcode: "08280-100",
        address: "R AGOSTINHO DE FARIA 580",
        number: "",
        district: "CID LIDER",
        city: "SP",
        state: "SP"
    },
    {
        name: "BIG + HOUSE METALURGICA EVERTON EIRELI*",
        cnpj: "29.067.271/0001-46",
        zipcode: "03988-010",
        address: "AVENIDA SAPOPEMBA",
        number: "10735",
        district: "JARDIM ADUTORA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SOFITEC IND E COM LTDA - ME",
        cnpj: "11.032.798/0001-70",
        zipcode: "03449-000",
        address: "AV DEZENOVE DE JANEIRO 783",
        number: "",
        district: "VL CARRAO",
        city: "SP",
        state: "SP"
    },
    {
        name: "SOFTMARKETING COMUNICACAO E INFORMACAO LTDA",
        cnpj: "73.879.330/0001-72",
        zipcode: "81070-000",
        address: "R JOAO BETTEGA",
        number: "736",
        district: "PORTAO",
        city: "Curitiba",
        state: "PR"
    },
    {
        name: "CONSELHO COMUNITARIO SOL DO AMANHECER",
        cnpj: "05.137.119/0001-24",
        zipcode: "08473-330",
        address: "R EDUARDO ABELIN 03",
        number: "",
        district: "GUAIANAZES",
        city: "SP",
        state: "SP"
    },
    {
        name: "SOLAR DOS UNIDOS ASSOCIACAO COMUNITARIA",
        cnpj: "51.250.124/0001-66",
        zipcode: "06770-100",
        address: "R LAUDELINO GOMES RIBEIRO",
        number: "255",
        district: "JARDIM IRACEMA",
        city: "Taboão da Serra",
        state: "SP"
    },
    {
        name: "SONDAGEO ENGENHARIA LTDA",
        cnpj: "07.749.507/0002-72",
        zipcode: "06856-000",
        address: "RODOVIA ARMANDO SALLES 11113",
        number: "",
        district: "VALO VELHO",
        city: "ITAPECERICA SERRA",
        state: "SP"
    },
    {
        name: "JOSE OTAVIO CASTRO MORAIS",
        cnpj: "28.799.827/0001-26",
        zipcode: "05073-010",
        address: "R BR JUNDIAI",
        number: "523",
        district: "LAPA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SONOLAYER CENTRO DE DIAGNOSTICOS LTDA.",
        cnpj: "52.376.910/0001-77",
        zipcode: "07115-000",
        address: "AV SALGADO FILHO",
        number: "292",
        district: "CENTRO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "SORANA COMERCIAL E IMPORTADORA LTDA",
        cnpj: "61.088.795/0001-26",
        zipcode: "02511-900",
        address: "AV BRAZ LEME 295",
        number: "",
        district: "CASA VERDE",
        city: "SP",
        state: "SP"
    },
    {
        name: "SARA BALSALOBRE DIAS 32058645812",
        cnpj: "13.670.079/0001-00",
        zipcode: "08180-310",
        address: "R SALSA PARILHA 26 A",
        number: "",
        district: "JD MAIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SOUTO, CORREA SOCIEDADE DE ADVOGADOS",
        cnpj: "21.322.232/0001-36",
        zipcode: "04543-011",
        address: "AV PRESIDENTE JUSCELINO KUBITSCHEK",
        number: "2041",
        district: "VILA NOVA CONCEICAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SOUZA LIMA TERCEIRIZAÇOES LTDA",
        cnpj: "07.210.221/0001-33",
        zipcode: "03644-000",
        address: "R EMBIRUSSU 586",
        number: "",
        district: "PENHA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SOVEL MULTIMARCAS COMERCIO DE VEICULOS EIRELI",
        cnpj: "19.097.055/0001-90",
        zipcode: "08560-010",
        address: "AV BRASIL",
        number: "1290",
        district: "VILA PEREIRA NETO",
        city: "Poá",
        state: "SP"
    },
    {
        name: "SILVA PORTO INSTALACOES HIDRAULICAS LTDA",
        cnpj: "26.743.479/0001-40",
        zipcode: "03813-350",
        address: "R LUIZA PEZZELLA GOMES",
        number: "98",
        district: "JARDIM MATARAZZO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SPE PIRITUBA CONSTRUÇOES LTDA",
        cnpj: "13.252.070/0001-89",
        zipcode: "02915-000",
        address: "AV PAULA FERREIRA 2935",
        number: "",
        district: "PIRITUBA",
        city: "SP",
        state: "SP"
    },
    {
        name: "SAO PAULO FUTEBOL CLUBE",
        cnpj: "60.517.984/0001-04",
        zipcode: "05653-070",
        address: "PC ROBERTO GOMES PEDROSA",
        number: "SN",
        district: "MORUMBI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SPYSAT RASTREAMENTO LTDA",
        cnpj: "00.413.408/0001-95",
        zipcode: "04334-070",
        address: "R CHARLES HOYT 90",
        number: "",
        district: "VL FACHINI",
        city: "SP",
        state: "SP"
    },
    {
        name: "SSA ALUMINIUM COM DE METAIS LTDA",
        cnpj: "11.653.366/0001-86",
        zipcode: "02079-001",
        address: "R CEL MARCILIO FRANCO 866",
        number: "",
        district: "VL MAZZEI",
        city: "",
        state: ""
    },
    {
        name: "SSA COMERCIO DE VIDROS LTDA",
        cnpj: "18.366.202/0001-17",
        zipcode: "02079-001",
        address: "R CORONEL MARCILIO FRANCO 876",
        number: "",
        district: "VL IZOLINA MAZZEI",
        city: "",
        state: ""
    },
    {
        name: "STAMPAR IND E COM LTDA",
        cnpj: "01.763.510/0001-83",
        zipcode: "03645-000",
        address: "R JORGE AUGUSTO 547",
        number: "",
        district: "VL ESPERANÇA",
        city: "SP",
        state: "SP"
    },
    {
        name: "GUIA VEICULOS LTDA",
        cnpj: "82.461.310/0002-59",
        zipcode: "04612-100",
        address: "R VISCONDE DE AGUIAR TOLEDO",
        number: "73",
        district: "VILA CONGONHAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "STAR COLOR EDITORA GRAFICA LTDA",
        cnpj: "01.196.067/0001-06",
        zipcode: "08090-000",
        address: "AV JOSE ARTUR NOVA",
        number: "1268",
        district: "SAO MIGUEL PTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "STAREX REMOCOES E SERVICOS MEDICOS LTDA",
        cnpj: "10.718.875/0001-87",
        zipcode: "03416-000",
        address: "R PRETORIA",
        number: "1027",
        district: "VILA FORMOSA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "STARR INTERNATIONAL BRASIL SEGURADORA S.A.*",
        cnpj: "17.341.270/0001-69",
        zipcode: "01311-200",
        address: "AV PAULISTA",
        number: "283",
        district: "BELA VISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "STEEL-BLANK INDUSTRIA E COMERCIO DE PRODUTOS METALURGICOS LTDA",
        cnpj: "01.823.006/0001-21",
        zipcode: "03267-090",
        address: "R NUBIA",
        number: "69",
        district: "VL NOVA PAULICEIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "STEEL ROL INDUSTRIA E COMERCIO DE EMBALAGENS METALICAS LTDA",
        cnpj: "58.954.850/0001-09",
        zipcode: "07230-000",
        address: "EST VELHA GUARULHOS GUARULHOS - S.MIGUEL",
        number: "2105",
        district: "JARDIM SANTA HELENA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "STEMAG ENGENHARIA E CONSTRUCOES LTDA*",
        cnpj: "43.218.957/0001-11",
        zipcode: "01402-001",
        address: "AV BRIGADEIRO LUIS ANTONIO",
        number: "3530",
        district: "JARDIM PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SINDICATO DOS TRABALHADORES RURAIS DE ALCOBACA",
        cnpj: "63.178.081/0001-34",
        zipcode: "45910-000",
        address: "R VILA PENA",
        number: "47",
        district: "CENTRO",
        city: "Alcobaça",
        state: "BA"
    },
    {
        name: "STRATEGY CONSULTORIA E ASSESSORIA ATUARIAL EIRELI",
        cnpj: "03.215.281/0001-98",
        zipcode: "04563-060",
        address: "R CONCEICAO DE MONTE ALEGRE",
        number: "107",
        district: "CIDADE MONCOES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "STUDIO 500 HOTEL LTDA",
        cnpj: "02.067.945/0001-56",
        zipcode: "03620-000",
        address: "AV SÃO MIGUEL 500",
        number: "",
        district: "VL MARIETA",
        city: "SP",
        state: "SP"
    },
    {
        name: "STUDIO VEICULOS E PECAS LTDA*",
        cnpj: "17.324.331/0001-80",
        zipcode: "05016-090",
        address: "AVENIDA SUMARE",
        number: "255",
        district: "PERDIZES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "RODRIGO DANTAS DOS SANTOS",
        cnpj: "27.908.732/0001-30",
        zipcode: "05418-000",
        address: "R DEP LACERDA FRANCO",
        number: "300",
        district: "PINHEIROS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "STW IND METALURGICA LTDA",
        cnpj: "02.439.097/0001-69",
        zipcode: "08485-520",
        address: "ESTRADA DO PALANQUE 145",
        number: "",
        district: "JD IGUATEMI",
        city: "SP",
        state: "SP"
    },
    {
        name: "STYLLO PLUS CONFECCAO LTDA - EPP",
        cnpj: "17.802.308/0001-53",
        zipcode: "03013-001",
        address: "R CASEMIRO DE ABREU",
        number: "342",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ORDEM DOS ADVOGADOS DO BRASIL - SECCAO DE SAO PAULO",
        cnpj: "43.419.613/0104-86",
        zipcode: "08240-005",
        address: "AVENIDA PIRES DO RIO",
        number: "3740",
        district: "ITAQUERA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SUBLIME PONTE ALTA LTDA",
        cnpj: "19.296.509/0001-51",
        zipcode: "07179-701",
        address: "ESTRADA MATO DAS COBRAS 2870",
        number: "",
        district: "JD PONTE ALTA II",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "SUBLIME PONTE ALTA LTDA ME - PONTE ALTA II",
        cnpj: "19.296.509/0001-51",
        zipcode: "07179-701",
        address: "AV LUIZ GONZAGA DO NASCIMENTO 318",
        number: "",
        district: "JD PONTE ALTA II",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "SUBURBAN INDUSTRIA E COMERCIO DE ROUPAS LTDA.",
        cnpj: "07.731.249/0001-16",
        zipcode: "03051-000",
        address: "R DO HIPODROMO",
        number: "331",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "NATURAL MORUMBI COM DE ALIMENTOS LTDA",
        cnpj: "07.655.941/0001-02",
        zipcode: "04707-000",
        address: "AV ROQUE PETRONI JUNIOR 1089 LOJA 14",
        number: "",
        district: "JD DAS ACACIAS",
        city: "SP",
        state: "SP"
    },
    {
        name: "SUCESSO'S CONFECÇAO E COM DE ROUPAS LTDA - ME",
        cnpj: "61.207.114/0001-00",
        zipcode: "08573-220",
        address: "R ANDRADAS 410",
        number: "",
        district: "VL VIRGINIA",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "SULAMERICA BIJUTERIA LTDA",
        cnpj: "19.426.252/0001-05",
        zipcode: "01021-000",
        address: "R 25 DE MARÇO 959 - 10 ANDAR",
        number: "",
        district: "CENTRO",
        city: "",
        state: ""
    },
    {
        name: "SULTAN IND E COM DE ARTEFATOS TEXTEIS LTDA",
        cnpj: "60.869.468/0003-00",
        zipcode: "08577-250",
        address: "R ARAÇATUBA 195",
        number: "",
        district: "VL BARTIRA",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "PRODUTOS ALIMENTICIOS SUPERBOM INDUSTRIA E COMERCIO LTD",
        cnpj: "53.135.232/0001-13",
        zipcode: "05868-680",
        address: "R DOMINGOS PEIXOTO DA SILVA",
        number: "245",
        district: "C J HI ADVENTISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "MANUEL CARLOS JORGE PONTES ME",
        cnpj: "03.826.944/0001-00",
        zipcode: "07178-540",
        address: "AV SERRA DA MANTIQUEIRA 771",
        number: "",
        district: "VL CARMELA I",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "SUPERMERCADO MAKTUB IPIRANGA LTDA",
        cnpj: "08.778.176/0001-80",
        zipcode: "08730-590",
        address: "AV HENRIQUE EROLES",
        number: "469",
        district: "ALTO IPIRANGA",
        city: "Mogi das Cruzes",
        state: "SP"
    },
    {
        name: "SUPERMERCADO SUBLIME CARMELA LTDA",
        cnpj: "28.420.326/0001-97",
        zipcode: "07178-360",
        address: "RUA FLOR DA SERRA",
        number: "S/N",
        district: "VILA CARMELA I",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "SUPORTE GRAFICA E EDITORA LTDA",
        cnpj: "11.088.652/0001-46",
        zipcode: "02965-000",
        address: "R ANTONIO GOMES DE OLIVEIRA 17/364",
        number: "",
        district: "FREGUESIA DO O",
        city: "SP",
        state: "SP"
    },
    {
        name: "SUPORTE RECURSOS HUMANOS LTDA",
        cnpj: "10.316.754/0001-09",
        zipcode: "88020-302",
        address: "AVENIDA MAURO RAMOS",
        number: "1562",
        district: "CENTRO",
        city: "Florianópolis",
        state: "SC"
    },
    {
        name: "SWEET IND COM PROD ALIMENTICIOS EXP E IMP LTDA",
        cnpj: "51.365.658/0001-38",
        zipcode: "08675-023",
        address: "AV ANTONIO M FIGUEIRA 820",
        number: "",
        district: "VL FIGUEIRA",
        city: "Suzano",
        state: "SP"
    },
    {
        name: "SYBS MANUTENÇAO E SERVIÇOS LTDA",
        cnpj: "27.164.481/0001-27",
        zipcode: "09941-750",
        address: "R ESPIRITO SANTO 62 - CONTINUAÇAO R MINAS GERAIS",
        number: "",
        district: "CASA GRANDE",
        city: "Diadema",
        state: "SP"
    },
    {
        name: "TG SERVICOS EIRELI",
        cnpj: "28.115.846/0001-96",
        zipcode: "02121-020",
        address: "R DA GAVEA",
        number: "397",
        district: "VILA MARIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TAMBORCLEAN EMBALAGENS LTDA",
        cnpj: "02.620.006/0001-97",
        zipcode: "07231-370",
        address: "RUA DOUTOR VITAL BRASIL",
        number: "118",
        district: "JARDIM NOVA CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "HENRIQUE RAMOS DE ARAUJO TAPETES - ME",
        cnpj: "09.091.087/0001-24",
        zipcode: "07171-010",
        address: "R IBIPORA 246",
        number: "",
        district: "PQ SÃO LUIZ",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "TAPPI FERRAMENTARIA E USINAGEM LTDA",
        cnpj: "02.621.313/0001-92",
        zipcode: "03805-090",
        address: "R DARIO COSTA MATTOS 580",
        number: "",
        district: "PQ BUTURUSSU",
        city: "",
        state: ""
    },
    {
        name: "TATU COLOR COM E SERVIÇOS FOTOGRAFICOS EIRELI",
        cnpj: "09.071.370/0001-94",
        zipcode: "03404-000",
        address: "R GUARACIABA 106 SALA 3",
        number: "",
        district: "CHACARA CALIFORNIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "TATU COLOR COMERCIO DE SUPLEMENTOS EIRELI ME",
        cnpj: "09.071.370/0001-94",
        zipcode: "03404-000",
        address: "R GUARACIABA 106 SALA 3",
        number: "",
        district: "TATUAPE",
        city: "SP",
        state: "SP"
    },
    {
        name: "LIG LIG INDUSTRIA E COMERCIO DE IMPRESSOS LTDA",
        cnpj: "12.410.952/0001-62",
        zipcode: "07151-051",
        address: "R LAGOA DE DENTRO",
        number: "190",
        district: "JARDIM SAO JOAO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "TATY SERVICOS DE APOIO ADMINISTRATIVO A CONDOMINIOS E COBRANCAS LTDA",
        cnpj: "64.028.640/0001-92",
        zipcode: "03162-060",
        address: "R ITAJAI",
        number: "43",
        district: "MOOCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TAURISANO EMBALANGES LTDA ME",
        cnpj: "08.357.466/0002-31",
        zipcode: "00000-000",
        address: "R EUGENIO DIAMANTE 362",
        number: "",
        district: "VL BARROS",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "TAVARES ENGENHARIA LTDA",
        cnpj: "02.714.979/0001-95",
        zipcode: "05541-270",
        address: "R JOSE DE BRITO FERREIRA 61",
        number: "",
        district: "FERREIRA",
        city: "SP",
        state: "SP"
    },
    {
        name: "TBLOG TRANSPORTE E LOGISTICA LTDA",
        cnpj: "16.708.862/0001-03",
        zipcode: "08773-380",
        address: "AV FRANCISCO RODRIGUES FILHO",
        number: "3620",
        district: "VILA MOGILAR",
        city: "Mogi das Cruzes",
        state: "SP"
    },
    {
        name: "TECNEW SERVICOS DE USINAGEM E COMERCIO LTDA",
        cnpj: "09.637.037/0001-08",
        zipcode: "08285-020",
        address: "R ACAIACA",
        number: "616",
        district: "CIDADE LIDER",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TAMU CONFECÇOES DE RENDAS LTDA",
        cnpj: "05.928.150/0001-83",
        zipcode: "00000-000",
        address: "R SALDANHA MARINHO 101",
        number: "",
        district: "BELENZINHO",
        city: "SP",
        state: "SP"
    },
    {
        name: "TECFIRE CONSULTORIA E PROJETOS LTDA",
        cnpj: "58.922.378/0001-22",
        zipcode: "05019-000",
        address: "R DIANA",
        number: "592",
        district: "PERDIZES",
        city: "",
        state: ""
    },
    {
        name: "TECHMASTER IND E COM DE ARTEFATOS DE METAIS LTDA",
        cnpj: "67.370.734/0001-33",
        zipcode: "13327-310",
        address: "R PEDRO ALVARES CABRAL 12",
        number: "",
        district: "VL NORMA",
        city: "Salto",
        state: "SP"
    },
    {
        name: "TECH MASTER COMERCIAL IMPORTADORA E EXPORTADORA LTDA -ME",
        cnpj: "04.335.324/0001-31",
        zipcode: "13320-240",
        address: "AV DOM PEDRO II 234 SALA 2",
        number: "",
        district: "CENTRO",
        city: "Salto",
        state: "SP"
    },
    {
        name: "TECHMAR INDUSTRIAL LTDA",
        cnpj: "02.046.648/0001-24",
        zipcode: "07231-060",
        address: "R DOS JESUITAS 08",
        number: "",
        district: "CID IND SATELITE",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "TECNOFRIS INDUSTRIA E COMERCIO LTDA*",
        cnpj: "71.816.375/0001-72",
        zipcode: "08340-120",
        address: "R CASTOR",
        number: "51",
        district: "CIDADE SATELITE SANTA BARBARA - SAO MATEUS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TECNO PLASMA COM E SERV DE EQUIPAMENTOS ELETR LTDA",
        cnpj: "03.305.025/0001-91",
        zipcode: "03514-000",
        address: "R JOAQUIM MARRA 750",
        number: "",
        district: "VL MATILDE",
        city: "SP",
        state: "SP"
    },
    {
        name: "TELEFEL TELECOMUNICAÇOES LTDA",
        cnpj: "68.058.643/0001-20",
        zipcode: "08730-020",
        address: "AV BRAZ DE PINA 1065",
        number: "",
        district: "IPIRANGA",
        city: "Mogi das Cruzes",
        state: "SP"
    },
    {
        name: "TECELAGEM THAIS IND E COM LTDA",
        cnpj: "60.864.816/0001-95",
        zipcode: "03125-080",
        address: "R AGOSTINHO LATARI 276",
        number: "",
        district: "MOOCA",
        city: "SP",
        state: "SP"
    },
    {
        name: "TELTEX TECNOLOGIA S/A",
        cnpj: "73.442.360/0001-17",
        zipcode: "92010-000",
        address: "AV VICTOR BARRETO",
        number: "1496",
        district: "CENTRO",
        city: "Canoas",
        state: "RS"
    },
    {
        name: "TEMON SERVIÇOS DE ENGENHARIA E MAUTENÇAO LTDA",
        cnpj: "05.490.390/0001-49",
        zipcode: "04367-000",
        address: "RUA CARLO CARRA 244",
        number: "",
        district: "VL STA CATARINA",
        city: "SP",
        state: "SP"
    },
    {
        name: "TERMOAÇO BRASIL EIRELI",
        cnpj: "24.345.565/0001-79",
        zipcode: "07176-007",
        address: "R DA SERVIDAO 280",
        number: "",
        district: "VL NOVA BONSUCESSO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "TERPLUS SERVICOS ADMINISTRATIVOS LTDA*",
        cnpj: "18.650.349/0001-34",
        zipcode: "04734-003",
        address: "AV ADOLFO PINHEIRO",
        number: "2054",
        district: "SANTO AMARO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TERRA FIRMA IMPORTAÇAO E EXPORTAÇAO LTDA",
        cnpj: "12.675.942/0001-59",
        zipcode: "02119-001",
        address: "R MARGARINO TORRES",
        number: "994",
        district: "VL MARIA",
        city: "",
        state: ""
    },
    {
        name: "TEXBLUN CONFECÇAO E COM LTDA",
        cnpj: "02.237.995/0001-34",
        zipcode: "04001-003",
        address: "R MANOEL DA NOBREGA 1126",
        number: "",
        district: "JD PAULISTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "TEXTIL CHALISE LTDA",
        cnpj: "58.924.622/0001-96",
        zipcode: "03304-000",
        address: "R SAO BERNARDO",
        number: "610",
        district: "CIDADE MAE DO CEU",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "INDUSTRIAL E COMERCIAL TEXTIL LOTUS LTDA",
        cnpj: "63.091.821/0001-09",
        zipcode: "07170-353",
        address: "R INDUBEL 48",
        number: "",
        district: "JD NOVA CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "UNIONTEX INDUSTRIAL TEXTIL LTDA",
        cnpj: "13.279.964/0001-62",
        zipcode: "08597-640",
        address: "R FLOR DE CACTUS 150",
        number: "",
        district: "QUINTA DA BOA VISTA",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "INDUSTRIA TEXTIL RAU LTDA",
        cnpj: "61.445.045/0001-64",
        zipcode: "03088-000",
        address: "R ARNALDO CINTRA 191",
        number: "",
        district: "TATUAPE",
        city: "SP",
        state: "SP"
    },
    {
        name: "T&C INDUSTRIA, COMERCIO E SERVICOS DE MATERIAIS PARA CONSTRUCAO LTDA",
        cnpj: "06.959.490/0001-34",
        zipcode: "08032-220",
        address: "R RANCHEIRA",
        number: "27",
        district: "JARDIM SAO JOSE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "THERBA EQUIPAMENTOS ELETRICOS LTDA*",
        cnpj: "62.954.276/0001-66",
        zipcode: "01218-010",
        address: "AL EDUARDO PRADO,",
        number: "134",
        district: "CAMPOS ELISEOS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "THERMOTEC COM E SERV DE RADIADORES E INTERCOOLERS EIRELI",
        cnpj: "29.321.018/0001-77",
        zipcode: "07220-000",
        address: "Avenida Santos Dumont",
        number: "1632",
        district: "Cidade Industrial Satélite de São Paulo",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "THERVEN COM E SERVIÇOS LTDA",
        cnpj: "05.058.950/0001-90",
        zipcode: "03555-010",
        address: "R CARACARAI 248",
        number: "",
        district: "CID PATRIARCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TINAGA TERMINAL INTERMODAL NACIONAL E ARMAZENS GERAIS LTDA",
        cnpj: "03.254.164/0002-14",
        zipcode: "08840-600",
        address: "ESTRADA MUNICIPAL DE TABOAO DO PARATEI S/N KM 1,3",
        number: "",
        district: "TABOAO DO PARATEI",
        city: "Mogi das Cruzes",
        state: "SP"
    },
    {
        name: "TITAN PARTES DISTRIBUIDORA DE AUTO PEÇAS LTDA",
        cnpj: "07.482.449/0001-82",
        zipcode: "07222-140",
        address: "AV SÃO MATHEUS DO MARANHAO 186",
        number: "",
        district: "CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "POJUCA S/A",
        cnpj: "13.250.998/0005-58",
        zipcode: "01419-001",
        address: "AL SANTOS",
        number: "1437",
        district: "CERQUEIRA CESAR",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TMA COM DE VIDROS METAIS E FERRAGENS LTDA",
        cnpj: "20.873.167/0001-74",
        zipcode: "04370-105",
        address: "R ALBA 1345",
        number: "",
        district: "VL STA CATARINA",
        city: "",
        state: ""
    },
    {
        name: "TNTECH INDUSTRIA E COMERCIO LTDA",
        cnpj: "17.056.710/0001-36",
        zipcode: "02111-031",
        address: "RUA ITAUNAS 1085",
        number: "",
        district: "VL MARIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "TNSX COM DE ALIMENTOS EIRELI - ME",
        cnpj: "21.321.573/0001-97",
        zipcode: "04707-120",
        address: "AV ROQUE PETRONI JUNIOR 1089 PT 25 - PISO TERREO MORUMBI SHO",
        number: "",
        district: "VL GERTRUDES",
        city: "",
        state: ""
    },
    {
        name: "SIL BOLSAS MAGAZINE E CONFECÇOES LTDA ME",
        cnpj: "09.218.432/0001-48",
        zipcode: "03009-100",
        address: "R RODRIGUES DOS SANTOS 140",
        number: "",
        district: "BRAS",
        city: "SP",
        state: "SP"
    },
    {
        name: "TOCA DA AFRICA CONFECÇAO IMP EXP LTDA",
        cnpj: "17.918.456/0001-38",
        zipcode: "03009-100",
        address: "R RODRIGUES DOS SANTOS 716",
        number: "",
        district: "BRAS",
        city: "SP",
        state: "SP"
    },
    {
        name: "TOCANTINS TRANSPORTES E LOGISTICA LTDA - ME",
        cnpj: "07.784.847/0008-20",
        zipcode: "07173-400",
        address: "R ITAPE 274",
        number: "",
        district: "JD MARIA DIRCE",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "TOCANTINS ADMINISTRAÇAO E TRANSPORTES LTDA - ME",
        cnpj: "09.528.305/0004-98",
        zipcode: "07240-180",
        address: "R TARAUACA 1001 ARMAZEM 1",
        number: "",
        district: "CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "ELISEU VITORIO TOMBINI",
        cnpj: "09.296.455/0001-70",
        zipcode: "85877-000",
        address: "R TORRES 306 SALA 1",
        number: "",
        district: "CENTRO",
        city: "São Miguel do Iguaçu",
        state: "PR"
    },
    {
        name: "TONI STYL COM DE CONFECÇAO LTDA",
        cnpj: "48.486.724/0001-13",
        zipcode: "03027-000",
        address: "R XAVANTES 434",
        number: "",
        district: "BRAS",
        city: "SP",
        state: "SP"
    },
    {
        name: "A. P. PERITO USINAGEM - ME",
        cnpj: "08.477.961/0001-01",
        zipcode: "03573-110",
        address: "R CABOMONTE",
        number: "14",
        district: "JARDIM ARIZE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LEMUEL MODAS EIRELI ME",
        cnpj: "22.903.318/0001-15",
        zipcode: "09910-720",
        address: "R MANOEL DA NOBREGA 712 LOJA 34A",
        number: "",
        district: "CENTRO",
        city: "Diadema",
        state: "SP"
    },
    {
        name: "A R C TEXTIL COMERCIO DE TECIDOS LTDA",
        cnpj: "31.722.260/0001-02",
        zipcode: "03016-020",
        address: "R JOLI",
        number: "390",
        district: "BRAS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TOQUE DE ARTE MOVEIS E DECORAÇOES LTDA",
        cnpj: "03.057.153/0001-63",
        zipcode: "03701-001",
        address: "AV GABRIELA MISTRAL 1242",
        number: "",
        district: "PENHA",
        city: "SP",
        state: "SP"
    },
    {
        name: "TOQUE DE ARTE PAES E DOCES LTDA ME",
        cnpj: "02.762.910/0001-37",
        zipcode: "08471-000",
        address: "AV DOS METALURGICOS 1033 LOJA 3",
        number: "",
        district: "CID TIRADENTES",
        city: "SP",
        state: "SP"
    },
    {
        name: "TORPECA INDUSTRIA METALURGICA LTDA",
        cnpj: "58.962.473/0001-50",
        zipcode: "04458-180",
        address: "RUA BRUNO TAUT",
        number: "122",
        district: "JARDIM SONIA (ZONA SUL)",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "SUBCONDOMINIO TORRES EMPRESARIAIS DO IBIRAPUERA",
        cnpj: "08.868.695/0001-30",
        zipcode: "04028-003",
        address: "AV IBIRAPUERA",
        number: "2332",
        district: "MOEMA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TIC EMBELEZAMENTO DE ANIMAIS DOMESTICOS EIRELI - ME",
        cnpj: "00.681.967/0001-86",
        zipcode: "08550-230",
        address: "R HERMOGENES LA REGINA 26",
        number: "",
        district: "CENTRO",
        city: "Poá",
        state: "SP"
    },
    {
        name: "TOSTALLY INDUSTRIA & COMERCIO DE PRODUTOS ALIMENTICIOS LTDA",
        cnpj: "07.552.759/0001-26",
        zipcode: "37650-000",
        address: "ROD FERNAO DIAS",
        number: "S/N",
        district: "CUBATAO",
        city: "Camanducaia",
        state: "MG"
    },
    {
        name: "TOTAL PAV CONSTRUÇAO E LOCAÇAO LTDA",
        cnpj: "15.019.222/0001-23",
        zipcode: "03550-030",
        address: "R NAZARE DA MOTA 139",
        number: "",
        district: "CID PATRIARCA",
        city: "SP",
        state: "SP"
    },
    {
        name: "TOYLAND COML E DIST TEC E APLIC DE CONST CIVIL LTDA",
        cnpj: "56.200.934/0001-21",
        zipcode: "05307-001",
        address: "R MAJOR PALADINO 790",
        number: "",
        district: "VL RIBEIRO DE BARROS",
        city: "SP",
        state: "SP"
    },
    {
        name: "TQI CONSULTORIA E DESENVOLVIMENTO LTDA",
        cnpj: "05.303.491/0002-44",
        zipcode: "04552-000",
        address: "R DO ROCIO",
        number: "288",
        district: "VILA OLIMPIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TRANSDELTA TRANSPORTADORA DELTA LTDA",
        cnpj: "19.898.972/0001-73",
        zipcode: "07177-120",
        address: "R JOAO RANIERI 429",
        number: "",
        district: "JD FATIMA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "TRANSMAGNA TRANSPORTES LTDA",
        cnpj: "79.942.140/0002-10",
        zipcode: "00000-000",
        address: "RUA KIDA 191",
        number: "",
        district: "MACEDO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "TRANSMYM TRANSPORTE LOGISTICA E CONSERTO DE PALLETS LTDA",
        cnpj: "20.156.682/0001-33",
        zipcode: "05161-000",
        address: "ESTRADA TURISTICA DO JARAGUA 1389 E",
        number: "",
        district: "JARAGUA",
        city: "SP",
        state: "SP"
    },
    {
        name: "WE TRANSPORTES LOGISTICA E CONSERTO DE PALLETS LTDA",
        cnpj: "11.590.986/0001-13",
        zipcode: "05160-000",
        address: "EST TURISTICA DO JARAGUA",
        number: "1389",
        district: "JARAGUA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TRANSPALLET - TRANSPORTES E LOGISTICA LTDA",
        cnpj: "38.856.126/0001-35",
        zipcode: "07140-040",
        address: "AVENIDA NATALIA ZARIF",
        number: "550",
        district: "JARDIM SAO GERALDO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "TRANSPALLET TRANSPORTES E LOGISTICA LTDA - CAMPINAS",
        cnpj: "38.856.126/0004-88",
        zipcode: "13052-901",
        address: "ROD SANTOS DUMONT S/N KM 66 COND EMPRESARIAL VIRACOPOS SALA",
        number: "",
        district: "JD ITATINGA",
        city: "Campinas",
        state: "SP"
    },
    {
        name: "TRANSPORTADORA PONTUAL LOGISTICA E DISTRIBUICAO LTDA",
        cnpj: "00.260.413/0002-96",
        zipcode: "07224-050",
        address: "AV SERRA BRANCA",
        number: "397",
        district: "CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "BR CARGO LOGISTICA LTDA - ME",
        cnpj: "03.419.010/0001-54",
        zipcode: "02143-060",
        address: "R SOLDADO JOSE ANTONIO MOREIRA",
        number: "42",
        district: "JD. JAPAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "KOLETUS TRANSPORTADORA E COLETORA DE RESIDUOS LTDA",
        cnpj: "48.051.361/0001-93",
        zipcode: "04244-060",
        address: "R ESTER FERNANDES MORGADO",
        number: "120",
        district: "SAO JOAO CLIMACO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TRANSPORTADORA XARA RIO EIRELI*",
        cnpj: "40.442.949/0002-47",
        zipcode: "02550-080",
        address: "R CONEGO ARAUJO MARCONDES",
        number: "167",
        district: "LIMAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CLAUDIA MARQUES CALDEIRA E CIA - ME*",
        cnpj: "24.916.711/0001-79",
        zipcode: "03881-100",
        address: "R AGENOR DE BARROS",
        number: "337",
        district: "VILA PONTE RASA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "LK TERCEIRIZAÇAO DE SERVIÇOS LTDA",
        cnpj: "13.494.734/0001-16",
        zipcode: "00000-000",
        address: "AV PROJECTA 900",
        number: "",
        district: "CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "TRANSUL SERVICOS, LOCACAO E TRANSPORTE LTDA",
        cnpj: "35.196.765/0011-03",
        zipcode: "07223-010",
        address: "RUA SERRA DO MAR",
        number: "90",
        district: "CIDADE SATELITE DE SAO PAULO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "D.LLELIS DE SOUTO ME",
        cnpj: "10.717.321/0001-65",
        zipcode: "01035-000",
        address: "AV SÃO JOAO 439 LOJA 256",
        number: "",
        district: "CENTRO",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONSORCIO TS - MANUTENCAO LINHAS 11 E 12",
        cnpj: "18.863.918/0001-20",
        zipcode: "01204-003",
        address: "R GUAIANAZES",
        number: "1041",
        district: "CAMPOS ELISEOS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONSORCIO TEJOFRAN SPA RODOMINAS",
        cnpj: "10.735.573/0001-17",
        zipcode: "00000-000",
        address: "R BASILIO MARQUES 31",
        number: "",
        district: "CENTRO",
        city: "Mogi das Cruzes",
        state: "SP"
    },
    {
        name: "CONSORCIO ENERG",
        cnpj: "11.154.920/0001-80",
        zipcode: "01216-000",
        address: "AL NOTHMANN 526",
        number: "",
        district: "CAMPOS ELISEOS",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONSORCIO ST LINHA VERMELHA",
        cnpj: "11.568.046/0001-28",
        zipcode: "01216-000",
        address: "AL NOTHMANN 526",
        number: "",
        district: "CAMPOS ELISEOS",
        city: "SP",
        state: "SP"
    },
    {
        name: "JOSE ANAILDO CARLOS DOS SANTOS TRANSPORTES ME",
        cnpj: "08.571.653/0001-32",
        zipcode: "07053-171",
        address: "ROD FERNAO DIAS 150 KM 88",
        number: "",
        district: "VL SÃO RAFAEL",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "TUBOCERTO INDUSTRIA DE TREFILADOS LTDA",
        cnpj: "60.879.301/0001-69",
        zipcode: "07411-750",
        address: "AV OSAKA",
        number: "25",
        district: "CENTRO INDUSTRIAL",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "TUDOTEM FARMA EIRELI EPP",
        cnpj: "20.125.677/0001-63",
        zipcode: "01037-000",
        address: "R CONSELHEIRO CRISPINIANO 76",
        number: "",
        district: "REPUBLICA",
        city: "SP",
        state: "SP"
    },
    {
        name: "TUFAO SKAPS COM PEÇAS ACESSORIOS LTDA",
        cnpj: "44.727.212/0001-40",
        zipcode: "00000-000",
        address: "AV PADRE ARLINDO VIEIRA 1719",
        number: "",
        district: "VERGUEIRO",
        city: "SP",
        state: "SP"
    },
    {
        name: "EMPRESA DE TURISMO SANTA RITA LTDA",
        cnpj: "61.893.095/0001-04",
        zipcode: "03821-060",
        address: "R SENADOR ELOI DE SOUZA 150",
        number: "",
        district: "VL SILVIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "ARTSANA BRASIL LTDA",
        cnpj: "02.340.424/0009-88",
        zipcode: "71219-900",
        address: "SAI/SO",
        number: "6580",
        district: "ZONA INDUSTRIAL (GUARA)",
        city: "Brasília",
        state: "DF"
    },
    {
        name: "ARTSANA BRASIL LTDA",
        cnpj: "02.340.424/0013-64",
        zipcode: "22640-902",
        address: "AV DAS AMERICAS",
        number: "4666",
        district: "BARRA DA TIJUCA",
        city: "Rio de Janeiro",
        state: "RJ"
    },
    {
        name: "TWENTY SEVEN IMPORTACAO DE PECAS AUTOMOTIVAS LTDA",
        cnpj: "71.593.537/0001-50",
        zipcode: "03123-010",
        address: "R SARAPUI",
        number: "310",
        district: "MOOCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CONSTRUTORA UBIRATAN LTDA",
        cnpj: "43.507.235/0001-87",
        zipcode: "03156-001",
        address: "AV VILA EMA 807",
        number: "",
        district: "VL EMA",
        city: "",
        state: ""
    },
    {
        name: "UNIVERSIDADE FEDERAL DE SANTA MARIA",
        cnpj: "95.591.764/0001-05",
        zipcode: "97105-900",
        address: "AV RORAIMA",
        number: "1000",
        district: "CAMOBI",
        city: "Santa Maria",
        state: "RS"
    },
    {
        name: "UMEDA COMERCIO E DISTRIBUIDORA DE HORTIFRUTI LTDA*",
        cnpj: "22.102.711/0001-00",
        zipcode: "08765-340",
        address: "EST MOGI-TAIACUPEBA",
        number: "S/N",
        district: "TAIACUPEBA",
        city: "Mogi das Cruzes",
        state: "SP"
    },
    {
        name: "UP ACADEMIA LTDA",
        cnpj: "32.627.274/0001-00",
        zipcode: "04037-003",
        address: "R DR DIOGO DE FARIA",
        number: "1099",
        district: "VILA CLEMENTINO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "UP ACADEMIA LTDA",
        cnpj: "32.627.274/0001-00",
        zipcode: "04037-003",
        address: "R DR DIOGO DE FARIA",
        number: "1099",
        district: "VILA CLEMENTINO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "USIFORT - INDUSTRIA DE PECAS LTDA",
        cnpj: "03.084.259/0001-56",
        zipcode: "07400-000",
        address: "AV ADILIA BARBOSA NEVES",
        number: "3800",
        district: "BAIRRO FONTE",
        city: "Arujá",
        state: "SP"
    },
    {
        name: "USINAGEM SABARA LTDA",
        cnpj: "05.268.575/0001-03",
        zipcode: "05069-000",
        address: "R FELIX GUILHEM 985",
        number: "",
        district: "LAPA",
        city: "SP",
        state: "SP"
    },
    {
        name: "USINFLEX IND E COM DE PEÇAS USINADAS E CONFORMADAS LTDA",
        cnpj: "06.081.726/0001-82",
        zipcode: "03737-230",
        address: "R CONCEIÇAO DO RIO VERDE 55",
        number: "",
        district: "JD BUENOS AIRES",
        city: "SP",
        state: "SP"
    },
    {
        name: "UT CABOS IND COM E SERVIÇOS LTDA",
        cnpj: "06.319.244/0001-18",
        zipcode: "05089-001",
        address: "RUA GUAIAPA 489",
        number: "",
        district: "VL LEOPOLDINA",
        city: "",
        state: ""
    },
    {
        name: "UTC ENGENHARIA AS",
        cnpj: "44.023.661/0001-08",
        zipcode: "04726-170",
        address: "AV ALFREDO EGIDIO DE SOUZA ARANHA 384",
        number: "",
        district: "CHAC STO ANTONIO",
        city: "SP",
        state: "SP"
    },
    {
        name: "UTINA TOMODATI COMERCIO DE ALIMENTOS LTDA - ME",
        cnpj: "19.090.202/0001-08",
        zipcode: "09726-901",
        address: "AV KENNEDY",
        number: "700",
        district: "JARDIM TRES MARIAS",
        city: "São Bernardo do Campo",
        state: "SP"
    },
    {
        name: "V-PLAST INDUSTRIA E COMERCIO LTDA",
        cnpj: "27.668.109/0001-58",
        zipcode: "08061-000",
        address: "Avenida Antônio Louzada Antunes",
        number: "44",
        district: "Jardim Pedro José Nunes",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "V V W INDUSTRIA E COMERCIO DE INJECAO DE TERMOPLASTICOS LTDA - ME",
        cnpj: "10.471.016/0001-36",
        zipcode: "07132-550",
        address: "AV ANIBAL MARTINS",
        number: "466",
        district: "JARDIM BELA VISTA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "V V W INDUSTRIA E COMERCIO DE INJECAO DE TERMOPLASTICOS LTDA - ME",
        cnpj: "10.471.016/0001-36",
        zipcode: "07132-550",
        address: "AV ANIBAL MARTINS",
        number: "466",
        district: "JARDIM BELA VISTA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "V VIANA CINTOS LTDA",
        cnpj: "06.969.152/0001-83",
        zipcode: "08160-540",
        address: "R EURIDES FERNANDES DO NASCIMENTO 211",
        number: "",
        district: "ITAIM PTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "VAGNER ELETRO EIRELI",
        cnpj: "04.844.410/0001-70",
        zipcode: "13203-000",
        address: "R VARZEA PAULISTA",
        number: "1341",
        district: "VILA M GENOVEVA",
        city: "Jundiaí",
        state: "SP"
    },
    {
        name: "VALCLEI INDUSTRIA E COMERCIO LTDA",
        cnpj: "60.379.658/0001-88",
        zipcode: "07140-020",
        address: "RUA ENGENHEIRO ALBERT LEIMER",
        number: "237",
        district: "JARDIM SAO GERALDO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "VALDIRENE DA HORA OLIVEIRA ME",
        cnpj: "02.852.223/0001-02",
        zipcode: "05795-210",
        address: "R CELSO CUNHA 18 B",
        number: "",
        district: "JD UMUARAMA",
        city: "SP",
        state: "SP"
    },
    {
        name: "VALE SOLUCOES AMBIENTAIS LTDA",
        cnpj: "09.101.356/0002-77",
        zipcode: "08375-000",
        address: "AV RAGUEB CHIOFI 6300",
        number: "",
        district: "JD IGUATEMI",
        city: "SP",
        state: "SP"
    },
    {
        name: "VALE DO AÇO E FERRO SÃO MIGUEL LTDA",
        cnpj: "16.742.254/0001-15",
        zipcode: "08070-002",
        address: "AV SÃO MIGUEL 6950",
        number: "",
        district: "ERM MATARAZZO",
        city: "SP",
        state: "SP"
    },
    {
        name: "VALE DO VERDAO SOCIEDADE ANONIMA ACUCAR E ALCOOL",
        cnpj: "02.859.452/0002-30",
        zipcode: "75970-000",
        address: "LOC FAZENDA BAESSA",
        number: "S/N",
        district: "RURAL",
        city: "Turvelândia",
        state: "GO"
    },
    {
        name: "VALID SOLUÇOES E SERV DE SEG EM MEIOS DE PAGAMENTO E IDENTIFICAÇAO S/A",
        cnpj: "33.113.309/0023-52",
        zipcode: "01014-912",
        address: "R BOA VISTA 209 15 ANDAR",
        number: "",
        district: "CENTRO",
        city: "SP",
        state: "SP"
    },
    {
        name: "VALKPLAST COM DE EMBALAGENS LTDA",
        cnpj: "14.143.965/0001-48",
        zipcode: "06780-200",
        address: "AV CAMPINAS 717",
        number: "",
        district: "ARRARIAL PAULISTA",
        city: "Taboão da Serra",
        state: "SP"
    },
    {
        name: "VANIA RODRIGUES DOS REIS",
        cnpj: "07.395.745/0001-46",
        zipcode: "05073-000",
        address: "R DOZE DE OUTUBRO",
        number: "568",
        district: "LAPA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VANTAGE TECNOLOGIA DA INFORMAÇAO LTDA",
        cnpj: "11.186.026/0001-92",
        zipcode: "01403-003",
        address: "AL JOAQUIM EUGENIO DE LIMA 187 - 4 ANDAR",
        number: "",
        district: "JD PAULISTA",
        city: "SP",
        state: "SP"
    },
    {
        name: "PANAMA COMERCIO DE ALIMENTOS LTDA",
        cnpj: "01.523.837/0001-88",
        zipcode: "04102-002",
        address: "RUA VERGUEIRO 4260",
        number: "",
        district: "VL MARIANA",
        city: "SP",
        state: "SP"
    },
    {
        name: "ASSOCIACAO DO SHOPPING VAUTIER PREMIUM",
        cnpj: "26.186.587/0001-69",
        zipcode: "03031-000",
        address: "R TIERS",
        number: "184",
        district: "PARI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VAZ SANCHES COM DE EQUIPAMENTOS ESPORTIVOS LTDA - ME",
        cnpj: "11.523.767/0001-11",
        zipcode: "02235-001",
        address: "AV ROLAND GARROS 2282",
        number: "",
        district: "PQ EDU CHAVES",
        city: "SP",
        state: "SP"
    },
    {
        name: "VCAT BOATS LTDA",
        cnpj: "86.755.345/0001-70",
        zipcode: "04809-120",
        address: "R MARIA APARECIDA ANACLETO",
        number: "109",
        district: "TERCEIRA DIVISAO DE INTERLAGOS",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VEDASERVICE COM E SERV DE VEDAÇAO LTDA",
        cnpj: "06.140.667/0001-76",
        zipcode: "07231-000",
        address: "AV NOVA CUMBICA 1316",
        number: "",
        district: "JD NOVA CUMBICA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "VEEVA BRASIL DESENVOLVIMENTO DE SISTEMAS LTDA.",
        cnpj: "19.177.866/0001-09",
        zipcode: "04551-060",
        address: "R FUNCHAL",
        number: "411",
        district: "VILA OLIMPIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VENCEDOR COMERCIAL E IMPORTADORA LTDA",
        cnpj: "15.596.952/0001-97",
        zipcode: "06529-001",
        address: "AV TENENTE MARQUES 6681",
        number: "",
        district: "JD DO LAR",
        city: "SANTANA PARNAIBA",
        state: "SP"
    },
    {
        name: "VENDEMMIA COM INTERNACIONAL LTDA",
        cnpj: "13.631.538/0002-27",
        zipcode: "00000-000",
        address: "RUA FUNCHAL 129 CJ 5 A",
        number: "",
        district: "VL OLIMPIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "VENICE COM DE EQUIPAMENTOS ESPORTIVOS LTDA",
        cnpj: "68.973.502/0001-32",
        zipcode: "07178-001",
        address: "AV CARMELA THOMEU 401",
        number: "",
        district: "VL CARMELA I",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "COSEPA COMERCIO SERVICOS E PARTICIPACOES LTDA",
        cnpj: "30.000.777/0001-17",
        zipcode: "03625-125",
        address: "TV EGENI ADAD COLACO",
        number: "85",
        district: "VILA COSTA MELO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VENTURINI CONSULTORIA TERCEIRIZAÇAO SERVICOS EIRELI",
        cnpj: "08.284.452/0001-54",
        zipcode: "00000-000",
        address: "AL NOTHAMANN 1146",
        number: "",
        district: "SANTA CECILIA",
        city: "SP",
        state: "SP"
    },
    {
        name: "VEPAN ELETRO TECNICA LTDA",
        cnpj: "59.661.264/0001-39",
        zipcode: "08597-630",
        address: "R FLOR DE NOIVA",
        number: "1000",
        district: "QUINTA DA B VISTA",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "VEROBLOCO IND E COM DE ARTEFATOS DE CIMENTO LTDA - EPP",
        cnpj: "07.977.494/0002-99",
        zipcode: "06422-100",
        address: "ESTRADA DAS NAÇOES 707",
        number: "",
        district: "FAZENDA ITAQUITI",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "VETRACK INDUSTRIA E COMERCIO DE RETENTORES LTDA",
        cnpj: "14.134.863/0001-66",
        zipcode: "02987-030",
        address: "R ANTONIO DE NAPOLI 451 ARM 1",
        number: "",
        district: "TAIPAS",
        city: "SP",
        state: "SP"
    },
    {
        name: "VGF QUIMICA IND E COM LTDA",
        cnpj: "17.158.839/0001-55",
        zipcode: "08586-200",
        address: "R DO FERRO 340",
        number: "",
        district: "PQ INDUSTRIAL",
        city: "Itaquaquecetuba",
        state: "SP"
    },
    {
        name: "VHIP INDUSTRIA E COMERCIO DE AUTO PECAS EIRELI",
        cnpj: "05.571.638/0001-04",
        zipcode: "08215-320",
        address: "R ENGENHEIRO VILLARES DA SILVA",
        number: "680",
        district: "ITAQUERA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VIA LESTE BICICLETAS LTDA",
        cnpj: "02.202.310/0001-14",
        zipcode: "08070-002",
        address: "AV SAO MIGUEL",
        number: "5830",
        district: "VILA SIRIA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VIA ONIX CONFECÇOES DE ROUPAS LTDA - ME",
        cnpj: "10.425.436/0001-86",
        zipcode: "03019-050",
        address: "R GONÇALVES DIAS 123",
        number: "",
        district: "BELENZINHO",
        city: "SP",
        state: "SP"
    },
    {
        name: "PACABELLOS JEANS WEAR COMERCIO E CONFECCOES DE ROUPAS LTDA - ME",
        cnpj: "12.642.227/0001-20",
        zipcode: "03017-000",
        address: "R BRESSE 430",
        number: "",
        district: "BRAS",
        city: "SP",
        state: "SP"
    },
    {
        name: "VIA SUDESTE TRANSPORTES S A",
        cnpj: "32.184.522/0003-49",
        zipcode: "04169-000",
        address: "AV DO CURSINO",
        number: "5797",
        district: "VILA MORAES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VIA SUL TRANSPORTES URBANOS LTDA.",
        cnpj: "04.828.667/0004-80",
        zipcode: "08485-465",
        address: "R JOAO CABRAL DE MELO NETO",
        number: "74",
        district: "CONJUNTO HABITACIONAL SANTA ETELVINA III",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "INDUSTRIA E COMERCIO DE CALÇADOS TRES B LTDA",
        cnpj: "58.836.206/0001-36",
        zipcode: "03663-000",
        address: "R NHATUMANI 620",
        number: "",
        district: "VL RE",
        city: "SP",
        state: "SP"
    },
    {
        name: "VIACAO GARCIA LTDA",
        cnpj: "78.586.674/0001-07",
        zipcode: "86039-000",
        address: "AV CELSO GARCIA CID",
        number: "1100",
        district: "BOA VISTA",
        city: "Londrina",
        state: "PR"
    },
    {
        name: "VIANACAR ADMINISTRADORA E CORRETAGEM DE SEGUROS LTDA",
        cnpj: "05.280.388/0002-26",
        zipcode: "04262-200",
        address: "Avenida Nazaré",
        number: "1070",
        district: "Ipiranga",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VIANACAR ADMINISTRADORA E CORRETAGEM DE SEGUROS LTDA.",
        cnpj: "05.280.388/0001-45",
        zipcode: "07111-340",
        address: "R TAPAJOS",
        number: "100",
        district: "JARDIM BARBOSA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "VIA SUL TRANSPORTES URBANOS LTDA.",
        cnpj: "04.828.667/0002-19",
        zipcode: "08265-150",
        address: "R IOSOSUKE OKAUE",
        number: "488",
        district: "PARQUE DO CARMO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VIA SUL TRANSPORTES URBANOS LTDA FILIAL",
        cnpj: "04.828.667/0003-08",
        zipcode: "04177-370",
        address: "R GUAIANA",
        number: "608",
        district: "JARDIM CLIMAX",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VICTTORY EVENTOS LTDA - ME",
        cnpj: "09.184.410/0001-04",
        zipcode: "03633-080",
        address: "R CAIRO",
        number: "6",
        district: "PENHA DE FRANCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "CASA DE APOIO A CRIANCA COM CANCER VIDA DIVINA",
        cnpj: "05.248.144/0001-85",
        zipcode: "03807-290",
        address: "R MARTINHO DE SOUZA",
        number: "207",
        district: "ERMELINO MATARAZZO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ULTRACENTER IND E COM DE AÇOS LTDA",
        cnpj: "06.151.891/0001-63",
        zipcode: "04809-040",
        address: "AV SENADOR TEOTONIO VILELA 1891",
        number: "",
        district: "INTERLAGOS",
        city: "",
        state: ""
    },
    {
        name: "VIL REAL ENGENHARIA E CONSTRUÇOES LTDA",
        cnpj: "02.079.939/0001-19",
        zipcode: "02402-400",
        address: "R VOLUNTARIOS DA PATRIA 3744 CJ 122",
        number: "",
        district: "SANTANA",
        city: "SP",
        state: "SP"
    },
    {
        name: "CONDOMINIO EDIFICIO PARATY",
        cnpj: "07.965.489/0001-85",
        zipcode: "07060-162",
        address: "R RICARDO BIONDI 79",
        number: "",
        district: "VL FANNY",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "VILLAGUA ATIVIDADES IMOBILIARIAS LTDA",
        cnpj: "01.406.286/0001-72",
        zipcode: "07111-010",
        address: "R SILVIO BARBOSA",
        number: "157",
        district: "VILA CAMARGOS",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "VIP MR SERVICOS DE PORTARIA E LIMPEZA LTDA - ME",
        cnpj: "11.738.406/0001-92",
        zipcode: "08240-260",
        address: "R ALMINO AFONSO",
        number: "331",
        district: "JARDIM NORMA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VIRA FESTA SHOWS E EVENTOS LTDA - ME",
        cnpj: "08.411.726/0001-29",
        zipcode: "08090-040",
        address: "R JOAO LOPES MACIEL",
        number: "31",
        district: "SAO MIGUEL PAULISTA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VISION INDUSTRIA E COMERCIO LTDA - EPP",
        cnpj: "50.885.193/0001-83",
        zipcode: "03126-007",
        address: "R DIANOPOLIS",
        number: "1654",
        district: "PARQUE DA MOOCA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "HR VISTORIAS AUTOMOTIVAS LTDA ME",
        cnpj: "22.949.380/0001-48",
        zipcode: "05136-001",
        address: "AV ELISIO CORDEIRO DE SIQUEIRA 470",
        number: "",
        district: "JD SANTO ELIAS",
        city: "SP",
        state: "SP"
    },
    {
        name: "CLAUDIO MARINHO ALVES - ME",
        cnpj: "04.552.776/0000-17",
        zipcode: "08161-130",
        address: "R CIPO DO REINO 6",
        number: "",
        district: "JD DOS IPES",
        city: "SP",
        state: "SP"
    },
    {
        name: "CLAUDIO MARINHO ALVES - ME",
        cnpj: "04.552.776/0001-75",
        zipcode: "08161-130",
        address: "R CIPO DO REINO",
        number: "6",
        district: "JARDIM DOS IPES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VITTRINI ROCK COMERCIO DE ROUPAS E ACESSORIOS LTDA - ME",
        cnpj: "11.054.436/0001-80",
        zipcode: "01035-000",
        address: "AV SAO JOAO",
        number: "439",
        district: "CENTRO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VIVA PLENA CONSULTORIA E CORRETAGEM DE SEGUROS LTDA",
        cnpj: "08.952.006/0001-70",
        zipcode: "01046-010",
        address: "AV IPIRANGA",
        number: "104",
        district: "REPUBLICA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VIVIANI VEICULOS RIO CLARO LTDA",
        cnpj: "00.550.527/0001-90",
        zipcode: "13503-750",
        address: "ROD WASHINGTON LUIZ",
        number: "S/N",
        district: "JD NOVO HORIZONTE",
        city: "Rio Claro",
        state: "SP"
    },
    {
        name: "VOLPI COM DE AUTO PEÇAS LTDA ME",
        cnpj: "07.812.249/0001-40",
        zipcode: "09850-480",
        address: "ESTRADA COOPERATIVA 375",
        number: "",
        district: "VL ALVES DIAS",
        city: "SBCAMPO",
        state: "SP"
    },
    {
        name: "VSTP EDUCACAO LTDA",
        cnpj: "11.319.526/0004-06",
        zipcode: "01538-001",
        address: "AV LINS DE VASCONCELOS",
        number: "1264",
        district: "CAMBUCI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VSTP EDUCACAO LTDA",
        cnpj: "11.319.526/0001-55",
        zipcode: "01538-001",
        address: "AV LINS DE VASCONCELOS",
        number: "1222",
        district: "CAMBUCI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "VSTP EDUCACAO LTDA",
        cnpj: "11.319.526/0005-89",
        zipcode: "06455-000",
        address: "AL ARAGUAIA",
        number: "1142",
        district: "ALPHAVILLE INDUSTRIAL",
        city: "Barueri",
        state: "SP"
    },
    {
        name: "VOETUR CARGAS E ENCOMENDAS LTDA",
        cnpj: "24.893.687/0001-08",
        zipcode: "71608-900",
        address: "AER INT DE BSB",
        number: "S/N",
        district: "AEROPORTO",
        city: "Brasília",
        state: "DF"
    },
    {
        name: "VYLARRO DOCERIA LTDA",
        cnpj: "05.475.831/0001-33",
        zipcode: "08562-140",
        address: "R VINTE E SEIS DE MARCO",
        number: "190",
        district: "CENTRO",
        city: "Poá",
        state: "SP"
    },
    {
        name: "W RENT ABC LOCACAO DE MAQUINAS LTDA - ME",
        cnpj: "19.298.864/0001-60",
        zipcode: "09080-320",
        address: "R VITORIA REGIA",
        number: "50",
        district: "CAMPESTRE",
        city: "Santo André",
        state: "SP"
    },
    {
        name: "W. G. SOUTO ARTEFATOS DE ARAME",
        cnpj: "10.433.601/0001-41",
        zipcode: "03554-100",
        address: "R ANTONIO TABORDA",
        number: "64",
        district: "JARDIM TRIANA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "WALNICE - CIGANINHA INDUSTRIA E COMERCIO DE CALCADOS LTDA - EPP",
        cnpj: "07.913.934/0001-63",
        zipcode: "03683-010",
        address: "R ANTONIO OLIMPIO",
        number: "545",
        district: "VILA UNIAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "WALPLAST INDUSTRIA E COMERCIO LTDA - EPP",
        cnpj: "45.632.692/0001-29",
        zipcode: "08280-420",
        address: "R GERVASIO MOTA VITORIA",
        number: "68",
        district: "CID LIDER ITAQUERA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "WATTCRON RESISTENCIAS ELETRICAS LTDA - EPP",
        cnpj: "02.008.572/0001-42",
        zipcode: "03019-050",
        address: "R GONCALVES DIAS",
        number: "63",
        district: "CATUMBI",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "B & W PRODUTOS PARA AUTOMACAO INDUSTRIAL LTDA - EPP",
        cnpj: "17.440.680/0001-67",
        zipcode: "03158-070",
        address: "R MANDIUBA",
        number: "118",
        district: "VILA CELESTE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "WEB TUBOS EIRELI - ME",
        cnpj: "09.224.902/0001-86",
        zipcode: "03930-300",
        address: "AV RIO DAS PEDRAS",
        number: "3250",
        district: "JARDIM ARICANDUVA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "WEST ENGENHARIA DE INSPECAO LTDA.",
        cnpj: "07.849.470/0005-05",
        zipcode: "07232-078",
        address: "R ICO",
        number: "275",
        district: "CIDADE INDUSTRIAL SATELITE DE SAO PAULO",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "WIN DO BRASIL CONFECCOES LTDA",
        cnpj: "00.573.232/0001-39",
        zipcode: "03073-040",
        address: "R BARRA BONITA",
        number: "131",
        district: "TATUAPE",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "WMODA EIRELI - EPP",
        cnpj: "24.436.801/0001-62",
        zipcode: "05021-010",
        address: "R TUCUNA",
        number: "502",
        district: "PERDIZES",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TW ESPUMAS LTDA.",
        cnpj: "00.789.312/0001-26",
        zipcode: "09891-005",
        address: "PSG DE SERVIDAO - TOYOTA DO BRASIL",
        number: "1113",
        district: "PLANALTO",
        city: "São Bernardo do Campo",
        state: "SP"
    },
    {
        name: "WR2 EURO EMPREENDIMENTOS IMOBILIARIOS LTDA",
        cnpj: "17.886.691/0001-75",
        zipcode: "01139-001",
        address: "AV MARQUES DE SAO VICENTE",
        number: "121",
        district: "VARZEA DA BARRA FUNDA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "WR2 BARAO DE PENEDO EMPREENDIMENTOS SPE LTDA",
        cnpj: "12.209.320/0001-35",
        zipcode: "01139-001",
        address: "AV MARQUES DE SAO VICENTE",
        number: "121",
        district: "BARRA FUNDA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "WU SANTA INES EMPREENDIMENTOS IMOBILIARIOS LTDA",
        cnpj: "18.383.863/0001-50",
        zipcode: "01139-001",
        address: "AV MARQUES DE SÃO VICENTE 121 SALA 1502 BLOCO B",
        number: "121",
        district: "BARRA FUNDA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "WWGS MONTAGEM DE MOVEIS LTDA - EPP",
        cnpj: "04.674.011/0001-08",
        zipcode: "03803-000",
        address: "R FERNAO MENDES PINTO",
        number: "1121",
        district: "PARQUE BOTURUSSU",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "TRANSPORTADORA XARA RIO EIRELI*",
        cnpj: "40.442.949/0001-66",
        zipcode: "25055-009",
        address: "ROD WASHINGTON LUIZ",
        number: "2569",
        district: "VILA SAO LUIS",
        city: "Duque de Caxias",
        state: "RJ"
    },
    {
        name: "JMB CENTRO AUTOMOTIVO LTDA",
        cnpj: "13.783.294/0001-17",
        zipcode: "04777-001",
        address: "AV INTERLAGOS 6477",
        number: "",
        district: "INTERLAGOS",
        city: "SP",
        state: "SP"
    },
    {
        name: "AUTO JM SOM E ACESSORIOS AUTOMOTIVOS LTDA - ME",
        cnpj: "09.098.699/0001-49",
        zipcode: "04805-300",
        address: "AV PROFESSOR PAPINI",
        number: "37",
        district: "CIDADE DUTRA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "AUTO JM II SOM E ACESSORIOS AUTOMOTIVOS LTDA - ME",
        cnpj: "14.419.997/0001-23",
        zipcode: "04686-001",
        address: "AV NOSSA SENHORA DE SABARA",
        number: "1108",
        district: "VILA ISA",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "YORGOS AMBIENTAL LTDA*",
        cnpj: "08.726.888/0001-56",
        zipcode: "03401-001",
        address: "R ANTONIO DE BARROS",
        number: "2080",
        district: "VILA CARRAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ZEMA LOJAS DE CONVENIENCIA LTDA",
        cnpj: "04.981.373/0001-41",
        zipcode: "38180-129",
        address: "AV MINISTRO OLAVO DRUMOND",
        number: "190",
        district: "NOVO SAO GERALDO",
        city: "Araxá",
        state: "MG"
    },
    {
        name: "ZANTI ASSESSORIA CONTABIL SS - EPP",
        cnpj: "04.112.566/0001-66",
        zipcode: "04632-010",
        address: "R VAPABUSSU",
        number: "303",
        district: "JARDIM AEROPORTO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ZAP S.A. INTERNET",
        cnpj: "03.628.561/0001-28",
        zipcode: "01415-001",
        address: "RUA BELA CINTRA",
        number: "539",
        district: "CONSOLACAO",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ZINCOREX INDUSTRIA E GALVANOPLASTIA LTDA",
        cnpj: "04.193.220/0001-30",
        zipcode: "07223-190",
        address: "R MINEIROS",
        number: "417",
        district: "CID IND SATELITE SP",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "ZIRCOBRAX INDUSTRIA E COMERCIO DE PRODUTOS CERAMICOS LTDA",
        cnpj: "08.378.219/0001-30",
        zipcode: "09372-030",
        address: "R GIRASSOL",
        number: "301",
        district: "LOTEAMENTO INDUSTRIAL CORAL",
        city: "Mauá",
        state: "SP"
    },
    {
        name: "ZISSOU ASSESSORIA E CONSULTORIA EM ARTIGOS DO SONO S.A.",
        cnpj: "24.878.066/0001-47",
        zipcode: "01417-010",
        address: "R DOUTOR MELO ALVES",
        number: "383",
        district: "CERQUEIRA CESAR",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "ZL COMERCIO DE BEBIDAS LTDA EPP",
        cnpj: "02.766.151/0002-61",
        zipcode: "",
        address: "",
        number: "",
        district: "",
        city: "",
        state: ""
    },
    {
        name: "ZL COMERCIO DE BEBIDAS LTDA - EPP",
        cnpj: "02.766.151/0001-80",
        zipcode: "07130-000",
        address: "AV BRIGADEIRO FARIA LIMA",
        number: "3182",
        district: "COCAIA",
        city: "Guarulhos",
        state: "SP"
    },
    {
        name: "TRIDA & TRIDA CONSTRUTORA E INDUSTRIA DE ESTRUTURAS METALICAS LTDA",
        cnpj: "53.368.262/0001-70",
        zipcode: "01516-100",
        address: "AV DO ESTADO",
        number: "6728",
        district: "IPIRANGA",
        city: "São Paulo",
        state: "SP"
    }
]