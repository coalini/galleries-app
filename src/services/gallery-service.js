import http from './http-service'

class GalleryService {
  getAll(page = 1, term = '') {
    return http.get('all-galleries', { 
      params: {
        page,
        term
      }
    })
    .then(({ data }) => data.galleries)
  }

  getUserGalleries(id, page = 1, term = '') {
    return http.get(`all-galleries/${id}`, {
      params: {
        page,
        term
      }
    })
    .then(({ data }) => data.galleries)
  }

  getGallery(id) {
    return http.get(`galleries/${id}`)
    .then(({ data }) => data)
  }

  createGallery({ title, description, images }) {
    return http.post('galleries', {
      title,
      description,
      images
    })
  }

  editGallery(id, { title, description, images }) {
    return http.put(`galleries/${id}`, {
      title,
      description,
      images
    })
  }

  deleteGallery(id) {
    return http.delete(`galleries/${id}`)
  }
}

const galleryService = new GalleryService()

export default galleryService