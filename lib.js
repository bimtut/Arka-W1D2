let data = [
  {
    title: 'Hunger Games',
    isBorrowed: true,
  },
  {
    title: 'Harry Potter',
    isBorrowed: true,
  },
  {
    title: 'Assassins Creed',
    isBorrowed: true,
  },
  {
    title: 'Percy Jackson',
    isBorrowed: false,
  },
  {
    title: 'Fifty Shades of Grey',
    isBorrowed: true,
  },
];

function library(book) {
  if (book) {
    data.forEach(name => {
      if (name.title == book) {
        if (name.isBorrowed === false) {
          console.log(`Selamat !! buku ${book} bisa dipinjam`)
        } else {
          console.log(`Maaf, buku ${book} sedang dipinjam orang lain`)
        }
      }
    });
  }

  console.log('\nlist buku yang bisa dipinjam :')
  let available = []
  data.forEach(name => {
    if (name.isBorrowed == false) {
      console.log(name.title)
    }
  })
}

library('Fifty Shades of Grey')
 