# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0003_auto_20151027_2225'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='custom_closing_body_content',
            new_name='custom_closing_body_script',
        ),
        migrations.RenameField(
            model_name='post',
            old_name='custom_head_content',
            new_name='custom_css',
        ),
    ]
