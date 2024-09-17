const mongoose = require('mongoose');

// Definindo o esquema da Ferramenta
const ToolSchema = mongoose.Schema(
  {
    // Nome da ferramenta
    nome: {
      type: String,
      required: [true, 'Por favor, forneça o nome da ferramenta'],
    },

    // Localização atual da ferramenta
    localizacao: {
      type: String,
      required: [true, 'Por favor, forneça a localização da ferramenta'],
    },

    // Estado da ferramenta (em uso, disponível, manutenção)
    estado: {
      type: String,
      enum: ['em uso', 'disponível', 'manutenção'],
      required: [true, 'Por favor, forneça o estado da ferramenta'],
    },

    // Última movimentação registrada (referência a um ID de movimentação)
    ultimaMovimentacao: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movimentacao', // Nome do modelo de movimentação
      required: false, // Campo opcional
    },
  },
  {
    timestamps: true, // Adiciona campos de createdAt e updatedAt
  }
);

// Criando o modelo a partir do esquema
const Tool = mongoose.model('Tool', ToolSchema);

module.exports = Tool;
