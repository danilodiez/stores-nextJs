import api from '../../api'

export default async function handler(req, res) {
  const stores = await api.list()

  return res.json(stores)
}
