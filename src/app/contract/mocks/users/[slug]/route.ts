import { faker } from "@faker-js/faker";

type RequestInfo = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_req: Request, info: RequestInfo): Promise<Response> {
  const params = await info.params;

  const user = {
    id: faker.string.uuid(),
    slug: params.slug,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    company: faker.company.name(),
    avatar: faker.image.avatar(),
  };

  return Response.json(user, {
    status: 200,
  });
}
