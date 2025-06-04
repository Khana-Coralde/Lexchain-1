import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qhtxfgirsfwgosfuakcb.supabase.co'; // replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFodHhmZ2lyc2Z3Z29zZnVha2NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MTYxMTcsImV4cCI6MjA2MjA5MjExN30.Zx0SLI-VeK03cAeWyzTwYMbw_KoqSrfNkMANYrrIJ7M'; // replace with your anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);