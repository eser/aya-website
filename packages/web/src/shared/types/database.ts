export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Log: {
        Row: {
          createdAt: string
          id: string
          level: Database["public"]["Enums"]["LogLevel"]
          message: string
          meta: Json
        }
        Insert: {
          createdAt?: string
          id: string
          level: Database["public"]["Enums"]["LogLevel"]
          message: string
          meta: Json
        }
        Update: {
          createdAt?: string
          id?: string
          level?: Database["public"]["Enums"]["LogLevel"]
          message?: string
          meta?: Json
        }
        Relationships: []
      }
      Post: {
        Row: {
          content: string
          createdAt: string
          deletedAt: string | null
          id: string
          publishedAt: string | null
          slug: string
          title: string
          updatedAt: string
          userId: string
        }
        Insert: {
          content: string
          createdAt?: string
          deletedAt?: string | null
          id: string
          publishedAt?: string | null
          slug: string
          title: string
          updatedAt: string
          userId: string
        }
        Update: {
          content?: string
          createdAt?: string
          deletedAt?: string | null
          id?: string
          publishedAt?: string | null
          slug?: string
          title?: string
          updatedAt?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Post_userId_fkey"
            columns: ["userId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      User: {
        Row: {
          createdAt: string
          deletedAt: string | null
          email: string
          id: string
          lastSeenAt: string | null
          name: string
          slug: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          email: string
          id: string
          lastSeenAt?: string | null
          name: string
          slug: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          email?: string
          id?: string
          lastSeenAt?: string | null
          name?: string
          slug?: string
          updatedAt?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      LogLevel: "Info" | "Warn" | "Error"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
