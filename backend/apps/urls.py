from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    BlogCategoryViewSet, BlogPostViewSet, WorkCategoryViewSet,
    WorkViewSet, ContactViewSet
)

router = DefaultRouter()
router.register(r'blog-categories', BlogCategoryViewSet)
router.register(r'blogs', BlogPostViewSet, basename='blog')
router.register(r'work-categories', WorkCategoryViewSet)
router.register(r'works', WorkViewSet, basename='work')
router.register(r'contacts', ContactViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
] 