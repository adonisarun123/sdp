import { createBrowserClient } from '@supabase/ssr'
import { createServerClient as createSupabaseServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export const createClient = () => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

export const createServerClient = async () => {
  const cookieStore = await cookies()

  return createSupabaseServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: any) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  )
}

export type Database = {
  public: {
    Tables: {
      countries: {
        Row: {
          id: string
          name: string
          code: string
          continent: string
          diving_season: any
          currency: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          code: string
          continent: string
          diving_season?: any
          currency?: string | null
        }
        Update: {
          name?: string
          code?: string
          continent?: string
          diving_season?: any
          currency?: string | null
        }
      }
      destinations: {
        Row: {
          id: string
          name: string
          country_id: string | null
          description: string | null
          coordinates: any
          difficulty_level: number | null
          max_depth: number | null
          visibility_range: number[] | null
          water_temperature_range: number[] | null
          marine_life: string[] | null
          best_months: number[] | null
          certifications_required: string[] | null
          featured_image_url: string | null
          gallery_images: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          country_id?: string | null
          description?: string | null
          coordinates?: any
          difficulty_level?: number | null
          max_depth?: number | null
          visibility_range?: number[] | null
          water_temperature_range?: number[] | null
          marine_life?: string[] | null
          best_months?: number[] | null
          certifications_required?: string[] | null
          featured_image_url?: string | null
          gallery_images?: string[] | null
        }
        Update: {
          name?: string
          description?: string
          difficulty_level?: number | null
          max_depth?: number | null
          visibility_range?: number[] | null
          water_temperature_range?: number[] | null
          marine_life?: string[] | null
          best_months?: number[] | null
          certifications_required?: string[] | null
          featured_image_url?: string | null
          gallery_images?: string[] | null
        }
      }
      marine_species: {
        Row: {
          id: string
          common_name: string
          scientific_name: string | null
          species_type: string | null
          conservation_status: string | null
          max_size_cm: number | null
          habitat_type: string | null
          diet: string | null
          behavior_notes: string | null
          identification_features: string[] | null
          fun_facts: string[] | null
          image_urls: string[] | null
          created_at: string
        }
        Insert: {
          id?: string
          common_name: string
          scientific_name?: string | null
          species_type?: string | null
          conservation_status?: string | null
          max_size_cm?: number | null
          habitat_type?: string | null
          diet?: string | null
          behavior_notes?: string | null
          identification_features?: string[] | null
          fun_facts?: string[] | null
          image_urls?: string[] | null
        }
        Update: {
          common_name?: string
          scientific_name?: string | null
          species_type?: string | null
          conservation_status?: string | null
          max_size_cm?: number | null
          habitat_type?: string | null
          diet?: string | null
          behavior_notes?: string | null
          identification_features?: string[] | null
          fun_facts?: string[] | null
          image_urls?: string[] | null
        }
      }
      species_encounters: {
        Row: {
          id: string
          species_id: string | null
          destination_id: string | null
          dive_site_name: string | null
          coordinates: any
          best_months: number[] | null
          peak_months: number[] | null
          encounter_probability: string | null
          depth_range_min: number | null
          depth_range_max: number | null
          current_preference: string | null
          time_of_day: string | null
          group_size_typical: number | null
          behavioral_notes: string | null
          photography_tips: string | null
          interaction_guidelines: string | null
          local_regulations: string | null
          created_at: string
        }
        Insert: {
          id?: string
          species_id?: string | null
          destination_id?: string | null
          dive_site_name?: string | null
          coordinates?: any
          best_months?: number[] | null
          peak_months?: number[] | null
          encounter_probability?: string | null
          depth_range_min?: number | null
          depth_range_max?: number | null
          current_preference?: string | null
          time_of_day?: string | null
          group_size_typical?: number | null
          behavioral_notes?: string | null
          photography_tips?: string | null
          interaction_guidelines?: string | null
          local_regulations?: string | null
        }
        Update: {
          species_id?: string | null
          destination_id?: string | null
          dive_site_name?: string | null
          coordinates?: any
          best_months?: number[] | null
          peak_months?: number[] | null
          encounter_probability?: string | null
          depth_range_min?: number | null
          depth_range_max?: number | null
          current_preference?: string | null
          time_of_day?: string | null
          group_size_typical?: number | null
          behavioral_notes?: string | null
          photography_tips?: string | null
          interaction_guidelines?: string | null
          local_regulations?: string | null
        }
      }
      conservation_projects: {
        Row: {
          id: string
          name: string
          organization: string
          destination_id: string | null
          project_type: string | null
          status: string | null
          start_date: string | null
          end_date: string | null
          description: string
          objectives: string[] | null
          volunteer_opportunities: any
          requirements: any
          contact_info: any
          website_url: string | null
          funding_goal: number | null
          funding_current: number | null
          volunteer_count: number | null
          impact_metrics: any
          photos: string[] | null
          videos: string[] | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          organization: string
          destination_id?: string | null
          project_type?: string | null
          status?: string | null
          start_date?: string | null
          end_date?: string | null
          description: string
          objectives?: string[] | null
          volunteer_opportunities?: any
          requirements?: any
          contact_info?: any
          website_url?: string | null
          funding_goal?: number | null
          funding_current?: number | null
          volunteer_count?: number | null
          impact_metrics?: any
          photos?: string[] | null
          videos?: string[] | null
        }
        Update: {
          name?: string
          organization?: string
          destination_id?: string | null
          project_type?: string | null
          status?: string | null
          start_date?: string | null
          end_date?: string | null
          description?: string
          objectives?: string[] | null
          volunteer_opportunities?: any
          requirements?: any
          contact_info?: any
          website_url?: string | null
          funding_goal?: number | null
          funding_current?: number | null
          volunteer_count?: number | null
          impact_metrics?: any
          photos?: string[] | null
          videos?: string[] | null
        }
      }
      dive_jobs: {
        Row: {
          id: string
          title: string
          company_name: string
          job_category: string | null
          employment_type: string | null
          location_type: string | null
          destination_id: string | null
          salary_min: number | null
          salary_max: number | null
          currency: string | null
          certifications_required: string[] | null
          experience_level: string | null
          languages_required: string[] | null
          description: string
          responsibilities: string[] | null
          requirements: string[] | null
          benefits: string[] | null
          application_deadline: string | null
          start_date: string | null
          contract_duration: number | null
          accommodation_provided: boolean | null
          visa_assistance: boolean | null
          equipment_provided: boolean | null
          posted_by: string | null
          status: string | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          company_name: string
          job_category?: string | null
          employment_type?: string | null
          location_type?: string | null
          destination_id?: string | null
          salary_min?: number | null
          salary_max?: number | null
          currency?: string | null
          certifications_required?: string[] | null
          experience_level?: string | null
          languages_required?: string[] | null
          description: string
          responsibilities?: string[] | null
          requirements?: string[] | null
          benefits?: string[] | null
          application_deadline?: string | null
          start_date?: string | null
          contract_duration?: number | null
          accommodation_provided?: boolean | null
          visa_assistance?: boolean | null
          equipment_provided?: boolean | null
          posted_by?: string | null
          status?: string | null
        }
        Update: {
          title?: string
          company_name?: string
          job_category?: string | null
          employment_type?: string | null
          location_type?: string | null
          destination_id?: string | null
          salary_min?: number | null
          salary_max?: number | null
          currency?: string | null
          certifications_required?: string[] | null
          experience_level?: string | null
          languages_required?: string[] | null
          description?: string
          responsibilities?: string[] | null
          requirements?: string[] | null
          benefits?: string[] | null
          application_deadline?: string | null
          start_date?: string | null
          contract_duration?: number | null
          accommodation_provided?: boolean | null
          visa_assistance?: boolean | null
          equipment_provided?: boolean | null
          posted_by?: string | null
          status?: string | null
        }
      }
      community_ideas: {
        Row: {
          id: string
          user_id: string | null
          title: string
          description: string
          category: string | null
          tags: string[] | null
          votes_count: number | null
          status: string | null
          admin_notes: string | null
          implementation_timeline: string | null
          reward_offered: boolean | null
          reward_description: string | null
          submitted_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          title: string
          description: string
          category?: string | null
          tags?: string[] | null
          votes_count?: number | null
          status?: string | null
          admin_notes?: string | null
          implementation_timeline?: string | null
          reward_offered?: boolean | null
          reward_description?: string | null
        }
        Update: {
          user_id?: string | null
          title?: string
          description?: string
          category?: string | null
          tags?: string[] | null
          votes_count?: number | null
          status?: string | null
          admin_notes?: string | null
          implementation_timeline?: string | null
          reward_offered?: boolean | null
          reward_description?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 