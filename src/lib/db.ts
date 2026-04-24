import Database from 'better-sqlite3';
import path from 'path';

// Store DB in the root directory for simplicity
const dbPath = path.join(process.cwd(), 'portfolio.db');
const db = new Database(dbPath);

// Initialize DB tables
export function initDB() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS cards (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      link TEXT,
      imageUrl TEXT,
      date TEXT,
      tags TEXT,
      icon TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

// Ensure DB is initialized when this file is imported
initDB();

export interface Card {
  id?: number;
  title: string;
  description: string;
  link?: string;
  imageUrl?: string;
  date?: string;
  tags?: string;
  icon?: string;
  createdAt?: string;
}

export function getAllCards(): Card[] {
  const stmt = db.prepare('SELECT * FROM cards ORDER BY createdAt DESC');
  return stmt.all() as Card[];
}

export function addCard(card: Card) {
  const stmt = db.prepare(`
    INSERT INTO cards (title, description, link, imageUrl, date, tags, icon)
    VALUES (@title, @description, @link, @imageUrl, @date, @tags, @icon)
  `);
  
  // Clean undefined values to null for insertion
  const cleanCard = {
    title: card.title,
    description: card.description,
    link: card.link || null,
    imageUrl: card.imageUrl || null,
    date: card.date || null,
    tags: card.tags || null,
    icon: card.icon || null,
  };
  
  return stmt.run(cleanCard);
}

export function deleteCard(id: number) {
  const stmt = db.prepare('DELETE FROM cards WHERE id = ?');
  return stmt.run(id);
}

export default db;
