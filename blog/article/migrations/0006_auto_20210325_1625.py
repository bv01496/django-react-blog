# Generated by Django 3.1.7 on 2021-03-25 10:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0005_article_is_trending'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='article',
            options={'ordering': ['created']},
        ),
        migrations.AlterModelOptions(
            name='comment',
            options={'ordering': ['created']},
        ),
        migrations.AddField(
            model_name='comment',
            name='created',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]