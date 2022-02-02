import axios from 'axios'
export const getUserId = (queryString) => {
  const options = {
    method: 'GET',
    url: 'https://instagram47.p.rapidapi.com/get_user_id',
    params: { username: queryString },
    headers: {
      'x-rapidapi-host': 'instagram47.p.rapidapi.com',
      'x-rapidapi-key': '9549b8b57emshea1a35415369b29p1073aajsn19120953e5f2',
    },
  }
  const test = async () => {
    const res = await axios.request(options),
      data = await res.data
    return data
  }

  return test()
}
