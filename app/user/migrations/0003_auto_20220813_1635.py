# Generated by Django 3.1.2 on 2022-08-13 16:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_auto_20220813_1628'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='UserItem',
            new_name='User',
        ),
    ]
