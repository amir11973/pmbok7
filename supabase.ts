import { createClient } from '@supabase/supabase-js';

// TODO: Replace with your actual Supabase project URL and anon key.
// It's recommended to use environment variables for these values.
const supabaseUrl = 'https://wkdemtuqxlotynsvyqdq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrZGVtdHVxeGxvdHluc3Z5cWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MzU1OTYsImV4cCI6MjA3MTExMTU5Nn0.-tcJVNe91qgtSRZQO3FVUANKz0pWRUOD_pbwTESKgyg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
