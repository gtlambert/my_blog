# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0002_auto_20151027_2223'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='custom_closing_body_content',
            field=models.TextField(max_length=10000, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='post',
            name='custom_head_content',
            field=models.TextField(max_length=10000, null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='intro',
            field=models.TextField(max_length=1000, null=True, blank=True),
        ),
    ]
