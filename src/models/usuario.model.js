const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    // nome do usuário
    nome: {
      type: String,
      required: [true, "Por favor, forneça o nome do usuário"],
    },

    // email do usuário
    email: {
      type: String,
      required: [true, "Por favor, forneça o email do usuário"],
      unique: true, // email deve ser único
    },

    // senha do usuário
    senha: {
      type: String,
      required: [true, "Por favor, forneça a senha do usuário"],
    },

    // tipo do usuário
    tipo: {
      type: String,
      enum: ["Admin", "Operador"], // pode ser "Admin" ou "Operador"
      default: "Operador", // tipo padrão
    },
  },
  {
    timestamps: true, // adiciona campos de createdAt e updatedAt
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
