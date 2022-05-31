import { createClient } from '@supabase/supabase-js'
import type { UserModule } from '~/types'

// Setup Pinia
// https://pinia.esm.dev/
export const install: UserModule = ({ isClient, app }) => {
  if (!isClient) return

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
  const supabase = createClient(supabaseUrl, supabaseAnonKey)
  app.provide('supabase', supabase)
}
