import { db } from "@/lib/db";

await db.query(`

CREATE TABLE IF NOT EXISTS quiz_users (
    id SERIAL PRIMARY KEY,
    clerk_id TEXT UNIQUE,
    user_name TEXT,
    location TEXT,
    avatar TEXT)
    
    CREATE TABLE IF NOT EXISTS quiz_questions (
    id SERIAL PRIMARY KEY,
    subject TEXT,
    difficulty TEXT,
    question TEXT,
    answer_1 TEXT,
    answer_2 TEXT,
    answer_3 TEXT,
    answer_4 TEXT,
    correct_answer TEXT,
    points INT)
    
    CREATE TABLE IF NOT EXISTS quiz_score_table(
id SERIAL PRIMARY KEY,
clerk_id TEXT REFERENCES quiz_users(clerk_id),
timestamp timestamp default now(),
subject	TEXT,
difficulty TEXT,
score INT,
no_questions INT,
correct_answers INT,
wrong_answers INT
)
    `);
