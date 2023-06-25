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
      Profile: {
        Row: {
          createdAt: string
          deletedAt: string | null
          description: string
          email: string
          id: string
          slug: string
          title: string
          type: Database["public"]["Enums"]["ProfileType"]
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          description: string
          email: string
          id: string
          slug: string
          title: string
          type: Database["public"]["Enums"]["ProfileType"]
          updatedAt: string
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          description?: string
          email?: string
          id?: string
          slug?: string
          title?: string
          type?: Database["public"]["Enums"]["ProfileType"]
          updatedAt?: string
        }
        Relationships: []
      }
      ProfileLink: {
        Row: {
          createdAt: string
          deletedAt: string | null
          description: string
          id: string
          profileId: string
          slug: string
          title: string
          updatedAt: string
          uri: string
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          description: string
          id: string
          profileId: string
          slug: string
          title: string
          updatedAt: string
          uri: string
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          description?: string
          id?: string
          profileId?: string
          slug?: string
          title?: string
          updatedAt?: string
          uri?: string
        }
        Relationships: [
          {
            foreignKeyName: "ProfileLink_profileId_fkey"
            columns: ["profileId"]
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          }
        ]
      }
      ProfileMembership: {
        Row: {
          createdAt: string
          deletedAt: string | null
          id: string
          profileId: string
          role: Database["public"]["Enums"]["ProfileMembershipRole"]
          updatedAt: string
          userId: string
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          id: string
          profileId: string
          role: Database["public"]["Enums"]["ProfileMembershipRole"]
          updatedAt: string
          userId: string
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          id?: string
          profileId?: string
          role?: Database["public"]["Enums"]["ProfileMembershipRole"]
          updatedAt?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "ProfileMembership_profileId_fkey"
            columns: ["profileId"]
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ProfileMembership_userId_fkey"
            columns: ["userId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      ProfilePage: {
        Row: {
          content: string
          createdAt: string
          deletedAt: string | null
          id: string
          profileId: string
          publishedAt: string | null
          slug: string
          title: string
          updatedAt: string
        }
        Insert: {
          content: string
          createdAt?: string
          deletedAt?: string | null
          id: string
          profileId: string
          publishedAt?: string | null
          slug: string
          title: string
          updatedAt: string
        }
        Update: {
          content?: string
          createdAt?: string
          deletedAt?: string | null
          id?: string
          profileId?: string
          publishedAt?: string | null
          slug?: string
          title?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "ProfilePage_profileId_fkey"
            columns: ["profileId"]
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          }
        ]
      }
      User: {
        Row: {
          bio: string
          createdAt: string
          deletedAt: string | null
          email: string
          fullname: string
          githubHandle: string
          id: string
          lastSeenAt: string | null
          profilePictureUri: string
          twitterHandle: string
          updatedAt: string
        }
        Insert: {
          bio: string
          createdAt?: string
          deletedAt?: string | null
          email: string
          fullname: string
          githubHandle: string
          id: string
          lastSeenAt?: string | null
          profilePictureUri: string
          twitterHandle: string
          updatedAt: string
        }
        Update: {
          bio?: string
          createdAt?: string
          deletedAt?: string | null
          email?: string
          fullname?: string
          githubHandle?: string
          id?: string
          lastSeenAt?: string | null
          profilePictureUri?: string
          twitterHandle?: string
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
      ProfileMembershipRole:
        | "Owner"
        | "Lead"
        | "Maintainer"
        | "Contributor"
        | "Sponsor"
        | "Follower"
      ProfileType: "Individual" | "Organization" | "Product"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
