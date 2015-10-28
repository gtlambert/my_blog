# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0005_auto_20151027_2303'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='custom_closing_body_script',
            field=models.TextField(max_length=10000, null=True, blank=True),
        ),
    ]
