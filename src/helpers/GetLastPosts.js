import axios from 'axios'
export const getLastPosts = (userid) => {
  const options = {
    method: 'GET',
    url: 'https://instagram47.p.rapidapi.com/public_user_posts',
    params: { userid: userid },
    headers: {
      'x-rapidapi-host': 'instagram47.p.rapidapi.com',
      'x-rapidapi-key': '9549b8b57emshea1a35415369b29p1073aajsn19120953e5f2',
    },
  }
  const post = async () => {
    const resp = await axios.request(options),
      data = await resp.data
    return data
  }
  return post()
}
