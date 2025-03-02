import { useFetch as _useFetch } from '#app'

export default async function useFetch(url: string, params?: any) {
  const baseUri = 'http://113.44.81.153/music'

  try {
    const { data } = await _useFetch<{ code: number; result: any }>(
      baseUri + url,
      { params }
    )
    if (data.value?.code === 0) {
      return data.value.result
    }
  } catch (e) {
    console.log(e)
  }
}

export async function getRecommend() {
  return await useFetch('/api/getRecommend')
}
