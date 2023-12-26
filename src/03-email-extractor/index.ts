interface User {
  id: number
  name: string
  email: string
  age: number
}

export function extractEmails(users: (User | null | undefined)[]): string[] {
  const uniqueEmails = new Set<string>()

  users
    .filter((user) => user && user.email)
    .forEach((user) => {
      if (user) {
        uniqueEmails.add(user.email)
      }
    })

  const emails = Array.from(uniqueEmails)

  return emails
}
