import { faker } from "@faker-js/faker";

export function GET(_req: Request): Promise<Response> {
  const users = Array.from({ length: 10 }, () => ({
    id: faker.string.uuid(),
    slug: faker.lorem.slug(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    company: faker.company.name(),
    avatar: faker.image.avatar(),
  }));

  return Promise.resolve(Response.json(users, {
    status: 200,
  }));
}
