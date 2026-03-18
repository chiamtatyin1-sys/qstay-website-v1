import { neon } from '@neondatabase/serverless';
import type { NeonQueryFunction } from '@neondatabase/serverless';

let sql: NeonQueryFunction<false, false>;

try {
  if (process.env.DATABASE_URL) {
    sql = neon(process.env.DATABASE_URL);
  }
} catch (e) {
  console.log('Database not configured yet');
}

export { sql };
