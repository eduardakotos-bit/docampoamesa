/* ==========================================================================
   1. BANCO DE DADOS SIMULADO (Simula dados vindos do campo/produtor)
   ========================================================================== */
const bancoDeDadosAgro = {
    "101": {
        produto: "Tomate Cereja Orgânico",
        produtor: "Sítio Primavera - Família Silva",
        localizacao: "Castro - Paraná",
        sustentabilidade: "Uso de biofertilizantes, zero agrotóxicos e irrigação por gotejamento (economia de 40% de água).",
        pegadaCarbono: "Baixa (Distribuição regionalizada)"
    },
    "102": {
        produto: "Alface Crespa Hidropônica",
        produtor: "Chácara Verde Vida",
        localizacao: "São José dos Pinhais - Paraná",
        sustentabilidade: "Cultivo protegido com energia solar e reutilização total da água do sistema nutricional.",
        pegadaCarbono: "Neutro (Compensado via plantio de árvores nativas)"
    },
    "103": {
        produto: "Mel Silvestre Silvestre",
        produtor: "Apicultura Florescer",
        localizacao: "Prudentópolis - Paraná",
        sustentabilidade: "Preservação de mata nativa para pasto apícola e proteção de polinizadores locais.",
        pegadaCarbono: "Negativa (Fixação de carbono pela manutenção da floresta)"
    }
};

/* ==========================================================================
   2. CAPTURA DOS ELEMENTOS DA INTERFACE (DOM)
   ========================================================================== */
const botaoRastrear = document.querySelector("#botao-rastrear");
const inputCodigo = document.querySelector("#codigo-lote");
const painelResultado = document.querySelector("#painel-resultado");

/* ==========================================================================
   3. FUNÇÃO PRINCIPAL DE PROCESSAMENTO E VALIDAÇÃO
   ========================================================================== */
function processarRastreio() {
    // Captura o valor digitado e remove espaços extras
    const codigoDigitado = inputCodigo.value.trim();

    /* --- VALIDAÇÃO ESTRITA --- */
    
    // Regra 1: Verifica se o campo está vazio
    if (codigoDigitado === "") {
        exibirErro("Por favor, insira o código do lote para realizar a investigação.");
        return; // Interrompe a execução
    }

    // Converte para número para realizar validações matemáticas
    const codigoNumerico = Number(codigoDigitado);

    // Regra 2: Verifica se o número é negativo
    if (codigoNumerico < 0) {
        exibirErro("Código inválido! Os lotes de rastreio são identificados apenas por números positivos.");
        return;
    }

    // Regra 3: Verifica se o código existe no nosso banco de dados do Agro
    if (!bancoDeDadosAgro[codigoDigitado]) {
        exibirErro(`O lote "${codigoDigitado}" não foi encontrado. Verifique o número no rótulo e tente novamente (Ex: 101, 102, 103).`);
        return;
    }

    /* --- RENDERIZAÇÃO DO SUCESSO (DADOS VÁLIDOS) --- */
    const loteEncontrado = bancoDeDadosAgro[codigoDigitado];
    
    // Injeta o HTML diretamente na página de forma elegante, usando as classes do CSS
    painelResultado.innerHTML = `
