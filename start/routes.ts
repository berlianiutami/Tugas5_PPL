import router from '@adonisjs/core/services/router'
import Comic from '#models/comic'

router.get('/', async () => {
  return { message: 'Hello, Comic API!' }
})

router.group(() => {
  // Get all comics
  router.get('/comics', async ({ response }) => {
    const comics = await Comic.all()
    return response.json(comics)
  })

  // Add comic
  router.post('/comics', async ({ request, response }) => {
    const data = request.only(['title', 'year', 'author', 'genre', 'pages', 'rating', 'summary'])
    const comic = await Comic.create(data)
    return response.status(201).json(comic)
  })

  // Get comic by title
  router.get('/comics/:title', async ({ params, response }) => {
    const comic = await Comic.query().where('title', 'LIKE', `%${params.title}%`)
    return comic.length > 0
      ? response.json(comic)
      : response.status(404).json({ message: 'Comic not found' })
  })

  // Update comic
  router.put('/comics/:title', async ({ params, request, response }) => {
    const comic = await Comic.findBy('title', params.title)
    if (!comic) return response.status(404).json({ message: 'Comic not found' })

    comic.merge(request.only(['year', 'author', 'genre', 'pages', 'rating', 'summary']))
    await comic.save()

    return response.json({ message: 'Comic updated successfully', comic })
  })

  // Delete comic
  router.delete('/comics/:title', async ({ params, response }) => {
    const comic = await Comic.findBy('title', params.title)
    if (!comic) return response.status(404).json({ message: 'Comic not found' })

    await comic.delete()
    return response.json({ message: 'Comic deleted successfully' })
  })

  // Highest rated
  router.get('/comics/highest-rated', async ({ response }) => {
    const comic = await Comic.query().orderBy('rating', 'desc').first()
    return comic
      ? response.json(comic)
      : response.status(404).json({ message: 'No comics found' })
  })
}).prefix('/api')