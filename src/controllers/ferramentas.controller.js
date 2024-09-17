// Contador que gera IDs para o objeto. Inicia com 1 para o primeiro objeto receber o ID 1.
let proxId = 1;

// Função para criar um novo modelo
const model = (body, id = proxId++) => {
    // Verifica se todos os campos necessários estão presentes
    if (
        body.nome !== undefined &&
        body.localizacao !== undefined &&
        body.estado !== undefined &&
        body.tipo !== undefined
    ) {
        return {
            id,
            nome: body.nome,
            localizacao: body.localizacao,
            estado: body.estado,
            tipo: body.tipo
        };
    } else {
        // Retorna um erro se algum campo estiver ausente
        throw new Error("Todos os campos (nome, email, senha, tipo) são necessários.");
    }
};