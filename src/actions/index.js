export const LOAD_TESTS = 'LOAD_TESTS';
export const LOAD_TEST = 'LOAD_TEST';
export const LOAD_FRIENDS = 'LOAD_FRIENDS';

const tests = [
  { id: 1, title: 'Examen de Historia del Peru'},
  { id: 2, title: 'Examen de Literatura'},
  { id: 3, title: 'Examen de Familia y Civismo'},
  { id: 4, title: 'Examen de Religion'},
  { id: 5, title: 'Examen de Literatura'},
  { id: 6, title: 'Examen de Cienias Naturales'}
];

const friends = [
  { name: 'Erikson'},
  { name: 'Franchesca'},
  { name: 'Sayury'},
  { name: 'Gabriela'},
  { name: 'Miguel'},
  { name: 'Meladith'},
  { name: 'Jose'},
  { name: 'Elizabeth'},
  { name: 'Sixto'},
  { name: 'Itachi'},
  { name: 'Doris'},
  { name: 'Mario'}
]

const test = {
  title: 'Examen de Historia del Peru',
  questions: [
    { number: "1", question: "Quien descubrio America?", answer: { type: "simple", answer: "Cristobal Colon" } },
    { number: "2", question: "Cual es el mejor atractiovo turistico del peru?", answer: { type: "simple", answer: "MAcchu Picchu" } },
    { number: "3", question: "Quien fue el declarador de la Independencia en el Peru?", answer: { type: "simple", answer: "Jose de San Martin" } },
    { number: "4", question: "Como se llama la mujer de Manco Capac?", answer: { type: "simple", answer: "Mama Ocllo" } },
    { number: "5", question: "Quien descubrio America?", answer: { type: "simple", answer: "Cristobal Colon" } },
    { number: "6", question: "Cual es el mejor atractiovo turistico del peru?", answer: { type: "simple", answer: "MAcchu Picchu" } },
    { number: "7", question: "Quien fue el declarador de la Independencia en el Peru?", answer: { type: "simple", answer: "Jose de San Martin" } },
    { number: "8", question: "Como se llama la mujer de Manco Capac?", answer: { type: "simple", answer: "Mama Ocllo" } },
    { number: "11", question: "Quien descubrio America?", answer: { type: "simple", answer: "Cristobal Colon" } },
    { number: "21", question: "Cual es el mejor atractiovo turistico del peru?", answer: { type: "simple", answer: "MAcchu Picchu" } },
    { number: "31", question: "Quien fue el declarador de la Independencia en el Peru?", answer: { type: "simple", answer: "Jose de San Martin" } },
    { number: "41", question: "Como se llama la mujer de Manco Capac?", answer: { type: "simple", answer: "Mama Ocllo" } },
    { number: "51", question: "Quien descubrio America?", answer: { type: "simple", answer: "Cristobal Colon" } },
    { number: "61", question: "Cual es el mejor atractiovo turistico del peru?", answer: { type: "simple", answer: "MAcchu Picchu" } },
    { number: "71", question: "Quien fue el declarador de la Independencia en el Peru?", answer: { type: "simple", answer: "Jose de San Martin" } },
    { number: "82", question: "Como se llama la mujer de Manco Capac?", answer: { type: "simple", answer: "Mama Ocllo" } },
    { number: "13", question: "Quien descubrio America?", answer: { type: "simple", answer: "Cristobal Colon" } },
    { number: "23", question: "Cual es el mejor atractiovo turistico del peru?", answer: { type: "simple", answer: "MAcchu Picchu" } },
    { number: "33", question: "Quien fue el declarador de la Independencia en el Peru?", answer: { type: "simple", answer: "Jose de San Martin" } },
    { number: "43", question: "Como se llama la mujer de Manco Capac?", answer: { type: "simple", answer: "Mama Ocllo" } },
    { number: "53", question: "Quien descubrio America?", answer: { type: "simple", answer: "Cristobal Colon" } },
    { number: "63", question: "Cual es el mejor atractiovo turistico del peru?", answer: { type: "simple", answer: "MAcchu Picchu" } },
    { number: "73", question: "Quien fue el declarador de la Independencia en el Peru?", answer: { type: "simple", answer: "Jose de San Martin" } },
    { number: "83", question: "Como se llama la mujer de Manco Capac?", answer: { type: "simple", answer: "Mama Ocllo" } }
  ]
}

export function loadTests() {
  return {
    type: LOAD_TESTS,
    payload: tests
  };
}

export function loadTest(testId) {
  return {
    type: LOAD_TEST,
    payload: test
  };
}

export function loadFriends() {
  return {
    type: LOAD_FRIENDS,
    payload: friends
  };
}