import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";



const base_url = "https://reqres.in/api/user"


interface Settings {
  id: number,
  name: string,
  year: number,
  pantone_value: string
}



export default async function Home() {
  const response = await fetch(base_url)
  const userss = await response.json()
  const users: Settings[] = userss.data

  return (
    <>
      <Navbar />
      {users.map((user) => {
        return (
          <Card key={user.id} >
            <h1>{user.name}</h1>
            <h1>{user.year}</h1>
          </Card>
        )
      })}
    </>
  );
}
