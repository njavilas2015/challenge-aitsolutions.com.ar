from rest_framework import status
from rest_framework.test import APITestCase
from .models import Article

class ArticleTests(APITestCase):
    
    def setUp(self):

        print(self)
        self.article_data = {
            'code': 'ABC123',
            'description': 'Hello my product',
            'price': 1300,
        }

    def test_create_article(self):
        response = self.client.post('/api/article/', self.article_data, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        self.assertEqual(Article.objects.count(), 1)

        self.assertEqual(Article.objects.get().code, 'ABC123')

    def test_get_articles(self):

        Article.objects.create(**self.article_data)

        response = self.client.get('/api/article/')

        self.assertEqual(response.status_code, status.HTTP_200_OK)

        self.assertEqual(len(response.data), 1)

    def test_update_article(self):

        article = Article.objects.create(**self.article_data)

        new_data = {'price': 1500 }

        response = self.client.patch(f'/api/article/{article.id}/', new_data, format='json')

        article.refresh_from_db()

        self.assertEqual(response.status_code, status.HTTP_200_OK)

        self.assertEqual(article.price, 1500)

    def test_delete_article(self):

        article = Article.objects.create(**self.article_data)

        response = self.client.delete(f'/api/article/{article.id}/')

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

        self.assertEqual(Article.objects.count(), 0)