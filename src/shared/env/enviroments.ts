import "dotenv/config"
import { z } from "zod"
const envSchema = z.object({
    port: z.coerce.number().default