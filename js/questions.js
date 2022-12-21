const quizQuestions = [
  {
    id: 1,
    question: `Hangi yöntem bir diziden son öğeyi kaldırır ve o öğeyi döndürür? 
    ['🍅', '🍄', '🥦']--->['🍅', '🍄'];`,
    choices: ['pop()', 'shift()', 'unshift()', 'slice()'],
    answer: 'pop()',
  },
  {
    id: 2,
    question: `Hangi yöntem bir dizinin sonuna yeni bir öğe ekler ve dizinin yeni uzunluğu geriye döner?    
    ['🍅', '🍄']--->['🍅', '🍄', '🥦']`,
    choices: ['unshift()', 'slice()', 'push()', 'pop()'],
    answer: 'push()',
  },
  {
    id: 3,
    question: `Hangi yöntem kendisine parametre olarak verilen dizi aralığında bulunan değerleri kopyalar ve yeni bir dizi oluşturarak geri döndürür?
      ['🍅', '🍄', '🥦', '🥒']--->[ '🍄', '🥦']`,
    choices: ['shift()', 'appendChild()', 'slice()', 'push()'],
    answer: 'slice()',
  },
  {
    id: 4,
    question: `Hangi yöntem bir dizinin başına yeni bir öğe ekler ve dizinin yeni uzunluğu geriye döner? [ '🍄', '🥦']--->['🍅', '🍄', '🥦']`,
    choices: ['unshift()', 'pop()', 'shift()', 'slice()'],
    answer: 'unshift()',
  },
  {
    id: 5,
    question: `Hangi yöntem bir diziden ilk öğeyi kaldırır ve o öğeyi döndürür? ['🍅', '🍄', '🥦']--->[ '🍄', '🥦']`,
    choices: ['push()', 'slice()', 'unshift()', 'shift()'],
    answer: 'shift()',
  },
  {
    id: 6,
    question: `Bir dizinin öğelerini alfabetik veya sayısal sıraya göre yeniden düzenleyen yöntem hangisidir? ['murat', 'ali', 'engin']-->['ali', 'engin', 'murat']`,
    choices: ['every()', 'reduce()', 'sort()', 'includes()'],
    answer: 'sort()',
  },
  {
    id: 7,
    question:
      'Hangi yöntem  dizi içerisindeki tüm elemanları bir işlemden geçirmek için kullanır? Her bir eleman tek tek işlenir, değerleri değiştirilebilir, geriye işlemden geçen öğelerden oluşan yeni bir diziyi döndürür?',
    choices: ['map()', 'filter()', 'reduce()', 'forEach()'],
    answer: 'map()',
  },
  {
    id: 8,
    question:
      'Hangi yöntem bir diziyi alır, o dizideki her bir öğe üzerinde sağladığınız bir işlevi gerçekleştirir ve tek bir değer döndürür?',
    choices: ['filter()', 'forEach()', 'map()', 'reduce()'],
    answer: 'reduce()',
  },
  {
    id: 9,
    question:
      'Hangi yöntem o dizideki her bir öğe üzerinde sağladığınız bir işlevi gerçekleştirir ve yalnızca o işlev tarafından uygulanan belirli bir koşula göre geçen öğeleri döndürür?',
    choices: ['every()', 'filter()', 'map()', 'forEach()'],
    answer: 'filter()',
  },
  {
    id: 10,
    question: 'Hangi yöntem bir dizideki her öğe için sağlanan işlevi bir kez yürütür. Her dizi öğesi için işlevi çalıştırdıktan sonra,sağlanan işlevin sonucuna göre mevcut dizi öğelerinin değerlerini değiştirir?',
    choices: ['every()', 'forEach()', 'map()', 'reduce()'],
    answer: 'forEach()',
  },
  {
    id: 11,
    question:
      'Hangi yöntem  dizideki tüm öğelerin sağlanan işlev tarafından uygulanan belirli bir koşulu geçip bir boolean (true/false) değeri döndürüp döndürmediğini test eder?',
    choices: ['map()', 'every()', 'forEach()', 'includes()'],
    answer: 'every()',
  },
  {
    id: 12,
    question:
      'Bir dizinin girdileri arasında belirli bir değer içerip içermediğini true veya false döndürmesini hangi yöntem belirler?',
    choices: ['every()', 'includes()', 'indexOf()', 'pop()'],
    answer: 'includes()',
  },
  {
    id: 13,
    question:
      'Hangi yöntem  belirli bir öğenin dizide bulunabileceği ilk dizini (veya mevcut değilse -1) döndürür?',
    choices: ['indexOf()', 'includes()', 'slice()', 'map()'],
    answer: 'indexOf()',
  },
]
