# Generated by Django 3.1.7 on 2021-03-18 12:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0002_auto_20210318_1716'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='image',
            field=models.ImageField(default='', upload_to='blogs/images'),
        ),
    ]
