from rest_framework import serializers
from .models import BlogCategory, BlogPost, WorkCategory, Work, WorkImage, Contact


class BlogCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogCategory
        fields = ['id', 'name', 'created_at']


class BlogPostSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    category = BlogCategorySerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'body', 'author', 'category', 'category_id', 
                 'is_published', 'created_at', 'updated_at']
        read_only_fields = ['author', 'created_at', 'updated_at']


class WorkCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkCategory
        fields = ['id', 'name', 'created_at']


class WorkImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkImage
        fields = ['id', 'image', 'order', 'created_at']


class WorkSerializer(serializers.ModelSerializer):
    category = WorkCategorySerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)
    images = WorkImageSerializer(many=True, read_only=True)

    class Meta:
        model = Work
        fields = ['id', 'title', 'summary', 'description', 'category', 'category_id',
                 'external_url', 'published_at', 'images', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']


class WorkImageUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkImage
        fields = ['image', 'order']


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'message', 'created_at']
        read_only_fields = ['created_at'] 