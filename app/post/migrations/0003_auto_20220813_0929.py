# Generated by Django 3.1.2 on 2022-08-13 09:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0002_auto_20220813_0915'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='authorId',
            field=models.PositiveBigIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='item',
            name='id',
            field=models.PositiveBigIntegerField(primary_key=True, serialize=False),
        ),
    ]
