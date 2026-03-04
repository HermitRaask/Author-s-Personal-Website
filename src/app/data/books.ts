import { chapterContents } from "./bookContents";

export const WORK_FORMATS = ["Роман", "Рассказ", "Сборник рассказов"] as const;
export type WorkFormat = (typeof WORK_FORMATS)[number];

export interface Chapter {
  id: number;
  title: string;
  content: string;
}

export interface Book {
  id: number;
  title: string;
  description: string;
  year: number;
  genres: string[];
  workFormat?: WorkFormat;
  coverImage: string;
  chapters?: Chapter[];
}

export const books: Book[] = [
  {
    id: 1,
    title: "Одержимый",
    description: "Небольшой рассказ/набросок о одержимом бойце, что попал в лапы корпоратам. Вот только кто кого поймал - ещё большой вопрос.",
    year: 2025,
    genres: ["Техномагия", "Киберпанк"],
    workFormat: "Рассказ",
    coverImage: "images/1.jpg",
    chapters: [{ id: 1, title: "Одержимый", content: chapterContents["1-1"] }],
  },
  {
    id: 2,
    title: "Дар жизни",
    description: "Небольшой рассказ о нашем современнике, что получил шанс обмануть смерть. Но шанс - он не получка, не аванс, он выпадает только раз...",
    year: 2023,
    genres: ["Киберпанк"],
    workFormat: "Рассказ",
    coverImage: "images/2.jpg",
    chapters: [{ id: 1, title: "Дар жизни", content: chapterContents["2-1"] }],
  },
  {
    id: 3,
    title: "Тень войны",
    description: "А давайте подростков набьём имплантами и военной химией, да отправим стирать с лица орбиты огромный улей ксеносов? Зачем? Да по приколу!",
    year: 2022,
    genres: ["Фантастика"],
    workFormat: "Рассказ",
    coverImage: "images/3.jpg",
    chapters: [{ id: 1, title: "Тень войны", content: chapterContents["3-1"] }],
  },
  {
    id: 4,
    title: "Искажение",
    description: "Смертельная болезнь, разъедающая лёгкие. Низший социальный статус в стране, где от личного рейтинга зависит абсолютно всё. Долги перед очень опасными людьми, которые вот-вот с ноги постучаться в твою дверь. И странные не-сны, ведущие в таинственный мир Грани — не слишком сказочной, зато дающий вполне реальный шанс откинуть лыжи. Да, Алекс никогда не считал себя образцом везения, но за последние полгода дела стали принимать совсем уж скверный оборот.Впрочем, чем ниже стартуешь, тем больше места для разгона, так ведь?",
    year: 2023,
    genres: ["Киберпанк", "Тёмное фэнтези"],
    workFormat: "Роман",
    coverImage: "images/4.jpg",
    chapters: [
      {
        id: 1,
        title: "Глава 1. Сопряжение",
        content: chapterContents["4-1"],
      },
      { id: 2, title: "Глава 2. Грань", content: chapterContents["4-2"] },
    ],
  },
  {
    id: 5,
    title: "Одиссей",
    description: "Бездушный стальной мир отобрал у тебя всё. Жизнь, свободу, память. Оставив в замен лишь одну задачу - истреблять полчища тварей.",
    year: 2025,
    genres: ["Фантастика"],
    workFormat: "Роман",
    coverImage: "images/5.jpg",
    chapters: [
      {
        id: 1,
        title: "Глава 1. Пробуждение",
        content: chapterContents["5-1"],
      },
      {
        id: 2,
        title: "Глава 2. Плоды победы",
        content: chapterContents["5-2"],
      },
    ],
  },
  {
    id: 6,
    title: "Игра теней",
    description: "От моей памяти остались лишь клочки. Но даже так, уверен — в такую передрягу я попал впервые. Двое союзников, да ещё каких! Клептоманка да побитый жизнью байкер. И десятки врагов, для которых мы — лишь ступенька к желанной цели. Незнакомая планета, половина населения которой хочет тебя сожрать, а вторая — вогнать шило в бок. А ещё дорогущий артефакт, за которым охотятся вообще все. И, словно вишенка на «шоколадном» торте — древнее, могущественное существо, ждущее нас по ту сторону жизни. И если мы не выполним заключённый контракт, то смерть покажется наилучшим исходном. Хреновые вводные, да? Ну и чёрт с ним. Бывало и хуже.",
    year: 2022,
    genres: ["Попаданчество"],
    workFormat: "Роман",
    coverImage: "images/6.jpg",
    chapters: [
      { id: 1, title: "Пролог", content: chapterContents["6-1"] },
      { id: 2, title: "Глава 1. Город", content: chapterContents["6-2"] },
      { id: 3, title: "Глава 2. Знакомство", content: chapterContents["6-3"] },
    ],
  },
];

/** Подставляет workFormat из текущего books.ts, если в загруженных данных его нет */
export function migrateBooks(booksList: Book[]): Book[] {
  return booksList.map((book) => {
    const fromSource = books.find((b) => b.id === book.id);
    return {
      ...book,
      workFormat: book.workFormat ?? fromSource?.workFormat ?? "Рассказ",
    };
  });
}
