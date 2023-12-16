var mongoose = require("mongoose");

const addmissionSchema = mongoose.Schema({
    name:{ type: String, default: null},
    age: { type: String, default: null},
    grade: { type: String, default: null},
    parents:{ type: String, default: null},
    email: { type: String, default: null},
    national: { type: String, default: null},
    place: { type: String, default: null},
    dateBirth: { type: String, default: null},
    religion: { type: String, default: null},
    __v: {type: Number, select: false},
    _id: { type: mongoose.Schema.Types.ObjectId, select: false }
});

module.exports = mongoose.model("addmissionRecord", addmissionSchema);