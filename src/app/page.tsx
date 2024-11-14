import { auth0 } from "@/lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();
  if (!session) {
    return (
      <main>
        <a href="/auth/login">Log in</a>
      </main>
    );
  }

  return (
    <main>
      <h1>Welcome, {session.user.name}!</h1>
    </main>
  );

}
