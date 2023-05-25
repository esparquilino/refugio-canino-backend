const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Debe proporcionar un nombre"],
      minlenght: [3, "Cada nombre debe tener minimo 3 caracteres"],
      maxlenght: [50, "Cada perro debe tener maximo 50 caracteres"],
      trim: true,
      lowercase: true,
    },
    lastName: {
      type: String,
      required: [true, "Debe proporcionar un nombre"],
      minlenght: [3, "Cada nombre debe tener minimo 3 caracteres"],
      maxlenght: [50, "Cada perro debe tener maximo 50 caracteres"],
      trim: true,
      lowercase: true,
    },
    dogName: {
      type: String,
      required: [true, "Debe proporcionar un nombre"],
      minlenght: [3, "Cada nombre debe tener minimo 3 caracteres"],
      maxlenght: [50, "Cada perro debe tener maximo 50 caracteres"],
      trim: true,
      lowercase: true,
    },
    tel: {
      type: String,
      required: [true, "Debe proporcionar un numero  de telefono"],
      minlenght: [3, "Cada nombre debe tener minimo 10 caracteres"],
      maxlenght: [50, "Cada perro debe tener maximo 10 caracteres"],
      trim: true,
      lowercase: true,
    },
    reason: {
      type: String,
      required: [true, "Debe proporcionar una razon"],
      minlenght: [10, "Cada razon debe tener minimo 10 caracteres"],
      maxlenght: [1000, "Cada razon debe tener maximo 200 caracteres"],
      trim: true,
      lowercase: true,
    },
    resolved: {
      type: Boolean,
      default: false,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
