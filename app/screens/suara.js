import { Image } from "react-native";

const questions = [
  {
    imageQuestion: [{ Image: require("../assets/gamelan-gede.png") }],
    question: "Suara music apakah ini ?",
    answers: [
      { id: "1", text: "Angklung" },
      { id: "2", text: "Bonang", correct: true },
      { id: "3", text: "Suling" },
      { id: "4", text: "Rebana" },
    ],
  },
  {
    question: "Jenis Musik apakah ini?",
    answers: [
      { id: "1", text: "Gendang" },
      { id: "2", text: "Sasando" },
      { id: "3", text: "Gamelan" },
      { id: "4", text: "Kolintang", correct: true },
    ],
  },
  {
    question: "Suara musik tersebut berasal dari Provinsi?",
    answers: [
      { id: "1", text: "Jawa Barat" },
      { id: "2", text: "Jawa Tengah" },
      { id: "3", text: "Sumatera Barat" },
      { id: "4", text: "Kalimantan Timur", correct: true },
    ],
  },
  {
    question: "Suara tersebut sering dimainkan didaerah Jawa, yaitu?",
    answers: [
      { id: "1", text: "Gendang" },
      { id: "2", text: "Panting" },
      { id: "3", text: "Kecapi" },
      { id: "4", text: "Gong", correct: true },
    ],
  },
  {
    question: "Suara apakah ini ?",
    answers: [
      { id: "1", text: "Rebab" },
      { id: "2", text: "Genggong" },
      { id: "3", text: "Kompang" },
      { id: "4", text: "Gendang", correct: true },
    ],
  },
];

export default questions;
