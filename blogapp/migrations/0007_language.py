# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0006_post_custom_closing_body_script'),
    ]

    operations = [
        migrations.CreateModel(
            name='Language',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100)),
                ('libraries', models.TextField(max_length=10000)),
                ('start_date', models.DateField()),
                ('image_path', models.CharField(max_length=100)),
            ],
        ),
    ]
