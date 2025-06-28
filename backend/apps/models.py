from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class BlogCategory(models.Model):
    """ブログカテゴリ"""
    name = models.CharField('カテゴリ名', max_length=100, unique=True)
    created_at = models.DateTimeField('作成日時', auto_now_add=True)
    updated_at = models.DateTimeField('更新日時', auto_now=True)

    class Meta:
        verbose_name = 'ブログカテゴリ'
        verbose_name_plural = 'ブログカテゴリ'

    def __str__(self):
        return self.name


class BlogPost(models.Model):
    """ブログ記事"""
    title = models.CharField('タイトル', max_length=200)
    body = models.TextField('本文')
    author = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='著者')
    category = models.ForeignKey(BlogCategory, on_delete=models.CASCADE, verbose_name='カテゴリ')
    is_published = models.BooleanField('公開', default=False)
    created_at = models.DateTimeField('作成日時', auto_now_add=True)
    updated_at = models.DateTimeField('更新日時', auto_now=True)

    class Meta:
        verbose_name = 'ブログ記事'
        verbose_name_plural = 'ブログ記事'
        ordering = ['-created_at']

    def __str__(self):
        return self.title


class WorkCategory(models.Model):
    """作品カテゴリ"""
    name = models.CharField('カテゴリ名', max_length=100, unique=True)
    created_at = models.DateTimeField('作成日時', auto_now_add=True)
    updated_at = models.DateTimeField('更新日時', auto_now=True)

    class Meta:
        verbose_name = '作品カテゴリ'
        verbose_name_plural = '作品カテゴリ'

    def __str__(self):
        return self.name


class Work(models.Model):
    """作品"""
    title = models.CharField('タイトル', max_length=200)
    summary = models.TextField('概要', max_length=500)
    description = models.TextField('詳細説明')
    category = models.ForeignKey(WorkCategory, on_delete=models.CASCADE, verbose_name='カテゴリ')
    external_url = models.URLField('外部リンク', blank=True, null=True)
    published_at = models.DateTimeField('公開日', default=timezone.now)
    created_at = models.DateTimeField('作成日時', auto_now_add=True)
    updated_at = models.DateTimeField('更新日時', auto_now=True)

    class Meta:
        verbose_name = '作品'
        verbose_name_plural = '作品'
        ordering = ['-published_at']

    def __str__(self):
        return self.title


class WorkImage(models.Model):
    """作品画像"""
    work = models.ForeignKey(Work, on_delete=models.CASCADE, related_name='images', verbose_name='作品')
    image = models.ImageField('画像', upload_to='works/')
    order = models.PositiveIntegerField('並び順', default=0)
    created_at = models.DateTimeField('作成日時', auto_now_add=True)

    class Meta:
        verbose_name = '作品画像'
        verbose_name_plural = '作品画像'
        ordering = ['order', 'created_at']

    def __str__(self):
        return f"{self.work.title} - 画像{self.order}"


class Contact(models.Model):
    """お問い合わせ"""
    name = models.CharField('名前', max_length=100)
    email = models.EmailField('メールアドレス')
    message = models.TextField('メッセージ')
    created_at = models.DateTimeField('送信日時', auto_now_add=True)

    class Meta:
        verbose_name = 'お問い合わせ'
        verbose_name_plural = 'お問い合わせ'
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.created_at.strftime('%Y-%m-%d %H:%M')}"
