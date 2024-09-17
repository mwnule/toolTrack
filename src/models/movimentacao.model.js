const mongoose = require('mongoose');

// Definindo o esquema da Movimentação
const MovimentacaoSchema = mongoose.Schema(
  {
    // Data e hora da movimentação
    dataHora: {
      type: Date,
      required: [true, 'Por favor, forneça a data e hora da movimentação'],
    },

    // Localização anterior da ferramenta
    localizacaoAnterior: {
      type: String,
      required: [true, 'Por favor, forneça a localização anterior da ferramenta'],
    },

    // Nova localização da ferramenta após a movimentação
    localizacaoAtual: {
      type: String,
      required: [true, 'Por favor, forneça a nova localização da ferramenta'],
    },

    // Descrição do motivo da movimentação
    descricao: {
      type: String,
      required: [true, 'Por favor, forneça uma descrição para a movimentação'],
    },

    // Ferramenta associada (referência ao ID da ferramenta)
    ferramenta: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tool', // Nome do modelo de ferramenta
      required: [true, 'Por favor, forneça a ferramenta associada'],
    },

    // Usuário associado (referência ao ID do usuário que realizou a movimentação)
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Nome do modelo de usuário
      required: [true, 'Por favor, forneça o usuário associado'],
    },
  },
  {
    timestamps: true, // Adiciona campos de createdAt e updatedAt
  }
);

const Movimentacao = mongoose.model('Movimentacao', MovimentacaoSchema);

module.exports = Movimentacao;
