import { promises as fs } from "fs";
import path from "path";

export type StoredUser = {
  id: string;
  name: string;
  email: string;
  passwordHash: string | null;
  image?: string | null;
};

const USERS_PATH = process.env.VERCEL
  ? path.join("/tmp", "fastserve-users.json")
  : path.join(process.cwd(), "data", "users.json");

async function ensureFile() {
  await fs.mkdir(path.dirname(USERS_PATH), { recursive: true });
  try {
    await fs.access(USERS_PATH);
  } catch {
    await fs.writeFile(USERS_PATH, "[]\n", "utf8");
  }
}

export async function readUsers(): Promise<StoredUser[]> {
  await ensureFile();
  const raw = await fs.readFile(USERS_PATH, "utf8");
  try {
    return JSON.parse(raw) as StoredUser[];
  } catch {
    return [];
  }
}

export async function writeUsers(users: StoredUser[]) {
  await ensureFile();
  await fs.writeFile(USERS_PATH, JSON.stringify(users, null, 2) + "\n", "utf8");
}

export async function findUserByEmail(email: string) {
  const users = await readUsers();
  return users.find((user) => user.email.toLowerCase() === email.toLowerCase());
}

export async function createUser(user: StoredUser) {
  const users = await readUsers();
  users.push(user);
  await writeUsers(users);
  return user;
}

export async function upsertGoogleUser(input: {
  email: string;
  name: string;
  image?: string | null;
}) {
  const users = await readUsers();
  const existing = users.find((user) => user.email.toLowerCase() === input.email.toLowerCase());
  if (existing) {
    existing.name = input.name || existing.name;
    existing.image = input.image ?? existing.image;
    await writeUsers(users);
    return existing;
  }
  const created: StoredUser = {
    id: crypto.randomUUID(),
    name: input.name,
    email: input.email,
    passwordHash: null,
    image: input.image ?? null,
  };
  users.push(created);
  await writeUsers(users);
  return created;
}
