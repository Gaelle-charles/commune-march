
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gipbzunenpreobcgkbth.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpcGJ6dW5lbnByZW9iY2drYnRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NzE1NjYsImV4cCI6MjA1ODM0NzU2Nn0.GppmEPswT2HoAJ68lwBeVBX51BLyE9ql_Z99ilXzahI'

export const supabase = createClient(supabaseUrl, supabaseKey)
