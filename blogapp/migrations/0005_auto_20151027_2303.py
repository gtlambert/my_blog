# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0004_auto_20151027_2236'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='custom_closing_body_script',
            new_name='custom_closing_body_script_reference',
        ),
    ]
