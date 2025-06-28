from django.shortcuts import render
from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import BlogCategory, BlogPost, WorkCategory, Work, WorkImage, Contact
from .serializers import (
    BlogCategorySerializer, BlogPostSerializer, WorkCategorySerializer,
    WorkSerializer, WorkImageUploadSerializer, ContactSerializer
)


class BlogCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """ブログカテゴリAPI"""
    queryset = BlogCategory.objects.all()
    serializer_class = BlogCategorySerializer
    permission_classes = [permissions.AllowAny]


class BlogPostViewSet(viewsets.ModelViewSet):
    """ブログ記事API"""
    serializer_class = BlogPostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        if self.request.user.is_authenticated and self.request.user.is_staff:
            return BlogPost.objects.all()
        return BlogPost.objects.filter(is_published=True)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class WorkCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """作品カテゴリAPI"""
    queryset = WorkCategory.objects.all()
    serializer_class = WorkCategorySerializer
    permission_classes = [permissions.AllowAny]


class WorkViewSet(viewsets.ModelViewSet):
    """作品API"""
    serializer_class = WorkSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return Work.objects.all()

    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAdminUser])
    def upload_image(self, request, pk=None):
        """作品画像アップロード"""
        work = self.get_object()
        serializer = WorkImageUploadSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save(work=work)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ContactViewSet(viewsets.ModelViewSet):
    """お問い合わせAPI"""
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [permissions.AllowAny]
    http_method_names = ['post']  # POSTのみ許可

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        contact = serializer.save()
        
        # メール送信
        try:
            send_mail(
                subject=f'お問い合わせ: {contact.name}',
                message=f'''
名前: {contact.name}
メール: {contact.email}
メッセージ:
{contact.message}
                ''',
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.ADMIN_EMAIL],
                fail_silently=False,
            )
        except Exception as e:
            # メール送信エラーでもDB保存は成功させる
            pass
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)
