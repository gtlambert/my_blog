# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0009_auto_20151101_0013'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='meta_description',
            field=models.CharField(max_length=500, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='post',
            name='meta_keywords',
            field=models.CharField(max_length=200, null=True, blank=True),
        ),
    ]
