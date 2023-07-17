import axios from 'axios'
export interface Root {
  id: number
  username: string
  password: string
  profilePicture: string
  followers: number
  following: number
  posts: Post[]
}

export interface Post {
  id: number
  image: string
  description: string
  likes: number
  date: string
  comments: Comment[]
}

export interface Comment {
  username: string
  id: number
  comment: string
  date: string
}

export async function getPosts(): Promise<Root[]> {
  const { data } = await axios.get('http://localhost:3000/users')
  return data
}

export interface UserCredentials {
  id: string
  username: string
  email: string
  fullName: string
  password: string | number
}

export async function login({
  id,
  username,
  password,
  email,
  fullName,
}: UserCredentials) {
  const { data } = await axios.post('http://localhost:3001/users', {
    username,
    id,
    password,
    email,
    fullName,
  })
  console.log(data)
  return data
}
