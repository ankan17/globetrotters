# Generated by Django 3.0.5 on 2020-05-14 09:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0004_auto_20200514_0848'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='avatar',
            new_name='photo',
        ),
    ]