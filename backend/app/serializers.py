from rest_framework import serializers
from .models import Product, ProductImage, ProductVariant


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['id', 'image_url']


class ProductVariantSerializer(serializers.ModelSerializer):
    size = serializers.StringRelatedField()

    class Meta:
        model = ProductVariant
        fields = ['id', 'size', 'stock']


class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)
    variants = ProductVariantSerializer(many=True, read_only=True)
    category = serializers.StringRelatedField()

    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'description',
            'price',
            'category',
            'is_trending',
            'created_at',
            'images',
            'variants',
        ]