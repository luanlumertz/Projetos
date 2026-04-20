import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_BASEURL || ''
const supabaseKey = process.env.REACT_APP_SUPABASE_APIKEY || ''

export const supabase = createClient(supabaseUrl, supabaseKey)