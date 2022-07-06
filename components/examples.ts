import { Data } from '../types/data'

const aboutplaceholder = `Podstawy fizyki atomu wydanie 2 to nowa, odświeżona wersja znanego podręcznika, w której Autorka kompleksowo omawia zagadnienia związane z fizyką atomu.

Zarówno atomy różnych pierwiastków, jak i atomy różnych izotopów danego pierwiastka, a także atomy tego samego izotopu, ale będące w różnych stanach energetycznych (w różnych stanach wzbudzenia), różnią się od siebie w sposób wykrywalny doświadczalnie metodami fizyki atomowej. Te charakterystyczne, unikatowe cechy danego atomu wynikają z jego wewnętrznej struktury, określonej przede wszystkim usytuowaniem poszczególnych elektronów w powłoce elektronowej, a także, choć w mniejszym stopniu, własnościami jądra. Badanie i opis tej struktury stanowi przedmiot współczesnej fizyki atomu.

Chociaż w swojej istocie fizyka atomu rządzi się prawami fizyki kwantowej, w wielu przypadkach do opisu zjawisk atomowych można stosować prawa fizyki klasycznej, co wybitnie ułatwia rozwiązywanie różnych problemów. Jak każda nauka przyrodnicza, fizyka atomu jest nauką indukcyjną: na podstawie obserwacji i eksperymentu stara się odkryć i opisać w formie matematycznej prawa Przyrody, które są w niej zawarte i które nią rządzą. Jest to możliwe dzięki temu, że prawa te (jak to wiemy do dzisiaj) są niezmienne: raz wykryte i ustalone na podstawie poprawnie wykonanego doświadczenia, pozostają zawsze słuszne. Natomiast w miarę zwiększenia dokładności pomiarów mogą być one stopniowo uściślane.

 • Poznaj charakterystyczne wielkości promieniowania atomowego
 • Sprawdź, czym są widma absorpcyjne
 • Zobacz, jakie są konsekwencje zasady Pauliego dla struktury atomów
 • Przeanalizuj powstawanie liniowego widma rentgenowskiego`

const Mathematics: Data = {
  TITLE: 'Matematyka',
  title_2: '',
  AUTHOR: 'Mateusz Słotwiński',
  color: '#E2942D',
  icon: 'mathematics.svg',
  pages: 300,
  image: 'mathematics.jpg',
  about: aboutplaceholder,
  levels: [
    {
      PART: 1,
      SUBTITLE: [
        'Analiza matematyczna: funkcje jednej zmiennej',
        'granice, pochodne, różniczki, wstęp do całek',
      ],
    },
    {
      PART: 2,
      SUBTITLE: [
        'Analiza matematyczna: funkcje wielu zmiennych,',
        'ciągi i szeregi potęgowe oraz funkcyjne',
      ],
    },
    {
      PART: 3,
      SUBTITLE: [
        'Analiza matematyczna: całki wielokrotne i krzywoliniowe,',
        'szeregi Fouriera, transformacje całkowe',
      ],
    },
  ],

  PART: 0,
  SUBTITLE: ['', ''],
}

const Physics: Data = {
  TITLE: 'Fizyka',
  title_2: '',

  AUTHOR: 'Mateusz Słotwiński',
  color: '#006E89',
  icon: 'physics.svg',
  pages: 700,
  image: 'physics.jpg',
  about: aboutplaceholder,
  levels: [
    {
      PART: 7,
      SUBTITLE: [
        'Fizyka kwantowa i cząstek elementarnych,',
        'wprowadzenie do fizyki jądrowej',
      ],
    },
  ],

  PART: 0,
  SUBTITLE: ['', ''],
}

const PhysicsNanostr: Data = {
  TITLE: 'Fizyka Materiałów',
  title_2: 'i Nanostruktur',
  AUTHOR: 'Mateusz Słotwiński',
  color: '#6D547C',
  icon: 'physicsnanostr.svg',
  pages: 400,
  image: 'physicsnanostr.jpg',
  about: aboutplaceholder,
  levels: [
    {
      PART: 1,
      SUBTITLE: [
        'Analiza matematyczna: całki wielokrotne i krzywoliniowe,',
        'szeregi Fouriera, transformacje całkowe',
      ],
    },
  ],

  PART: 0,
  SUBTITLE: ['', ''],
  advanced: true,
}

const PhysicsNuclear: Data = {
  TITLE: 'Fizyka i Technika',
  title_2: 'Jądrowa',
  AUTHOR: 'Mateusz Słotwiński',
  color: '#C47C00',
  icon: 'physicsnuclear.svg',
  pages: 400,
  image: 'physicsnuclear.jpg',
  about: aboutplaceholder,
  levels: [
    {
      PART: 1,
      SUBTITLE: ['Podstawy fizyczne energetyki jądrowej', ''],
    },
  ],

  PART: 0,
  SUBTITLE: ['', ''],
  advanced: true,
}

const Electronics: Data = {
  TITLE: 'Elektronika',
  title_2: 'i Telekomunikacja',
  AUTHOR: 'Mateusz Słotwiński',
  color: '#aa2222',
  icon: 'electronics.svg',
  pages: 450,
  image: 'electronics.jpg',
  about: aboutplaceholder,
  levels: [
    {
      PART: 1,
      SUBTITLE: [
        'Podstawowe pojęcia, fizyczne podstawy elektroniki,',
        'prąd elektryczny, teoria obwodów',
      ],
    },
  ],

  PART: 0,
  SUBTITLE: ['', ''],
}

const Informatics: Data = {
  TITLE: 'Informatyka',
  title_2: '',
  AUTHOR: 'Mateusz Słotwiński',
  color: '#566672',
  icon: 'informatics.svg',
  pages: 450,
  image: 'informatics.jpg',
  about: aboutplaceholder,
  levels: [
    {
      PART: 1,
      SUBTITLE: [
        'Analiza matematyczna: całki wielokrotne i krzywoliniowe,',
        'szeregi Fouriera, transformacje całkowe',
      ],
    },
  ],

  PART: 0,
  SUBTITLE: ['', ''],
}

const Chemistry: Data = {
  TITLE: 'Technologia',
  title_2: 'Chemiczna',
  AUTHOR: 'Mateusz Słotwiński',
  color: '#A19059',
  icon: 'chemistry.svg',
  pages: 450,
  image: 'chemistry.jpg',
  about: aboutplaceholder,
  levels: [
    {
      PART: 1,
      SUBTITLE: [
        'Analiza matematyczna: całki wielokrotne i krzywoliniowe,',
        'szeregi Fouriera, transformacje całkowe',
      ],
    },
  ],

  PART: 0,
  SUBTITLE: ['', ''],
}

const Economics: Data = {
  TITLE: 'Ekonomia',
  title_2: '',

  AUTHOR: 'Mateusz Słotwiński',
  color: '#2e7d32',
  icon: 'economics.svg',
  pages: 450,
  image: 'economics.jpg',
  about: aboutplaceholder,
  levels: [
    {
      PART: 1,
      SUBTITLE: [
        'Podstawy ekonomii, mikroekonomia,',
        'ekonomia przedsiębiorstwa',
      ],
    },
  ],

  PART: 0,
  SUBTITLE: ['', ''],
}

const Biophysics: Data = {
  TITLE: 'Biofizyka',
  title_2: '',
  AUTHOR: 'Mateusz Słotwiński',
  color: '#2e7d32',
  icon: 'biophysics.svg',
  pages: 450,
  image: 'economics.jpg',
  about: aboutplaceholder,
  levels: [
    {
      PART: 1,
      SUBTITLE: [
        'Analiza matematyczna: całki wielokrotne i krzywoliniowe,',
        'szeregi Fouriera, transformacje całkowe',
      ],
    },
  ],

  PART: 0,
  SUBTITLE: ['', ''],
}

const SetVol = (Book: Data, vol: number) => {
  Book.PART = vol
  if (Book.levels[vol - 1]?.SUBTITLE) {
    Book.SUBTITLE = Book.levels[vol - 1]?.SUBTITLE
  }
  return Book
}

export default class Examples {
  static Mathematics = (vol: number) => SetVol(Mathematics, vol)
  static Physics = (vol: number) => SetVol(Physics, vol)
  static Electronics = (vol: number) => SetVol(Electronics, vol)
  static Informatics = (vol: number) => SetVol(Informatics, vol)
  static Chemistry = (vol: number) => SetVol(Chemistry, vol)
  static Economics = (vol: number) => SetVol(Economics, vol)
  static Biophysics = (vol: number) => SetVol(Biophysics, vol)

  static PhysicsNanostr = (vol: number) => SetVol(PhysicsNanostr, vol)
  static PhysicsNuclear = (vol: number) => SetVol(PhysicsNuclear, vol)
}
