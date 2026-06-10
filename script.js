/* ==========================================================================
   1. VARIÁVEIS DE AMBIENTE E PALETA DE CORES (:root)
   ========================================================================== */
:root {
    /* Cores Principais - Agro & Sustentabilidade (Alto Contraste) */
    --cor-primaria: #1b4332;       /* Verde Floresta Profundo (Confiança e Natureza) */
    --cor-secundaria: #f4f1de;     /* Creme/Terra Suave (Fundo confortável para os olhos) */
    --cor-destaque: #e07a5f;       /* Terracota Vibrante (Contraste alto para Botões/Ações) */
    
    /* Cores de Apoio */
    --cor-texto: #2b2d42;          /* Grafite Escuro (Excelente legibilidade sobre o creme) */
    --cor-branco: #ffffff;         /* Branco Puro para contrastar no cabeçalho */
    --cor-erro: #d90429;           /* Vermelho Alerta para validações do JavaScript */
    
    /* Tipografia e Espaçamento */
    --fonte-principal: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --borda-raio: 8px;             /* Arredondamento moderno para elementos da interface */
}

/* ==========================================================================
   2. RESET GLOBAL (*) - Consistência entre Navegadores
   ========================================================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Garante que padding e border não quebrem a largura */
}

/* ==========================================================================
   3. ESTILIZAÇÃO E TIPOGRAFIA DA ESTRUTURA
   ========================================================================== */
body {
    font-family: var(--fonte-principal);
    background-color: var(--cor-secundaria);
    color: var(--cor-texto);
    line-height: 1.6; /* Espaçamento entre linhas confortável para leitura */
    padding: 0;
}

/* Cabeçalho */
header {
    background-color: var(--cor-primaria);
    color: var(--cor-branco);
    text-align: center;
    padding: 40px 20px;
}

header h1 {
    font-size: 2.2rem;
    margin-bottom: 10px;
    letter-spacing: 0.5px;
}

header p {
    font-size: 1.1rem;
    opacity: 0.9;
}

/* Área de Conteúdo Principal */
main {
    max-width: 800px; /* Limita a largura para a leitura não ficar cansativa */
    margin: 40px auto; /* Centraliza a página na tela */
    padding: 0 20px;
}

/* Seções */
section {
    background-color: var(--cor-branco);
    padding: 30px;
    border-radius: var(--borda-raio);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); /* Sombra suave profissional */
    margin-bottom: 30px;
}

section h2 {
    color: var(--cor-primaria);
    margin-bottom: 15px;
    font-size: 1.5rem;
    border-left: 5px solid var(--cor-primaria); /* Detalhe visual elegante na esquerda */
    padding-left: 10px;
}

/* ==========================================================================
   4. COMPONENTES DE INTERAÇÃO (Formulário e Inputs)
   ========================================================================== */
form {
    display: block;
    margin-top: 20px;
}

form label {
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
}

form input {
    width: 100%;
    padding: 12px;
    font-size: 1rem;
    border: 2px solid #ccc;
    border-radius: var(--borda-raio);
    margin-bottom: 15px;
    transition: border-color 0.3s ease;
}

/* Feedback visual de foco para o usuário */
form input:focus {
    border-color: var(--cor-primaria);
    outline: none;
}

/* Botão de Ação Principal */
button {
    width: 100%;
    background-color: var(--cor-destaque);
    color: var(--cor-branco);
    border: none;
    padding: 14px;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: var(--borda-raio);
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.1s ease;
}

/* Efeitos de Hover e Active para melhor UX */
button:hover {
    background-color: #c9644b; /* Tom ligeiramente mais escuro no hover */
}

button:active {
    transform: scale(0.98); /* Efeito de clique físico */
}

/* Painel onde os dados ou erros aparecerão */
#painel-resultado {
    margin-top: 25px;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: var(--borda-raio);
    border: 1px dashed #ccc;
}

.mensagem-inicial {
    font-style: italic;
    color: #6c757d;
    text-align: center;
}

/* Classes utilitárias que o JavaScript usará para estilizar os retornos */
.erro-card {
    color: var(--cor-erro);
    font-weight: bold;
    border-left: 4px solid var(--cor-erro);
    padding-left: 10px;
}

.sucesso-card h3 {
    color: var(--cor-primaria);
    margin-bottom: 8px;
}

/* ==========================================================================
   5. RODAPÉ
   ========================================================================== */
footer {
    text-align: center;
    padding: 30px 20px;
    font-size: 0.9rem;
    color: #666;
    background-color: #e9e6df; /* Tom terra ligeiramente mais escuro que o fundo */
    margin-top: 60px;
}
