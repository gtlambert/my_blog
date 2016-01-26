# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0010_auto_20160125_1717'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='languagecategory',
            name='parent_language',
        ),
        migrations.RemoveField(
            model_name='languagemodule',
            name='parent_language_category',
        ),
        migrations.RemoveField(
            model_name='project',
            name='category',
        ),
        migrations.DeleteModel(
            name='Language',
        ),
        migrations.DeleteModel(
            name='LanguageCategory',
        ),
        migrations.DeleteModel(
            name='LanguageModule',
        ),
        migrations.DeleteModel(
            name='Project',
        ),
        migrations.DeleteModel(
            name='ProjectCategory',
        ),
    ]
