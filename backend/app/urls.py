from django.urls import path
from .views import  ProductListView , ProductDetailView

urlpatterns = [
    # path('', home),  # 👈 THIS FIXES YOUR ERROR
    path('products/', ProductListView.as_view()),
    path('products/<int:pk>/', ProductDetailView.as_view()),
]