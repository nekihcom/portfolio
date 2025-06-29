from django.contrib import admin
from .models import BlogCategory, BlogPost, WorkCategory, Work, WorkImage, Contact


@admin.register(BlogCategory)
class BlogCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'created_at']
    search_fields = ['name']
    ordering = ['name']


@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'category', 'is_published', 'created_at']
    list_filter = ['is_published', 'category', 'created_at']
    search_fields = ['title', 'body']
    list_editable = ['is_published']
    ordering = ['-created_at']


@admin.register(WorkCategory)
class WorkCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'created_at']
    search_fields = ['name']
    ordering = ['name']


@admin.register(Work)
class WorkAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'published_at', 'created_at']
    list_filter = ['category', 'published_at', 'created_at']
    search_fields = ['title', 'summary', 'description']
    ordering = ['-published_at']


@admin.register(WorkImage)
class WorkImageAdmin(admin.ModelAdmin):
    list_display = ['work', 'order', 'created_at']
    list_filter = ['work', 'created_at']
    ordering = ['work', 'order']


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'created_at']
    list_filter = ['created_at']
    search_fields = ['name', 'email', 'message']
    readonly_fields = ['created_at']
    ordering = ['-created_at']
