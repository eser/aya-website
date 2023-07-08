import { type SupabaseClient } from "./supabase-client.ts";

const getSupabaseClientMock = () => {
  // const mockUser = {
  //   id: "123",
  //   aud: "authenticated",
  //   role: "authenticated",
  //   email: "",
  //   app_metadata: {
  //     provider: "email",
  //   },
  //   user_metadata: {
  //     full_name: "Test User",
  //   },
  //   created_at: "2021-03-01T00:00:00.000000Z",
  //   updated_at: "2021-03-01T00:00:00.000000Z",
  // };
  const mockUser = null;

  let insertedData: unknown = null;

  const mockSupabaseClient = {
    from: () => mockSupabaseClient,
    select: () => mockSupabaseClient,
    insert: (data: unknown) => {
      insertedData = data;
      return mockSupabaseClient;
    },
    update: () => mockSupabaseClient,
    delete: () => mockSupabaseClient,
    limit: () => mockSupabaseClient,
    maybeSingle: () => {
      return { data: insertedData };
    },
    auth: {
      getUser: () => Promise.resolve({ data: { user: mockUser } }),
      signIn: () => Promise.resolve({ data: mockUser, error: null }),
      signOut: () => Promise.resolve({ error: null }),
    },
  } as unknown as SupabaseClient;

  return mockSupabaseClient;
};

export { getSupabaseClientMock, type SupabaseClient };
