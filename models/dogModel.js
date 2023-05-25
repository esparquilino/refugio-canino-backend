const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema(
  {
    dogName: {
      type: String,
      required: [true, "Cada perro debe tener un nombre"],
      unique: true,
      minlenght: [3, "Cada perro debe tener minimo 3 caracteres"],
      maxlenght: [50, "Cada perro debe tener maximo 50 caracteres"],
      trim: true,
      lowercase: true,
    },
    sex: {
      type: String,
      required: [true, "Cada perro debe tener el sexo"],
      enum: {
        values: ["macho", "hembra"],
        message: `Cada perro debe tener el sexo "macho" o "hembra"`,
      },
    },
    humanB: {
      type: String,
      trim: true,
      required: [
        true,
        "Cada perro debe describir el comportamiento con humanos",
      ],
      default: "convive",
      enum: {
        values: ["convive", "no convive"],
        message: `Especifique el comportamiento del perro con humanos entre: "convive" o "no convive" `,
      },
    },
    dogB: {
      type: String,
      trim: true,
      required: [
        true,
        "Cada perro debe describir el comportamiento con otros perros",
      ],
      default: "convive",
      enum: {
        values: ["convive", "no convive"],
        message: `Especifique el comportamiento del perro con otros perros entre: "convive" o "no convive" `,
      },
    },
    animalB: {
      type: String,
      trim: true,
      lowercase: true,
      required: [
        true,
        "Cada perro debe describir el comportamiento con ganado y aves de corral",
      ],
      default: "convive",
      enum: {
        values: ["convive", "no convive"],
        message: `Especifique el comportamiento del perro con ganado y aves de corral entre: "convive" o "no convive" `,
      },
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    createdBy: {
      type: String,
      trim: true,
      lowercase: true,
      default: "angel c",
    },
    born: {
      type: Date,
      required: [
        true,
        "Cada perro debe tener su edad en el siguiente formato 'año mes' en números",
      ],
    },
    sterilized: {
      type: Boolean,
      default: true,
    },
    images: {
      type: [String],
      required: [true, "Debe elegir al menos una foto"],
    },
    isAlive: {
      type: Boolean,
      default: true,
    },
    isShown: {
      type: Boolean,
      default: true,
    },
    breed: {
      trim: true,
      lowercase: true,
      type: String,
      default: "mestizo",
    },
    adopted: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "m",
      enum: {
        values: ["xs", "s", "m", "l", "xl"],
        message: `Cada perro debe tener el tamaño, elija entre "xs", "s", "m", "l", "xl"`,
      },
    },
    notes: {
      trim: true,
      lowercase: true,
      type: String,
    },
    warning: {
      trim: true,
      lowercase: true,
      type: String,
    },
    dataContact: {
      adoptedDate: {
        // select: false,
        default: Date.now(),
        type: Date,
        trim: true,
        lowercase: true,
      },
      name: {
        // select: false,
        default: "Refugio canino mi mejor amigo",
        type: String,
        trim: true,
        lowercase: true,
        minlenght: [3, "Cada perro debe tener minimo 3 caracteres"],
      },
      tel: {
        // select: false,
        default: "0",
        type: String,
        trim: true,
        minlenght: [10, "Debe proporcionar un número de telefono válido"],
        minlenght: [10, "Debe proporcionar un número de telefono válido"],
      },
      address: {
        // select: false,
        default: "Refugio canino",
        type: String,
        trim: true,
        lowercase: true,
      },
    },
  },

  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
