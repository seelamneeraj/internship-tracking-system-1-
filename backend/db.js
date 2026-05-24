const initSqlJs = require('sql.js');

let db;

async function initializeDB() {
  const SQL = await initSqlJs();

  db = new SQL.Database();

  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE,
      password TEXT,
      role TEXT
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS internships (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      domain TEXT,
      mentor_id INTEGER,
      status TEXT,
      completion_percentage INTEGER DEFAULT 0
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS internship_tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      internship_id INTEGER,
      milestone TEXT,
      description TEXT,
      deadline TEXT,
      status TEXT
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS task_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      task_id INTEGER,
      intern_id INTEGER,
      submission_text TEXT,
      submitted_at TEXT
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS evaluations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      internship_id INTEGER,
      mentor_id INTEGER,
      rating INTEGER,
      feedback TEXT
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS notifications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      message TEXT,
      is_read INTEGER DEFAULT 0
    );
  `);

  console.log('SQLite initialized successfully');
}

function getDB() {
  return db;
}

module.exports = {
  initializeDB,
  getDB,
};
