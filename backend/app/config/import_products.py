import os
import django
import csv
from app.models import Category, Product, ProductImage

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'originals.settings')
django.setup()


print("🚀 Script started")

with open('products.csv', newline='') as file:
    reader = csv.DictReader(file)

    count = 0

    for row in reader:
        print("Reading row:", row)  # 🔥 debug

        category = Category.objects.get(name=row['category'])

        product = Product.objects.create(
            name=row['name'],
            description=row['description'],
            price=row['price'],
            category=category,
            is_trending=row['is_trending'] == 'True',
            rating=row['rating']
        )

        ProductImage.objects.create(
            product=product,
            image_url=row['image_url']
        )

        count += 1

print(f"✅ Inserted {count} products")