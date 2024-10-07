from django.urls import path
from .views import ArticleDetail, ArticleListCreate
from .views import ExcelView

urlpatterns = [
    path('article/', ArticleListCreate.as_view(), name='article-list-create'),
    path('article/<int:pk>/', ArticleDetail.as_view(), name='article-detail'),
    path('backup/', ExcelView.as_view(), name='backup'),
]