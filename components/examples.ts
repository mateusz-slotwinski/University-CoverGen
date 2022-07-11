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
  pages: 500,
  image: 'mathematics.jpg',
  about: aboutplaceholder,
  levels: [
    [
      'Wstęp do matematyki oraz algebra liniowa: wielomiany',
      'macierze, wyznaczniki, przestzenie, rachunek wektorowy',
    ],
    ['Algebra abstrakcyjna: grupy, pierścienie i ciała'],
    ['Geometria ogólna i analityczna oraz topologia'],
    [
      'Analiza matematyczna I: funkcje jednej zmiennej, granice',
      'pochodne, szeregi liczbowe i funkcyjne, rachunek całkowy',
    ],
    [
      'Analiza matematyczna II: funkcje wielu zmiennych, miara',
      `i całka Lebesgue'a, całki wielokrotne i formy różniczkowe`,
    ],
    [
      'Równania różniczkowe zwyczajne i cząstkowe,',
      'wstęp do rachunku wariacyjnego',
    ],
    [
      'Funkcje analityczne, analiza zespolona i funkcjonalna,',
      'układy dynamiczne i geometria różniczkowa',
    ],
    [
      'Matematyka dyskretna: logika, teoria mnogości,',
      'teoria gier, kombinatoryka, relacje, rekurencje',
    ],
    ['Propablistyka, statystyka i analiza danych'],
    [
      'Metody numeryczne i zastosowania matematyki w innych',
      'naukach przyrodniczych, technicznych oraz społecznych',
    ],
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
  pages: 500,
  image: 'physics.jpg',
  about: aboutplaceholder,
  levels: [
    [
      'Mechanika: ruch postępowy i obrotowy, siły i równowaga,',
      'hydrodynamika, teoria sprężystości',
    ],
    [
      'Drgania, fale mechaniczne, akustyka, teoria grawitacji',
      'Newtona, szczególna teoria względności',
    ],
    [
      'Termodynamika i fizyka statystyczna, kinetyczna teoria',
      'gazów, elementy chemii fizycznej',
    ],
    [
      'Elektrodynamika: pole elektryczne i magnetyczne, prąd',
      'elektryczny, elektromagnetyzm, elementy elektroniki',
    ],
    ['Fale elektromagnetyczne, optyka geometryczna i falowa'],
    [
      'Mechanika, optyka i elektrodynamika kwantowa,',
      'wstęp do kwantowej teorii pola oraz fizyki współczesnej',
    ],
    [
      'Fizyka ciała stałego, przewodnictwo elektryczne materii,',
      'fizyka plazmy, fotonika',
    ],
    ['Fizyka atomowa, jądrowa i cząstek elementarnych'],
    [
      'Astronomia, astrofizyka i kosmologia, współczesna teoria',
      'grawitacji, ogólna teoria względności, grawitacja kwantowa',
    ],
  ],

  PART: 0,
  SUBTITLE: ['', ''],
}

const Electronics: Data = {
  TITLE: 'Elektronika',
  title_2: '',
  AUTHOR: 'Mateusz Słotwiński',
  color: '#aa2222',
  icon: 'electronics.svg',
  pages: 500,
  image: 'electronics.jpg',
  about: aboutplaceholder,
  levels: [
    [
      'Wstęp do elektroniki i elektrotechniki, fizyczne podstawy',
      'elektroniki i półprzewodników, materiały w elektronice',
    ],
    [
      'Teoria obwodów i ich analiza, podstawy pomiarów',
      'wielkości elektrycznych',
    ],
    ['Sygnały i systemy, przetwarzanie i analiza sygnałów'],
    ['Elektronika analogowa'],
    ['Elektronika cyfrowa, systemy cyfrowe i komputerowe'],
    [
      'Technologie elektroniczne i fotoniczne, optoelektronika',
      'zintegrowana, fotonika światłowodowa',
    ],
    [
      'Elektronika mikrofalowa, wstęp do telekomunikacji,',
      'zaawansowane przetwarzanie sygnałów i obrazów',
    ],
    ['Podstawy mikrokontrolerów, mikrosystemów oraz ', 'systemów wbudowanych'],
    ['Podstawy mikroelektroniki, projektowanie systemów', 'elektronicznych'],
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
  pages: 500,
  image: 'informatics.jpg',
  about: aboutplaceholder,
  levels: [
    ['Architektura komputerów'],
    ['Algorytmy i struktury danych'],
    ['Podstawy informatyki i programowania,', ' systemy operacyjne'],
    ['Programowanie strukturalne i obiektowe'],
    ['Programowanie aplikacji mobilnych i komputerowych'],
    ['Sieci komupterowe'],
    ['Bazy danych i data science'],
    ['Programowanie stron internetowych i aplikacji sieciowych'],
    ['Wprowadzenie do sztucznej inteligencji', ' oraz uczenia maszynowego'],
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
  pages: 500,
  image: 'chemistry.jpg',
  about: aboutplaceholder,
  levels: [
    ['Chemia ogólna, nieorganiczna i strukturalna,', 'podstawy elektrochemii'],
    [
      'Chemia analityczna i stosowana, zarządzanie chemikaliami,',
      'aparatura chemiczna, analiza chemiczna i instrumentalna',
    ],
    ['Chemia organiczna, bioorganiczna, bionieorganiczna', 'i biochemia'],
    [
      'Chemia fizyczna i termodynamika chemiczna, podstawy',
      'chemii kwantowej, chemia jądrowa z radiochemią',
    ],
    [
      'Surowce energetyczne i ich przetwarzanie,',
      'biopaliwa i paliwa alternatywne, procesy spalania',
    ],
    [
      'Krystalografia i materiały w technologii chemicznej,',
      'technologia i chemia materiałów, chemia polimerów',
    ],
    ['Inżynieria chemiczna i procesowa, aparatura procesowa'],
    ['Technologia chemiczna, projektowanie procesów', 'technologicznych'],
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
  pages: 500,
  image: 'economics.jpg',
  about: aboutplaceholder,
  levels: [['Podstawy ekonomii, mikroekonomia,', 'ekonomia przedsiębiorstwa']],

  PART: 0,
  SUBTITLE: ['', ''],
}

const Biophysics: Data = {
  TITLE: 'Biofizyka',
  title_2: '',
  AUTHOR: 'Mateusz Słotwiński',
  color: '#2e7d32',
  icon: 'biophysics.svg',
  pages: 500,
  image: 'economics.jpg',
  about: aboutplaceholder,
  levels: [
    [
      'Analiza matematyczna: całki wielokrotne i krzywoliniowe,',
      'szeregi Fouriera, transformacje całkowe',
    ],
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
  pages: 500,
  image: 'physicsnanostr.jpg',
  about: aboutplaceholder,
  levels: [
    [
      'Fizyka półprzewodników i przyrządów półprzewodnikowych,',
      'półprzewodnikowe przyrządy optoelektroniczne',
    ],
    ['Fizyka, chemia i optyka ciała stałego, struktura materii'],
    [
      'Kwantowe metody fizyki ciała stałego, ',
      'nadprzewodnictwo i nadciekłość',
    ],
    [
      'Metody badania materiałów: strukturalne, termiczne,',
      'spektroskopowe i elektryczne',
    ],
    ['Nanostruktury, nanoinżynieria i nanotechnologie'],
    [
      'Metody magazynowania i przetwarzania energii,',
      'fotowoltaika, ogniwa paliwowe',
    ],
    ['Komputerowe metody symulacji'],
  ],

  PART: 0,
  SUBTITLE: ['', ''],
  advanced: true,
}

const PhysicsNuclear: Data = {
  TITLE: 'Fizyka i Technika',
  title_2: 'Jądrowa',
  AUTHOR: 'Mateusz Słotwiński',
  color: '#FF7C1E',
  icon: 'physicsnuclear.svg',
  pages: 500,
  image: 'physicsnuclear.jpg',
  about: aboutplaceholder,
  levels: [
    [
      'Fizyka cząstek elementarnych, oddziaływania fundamentalne,',
      'wstęp do elektrodynamiki kwantowej i kwantowej teorii pola',
    ],
    [
      'Zaawansowana fizyka jądrowa, oddziaływanie promieniowania',
      'jonizującego z materią',
    ],
    ['Metody i techniki jądrowe, dozymetria'],
    ['Podstawy fizyczne energetyki jądrowej'],
    ['Detekcja promieniowania jądrowego, modelowanie', 'procesów jądrowych'],
    [
      'Układy kontrolno-pomiarowe w instalacjach jądrowych,',
      'nowe rozwiązania w energetyce jądrowej',
    ],
  ],

  PART: 0,
  SUBTITLE: ['', ''],
  advanced: true,
}

const SetVol = (Book: Data, vol: number) => {
  Book.PART = vol
  if (Book.levels[vol - 1]) {
    Book.SUBTITLE = Book.levels[vol - 1]
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
