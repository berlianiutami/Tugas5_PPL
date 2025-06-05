import type { HttpContext } from '@adonisjs/core/http'
import Comic from '#models/comic'

export default class ComicsController {  // Nama class harus ComicsController
  // 1. Lihat daftar komik
  public async index({ response }: HttpContext) {
    const comics = await Comic.all()
    return response.json(comics)
  }

  // 2. Tambah komik
  public async store({ request, response }: HttpContext) {
    const data = request.only(['title', 'year', 'author', 'genre', 'pages', 'rating', 'summary'])
    const comic = await Comic.create(data)
    return response.status(201).json(comic)
  }

  // 3. Lihat detail komik berdasarkan judul
  public async show({ params, response }: HttpContext) {
    const comic = await Comic.query().where('title', 'LIKE', `%${params.title}%`)
    return comic.length > 0
      ? response.json(comic)
      : response.status(404).json({ message: 'Comic not found' })
  }

  // 4. Update komik berdasarkan judul
  public async update({ params, request, response }: HttpContext) {
    const comic = await Comic.findBy('title', params.title)
    if (!comic) return response.status(404).json({ message: 'Comic not found' })

    comic.merge(request.only(['year', 'author', 'genre', 'pages', 'rating', 'summary']))
    await comic.save()

    return response.json({ message: 'Comic updated successfully', comic })
  }

  // 5. Hapus komik berdasarkan judul
  public async destroy({ params, response }: HttpContext) {
    const comic = await Comic.findBy('title', params.title)
    if (!comic) return response.status(404).json({ message: 'Comic not found' })

    await comic.delete()
    return response.json({ message: 'Comic deleted successfully' })
  }

  // 6. Lihat komik dengan rating tertinggi
  public async highestRated({ response }: HttpContext) {
    const comic = await Comic.query().orderBy('rating', 'desc').first()
    return comic
      ? response.json(comic)
      : response.status(404).json({ message: 'No comics found' })
  }
}