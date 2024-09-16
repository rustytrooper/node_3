const fs = require('fs')

const jsonObj = fs.readFile('top250.json', 'utf-8', function (err, data) {
  if (err) throw new Error(err);

  const json = JSON.parse(data);
  const filteredData = json.docs.map(movie => ({
    id: movie?.id,
    name: movie?.name,
    alternativeName: movie?.alternativeName,
    rating: {
      kp: movie?.rating?.kp
    },
    year: movie?.year,
    votes: {
      kp: movie?.votes?.kp
    },
    poster: {
      url: movie?.poster?.url
    }
  }));

  fs.writeFile('top10.json', JSON.stringify(filteredData, null, 2), function (err) {
    if (err) {
      throw new Error('Ошибка при записи файла');
    }
    console.log('Файл успешно записан');
  });
})