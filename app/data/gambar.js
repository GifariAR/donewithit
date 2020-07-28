import { Image } from "react-native";

const questions = [
  {
    question: "Alat musik apakah ini?",
    imageQuestion: require("../assets/Jawa/angklung.jpg"),
    answers: [
      { id: "1", text: "Angklung", correct: true },
      { id: "2", text: "Bonang" },
      { id: "3", text: "Suling" },
      { id: "4", text: "Rebana" },
    ],
  },
  {
    question:
      "Dimainkan dengan cara ditepuk telapak tangan, alat musik apakah ini?",
    imageQuestion: require("../assets/Jawa/Bonang-Gede.png"),
    answers: [
      { id: "1", text: "Gendang" },
      { id: "2", text: "Sasando", correct: true },
      { id: "3", text: "Gamelan" },
      { id: "4", text: "Kolintang" },
    ],
  },
  {
    question:
      "Alat musik tersebut berasal dari NTT yang berbentuk seperti harpa, gambar apakah ini?",
    answers: [
      { id: "1", text: "Sasando", correct: true },
      { id: "2", text: "Gamelan" },
      { id: "3", text: "Genggong" },
      { id: "4", text: "Jengglong" },
    ],
  },
  {
    question: "Alat Musik ini budaya arab, gambar tersebut berasal dari?",
    answers: [
      { id: "1", text: "Kalimantan Timur" },
      { id: "2", text: "Sulawesi Utara" },
      { id: "3", text: "Aceh" },
      { id: "4", text: "Riau", correct: true },
    ],
  },
];

export default questions;
