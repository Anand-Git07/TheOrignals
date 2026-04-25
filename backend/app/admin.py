from django.contrib import admin
from .models import Category, Product, ProductImage, Size, ProductVariant, Order, OrderItem, Cart, CartItem, Wishlist

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(ProductImage)
admin.site.register(Size)
admin.site.register(ProductVariant)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(Wishlist)