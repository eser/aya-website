export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Language: {
        Row: {
          code: string
          englishName: string
          flag: string
          name: string
          order: number
        }
        Insert: {
          code: string
          englishName: string
          flag: string
          name: string
          order: number
        }
        Update: {
          code?: string
          englishName?: string
          flag?: string
          name?: string
          order?: number
        }
        Relationships: []
      }
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
          id: string
          profilePictureUri: string | null
          showMembers: boolean
          showStories: boolean
          slug: string
          type: Database["public"]["Enums"]["ProfileType"]
          updatedAt: string | null
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          id: string
          profilePictureUri?: string | null
          showMembers?: boolean
          showStories?: boolean
          slug: string
          type: Database["public"]["Enums"]["ProfileType"]
          updatedAt?: string | null
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          id?: string
          profilePictureUri?: string | null
          showMembers?: boolean
          showStories?: boolean
          slug?: string
          type?: Database["public"]["Enums"]["ProfileType"]
          updatedAt?: string | null
        }
        Relationships: []
      }
      ProfileLink: {
        Row: {
          createdAt: string
          deletedAt: string | null
          iconKey: string | null
          iconSet: string | null
          id: string
          order: number
          profileId: string
          slug: string
          updatedAt: string | null
          uri: string
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          iconKey?: string | null
          iconSet?: string | null
          id: string
          order: number
          profileId: string
          slug: string
          updatedAt?: string | null
          uri: string
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          iconKey?: string | null
          iconSet?: string | null
          id?: string
          order?: number
          profileId?: string
          slug?: string
          updatedAt?: string | null
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
      ProfileLinkTx: {
        Row: {
          createdAt: string
          deletedAt: string | null
          descriptionTx: string
          id: string
          languageCode: string
          profileLinkId: string
          titleTx: string
          updatedAt: string | null
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          descriptionTx: string
          id: string
          languageCode: string
          profileLinkId: string
          titleTx: string
          updatedAt?: string | null
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          descriptionTx?: string
          id?: string
          languageCode?: string
          profileLinkId?: string
          titleTx?: string
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ProfileLinkTx_languageCode_fkey"
            columns: ["languageCode"]
            referencedRelation: "Language"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "ProfileLinkTx_profileLinkId_fkey"
            columns: ["profileLinkId"]
            referencedRelation: "ProfileLink"
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
          updatedAt: string | null
          userId: string
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          id: string
          profileId: string
          role: Database["public"]["Enums"]["ProfileMembershipRole"]
          updatedAt?: string | null
          userId: string
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          id?: string
          profileId?: string
          role?: Database["public"]["Enums"]["ProfileMembershipRole"]
          updatedAt?: string | null
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
          createdAt: string
          deletedAt: string | null
          id: string
          order: number
          profileId: string
          publishedAt: string | null
          slug: string
          updatedAt: string | null
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          id: string
          order: number
          profileId: string
          publishedAt?: string | null
          slug: string
          updatedAt?: string | null
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          id?: string
          order?: number
          profileId?: string
          publishedAt?: string | null
          slug?: string
          updatedAt?: string | null
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
      ProfilePageTx: {
        Row: {
          contentTx: string
          createdAt: string
          deletedAt: string | null
          id: string
          languageCode: string
          profilePageId: string
          titleTx: string
          updatedAt: string | null
        }
        Insert: {
          contentTx: string
          createdAt?: string
          deletedAt?: string | null
          id: string
          languageCode: string
          profilePageId: string
          titleTx: string
          updatedAt?: string | null
        }
        Update: {
          contentTx?: string
          createdAt?: string
          deletedAt?: string | null
          id?: string
          languageCode?: string
          profilePageId?: string
          titleTx?: string
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ProfilePageTx_languageCode_fkey"
            columns: ["languageCode"]
            referencedRelation: "Language"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "ProfilePageTx_profilePageId_fkey"
            columns: ["profilePageId"]
            referencedRelation: "ProfilePage"
            referencedColumns: ["id"]
          }
        ]
      }
      ProfileStory: {
        Row: {
          category: Database["public"]["Enums"]["ProfileStoryCategory"]
          createdAt: string
          deletedAt: string | null
          id: string
          isFeatured: boolean
          profileId: string
          publishedAt: string | null
          slug: string
          updatedAt: string | null
        }
        Insert: {
          category: Database["public"]["Enums"]["ProfileStoryCategory"]
          createdAt?: string
          deletedAt?: string | null
          id: string
          isFeatured?: boolean
          profileId: string
          publishedAt?: string | null
          slug: string
          updatedAt?: string | null
        }
        Update: {
          category?: Database["public"]["Enums"]["ProfileStoryCategory"]
          createdAt?: string
          deletedAt?: string | null
          id?: string
          isFeatured?: boolean
          profileId?: string
          publishedAt?: string | null
          slug?: string
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ProfileStory_profileId_fkey"
            columns: ["profileId"]
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          }
        ]
      }
      ProfileStoryTx: {
        Row: {
          contentTx: string
          createdAt: string
          deletedAt: string | null
          id: string
          languageCode: string
          profileStoryId: string
          titleTx: string
          updatedAt: string | null
        }
        Insert: {
          contentTx: string
          createdAt?: string
          deletedAt?: string | null
          id: string
          languageCode: string
          profileStoryId: string
          titleTx: string
          updatedAt?: string | null
        }
        Update: {
          contentTx?: string
          createdAt?: string
          deletedAt?: string | null
          id?: string
          languageCode?: string
          profileStoryId?: string
          titleTx?: string
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ProfileStoryTx_languageCode_fkey"
            columns: ["languageCode"]
            referencedRelation: "Language"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "ProfileStoryTx_profileStoryId_fkey"
            columns: ["profileStoryId"]
            referencedRelation: "ProfileStory"
            referencedColumns: ["id"]
          }
        ]
      }
      ProfileTx: {
        Row: {
          createdAt: string
          deletedAt: string | null
          descriptionTx: string
          id: string
          languageCode: string
          profileId: string
          titleTx: string
          updatedAt: string | null
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          descriptionTx: string
          id: string
          languageCode: string
          profileId: string
          titleTx: string
          updatedAt?: string | null
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          descriptionTx?: string
          id?: string
          languageCode?: string
          profileId?: string
          titleTx?: string
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ProfileTx_languageCode_fkey"
            columns: ["languageCode"]
            referencedRelation: "Language"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "ProfileTx_profileId_fkey"
            columns: ["profileId"]
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          }
        ]
      }
      User: {
        Row: {
          createdAt: string
          deletedAt: string | null
          email: string
          githubHandle: string
          id: string
          lastSeenAt: string | null
          profilePictureUri: string | null
          twitterHandle: string
          updatedAt: string | null
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          email: string
          githubHandle: string
          id: string
          lastSeenAt?: string | null
          profilePictureUri?: string | null
          twitterHandle: string
          updatedAt?: string | null
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          email?: string
          githubHandle?: string
          id?: string
          lastSeenAt?: string | null
          profilePictureUri?: string | null
          twitterHandle?: string
          updatedAt?: string | null
        }
        Relationships: []
      }
      UserTx: {
        Row: {
          bioTx: string
          createdAt: string
          deletedAt: string | null
          fullnameTx: string
          id: string
          languageCode: string
          updatedAt: string | null
          userId: string
        }
        Insert: {
          bioTx: string
          createdAt?: string
          deletedAt?: string | null
          fullnameTx: string
          id: string
          languageCode: string
          updatedAt?: string | null
          userId: string
        }
        Update: {
          bioTx?: string
          createdAt?: string
          deletedAt?: string | null
          fullnameTx?: string
          id?: string
          languageCode?: string
          updatedAt?: string | null
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "UserTx_languageCode_fkey"
            columns: ["languageCode"]
            referencedRelation: "Language"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "UserTx_userId_fkey"
            columns: ["userId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
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
      ProfileStoryCategory: "Status" | "Announcement" | "News"
      ProfileType: "Individual" | "Organization" | "Product" | "Venue"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
