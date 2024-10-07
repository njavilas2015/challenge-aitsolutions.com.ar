from django.db import models

# Create your models here.
class Article(models.Model):
    code = models.CharField(max_length=200)
    description = models.TextField()
    price = models.BigIntegerField()

    def __str__(self):
        return self.code