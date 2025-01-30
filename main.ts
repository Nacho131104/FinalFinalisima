
import { MongoClient } from "mongodb";
import type { CiudadModel } from "./types.ts";
const MONGO_URL = Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  throw new Error("Please provide a MONGO_URL");
}

const mongoClient = new MongoClient(MONGO_URL);
await mongoClient.connect();

console.info("Connected to MongoDB");

const mongoDB = mongoClient.db("Ciudad");
const CiudadesCollection = mongoDB.collection<CiudadModel>("Ciudades");



